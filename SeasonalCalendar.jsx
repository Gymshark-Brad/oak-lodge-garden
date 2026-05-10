// Oak Lodge Garden — SeasonalCalendar.jsx
// Notebook-style monthly view: what's looking good + what needs doing.

const { useState: useState_SC, useEffect: useEffect_SC, useRef: useRef_SC } = React;

function SeasonalCalendar({ onOpenPlant }) {
  const SEASONAL = window.OAK.SEASONAL;
  const MONTHS = window.OAK.MONTHS;
  const MONTHS_SHORT = window.OAK.MONTHS_SHORT;
  const BED_TO_ZONE = window.OAK.BED_TO_ZONE;

  const realMonth = new Date().getMonth();
  const [activeIndex, setActiveIndex] = useState_SC(realMonth);
  const tabsRef = useRef_SC(null);
  const activeTabRef = useRef_SC(null);

  useEffect_SC(() => {
    if (activeTabRef.current && tabsRef.current) {
      const tab = activeTabRef.current;
      const container = tabsRef.current;
      const tabRect = tab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
        container.scrollTo({
          left: tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const monthName = MONTHS[activeIndex];
  const monthData = SEASONAL[monthName] || { highlights: [], tasks: [], mood: "" };

  const handlePlantClick = (plantName, bedName) => {
    const zoneKey = BED_TO_ZONE[bedName];
    if (!zoneKey) return;
    onOpenPlant({ zoneKey, plantName });
  };

  return (
    <div className="cal-root page-turn">
      <div className="cal-header">
        <div>
          <div className="t-stamp" style={{ color: "var(--accent)" }}>The Notebook · Month by Month</div>
          <h1 className="t-display" style={{ fontSize: "min(6vw, 48px)", margin: "6px 0 2px", lineHeight: 1.04 }}>
            Seasonal calendar
          </h1>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)" }}>
            what's looking good &nbsp;·&nbsp; what needs doing
          </div>
        </div>
        <div className="cal-stamp-panel">
          <div className="stamp">Vol. ii · cyclical</div>
          <div className="t-mono" style={{ marginTop: 12 }}>
            36 plants &nbsp;·&nbsp; 12 months<br />
            site · oak lodge, bromsgrove<br />
            recorder · b. h.
          </div>
        </div>
      </div>

      <div className="cal-tabs-wrap">
        <div className="t-stamp" style={{ marginBottom: 8 }}>Choose a month →</div>
        <div className="cal-tabs" ref={tabsRef} role="tablist">
          {MONTHS.map((m, i) => {
            const active = i === activeIndex;
            const isToday = i === realMonth;
            return (
              <button
                key={m}
                ref={active ? activeTabRef : null}
                role="tab"
                aria-selected={active}
                className={"cal-tab" + (active ? " is-active" : "")}
                onClick={() => setActiveIndex(i)}
                title={m}
              >
                <span className="cal-tab-label">{MONTHS_SHORT[i]}</span>
                {active && (
                  <svg className="cal-tab-ring" viewBox="0 0 80 36" aria-hidden="true">
                    <ellipse
                      cx="40" cy="18" rx="34" ry="14"
                      fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"
                      transform="rotate(-2 40 18)" opacity="0.9"
                    />
                    <ellipse
                      cx="40" cy="18" rx="32" ry="13"
                      fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"
                      transform="rotate(-4 40 18)" opacity="0.55"
                    />
                  </svg>
                )}
                {isToday && !active && <span className="cal-tab-today" title="this month">·</span>}
              </button>
            );
          })}
        </div>
      </div>

      <article className="cal-sheet" key={monthName}>
        <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-3deg)" }} />
        <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(2.4deg)" }} />

        <div className="cal-sheet-head">
          <div>
            <div className="t-stamp" style={{ color: "var(--pencil)" }}>
              Month {String(activeIndex + 1).padStart(2, "0")} of 12
              {activeIndex === realMonth ? "  ·  this month" : ""}
            </div>
            <h2 className="t-display cal-month-name">{monthName}</h2>
            {monthData.mood && (
              <div className="t-latin" style={{ fontSize: 22, marginTop: 4, maxWidth: 640 }}>
                {monthData.mood}
              </div>
            )}
          </div>
          <MonthDoodle index={activeIndex} />
        </div>

        <div className="rule" style={{ margin: "26px 0 22px" }} />

        <div className="cal-sections">
          <section className="cal-section">
            <header className="cal-section-head">
              <div className="cal-section-num t-display">i.</div>
              <div>
                <div className="t-stamp" style={{ color: "var(--accent)" }}>What's looking good</div>
                <div className="t-display cal-section-title">In flower &amp; in colour</div>
              </div>
              <div className="cal-section-count t-mono">
                {monthData.highlights.length} {monthData.highlights.length === 1 ? "entry" : "entries"}
              </div>
            </header>

            {monthData.highlights.length === 0 ? (
              <p className="t-hand cal-empty">a quiet month — nothing in particular is shouting.</p>
            ) : (
              <ul className="cal-highlight-list">
                {monthData.highlights.map((h, i) => (
                  <li key={i} className="cal-highlight">
                    <button
                      className="cal-plant-link t-hand"
                      onClick={() => handlePlantClick(h.plant, h.bed)}
                      title={`Open ${h.plant} card`}
                    >
                      {h.plant}
                    </button>
                    <span className="cal-dash" aria-hidden="true">—</span>
                    <span className="cal-note">{h.note}</span>
                    <span className="cal-bed t-mono">{h.bed}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <div className="cal-divider" aria-hidden="true"><div className="rule" /></div>

          <section className="cal-section">
            <header className="cal-section-head">
              <div className="cal-section-num t-display">ii.</div>
              <div>
                <div className="t-stamp" style={{ color: "var(--accent)" }}>What needs doing</div>
                <div className="t-display cal-section-title">To-do &amp; to-prune</div>
              </div>
              <div className="cal-section-count t-mono">
                {monthData.tasks.length} {monthData.tasks.length === 1 ? "task" : "tasks"}
              </div>
            </header>

            {monthData.tasks.length === 0 ? (
              <p className="t-hand cal-empty">nothing pressing this month — read a seed catalogue.</p>
            ) : (
              <ul className="cal-task-list">
                {monthData.tasks.map((t, i) => (
                  <li key={i} className="cal-task">
                    <PencilCheckbox index={i} />
                    <div className="cal-task-body">
                      <div className="t-hand cal-task-text">{t.task}</div>
                      {t.plants && t.plants.length > 0 && (
                        <div className="cal-task-plants">
                          {t.plants.map((pn, j) => {
                            const zone = BED_TO_ZONE[t.bed];
                            const clickable = !!zone;
                            return (
                              <React.Fragment key={pn}>
                                {j > 0 && <span className="cal-plants-sep">·</span>}
                                {clickable ? (
                                  <button className="cal-plant-link-sm" onClick={() => handlePlantClick(pn, t.bed)}>
                                    {pn}
                                  </button>
                                ) : (
                                  <span className="cal-plant-static">{pn}</span>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <span className="cal-bed t-mono">{t.bed}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <div className="rule" style={{ margin: "30px 0 18px" }} />
        <div className="cal-sheet-foot">
          <button className="inkbtn" onClick={() => setActiveIndex((activeIndex + 11) % 12)} title={MONTHS[(activeIndex + 11) % 12]}>
            <span className="arr">←</span>
            <span>{MONTHS[(activeIndex + 11) % 12]}</span>
          </button>
          <div className="t-mono" style={{ opacity: 0.6 }}>turn the page</div>
          <button className="inkbtn" onClick={() => setActiveIndex((activeIndex + 1) % 12)} title={MONTHS[(activeIndex + 1) % 12]}>
            <span>{MONTHS[(activeIndex + 1) % 12]}</span>
            <span className="arr">→</span>
          </button>
        </div>
      </article>

      <style>{`
        .cal-root { padding: 24px clamp(20px, 4vw, 56px) 64px; }

        .cal-header { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; margin-bottom: 22px; }
        .cal-stamp-panel {
          padding: 14px 18px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
          min-width: 220px;
        }
        @media (max-width: 720px) {
          .cal-header { grid-template-columns: 1fr; }
          .cal-stamp-panel { display: none; }
        }

        .cal-tabs-wrap { margin-bottom: 22px; }
        .cal-tabs {
          display: flex; gap: clamp(2px, 0.6vw, 10px);
          overflow-x: auto; padding: 8px 4px 14px; margin: 0 -4px;
          scroll-snap-type: x proximity;
          scrollbar-width: thin;
          scrollbar-color: var(--pencil) transparent;
        }
        .cal-tabs::-webkit-scrollbar { height: 6px; }
        .cal-tabs::-webkit-scrollbar-thumb {
          background: color-mix(in oklab, var(--pencil) 50%, transparent);
          border-radius: 3px;
        }
        .cal-tab {
          position: relative; flex: 1 1 auto; min-width: 64px;
          padding: 10px 4px 14px; background: transparent; border: 0; cursor: pointer;
          font-family: var(--hand); font-size: clamp(22px, 2.4vw, 30px);
          color: var(--ink-soft); line-height: 1; letter-spacing: 0.01em;
          scroll-snap-align: center;
          transition: color 160ms ease, transform 160ms ease;
          min-height: 44px;
        }
        .cal-tab:hover { color: var(--ink); transform: translateY(-1px); }
        .cal-tab.is-active { color: var(--ink); font-weight: 600; }
        .cal-tab-label { position: relative; z-index: 1; display: inline-block; padding: 2px 10px; }
        .cal-tab-ring {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 110%; height: 60px; pointer-events: none; z-index: 0;
        }
        .cal-tab-today {
          position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          color: var(--accent); font-size: 22px; line-height: 0;
        }

        .cal-sheet {
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
          animation: pageTurn 380ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }
        .cal-sheet::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.15  0 0 0 0 0.13  0 0 0 0 0.10  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          opacity: 0.5; mix-blend-mode: multiply; pointer-events: none;
        }
        [data-palette="night"] .cal-sheet::before { mix-blend-mode: overlay; opacity: 0.35; }

        .cal-sheet-head { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; }
        .cal-month-name { font-size: clamp(56px, 9vw, 110px); line-height: 0.92; margin: 6px 0 0; }

        .cal-sections { display: flex; flex-direction: column; gap: 28px; }
        .cal-divider { padding: 4px 0; opacity: 0.6; }

        .cal-section-head {
          display: grid; grid-template-columns: auto 1fr auto;
          align-items: end; gap: 16px; margin-bottom: 18px;
        }
        .cal-section-num { font-size: 56px; line-height: 0.9; color: var(--pencil); opacity: 0.85; }
        .cal-section-title { font-size: clamp(28px, 3.4vw, 40px); line-height: 1.05; margin-top: 2px; }
        .cal-section-count { align-self: end; padding-bottom: 6px; opacity: 0.6; }

        .cal-empty { font-size: 22px; color: var(--pencil); font-style: italic; }

        .cal-highlight-list { list-style: none; margin: 0; padding: 0; }
        .cal-highlight {
          display: grid;
          grid-template-columns: minmax(180px, auto) auto 1fr auto;
          gap: 12px; align-items: baseline;
          padding: 14px 4px;
          border-bottom: 1px dotted var(--hairline);
          min-height: 44px;
        }
        .cal-highlight:last-child { border-bottom: 0; }

        .cal-plant-link {
          background: transparent; border: 0; padding: 6px 0; margin: 0; cursor: pointer;
          font-size: clamp(24px, 2.6vw, 30px);
          color: var(--ink); text-align: left; line-height: 1;
          letter-spacing: 0.005em; position: relative;
          min-height: 44px; display: inline-flex; align-items: center;
        }
        .cal-plant-link::after {
          content: ""; position: absolute; left: 0; right: 8%;
          bottom: 4px; height: 4px;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='4' viewBox='0 0 80 4'><path d='M 1 2 Q 20 0 40 2 T 79 2' fill='none' stroke='%239c5a2c' stroke-width='1.2' stroke-linecap='round' opacity='0.7'/></svg>") repeat-x left center;
          opacity: 0; transition: opacity 160ms ease;
        }
        .cal-plant-link:hover { color: var(--accent); }
        .cal-plant-link:hover::after { opacity: 1; }

        .cal-dash { font-family: var(--serif); color: var(--pencil); font-size: 22px; line-height: 1; }
        .cal-note {
          font-family: var(--serif); font-size: 18px; line-height: 1.45;
          color: var(--ink); text-wrap: pretty;
        }
        .cal-bed {
          justify-self: end; padding: 4px 8px;
          border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 96%, var(--paper-deep) 4%);
          font-size: 10px; letter-spacing: 0.18em; opacity: 0.85; white-space: nowrap;
        }

        @media (max-width: 760px) {
          .cal-highlight {
            grid-template-columns: 1fr auto;
            gap: 6px 12px; padding: 14px 2px;
          }
          .cal-highlight .cal-plant-link { grid-column: 1 / 2; }
          .cal-highlight .cal-bed {
            grid-column: 2 / 3; grid-row: 1; align-self: start; margin-top: 8px;
          }
          .cal-highlight .cal-dash { display: none; }
          .cal-highlight .cal-note { grid-column: 1 / -1; }
        }

        .cal-task-list { list-style: none; margin: 0; padding: 0; }
        .cal-task {
          display: grid; grid-template-columns: 28px 1fr auto;
          gap: 14px; align-items: start;
          padding: 14px 4px;
          border-bottom: 1px dotted var(--hairline);
          min-height: 56px;
        }
        .cal-task:last-child { border-bottom: 0; }

        .cal-task-text {
          font-size: clamp(22px, 2.4vw, 26px);
          line-height: 1.25; color: var(--ink); text-wrap: pretty;
        }
        .cal-task-plants {
          margin-top: 4px;
          font-family: var(--serif); font-size: 16px; font-style: italic;
          color: var(--ink-soft);
          display: flex; flex-wrap: wrap; gap: 4px 8px; align-items: baseline;
        }
        .cal-plant-link-sm {
          background: transparent; border: 0; padding: 0;
          font: inherit; color: var(--accent); cursor: pointer;
          text-decoration: underline;
          text-decoration-color: color-mix(in oklab, var(--accent) 40%, transparent);
          text-underline-offset: 3px;
        }
        .cal-plant-link-sm:hover { text-decoration-color: var(--accent); }
        .cal-plant-static { color: var(--ink-soft); }
        .cal-plants-sep { color: var(--pencil); opacity: 0.6; }

        @media (max-width: 760px) {
          .cal-task { grid-template-columns: 28px 1fr; grid-template-rows: auto auto; }
          .cal-task .cal-bed {
            grid-column: 2 / 3; grid-row: 2; justify-self: start; margin-top: 6px;
          }
        }

        .cal-checkbox { width: 22px; height: 22px; margin-top: 4px; flex-shrink: 0; }

        .cal-sheet-foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}

function PencilCheckbox({ index }) {
  const tilt = ((index % 5) - 2) * 0.7;
  return (
    <svg className="cal-checkbox" viewBox="0 0 24 24"
      style={{ transform: `rotate(${tilt}deg)` }} aria-hidden="true">
      <defs>
        <filter id={`cb-rough-${index}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" seed={index + 1} />
          <feDisplacementMap in="SourceGraphic" scale="0.7" />
        </filter>
      </defs>
      <g filter={`url(#cb-rough-${index})`} fill="none" stroke="var(--pencil)"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 3 4 L 21 3 L 22 22 L 4 21 Z" />
        <path d="M 3 5 L 4 21" opacity="0.5" />
      </g>
    </svg>
  );
}

function MonthDoodle({ index }) {
  const doodles = [
    <g key="jan" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 30 100 C 30 70 40 50 50 30" />
      <path d="M 50 30 C 55 26 62 24 70 24" />
      <path d="M 50 30 L 42 18" />
      <path d="M 38 60 L 28 50" />
      <path d="M 35 80 L 22 76" />
    </g>,
    <g key="feb" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 50" />
      <path d="M 50 50 C 46 46 40 50 40 56 C 40 60 44 62 50 62 C 56 62 60 60 60 56 C 60 50 54 46 50 50" />
      <path d="M 38 90 L 50 88" />
    </g>,
    <g key="mar" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 60" />
      <path d="M 50 60 C 44 56 42 50 44 44 C 48 50 50 56 50 60" />
      <path d="M 50 60 C 56 56 58 50 56 44 C 52 50 50 56 50 60" />
      <path d="M 50 60 C 50 50 50 44 52 38" />
      <path d="M 42 95 L 52 92" />
    </g>,
    <g key="apr" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 22 96 C 36 80 50 60 70 36" />
      <circle cx="38" cy="74" r="4" />
      <circle cx="48" cy="62" r="4" />
      <circle cx="58" cy="50" r="4" />
      <circle cx="44" cy="80" r="3" />
      <circle cx="62" cy="42" r="3" />
    </g>,
    <g key="may" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 64" />
      <circle cx="50" cy="46" r="14" />
      <path d="M 50 32 C 56 38 56 50 50 56" />
      <path d="M 50 32 C 44 38 44 50 50 56" />
      <path d="M 36 46 C 42 42 50 42 56 46" />
      <path d="M 64 46 C 58 42 50 42 44 46" />
      <path d="M 38 78 L 30 70" />
    </g>,
    <g key="jun" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 56" />
      <path d="M 50 56 C 42 56 36 48 38 38 C 44 36 50 40 50 48" />
      <path d="M 50 56 C 58 56 64 48 62 38 C 56 36 50 40 50 48" />
      <path d="M 50 48 L 50 40" />
      <path d="M 40 78 L 30 76" />
      <path d="M 60 84 L 70 82" />
    </g>,
    <g key="jul" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 28" />
      {[28, 36, 44, 52, 60].map((y, i) => (
        <ellipse key={i} cx="50" cy={y} rx="3.4" ry="2.4" />
      ))}
      <path d="M 38 88 L 30 86" />
      <path d="M 62 92 L 70 90" />
    </g>,
    <g key="aug" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 28 L 50 38" />
      <path d="M 50 28 C 56 24 64 26 64 30" />
      <path d="M 38 60 C 32 50 36 40 46 40 C 50 40 50 44 50 44 C 50 44 50 40 54 40 C 64 40 68 50 62 60 C 60 70 54 78 50 78 C 46 78 40 70 38 60 Z" />
    </g>,
    <g key="sep" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 22 L 50 32" />
      <path d="M 50 22 C 54 18 60 20 60 22" />
      <path d="M 42 80 C 36 70 40 56 50 50 C 60 56 64 70 58 80 C 56 86 52 88 50 88 C 48 88 44 86 42 80 Z" />
    </g>,
    <g key="oct" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 96 L 50 60" />
      <path d="M 50 60 L 32 46 L 38 50 L 22 38 L 36 42 L 28 28 L 40 36 L 44 22 L 50 36 L 56 22 L 60 36 L 72 28 L 64 42 L 78 38 L 62 50 L 68 46 L 50 60 Z" />
    </g>,
    <g key="nov" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 22 100 C 30 80 40 56 60 32" />
      <path d="M 60 32 L 70 24" />
      <path d="M 40 68 L 32 60" />
      <path d="M 50 50 L 56 42" />
      <path d="M 46 58 C 40 56 36 60 38 66 C 42 66 46 64 46 58 Z" />
    </g>,
    <g key="dec" stroke="var(--pencil)" fill="none" strokeWidth="1.1" strokeLinecap="round">
      <path d="M 50 100 L 50 30" />
      <path d="M 50 60 C 38 60 30 54 30 46 C 38 48 44 52 50 50" />
      <path d="M 50 60 C 62 60 70 54 70 46 C 62 48 56 52 50 50" />
      <path d="M 50 44 C 40 44 32 38 32 30 C 40 32 46 36 50 34" />
      <path d="M 50 44 C 60 44 68 38 68 30 C 60 32 54 36 50 34" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 100 110"
      style={{ width: 90, height: 100, display: "block", opacity: 0.75 }}
      aria-hidden="true">
      <defs>
        <filter id={`md-rough-${index}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed={index + 3} />
          <feDisplacementMap in="SourceGraphic" scale="1.4" />
        </filter>
      </defs>
      <g filter={`url(#md-rough-${index})`}>{doodles[index]}</g>
    </svg>
  );
}

window.SeasonalCalendar = SeasonalCalendar;
