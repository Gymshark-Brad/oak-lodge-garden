// Oak Lodge Garden — palette.js
// Seasonal palette switcher. Replaces the Design-tool tweaks-panel.
// No external dependencies, no edit-mode protocol.

const PALETTES = [
  { id: "spring", label: "Spring", paper: "#f3ecda", ink: "#2b271c", accent: "#9c5a2c" },
  { id: "summer", label: "Summer", paper: "#f6efd9", ink: "#3a2f1d", accent: "#bb6a2c" },
  { id: "autumn", label: "Autumn", paper: "#ece1c9", ink: "#2d2014", accent: "#a8501f" },
  { id: "winter", label: "Winter", paper: "#ecebe3", ink: "#1f2024", accent: "#6a7e8c" },
  { id: "night",  label: "Night",  paper: "#1c2018", ink: "#e7e0cb", accent: "#d6a168" },
];

// Persist the chosen palette across sessions
function loadPalette() {
  try { return localStorage.getItem("oak-palette") || "spring"; } catch { return "spring"; }
}
function savePalette(id) {
  try { localStorage.setItem("oak-palette", id); } catch {}
}

// Apply palette to the document root
function applyPalette(id) {
  document.documentElement.dataset.palette = id;
  savePalette(id);
}

// Initialise on load
applyPalette(loadPalette());

// ── React component ──────────────────────────────────────────────────────────
const { useState: useState_P, useEffect: useEffect_P } = React;

function PaletteSwitcher() {
  const [active, setActive] = useState_P(loadPalette);

  const choose = (id) => {
    setActive(id);
    applyPalette(id);
  };

  return (
    <div className="palette-switcher" aria-label="Seasonal palette">
      {PALETTES.map((p) => (
        <button
          key={p.id}
          className={"pal-btn" + (active === p.id ? " is-on" : "")}
          onClick={() => choose(p.id)}
          title={p.label}
          aria-pressed={active === p.id}
        >
          <span className="pal-swatch" style={{ background: p.paper }}>
            <span style={{ background: p.ink }} />
            <span style={{ background: p.accent }} />
          </span>
          <span className="pal-label">{p.label}</span>
        </button>
      ))}
      <style>{`
        .palette-switcher {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .pal-btn {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 5px;
          padding: 4px 5px 3px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font: inherit;
          transition: border-color 140ms ease;
        }
        .pal-btn:hover { border-color: rgba(0,0,0,0.25); }
        .pal-btn.is-on {
          border-color: rgba(0,0,0,0.6);
          background: rgba(0,0,0,0.05);
        }
        .pal-swatch {
          width: 28px;
          aspect-ratio: 1.4;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
          display: block;
        }
        .pal-swatch span {
          position: absolute;
          bottom: 3px;
          width: 26%;
          height: 26%;
          border-radius: 50%;
        }
        .pal-swatch span:nth-child(1) { left: 5px; }
        .pal-swatch span:nth-child(2) { right: 5px; }
        .pal-label {
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 9px;
          letter-spacing: 0.04em;
          color: var(--pencil);
        }
        @media (max-width: 600px) { .pal-label { display: none; } }
      `}</style>
    </div>
  );
}

// useTweaks stub — app.jsx calls useTweaks() for the palette; we shim it
// so app.jsx needs no changes and the palette reads from our state instead.
function useTweaks(defaults) {
  const [t, setT] = useState_P(() => ({
    ...defaults,
    palette: loadPalette(),
  }));

  const setTweak = (key, val) => {
    setT((prev) => ({ ...prev, [key]: val }));
    if (key === "palette") applyPalette(val);
  };

  return [t, setTweak];
}

// TweaksPanel — replaced with our PaletteSwitcher rendered in the header.
// app.jsx calls <TweaksPanel> so we export a no-op wrapper.
function TweaksPanel({ children }) { return null; }
function TweakSection() { return null; }

window.useTweaks = useTweaks;
window.TweaksPanel = TweaksPanel;
window.TweakSection = TweakSection;
window.PaletteSwitcher = PaletteSwitcher;
