// Oak Lodge Garden — palette.js
// Seasonal palette switcher. Replaces the Design-tool tweaks-panel.
// No external dependencies, no edit-mode protocol.

const PALETTES = [
  { id: "spring", label: "Spring", mark: "⌁" },
  { id: "summer", label: "Summer", mark: "☀" },
  { id: "autumn", label: "Autumn", mark: "⌇" },
  { id: "winter", label: "Winter", mark: "❄" },
  { id: "night",  label: "Night", mark: "☾" },
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
function PaletteSwitcher({ active, onChange }) {
  const choose = (id) => {
    applyPalette(id);
    if (onChange) onChange(id);
  };

  return (
    <div className="palette-switcher" role="group" aria-label="Reading palette">
      {PALETTES.map((p) => (
        <button
          key={p.id}
          className={"pal-btn" + (active === p.id ? " is-on" : "")}
          onClick={() => choose(p.id)}
          title={`${p.label} palette`}
          aria-label={`${p.label} palette`}
          aria-pressed={active === p.id}
        >
          <span className="pal-mark" aria-hidden="true">{p.mark}</span>
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
          color: var(--ink-soft);
          border: 1px solid var(--hairline);
          border-radius: 2px;
          min-width: 44px;
          min-height: 44px;
          padding: 4px 6px 3px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font: inherit;
          transition: border-color 140ms ease, color 140ms ease, background 140ms ease;
        }
        .pal-btn:hover { border-color: var(--ink-soft); color: var(--ink); }
        .pal-btn.is-on {
          border-color: var(--ink);
          color: var(--paper);
          background: var(--ink);
        }
        .pal-mark { font-family: var(--serif); font-size: 18px; line-height: 1; }
        .pal-label {
          font-family: var(--type);
          font-size: 9px;
          letter-spacing: 0.04em;
          color: inherit;
        }
        @media (max-width: 600px) { .pal-label { display: none; } }
      `}</style>
    </div>
  );
}

window.loadPalette = loadPalette;
window.applyPalette = applyPalette;
window.PaletteSwitcher = PaletteSwitcher;
