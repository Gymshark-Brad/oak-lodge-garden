// Oak Lodge Garden — FrontGardenPlan.jsx
// The front garden: a hand-drawn top-down map of the gravel forecourt along
// the front elevation. Clone of GardenPlan.jsx; drawing lifted from the
// signed-off wireframe (front-garden-handoff/wireframe.html).

const { useState: useState_FGP } = React;

function FrontGardenPlan({ onOpenZone, dark }) {
  const Z = window.OAK.ZONES;
  const [hover, setHover] = useState_FGP(null);

  // Front-garden zones only, beds in z-order
  const order = ["frontEntrance", "frontWallBed", "frontCornerBush", "frontBoundaryBed"];

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
    const isInteractive = !!z.plantKey;
    const c = z.color;

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
            fillOpacity: dark ? 0.42 : 0.32,
            stroke: c,
            strokeOpacity: 0.0,
          })}
        </g>
        {/* hatch overlay */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          {React.cloneElement(shapeEl, {
            fill: "url(#hatch-soil)",
            fillOpacity: 0.6,
          })}
        </g>
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
          <div className="t-stamp">Plot · Oak Lodge · Bromsgrove · front elevation</div>
          <div className="t-display plan-title">The front garden, drawn from above</div>
          <div className="t-hand" style={{ fontSize: 22, color: "var(--pencil)", marginTop: 6 }}>
            house wall steps across the top · tap any bed to open it ·
          </div>
        </div>
        <div className="plan-compass">
          <div className="t-stamp">plan view</div>
          <div className="t-mono" style={{ marginTop: 4 }}>house wall = the stepped line</div>
          <div className="t-mono" style={{ marginTop: 2 }}>garden sits in front of it</div>
        </div>
      </header>

      <svg
        viewBox="0 0 1000 640"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 200px)",
          display: "block",
        }}
      >
        {RoughDefs}

        {/* Gravel forecourt (in front of the house wall) */}
        <g filter="url(#rough-soft)">
          <rect x="335" y="300" width="565" height="185" fill="url(#hatch-gravel)" fillOpacity="0.7" />
        </g>
        <text x="430" y="452" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="var(--ink)" opacity="0.4">
          gravel forecourt
        </text>

        {/* Slabbed (sandstone) section inset in the gravel, by the door */}
        <g filter="url(#rough-soft)">
          <rect x="500" y="305" width="215" height="110" fill="url(#hatch-paving)" fillOpacity="0.9" />
          <rect x="500" y="305" width="215" height="110" fill="none" stroke="var(--ink)" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 3" />
        </g>
        <text x="607" y="360" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)" opacity="0.7">Slabbed section</text>
        <text x="607" y="376" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">sandstone paving</text>

        {/* HOUSE WALL — stepped outline (house is behind/above the line) */}
        <g filter="url(#rough)">
          <path
            d="M140 455 L330 455 L330 430 L500 430 L500 250 L930 250 L930 300"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.8"
            strokeWidth="2.4"
          />
        </g>
        <text x="700" y="205" textAnchor="middle" fontFamily="var(--type)" fontSize="10" fill="var(--ink)" opacity="0.5">
          T H E &nbsp; H O U S E &nbsp; · &nbsp; f r o n t &nbsp; e l e v a t i o n
        </text>

        {/* Boundary wall down the right */}
        <g filter="url(#rough-soft)">
          <path d="M985 260 L985 585 L640 585" fill="none" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="7 4" />
          <text x="992" y="400" fontFamily="var(--type)" fontSize="9" fill="var(--ink)" opacity="0.5" transform="rotate(90,992,400)">
            — — B R I C K &nbsp; B O U N D A R Y &nbsp; W A L L — —
          </text>
        </g>

        {/* Zones */}
        {order.map(renderZone)}

        {/* Window / door ticks — drawn over the zones, non-interactive */}
        <g filter="url(#rough-soft)" style={{ pointerEvents: "none" }}>
          <line x1="165" y1="455" x2="285" y2="455" stroke="var(--accent)" strokeWidth="5" strokeOpacity="0.9" />
          <text x="225" y="478" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)">Study window</text>

          <line x1="360" y1="430" x2="465" y2="430" stroke="var(--accent)" strokeWidth="5" strokeOpacity="0.9" />
          <text x="412" y="453" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)">Front door</text>

          <line x1="540" y1="250" x2="610" y2="250" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="575" y="238" textAnchor="middle" fontFamily="var(--hand)" fontSize="15" fill="var(--ink)">Bedroom 3 window</text>
          <line x1="680" y1="250" x2="755" y2="250" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="717" y="238" textAnchor="middle" fontFamily="var(--hand)" fontSize="15" fill="var(--ink)">Bedroom 1 window</text>
          <line x1="828" y1="250" x2="895" y2="250" stroke="var(--ink)" strokeWidth="5" strokeOpacity="0.5" />
          <text x="862" y="238" textAnchor="middle" fontFamily="var(--hand)" fontSize="15" fill="var(--ink)">Ensuite window</text>
        </g>

        {/* Stone trough (hosta) at the slabbed / gravel junction */}
        <g style={{ pointerEvents: "none" }}>
          <rect x="702" y="352" width="26" height="26" fill="none" stroke="var(--ink)" strokeOpacity="0.7" strokeWidth="1.4" filter="url(#rough)" />
          <circle cx="715" cy="365" r="8" fill="var(--green)" fillOpacity="0.5" />
          <text x="715" y="398" textAnchor="middle" fontFamily="var(--type)" fontSize="7.5" fill="var(--pencil)">stone trough · hosta</text>
        </g>

        {/* Box bush on the porch return wall */}
        <g style={{ pointerEvents: "none" }}>
          <circle cx="500" cy="368" r="15" fill="var(--green)" fillOpacity="0.55" stroke="var(--ink)" strokeOpacity="0.7" strokeWidth="1.2" filter="url(#rough)" />
          <text x="466" y="350" textAnchor="end" fontFamily="var(--hand)" fontSize="15" fill="var(--ink)">Bush (box) </text>
          <path d="M468 353 L493 365" stroke="var(--ink)" strokeWidth="1" strokeOpacity="0.6" />
        </g>

        {/* Pots by the study window */}
        <g style={{ pointerEvents: "none" }}>
          <circle cx="352" cy="478" r="17" fill="#3f6fb0" fillOpacity="0.55" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="1.2" filter="url(#rough)" />
          <circle cx="384" cy="482" r="13" fill="#7a5a9a" fillOpacity="0.5" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="1.2" filter="url(#rough)" />
          <text x="368" y="508" textAnchor="middle" fontFamily="var(--type)" fontSize="8" fill="var(--pencil)">hydrangea · lavender · blue pot</text>
        </g>

        {/* Honeysuckle arch over the entrance + key */}
        <g style={{ pointerEvents: "none" }}>
          <path d="M320 455 Q325 415 360 408" fill="none" stroke="var(--green)" strokeWidth="3" strokeOpacity="0.7" filter="url(#rough-soft)" />
          <g transform="translate(560,520)">
            <rect x="0" y="0" width="86" height="30" fill="none" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="1.2" filter="url(#rough)" />
            <line x1="43" y1="0" x2="43" y2="30" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="1" />
            <circle cx="110" cy="15" r="16" fill="none" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="1.2" filter="url(#rough)" />
            <text x="110" y="20" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="var(--ink)">HS</text>
            <text x="150" y="20" fontFamily="var(--type)" fontSize="8.5" fill="var(--pencil)">HS = honeysuckle over the entrance</text>
          </g>
        </g>

        {/* Margin notes */}
        <g style={{ pointerEvents: "none" }}>
          <text x="704" y="308" textAnchor="middle" fontFamily="var(--type)" fontSize="8" fill="var(--pencil)">
            cotoneaster · climbing roses · fern · weigela · hostas
          </text>
          <text x="815" y="600" textAnchor="middle" fontFamily="var(--type)" fontSize="8" fill="var(--pencil)">
            laurel · choisya (variegated) · climber · thyme
          </text>
          <text x="600" y="335" fontFamily="var(--hand)" fontSize="15" fill="var(--stamp)" opacity="0.75">
            ← photo walk 4009 → 4034 →
          </text>
        </g>

        {/* Labels — handwritten, slightly tilted (boundary bed runs vertical) */}
        {order.map((key) => {
          const z = Z[key];
          if (!z.labelXY) return null;
          const [lx, ly] = z.labelXY;
          const vertical = key === "frontBoundaryBed";
          const tilt = ((key.charCodeAt(0) % 5) - 2) * 0.6;
          const transform = vertical ? `rotate(90, ${lx}, ${ly})` : `rotate(${tilt}, ${lx}, ${ly})`;
          return (
            <g key={`label-${key}`} style={{ pointerEvents: "none" }} transform={transform}>
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize={vertical ? "16" : "18"}
                fill="var(--ink)"
                opacity={hover === key ? "1" : "0.85"}
              >
                {z.title}
              </text>
              {z.dims && !vertical && (
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

        {/* Tooltip on hover */}
        {hover && Z[hover] && Z[hover].plantKey && (
          <g style={{ pointerEvents: "none" }}>
            <text
              x={Z[hover].labelXY ? Z[hover].labelXY[0] : 500}
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
          {["frontEntrance", "frontWallBed", "frontCornerBush", "frontBoundaryBed"].map((k) => {
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

window.FrontGardenPlan = FrontGardenPlan;
