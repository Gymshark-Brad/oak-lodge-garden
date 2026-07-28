// Oak Lodge Garden — app.jsx
// Main shell: routing between plan / bed / plant, palette, lightbox.

const { useState: useState_App, useEffect: useEffect_App, useMemo: useMemo_App, useRef: useRef_App } = React;

function App() {
  const [palette, setPalette] = useState_App(window.loadPalette());
  const [view, setView] = useState_App({ name: "plan" }); // plan | houseplan | frontplan | calendar | watering | bed | plant
  const [calendarPlantReturn, setCalendarPlantReturn] = useState_App(false);
  const [wateringPlantReturn, setWateringPlantReturn] = useState_App(false);
  const [housePlantReturn, setHousePlantReturn] = useState_App(false);
  const [lightbox, setLightbox] = useState_App(null);
  const lightboxCloseRef = useRef_App(null);

  const Z = window.OAK.ZONES;
  const PLANTS = window.OAK.PLANTS;

  const dark = palette === "night";
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  useEffect_App(() => {
    window.applyPalette(palette || "spring");
  }, [palette]);

  // Plant navigation within a bed (prev/next)
  const plantList = useMemo_App(() => {
    if (view.name !== "plant" || !view.zoneKey) return [];
    const z = Z[view.zoneKey];
    return z.plantKey ? PLANTS[z.plantKey] : [];
  }, [view]);

  const currentPlant = useMemo_App(() => {
    if (view.name !== "plant") return null;
    if (view.plantId) return plantList.find((p) => p.id === view.plantId);
    if (typeof view.plantIndex === "number") return plantList[view.plantIndex];
    if (view.plantName) return plantList.find((p) => p.name === view.plantName);
    return null;
  }, [view, plantList]);

  const currentPlantIndex = useMemo_App(() => {
    if (!currentPlant) return -1;
    return plantList.findIndex((p) => p.name === currentPlant.name);
  }, [currentPlant, plantList]);

  const fullPageProfile = view.name === "plant" && currentPlant && currentPlant.profile;

  useEffect_App(() => {
    if (fullPageProfile) scrollToTop();
  }, [fullPageProfile]);

  const openZone = (zoneKey) => {
    setView({ name: "bed", zoneKey });
    scrollToTop();
  };
  const openPlant = ({ zoneKey, plantIndex, plantId, plantName, fromCalendar, fromWatering, fromHousePlan }) => {
    if (fromCalendar) setCalendarPlantReturn(true);
    if (fromWatering) setWateringPlantReturn(true);
    if (fromHousePlan) setHousePlantReturn(true);
    setView((prev) => ({
      name: "plant",
      zoneKey: zoneKey || prev.zoneKey,
      plantIndex,
      plantId,
      plantName,
    }));
  };
  const openPlantFromCalendar = (args) => openPlant({ ...args, fromCalendar: true });
  const openPlantFromWatering = (args) => openPlant({ ...args, fromWatering: true });
  const closePlant = () => {
    const returningFromFullPage = !!fullPageProfile;
    if (calendarPlantReturn) {
      setCalendarPlantReturn(false);
      setView({ name: "calendar" });
    } else if (wateringPlantReturn) {
      setWateringPlantReturn(false);
      setView({ name: "watering" });
    } else if (housePlantReturn) {
      setHousePlantReturn(false);
      setView({ name: "houseplan" });
    } else {
      setView((prev) => ({ name: "bed", zoneKey: prev.zoneKey }));
    }
    if (returningFromFullPage) scrollToTop();
  };
  const goCalendar = () => {
    setCalendarPlantReturn(false);
    setWateringPlantReturn(false);
    setHousePlantReturn(false);
    setView({ name: "calendar" });
    scrollToTop();
  };
  const goWatering = () => {
    setCalendarPlantReturn(false);
    setWateringPlantReturn(false);
    setHousePlantReturn(false);
    setView({ name: "watering" });
    scrollToTop();
  };
  // Front-garden zones live on their own plan; "back to the garden" from one
  // of these must return to the front plan, not the back-garden plan.
  const isFrontZone = (k) =>
    ["frontBed1", "frontBed2", "frontBed3", "frontBed4", "frontBed5", "frontpot",
     "frontStone", "frontBoxHedge", "frontHedge", "frontApple", "frontGateTree"].includes(k);
  const goPlanFromBed = () => {
    setView((prev) => ({ name: isFrontZone(prev.zoneKey) ? "frontplan" : "plan" }));
    scrollToTop();
  };

  // Crumbs / chrome content depends on view
  const inBed = view.name === "bed" || (view.name === "plant" && !calendarPlantReturn && !wateringPlantReturn && !housePlantReturn);
  const inFrontBed = inBed && isFrontZone(view.zoneKey);
  const breadcrumb = inBed ? Z[view.zoneKey].title : null;
  const inCalendar = view.name === "calendar" || (view.name === "plant" && calendarPlantReturn);
  const inWatering = view.name === "watering" || (view.name === "plant" && wateringPlantReturn);
  const inHouse = view.name === "houseplan" || (view.name === "plant" && housePlantReturn);

  return (
    <div className="app-root" data-palette={palette}>
      <div id="app-content">
      <header className="chrome">
        <div className="brand">
          <span className="crest">Oak Lodge</span>
          <span className="sub">— a garden &amp; houseplant notebook</span>
        </div>
        <nav className="crumb-bar" aria-label="Garden journal">
          <button
            className="ghostbtn"
            aria-pressed={view.name === "plan" || (inBed && !inFrontBed)}
            onClick={() => { setCalendarPlantReturn(false); setWateringPlantReturn(false); setHousePlantReturn(false); setView({ name: "plan" }); scrollToTop(); }}
          >
            Back Garden
          </button>
          <button
            className="ghostbtn"
            aria-pressed={inHouse}
            onClick={() => { setCalendarPlantReturn(false); setWateringPlantReturn(false); setHousePlantReturn(false); setView({ name: "houseplan" }); scrollToTop(); }}
          >
            House Plants
          </button>
          <button
            className="ghostbtn"
            aria-pressed={view.name === "frontplan" || inFrontBed}
            onClick={() => { setCalendarPlantReturn(false); setWateringPlantReturn(false); setHousePlantReturn(false); setView({ name: "frontplan" }); scrollToTop(); }}
          >
            Front Garden
          </button>
          <button
            className="ghostbtn"
            aria-pressed={inCalendar}
            onClick={goCalendar}
          >
            Seasonal calendar
          </button>
          <button
            className="ghostbtn"
            aria-pressed={inWatering}
            onClick={goWatering}
          >
            Watering guide
          </button>
          {inBed && (
            <>
              <span className="t-mono" style={{ opacity: 0.5, padding: "0 6px" }}>›</span>
              <span className="t-mono" style={{ color: "var(--ink)" }}>{breadcrumb}</span>
            </>
          )}
        </nav>
        <PaletteSwitcher active={palette} onChange={setPalette} />
        <div className="t-mono journal-count">
          {Object.keys(window.OAK.PLANT_BY_ID || {}).length} plants
        </div>
      </header>

      <main className="paper-main">
        <div className="sheet sheet-page">
          {view.name === "plan" && (
            <GardenPlan onOpenZone={openZone} dark={dark} />
          )}
          {view.name === "frontplan" && (
            <FrontGardenPlan onOpenZone={openZone} dark={dark} />
          )}
          {view.name === "houseplan" && (
            <HousePlan onOpenPlant={openPlant} dark={dark} />
          )}
          {!fullPageProfile && (view.name === "calendar" || (view.name === "plant" && calendarPlantReturn)) && (
            <SeasonalCalendar
              onOpenPlant={openPlantFromCalendar}
            />
          )}
          {!fullPageProfile && inWatering && (
            <WateringGuide
              onOpenPlant={openPlantFromWatering}
            />
          )}
          {!fullPageProfile && (view.name === "bed" || (view.name === "plant" && !calendarPlantReturn && !wateringPlantReturn && !housePlantReturn)) && (
            <BedDetail
              key={view.zoneKey}
              zoneKey={view.zoneKey}
              dark={dark}
              onBack={goPlanFromBed}
              onOpenPlant={openPlant}
              onOpenLightbox={(ph) => setLightbox(ph)}
            />
          )}
          {fullPageProfile && (
            <PlantProfile
              plant={currentPlant}
              zoneTitle={Z[view.zoneKey].title}
              backLabel={calendarPlantReturn ? "seasonal calendar" : wateringPlantReturn ? "watering guide" : housePlantReturn ? "house plants" : Z[view.zoneKey].title}
              plantKey={Z[view.zoneKey].plantKey}
              onBack={closePlant}
              onOpenLightbox={(ph) => setLightbox(ph)}
            />
          )}
        </div>
      </main>

      </div>

      {view.name === "plant" && currentPlant && !fullPageProfile && (
        <PlantCard
          plant={currentPlant}
          zoneTitle={Z[view.zoneKey].title}
          plantKey={Z[view.zoneKey].plantKey}
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
        <AccessibleModal
          className="lightbox"
          panelClassName="lightbox-panel"
          onClose={() => setLightbox(null)}
          ariaLabel={lightbox.caption || "Garden photograph"}
          initialFocusRef={lightboxCloseRef}
          backgroundId="app-content"
          zIndex={1000}
        >
          <PhotoOrFallback src={lightbox.src} caption={lightbox.caption} interactive={false} />
          <div className="t-hand" style={{
            position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center",
            color: "var(--paper)", fontSize: 24
          }}>
            {lightbox.caption}
          </div>
          <button ref={lightboxCloseRef} className="ghostbtn" style={{
            position: "absolute", top: 22, right: 22, color: "var(--paper)", borderColor: "rgba(255,255,255,0.4)"
          }} onClick={() => setLightbox(null)}>close ✕</button>
        </AccessibleModal>
      )}

      <style>{`
        .app-root { min-height: 100vh; }
        .crumb-bar {
          display: flex; align-items: center; gap: 4px;
          flex: 2; justify-content: center;
        }
        .journal-count { opacity: 0.75; white-space: nowrap; }
        @media (max-width: 900px) {
          .journal-count { display: none; }
        }
        @media (max-width: 700px) {
          .chrome { padding: 10px 14px; flex-wrap: wrap; gap: 6px; }
          .chrome .brand .sub { display: none; }
          .crumb-bar { order: 3; flex: 1 0 100%; justify-content: flex-start; overflow-x: auto; padding-bottom: 2px; }
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
