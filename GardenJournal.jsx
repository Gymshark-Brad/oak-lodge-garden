// Oak Lodge Garden — visual month-by-month change journal.

const { useMemo: useMemo_GJ, useState: useState_GJ } = React;

const JOURNAL_AREAS = [
  { id: "all", label: "All" },
  { id: "back", label: "Back Garden" },
  { id: "front", label: "Front Garden" },
  { id: "house", label: "House Plants" },
];

const JOURNAL_ACTIONS = {
  baseline: { label: "first recorded", mark: "01" },
  planted: { label: "went in", mark: "+" },
  moved: { label: "moved", mark: "→" },
  removed: { label: "went out", mark: "−" },
  work: { label: "garden work", mark: "✓" },
  photographed: { label: "photographed", mark: "◎" },
};

function GardenJournal({ onOpenPlant, onOpenZone, onOpenLightbox }) {
  const entries = (window.OAK.JOURNAL && window.OAK.JOURNAL.entries) || [];
  const [area, setArea] = useState_GJ("all");
  const [jumpedMonth, setJumpedMonth] = useState_GJ(entries[0] ? entries[0].id : null);

  const visibleEntries = useMemo_GJ(
    () => entries.filter((entry) => area === "all" || entry.events.some((event) => event.area === area)),
    [entries, area]
  );
  const years = useMemo_GJ(
    () => Array.from(new Set(entries.map((entry) => entry.year))),
    [entries]
  );
  const eventCount = visibleEntries.reduce(
    (total, entry) => total + entry.events.filter((event) => area === "all" || event.area === area).length,
    0
  );

  const jumpTo = (entryId) => {
    const target = document.getElementById(`journal-${entryId}`);
    if (!target) return;
    setJumpedMonth(entryId);
    target.scrollIntoView({ behavior: prefersReducedJournalMotion() ? "auto" : "smooth", block: "start" });
    window.setTimeout(() => target.focus({ preventScroll: true }), prefersReducedJournalMotion() ? 0 : 380);
  };

  const jumpToYear = (year) => {
    const first = visibleEntries.find((entry) => entry.year === year) || entries.find((entry) => entry.year === year);
    if (first) jumpTo(first.id);
  };

  return (
    <div className="journal-root page-turn">
      <header className="journal-hero">
        <div className="journal-hero-copy">
          <div className="t-stamp journal-kicker">The Oak Lodge record · what changed &amp; when</div>
          <h1 className="t-display">Garden journal</h1>
          <p className="t-hand journal-deck">
            new arrivals, second chances, things that moved on — and the photographs that remember them
          </p>
        </div>
        <div className="journal-volume">
          <div className="stamp">Vol. iii · changes</div>
          <div className="t-mono">
            opened · may 2026<br />
            {entries.length} monthly pages · {entries.reduce((sum, entry) => sum + entry.events.length, 0)} notes<br />
            recorder · b. h.
          </div>
        </div>
      </header>

      <div className="journal-intro-rule" aria-hidden="true">
        <span>latest entry first</span>
      </div>

      <section className="journal-index" aria-label="Journal controls">
        <div className="journal-index-block">
          <div className="t-stamp">Year</div>
          <div className="journal-year-list">
            {years.map((year) => (
              <button key={year} className="journal-year" onClick={() => jumpToYear(year)}>
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-index-block journal-month-block">
          <div className="t-stamp">Turn to a page</div>
          <div className="journal-month-list">
            {entries.map((entry) => (
              <button
                key={entry.id}
                className="journal-month-tab"
                aria-pressed={jumpedMonth === entry.id}
                onClick={() => jumpTo(entry.id)}
              >
                {entry.label.replace(` ${entry.year}`, "")}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-index-block journal-filter-block">
          <div className="t-stamp">Show me</div>
          <div className="journal-filter-list" role="group" aria-label="Filter journal by location">
            {JOURNAL_AREAS.map((filter) => (
              <button
                key={filter.id}
                className="journal-filter"
                aria-pressed={area === filter.id}
                onClick={() => {
                  setArea(filter.id);
                  setJumpedMonth(null);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="t-hand journal-result-note" aria-live="polite">
        {eventCount} {eventCount === 1 ? "note" : "notes"} across {visibleEntries.length} {visibleEntries.length === 1 ? "month" : "months"}
      </div>

      <div className="journal-timeline">
        {visibleEntries.map((entry, entryIndex) => {
          const events = entry.events.filter((event) => area === "all" || event.area === area);
          const photos = entry.photos.filter((photo) => area === "all" || photo.area === area);
          return (
            <article
              className="journal-entry"
              id={`journal-${entry.id}`}
              key={entry.id}
              tabIndex="-1"
              aria-labelledby={`journal-title-${entry.id}`}
            >
              <div className="journal-timeline-date" aria-hidden="true">
                <span>{String(entry.month).padStart(2, "0")}</span>
                <small>{entry.year}</small>
              </div>

              <div className="journal-spread">
                <span className="tape journal-tape journal-tape-left" />
                <span className="tape journal-tape journal-tape-right" />
                <div className="journal-fold" aria-hidden="true" />

                <div className="journal-page journal-page-photos">
                  <div className="journal-date-line">
                    <span className="t-stamp">Entry {String(entries.length - entryIndex).padStart(2, "0")}</span>
                    <time className="t-hand" dateTime={`${entry.year}-${String(entry.month).padStart(2, "0")}`}>
                      {entry.label}
                    </time>
                  </div>
                  <h2 className="t-display" id={`journal-title-${entry.id}`}>{entry.title}</h2>
                  <p className="t-hand journal-note">{entry.note}</p>

                  {photos.length > 0 ? (
                    <div className={`journal-collage journal-collage-${Math.min(photos.length, 4)}`}>
                      {photos.map((photo, photoIndex) => (
                        <JournalPhoto
                          key={photo.id}
                          photo={photo}
                          index={photoIndex}
                          onOpen={() => onOpenLightbox(photo)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="journal-no-photos t-hand">
                      No photographs selected for this part of the garden this month.
                    </div>
                  )}
                </div>

                <div className="journal-page journal-page-ledger">
                  <div className="journal-ledger-head">
                    <div>
                      <div className="t-stamp">The change ledger</div>
                      <h3 className="t-display">What happened</h3>
                    </div>
                    <span className="journal-entry-count t-mono">{events.length} {events.length === 1 ? "entry" : "entries"}</span>
                  </div>
                  <ol className="journal-events">
                    {events.map((event) => (
                      <JournalEvent
                        key={event.id}
                        event={event}
                        onOpenPlant={onOpenPlant}
                        onOpenZone={onOpenZone}
                      />
                    ))}
                  </ol>
                  <div className="journal-page-number t-mono">Oak Lodge · {entry.label.toLowerCase()}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function JournalPhoto({ photo, index, onOpen }) {
  return (
    <figure
      className={`journal-photo journal-photo-${index + 1}${photo.pair ? " is-paired" : ""}`}
      data-pair={photo.pair || undefined}
    >
      <span className="tape" />
      {photo.badge && <span className="journal-photo-badge t-stamp">{photo.badge}</span>}
      <div className="journal-photo-frame">
        <PhotoOrFallback src={photo.src} caption={photo.caption} onClick={onOpen} />
      </div>
      <figcaption className="t-hand">{photo.caption}</figcaption>
    </figure>
  );
}

function JournalEvent({ event, onOpenPlant, onOpenZone }) {
  const action = JOURNAL_ACTIONS[event.type] || JOURNAL_ACTIONS.work;
  const plantRecord = event.plantId && (window.OAK.PLANT_BY_ID || {})[event.plantId];
  const zone = event.zoneKey && (window.OAK.ZONES || {})[event.zoneKey];
  const currentZoneKey = plantRecord ? plantRecord.zoneKey : event.zoneKey;

  return (
    <li className={`journal-event journal-event-${event.type}`}>
      <div className="journal-action-mark" aria-hidden="true">{action.mark}</div>
      <div className="journal-event-body">
        <div className="journal-event-meta">
          <span className="journal-action-label t-stamp">{action.label}</span>
          <time className="t-mono" dateTime={event.date}>{event.dateLabel}</time>
        </div>

        {plantRecord ? (
          <button
            className="journal-event-title journal-plant-link t-display"
            onClick={() => onOpenPlant({ zoneKey: currentZoneKey, plantId: event.plantId })}
            title={`Open ${plantRecord.plant.name}`}
          >
            {event.title}
          </button>
        ) : (
          <h4 className="journal-event-title t-display">{event.title}</h4>
        )}

        {event.from && event.to && (
          <div className="journal-move t-hand" aria-label={`Moved from ${event.from} to ${event.to}`}>
            <span>{event.from}</span>
            <span className="journal-move-arrow" aria-hidden="true">↝</span>
            <span>{event.to}</span>
          </div>
        )}

        <p>{event.note}</p>

        {(zone || event.location) && (
          <div className="journal-location-row">
            <span className="journal-location-pin" aria-hidden="true">·</span>
            {zone ? (
              <button className="journal-zone-link t-mono" onClick={() => onOpenZone(event.zoneKey)}>
                {zone.environment === "indoor" ? `${zone.floor} · ${zone.room}` : zone.title}
              </button>
            ) : (
              <span className="t-mono">{event.location}</span>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function prefersReducedJournalMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

window.GardenJournal = GardenJournal;
