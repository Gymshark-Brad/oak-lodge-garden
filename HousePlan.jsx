// Oak Lodge Garden — HousePlan.jsx
// Simplified hand-inked floor plans with fixed-size accessible pot markers.
// Geometry is redrawn from the supplied layout; no source watermark, address
// or estate-agent measurements are published.

function HousePlan({ onOpenPlant, dark }) {
  const ZONES = window.OAK.ZONES;
  const indoorEntries = Object.entries(ZONES).filter(([, zone]) => zone.environment === "indoor");
  const groundEntries = indoorEntries.filter(([, zone]) => zone.marker && zone.marker.floor === "ground");
  const firstEntries = indoorEntries.filter(([, zone]) => zone.marker && zone.marker.floor === "first");

  const openSpecimen = (zoneKey) => {
    const zone = ZONES[zoneKey];
    const plant = zone && zone.plantKey ? (window.OAK.PLANTS[zone.plantKey] || [])[0] : null;
    if (plant) onOpenPlant({ zoneKey, plantId: plant.id, fromHousePlan: true });
  };

  const renderMarker = ([zoneKey, zone], viewWidth, viewHeight) => {
    const plant = (window.OAK.PLANTS[zone.plantKey] || [])[0];
    const left = `${(zone.marker.x / viewWidth) * 100}%`;
    const top = `${(zone.marker.y / viewHeight) * 100}%`;
    return (
      <button
        key={zoneKey}
        className="house-pot-marker"
        style={{ left, top }}
        onClick={() => openSpecimen(zoneKey)}
        aria-label={`Open ${plant.name}, ${zone.floor} ${zone.room}`}
      >
        <svg viewBox="0 0 54 62" aria-hidden="true">
          <g className="house-pot-leaves">
            <path d="M27 33 C25 19 16 10 7 7 C12 18 17 27 27 35" />
            <path d="M27 34 C28 16 33 8 42 3 C40 18 36 28 27 36" />
            <path d="M27 34 C19 22 10 18 3 19 C10 28 17 33 27 37" />
            <path d="M28 35 C36 23 45 20 51 22 C44 30 38 35 28 38" />
            <path d="M27 35 C25 20 26 10 29 4 C32 17 31 28 27 38" />
          </g>
          <path className="house-pot-rim" d="M14 37 L40 37 L38 43 L16 43 Z" />
          <path className="house-pot-body" d="M17 42 L37 42 L34 58 L20 58 Z" />
        </svg>
        <span className="house-pot-tag">{plant.name}</span>
      </button>
    );
  };

  const RoughDefs = (prefix) => (
    <defs>
      <filter id={`${prefix}-rough`} x="-3%" y="-3%" width="106%" height="106%">
        <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="12" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" />
      </filter>
      <filter id={`${prefix}-rough-soft`} x="-3%" y="-3%" width="106%" height="106%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="18" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
      </filter>
      <pattern id={`${prefix}-floorboards`} width="18" height="18" patternUnits="userSpaceOnUse">
        <path d="M0 9 H18 M9 0 V9 M4 9 V18 M14 9 V18" fill="none" stroke="var(--ink)" strokeOpacity="0.08" strokeWidth="0.7" />
      </pattern>
    </defs>
  );

  return (
    <div className="house-plan fade-in">
      <header className="house-plan-head">
        <div>
          <div className="t-stamp">Oak Lodge · plants under glass</div>
          <h1 className="t-display">The plants inside, drawn room by room</h1>
          <p className="t-hand">both floors together · tap any pot to open its portrait ·</p>
        </div>
        <div className="house-plan-note">
          <div className="stamp">House folio · 01</div>
          <div className="t-mono">{indoorEntries.length} indoor {indoorEntries.length === 1 ? "specimen" : "specimens"}<br />redrawn july 2026</div>
        </div>
      </header>

      <div className="house-floors">
        <section className="house-floor-card house-ground" aria-labelledby="ground-floor-heading">
          <header>
            <div>
              <div className="t-stamp">Plan i.</div>
              <h2 id="ground-floor-heading" className="t-display">Ground floor</h2>
            </div>
            <span className="t-mono">{groundEntries.length} {groundEntries.length === 1 ? "pot" : "pots"}</span>
          </header>
          <div className="house-floor-canvas">
            <svg viewBox="0 0 1000 430" role="img" aria-labelledby="ground-plan-title ground-plan-desc">
              <title id="ground-plan-title">Simplified ground-floor plan of Oak Lodge</title>
              <desc id="ground-plan-desc">Rooms are drawn in ink with the Kentia palm marked in the hallway beside the main staircase.</desc>
              {RoughDefs("house-ground")}

              <g filter="url(#house-ground-rough-soft)">
                <path
                  d="M38 58 H560 V102 H620 V86 H960 V268 H735 V390 H555 V370 H392 V410 H270 V278 H38 Z"
                  fill="var(--paper-deep)" fillOpacity={dark ? "0.16" : "0.3"}
                />
                <path d="M38 58 H560 V102 H620 V86 H960 V268 H735 V390 H555 V370 H392 V410 H270 V278 H38 Z" fill="url(#house-ground-floorboards)" />
              </g>

              <g filter="url(#house-ground-rough)" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round">
                <path d="M38 58 H560 V102 H620 V86 H960 V268 H735 V390 H555 V370 H392 V410 H270 V278 H38 Z" />
                <path d="M260 58 V278 M38 190 H150 V278 M150 190 H260" />
                <path d="M560 102 V258 M620 86 V258 M735 86 V258 M860 86 V258" />
                <path d="M735 160 H960 M860 206 H960" />
                <path d="M392 278 V410 M555 258 V390 M735 258 V390" />
                <path d="M555 315 H735" />
              </g>

              <g filter="url(#house-ground-rough-soft)" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round">
                <path d="M70 58 H165 M320 58 H455 M650 86 H700 M765 86 H825 M884 86 H930" />
                <path d="M38 100 V160 M38 215 V250 M450 410 H520" />
              </g>

              <g className="house-room-labels" fill="var(--ink)" textAnchor="middle">
                <text x="150" y="125">Kitchen / Dining</text>
                <text x="95" y="232">Utility</text>
                <text x="408" y="165">Sitting Room</text>
                <text x="590" y="178">Stairs</text>
                <text x="677" y="170">Bedroom 3</text>
                <text x="797" y="170">Bedroom 1</text>
                <text x="910" y="126">Bathroom</text>
                <text x="910" y="232">Ensuite</text>
                <text x="330" y="340">Garage</text>
                <text x="472" y="340">Study</text>
                <text x="645" y="355">Hallway</text>
              </g>

              <g className="house-stairs" filter="url(#house-ground-rough-soft)" stroke="var(--ink)" strokeWidth="1.2" opacity="0.65">
                {[0, 1, 2, 3, 4, 5].map((step) => (
                  <line key={step} x1={568 + step * 8} y1="220" x2={568 + step * 8} y2="258" />
                ))}
                <path d="M575 247 L607 230 M607 230 L600 230 M607 230 L607 238" fill="none" />
                {[0, 1, 2, 3, 4].map((step) => (
                  <line key={`study-${step}`} x1={430 + step * 16} y1="370" x2={430 + step * 16} y2="410" />
                ))}
              </g>

              <g className="house-door-arcs" filter="url(#house-ground-rough-soft)" fill="none" stroke="var(--pencil)" strokeWidth="1.1">
                <path d="M260 205 A34 34 0 0 1 226 239" />
                <path d="M560 150 A30 30 0 0 1 530 180" />
                <path d="M620 260 A32 32 0 0 0 652 292" />
                <path d="M735 258 A32 32 0 0 1 703 290" />
                <path d="M860 160 A28 28 0 0 1 888 188" />
              </g>

              <text x="58" y="400" className="house-margin-note" fill="var(--pencil)">the lived-in floor · rooms simplified for the plant journal</text>
            </svg>
            {groundEntries.map((entry) => renderMarker(entry, 1000, 430))}
          </div>
        </section>

        <section className="house-floor-card house-first" aria-labelledby="first-floor-heading">
          <header>
            <div>
              <div className="t-stamp">Plan ii.</div>
              <h2 id="first-floor-heading" className="t-display">First floor</h2>
            </div>
            <span className="t-mono">{firstEntries.length} {firstEntries.length === 1 ? "pot" : "pots"}</span>
          </header>
          <div className="house-floor-canvas">
            <svg viewBox="0 0 440 300" role="img" aria-labelledby="first-plan-title first-plan-desc">
              <title id="first-plan-title">Simplified first-floor plan of Oak Lodge</title>
              <desc id="first-plan-desc">The first floor contains Bedroom 2 and its staircase; no plants are recorded here yet.</desc>
              {RoughDefs("house-first")}
              <g filter="url(#house-first-rough-soft)">
                <rect x="50" y="62" width="340" height="170" fill="var(--paper-deep)" fillOpacity={dark ? "0.16" : "0.3"} />
                <rect x="50" y="62" width="340" height="170" fill="url(#house-first-floorboards)" />
              </g>
              <g filter="url(#house-first-rough)" fill="none" stroke="var(--ink)" strokeWidth="3">
                <rect x="50" y="62" width="340" height="170" />
                <path d="M305 150 H390 M305 150 V232" />
              </g>
              <g filter="url(#house-first-rough-soft)" stroke="var(--ink)" strokeWidth="1.2" opacity="0.65">
                {[0, 1, 2, 3, 4].map((step) => (
                  <line key={step} x1={320 + step * 14} y1="160" x2={320 + step * 14} y2="225" />
                ))}
                <path d="M330 212 L370 175 M370 175 L360 176 M370 175 L370 185" fill="none" />
              </g>
              <g className="house-room-labels" fill="var(--ink)" textAnchor="middle">
                <text x="190" y="145">Bedroom 2</text>
                <text x="347" y="194">Stairs</text>
              </g>
              <g filter="url(#house-first-rough-soft)" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round">
                <path d="M115 62 H190 M225 62 H280" />
              </g>
              <text x="220" y="270" textAnchor="middle" className="house-margin-note" fill="var(--pencil)">no indoor specimens recorded here yet</text>
            </svg>
            {firstEntries.map((entry) => renderMarker(entry, 440, 300))}
          </div>
        </section>
      </div>

      <section className="house-ledger" aria-labelledby="house-ledger-heading">
        <div className="t-stamp">Indoor specimen ledger</div>
        <h2 id="house-ledger-heading" className="t-display">Plants recorded in the house</h2>
        <div className="house-ledger-list">
          {indoorEntries.map(([zoneKey, zone]) => {
            const plant = (window.OAK.PLANTS[zone.plantKey] || [])[0];
            const journal = (window.OAK.PLANT_PHOTOS_BY_ID || {})[plant.id] || [];
            const photo = journal[0] && journal[0].photos && journal[0].photos[0];
            return (
              <button key={zoneKey} className="house-ledger-row" onClick={() => openSpecimen(zoneKey)}>
                <span className="house-ledger-photo">
                  {photo ? <img src={window.OAK.thumbnailFor(photo.src)} alt="" loading="lazy" decoding="async" /> : <span aria-hidden="true">⌁</span>}
                </span>
                <span>
                  <strong className="t-display">{plant.name}</strong>
                  <em className="t-latin">{plant.latin}</em>
                </span>
                <span className="t-mono">{zone.floor}<br />{zone.room}</span>
                <span className="house-ledger-arrow" aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
      </section>

      <style>{`
        .house-plan { padding: 4px 4px 40px; color: var(--ink); }
        .house-plan-head {
          display: grid; grid-template-columns: 1fr auto; gap: 28px; align-items: start;
          padding: 4px 2px 24px; border-bottom: 1px dashed var(--hairline);
        }
        .house-plan-head h1 {
          max-width: 17ch; margin: 7px 0 4px; font-size: clamp(34px, 5vw, 60px);
          line-height: 1.02; text-wrap: balance;
        }
        .house-plan-head p { margin: 8px 0 0; color: var(--pencil); font-size: 22px; }
        .house-plan-note {
          min-width: 190px; padding: 14px 16px; border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
        }
        .house-plan-note .t-mono { margin-top: 10px; line-height: 1.5; }
        .house-floors {
          display: grid; grid-template-columns: minmax(0, 1.8fr) minmax(260px, 0.85fr);
          gap: clamp(18px, 3vw, 34px); align-items: start; padding: 30px 0;
        }
        .house-floor-card {
          border: 1px solid var(--hairline); padding: 16px;
          background: color-mix(in oklab, var(--paper) 96%, var(--paper-deep) 4%);
          position: relative;
        }
        .house-floor-card::before {
          content: ""; position: absolute; top: -9px; left: 12%; width: 76px; height: 19px;
          background: color-mix(in oklab, var(--tape) 74%, transparent);
          transform: rotate(-2deg); opacity: 0.75;
        }
        .house-first { transform: rotate(0.35deg); }
        .house-floor-card > header {
          display: flex; align-items: end; justify-content: space-between; gap: 16px;
          padding: 5px 4px 12px; border-bottom: 1px dotted var(--hairline);
        }
        .house-floor-card h2 { margin: 2px 0 0; font-size: clamp(28px, 3.5vw, 42px); font-weight: 400; }
        .house-floor-card > header > .t-mono { opacity: 0.65; padding-bottom: 5px; }
        .house-floor-canvas { position: relative; width: 100%; }
        .house-floor-canvas > svg { display: block; width: 100%; height: auto; }
        .house-room-labels {
          font-family: var(--hand); font-size: 19px; opacity: 0.8;
        }
        .house-margin-note { font-family: var(--hand); font-size: 16px; }
        .house-pot-marker {
          position: absolute; z-index: 3; width: 58px; height: 64px; padding: 0;
          transform: translate(-50%, -54%); border: 0; background: transparent;
          color: var(--ink); cursor: pointer; overflow: visible;
        }
        .house-pot-marker > svg {
          display: block; width: 54px; height: 62px;
          filter: drop-shadow(0 2px 1px color-mix(in oklab, var(--ink) 25%, transparent));
          transition: transform 150ms ease;
        }
        .house-pot-marker:hover > svg, .house-pot-marker:focus-visible > svg { transform: translateY(-3px) rotate(-2deg); }
        .house-pot-marker:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 50%; }
        .house-pot-leaves path { fill: color-mix(in oklab, var(--green) 78%, var(--ink) 22%); stroke: var(--ink); stroke-width: 1.1; }
        .house-pot-rim { fill: var(--accent); stroke: var(--ink); stroke-width: 1.3; }
        .house-pot-body { fill: color-mix(in oklab, var(--paper) 80%, white 20%); stroke: var(--ink); stroke-width: 1.3; }
        .house-pot-tag {
          position: absolute; left: 50%; top: calc(100% - 1px); width: max-content; max-width: 180px;
          transform: translateX(-50%); padding: 4px 7px; border: 1px solid var(--hairline);
          background: color-mix(in oklab, var(--paper) 94%, var(--green) 6%);
          font-family: var(--hand); font-size: 17px; line-height: 1; color: var(--ink);
          opacity: 0; pointer-events: none; transition: opacity 140ms ease;
        }
        .house-pot-marker:hover .house-pot-tag, .house-pot-marker:focus-visible .house-pot-tag { opacity: 1; }
        .house-ledger {
          margin-top: 4px; padding: 24px 4px 4px; border-top: 1px dashed var(--hairline);
        }
        .house-ledger h2 { margin: 5px 0 18px; font-size: clamp(30px, 4vw, 44px); font-weight: 400; }
        .house-ledger-list { border-top: 1px solid var(--hairline); }
        .house-ledger-row {
          width: 100%; min-height: 86px; display: grid;
          grid-template-columns: 64px minmax(0, 1fr) auto 34px; gap: 16px; align-items: center;
          padding: 10px 8px; border: 0; border-bottom: 1px dotted var(--hairline);
          background: transparent; color: var(--ink); text-align: left; cursor: pointer;
        }
        .house-ledger-row:hover { background: color-mix(in oklab, var(--green) 6%, transparent); }
        .house-ledger-row:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .house-ledger-photo {
          width: 56px; height: 64px; display: grid; place-items: center; overflow: hidden;
          border: 4px solid color-mix(in oklab, var(--paper) 86%, white 14%);
          box-shadow: 0 0 0 1px var(--hairline);
        }
        .house-ledger-photo img { width: 100%; height: 100%; object-fit: cover; }
        .house-ledger-row strong { display: block; font-size: 24px; font-weight: 400; }
        .house-ledger-row em { display: block; margin-top: 3px; font-size: 17px; }
        .house-ledger-row > .t-mono { text-align: right; opacity: 0.7; }
        .house-ledger-arrow { font-family: var(--hand); font-size: 28px; color: var(--accent); }
        @media (max-width: 900px) {
          .house-floors { grid-template-columns: 1fr; }
          .house-first { width: min(100%, 620px); justify-self: center; }
        }
        @media (max-width: 620px) {
          .house-plan-head { grid-template-columns: 1fr; }
          .house-plan-note { display: none; }
          .house-floor-card { padding: 10px; }
          .house-room-labels { font-size: 22px; }
          .house-margin-note { display: none; }
          .house-pot-tag { display: none; }
          .house-ledger-row { grid-template-columns: 56px minmax(0, 1fr) 26px; gap: 10px; }
          .house-ledger-row > .t-mono { grid-column: 2; text-align: left; }
          .house-ledger-arrow { grid-column: 3; grid-row: 1 / 3; }
        }
      `}</style>
    </div>
  );
}

window.HousePlan = HousePlan;
