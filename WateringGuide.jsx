// Oak Lodge Garden — WateringGuide.jsx
// A weather-aware daily round: where to look first, what can wait, and why.

const {
  useCallback: useCallback_WG,
  useEffect: useEffect_WG,
  useMemo: useMemo_WG,
  useState: useState_WG,
} = React;

const WG_WEATHER_CACHE_KEY = "oak-watering-weather-v1";
const WG_ROUTE_GROUPS = [
  { id: "back", eyebrow: "First round", title: "Back Garden", note: "Pots and baskets first, then the beds." },
  { id: "front", eyebrow: "Next stop", title: "Front Garden", note: "The front pot leads, followed by borders and trees." },
  { id: "house", eyebrow: "Under cover", title: "Houseplants", note: "Outdoor rain does not change indoor compost." },
];

function wgGetScheduleContext() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const todayIndex = day === 0 ? 6 : day - 1;
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
  const epoch = new Date(monday.getFullYear(), 0, 1);
  const diffDays = Math.floor((monday - epoch) / 86400000);
  return {
    todayIndex,
    fortnightOn: Math.floor(diffDays / 7) % 2 === 0,
    dateLabel: now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
  };
}

function wgRouteGroup(zoneKey, zone) {
  if (zone.environment === "indoor") return "house";
  if (zoneKey.indexOf("front") === 0) return "front";
  return "back";
}

function wgWeatherDescription(code) {
  if (code === 0) return "clear";
  if ([1, 2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "drizzly";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rainy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snowy";
  if ([95, 96, 99].includes(code)) return "stormy";
  return "changeable";
}

function wgBuildWeatherUrl(config) {
  const params = new URLSearchParams({
    latitude: String(config.location.latitude),
    longitude: String(config.location.longitude),
    current: "temperature_2m,weather_code,wind_speed_10m",
    hourly: "temperature_2m,precipitation,precipitation_probability,wind_gusts_10m",
    past_hours: "48",
    forecast_hours: "24",
    timezone: config.location.timezone,
    timeformat: "unixtime",
  });
  return "https://api.open-meteo.com/v1/forecast?" + params.toString();
}

function wgSummariseWeather(payload) {
  const current = payload && payload.current;
  const hourly = payload && payload.hourly;
  const required = hourly && [
    hourly.time,
    hourly.temperature_2m,
    hourly.precipitation,
    hourly.precipitation_probability,
    hourly.wind_gusts_10m,
  ];
  if (!current || !required || required.some((values) => !Array.isArray(values))) {
    throw new Error("Weather response was incomplete");
  }

  const length = hourly.time.length;
  if (!length || required.some((values) => values.length !== length)) {
    throw new Error("Weather response had mismatched time series");
  }

  const nowSeconds = Number(current.time) || Math.floor(Date.now() / 1000);
  const recentStart = nowSeconds - (48 * 60 * 60);
  const forecastEnd = nowSeconds + (24 * 60 * 60);
  let recentRainMm = 0;
  let forecastRainMm = 0;
  let forecastRainProbability = 0;
  let maxTempC = Number(current.temperature_2m);
  let maxGustKph = Number(current.wind_speed_10m) || 0;

  hourly.time.forEach((time, index) => {
    const timestamp = Number(time);
    const rain = Number(hourly.precipitation[index]) || 0;
    if (timestamp >= recentStart && timestamp <= nowSeconds) recentRainMm += rain;
    if (timestamp > nowSeconds && timestamp <= forecastEnd) {
      forecastRainMm += rain;
      forecastRainProbability = Math.max(
        forecastRainProbability,
        Number(hourly.precipitation_probability[index]) || 0
      );
      maxTempC = Math.max(maxTempC, Number(hourly.temperature_2m[index]) || -Infinity);
      maxGustKph = Math.max(maxGustKph, Number(hourly.wind_gusts_10m[index]) || 0);
    }
  });

  if (![recentRainMm, forecastRainMm, forecastRainProbability, maxTempC, maxGustKph].every(Number.isFinite)) {
    throw new Error("Weather response contained invalid values");
  }

  return {
    currentTempC: Number(current.temperature_2m),
    weatherCode: Number(current.weather_code),
    recentRainMm,
    forecastRainMm,
    forecastRainProbability,
    maxTempC,
    maxGustKph,
    observedAt: nowSeconds * 1000,
  };
}

function wgReadWeatherCache(config) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(WG_WEATHER_CACHE_KEY) || "null");
    if (!cached || !cached.savedAt || !cached.data) return null;
    if (Date.now() - cached.savedAt > config.weather.cacheMinutes * 60000) return null;
    return cached.data;
  } catch {
    return null;
  }
}

function wgWriteWeatherCache(data) {
  try {
    sessionStorage.setItem(WG_WEATHER_CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
  } catch {
    // Storage can be unavailable in private browsing; the guide still works.
  }
}

function wgRound(value, digits) {
  const power = Math.pow(10, digits || 0);
  return Math.round(value * power) / power;
}

function wgClassifyWeather(data, config) {
  if (!data) return { wet: false, hot: false, windy: false };
  return {
    wet: data.recentRainMm >= config.weather.recentRainMm,
    hot: data.maxTempC >= config.weather.heatC,
    windy: data.maxGustKph >= config.weather.gustKph,
  };
}

function wgApplyWeatherPriority({ normalDay, isIndoor, isPot }, conditions) {
  if (!isIndoor && !isPot && conditions.wet) {
    return { dueToday: false, condition: "recent-rain" };
  }
  if (!isIndoor && isPot && (conditions.hot || conditions.windy)) {
    return { dueToday: true, condition: "hot-windy" };
  }
  return { dueToday: normalDay, condition: "normal" };
}

function WateringGuide({ onOpenPlant }) {
  const ZONES = window.OAK.ZONES;
  const PLANT_BY_ID = window.OAK.PLANT_BY_ID || {};
  const WATER_BANDS_BY_ID = window.OAK.WATER_BANDS_BY_ID || {};
  const BAND_INFO = window.OAK.WATER_BAND_INFO || {};
  const POT_WATER_SIGNS = window.OAK.POT_WATER_SIGNS || {};
  const CONFIG = window.OAK.WATER_GUIDE_CONFIG;

  const schedule = useMemo_WG(() => wgGetScheduleContext(), []);
  const [weatherState, setWeatherState] = useState_WG({ status: "loading", data: null });
  const [weatherAttempt, setWeatherAttempt] = useState_WG(0);
  const [plantFilter, setPlantFilter] = useState_WG("");
  const [sortKey, setSortKey] = useState_WG("zone");
  const [sortDir, setSortDir] = useState_WG("asc");

  useEffect_WG(() => {
    let active = true;
    const controller = new AbortController();
    const cached = weatherAttempt === 0 ? wgReadWeatherCache(CONFIG) : null;
    if (cached) {
      setWeatherState({ status: "success", data: cached, cached: true });
      return () => controller.abort();
    }

    setWeatherState({ status: "loading", data: null });
    fetch(wgBuildWeatherUrl(CONFIG), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Weather service returned " + response.status);
        return response.json();
      })
      .then((payload) => {
        const data = wgSummariseWeather(payload);
        wgWriteWeatherCache(data);
        if (active) setWeatherState({ status: "success", data, cached: false });
      })
      .catch((error) => {
        if (error && error.name === "AbortError") return;
        if (active) setWeatherState({ status: "error", data: null });
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [weatherAttempt]);

  const retryWeather = useCallback_WG(() => {
    try { sessionStorage.removeItem(WG_WEATHER_CACHE_KEY); } catch {}
    setWeatherAttempt((value) => value + 1);
  }, []);

  const weatherConditions = useMemo_WG(() => {
    return wgClassifyWeather(weatherState.status === "success" ? weatherState.data : null, CONFIG);
  }, [weatherState]);

  const allPlants = useMemo_WG(() => {
    const items = [];
    Object.keys(ZONES).forEach((zoneKey) => {
      const zone = ZONES[zoneKey];
      Object.values(PLANT_BY_ID)
        .filter((record) => record.zoneKey === zoneKey)
        .forEach((record) => {
          const band = WATER_BANDS_BY_ID[record.plant.id];
          if (!band) return;
          items.push({
            zoneKey,
            zoneTitle: zone.environment === "indoor" ? `${zone.floor} · ${zone.room}` : zone.title,
            plantName: record.plant.name,
            plantId: record.plant.id,
            plant: record.plant,
            band,
            isPot: !!zone.isPot,
            isIndoor: zone.environment === "indoor",
            contextLabel: zone.environment === "indoor" ? "houseplant" : zone.isPot ? "container" : "bed",
          });
        });
    });
    return items.sort((a, b) =>
      a.zoneTitle.localeCompare(b.zoneTitle) || b.band - a.band || a.plantName.localeCompare(b.plantName)
    );
  }, []);

  const zoneRows = useMemo_WG(() => {
    const rows = [];
    Object.keys(ZONES).forEach((zoneKey) => {
      const zone = ZONES[zoneKey];
      const plants = allPlants.filter((item) => item.zoneKey === zoneKey);
      if (!plants.length) return;

      const maxBand = Math.max(...plants.map((item) => item.band));
      const minBand = Math.min(...plants.map((item) => item.band));
      const info = BAND_INFO[maxBand];
      const normalDay = maxBand === 2
        ? schedule.fortnightOn && !!info.days[schedule.todayIndex]
        : !!info.days[schedule.todayIndex];
      const isIndoor = zone.environment === "indoor";
      const isOutdoorPot = !!zone.isPot && !isIndoor;
      const weatherPriority = wgApplyWeatherPriority(
        { normalDay, isIndoor, isPot: !!zone.isPot },
        weatherConditions
      );

      const drierNeighbours = plants.filter((item) =>
        (zone.isPot ? item.band <= 2 && maxBand >= 4 : item.band === 1 && maxBand >= 3)
      );
      const highestPriorityPlants = plants.filter((item) => item.band === maxBand);

      rows.push({
        zoneKey,
        zone,
        plants,
        maxBand,
        minBand,
        dueToday: weatherPriority.dueToday,
        condition: weatherPriority.condition,
        routeGroup: wgRouteGroup(zoneKey, zone),
        isIndoor,
        isOutdoorPot,
        drierNeighbours,
        highestPriorityPlants,
        displayTitle: isIndoor ? `${zone.floor} · ${zone.room}` : zone.title,
      });
    });

    return rows.sort((a, b) =>
      Number(b.isOutdoorPot) - Number(a.isOutdoorPot)
      || b.maxBand - a.maxBand
      || a.displayTitle.localeCompare(b.displayTitle)
    );
  }, [allPlants, weatherConditions]);

  const dueRows = useMemo_WG(() => zoneRows.filter((row) => row.dueToday), [zoneRows]);
  const waitingRows = useMemo_WG(() => zoneRows.filter((row) => !row.dueToday), [zoneRows]);

  const referenceRows = useMemo_WG(() => {
    const q = plantFilter.trim().toLowerCase();
    const filtered = allPlants.filter((item) => !q
      || item.plantName.toLowerCase().includes(q)
      || item.zoneTitle.toLowerCase().includes(q)
      || item.contextLabel.includes(q));
    return [...filtered].sort((a, b) => {
      let comparison;
      if (sortKey === "plant") comparison = a.plantName.localeCompare(b.plantName);
      else if (sortKey === "frequency") comparison = a.band - b.band || a.zoneTitle.localeCompare(b.zoneTitle);
      else comparison = a.zoneTitle.localeCompare(b.zoneTitle) || b.band - a.band || a.plantName.localeCompare(b.plantName);
      return sortDir === "asc" ? comparison : -comparison;
    });
  }, [allPlants, plantFilter, sortKey, sortDir]);

  const handleSort = (key) => {
    if (sortKey === key) setSortDir((direction) => direction === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const handlePlantClick = (zoneKey, plantId, plantName) => {
    onOpenPlant({ zoneKey, plantId, plantName, fromWatering: true });
  };

  const priorityCopy = (row) => {
    if (row.condition === "recent-rain") {
      return {
        label: "Can wait after rain",
        action: "Recent rain has lowered this bed’s priority. Only inspect it if a plant looks stressed or the root zone stayed sheltered.",
      };
    }
    if (row.condition === "hot-windy") {
      return {
        label: "Check first",
        action: "Heat or wind can dry this container quickly. Lift it or test below the surface before deciding whether to water.",
      };
    }
    if (row.isIndoor) {
      return {
        label: row.dueToday ? "Check today" : BAND_INFO[row.maxBand].label,
        action: "Feel into the compost before watering, then empty the cachepot so the roots are not left standing in water.",
      };
    }
    if (row.zone.isPot) {
      return {
        label: row.dueToday ? "Check today" : BAND_INFO[row.maxBand].label,
        action: "Lift the container or test the compost below the surface. Water only when it feels light or dry at root level.",
      };
    }
    return {
      label: row.dueToday ? "Check today" : BAND_INFO[row.maxBand].label,
      action: "Check 5–15cm down near the roots before deciding. If it is dry, soak deeply rather than sprinkling the surface.",
    };
  };

  const renderPlantDetail = (item) => {
    const waterSigns = item.plant.profile && item.plant.profile.waterSigns;
    return (
      <li key={item.plantId} className="wg-card-plant">
        <div className="wg-card-plant-head">
          <button
            type="button"
            className="wg-plant-link"
            onClick={() => handlePlantClick(item.zoneKey, item.plantId, item.plantName)}
          >
            {item.plantName}
          </button>
          <span className={"wg-band-chip wg-band-" + item.band}>{BAND_INFO[item.band].chip}</span>
        </div>
        {waterSigns && (
          <div className="wg-plant-signs">
            <p><strong>When dry:</strong> {waterSigns.under}</p>
            <p><strong>When too wet:</strong> {waterSigns.over}</p>
          </div>
        )}
      </li>
    );
  };

  const renderZoneCard = (row, waiting) => {
    const copy = priorityCopy(row);
    const potSigns = row.zone.isPot ? POT_WATER_SIGNS[row.zone.plantKey] : null;
    const exceptionSubject = row.drierNeighbours.length > 3
      ? `${row.drierNeighbours.length} drought-tolerant plants`
      : row.drierNeighbours.map((item) => item.plantName).join(", ");
    const exceptionVerb = row.drierNeighbours.length === 1 ? "prefers" : "prefer";
    return (
      <article
        key={row.zoneKey}
        className={"wg-route-card" + (waiting ? " is-waiting" : "") }
        data-zone-key={row.zoneKey}
        data-route-group={row.routeGroup}
        data-is-pot={row.isOutdoorPot ? "true" : "false"}
      >
        <div className="wg-card-main">
          <div className="wg-card-heading">
            <div>
              <div className="t-mono wg-card-place">{row.zone.where}</div>
              <h3 className="t-hand wg-card-title">{row.displayTitle}</h3>
            </div>
            <span className={"wg-priority-badge wg-priority-" + row.maxBand}>{copy.label}</span>
          </div>
          <p className="wg-card-action">{copy.action}</p>

          {row.drierNeighbours.length > 0 && (
            <aside className="wg-exception-note">
              <span className="t-stamp">Treat separately</span>
              <p>
                {exceptionSubject}
                {row.zone.isPot
                  ? ` ${exceptionVerb} drier compost than the thirstier planting. Judge the whole pot carefully.`
                  : " can stay wet while the surrounding bed dries. Check these roots individually."}
              </p>
            </aside>
          )}
        </div>

        <details className="wg-card-details">
          <summary>
            <span>Moisture signs &amp; plant notes</span>
            <span className="t-mono">{row.plants.length} {row.plants.length === 1 ? "plant" : "plants"}</span>
          </summary>
          <div className="wg-card-detail-body">
            {potSigns && (
              <div className="wg-container-signs">
                <div>
                  <div className="t-stamp">When the container is dry</div>
                  <p>{potSigns.under}</p>
                </div>
                <div>
                  <div className="t-stamp">When it is too wet</div>
                  <p>{potSigns.over}</p>
                </div>
              </div>
            )}
            <ul className="wg-card-plant-list">
              {row.plants.map(renderPlantDetail)}
            </ul>
          </div>
        </details>
      </article>
    );
  };

  const renderWeather = () => {
    if (weatherState.status === "loading") {
      return (
        <div className="wg-weather-copy">
          <div className="t-stamp">Bromsgrove weather</div>
          <strong>Checking recent rain, heat and wind…</strong>
          <span>The normal watering schedule is ready while this loads.</span>
        </div>
      );
    }
    if (weatherState.status === "error") {
      return (
        <div className="wg-weather-copy">
          <div className="t-stamp">Bromsgrove weather</div>
          <strong>Weather unavailable — using the normal schedule.</strong>
          <button type="button" className="wg-retry" onClick={retryWeather}>Try weather again</button>
        </div>
      );
    }

    const data = weatherState.data;
    let headline = "A normal watering round today";
    if (weatherConditions.wet && (weatherConditions.hot || weatherConditions.windy)) {
      headline = "Beds have had rain, but containers may still dry quickly";
    } else if (weatherConditions.wet) {
      headline = "Recent rain gives the outdoor beds a rest";
    } else if (weatherConditions.hot || weatherConditions.windy) {
      headline = "Start with pots and baskets today";
    }
    return (
      <>
        <div className="wg-weather-copy">
          <div className="t-stamp">Bromsgrove · {wgWeatherDescription(data.weatherCode)}</div>
          <strong>{headline}</strong>
          <span>Weather changes the order, never the moisture test.</span>
        </div>
        <div className="wg-weather-facts" aria-label="Local weather summary">
          <span><b>{Math.round(data.currentTempC)}°</b> now</span>
          <span><b>{wgRound(data.recentRainMm, 1)}mm</b> rain · 48h</span>
          <span><b>{Math.round(data.forecastRainProbability)}%</b> rain chance</span>
          <span><b>{Math.round(data.maxGustKph)}</b> km/h gusts</span>
        </div>
        <a className="wg-weather-credit" href="https://open-meteo.com/" target="_blank" rel="noreferrer">
          Weather by Open-Meteo
        </a>
      </>
    );
  };

  return (
    <div className="wg-root page-turn">
      <header className="wg-header">
        <div>
          <div className="t-stamp" style={{ color: "var(--accent)" }}>The Notebook · Watering</div>
          <h1 className="t-display">Today’s watering round</h1>
          <p className="t-hand">a short route through what needs looking at first</p>
        </div>
        <div className="wg-date-stamp">
          <div className="stamp">{schedule.dateLabel}</div>
          <div className="t-mono">{dueRows.length} areas to check · {waitingRows.length} can wait</div>
        </div>
      </header>

      <article className="wg-sheet">
        <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-3deg)" }} />
        <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(2.4deg)" }} />

        <section className="wg-weather-strip" role="status" aria-live="polite" aria-atomic="true">
          {renderWeather()}
        </section>

        <aside className="wg-rule">
          <div className="wg-rule-mark" aria-hidden="true">✓</div>
          <div>
            <div className="t-stamp">The one watering rule</div>
            <p><strong>Check, don’t automatically water.</strong> Soil and compost decide; the weather only changes what to inspect first.</p>
          </div>
        </aside>

        <details className="wg-help-details">
          <summary>How to check moisture</summary>
          <ul>
            <li>Push a finger, trowel or moisture probe 5–15cm down near roots; a dry-looking surface can be misleading.</li>
            <li>Lift pots where practical. Light pots, compost pulling from the rim and limp growth are useful clues.</li>
            <li>Give dry roots a thorough soak, then allow drainage. Avoid frequent token splashes.</li>
            <li>Newly planted or moved plants deserve closer attention until rooted in.</li>
            <li>For houseplants, test the compost and empty the cachepot after watering.</li>
          </ul>
        </details>

        <div className="wg-round-intro">
          <div>
            <div className="t-stamp" style={{ color: "var(--accent)" }}>Today’s route</div>
            <h2 className="t-display">Start where drying happens fastest</h2>
          </div>
          <p>Only today’s useful checks are open below. Everything else is still available under “Can wait today.”</p>
        </div>

        <div className="wg-route">
          {WG_ROUTE_GROUPS.map((group, index) => {
            const groupRows = dueRows.filter((row) => row.routeGroup === group.id);
            return (
              <section key={group.id} className="wg-route-section" aria-labelledby={"wg-route-" + group.id}>
                <header className="wg-route-head">
                  <span className="wg-route-number t-display">{index + 1}</span>
                  <div>
                    <div className="t-stamp">{group.eyebrow}</div>
                    <h2 id={"wg-route-" + group.id} className="t-display">{group.title}</h2>
                    <p className="t-hand">{group.note}</p>
                  </div>
                  <span className="t-mono wg-route-count">{groupRows.length} to check</span>
                </header>
                {groupRows.length > 0 ? (
                  <div className="wg-route-cards">{groupRows.map((row) => renderZoneCard(row, false))}</div>
                ) : (
                  <p className="wg-nothing-due t-hand">Nothing urgent here today — enjoy the walk past.</p>
                )}
              </section>
            );
          })}
        </div>

        <details className="wg-waiting-details">
          <summary>
            <span>
              <span className="t-stamp">Lower priority</span>
              <strong className="t-hand">Can wait today</strong>
            </span>
            <span className="t-mono">{waitingRows.length} areas</span>
          </summary>
          <div className="wg-waiting-body">
            {WG_ROUTE_GROUPS.map((group) => {
              const groupRows = waitingRows.filter((row) => row.routeGroup === group.id);
              if (!groupRows.length) return null;
              return (
                <section key={group.id} className="wg-waiting-group">
                  <h3 className="t-display">{group.title}</h3>
                  <div className="wg-route-cards">{groupRows.map((row) => renderZoneCard(row, true))}</div>
                </section>
              );
            })}
            {waitingRows.length === 0 && <p className="t-hand">Every area has earned a check today.</p>}
          </div>
        </details>

        <details className="wg-reference-details">
          <summary>
            <span>
              <span className="t-stamp">Reference</span>
              <strong className="t-hand">Plant watering notes</strong>
            </span>
            <span className="t-mono">{allPlants.length} plants</span>
          </summary>
          <div className="wg-reference-body">
            <p className="wg-reference-intro">Use this when you want to look up one plant rather than follow today’s route.</p>

            <div className="wg-legend" aria-label="Watering priority bands">
              {[5, 4, 3, 2, 1].map((band) => (
                <div key={band} className="wg-legend-item">
                  <span className={"wg-band-chip wg-band-" + band}>{BAND_INFO[band].chip}</span>
                  <span>{BAND_INFO[band].label}</span>
                </div>
              ))}
            </div>

            <label className="t-stamp wg-filter-label" htmlFor="plant-list-filter">Find a plant or area</label>
            <input
              id="plant-list-filter"
              type="search"
              className="wg-filter"
              placeholder="Plant or area…"
              value={plantFilter}
              onChange={(event) => setPlantFilter(event.target.value)}
            />

            <div className="wg-table-wrap">
              <table className="wg-table">
                <caption className="sr-only">Plants and their moisture-check priorities by location</caption>
                <thead>
                  <tr>
                    {[
                      ["plant", "Plant"],
                      ["zone", "Area"],
                      ["frequency", "Check priority"],
                    ].map(([key, label]) => (
                      <th key={key} scope="col" aria-sort={sortKey === key ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                        <button type="button" className="wg-th-sort" onClick={() => handleSort(key)}>
                          {label}{sortKey === key ? (sortDir === "asc" ? " ▲" : " ▼") : ""}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {referenceRows.map((item) => (
                    <tr key={item.zoneKey + "-" + item.plantId}>
                      <td>
                        <button
                          type="button"
                          className="wg-plant-link"
                          onClick={() => handlePlantClick(item.zoneKey, item.plantId, item.plantName)}
                        >
                          {item.plantName}
                        </button>
                      </td>
                      <td className="t-mono wg-table-zone">{item.zoneTitle} · {item.contextLabel}</td>
                      <td><span className={"wg-freq-text wg-freq-" + item.band}>{BAND_INFO[item.band].everyDays}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {referenceRows.length === 0 && <p className="t-hand wg-empty">No plants match “{plantFilter}”.</p>}
            </div>
          </div>
        </details>
      </article>

      <style>{`
        .wg-root { padding: 24px clamp(18px, 4vw, 56px) 64px; }
        .wg-header {
          display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 24px;
          align-items: end; margin-bottom: 22px;
        }
        .wg-header h1 { font-size: min(7vw, 52px); margin: 7px 0 2px; line-height: 1; }
        .wg-header p { font-size: 23px; color: var(--pencil); margin: 0; }
        .wg-date-stamp {
          min-width: 245px; padding: 14px 18px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
        }
        .wg-date-stamp .t-mono { display: block; margin-top: 10px; line-height: 1.5; }

        .wg-sheet {
          position: relative; padding: 34px clamp(18px, 4vw, 52px) 34px;
          border: 1px solid color-mix(in oklab, var(--ink) 12%, transparent);
          background:
            radial-gradient(circle at 18% 0%, color-mix(in oklab, var(--paper) 80%, var(--accent) 5%) 0%, transparent 42%),
            radial-gradient(circle at 100% 100%, color-mix(in oklab, var(--paper-deep) 66%, var(--ink) 5%) 0%, transparent 52%),
            color-mix(in oklab, var(--paper) 96%, white 4%);
          box-shadow: 0 22px 54px -32px rgba(0, 0, 0, 0.42);
        }
        .wg-sheet::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0.45;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.15  0 0 0 0 0.13  0 0 0 0 0.10  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          mix-blend-mode: multiply;
        }
        [data-palette="night"] .wg-sheet::before { mix-blend-mode: overlay; opacity: 0.32; }
        .wg-sheet > * { position: relative; }

        .wg-weather-strip {
          display: grid; grid-template-columns: minmax(220px, 1fr) auto auto; gap: 20px;
          align-items: center; padding: 18px 20px; margin-bottom: 18px;
          border: 1px dashed color-mix(in oklab, var(--accent) 55%, var(--hairline));
          background: color-mix(in oklab, var(--accent) 7%, var(--paper) 93%);
        }
        .wg-weather-copy { display: flex; flex-direction: column; gap: 4px; }
        .wg-weather-copy strong { font-family: var(--serif); font-size: 20px; line-height: 1.2; }
        .wg-weather-copy span { color: var(--ink-soft); font-size: 14px; }
        .wg-weather-facts { display: grid; grid-template-columns: repeat(2, auto); gap: 6px 16px; }
        .wg-weather-facts span { font-family: var(--type); font-size: 10px; letter-spacing: 0.05em; white-space: nowrap; color: var(--ink-soft); }
        .wg-weather-facts b { color: var(--ink); font-size: 13px; }
        .wg-weather-credit { color: var(--pencil); font-family: var(--type); font-size: 10px; text-underline-offset: 3px; white-space: nowrap; }
        .wg-retry {
          align-self: flex-start; min-height: 44px; padding: 7px 2px; border: 0; background: none;
          color: var(--accent); cursor: pointer; font-family: var(--type); font-size: 11px;
          text-decoration: underline; text-underline-offset: 3px;
        }

        .wg-rule {
          display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: center;
          padding: 14px 18px; border-left: 3px solid var(--accent);
          background: color-mix(in oklab, var(--paper-deep) 24%, transparent);
        }
        .wg-rule-mark {
          width: 38px; height: 38px; display: grid; place-items: center; border: 1px solid var(--accent);
          border-radius: 50%; color: var(--accent); font-family: var(--hand); font-size: 26px; transform: rotate(-5deg);
        }
        .wg-rule p { margin: 4px 0 0; font-family: var(--serif); font-size: 17px; }

        .wg-help-details { margin-bottom: 36px; border-bottom: 1px dotted var(--hairline); }
        .wg-help-details summary {
          min-height: 44px; display: flex; align-items: center; cursor: pointer;
          color: var(--pencil); font-family: var(--type); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .wg-help-details ul { margin: 0 0 18px; padding-left: 22px; color: var(--ink-soft); }
        .wg-help-details li + li { margin-top: 6px; }

        .wg-round-intro {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(240px, 38%); gap: 24px;
          align-items: end; margin-bottom: 30px;
        }
        .wg-round-intro h2 { font-size: clamp(29px, 4vw, 40px); line-height: 1.05; margin: 4px 0 0; }
        .wg-round-intro > p { margin: 0; color: var(--ink-soft); font-family: var(--serif); font-size: 16px; line-height: 1.5; }

        .wg-route-section { padding: 0 0 36px; margin-bottom: 34px; border-bottom: 1px solid var(--hairline); }
        .wg-route-head {
          display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 16px;
          align-items: center; margin-bottom: 16px;
        }
        .wg-route-number {
          width: 54px; height: 54px; display: grid; place-items: center; border: 1px solid var(--hairline);
          border-radius: 50%; color: var(--pencil); font-size: 31px; transform: rotate(-2deg);
        }
        .wg-route-head h2 { margin: 1px 0 0; font-size: clamp(27px, 3vw, 36px); line-height: 1; }
        .wg-route-head p { margin: 3px 0 0; color: var(--pencil); font-size: 20px; }
        .wg-route-count { color: var(--pencil); white-space: nowrap; }
        .wg-route-cards { display: flex; flex-direction: column; gap: 13px; }
        .wg-nothing-due { margin: 0 0 0 70px; color: var(--pencil); font-size: 21px; font-style: italic; }

        .wg-route-card {
          border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 94%, var(--paper-deep) 6%);
        }
        .wg-route-card.is-waiting { opacity: 0.9; background: color-mix(in oklab, var(--paper) 97%, var(--paper-deep) 3%); }
        .wg-card-main { padding: 16px 18px 14px; }
        .wg-card-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; }
        .wg-card-place { color: var(--pencil); opacity: 0.82; margin-bottom: 2px; }
        .wg-card-title { margin: 0; color: var(--ink); font-size: 27px; line-height: 1.05; }
        .wg-priority-badge {
          flex: 0 0 auto; padding: 5px 9px; border: 1px solid currentColor; border-radius: 18px;
          font-family: var(--type); font-size: 9px; letter-spacing: 0.09em; text-transform: uppercase; white-space: nowrap;
        }
        .wg-priority-5 { color: var(--stamp); background: color-mix(in oklab, var(--stamp) 10%, var(--paper) 90%); }
        .wg-priority-4 { color: var(--accent); background: color-mix(in oklab, var(--accent) 10%, var(--paper) 90%); }
        .wg-priority-3 { color: var(--green); background: color-mix(in oklab, var(--green) 10%, var(--paper) 90%); }
        .wg-priority-2, .wg-priority-1 { color: var(--pencil); background: color-mix(in oklab, var(--pencil) 8%, var(--paper) 92%); }
        .wg-card-action { max-width: 800px; margin: 9px 0 0; font-family: var(--serif); font-size: 17px; line-height: 1.5; color: var(--ink-soft); }

        .wg-exception-note {
          margin-top: 13px; padding: 10px 12px; border-left: 2px solid var(--pencil);
          background: color-mix(in oklab, var(--pencil) 7%, transparent);
        }
        .wg-exception-note p { margin: 3px 0 0; font-family: var(--serif); font-size: 15px; color: var(--ink-soft); }

        .wg-card-details { border-top: 1px dotted var(--hairline); }
        .wg-card-details > summary {
          min-height: 48px; padding: 0 18px; display: flex; align-items: center; justify-content: space-between; gap: 14px;
          cursor: pointer; color: var(--accent); font-family: var(--type); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .wg-card-details > summary::marker { color: var(--accent); }
        .wg-card-details[open] > summary { background: color-mix(in oklab, var(--accent) 4%, transparent); }
        .wg-card-detail-body { padding: 4px 18px 18px; }
        .wg-container-signs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 10px; }
        .wg-container-signs > div { padding: 12px; border: 1px dotted var(--hairline); }
        .wg-container-signs p { margin: 5px 0 0; font-family: var(--serif); font-size: 14px; line-height: 1.45; color: var(--ink-soft); }
        .wg-card-plant-list { list-style: none; margin: 0; padding: 0; }
        .wg-card-plant { padding: 8px 0; border-bottom: 1px dotted var(--hairline); }
        .wg-card-plant:last-child { border-bottom: 0; }
        .wg-card-plant-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .wg-plant-signs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .wg-plant-signs p { margin: 2px 0 5px; font-family: var(--serif); font-size: 14px; line-height: 1.4; color: var(--ink-soft); }

        .wg-plant-link {
          min-height: 44px; display: inline-flex; align-items: center; padding: 6px 2px;
          border: 0; background: none; color: var(--accent); cursor: pointer;
          font-family: var(--serif); font-size: 17px; text-align: left;
          text-decoration: underline; text-decoration-color: color-mix(in oklab, var(--accent) 38%, transparent); text-underline-offset: 3px;
        }
        .wg-plant-link:hover { text-decoration-color: var(--accent); }
        .wg-band-chip {
          display: inline-block; flex: 0 0 auto; padding: 3px 7px; border: 1px solid color-mix(in oklab, var(--ink) 14%, transparent);
          border-radius: 10px; font-family: var(--type); font-size: 9px; letter-spacing: 0.07em; text-transform: uppercase; white-space: nowrap;
        }
        .wg-band-5 { color: var(--stamp); background: color-mix(in oklab, var(--stamp) 18%, var(--paper) 82%); }
        .wg-band-4 { color: var(--accent); background: color-mix(in oklab, var(--accent) 16%, var(--paper) 84%); }
        .wg-band-3 { color: var(--green); background: color-mix(in oklab, var(--green) 15%, var(--paper) 85%); }
        .wg-band-2 { color: var(--pencil); background: color-mix(in oklab, var(--pencil) 15%, var(--paper) 85%); }
        .wg-band-1 { color: var(--ink-faint); background: color-mix(in oklab, var(--ink) 7%, var(--paper) 93%); }

        .wg-waiting-details, .wg-reference-details { margin-top: 22px; border: 1px solid var(--hairline); }
        .wg-waiting-details > summary, .wg-reference-details > summary {
          min-height: 66px; padding: 9px 18px; display: flex; align-items: center; justify-content: space-between; gap: 18px;
          cursor: pointer; background: color-mix(in oklab, var(--paper-deep) 18%, transparent);
        }
        .wg-waiting-details > summary > span:first-child, .wg-reference-details > summary > span:first-child { display: flex; flex-direction: column; }
        .wg-waiting-details summary strong, .wg-reference-details summary strong { color: var(--ink); font-size: 25px; font-weight: 400; }
        .wg-waiting-details[open] > summary, .wg-reference-details[open] > summary { border-bottom: 1px solid var(--hairline); }
        .wg-waiting-body, .wg-reference-body { padding: 20px 18px; }
        .wg-waiting-group + .wg-waiting-group { margin-top: 26px; }
        .wg-waiting-group > h3 { margin: 0 0 10px; font-size: 26px; }

        .wg-reference-details { margin-top: 14px; }
        .wg-reference-intro { margin: 0 0 16px; font-family: var(--serif); font-size: 16px; color: var(--ink-soft); }
        .wg-legend { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-bottom: 22px; }
        .wg-legend-item { display: flex; align-items: center; gap: 7px; font-family: var(--serif); font-size: 14px; }
        .wg-filter-label { display: block; margin-bottom: 7px; color: var(--ink-soft); }
        .wg-filter {
          width: 100%; max-width: 360px; min-height: 44px; padding: 8px 12px; margin-bottom: 14px;
          color: var(--ink); background: color-mix(in oklab, var(--paper) 94%, white 6%);
          border: 1px solid var(--hairline); border-radius: 3px; font-family: var(--serif); font-size: 16px;
        }
        .wg-filter:focus { border-color: var(--accent); }
        .wg-table-wrap { overflow-x: auto; }
        .wg-table { width: 100%; border-collapse: collapse; }
        .wg-table thead th { padding: 0; border-bottom: 1px solid var(--hairline); text-align: left; }
        .wg-th-sort {
          width: 100%; min-height: 44px; padding: 8px 10px; border: 0; background: none; cursor: pointer;
          color: var(--pencil); font-family: var(--type); font-size: 10px; letter-spacing: 0.09em; text-transform: uppercase; text-align: left;
        }
        .wg-th-sort:hover { color: var(--accent); }
        .wg-table tbody tr { border-bottom: 1px dotted var(--hairline); }
        .wg-table td { padding: 6px 10px; vertical-align: middle; }
        .wg-table-zone { color: var(--pencil); white-space: nowrap; font-size: 12px; }
        .wg-freq-text { font-family: var(--serif); font-size: 14px; white-space: nowrap; }
        .wg-freq-5 { color: var(--stamp); }
        .wg-freq-4 { color: var(--accent); }
        .wg-freq-3 { color: var(--green); }
        .wg-freq-2 { color: var(--pencil); }
        .wg-freq-1 { color: var(--ink-faint); }
        .wg-empty { color: var(--pencil); font-size: 21px; }

        .wg-root button:focus-visible, .wg-root summary:focus-visible, .wg-root a:focus-visible, .wg-root input:focus-visible {
          outline: 2px solid var(--accent); outline-offset: 3px;
        }

        @media (max-width: 820px) {
          .wg-weather-strip { grid-template-columns: 1fr auto; }
          .wg-weather-facts { grid-column: 1 / -1; grid-row: 2; grid-template-columns: repeat(4, 1fr); border-top: 1px dotted var(--hairline); padding-top: 10px; }
          .wg-weather-credit { grid-column: 2; grid-row: 1; }
        }
        @media (max-width: 680px) {
          .wg-root { padding-inline: 14px; }
          .wg-header { grid-template-columns: 1fr; align-items: start; }
          .wg-header h1 { font-size: clamp(38px, 12vw, 52px); }
          .wg-date-stamp { min-width: 0; }
          .wg-sheet { padding-inline: 14px; }
          .wg-weather-strip { grid-template-columns: 1fr; gap: 12px; }
          .wg-weather-credit { grid-column: 1; grid-row: auto; }
          .wg-weather-facts { grid-column: 1; grid-row: auto; grid-template-columns: repeat(2, 1fr); }
          .wg-round-intro { grid-template-columns: 1fr; gap: 10px; }
          .wg-route-head { grid-template-columns: auto 1fr; align-items: start; }
          .wg-route-count { grid-column: 2; }
          .wg-route-number { width: 46px; height: 46px; font-size: 27px; }
          .wg-nothing-due { margin-left: 0; }
          .wg-card-heading { flex-direction: column; gap: 8px; }
          .wg-priority-badge { align-self: flex-start; }
          .wg-container-signs, .wg-plant-signs { grid-template-columns: 1fr; gap: 3px; }
          .wg-card-plant-head { align-items: flex-start; }
          .wg-waiting-details > summary, .wg-reference-details > summary { padding-inline: 13px; }
          .wg-waiting-body, .wg-reference-body { padding-inline: 12px; }
        }
        @media (max-width: 460px) {
          .wg-rule { grid-template-columns: 1fr; }
          .wg-rule-mark { display: none; }
          .wg-weather-facts { grid-template-columns: 1fr 1fr; }
          .wg-card-main { padding-inline: 13px; }
          .wg-card-details > summary { padding-inline: 13px; }
          .wg-card-detail-body { padding-inline: 13px; }
          .wg-waiting-details > summary, .wg-reference-details > summary { align-items: flex-start; flex-direction: column; gap: 2px; }
        }
      `}</style>
    </div>
  );
}

window.WateringGuide = WateringGuide;
