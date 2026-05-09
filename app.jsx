// Oak Lodge Garden — app.jsx
// Main shell: routing between plan / bed / plant, palette tweaks, lightbox.

const { useState: useState_App, useEffect: useEffect_App, useMemo: useMemo_App } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "spring",
  "showMarginNotes": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useState_App({ name: "plan" }); // plan | bed | plant
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
  const openPlant = ({ zoneKey, plantIndex, plantName }) => {
    setView((prev) => ({
      name: "plant",
      zoneKey: zoneKey || prev.zoneKey,
      plantIndex,
      plantName,
    }));
  };
  const closePlant = () => {
    setView((prev) => ({ name: "bed", zoneKey: prev.zoneKey }));
  };
  const goPlanFromBed = () => {
    setView({ name: "plan" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Crumbs / chrome content depends on view
  const inBed = view.name === "bed" || view.name === "plant";
  const breadcrumb = inBed ? Z[view.zoneKey].title : null;

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
            aria-pressed={view.name === "plan"}
            onClick={() => setView({ name: "plan" })}
            style={{ minHeight: 32 }}
          >
            Garden plan
          </button>
          {inBed && (
            <>
              <span className="t-mono" style={{ opacity: 0.5, padding: "0 6px" }}>›</span>
              <span className="t-mono" style={{ color: "var(--ink)" }}>{breadcrumb}</span>
            </>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <PaletteSwitcher />
          <div className="t-mono" style={{ opacity: 0.5 }}>v.2026.05</div>
        </div>
      </header>

      <main className="paper-main">
        <div className="sheet sheet-page">
          {view.name === "plan" && (
            <GardenPlan onOpenZone={openZone} dark={dark} />
          )}
          {(view.name === "bed" || view.name === "plant") && (
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
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
