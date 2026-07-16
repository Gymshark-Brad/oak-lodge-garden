// Oak Lodge Garden — FrontGardenPlan.jsx  (v2 — measured survey, July 2026)
// Supersedes the v1 sketch-based plan. Geometry reconstructed from Brad's
// measured wireframe at 57 SVG-units per metre, viewBox 0 0 1000 640.
// Survey origin: far-left end of the study-window wall.
//   X = 40 + (metres_east + 0.6) * 57
//   Y = 30 + (metres_south + 4.4) * 57   (y measured from the study-window wall line)
//
// Zones (8, all clickable): frontBed1, frontBed2, frontBed3, frontBed4,
//   frontStone, frontBoxHedge, frontHedge, frontApple — defined in data.js ZONES.
// Scenery drawn here (non-interactive): house wall + windows + front door,
//   path, gravel forecourt ×2, slabbed patio, steps, skinny brick wall,
//   pillar in Bed 1, boundary wall, survey dimension labels.

const { useState: useState_FGP } = React;

function FrontGardenPlan({ onOpenZone, dark }) {
  const Z = window.OAK.ZONES;
  const [hover, setHover] = useState_FGP(null);

  // z-order: big beds first, small features on top
  const order = [
    "frontBed3", "frontBed4", "frontBed5", "frontBed1", "frontBed2",
    "frontStone", "frontHedge", "frontBoxHedge", "frontApple", "frontpot",
  ];
  const verticalLabels = ["frontBoxHedge", "frontHedge"];

  const RoughDefs = (
    <defs>
      <filter id="rough" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="3" result="t" />
        <feDisplacementMap in="SourceGraphic" in2="t" scale="3.2" />
      </filter>
      <filter id="rough-soft" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="t" />
        <feDisplacementMap in="SourceGraphic" in2="t" scale="1.8" />
      </filter>
      <pattern id="hatch-soil" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
        <rect width="6" height="6" fill="var(--paper)" />
        <line x1="0" y1="3" x2="6" y2="3" stroke="var(--ink)" strokeOpacity="0.25" strokeWidth="0.6" />
      </pattern>
      <pattern id="hatch-paving" width="14" height="14" patternUnits="userSpaceOnUse">
        <rect width="14" height="14" fill="var(--paper)" />
        <path d="M 0 7 L 14 7 M 7 0 L 7 14" stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="0.6" />
      </pattern>
      <pattern id="hatch-slab" width="22" height="16" patternUnits="userSpaceOnUse">
        <rect width="22" height="16" fill="var(--paper)" />
        <path d="M 0 8 L 22 8 M 11 0 L 11 8 M 5 8 L 5 16 M 17 8 L 17 16" stroke="var(--ink)" strokeOpacity="0.16" strokeWidth="0.6" />
      </pattern>
      <pattern id="hatch-gravel" width="5" height="5" patternUnits="userSpaceOnUse">
        <rect width="5" height="5" fill="var(--paper)" />
        <circle cx="1" cy="1" r="0.5" fill="var(--ink)" fillOpacity="0.25" />
        <circle cx="3" cy="3.5" r="0.5" fill="var(--ink)" fillOpacity="0.25" />
      </pattern>
    </defs>
  );

  const renderZone = (key) => {
    const z = Z[key];
    const isHover = hover === key;
    const isInteractive = !!z.plantKey;
    const c = z.color;
    const isHedge = ["frontBoxHedge", "frontHedge"].includes(key);
    const isStone = key === "frontStone";
    const isPot = !!z.isPot;

    let shapeEl = null;
    if (z.shape.kind === "rect") {
      shapeEl = <rect x={z.shape.x} y={z.shape.y} width={z.shape.w} height={z.shape.h} rx="3" />;
    } else if (z.shape.kind === "polygon") {
      shapeEl = <polygon points={z.shape.points} />;
    } else if (z.shape.kind === "circle") {
      shapeEl = <circle cx={z.shape.cx} cy={z.shape.cy} r={z.shape.r} />;
    }

    return (
      <g
        key={key}
        className="zone"
        style={{ cursor: isInteractive ? "pointer" : "default" }}
        onMouseEnter={() => setHover(key)}
        onMouseLeave={() => setHover(null)}
        onClick={() => isInteractive && onOpenZone(key)}
      >
        <g filter="url(#rough)">
          {React.cloneElement(shapeEl, {
            fill: c,
            fillOpacity: isPot ? (dark ? 0.85 : 0.7) : isHedge ? (dark ? 0.75 : 0.6) : (dark ? 0.42 : 0.32),
            stroke: c,
            strokeOpacity: 0.0,
          })}
        </g>
        {!isHedge && !isPot && (
          <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
            {React.cloneElement(shapeEl, {
              fill: isStone ? "url(#hatch-gravel)" : "url(#hatch-soil)",
              fillOpacity: 0.6,
            })}
          </g>
        )}
        {isPot && (
          <g filter="url(#rough)" style={{ pointerEvents: "none" }}>
            {React.cloneElement(shapeEl, {
              fill: "none",
              stroke: dark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)",
              strokeWidth: 2.2,
            })}
          </g>
        )}
        <g filter="url(#rough)" style={{ pointerEvents: "none" }}>
          {React.cloneElement(shapeEl, {
            fill: "none",
            stroke: "var(--ink)",
            strokeOpacity: isHover ? 0.95 : 0.7,
            strokeWidth: isHover ? 1.6 : 1.1,
          })}
        </g>
        {React.cloneElement(shapeEl, { fill: "transparent", stroke: "none" })}
      </g>
    );
  };

  return (
    <div className="plan-wrap fade-in" style={{ position: "relative" }}>
      <header className="plan-head">
        <div>
          <div className="t-stamp">Plot · Oak Lodge · Bromsgrove · front elevation</div>
          <div className="t-display plan-title">The front garden, drawn from above</div>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)", marginTop: 6 }}>
            measured survey, july 2026 · tap any bed to open it ·
          </div>
        </div>
        <div className="plan-compass">
          <div className="t-stamp">plan view</div>
          <div className="t-mono" style={{ marginTop: 4 }}>scale ≈ 1:30</div>
          <div className="t-mono" style={{ marginTop: 2 }}>measured july 2026</div>
        </div>
      </header>

      <svg
        viewBox="0 0 1000 640"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", maxHeight: "calc(100vh - 200px)", display: "block" }}
      >
        {RoughDefs}

        {/* ── HOUSE — wash behind the wall line ── */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <path
            d="M 52 281 L 268 281 L 268 201 L 336 201 L 439 190 L 439 201 L 547 201 L 547 42 L 958 42 L 958 32 L 52 32 Z"
            fill="var(--ink)"
            fillOpacity={dark ? 0.16 : 0.09}
          />
          <text x="270" y="120" fontFamily="var(--type)" fontSize="11" fill="var(--ink)" opacity="0.55" letterSpacing="4">
            T H E &nbsp; H O U S E &nbsp; · &nbsp; f r o n t &nbsp; e l e v a t i o n
          </text>
        </g>

        {/* ── HARDSCAPE (under the zones) ── */}
        {/* Path — from the front door down past Bed 1 (3m run) */}
        <g filter="url(#rough-soft)">
          <polygon
            points="336,201 439,190 439,271 469,404 336,404"
            fill="url(#hatch-paving)" fillOpacity="0.75"
          />
          <polyline points="336,201 336,404" fill="none" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="1.1" />
          <polyline points="439,271 469,404" fill="none" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="1.1" />
        </g>
        <text x="390" y="330" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.55">Path</text>

        {/* Gravel forecourt — west pocket (between path, hedge & stone trough) */}
        <g filter="url(#rough-soft)">
          <polygon
            points="440,272 539,272 539,292 547,292 547,372 619,372 619,430 472,430"
            fill="url(#hatch-gravel)" fillOpacity="0.7"
          />
        </g>
        <text x="497" y="330" textAnchor="middle" fontFamily="var(--hand)" fontSize="14" fill="var(--ink)" opacity="0.5">
          <tspan x="497" dy="0">Gravel</tspan><tspan x="497" dy="15">Forecourt</tspan>
        </text>

        {/* Slabbed patio — big area in front of the bedroom windows, ends in the arrow point at the knee */}
        <g filter="url(#rough-soft)">
          <polygon
            points="547,87 775,87 880,170 815,292 547,292"
            fill="url(#hatch-slab)" fillOpacity="0.85"
          />
          <polygon
            points="547,87 775,87 880,170 815,292 547,292"
            fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="0.9"
          />
        </g>
        <text x="685" y="185" textAnchor="middle" fontFamily="var(--hand)" fontSize="22" fill="var(--ink)" opacity="0.6">Slabbed Patio</text>

        {/* Steps — gravel treads with timber sleepers set in the stone
            (matches Brad's photo: sleeper-edged gravel steps down from the patio) */}
        <g filter="url(#rough-soft)">
          <rect x="547" y="292" width="213" height="80" fill="url(#hatch-gravel)" fillOpacity="0.7" />
          {/* timber sleeper treads */}
          <g>
            <rect x="630" y="308" width="114" height="6" rx="1.5" fill="#8b6a44" fillOpacity="0.6" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="0.8" />
            <rect x="630" y="331" width="114" height="6" rx="1.5" fill="#8b6a44" fillOpacity="0.6" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="0.8" />
            <rect x="630" y="354" width="114" height="6" rx="1.5" fill="#8b6a44" fillOpacity="0.6" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="0.8" />
          </g>
          {/* timber edging around the run */}
          <rect x="547" y="292" width="213" height="80" fill="none" stroke="#8b6a44" strokeOpacity="0.7" strokeWidth="2.4" />
          <rect x="547" y="292" width="213" height="80" fill="none" stroke="var(--ink)" strokeOpacity="0.3" strokeWidth="0.8" />
        </g>
        <text x="678" y="337" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.6">Steps</text>
        <text x="650" y="384" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">timber sleepers set in the gravel</text>

        {/* Gravel forecourt — pocket below the steps, bounded east by the level-change line */}
        <g filter="url(#rough-soft)">
          <polygon points="619,372 760,372 827,386 827,475 619,475" fill="url(#hatch-gravel)" fillOpacity="0.7" />
        </g>
        <text x="722" y="432" textAnchor="middle" fontFamily="var(--hand)" fontSize="17" fill="var(--ink)" opacity="0.5">Gravel Forecourt</text>

        {/* Skinny brick wall — 1.6m, between the hedge and the patio */}
        <g filter="url(#rough)">
          <rect x="539" y="201" width="8" height="91" fill="var(--stamp)" fillOpacity="0.55" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="1" />
        </g>
        <text x="560" y="222" fontFamily="var(--type)" fontSize="7.5" fill="var(--stamp)" opacity="0.9" transform="rotate(90,560,222)">skinny brick wall</text>

        {/* ── HOUSE WALL — solid ink line over the hardscape edges ── */}
        <g filter="url(#rough)">
          <path
            d="M 52 281 L 268 281 L 268 201 L 336 201 L 439 190 L 439 201 L 547 201 L 547 42 L 958 42"
            fill="none" stroke="var(--ink)" strokeOpacity="0.85" strokeWidth="2.4"
          />
        </g>

        {/* Window & door accents on the wall */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <line x1="120" y1="281" x2="222" y2="281" stroke="var(--accent)" strokeWidth="5" strokeOpacity="0.9" />
          <text x="171" y="302" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)">Study Window</text>

          <line x1="346" y1="200" x2="429" y2="191" stroke="var(--accent)" strokeWidth="5" strokeOpacity="0.9" />
          <text x="388" y="172" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)">Front Door</text>

          {/* CHECK: bedroom window positions along the top wall are approximate —
              Brad to confirm exact positions/widths */}
          <line x1="600" y1="42" x2="660" y2="42" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="630" y="30" textAnchor="middle" fontFamily="var(--hand)" fontSize="13" fill="var(--ink)" opacity="0.8">Bedroom 3</text>
          <line x1="700" y1="42" x2="760" y2="42" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="730" y="30" textAnchor="middle" fontFamily="var(--hand)" fontSize="13" fill="var(--ink)" opacity="0.8">Bedroom 1</text>
          <line x1="840" y1="42" x2="895" y2="42" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="867" y="30" textAnchor="middle" fontFamily="var(--hand)" fontSize="13" fill="var(--ink)" opacity="0.8">Ensuite</text>
        </g>

        {/* Boundary wall — dashed, down the right */}
        <g filter="url(#rough-soft)">
          <path d="M 962 42 L 962 590" fill="none" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="7 4" />
          <text x="978" y="300" fontFamily="var(--type)" fontSize="9" fill="var(--ink)" opacity="0.5" transform="rotate(90,978,300)">
            — — B R I C K &nbsp; B O U N D A R Y &nbsp; W A L L — —
          </text>
        </g>

        {/* ── ZONES (clickable) ── */}
        {order.map(renderZone)}

        {/* Pillar in Bed 1 (0.6m brick pier) + planting notes */}
        <g style={{ pointerEvents: "none" }}>
          <rect x="222" y="315" width="34" height="34" fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.7" strokeWidth="1.2" filter="url(#rough)" />
          <text x="262" y="336" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">pillar</text>
          <text x="302" y="242" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">hydrangea</text>
          <text x="284" y="364" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">lavender</text>
        </g>

        {/* Apple tree canopy hint */}
        <g style={{ pointerEvents: "none" }}>
          <circle cx="928" cy="520" r="22" fill="var(--green)" fillOpacity="0.4" stroke="var(--ink)" strokeOpacity="0.4" strokeWidth="1" filter="url(#rough)" />
        </g>

        {/* Margin notes */}
        <g style={{ pointerEvents: "none" }}>
          <text x="90" y="420" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.7" transform="rotate(-3,90,420)">
            box hedge screens the patio ↗
          </text>
          <text x="770" y="610" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.7">
            apple tree at the bottom of the drive ↑
          </text>
        </g>

        {/* Zone labels */}
        {order.map((key) => {
          const z = Z[key];
          if (!z.labelXY) return null;
          const [lx, ly] = z.labelXY;
          const vertical = verticalLabels.includes(key);
          const small = ["frontStone", "frontHedge", "frontBoxHedge"].includes(key);
          const tilt = ((key.charCodeAt(5) % 5) - 2) * 0.6;
          const transform = vertical ? `rotate(90, ${lx}, ${ly})` : `rotate(${tilt}, ${lx}, ${ly})`;
          return (
            <g key={`label-${key}`} style={{ pointerEvents: "none" }} transform={transform}>
              <text
                x={lx} y={ly} textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize={small ? "13" : "18"}
                fill="var(--ink)"
                opacity={hover === key ? "1" : "0.85"}
              >
                {z.title.replace("Front · ", "")}
              </text>
              {z.dims && !vertical && !small && (
                <text x={lx} y={ly + 13} textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)" opacity="0.85">
                  {z.dims}
                </text>
              )}
            </g>
          );
        })}

        {/* Tooltip on hover */}
        {hover && Z[hover] && Z[hover].plantKey && (
          <g style={{ pointerEvents: "none" }}>
            <text
              x={Z[hover].labelXY ? Z[hover].labelXY[0] : 500}
              y={(Z[hover].labelXY ? Z[hover].labelXY[1] : 400) + 28}
              textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--accent)" opacity="0.95"
            >
              ↗ open
            </text>
          </g>
        )}
      </svg>

      {/* Legend strip below */}
      <div className="plan-legend">
        <div className="t-stamp">Legend</div>
        <div className="legend-grid">
          {order.map((k) => {
            const z = Z[k];
            return (
              <button
                key={k}
                className="legend-item"
                onClick={() => onOpenZone(k)}
                onMouseEnter={() => setHover(k)}
                onMouseLeave={() => setHover(null)}
              >
                <span className="legend-dot" style={{ background: z.color }} />
                <span className="legend-name">{z.title.replace("Front · ", "")}</span>
                <span className="legend-meta">{z.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .plan-legend {
          padding: 18px 24px 24px;
          border-top: 1px dashed var(--hairline);
          margin-top: 8px;
        }
        .legend-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 6px 14px;
          margin-top: 10px;
        }
        .legend-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: baseline;
          gap: 10px;
          background: transparent;
          border: 0;
          padding: 6px 4px;
          cursor: pointer;
          text-align: left;
          border-bottom: 1px dotted var(--hairline);
        }
        .legend-item:hover { background: color-mix(in oklab, var(--ink) 4%, transparent); }
        .legend-dot {
          width: 14px; height: 14px; border-radius: 50%;
          box-shadow: 0 0 0 1px var(--ink) inset;
          opacity: 0.85;
        }
        .legend-name { font-family: var(--hand); font-size: 20px; color: var(--ink); }
        .legend-meta {
          font-family: var(--type); font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--pencil);
        }
        .zone:hover { filter: brightness(1.05); }
        .plan-head {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 24px; padding: 4px 6px 18px;
        }
        .plan-title {
          font-size: clamp(28px, 4.4vw, 52px);
          line-height: 1.04; margin-top: 6px; max-width: 16ch;
        }
        .plan-compass { text-align: right; flex-shrink: 0; }
        @media (max-width: 600px) {
          .plan-head { flex-direction: column; gap: 6px; }
          .plan-compass { text-align: left; }
        }
      `}</style>
    </div>
  );
}

window.FrontGardenPlan = FrontGardenPlan;
