// Oak Lodge Garden — GardenPlan.jsx
// The hero view: a hand-drawn top-down map of the whole garden.
// Wires every zone shape through an SVG roughen filter for ink-on-paper feel.

const { useMemo, useState } = React;

function GardenPlan({ onOpenZone, dark }) {
  const Z = window.OAK.ZONES;
  const [hover, setHover] = useState(null);

  // Zones rendered in z-order: hardscape first, beds on top, pots on top
  const order = [
    "patio", "kitchen", "lounge", "steps",
    "stone", "bed1", "bed2", "bed3", "bed4", "pear",
    "bigpot1", "bigpot2", "littlepot1", "littlepot2",
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
    const isInteractive = z.plantKey || ["patio", "stone", "pear"].includes(key);
    const c = z.color;

    // hardscape vs bed vs pot visual treatment
    const isHard = ["steps", "patio", "kitchen", "lounge"].includes(key);
    const isOutdoorRoom = ["kitchen", "lounge"].includes(key);
    const fillPattern =
      isPot ? null :
      key === "steps" ? "url(#hatch-paving)" :
      key === "patio" ? "url(#hatch-paving)" :
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

  return (
    <div className="plan-wrap fade-in" style={{ position: "relative" }}>
      {/* Title block sits above the SVG so it never overlaps the plan */}
      <header className="plan-head">
        <div>
          <div className="t-stamp">Plot · Oak Lodge · Bromsgrove</div>
          <div className="t-display plan-title">The garden, drawn from above</div>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)", marginTop: 6 }}>
            tap any bed to open it ·
          </div>
        </div>
        <div className="plan-compass">
          <div className="t-stamp">N ↑</div>
          <div className="t-mono" style={{ marginTop: 4 }}>scale ≈ 1:30</div>
          <div className="t-mono" style={{ marginTop: 2 }}>≈ 15m × 10m</div>
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

        {/* House base + doors */}
        <g filter="url(#rough)">
          <rect x="25" y="478" width="750" height="95" fill="var(--ink)" fillOpacity={dark ? "0.3" : "0.18"} />
          <rect x="205" y="478" width="50" height="6" fill="var(--accent)" fillOpacity="0.9" />
          <rect x="400" y="478" width="70" height="6" fill="var(--accent)" fillOpacity="0.9" />
        </g>
        <g filter="url(#rough-soft)">
          <text x="50" y="540" className="t-stamp" fontFamily="var(--type)" fontSize="11" fill="var(--ink)" opacity="0.6">
            T H E &nbsp; H O U S E
          </text>
          <text x="218" y="498" fontFamily="var(--type)" fontSize="8" fill="var(--ink)" opacity="0.7">kitchen door</text>
          <text x="412" y="498" fontFamily="var(--type)" fontSize="8" fill="var(--ink)" opacity="0.7">patio doors</text>
        </g>

        {/* Boundary wall (light dashed line) */}
        <g filter="url(#rough-soft)">
          <path
            d="M 25 30 L 775 30 L 775 478"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="6 4"
          />
          <path
            d="M 25 30 L 25 478"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="6 4"
          />
          <text x="380" y="22" textAnchor="middle" fontFamily="var(--type)" fontSize="9" fill="var(--ink)" opacity="0.55">
            — — — &nbsp; B O U N D A R Y &nbsp; W A L L &nbsp; — — —
          </text>
        </g>

        {/* Gate hint */}
        <g filter="url(#rough)">
          <rect x="190" y="26" width="80" height="8" fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.7" strokeWidth="1" />
          <text x="230" y="20" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)" opacity="0.75">
            gate
          </text>
        </g>

        {/* Zones */}
        {order.map(renderZone)}

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
                fontSize={isPot ? "14" : "20"}
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
          <text x="595" y="50" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.7" transform="rotate(-3, 595, 50)">
            wisteria over the wall ↘
          </text>
          <text x="392" y="600" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.7" textAnchor="middle">
            ↑ &nbsp; back wall of the house
          </text>
          <text x="55" y="200" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.7" transform="rotate(-90, 55, 200)">
            ← west fence
          </text>
        </g>

        {/* Tooltip on hover */}
        {hover && Z[hover] && Z[hover].plantKey && (
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
          {["bed1", "bed2", "bed3", "bed4", "stone", "patio", "pear", "bigpot1", "bigpot2", "littlepot1", "littlepot2"].map((k) => {
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

window.GardenPlan = GardenPlan;
