// Oak Lodge Garden — WateringGuide.jsx
// Weekly watering view: what needs water, how often, and what to leave alone.

const { useMemo: useMemo_WG } = React;

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
  const WATER_BANDS = window.OAK.WATER_BANDS || {};
  const BAND_INFO = window.OAK.WATER_BAND_INFO || {};

  const { dates: weekDates, todayIndex, fortnightOn } = useMemo_WG(() => wgGetWeek(), []);

  const zoneRows = useMemo_WG(() => {
    const rows = [];
    Object.keys(ZONES).forEach((key) => {
      const zone = ZONES[key];
      const bands = zone.plantKey && WATER_BANDS[zone.plantKey];
      if (!bands) return;
      const values = Object.values(bands);
      const maxBand = Math.max(...values);
      rows.push({ key, zone, maxBand });
    });
    rows.sort((a, b) => b.maxBand - a.maxBand || a.zone.title.localeCompare(b.zone.title));
    return rows;
  }, []);

  const watchList = useMemo_WG(() => {
    const items = [];
    zoneRows.forEach(({ key, zone, maxBand }) => {
      const bands = WATER_BANDS[zone.plantKey];
      Object.entries(bands).forEach(([name, band]) => {
        const gap = maxBand - band;
        const flagged = zone.isPot ? gap >= 2 : band === 1 && maxBand >= 3;
        if (flagged) {
          items.push({ zoneKey: key, zoneTitle: zone.title, plantName: name, band, maxBand, isPot: !!zone.isPot });
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

  const handlePlantClick = (zoneKey, plantName) => {
    onOpenPlant({ zoneKey, plantName, fromWatering: true });
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
            what needs water &nbsp;·&nbsp; and what to leave alone
          </div>
        </div>
        <div className="wg-stamp-panel">
          <div className="stamp">Vol. iii · weekly</div>
          <div className="t-mono" style={{ marginTop: 12 }}>
            {zoneRows.length} zones &nbsp;·&nbsp; 5 water bands<br />
            {watchList.length} on overwatering watch<br />
            recorder · b. h.
          </div>
        </div>
      </div>

      <article className="wg-sheet">
        <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-3deg)" }} />
        <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(2.4deg)" }} />

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">i.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>This week</div>
              <div className="t-display wg-section-title">Watering by zone</div>
            </div>
            <div className="t-mono wg-section-note">week of {dayHeader[0].date}</div>
          </header>

          <div className="wg-grid-wrap">
            <div className="wg-grid" style={{ gridTemplateColumns: `minmax(150px, auto) 100px repeat(7, 34px)` }}>
              <div className="wg-grid-head wg-grid-corner" />
              <div className="wg-grid-head t-mono">frequency</div>
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
                        {on ? <span className="wg-drop" aria-hidden="true">●</span> : null}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          {zoneRows.some(({ maxBand }) => maxBand === 2) && !fortnightOn && (
            <p className="t-hand wg-fortnight-note">
              This is an "off" week for fortnightly plants — skip them unless it's been properly dry.
            </p>
          )}
        </section>

        <div className="wg-divider" aria-hidden="true"><div className="rule" /></div>

        <section className="wg-section">
          <header className="wg-section-head">
            <div className="wg-section-num t-display">ii.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Overwatering watch</div>
              <div className="t-display wg-section-title">Plants sharing soil with thirstier neighbours</div>
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
                      {w.isPot ? "shared pot" : "shared bed"} · watered for {BAND_INFO[w.maxBand].label.toLowerCase()}
                    </span>
                  </div>
                  <ul className="wg-watch-plants">
                    {w.plants.map((p) => (
                      <li key={p.plantName} className="wg-watch-plant">
                        <button className="wg-plant-link" onClick={() => handlePlantClick(p.zoneKey, p.plantName)}>
                          {p.plantName}
                        </button>
                        <span className="t-mono wg-watch-band">wants {BAND_INFO[p.band].label.toLowerCase()}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="wg-watch-note">
                    Don't add extra water for {w.plants.length === 1 ? "this one" : "these"} — good drainage matters more than less water for the whole {w.isPot ? "pot" : "bed"}.
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
              <div className="t-display wg-section-title">The five bands</div>
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

        .wg-section { position: relative; margin-bottom: 28px; }
        .wg-section:last-child { margin-bottom: 0; }
        .wg-divider { padding: 4px 0 24px; opacity: 0.6; }

        .wg-section-head {
          display: grid; grid-template-columns: auto 1fr auto;
          align-items: end; gap: 16px; margin-bottom: 18px;
        }
        .wg-section-num { font-size: 56px; line-height: 0.9; color: var(--pencil); opacity: 0.85; }
        .wg-section-title { font-size: clamp(24px, 3vw, 34px); line-height: 1.05; margin-top: 2px; }
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
          background: transparent; border: 0; padding: 0; cursor: pointer;
          font-family: var(--serif); font-size: 17px; color: var(--accent);
          text-decoration: underline; text-decoration-color: color-mix(in oklab, var(--accent) 40%, transparent);
          text-underline-offset: 3px;
        }
        .wg-plant-link:hover { text-decoration-color: var(--accent); }
        .wg-watch-band { opacity: 0.65; font-size: 10px; }

        .wg-watch-note { font-family: var(--serif); font-size: 15px; color: var(--ink-soft); margin: 0; text-wrap: pretty; }

        /* Legend */
        .wg-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .wg-legend-row { display: grid; grid-template-columns: 100px 140px 1fr; align-items: center; gap: 12px; }
        .wg-legend-label { font-size: 20px; }
        .wg-legend-note { font-family: var(--serif); font-size: 15px; color: var(--ink-soft); }
        @media (max-width: 600px) {
          .wg-legend-row { grid-template-columns: 90px 1fr; }
          .wg-legend-note { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  );
}

window.WateringGuide = WateringGuide;
