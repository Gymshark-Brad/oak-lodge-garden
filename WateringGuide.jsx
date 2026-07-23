// Oak Lodge Garden — WateringGuide.jsx
// Moisture-check guide: what to inspect first, and what to leave alone.

const { useMemo: useMemo_WG, useState: useState_WG } = React;

const WG_DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WG_MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function wgGetWeek() {
  const now = new Date();
  const dow = now.getDay(); // 0 Sun .. 6 Sat
  const mondayOffset = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
  const todayIndex = dow === 0 ? 6 : dow - 1;
  const epoch = new Date(monday.getFullYear(), 0, 1);
  const diffDays = Math.floor((monday - epoch) / 86400000);
  const fortnightOn = Math.floor(diffDays / 7) % 2 === 0;
  return { dates, todayIndex, fortnightOn };
}

function WateringGuide({ onOpenPlant }) {
  const ZONES = window.OAK.ZONES;
  const PLANT_BY_ID = window.OAK.PLANT_BY_ID || {};
  const WATER_BANDS_BY_ID = window.OAK.WATER_BANDS_BY_ID || {};
  const BAND_INFO = window.OAK.WATER_BAND_INFO || {};
  const POT_WATER_SIGNS = window.OAK.POT_WATER_SIGNS || {};

  const { dates: weekDates, todayIndex, fortnightOn } = useMemo_WG(() => wgGetWeek(), []);
  const [plantFilter, setPlantFilter] = useState_WG("");
  const [overFilter, setOverFilter] = useState_WG("");

  const zoneRows = useMemo_WG(() => {
    const rows = [];
    Object.keys(ZONES).forEach((key) => {
      const zone = ZONES[key];
      const values = Object.values(PLANT_BY_ID)
        .filter((record) => record.zoneKey === key)
        .map((record) => WATER_BANDS_BY_ID[record.plant.id])
        .filter(Boolean);
      if (values.length === 0) return;
      const maxBand = Math.max(...values);
      rows.push({ key, zone, maxBand });
    });
    rows.sort((a, b) => b.maxBand - a.maxBand || a.zone.title.localeCompare(b.zone.title));
    return rows;
  }, []);

  const watchList = useMemo_WG(() => {
    const items = [];
    zoneRows.forEach(({ key, zone, maxBand }) => {
      // Pots are watered as a single unit, so there's no way to actually skip
      // just the drought-tolerant plant in a shared pot — only ground beds,
      // where individual plants can be watered separately, are actionable here.
      if (zone.isPot) return;
      Object.values(PLANT_BY_ID)
        .filter((record) => record.zoneKey === key)
        .forEach((record) => {
          const band = WATER_BANDS_BY_ID[record.plant.id];
          const name = record.plant.name;
          const flagged = band === 1 && maxBand >= 3;
          if (flagged) {
            items.push({
              zoneKey: key,
              zoneTitle: zone.title,
              plantName: name,
              plantId: record.plant.id,
              band,
              maxBand,
              isPot: false,
            });
          }
        });
    });
    return items;
  }, [zoneRows]);

  const watchByZone = useMemo_WG(() => {
    const map = new Map();
    watchList.forEach((item) => {
      if (!map.has(item.zoneKey)) map.set(item.zoneKey, { zoneTitle: item.zoneTitle, isPot: item.isPot, maxBand: item.maxBand, plants: [] });
      map.get(item.zoneKey).plants.push(item);
    });
    return Array.from(map.values());
  }, [watchList]);

  const allPlants = useMemo_WG(() => {
    const items = [];
    Object.keys(ZONES).forEach((key) => {
      const zone = ZONES[key];
      if (!zone.plantKey) return;
      Object.values(PLANT_BY_ID)
        .filter((record) => record.zoneKey === key)
        .forEach((record) => {
          const plant = record.plant;
          const band = WATER_BANDS_BY_ID[plant.id];
          if (!band) return;
          const added = (plant.profile && plant.profile.oakLodge && plant.profile.oakLodge.added) || "";
          items.push({
            zoneKey: key,
            zoneTitle: zone.title,
            plantName: plant.name,
            plantId: plant.id,
            band,
            isPot: !!zone.isPot,
            isEstablishing: !!added && !/^Established before/i.test(added),
            added,
          });
        });
    });
    items.sort((a, b) =>
      a.zoneTitle.localeCompare(b.zoneTitle) || b.band - a.band || a.plantName.localeCompare(b.plantName)
    );
    return items;
  }, []);

  const tableRows = useMemo_WG(() => {
    const rows = [...allPlants];
    rows.sort((a, b) =>
      a.zoneTitle.localeCompare(b.zoneTitle) || b.band - a.band || (a.plantName || "").localeCompare(b.plantName || "")
    );
    return rows;
  }, [allPlants]);

  const [sortKey, setSortKey] = useState_WG("zone"); // "plant" | "zone" | "frequency"
  const [sortDir, setSortDir] = useState_WG("asc");

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filteredPlants = useMemo_WG(() => {
    const q = plantFilter.trim().toLowerCase();
    const list = tableRows.filter(
      (p) => !q || (p.plantName || "").toLowerCase().includes(q) || p.zoneTitle.toLowerCase().includes(q)
    );
    const sorted = [...list].sort((a, b) => {
      let cmp;
      if (sortKey === "plant") cmp = (a.plantName || a.zoneTitle).localeCompare(b.plantName || b.zoneTitle);
      else if (sortKey === "frequency") cmp = a.band - b.band || a.zoneTitle.localeCompare(b.zoneTitle);
      else cmp = a.zoneTitle.localeCompare(b.zoneTitle) || b.band - a.band || (a.plantName || "").localeCompare(b.plantName || "");
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [tableRows, plantFilter, sortKey, sortDir]);

  const watchKeySet = useMemo_WG(
    () => new Set(watchList.map((w) => w.zoneKey + "::" + w.plantName)),
    [watchList]
  );

  // Plants genuinely susceptible to overwatering — band 1 (rarely) or band 2
  // (fortnightly), since these are the drought-tolerant ones where root rot
  // from too much water is the real risk. Shows the specific symptom to look
  // for, plus a flag if it also shares soil/compost with thirstier neighbours
  // (cross-referencing the watch list above).
  const overSignsList = useMemo_WG(() => {
    const items = [];
    allPlants.forEach((plantItem) => {
      if (plantItem.band > 2) return;
      const zone = ZONES[plantItem.zoneKey];
      const record = PLANT_BY_ID[plantItem.plantId];
      const over = plantItem.isPot
        ? (POT_WATER_SIGNS[zone.plantKey] || {}).over
        : record && record.plant.profile && record.plant.profile.waterSigns.over;
      if (!over) return;
      items.push({
        zoneKey: plantItem.zoneKey,
        zoneTitle: plantItem.zoneTitle,
        plantName: plantItem.plantName,
        plantId: plantItem.plantId,
        band: plantItem.band,
        isPot: plantItem.isPot,
        over,
        sharesRisk: watchKeySet.has(plantItem.zoneKey + "::" + plantItem.plantName),
      });
    });
    items.sort((a, b) => a.band - b.band || a.zoneTitle.localeCompare(b.zoneTitle) || a.plantName.localeCompare(b.plantName));
    return items;
  }, [watchKeySet, allPlants]);

  const filteredOverSigns = useMemo_WG(() => {
    const q = overFilter.trim().toLowerCase();
    if (!q) return overSignsList;
    return overSignsList.filter(
      (item) => (item.plantName || "").toLowerCase().includes(q) || item.zoneTitle.toLowerCase().includes(q)
    );
  }, [overSignsList, overFilter]);

  const handlePlantClick = (zoneKey, plantId, plantName) => {
    onOpenPlant({ zoneKey, plantId, plantName, fromWatering: true });
  };

  const dayHeader = weekDates.map((d, i) => ({
    label: WG_DAY_LABELS[i],
    date: `${d.getDate()} ${WG_MONTH_SHORT[d.getMonth()]}`,
    isToday: i === todayIndex,
  }));

  return (
    <div className="wg-root page-turn">
      <div className="wg-header">
        <div>
          <div className="t-stamp" style={{ color: "var(--accent)" }}>The Notebook · Watering</div>
          <h1 className="t-display" style={{ fontSize: "min(6vw, 48px)", margin: "6px 0 2px", lineHeight: 1.04 }}>
            Watering guide
          </h1>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)" }}>
            what to check first &nbsp;·&nbsp; and what to leave alone
          </div>
        </div>
        <div className="wg-stamp-panel">
          <div className="stamp">Vol. iii · moisture checks</div>
          <div className="t-mono" style={{ marginTop: 12 }}>
            {zoneRows.length} zones &nbsp;·&nbsp; {allPlants.length} plants<br />
            {watchList.length} on overwatering watch<br />
            recorder · b. h.
          </div>
        </div>
      </div>

      <article className="wg-sheet">
        <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-3deg)" }} />
        <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(2.4deg)" }} />

        <aside className="wg-safety-note" aria-labelledby="watering-rule-title">
          <div id="watering-rule-title" className="t-stamp">The watering rule</div>
          <p><strong>Check moisture before every watering.</strong> The marks below are reminders to inspect, not instructions to water.</p>
          <ul>
            <li>Skip established beds after meaningful rain; check 5–15cm down near the roots, not just the surface.</li>
            <li>Check pots and baskets separately because compost, sun and wind can dry them much faster than borders.</li>
            <li>Newly planted or moved plants need closer checks until rooted in, even when the mature plant is drought-tolerant.</li>
            <li>In cool or wet weather, reduce checks. In heat or strong wind, inspect containers more often.</li>
          </ul>
        </aside>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">i.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>This week</div>
              <h2 className="t-display wg-section-title">Moisture-check priority by zone</h2>
            </div>
            <div className="t-mono wg-section-note">week of {dayHeader[0].date}</div>
          </header>

          <div className="wg-grid-wrap">
            <div className="wg-grid" style={{ gridTemplateColumns: `minmax(150px, auto) 100px repeat(7, 34px)` }}>
              <div className="wg-grid-head wg-grid-corner" />
              <div className="wg-grid-head t-mono">highest priority</div>
              {dayHeader.map((d) => (
                <div key={d.label} className={"wg-grid-head wg-day-head" + (d.isToday ? " is-today" : "")}>
                  <span className="wg-day-label">{d.label}</span>
                  <span className="wg-day-date">{d.date}</span>
                </div>
              ))}

              {zoneRows.map(({ key, zone, maxBand }) => {
                const info = BAND_INFO[maxBand];
                const days = maxBand === 2 ? (fortnightOn ? info.days : info.days.map(() => 0)) : info.days;
                return (
                  <React.Fragment key={key}>
                    <span className="wg-zone-name t-hand" title={zone.title}>
                      {zone.title}
                    </span>
                    <div className="wg-band-chip-cell">
                      <span className={"wg-band-chip wg-band-" + maxBand}>{info.chip}</span>
                    </div>
                    {days.map((on, i) => (
                      <div key={i} className={"wg-cell" + (dayHeader[i].isToday ? " is-today" : "")}>
                        {on ? <span className="wg-drop" aria-label="Suggested moisture-check day">○</span> : null}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          {zoneRows.some(({ maxBand }) => maxBand === 2) && !fortnightOn && (
            <p className="t-hand wg-fortnight-note">
              Low-priority plants have no reminder this week. Only inspect them if it has been properly dry or they show stress.
            </p>
          )}
        </section>

        <div className="wg-divider" aria-hidden="true"><div className="rule" /></div>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">ii.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Overwatering watch</div>
              <h2 className="t-display wg-section-title">Plants sharing soil with thirstier neighbours</h2>
            </div>
            <div className="wg-section-count t-mono">
              {watchByZone.length} {watchByZone.length === 1 ? "zone" : "zones"}
            </div>
          </header>

          {watchByZone.length === 0 ? (
            <p className="t-hand wg-empty">no obvious mismatches right now — nice and even.</p>
          ) : (
            <ul className="wg-watch-list">
              {watchByZone.map((w) => (
                <li key={w.zoneTitle} className="wg-watch-card">
                  <div className="wg-watch-head">
                    <span className="t-hand wg-watch-zone">{w.zoneTitle}</span>
                    <span className="t-mono wg-watch-context">
                      shared bed · highest check priority: {BAND_INFO[w.maxBand].label.toLowerCase()}
                    </span>
                  </div>
                  <ul className="wg-watch-plants">
                    {w.plants.map((p) => (
                      <li key={p.plantName} className="wg-watch-plant">
                        <button className="wg-plant-link" onClick={() => handlePlantClick(p.zoneKey, p.plantId, p.plantName)}>
                          {p.plantName}
                        </button>
                        <span className="t-mono wg-watch-band">{BAND_INFO[p.band].label.toLowerCase()}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="wg-watch-note">
                    Check these plants individually before watering the surrounding bed. Their roots can stay wet while thirstier neighbours are dry.
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="wg-divider" aria-hidden="true"><div className="rule" /></div>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">iii.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Reference</div>
              <h2 className="t-display wg-section-title">Susceptible to overwatering</h2>
            </div>
            <div className="wg-section-count t-mono">{overSignsList.length} plants</div>
          </header>

          <label className="t-stamp wg-filter-label" htmlFor="overwatering-filter">Filter the overwatering list</label>
          <input
            id="overwatering-filter"
            type="search"
            className="wg-filter"
            placeholder="Plant or zone…"
            value={overFilter}
            onChange={(e) => setOverFilter(e.target.value)}
          />

          <ul className="wg-over-list">
            {filteredOverSigns.map((item) => (
              <li key={item.zoneKey + "-" + item.plantName} className="wg-over-item">
                <div className="wg-over-head">
                  <button className="wg-plant-link wg-over-name" onClick={() => handlePlantClick(item.zoneKey, item.plantId, item.plantName)}>
                    {item.plantName}
                  </button>
                  <span className="t-mono wg-over-zone">{item.zoneTitle}</span>
                  <span className={"wg-band-chip wg-band-" + item.band}>{BAND_INFO[item.band].chip}</span>
                  {item.sharesRisk && (
                    <span className="wg-over-tag">shares soil with thirstier neighbours</span>
                  )}
                </div>
                <p className="wg-over-text">{item.over}</p>
              </li>
            ))}
          </ul>
          {filteredOverSigns.length === 0 && (
            <p className="t-hand wg-empty">no plants match "{overFilter}"</p>
          )}
        </section>

        <div className="wg-divider" aria-hidden="true"><div className="rule" /></div>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">iv.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Reference</div>
              <h2 className="t-display wg-section-title">The five bands</h2>
            </div>
          </header>
          <ul className="wg-legend">
            {[5, 4, 3, 2, 1].map((b) => (
              <li key={b} className="wg-legend-row">
                <span className={"wg-band-chip wg-band-" + b}>{BAND_INFO[b].chip}</span>
                <span className="t-hand wg-legend-label">{BAND_INFO[b].label}</span>
                <span className="wg-legend-note">{BAND_INFO[b].freq}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="wg-divider" aria-hidden="true"><div className="rule" /></div>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">v.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Full list</div>
              <h2 className="t-display wg-section-title">All plants at a glance</h2>
            </div>
            <div className="wg-section-count t-mono">{allPlants.length} plants</div>
          </header>

          <label className="t-stamp wg-filter-label" htmlFor="plant-list-filter">Filter the full plant list</label>
          <input
            id="plant-list-filter"
            type="search"
            className="wg-filter"
            placeholder="Plant or zone…"
            value={plantFilter}
            onChange={(e) => setPlantFilter(e.target.value)}
          />

          <div className="wg-table-wrap">
            <table className="wg-table">
              <caption className="sr-only">Plants and their moisture-check priorities by garden zone</caption>
              <thead>
                <tr>
                  <th scope="col" aria-sort={sortKey === "plant" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                    <button className="wg-th-sort" onClick={() => handleSort("plant")}>
                      Plant{sortKey === "plant" && (sortDir === "asc" ? " ▲" : " ▼")}
                    </button>
                  </th>
                  <th scope="col" aria-sort={sortKey === "zone" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                    <button className="wg-th-sort" onClick={() => handleSort("zone")}>
                      Zone{sortKey === "zone" && (sortDir === "asc" ? " ▲" : " ▼")}
                    </button>
                  </th>
                  <th scope="col" aria-sort={sortKey === "frequency" ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                    <button className="wg-th-sort" onClick={() => handleSort("frequency")}>
                      Check priority{sortKey === "frequency" && (sortDir === "asc" ? " ▲" : " ▼")}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPlants.map((p) => (
                  <tr key={p.zoneKey + "-" + (p.plantName || "pot")}>
                    <td>
                      <button className="wg-plant-link" onClick={() => handlePlantClick(p.zoneKey, p.plantId, p.plantName)}>
                        {p.plantName}
                      </button>
                      {p.isEstablishing && <span className="wg-over-tag" title={p.added}>establishing</span>}
                    </td>
                    <td className="t-mono wg-table-zone">
                      {p.zoneTitle} · {p.isPot ? "container" : "bed"}
                    </td>
                    <td>
                      <span className={"wg-freq-text wg-freq-" + p.band}>{BAND_INFO[p.band].everyDays}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPlants.length === 0 && (
              <p className="t-hand wg-empty">no plants match "{plantFilter}"</p>
            )}
          </div>
        </section>
      </article>

      <style>{`
        .wg-root { padding: 24px clamp(20px, 4vw, 56px) 64px; }

        .wg-header { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; margin-bottom: 22px; }
        .wg-stamp-panel {
          padding: 14px 18px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
          min-width: 220px;
        }
        @media (max-width: 720px) {
          .wg-header { grid-template-columns: 1fr; }
          .wg-stamp-panel { display: none; }
        }

        .wg-sheet {
          position: relative; padding: 36px clamp(20px, 4vw, 56px) 30px;
          background: color-mix(in oklab, var(--paper) 96%, white 4%);
          background-image:
            radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--paper) 75%, var(--accent) 6%) 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, color-mix(in oklab, var(--paper-deep) 60%, var(--ink) 8%) 0%, transparent 50%);
          border: 1px solid color-mix(in oklab, var(--ink) 12%, transparent);
          box-shadow:
            0 1px 0 color-mix(in oklab, var(--paper) 100%, white 5%) inset,
            0 24px 60px -28px rgba(0, 0, 0, 0.45),
            0 6px 18px -8px rgba(0, 0, 0, 0.18);
        }
        .wg-sheet::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.15  0 0 0 0 0.13  0 0 0 0 0.10  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          opacity: 0.5; mix-blend-mode: multiply; pointer-events: none;
        }
        [data-palette="night"] .wg-sheet::before { mix-blend-mode: overlay; opacity: 0.35; }

        .wg-safety-note {
          position: relative;
          margin: 0 0 34px;
          padding: 18px 20px;
          border: 2px solid var(--accent);
          background: color-mix(in oklab, var(--accent) 7%, var(--paper) 93%);
        }
        .wg-safety-note p { margin: 6px 0 8px; font-size: 18px; }
        .wg-safety-note ul { margin: 0; padding-left: 22px; }
        .wg-safety-note li + li { margin-top: 4px; }

        .wg-section { position: relative; margin-bottom: 28px; }
        .wg-section:last-child { margin-bottom: 0; }
        .wg-divider { padding: 4px 0 24px; opacity: 0.6; }

        .wg-section-head {
          display: grid; grid-template-columns: auto 1fr auto;
          align-items: end; gap: 16px; margin-bottom: 18px;
        }
        .wg-section-num { font-size: 56px; line-height: 0.9; color: var(--pencil); opacity: 0.85; }
        .wg-section-title { font-size: clamp(24px, 3vw, 34px); line-height: 1.05; margin: 2px 0 0; }
        .wg-section-count, .wg-section-note { align-self: end; padding-bottom: 6px; opacity: 0.6; white-space: nowrap; }

        .wg-empty { font-size: 22px; color: var(--pencil); font-style: italic; }

        /* Weekly grid */
        .wg-grid-wrap { overflow-x: auto; margin: 0 -4px; padding: 0 4px 6px; }
        .wg-grid { display: grid; row-gap: 4px; column-gap: 6px; align-items: center; min-width: 560px; }
        .wg-grid-head { font-family: var(--type); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pencil); padding-bottom: 8px; border-bottom: 1px solid var(--hairline); }
        .wg-grid-corner { border-bottom: 1px solid var(--hairline); }
        .wg-day-head { display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; }
        .wg-day-head.is-today { color: var(--accent); }
        .wg-day-label { font-size: 12px; }
        .wg-day-date { font-size: 9px; opacity: 0.75; text-transform: none; letter-spacing: 0.02em; }

        .wg-zone-name {
          display: block; padding: 6px 4px; margin: 0;
          font-size: clamp(18px, 1.8vw, 22px); color: var(--ink); text-align: left; line-height: 1.1;
        }

        .wg-band-chip-cell { display: flex; }
        .wg-band-chip {
          font-family: var(--type); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 7px; border-radius: 10px; white-space: nowrap; display: inline-block;
          border: 1px solid color-mix(in oklab, var(--ink) 14%, transparent);
        }
        .wg-band-5 { background: color-mix(in oklab, var(--stamp) 22%, var(--paper) 78%); color: var(--stamp); }
        .wg-band-4 { background: color-mix(in oklab, var(--accent) 20%, var(--paper) 80%); color: var(--accent); }
        .wg-band-3 { background: color-mix(in oklab, var(--green) 18%, var(--paper) 82%); color: var(--green); }
        .wg-band-2 { background: color-mix(in oklab, var(--pencil) 18%, var(--paper) 82%); color: var(--pencil); }
        .wg-band-1 { background: color-mix(in oklab, var(--ink) 8%, var(--paper) 92%); color: var(--ink-faint); }

        .wg-cell { height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 3px; }
        .wg-cell.is-today { background: color-mix(in oklab, var(--accent) 8%, transparent); }
        .wg-drop { color: var(--accent); font-size: 13px; }

        .wg-fortnight-note { font-size: 18px; color: var(--pencil); margin: 10px 4px 0; }

        /* Watch list */
        .wg-watch-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
        .wg-watch-card {
          padding: 14px 16px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 94%, var(--paper-deep) 6%);
        }
        .wg-watch-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
        .wg-watch-zone { font-size: 24px; }
        .wg-watch-context { opacity: 0.7; white-space: nowrap; }

        .wg-watch-plants { list-style: none; margin: 0 0 8px; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 16px; }
        .wg-watch-plant { display: flex; align-items: baseline; gap: 6px; }
        .wg-plant-link {
          background: transparent; border: 0; padding: 8px 2px; min-height: 44px; cursor: pointer;
          display: inline-flex; align-items: center;
          font-family: var(--serif); font-size: 17px; color: var(--accent);
          text-decoration: underline; text-decoration-color: color-mix(in oklab, var(--accent) 40%, transparent);
          text-underline-offset: 3px;
        }
        .wg-plant-link:hover { text-decoration-color: var(--accent); }
        .wg-watch-band { opacity: 0.65; font-size: 10px; }

        .wg-watch-note { font-family: var(--serif); font-size: 15px; color: var(--ink-soft); margin: 0; text-wrap: pretty; }

        /* Overwatering signs */
        .wg-over-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .wg-over-item {
          padding: 12px 16px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 94%, var(--paper-deep) 6%);
        }
        .wg-over-head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; margin-bottom: 6px; }
        .wg-over-name { font-size: 19px; }
        .wg-over-zone { opacity: 0.65; font-size: 11px; }
        .wg-over-tag {
          font-family: var(--type); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--pencil); opacity: 0.7; margin-left: 4px;
        }
        .wg-over-text { font-family: var(--serif); font-size: 15px; line-height: 1.5; color: var(--ink-soft); margin: 0; text-wrap: pretty; }

        /* Legend */
        .wg-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .wg-legend-row { display: grid; grid-template-columns: 100px 140px 1fr; align-items: center; gap: 12px; }
        .wg-legend-label { font-size: 20px; }
        .wg-legend-note { font-family: var(--serif); font-size: 15px; color: var(--ink-soft); }
        @media (max-width: 600px) {
          .wg-legend-row { grid-template-columns: 90px 1fr; }
          .wg-legend-note { grid-column: 1 / -1; }
        }

        /* All-plants table */
        .wg-filter {
          display: block;
          width: 100%;
          max-width: 320px;
          margin-bottom: 14px;
          padding: 8px 12px;
          min-height: 44px;
          font-family: var(--serif);
          font-size: 15px;
          color: var(--ink);
          background: color-mix(in oklab, var(--paper) 94%, white 6%);
          border: 1px solid var(--hairline);
          border-radius: 3px;
        }
        .wg-filter-label { display: block; margin-bottom: 7px; color: var(--ink-soft); }
        .wg-filter:focus { border-color: var(--accent); }
        .wg-table-wrap { overflow-x: auto; }
        .wg-table { width: 100%; border-collapse: collapse; }
        .wg-table thead th {
          position: sticky; top: 0; z-index: 1;
          text-align: left;
          padding: 0;
          border-bottom: 1px solid var(--hairline);
          background: color-mix(in oklab, var(--paper) 96%, white 4%);
        }
        .wg-th-sort {
          display: inline-flex; align-items: center; gap: 2px;
          width: 100%; min-height: 44px; margin: 0; padding: 8px 10px;
          background: none; border: 0; cursor: pointer; text-align: left;
          font-family: var(--type); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--pencil);
        }
        .wg-th-sort:hover { color: var(--accent); }
        .wg-table tbody tr { border-bottom: 1px dotted var(--hairline); }
        .wg-table tbody tr:hover { background: color-mix(in oklab, var(--accent) 5%, transparent); }
        .wg-table td { padding: 7px 10px; vertical-align: middle; }
        .wg-table-zone { opacity: 0.75; white-space: nowrap; font-size: 13px; }
        .wg-table-pot-name { font-size: 17px; }
        .wg-freq-text { font-family: var(--serif); font-size: 15px; white-space: nowrap; }
        .wg-freq-5 { color: var(--stamp); }
        .wg-freq-4 { color: var(--accent); }
        .wg-freq-3 { color: var(--green); }
        .wg-freq-2 { color: var(--pencil); }
        .wg-freq-1 { color: var(--ink-faint); }
      `}</style>
    </div>
  );
}

window.WateringGuide = WateringGuide;
