// Oak Lodge Garden — BedDetail.jsx
// One bed: description, hand-drawn plant map, plant list, photo gallery.

const { useState: useState_BD, useMemo: useMemo_BD } = React;

function BedDetail({ zoneKey, onBack, onOpenPlant, onOpenLightbox, dark }) {
  const Z = window.OAK.ZONES[zoneKey];
  const plants = Z.plantKey ? window.OAK.PLANTS[Z.plantKey] : [];
  const _monthKeys = Object.keys(window.OAK.PHOTOS_BY_MONTH);
  const _latestMonth = _monthKeys[_monthKeys.length - 1];
  const _latestMonthData = window.OAK.PHOTOS_BY_MONTH[_latestMonth] || {};
  const photos = (_latestMonthData[zoneKey] || []);
  const map = window.OAK.BED_PLANT_MAPS[zoneKey] || [];
  const [hoverPlant, setHoverPlant] = useState_BD(null);

  // Each plant in the list joined with its map circle by name (some plants appear once in map)
  const plantWithMap = (name) => map.find((m) => m.name === name) || null;

  return (
    <div className="bed-detail page-turn">
      {/* Back link, top left */}
      <div className="bed-back-row">
        <button className="inkbtn" onClick={onBack}>
          <span className="arr">←</span>
          <span>back to the garden</span>
        </button>
        <div className="t-stamp">Folio · {Z.title}</div>
      </div>

      {/* Title block */}
      <div className="bed-head">
        <div className="bed-head-text">
          <div className="t-stamp" style={{ color: "var(--accent)" }}>{Z.badge}</div>
          <h1 className="t-display" style={{ fontSize: "min(7vw, 64px)", margin: "8px 0 4px", lineHeight: 1.02 }}>
            {Z.title}
          </h1>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)" }}>
            {Z.where} &nbsp;·&nbsp; {Z.dims}
          </div>
          <p className="bed-desc" style={{ marginTop: 18, fontSize: 19, lineHeight: 1.55, maxWidth: 520 }}>
            {Z.desc}
          </p>
        </div>

        {/* Specimen-stamp panel */}
        <div className="bed-stamp-panel">
          <div className="stamp">Specimen No. {String(zoneKey).toUpperCase().padStart(6, "0")}</div>
          <div className="t-mono" style={{ marginTop: 14 }}>
            recorded · 09 may 2026<br />
            site · oak lodge, bromsgrove<br />
            recorder · b. h.
          </div>
        </div>
      </div>

      <div className="rule" style={{ margin: "20px 0 24px" }} />

      {/* Map + plant list, two columns */}
      <div className="bed-grid">
        <div className="bed-map-col">
          <div className="t-stamp" style={{ marginBottom: 10 }}>Plant map · top-down</div>
          <div className="bed-map-frame">
            <PlantMap
              map={map}
              zone={Z}
              hoverPlant={hoverPlant}
              setHoverPlant={setHoverPlant}
              onOpenPlant={onOpenPlant}
            />
            <div className="t-hand" style={{ marginTop: 10, color: "var(--pencil)", fontSize: 18 }}>
              tap a circle to open its card →
            </div>
          </div>
        </div>

        <div className="bed-plants-col">
          <div className="t-stamp" style={{ marginBottom: 10 }}>
            Plants · {plants.length} recorded
          </div>
          <ul className="plant-list">
            {plants.map((p, i) => {
              const m = plantWithMap(p.name);
              const isHover = hoverPlant === p.name;
              return (
                <li
                  key={p.name + i}
                  className={"plant-row" + (isHover ? " is-hover" : "")}
                  onMouseEnter={() => setHoverPlant(p.name)}
                  onMouseLeave={() => setHoverPlant(null)}
                  onClick={() => onOpenPlant({ zoneKey, plantIndex: i })}
                >
                  <div className="plant-no">№ {String(i + 1).padStart(2, "0")}</div>
                  <div className="plant-name-block">
                    <div className="t-display plant-name" style={{ fontSize: 26, lineHeight: 1.1 }}>
                      {p.name}
                    </div>
                    <div className="t-latin" style={{ fontSize: 17 }}>
                      {p.latin}
                    </div>
                  </div>
                  <div className="plant-pos t-mono">{p.position}</div>
                  <div className="plant-arrow">→</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Photo gallery */}
      <div style={{ marginTop: 36 }}>
        <div className="row" style={{ alignItems: "baseline", gap: 14 }}>
          <div className="t-display" style={{ fontSize: 32 }}>Photographs</div>
          <div className="t-stamp">{_latestMonthData.label || _latestMonth} · {photos.length} {photos.length === 1 ? "exposure" : "exposures"}</div>
        </div>
        <div className="rule" style={{ margin: "10px 0 20px" }} />

        {photos.length === 0 ? (
          <p className="t-hand" style={{ fontSize: 22, color: "var(--pencil)" }}>
            no photographs taken here this month.
          </p>
        ) : (
          <div className="photo-scatter">
            {photos.map((ph, i) => {
              const tilt = ((i % 5) - 2) * 1.4;
              return (
                <div key={ph.src} className="polaroid" style={{ transform: `rotate(${tilt}deg)` }}>
                  <span className="tape" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)" }} />
                  <div className="frame" style={{ width: 240, height: 320 }}>
                    <PhotoOrFallback src={ph.src} caption={ph.caption} onClick={() => onOpenLightbox(ph)} />
                  </div>
                  <div className="caption">{ph.caption}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 56, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button className="inkbtn" onClick={onBack}>
          <span className="arr">←</span>
          <span>back to the garden</span>
        </button>
        <div className="t-mono">end of folio</div>
      </div>

      <style>{`
        .bed-detail { padding: 24px clamp(20px, 4vw, 56px) 64px; }
        .bed-back-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .bed-head { display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: start; }
        .bed-head-text { min-width: 0; }
        .bed-stamp-panel {
          padding: 16px 18px;
          border: 1px dashed var(--hairline);
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
          min-width: 220px;
        }

        .bed-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) 1.15fr;
          gap: 36px;
          align-items: start;
        }
        @media (max-width: 880px) {
          .bed-head { grid-template-columns: 1fr; }
          .bed-grid { grid-template-columns: 1fr; }
        }

        .bed-map-frame {
          padding: 12px;
          background: color-mix(in oklab, var(--paper) 94%, var(--paper-deep) 6%);
          border: 1px solid var(--hairline);
          box-shadow: 0 6px 18px -10px rgba(0,0,0,0.3);
        }

        .plant-list { list-style: none; margin: 0; padding: 0; }
        .plant-row {
          display: grid;
          grid-template-columns: 50px 1fr auto 24px;
          align-items: center;
          gap: 14px;
          padding: 14px 6px;
          border-bottom: 1px dotted var(--hairline);
          cursor: pointer;
          transition: background 140ms ease;
        }
        .plant-row:hover, .plant-row.is-hover {
          background: color-mix(in oklab, var(--ink) 5%, transparent);
        }
        .plant-no { font-family: var(--type); font-size: 11px; color: var(--pencil); letter-spacing: 0.1em; }
        .plant-pos { max-width: 220px; text-align: right; opacity: 0.7; }
        .plant-arrow { font-family: var(--serif); font-size: 22px; color: var(--pencil); transition: transform 180ms ease; }
        .plant-row:hover .plant-arrow { color: var(--accent); transform: translateX(4px); }
        @media (max-width: 600px) {
          .plant-row { grid-template-columns: 36px 1fr 18px; }
          .plant-pos { display: none; }
        }

        .photo-scatter {
          display: flex;
          flex-wrap: wrap;
          gap: 28px 26px;
          padding: 12px 0;
        }
      `}</style>
    </div>
  );
}

// ── Plant map (the hand-drawn top-down circles) ───────────────────────
function PlantMap({ map, zone, hoverPlant, setHoverPlant, onOpenPlant }) {
  const W = 100, H = 100;
  return (
    <svg viewBox={`-6 -6 ${W + 12} ${H + 12}`} style={{ width: "100%", aspectRatio: "1", display: "block" }}>
      <defs>
        <filter id="pm-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="11" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="2.5" />
        </filter>
        <filter id="pm-rough-soft">
          <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="SourceGraphic" scale="1" />
        </filter>
      </defs>

      {/* Bed boundary outline (slightly oversized) */}
      <g filter="url(#pm-rough)">
        <rect
          x="-2" y="-2" width={W + 4} height={H + 4}
          fill="none"
          stroke="var(--ink)"
          strokeOpacity="0.45"
          strokeWidth="0.6"
          strokeDasharray="3 2"
        />
      </g>

      {/* Cardinal direction tick */}
      <g style={{ pointerEvents: "none" }}>
        <text x={W / 2} y={-2} textAnchor="middle" fontFamily="var(--type)" fontSize="3.2" fill="var(--ink)" opacity="0.5">N ↑</text>
      </g>

      {/* Plants (bottom layer = leaf canopy) */}
      {map.map((m, i) => (
        <g
          key={m.name + i}
          className="plant-pin"
          onClick={() => onOpenPlant({ zoneKey: zone.id, plantName: m.name })}
          onMouseEnter={() => setHoverPlant(m.name)}
          onMouseLeave={() => setHoverPlant(null)}
        >
          {/* glow halo */}
          <circle
            className="plant-pin-glow"
            cx={m.x}
            cy={m.y}
            r={m.r + 3}
            fill={`oklch(0.7 0.15 ${m.hue})`}
            fillOpacity="0.25"
          />
          {/* leaf canopy */}
          <g filter="url(#pm-rough)">
            <circle
              cx={m.x}
              cy={m.y}
              r={m.r}
              fill={`oklch(0.66 0.12 ${m.hue})`}
              fillOpacity={hoverPlant === m.name ? "0.85" : "0.65"}
              stroke="var(--ink)"
              strokeOpacity="0.5"
              strokeWidth="0.5"
            />
            <circle
              cx={m.x - m.r * 0.3}
              cy={m.y - m.r * 0.3}
              r={m.r * 0.45}
              fill={`oklch(0.78 0.08 ${m.hue})`}
              fillOpacity="0.55"
            />
          </g>
          {/* name label, only hover */}
          {hoverPlant === m.name && (
            <text
              x={m.x}
              y={m.y - m.r - 2}
              textAnchor="middle"
              fontFamily="var(--hand)"
              fontSize="4.2"
              fill="var(--ink)"
            >
              {m.name}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

// ── Photo or fallback ─────────────────────────────────────────────────
function PhotoOrFallback({ src, caption, onClick }) {
  const [errored, setErrored] = useState_BD(false);
  if (errored || !src) {
    return (
      <div
        className="imgfallback"
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
        onClick={onClick}
      >
        <span>{caption || "photo"}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={caption}
      loading="lazy"
      onClick={onClick}
      onError={() => setErrored(true)}
      style={{ cursor: "zoom-in" }}
    />
  );
}

window.BedDetail = BedDetail;
window.PhotoOrFallback = PhotoOrFallback;
