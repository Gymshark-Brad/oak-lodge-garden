// Oak Lodge Garden — GardenPlan.jsx
// The hero view: a hand-drawn top-down map of the whole garden.
// Wires every zone shape through an SVG roughen filter for ink-on-paper feel.

const { useMemo, useState } = React;

function GardenPlan({ onOpenZone, dark }) {
  const Z = window.OAK.ZONES;
  const [hover, setHover] = useState(null);
  const hasPhotos = (key) => Object.values(window.OAK.PHOTOS_BY_MONTH)
    .some((month) => month[key] && month[key].length > 0);

  // The main plan stays architectural. Pots are nested inside their parent
  // folios and remain clickable there.
  const order = [
    "patio", "lounge", "steps",
    "stone", "bed1", "bed2", "bed3", "bed4", "bed5", "pear",
  ];

  const RoughDefs = (
    <defs>
      {/* Roughen filter — wobble strokes & fills */}
      <filter id="rough" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="3" result="t" />
        <feDisplacementMap in="SourceGraphic" in2="t" scale="3.2" />
      </filter>
      <filter id="rough-soft" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="t" />
        <feDisplacementMap in="SourceGraphic" in2="t" scale="1.8" />
      </filter>
      {/* Hatch patterns by zone type */}
      <pattern id="hatch-soil" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
        <rect width="6" height="6" fill="var(--paper)" />
        <line x1="0" y1="3" x2="6" y2="3" stroke="var(--ink)" strokeOpacity="0.25" strokeWidth="0.6" />
      </pattern>
      <pattern id="hatch-paving" width="14" height="14" patternUnits="userSpaceOnUse">
        <rect width="14" height="14" fill="var(--paper)" />
        <path d="M 0 7 L 14 7 M 7 0 L 7 14" stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="0.6" />
      </pattern>
      <pattern id="hatch-deck" width="24" height="12" patternUnits="userSpaceOnUse">
        <rect width="24" height="12" fill="var(--paper)" />
        <path d="M 0 0 L 24 0 M 0 12 L 24 12 M 12 0 L 12 12" stroke="var(--ink)" strokeOpacity="0.15" strokeWidth="0.55" />
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
    const isPot = z.isPot;
    const hasNestedZones = (window.OAK.NESTED_ZONE_MAPS?.[key] || []).length > 0;
    const isInteractive = !!z.plantKey || hasPhotos(key) || hasNestedZones;
    const c = z.color;

    // hardscape vs bed vs pot visual treatment
    const isHard = ["steps", "patio", "lounge"].includes(key);
    const isOutdoorRoom = key === "lounge";
    const fillPattern =
      isPot ? null :
      key === "steps" ? "url(#hatch-paving)" :
      key === "patio" ? "url(#hatch-deck)" :
      key === "stone" ? "url(#hatch-gravel)" :
      isOutdoorRoom ? null :
      "url(#hatch-soil)";

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
        {/* base color tint, roughened */}
        <g filter="url(#rough)">
          {React.cloneElement(shapeEl, {
            fill: c,
            fillOpacity: isPot ? (dark ? 0.85 : 0.7) : isOutdoorRoom ? (dark ? 0.78 : 0.7) : (dark ? 0.42 : 0.32),
            stroke: c,
            strokeOpacity: 0.0,
          })}
        </g>
        {/* hatch overlay (skipped for solid-filled outdoor rooms and pots) */}
        {fillPattern && (
          <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
            {React.cloneElement(shapeEl, {
              fill: fillPattern,
              fillOpacity: 0.6,
            })}
          </g>
        )}
        {/* pot rim highlight */}
        {isPot && (
          <g filter="url(#rough)" style={{ pointerEvents: "none" }}>
            {React.cloneElement(shapeEl, {
              fill: "none",
              stroke: dark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)",
              strokeWidth: 2.2,
            })}
          </g>
        )}
        {/* ink outline (sketchy) */}
        <g filter="url(#rough)" style={{ pointerEvents: "none" }}>
          {React.cloneElement(shapeEl, {
            fill: "none",
            stroke: "var(--ink)",
            strokeOpacity: isHover ? 0.95 : 0.7,
            strokeWidth: isHover ? 1.6 : 1.1,
          })}
        </g>
        {/* hit area on top, transparent */}
        {React.cloneElement(shapeEl, { fill: "transparent", stroke: "none" })}
      </g>
    );
  };

  const DimH = ({ x1, x2, y, label, above = true }) => (
    <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <rect x={(x1 + x2) / 2 - 18} y={y + (above ? -11 : 2)} width="36" height="10" fill="var(--paper)" fillOpacity="0.9" />
      <text x={(x1 + x2) / 2} y={y + (above ? -3 : 10)} textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--ink)" opacity="0.72">{label}</text>
    </g>
  );

  const DimV = ({ x, y1, y2, label, left = false }) => (
    <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <line x1={x - 4} y1={y1} x2={x + 4} y2={y1} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <line x1={x - 4} y1={y2} x2={x + 4} y2={y2} stroke="var(--ink)" strokeOpacity="0.48" strokeWidth="0.8" />
      <text x={x + (left ? -7 : 7)} y={(y1 + y2) / 2} textAnchor={left ? "end" : "start"} dominantBaseline="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--ink)" opacity="0.72">{label}</text>
    </g>
  );

  return (
    <div className="plan-wrap fade-in" style={{ position: "relative" }}>
      {/* Title block sits above the SVG so it never overlaps the plan */}
      <header className="plan-head">
        <div>
          <div className="t-stamp">Plot · Oak Lodge · Bromsgrove</div>
          <h1 className="t-display plan-title">The garden, drawn from above</h1>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)", marginTop: 6 }}>
            measured survey · current planting, august 2026 · tap any bed to open it ·
          </div>
        </div>
        <div className="plan-compass">
          <div className="t-stamp">N ↑</div>
          <div className="t-mono" style={{ marginTop: 4 }}>scale ≈ 1:30</div>
          <div className="t-mono" style={{ marginTop: 2 }}>15m house edge · 50 units = 1m</div>
        </div>
      </header>

      <svg
        viewBox="0 0 820 620"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 200px)",
          display: "block",
        }}
      >
        {RoughDefs}

        {/* House wash and measured back wall — the 15m survey baseline. */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <rect x="25" y="478" width="750" height="96" fill="var(--ink)" fillOpacity={dark ? 0.3 : 0.16} />
          <text x="62" y="548" fontFamily="var(--type)" fontSize="11" fill="var(--ink)" opacity="0.58" letterSpacing="7">
            T H E &nbsp; H O U S E
          </text>
        </g>
        <g filter="url(#rough)">
          <line x1="25" y1="478" x2="775" y2="478" stroke="var(--ink)" strokeOpacity="0.82" strokeWidth="2.2" />
          <line x1="226" y1="478" x2="266" y2="478" stroke="var(--accent)" strokeWidth="6" strokeOpacity="0.9" />
          <line x1="381" y1="478" x2="451" y2="478" stroke="var(--accent)" strokeWidth="6" strokeOpacity="0.9" />
        </g>
        <g style={{ pointerEvents: "none" }}>
          <text x="246" y="497" textAnchor="middle" fontFamily="var(--type)" fontSize="8" fill="var(--ink)" opacity="0.72">kitchen door</text>
          <text x="416" y="497" textAnchor="middle" fontFamily="var(--type)" fontSize="8" fill="var(--ink)" opacity="0.72">patio doors</text>
        </g>

        {/* Survey boundary. The gate is on the west fence, as measured in the source drawing. */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <path d="M 94 98 L 164 58 L 464 58 L 464 43 L 514 43 L 514 93 L 714 93 L 714 55 L 765 55 L 765 478"
            fill="none" stroke="var(--ink)" strokeOpacity="0.52" strokeWidth="1.6" strokeDasharray="7 4" />
          <path d="M 94 98 L 94 202 M 94 245 L 94 478"
            fill="none" stroke="var(--ink)" strokeOpacity="0.52" strokeWidth="1.6" strokeDasharray="7 4" />
          <text x="367" y="48" textAnchor="middle" fontFamily="var(--type)" fontSize="8.5" fill="var(--ink)" opacity="0.55" letterSpacing="3">
            B O U N D A R Y &nbsp; W A L L
          </text>
          <text x="78" y="156" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)" opacity="0.7" transform="rotate(-90,78,156)">west fence</text>
        </g>
        <g filter="url(#rough)" style={{ pointerEvents: "none" }}>
          <line x1="94" y1="245" x2="114" y2="212" stroke="var(--ink)" strokeOpacity="0.8" strokeWidth="1.4" />
          <text x="80" y="226" textAnchor="end" fontFamily="var(--hand)" fontSize="17" fill="var(--ink)" opacity="0.82">gate</text>
        </g>

        {/* Fixed walls from the measured survey, drawn beneath the clickable beds. */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <path d="M 94 313 L 194 313 L 194 333 L 334 333" fill="none" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M 194 373 L 334 373 L 334 393" fill="none" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M 334 243 L 334 393 M 474 243 L 474 478" fill="none" stroke="var(--ink)" strokeOpacity="0.52" strokeWidth="2" />
          <text x="255" y="328" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">upper brick wall</text>
          <text x="255" y="388" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">lower brick wall</text>
        </g>

        {/* Zones */}
        {order.map(renderZone)}

        {/* Step courses and decking joints add the same architectural fidelity as the front plan. */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          {[273, 303, 333, 363].map((y) => (
            <line key={`step-${y}`} x1="348" y1={y} x2="460" y2={y} stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="1" />
          ))}
          <line x1="474" y1="333" x2="774" y2="333" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1" />
        </g>

        {/* Retained survey measurements; 50 SVG units represent one metre. */}
        <g className="survey-dimensions">
          <DimH x1={214} x2={464} y={58} label="5m" above={false} />
          <DimV x={222} y1={58} y2={188} label="2.6m" />
          <DimH x1={104} x2={214} y={194} label="2.6m" above={false} />
          <DimH x1={464} x2={514} y={100} label="1m" above={false} />
          <DimV x={520} y1={43} y2={93} label="1m" />

          <DimV x={88} y1={323} y2={478} label="3.1m" left />

          <DimH x1={334} x2={474} y={237} label="≈3m" />
          <DimV x={328} y1={243} y2={393} label="3m" left />

          <DimH x1={474} x2={774} y={278} label="6m" />
          <DimV x={780} y1={283} y2={333} label="1m" />
          <DimH x1={474} x2={774} y={484} label="6m" above={false} />
          <DimV x={468} y1={333} y2={478} label="≈3m" left />

          <DimH x1={25} x2={775} y={591} label="15m house edge" />
        </g>

        {/* Labels — handwritten, slightly tilted, with arrow ticks */}
        {order.map((key) => {
          const z = Z[key];
          if (!z.labelXY) return null;
          const [lx, ly] = z.labelXY;
          const tilt = ((key.charCodeAt(0) % 5) - 2) * 0.6;
          const isPot = z.isPot;
          return (
            <g key={`label-${key}`} style={{ pointerEvents: "none" }} transform={`rotate(${tilt}, ${lx}, ${ly})`}>
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize={isPot ? "13" : ["bed3", "bed4"].includes(key) ? "16" : "20"}
                fill={isPot ? "var(--accent)" : "var(--ink)"}
                opacity={hover === key ? "1" : "0.85"}
              >
                {z.title}
              </text>
              {z.dims && !isPot && (
                <text
                  x={lx}
                  y={ly + 14}
                  textAnchor="middle"
                  fontFamily="var(--type)"
                  fontSize="8"
                  fill="var(--pencil)"
                  opacity="0.85"
                >
                  {z.dims}
                </text>
              )}
            </g>
          );
        })}

        {/* Margin notes — handwritten asides */}
        <g style={{ pointerEvents: "none" }}>
          <text x="600" y="74" fontFamily="var(--hand)" fontSize="17" fill="var(--ink)" opacity="0.7" transform="rotate(-3, 600, 74)">
            wisteria over the wall ↘
          </text>
          <text x="278" y="470" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)" opacity="0.65">back wall of the house</text>
        </g>

        {/* Tooltip on hover */}
        {hover && Z[hover] && (Z[hover].plantKey || hasPhotos(hover)) && (
          <g style={{ pointerEvents: "none" }}>
            <text
              x={Z[hover].labelXY ? Z[hover].labelXY[0] : 400}
              y={(Z[hover].labelXY ? Z[hover].labelXY[1] : 400) + 30}
              textAnchor="middle"
              fontFamily="var(--hand)"
              fontSize="16"
              fill="var(--accent)"
              opacity="0.95"
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
          {["bed1", "bed2", "bed3", "bed4", "bed5", "stone", "patio", "steps", "lounge", "pear"].map((k) => {
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
                <span className="legend-name">{z.title}</span>
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
          min-height: 44px;
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
        .legend-name {
          font-family: var(--hand); font-size: 20px; color: var(--ink);
        }
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
          line-height: 1.04; margin: 6px 0 0; max-width: 16ch;
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

window.GardenPlan = GardenPlan;
