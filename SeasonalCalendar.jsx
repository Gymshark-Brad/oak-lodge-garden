// Oak Lodge Garden — SeasonalCalendar.jsx
// A maintenance-first monthly job sheet for a new gardener.

const { useState: useState_SC, useEffect: useEffect_SC, useMemo: useMemo_SC, useRef: useRef_SC } = React;

const SC_STORAGE_KEY = "oak-seasonal-completed-v1";
const SC_PRIORITY_GROUPS = [
  { id: "first", eyebrow: "Time-sensitive", title: "Do first", note: "Jobs with a pruning window, weather trigger or deadline." },
  { id: "month", eyebrow: "Important & flexible", title: "This month", note: "Work to fit around suitable conditions during the month." },
  { id: "ongoing", eyebrow: "Repeat as needed", title: "Keep on top of", note: "Short rounds that stop small jobs becoming large ones." },
];
const SC_CATEGORY_LABELS = {
  prune: "Prune",
  deadhead: "Deadhead",
  "cut-back": "Cut back",
  ground: "Ground work",
  protect: "Protect",
  prepare: "Prepare",
  support: "Support",
  feed: "Feed",
  check: "Check",
  harvest: "Harvest",
};

function scReadCompletion() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SC_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function scWriteCompletion(value) {
  try {
    localStorage.setItem(SC_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Private browsing and restricted storage should not break the calendar.
  }
}

function SeasonalCalendar({ onOpenPlant }) {
  const SEASONAL = window.OAK.SEASONAL;
  const MONTHS = window.OAK.MONTHS;
  const MONTHS_SHORT = window.OAK.MONTHS_SHORT;
  const ZONES = window.OAK.ZONES;
  const PLANT_BY_ID = window.OAK.PLANT_BY_ID || {};

  const now = new Date();
  const realMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const yearKey = String(currentYear);
  const [activeIndex, setActiveIndex] = useState_SC(realMonth);
  const [completionByYear, setCompletionByYear] = useState_SC(scReadCompletion);
  const tabsRef = useRef_SC(null);
  const activeTabRef = useRef_SC(null);

  useEffect_SC(() => {
    if (!activeTabRef.current || !tabsRef.current) return;
    const tab = activeTabRef.current;
    const container = tabsRef.current;
    const tabRect = tab.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
      container.scrollTo({
        left: tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2,
        behavior: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }
  }, [activeIndex]);

  const monthName = MONTHS[activeIndex];
  const monthData = SEASONAL[monthName] || { theme: "", jobs: [], highlights: [], indoorJobs: [] };
  const completed = completionByYear[yearKey] || {};
  const allMonthJobs = [...monthData.jobs, ...monthData.indoorJobs];
  const completedCount = allMonthJobs.filter((item) => completed[item.id]).length;

  const jobsByPriority = useMemo_SC(() => {
    const grouped = { first: [], month: [], ongoing: [] };
    monthData.jobs.forEach((item) => {
      if (grouped[item.priority]) grouped[item.priority].push(item);
    });
    return grouped;
  }, [monthData]);

  const locationLabel = (entry, compact) => {
    if (entry.potKey === "bed5-medium-pot") return "Flower Bed 5 · medium pot";
    if (entry.potKey === "bed5-little-pot") return "Flower Bed 5 · little pot";
    if (entry.scope === "bed5-big-pot") return "Flower Bed 5 · big pot";
    const labels = (entry.zoneKeys || [])
      .map((zoneKey) => ZONES[zoneKey] && ZONES[zoneKey].title)
      .filter(Boolean);
    if (labels.length === 0) return "Whole garden";
    if (!compact || labels.length <= 2) return labels.join(" · ");
    return labels[0] + " +" + (labels.length - 1) + " areas";
  };

  const toggleJob = (jobId) => {
    setCompletionByYear((current) => {
      const nextYear = { ...(current[yearKey] || {}) };
      if (nextYear[jobId]) delete nextYear[jobId];
      else nextYear[jobId] = true;
      const next = { ...current, [yearKey]: nextYear };
      scWriteCompletion(next);
      return next;
    });
  };

  const resetMonth = () => {
    const monthIds = new Set(allMonthJobs.map((item) => item.id));
    setCompletionByYear((current) => {
      const nextYear = { ...(current[yearKey] || {}) };
      monthIds.forEach((id) => delete nextYear[id]);
      const next = { ...current, [yearKey]: nextYear };
      scWriteCompletion(next);
      return next;
    });
  };

  const openSinglePlant = (item) => {
    if (!onOpenPlant || item.scope !== "plant" || item.plantIds.length !== 1) return;
    const record = PLANT_BY_ID[item.plantIds[0]];
    if (!record) return;
    onOpenPlant({
      zoneKey: record.zoneKey,
      plantId: record.plant.id,
      plantName: record.plant.name,
    });
  };

  const selectTab = (index) => {
    const nextIndex = (index + MONTHS.length) % MONTHS.length;
    setActiveIndex(nextIndex);
    window.requestAnimationFrame(() => {
      const nextTab = tabsRef.current && tabsRef.current.querySelector(`[data-tab-index="${nextIndex}"]`);
      if (nextTab) nextTab.focus();
    });
  };

  const handleTabKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(MONTHS.length - 1);
    }
  };

  const renderJob = (item, indoor) => {
    const isDone = !!completed[item.id];
    const canOpenPlant = item.scope === "plant" && item.plantIds.length === 1 && !!PLANT_BY_ID[item.plantIds[0]];
    return (
      <li className={"cal-job" + (isDone ? " is-done" : "") + (indoor ? " is-indoor" : "")} key={item.id}>
        <label className="cal-job-check">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => toggleJob(item.id)}
            aria-label={`Mark “${item.title}” ${isDone ? "not complete" : "complete"}`}
          />
          <span aria-hidden="true" />
        </label>
        <div className="cal-job-main">
          <div className="cal-job-meta">
            <span className={"cal-category is-" + item.category}>{SC_CATEGORY_LABELS[item.category]}</span>
            <span className="t-mono cal-location">{locationLabel(item, true)}</span>
          </div>
          <h4 className="t-hand cal-job-title">{item.title}</h4>
          <p className="cal-job-timing"><span className="t-stamp">When</span>{item.timing}</p>
          <p className="cal-job-summary">{item.summary}</p>
          <details className="cal-job-details">
            <summary><span>How to do it</span></summary>
            <div className="cal-job-details-body">
              <p className="cal-job-why"><span className="t-stamp">Why it matters</span>{item.why}</p>
              <ol>
                {item.steps.map((step, index) => <li key={index}>{step}</li>)}
              </ol>
              <p className="cal-done-when"><span className="t-stamp">Done when</span>{item.doneWhen}</p>
              {item.caution && (
                <p className="cal-job-caution"><span className="t-stamp">Take care</span>{item.caution}</p>
              )}
              {(item.zoneKeys || []).length > 2 && (
                <p className="cal-all-locations"><span className="t-stamp">Areas</span>{locationLabel(item, false)}</p>
              )}
              {canOpenPlant && (
                <button className="cal-profile-link" onClick={() => openSinglePlant(item)}>
                  Open the full plant care profile <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </details>
        </div>
      </li>
    );
  };

  return (
    <div className="cal-root page-turn">
      <header className="cal-header">
        <div>
          <div className="t-stamp" style={{ color: "var(--accent)" }}>The working notebook · month by month</div>
          <h1 className="t-display">Seasonal maintenance</h1>
          <p className="t-hand">what to prune · what to protect · what to prepare next</p>
        </div>
        <div className="cal-stamp-panel">
          <div className="stamp">Practical year · {currentYear}</div>
          <div className="t-mono">
            outdoor work first<br />
            indoor notes kept separate<br />
            watering has its own guide
          </div>
        </div>
      </header>

      <div className="cal-tabs-wrap">
        <div className="t-stamp">Choose a month →</div>
        <div className="cal-tabs" ref={tabsRef} role="tablist" aria-label="Seasonal maintenance month">
          {MONTHS.map((month, index) => {
            const active = index === activeIndex;
            const isToday = index === realMonth;
            return (
              <button
                key={month}
                ref={active ? activeTabRef : null}
                role="tab"
                id={`calendar-month-tab-${index}`}
                aria-controls="calendar-month-panel"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                data-tab-index={index}
                className={"cal-tab" + (active ? " is-active" : "")}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                title={month}
              >
                <span className="cal-tab-label">{MONTHS_SHORT[index]}</span>
                {active && (
                  <svg className="cal-tab-ring" viewBox="0 0 80 36" aria-hidden="true">
                    <ellipse cx="40" cy="18" rx="34" ry="14" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" transform="rotate(-2 40 18)" opacity="0.9" />
                    <ellipse cx="40" cy="18" rx="32" ry="13" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" transform="rotate(-4 40 18)" opacity="0.55" />
                  </svg>
                )}
                {isToday && !active && <span className="cal-tab-today" title="this month">·</span>}
              </button>
            );
          })}
        </div>
      </div>

      <article
        className="cal-sheet"
        key={monthName}
        id="calendar-month-panel"
        role="tabpanel"
        aria-labelledby={`calendar-month-tab-${activeIndex}`}
        tabIndex="0"
      >
        <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-3deg)" }} />
        <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(2.4deg)" }} />

        <div className="cal-sheet-head">
          <div>
            <div className="t-stamp" style={{ color: "var(--pencil)" }}>
              Month {String(activeIndex + 1).padStart(2, "0")} of 12
              {activeIndex === realMonth ? " · this month" : ""}
            </div>
            <h2 className="t-display cal-month-name">{monthName}</h2>
            <p className="t-latin cal-theme">{monthData.theme}</p>
          </div>
          <MonthDoodle index={activeIndex} />
        </div>

        <div className="cal-progress">
          <div>
            <span className="t-stamp">This month’s sheet</span>
            <strong className="t-hand">{completedCount} of {allMonthJobs.length} jobs ticked off</strong>
          </div>
          <div className="cal-progress-actions">
            <span className="t-mono">saved on this device · {currentYear}</span>
            {completedCount > 0 && (
              <button className="cal-reset" onClick={resetMonth}>Reset {monthName}</button>
            )}
          </div>
        </div>

        <section className="cal-work" aria-labelledby="cal-work-heading">
          <header className="cal-section-heading">
            <div className="cal-section-num t-display">i.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>Outdoor work</div>
              <h3 id="cal-work-heading" className="t-display">The maintenance round</h3>
            </div>
          </header>

          <div className="cal-priority-groups">
            {SC_PRIORITY_GROUPS.map((group) => {
              const items = jobsByPriority[group.id];
              if (!items.length) return null;
              return (
                <section className={"cal-priority is-" + group.id} key={group.id}>
                  <header>
                    <div>
                      <span className="t-stamp">{group.eyebrow}</span>
                      <h4 className="t-display">{group.title}</h4>
                      <p>{group.note}</p>
                    </div>
                    <span className="t-mono">{items.length} {items.length === 1 ? "job" : "jobs"}</span>
                  </header>
                  <ul className="cal-job-list">{items.map((item) => renderJob(item, false))}</ul>
                </section>
              );
            })}
          </div>
        </section>

        <div className="rule cal-major-rule" />

        <section className="cal-highlights" aria-labelledby="cal-highlights-heading">
          <header className="cal-section-heading">
            <div className="cal-section-num t-display">ii.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--accent)" }}>A quick look around</div>
              <h3 id="cal-highlights-heading" className="t-display">What you’ll notice</h3>
            </div>
          </header>
          <p className="cal-section-intro">A few garden-level moments to look out for—not a catalogue of every plant in flower.</p>
          <div className="cal-highlight-grid">
            {monthData.highlights.map((item, index) => (
              <article className="cal-highlight-card" key={item.id} style={{ transform: `rotate(${((index % 3) - 1) * 0.35}deg)` }}>
                <span className="t-mono">{locationLabel(item, true)}</span>
                <h4 className="t-hand">{item.title}</h4>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="rule cal-major-rule" />

        <section className="cal-indoor" aria-labelledby="cal-indoor-heading">
          <header className="cal-section-heading">
            <div className="cal-section-num t-display">iii.</div>
            <div>
              <div className="t-stamp" style={{ color: "var(--green)" }}>Kept separate</div>
              <h3 id="cal-indoor-heading" className="t-display">Indoors this month</h3>
            </div>
          </header>
          {monthData.indoorJobs.length > 0 ? (
            <ul className="cal-job-list cal-indoor-list">
              {monthData.indoorJobs.map((item) => renderJob(item, true))}
            </ul>
          ) : (
            <p className="t-hand cal-empty">nothing extra for the house plants this month — keep following their normal care.</p>
          )}
        </section>

        <div className="rule cal-major-rule" />
        <footer className="cal-sheet-foot">
          <button className="inkbtn" onClick={() => setActiveIndex((activeIndex + 11) % 12)} title={MONTHS[(activeIndex + 11) % 12]}>
            <span className="arr">←</span><span>{MONTHS[(activeIndex + 11) % 12]}</span>
          </button>
          <div className="t-mono" style={{ opacity: 0.6 }}>turn the page</div>
          <button className="inkbtn" onClick={() => setActiveIndex((activeIndex + 1) % 12)} title={MONTHS[(activeIndex + 1) % 12]}>
            <span>{MONTHS[(activeIndex + 1) % 12]}</span><span className="arr">→</span>
          </button>
        </footer>
      </article>

      <style>{`
        .cal-root { padding: 24px clamp(20px, 4vw, 56px) 64px; }
        .cal-header { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; margin-bottom: 22px; }
        .cal-header h1 { font-size: min(6vw, 50px); margin: 6px 0 2px; line-height: 1.04; }
        .cal-header > div > p { margin: 0; font-size: 23px; color: var(--pencil); }
        .cal-stamp-panel { min-width: 230px; padding: 14px 18px; border: 1px dashed var(--hairline); background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%); }
        .cal-stamp-panel .t-mono { margin-top: 12px; line-height: 1.7; }
        .cal-tabs-wrap { margin-bottom: 22px; }
        .cal-tabs-wrap > .t-stamp { margin-bottom: 8px; }
        .cal-tabs { display: flex; gap: clamp(2px, .6vw, 10px); overflow-x: auto; padding: 8px 4px 14px; margin: 0 -4px; scroll-snap-type: x proximity; scrollbar-width: thin; scrollbar-color: var(--pencil) transparent; }
        .cal-tabs::-webkit-scrollbar { height: 6px; }
        .cal-tabs::-webkit-scrollbar-thumb { background: color-mix(in oklab, var(--pencil) 50%, transparent); border-radius: 3px; }
        .cal-tab { position: relative; flex: 1 1 auto; min-width: 64px; min-height: 44px; padding: 10px 4px 14px; border: 0; background: transparent; color: var(--ink-soft); cursor: pointer; font: clamp(22px, 2.4vw, 30px)/1 var(--hand); scroll-snap-align: center; transition: color 160ms ease, transform 160ms ease; }
        .cal-tab:hover { color: var(--ink); transform: translateY(-1px); }
        .cal-tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .cal-tab.is-active { color: var(--ink); font-weight: 600; }
        .cal-tab-label { position: relative; z-index: 1; display: inline-block; padding: 2px 10px; }
        .cal-tab-ring { position: absolute; left: 50%; top: 50%; width: 110%; height: 60px; pointer-events: none; z-index: 0; transform: translate(-50%, -50%); }
        .cal-tab-today { position: absolute; bottom: 2px; left: 50%; color: var(--accent); font-size: 22px; line-height: 0; transform: translateX(-50%); }
        .cal-sheet { position: relative; padding: 36px clamp(20px, 4vw, 56px) 30px; border: 1px solid color-mix(in oklab, var(--ink) 12%, transparent); background-color: color-mix(in oklab, var(--paper) 96%, white 4%); background-image: radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--paper) 75%, var(--accent) 6%) 0%, transparent 40%), radial-gradient(circle at 100% 100%, color-mix(in oklab, var(--paper-deep) 60%, var(--ink) 8%) 0%, transparent 50%); box-shadow: 0 18px 40px -32px rgba(0,0,0,.45); animation: pageTurn 380ms cubic-bezier(.2,.7,.2,1) both; }
        .cal-sheet::before { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .45; mix-blend-mode: multiply; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .15  0 0 0 0 .13  0 0 0 0 .10  0 0 0 .06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"); }
        [data-palette="night"] .cal-sheet::before { mix-blend-mode: overlay; opacity: .3; }
        .cal-sheet-head { position: relative; display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; }
        .cal-month-name { margin: 6px 0 0; font-size: clamp(56px, 9vw, 108px); line-height: .92; }
        .cal-theme { max-width: 760px; margin: 12px 0 0; font-size: 23px; line-height: 1.35; }
        .cal-progress { position: relative; display: flex; justify-content: space-between; gap: 20px; align-items: center; margin: 28px 0 34px; padding: 15px 18px; border: 1px dashed var(--hairline); background: color-mix(in oklab, var(--paper) 91%, var(--green) 9%); }
        .cal-progress > div:first-child { display: flex; flex-direction: column; gap: 3px; }
        .cal-progress strong { font-size: 23px; font-weight: 600; }
        .cal-progress-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: flex-end; }
        .cal-reset { min-height: 44px; padding: 8px 12px; border: 1px solid var(--hairline); background: var(--paper); color: var(--ink); cursor: pointer; font: 14px var(--type); }
        .cal-reset:hover { border-color: var(--accent); color: var(--accent); }
        .cal-reset:focus-visible, .cal-profile-link:focus-visible, .cal-job-details summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .cal-section-heading { position: relative; display: grid; grid-template-columns: auto 1fr; gap: 16px; align-items: end; margin-bottom: 18px; }
        .cal-section-heading h3 { margin: 2px 0 0; font-size: clamp(30px, 3.6vw, 43px); line-height: 1.05; }
        .cal-section-num { color: var(--pencil); opacity: .85; font-size: 56px; line-height: .9; }
        .cal-priority-groups { display: grid; gap: 26px; }
        .cal-priority { position: relative; border-left: 4px solid var(--pencil); padding-left: clamp(14px, 2vw, 24px); }
        .cal-priority.is-first { border-left-color: var(--stamp); }
        .cal-priority.is-month { border-left-color: var(--accent); }
        .cal-priority.is-ongoing { border-left-color: var(--green); }
        .cal-priority > header { display: flex; align-items: start; justify-content: space-between; gap: 16px; margin-bottom: 9px; }
        .cal-priority > header h4 { margin: 2px 0; font-size: 31px; line-height: 1; }
        .cal-priority > header p { margin: 4px 0 0; color: var(--ink-soft); font-size: 16px; }
        .cal-priority > header > .t-mono { padding-top: 6px; white-space: nowrap; }
        .cal-job-list { list-style: none; margin: 0; padding: 0; }
        .cal-job { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 12px; padding: 17px 4px 18px; border-bottom: 1px dotted var(--hairline); transition: opacity 160ms ease; }
        .cal-job:last-child { border-bottom: 0; }
        .cal-job.is-done { opacity: .58; }
        .cal-job.is-done .cal-job-title { text-decoration: line-through; text-decoration-thickness: 1px; }
        .cal-job-check { position: relative; width: 28px; height: 28px; margin-top: 4px; cursor: pointer; }
        .cal-job-check input { position: absolute; z-index: 1; inset: 0; width: 28px; height: 28px; margin: 0; opacity: 0; cursor: pointer; }
        .cal-job-check span { display: block; width: 24px; height: 24px; margin: 2px; border: 1.5px solid var(--pencil); transform: rotate(-1deg); background: color-mix(in oklab, var(--paper) 96%, transparent); }
        .cal-job-check input:checked + span::after { content: ""; display: block; width: 15px; height: 8px; margin: 4px 0 0 3px; border-left: 2px solid var(--accent); border-bottom: 2px solid var(--accent); transform: rotate(-45deg); }
        .cal-job-check input:focus-visible + span { outline: 2px solid var(--accent); outline-offset: 3px; }
        .cal-job-meta { display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: center; }
        .cal-category { display: inline-flex; align-items: center; min-height: 25px; padding: 3px 8px; border: 1px solid currentColor; color: var(--accent); font: 10px var(--type); letter-spacing: .12em; text-transform: uppercase; }
        .cal-category.is-protect, .cal-category.is-check { color: var(--stamp); }
        .cal-category.is-ground, .cal-category.is-prepare, .cal-category.is-support { color: var(--green); }
        .cal-location { color: var(--ink-soft); letter-spacing: .08em; }
        .cal-job-title { margin: 7px 0 3px; color: var(--ink); font-size: clamp(24px, 2.5vw, 29px); line-height: 1.15; }
        .cal-job-timing, .cal-job-summary { margin: 5px 0 0; line-height: 1.48; }
        .cal-job-timing { color: var(--ink-soft); font-size: 15px; }
        .cal-job-timing .t-stamp, .cal-job-details-body .t-stamp { display: block; margin-bottom: 2px; font-size: 9px; color: var(--pencil); }
        .cal-job-summary { max-width: 920px; font-size: 17px; color: var(--ink); }
        .cal-job-details { margin-top: 10px; }
        .cal-job-details > summary { width: fit-content; min-height: 44px; padding: 10px 4px; color: var(--accent); cursor: pointer; font: 13px var(--type); letter-spacing: .08em; text-transform: uppercase; }
        .cal-job-details > summary::marker { color: var(--accent); }
        .cal-job-details-body { max-width: 880px; margin: 3px 0 4px; padding: 14px 16px 15px; border-left: 3px solid color-mix(in oklab, var(--accent) 55%, var(--paper)); background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%); }
        .cal-job-details-body p { margin: 0; line-height: 1.5; }
        .cal-job-details-body ol { margin: 13px 0; padding-left: 22px; }
        .cal-job-details-body li { margin: 7px 0; line-height: 1.45; }
        .cal-done-when { margin-top: 12px !important; padding-top: 10px; border-top: 1px dotted var(--hairline); }
        .cal-job-caution { margin-top: 12px !important; padding: 10px 11px; border-left: 3px solid var(--stamp); background: color-mix(in oklab, var(--paper) 89%, var(--stamp) 11%); }
        .cal-job-caution .t-stamp { color: var(--stamp); }
        .cal-all-locations { margin-top: 12px !important; color: var(--ink-soft); font-size: 14px; }
        .cal-profile-link { min-height: 44px; margin-top: 12px; padding: 8px 0; border: 0; background: transparent; color: var(--accent); cursor: pointer; font: 16px var(--serif); text-decoration: underline; text-underline-offset: 3px; }
        .cal-major-rule { margin: 34px 0 28px; }
        .cal-section-intro { max-width: 760px; margin: -6px 0 18px 72px; color: var(--ink-soft); font-size: 17px; line-height: 1.5; }
        .cal-highlight-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-left: 72px; }
        .cal-highlight-card { padding: 15px 16px 16px; border: 1px solid var(--hairline); background: color-mix(in oklab, var(--paper) 91%, var(--green) 9%); }
        .cal-highlight-card .t-mono { color: var(--ink-soft); letter-spacing: .1em; }
        .cal-highlight-card h4 { margin: 7px 0 3px; font-size: 24px; line-height: 1.1; }
        .cal-highlight-card p { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.45; }
        .cal-indoor-list { margin-left: 72px; padding: 0 14px; border: 1px dashed var(--hairline); background: color-mix(in oklab, var(--paper) 92%, var(--green) 8%); }
        .cal-job.is-indoor { border-left: 4px solid var(--green); padding-left: 12px; }
        .cal-empty { margin: 0 0 0 72px; color: var(--pencil); font-size: 22px; font-style: italic; }
        .cal-sheet-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        @media (max-width: 760px) {
          .cal-header { grid-template-columns: 1fr; }
          .cal-header h1 { font-size: clamp(40px, 12vw, 52px); }
          .cal-stamp-panel { display: none; }
          .cal-sheet { padding-inline: 18px; }
          .cal-sheet-head svg { width: 64px !important; height: 74px !important; }
          .cal-progress { align-items: flex-start; flex-direction: column; }
          .cal-progress-actions { justify-content: flex-start; }
          .cal-priority { padding-left: 12px; }
          .cal-priority > header { align-items: flex-start; }
          .cal-priority > header p { max-width: 260px; }
          .cal-job { grid-template-columns: 32px minmax(0, 1fr); gap: 9px; }
          .cal-section-intro, .cal-highlight-grid, .cal-indoor-list, .cal-empty { margin-left: 0; }
          .cal-highlight-grid { grid-template-columns: 1fr; }
          .cal-indoor-list { padding-inline: 8px; }
          .cal-sheet-foot .t-mono { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cal-sheet { animation: none; }
          .cal-tab, .cal-job { transition: none; }
        }
      `}</style>
    </div>
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
