// Oak Lodge Garden — HousePlan.jsx
// Hand-inked floor plans traced from the supplied layout, with fixed-size
// accessible pot markers. The source watermark, address and estate-agent
// measurements are deliberately not reproduced.

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
            <svg viewBox="0 0 1300 620" role="img" aria-labelledby="ground-plan-title ground-plan-desc">
              <title id="ground-plan-title">Ground-floor plan of Oak Lodge</title>
              <desc id="ground-plan-desc">A close redrawing of the supplied floor plan, with the split-level rooms, two staircases and the Kentia palm marked in the hallway beside the central staircase.</desc>
              {RoughDefs("house-ground")}

              <g filter="url(#house-ground-rough-soft)">
                <path
                  d="M105 55 H1235 V312 H905 V460 H845 V505 H665 V520 H520 V590 H375 V312 H50 Z"
                  fill="var(--paper-deep)" fillOpacity={dark ? "0.16" : "0.3"}
                />
                <path d="M105 55 H1235 V312 H905 V460 H845 V505 H665 V520 H520 V590 H375 V312 H50 Z" fill="url(#house-ground-floorboards)" />
              </g>

              <g filter="url(#house-ground-rough)" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round">
                {/* Exterior footprint, including the garage, study stair and porch projections. */}
                <path d="M105 55 H1235 V312 H905 V460 H845 V505 H665 V520 H520 V590 H375 V312 H50 Z" />

                {/* Kitchen, utility and sitting room. */}
                <path d="M335 55 V312" />
                <path d="M78 200 H198 V238" />
                <path d="M198 270 V312" />
                <path d="M292 55 H335 V166 H314" />

                {/* Central split-level stair and bedroom wing. */}
                <path d="M730 55 V122 M730 210 V312" />
                <path d="M824 122 V312 M824 122 H958" />
                <path d="M958 122 V312" />
                <path d="M958 122 H1110 V188 H1152 V312" />
                <path d="M1110 55 V188 M1110 188 H1235" />

                {/* Garage, study, hall, cloakroom, main staircase and porch. */}
                <path d="M375 312 H520 V590" />
                <path d="M520 312 H665 V460" />
                <path d="M665 312 V460" />
                <path d="M845 312 V460 M905 312 V460" />
                <path d="M845 365 H905" />
                <path d="M520 460 H665 M665 460 H845" />
              </g>

              <g filter="url(#house-ground-rough-soft)" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round">
                <path d="M145 55 H260 M430 55 H555 M615 55 H700 M855 55 H920 M990 55 H1060 M1150 55 H1205" />
                <path d="M75 185 L63 242 M50 260 L46 292" />
                <path d="M405 312 H470 M850 312 H905 M1010 312 H1070 M1180 312 H1210" />
                <path d="M705 505 H805 M555 590 H625" />
              </g>

              <g className="house-room-labels" fill="var(--ink)" textAnchor="middle">
                <text x="205" y="145">Kitchen / Dining</text>
                <text x="126" y="262">Utility</text>
                <text x="528" y="174">Sitting Room</text>
                <text x="890" y="214">Bedroom 3</text>
                <text x="1048" y="214">Bedroom 1</text>
                <text x="1172" y="102">Bathroom</text>
                <text x="1192" y="260">Ensuite</text>
                <text x="447" y="445">Garage</text>
                <text x="592" y="388">Study</text>
                <text x="776" y="405">Hallway</text>
                <text x="754" y="490">Porch</text>
                <text x="875" y="343" className="house-small-room-label">WC</text>
                <text x="875" y="420" className="house-small-room-label">B</text>
              </g>

              <g className="house-stairs" filter="url(#house-ground-rough-soft)" stroke="var(--ink)" strokeWidth="1.2" opacity="0.65">
                {[0, 1, 2, 3].map((step) => (
                  <line key={`kitchen-${step}`} x1={300 + step * 9} y1="82" x2={300 + step * 9} y2="158" />
                ))}
                <path d="M326 106 H301 M301 106 L309 99 M301 106 L309 113" fill="none" />
                {[0, 1, 2, 3].map((step) => (
                  <line key={step} x1="730" y1={278 + step * 9} x2="824" y2={278 + step * 9} />
                ))}
                <path d="M777 303 V282 M777 282 L770 290 M777 282 L784 290" fill="none" />
                {[0, 1, 2, 3, 4, 5].map((step) => (
                  <line key={`study-${step}`} x1={545 + step * 18} y1="465" x2={545 + step * 18} y2="515" />
                ))}
                <path d="M555 495 H626 M626 495 L617 488 M626 495 L617 502" fill="none" />
                <path d="M590 465 L645 515 M610 465 L665 515" fill="none" />
              </g>

              <g className="house-direction-labels" fill="var(--pencil)" textAnchor="middle">
                <text x="318" y="181">up</text>
                <text x="777" y="328">down</text>
                <text x="545" y="494">up</text>
              </g>

              <g className="house-door-arcs" filter="url(#house-ground-rough-soft)" fill="none" stroke="var(--pencil)" strokeWidth="1.1">
                <path d="M198 238 A34 34 0 0 1 232 272" />
                <path d="M335 95 A38 38 0 0 0 297 57" />
                <path d="M730 122 L704 148 L730 174 L704 200 L730 226" />
                <path d="M824 122 A34 34 0 0 0 858 156" />
                <path d="M958 122 A34 34 0 0 0 924 156" />
                <path d="M1110 122 A34 34 0 0 0 1076 156" />
                <path d="M1152 230 A34 34 0 0 1 1186 264" />
                <path d="M665 338 A36 36 0 0 0 629 374" />
                <path d="M845 344 A34 34 0 0 1 811 378" />
                <path d="M845 414 A34 34 0 0 0 811 448" />
                <path d="M720 460 A38 38 0 0 1 758 422" />
              </g>

              <text x="62" y="570" className="house-margin-note" fill="var(--pencil)">clean tracing of the supplied plan · room shapes and split levels retained</text>
            </svg>
            {groundEntries.map((entry) => renderMarker(entry, 1300, 620))}
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
            <svg viewBox="0 0 480 260" role="img" aria-labelledby="first-plan-title first-plan-desc">
              <title id="first-plan-title">First-floor plan of Oak Lodge</title>
              <desc id="first-plan-desc">A close redrawing of the supplied first-floor plan, with Bedroom 2, its sloping-ceiling lines and the staircase at the lower-right corner.</desc>
              {RoughDefs("house-first")}
              <g filter="url(#house-first-rough-soft)">
                <rect x="42" y="42" width="396" height="168" fill="var(--paper-deep)" fillOpacity={dark ? "0.16" : "0.3"} />
                <rect x="42" y="42" width="396" height="168" fill="url(#house-first-floorboards)" />
              </g>
              <g filter="url(#house-first-rough)" fill="none" stroke="var(--ink)" strokeWidth="3">
                <rect x="42" y="42" width="396" height="168" />
                <path d="M334 144 H438 M334 144 V210" />
              </g>
              <g filter="url(#house-first-rough-soft)" fill="none" stroke="var(--pencil)" strokeWidth="1.2" strokeDasharray="9 7" opacity="0.7">
                <path d="M58 68 H422 M58 184 H334" />
              </g>
              <g filter="url(#house-first-rough-soft)" stroke="var(--ink)" strokeWidth="1.2" opacity="0.65">
                {[0, 1, 2, 3, 4, 5].map((step) => (
                  <line key={step} x1={350 + step * 15} y1="150" x2={350 + step * 15} y2="205" />
                ))}
                <path d="M425 158 L360 198 M360 198 L370 198 M360 198 L364 188" fill="none" />
              </g>
              <g className="house-room-labels" fill="var(--ink)" textAnchor="middle">
                <text x="212" y="128">Bedroom 2</text>
                <text x="386" y="178">Stairs</text>
              </g>
              <g filter="url(#house-first-rough-soft)" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round">
                <path d="M118 42 H190 M245 42 H315" />
              </g>
              <text x="240" y="242" textAnchor="middle" className="house-margin-note" fill="var(--pencil)">no indoor specimens recorded here yet</text>
            </svg>
            {firstEntries.map((entry) => renderMarker(entry, 480, 260))}
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
        .house-ground .house-room-labels { font-size: 26px; }
        .house-small-room-label { font-size: 15px; }
        .house-direction-labels {
          font-family: var(--mono); font-size: 10px; text-transform: uppercase;
          letter-spacing: 0.08em; opacity: 0.75;
        }
        .house-margin-note { font-family: var(--hand); font-size: 16px; }
        .house-pot-marker {
          position: absolute; z-index: 3; width: 50px; height: 56px; padding: 0;
          transform: translate(-50%, -54%); border: 0; background: transparent;
          color: var(--ink); cursor: pointer; overflow: visible;
        }
        .house-pot-marker > svg {
          display: block; width: 48px; height: 55px;
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
          .house-ground .house-room-labels { font-size: 30px; }
          .house-pot-marker {
            width: 44px; height: 44px; display: grid; place-items: center;
          }
          .house-pot-marker > svg { width: 30px; height: 35px; }
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
