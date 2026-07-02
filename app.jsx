// Oak Lodge Garden — app.jsx
// Main shell: routing between plan / bed / plant, palette tweaks, lightbox.

const { useState: useState_App, useEffect: useEffect_App, useMemo: useMemo_App } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "spring",
  "showMarginNotes": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useState_App({ name: "plan" }); // plan | calendar | watering | bed | plant
  const [calendarPlantReturn, setCalendarPlantReturn] = useState_App(false);
  const [wateringPlantReturn, setWateringPlantReturn] = useState_App(false);
  const [lightbox, setLightbox] = useState_App(null);

  const Z = window.OAK.ZONES;
  const PLANTS = window.OAK.PLANTS;

  const dark = t.palette === "night";

  useEffect_App(() => {
    document.documentElement.dataset.palette = t.palette || "spring";
  }, [t.palette]);

  // Plant navigation within a bed (prev/next)
  const plantList = useMemo_App(() => {
    if (view.name !== "plant" || !view.zoneKey) return [];
    const z = Z[view.zoneKey];
    return z.plantKey ? PLANTS[z.plantKey] : [];
  }, [view]);

  const currentPlant = useMemo_App(() => {
    if (view.name !== "plant") return null;
    if (typeof view.plantIndex === "number") return plantList[view.plantIndex];
    if (view.plantName) return plantList.find((p) => p.name === view.plantName);
    return null;
  }, [view, plantList]);

  const currentPlantIndex = useMemo_App(() => {
    if (!currentPlant) return -1;
    return plantList.findIndex((p) => p.name === currentPlant.name);
  }, [currentPlant, plantList]);

  const openZone = (zoneKey) => {
    setView({ name: "bed", zoneKey });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openPlant = ({ zoneKey, plantIndex, plantName, fromCalendar, fromWatering }) => {
    if (fromCalendar) setCalendarPlantReturn(true);
    if (fromWatering) setWateringPlantReturn(true);
    setView((prev) => ({
      name: "plant",
      zoneKey: zoneKey || prev.zoneKey,
      plantIndex,
      plantName,
    }));
  };
  const openPlantFromCalendar = (args) => openPlant({ ...args, fromCalendar: true });
  const openPlantFromWatering = (args) => openPlant({ ...args, fromWatering: true });
  const closePlant = () => {
    if (calendarPlantReturn) {
      setCalendarPlantReturn(false);
      setView({ name: "calendar" });
    } else if (wateringPlantReturn) {
      setWateringPlantReturn(false);
      setView({ name: "watering" });
    } else {
      setView((prev) => ({ name: "bed", zoneKey: prev.zoneKey }));
    }
  };
  const goCalendar = () => {
    setView({ name: "calendar" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goWatering = () => {
    setView({ name: "watering" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goPlanFromBed = () => {
    setView({ name: "plan" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Crumbs / chrome content depends on view
  const inBed = view.name === "bed" || (view.name === "plant" && !calendarPlantReturn && !wateringPlantReturn);
  const breadcrumb = inBed ? Z[view.zoneKey].title : null;
  const inCalendar = view.name === "calendar" || (view.name === "plant" && calendarPlantReturn);
  const inWatering = view.name === "watering" || (view.name === "plant" && wateringPlantReturn);

  return (
    <div className="app-root" data-palette={t.palette}>
      <header className="chrome">
        <div className="brand">
          <span className="crest">Oak Lodge</span>
          <span className="sub">— a garden notebook</span>
        </div>
        <div className="crumb-bar">
          <button
            className="ghostbtn"
            aria-pressed={view.name === "plan" || inBed}
            onClick={() => { setCalendarPlantReturn(false); setWateringPlantReturn(false); setView({ name: "plan" }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ minHeight: 32 }}
          >
            Garden plan
          </button>
          <button
            className="ghostbtn"
            aria-pressed={inCalendar}
            onClick={goCalendar}
            style={{ minHeight: 32 }}
          >
            Seasonal calendar
          </button>
          <button
            className="ghostbtn"
            aria-pressed={inWatering}
            onClick={goWatering}
            style={{ minHeight: 32 }}
          >
            Watering guide
          </button>
          {inBed && (
            <>
              <span className="t-mono" style={{ opacity: 0.5, padding: "0 6px" }}>›</span>
              <span className="t-mono" style={{ color: "var(--ink)" }}>{breadcrumb}</span>
            </>
          )}
        </div>
        <div className="t-mono" style={{ opacity: 0.7 }}>v.2026.05</div>
      </header>

      <main className="paper-main">
        <div className="sheet sheet-page">
          {view.name === "plan" && (
            <GardenPlan onOpenZone={openZone} dark={dark} />
          )}
          {(view.name === "calendar" || (view.name === "plant" && calendarPlantReturn)) && (
            <SeasonalCalendar
              onOpenPlant={openPlantFromCalendar}
            />
          )}
          {inWatering && (
            <WateringGuide
              onOpenPlant={openPlantFromWatering}
            />
          )}
          {(view.name === "bed" || (view.name === "plant" && !calendarPlantReturn && !wateringPlantReturn)) && (
            <BedDetail
              key={view.zoneKey}
              zoneKey={view.zoneKey}
              dark={dark}
              onBack={goPlanFromBed}
              onOpenPlant={openPlant}
              onOpenLightbox={(ph) => setLightbox(ph)}
            />
          )}
        </div>
      </main>

      {view.name === "plant" && currentPlant && (
        <PlantCard
          plant={currentPlant}
          zoneTitle={Z[view.zoneKey].title}
          onClose={closePlant}
          onPrev={
            currentPlantIndex > 0
              ? () => openPlant({ zoneKey: view.zoneKey, plantIndex: currentPlantIndex - 1 })
              : null
          }
          onNext={
            currentPlantIndex >= 0 && currentPlantIndex < plantList.length - 1
              ? () => openPlant({ zoneKey: view.zoneKey, plantIndex: currentPlantIndex + 1 })
              : null
          }
        />
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <PhotoOrFallback src={lightbox.src} caption={lightbox.caption} />
          <div className="t-hand" style={{
            position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center",
            color: "var(--paper)", fontSize: 24
          }}>
            {lightbox.caption}
          </div>
          <button className="ghostbtn" style={{
            position: "absolute", top: 22, right: 22, color: "var(--paper)", borderColor: "rgba(255,255,255,0.4)"
          }} onClick={() => setLightbox(null)}>close ✕</button>
        </div>
      )}

      {/* Tweaks panel — palette switcher */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Season / palette" />
        <div className="palette-grid">
          {[
            { id: "spring", label: "Spring", paper: "#f3ecda", ink: "#2b271c", accent: "#9c5a2c" },
            { id: "summer", label: "Summer", paper: "#f6efd9", ink: "#3a2f1d", accent: "#bb6a2c" },
            { id: "autumn", label: "Autumn", paper: "#ece1c9", ink: "#2d2014", accent: "#a8501f" },
            { id: "winter", label: "Winter", paper: "#ecebe3", ink: "#1f2024", accent: "#6a7e8c" },
            { id: "night",  label: "Night",  paper: "#1c2018", ink: "#e7e0cb", accent: "#d6a168" },
          ].map((p) => (
            <button
              key={p.id}
              className={"palette-card" + (t.palette === p.id ? " is-on" : "")}
              onClick={() => setTweak("palette", p.id)}
              title={p.label}
            >
              <div className="palette-swatch" style={{ background: p.paper }}>
                <span style={{ background: p.ink }} />
                <span style={{ background: p.accent }} />
              </div>
              <span className="palette-label">{p.label}</span>
            </button>
          ))}
        </div>
        <TweakSection label="Notes" />
        <div className="t-mono" style={{ fontSize: 11, opacity: 0.7, lineHeight: 1.5 }}>
          Switch the seasonal palette to match the month, or flip to <em>Night</em> for late-evening reading. Photos render with placeholder hatching where image files aren't wired up yet.
        </div>
      </TweaksPanel>

      <style>{`
        .app-root { min-height: 100vh; }
        .crumb-bar {
          display: flex; align-items: center; gap: 4px;
          flex: 2; justify-content: center;
        }
        @media (max-width: 700px) {
          .chrome { padding: 10px 14px; flex-wrap: wrap; gap: 6px; }
          .chrome .brand .sub { display: none; }
          .crumb-bar { flex: 1; justify-content: flex-end; }
        }
        .paper-main {
          padding: 28px clamp(14px, 4vw, 56px) 60px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .sheet-page {
          padding: 22px clamp(14px, 3vw, 28px);
          min-height: 60vh;
          border-radius: 1px;
        }

        /* Palette tweak swatches */
        .palette-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
          padding: 0 0 6px;
        }
        .palette-card {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 6px;
          padding: 6px 4px 4px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font: inherit;
        }
        .palette-card:hover { border-color: rgba(0,0,0,0.2); }
        .palette-card.is-on {
          border-color: rgba(0,0,0,0.55);
          background: rgba(0,0,0,0.04);
        }
        .palette-swatch {
          width: 100%; aspect-ratio: 1.4;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
        }
        .palette-swatch span {
          position: absolute; bottom: 4px; width: 28%; height: 28%; border-radius: 50%;
        }
        .palette-swatch span:nth-child(1) { left: 6px; }
        .palette-swatch span:nth-child(2) { right: 6px; }
        .palette-label {
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 10px;
          letter-spacing: 0.04em;
        }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
