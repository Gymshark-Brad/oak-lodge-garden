// Oak Lodge Garden — BedDetail.jsx
// One bed: description, hand-drawn plant map, plant list, photo gallery.

const { useState: useState_BD, useMemo: useMemo_BD, useEffect: useEffect_BD } = React;

function BedDetail({ zoneKey, onBack, onOpenPlant, onOpenLightbox, dark }) {
  const Z = window.OAK.ZONES[zoneKey];
  const plants = Z.plantKey ? window.OAK.PLANTS[Z.plantKey] : [];
  // Latest month that actually has photos for THIS zone (front-garden zones
  // only exist in jul-2026; back-garden zones resolve to earlier months).
  const _monthKeys = Object.keys(window.OAK.PHOTOS_BY_MONTH);
  let _latestMonth = _monthKeys[_monthKeys.length - 1];
  for (let i = _monthKeys.length - 1; i >= 0; i--) {
    const md = window.OAK.PHOTOS_BY_MONTH[_monthKeys[i]];
    const currentPhotos = md && md[zoneKey];
    const currentArchive = md && md[zoneKey + "Archive"];
    if ((currentPhotos && currentPhotos.length > 0) || (currentArchive && currentArchive.length > 0)) {
      _latestMonth = _monthKeys[i];
      break;
    }
  }
  const _latestMonthData = window.OAK.PHOTOS_BY_MONTH[_latestMonth] || {};
  const photos = (_latestMonthData[zoneKey] || []);
  // Archive photos — stored under `{zoneKey}Archive` in the latest month data
  const archivePhotos = (_latestMonthData[zoneKey + "Archive"] || []);
  const archiveLabels = {
    stone: {
      period: "Before the late-July 2026 replant",
      note: "The Stone Bed before the rotten-crowned lavender was removed and the new alpine, succulent, grass and Hydrangea planting went in — kept here for the record.",
    },
    frontBed2: {
      period: "Before the late-July 2026 change",
      note: "Begonia Cocktail 'Gin' before it was removed and replaced by Polemonium 'Golden Feathers' — kept here for the record.",
    },
    littlepot2: {
      period: "Before the 2 August 2026 change",
      note: "Little Pot 2 before its Pelargonium and Petunia were removed and the established Coreopsis moved into the pot — kept here for the record.",
    },
    wallpot2: {
      period: "Before the 2 August 2026 change",
      note: "The pot with its former Coreopsis planting, before the Coreopsis moved into Little Pot 2 and Echinacea Mooodz Glory took its place — kept here for the record.",
    },
    frontBed3: {
      period: "Before the July 2026 update",
      note: "The wall bed before the fern was removed and the dogwood, Red Hot Poker and Leucothoe were planted — kept here for the record.",
    },
    frontBed4: {
      period: "Before July 2026",
      note: "The corner bed before it was cleared and replanted with the two climbing roses — kept here for the record.",
    },
  };
  const archiveLabel = archiveLabels[zoneKey] || {
    period: "Pre-June 2026",
    note: "The bed before the June 2026 replanting — kept here for the record.",
  };
  const archivePeriod = archiveLabel.period;
  const archiveNote = archiveLabel.note;
  const map = window.OAK.BED_PLANT_MAPS[zoneKey] || [];
  const [hoverPlant, setHoverPlant] = useState_BD(null);

  // Warm the small card images as soon as a bed opens. This keeps plant cards
  // instant on touch devices, where there is no hover event to preload from.
  useEffect_BD(() => {
    plants.forEach((plant) => {
      const journal = (window.OAK.PLANT_PHOTOS_BY_ID || {})[plant.id] || [];
      const journalPhoto = journal[0] && journal[0].photos && journal[0].photos[0];
      const src = journalPhoto ? journalPhoto.src : (plant.photos || [])[0];
      if (!src) return;
      const image = new Image();
      image.src = window.OAK.thumbnailFor(src);
    });
  }, [zoneKey]);

  // Each plant in the list joined with its map circle by name (some plants appear once in map)
  const plantWithMap = (name) => map.find((m) => m.name === name) || null;
  const plantGroups = plants.reduce((groups, plant, index) => {
    const label = plant.group || "";
    let group = groups.find((entry) => entry.label === label);
    if (!group) {
      group = { label, items: [] };
      groups.push(group);
    }
    group.items.push({ plant, index });
    return groups;
  }, []);

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
            recorded · {(_latestMonthData.label || _latestMonth).toLowerCase()}<br />
            site · oak lodge, bromsgrove<br />
            recorder · b. h.
          </div>
        </div>
      </div>

      <div className="rule" style={{ margin: "20px 0 24px" }} />

      {/* Map + plant list, two columns. Hardscape folios go straight to photos. */}
      {plants.length > 0 && <div className={"bed-grid" + (zoneKey.startsWith("frontBed") ? " bed-grid--front-map" : "")}>
        <div className="bed-map-col">
          <div className="t-stamp" style={{ marginBottom: 10 }}>
            {window.OAK.FRONT_IRRIGATION_MAPS?.[zoneKey] ? "Plant & watering map · top-down" : "Plant map · top-down"}
          </div>
          <div className="bed-map-frame">
            <PlantMap
              map={map}
              zone={Z}
              hoverPlant={hoverPlant}
              setHoverPlant={setHoverPlant}
              onOpenPlant={onOpenPlant}
            />
            {window.OAK.FRONT_IRRIGATION_MAPS?.[zoneKey] && <IrrigationLegend />}
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
            {plantGroups.map((group) => (
              <React.Fragment key={group.label || "plants"}>
                {group.label && (
                  <li className="plant-group-label">
                    <span className="t-stamp">{group.label}</span>
                  </li>
                )}
                {group.items.map(({ plant: p, index: i }) => {
                  const m = plantWithMap(p.name);
                  const isHover = hoverPlant === p.name;
                  return (
                    <li key={p.id}>
                      <button
                        className={"plant-row" + (isHover ? " is-hover" : "")}
                        onMouseEnter={() => setHoverPlant(p.name)}
                        onMouseLeave={() => setHoverPlant(null)}
                        onFocus={() => setHoverPlant(p.name)}
                        onBlur={() => setHoverPlant(null)}
                        onClick={() => onOpenPlant({ zoneKey, plantId: p.id })}
                      >
                        <div className="plant-name-block">
                          <div className="t-display plant-name" style={{ fontSize: 26, lineHeight: 1.1 }}>
                            <span className="plant-title-no">№ {String(i + 1).padStart(2, "0")} · </span>{p.name}
                          </div>
                          <div className="t-latin" style={{ fontSize: 17 }}>
                            {p.latin}
                          </div>
                        </div>
                        <div className="plant-pos t-mono">{p.position}</div>
                        <div className="plant-arrow">→</div>
                      </button>
                    </li>
                  );
                })}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>}

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

      {/* Archive / before photos — shown when a bed has been replanted */}
      {archivePhotos.length > 0 && (
        <div style={{ marginTop: 48 }}>
          <div className="row" style={{ alignItems: "baseline", gap: 14 }}>
            <div className="t-display" style={{ fontSize: 28 }}>As it was</div>
            <div className="t-stamp">{archivePeriod} · {archivePhotos.length} {archivePhotos.length === 1 ? "exposure" : "exposures"}</div>
          </div>
          <p className="t-hand" style={{ fontSize: 18, color: "var(--pencil)", margin: "6px 0 16px" }}>
            {archiveNote}
          </p>
          <div className="rule" style={{ margin: "0 0 20px" }} />
          <div className="photo-scatter">
            {archivePhotos.map((ph, i) => {
              const tilt = ((i % 5) - 2) * 1.2;
              return (
                <div key={ph.src} className="polaroid polaroid--archive" style={{ transform: `rotate(${tilt}deg)` }}>
                  <span className="tape" style={{ top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)" }} />
                  <div className="frame" style={{ width: 200, height: 270 }}>
                    <PhotoOrFallback src={ph.src} caption={ph.caption} onClick={() => onOpenLightbox(ph)} />
                  </div>
                  <div className="caption">{ph.caption}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
        .bed-grid--front-map {
          grid-template-columns: minmax(430px, 1.28fr) minmax(300px, 0.72fr);
          gap: 42px;
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
        .plant-group-label {
          margin: 22px 0 4px;
          padding: 0 10px 6px;
          border-bottom: 1px dashed var(--hairline);
          color: var(--accent);
        }
        .plant-group-label:first-child { margin-top: 0; }
        .plant-row {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 24px;
          align-items: center;
          gap: 14px;
          padding: 14px 6px;
          border-bottom: 1px dotted var(--hairline);
          cursor: pointer;
          transition: background 140ms ease;
          background: transparent;
          color: inherit;
          border: 0;
          border-bottom: 1px dotted var(--hairline);
          text-align: left;
          font: inherit;
        }
        .plant-row:hover, .plant-row.is-hover, .plant-row:focus-visible {
          background: color-mix(in oklab, var(--ink) 5%, transparent);
        }
        .plant-row:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
        .plant-title-no { font-family: var(--type); font-size: 0.48em; color: var(--pencil); letter-spacing: 0.08em; vertical-align: 0.25em; }
        .plant-pos { max-width: 220px; text-align: right; opacity: 0.7; }
        .plant-arrow { font-family: var(--serif); font-size: 22px; color: var(--pencil); transition: transform 180ms ease; }
        .plant-row:hover .plant-arrow { color: var(--accent); transform: translateX(4px); }
        @media (max-width: 600px) {
          .plant-row { grid-template-columns: 1fr 18px; }
          .plant-pos { display: none; }
        }

        .irrigation-key {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 14px;
          align-items: center;
          margin-top: 10px;
          padding-top: 9px;
          border-top: 1px dotted var(--hairline);
        }
        .irrigation-key-item { display: inline-flex; align-items: center; gap: 6px; }
        .irrigation-key-line { display: inline-block; width: 25px; height: 0; }
        .irrigation-key-main { border-top: 4px solid var(--irrigation-main); }
        .irrigation-key-dropper { border-top: 2px solid var(--irrigation-dropper); }
        .irrigation-key-sprinkler { border-top: 2px dashed var(--irrigation-sprinkler); }
        .irrigation-key-none { border-top: 2px dotted var(--pencil); }

        .photo-scatter {
          display: flex;
          flex-wrap: wrap;
          gap: 28px 26px;
          padding: 12px 0;
        }
        .polaroid--archive {
          opacity: 0.82;
          filter: sepia(20%);
        }
        .polaroid--archive:hover {
          opacity: 1;
          filter: none;
        }
        .photo-open-btn {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: zoom-in;
        }
        .photo-open-btn:focus-visible { outline: 4px solid var(--accent); outline-offset: -4px; }
      `}</style>
    </div>
  );
}

function IrrigationLegend() {
  return (
    <div className="irrigation-key t-mono" aria-label="Watering map key">
      <span className="irrigation-key-item"><i className="irrigation-key-line irrigation-key-main" />13mm pipe</span>
      <span className="irrigation-key-item"><i className="irrigation-key-line irrigation-key-dropper" />D · dropper</span>
      <span className="irrigation-key-item"><i className="irrigation-key-line irrigation-key-sprinkler" />S · sprinkler</span>
      <span className="irrigation-key-item"><i className="irrigation-key-line irrigation-key-none" />no connection</span>
    </div>
  );
}

function irrigationLeadPath(pipe, marker, radius, sequence) {
  const edge = radius + 0.8;
  const bend = sequence % 2 === 0 ? 2.4 : -2.4;

  const fromRight = (startX) => {
    const endX = marker.x + edge;
    const span = startX - endX;
    return `M${startX} ${marker.y} C${startX - span * 0.34} ${marker.y + bend} ${endX + span * 0.34} ${marker.y + bend} ${endX} ${marker.y}`;
  };

  const fromTop = (startY) => {
    const endY = marker.y - edge;
    const span = endY - startY;
    return `M${marker.x} ${startY} C${marker.x + bend} ${startY + span * 0.34} ${marker.x + bend} ${endY - span * 0.34} ${marker.x} ${endY}`;
  };

  if (pipe.side === "right") {
    return fromRight(pipe.coordinate);
  }

  if (pipe.side === "top") {
    return fromTop(pipe.coordinate);
  }

  return marker.x >= 56 ? fromRight(pipe.rightCoordinate) : fromTop(pipe.topCoordinate);
}

// ── Plant map (hand-drawn canopy circles + optional irrigation) ──────
function PlantMap({ map, zone, hoverPlant, setHoverPlant, onOpenPlant }) {
  const W = 100, H = 100;
  const irrigation = (window.OAK.FRONT_IRRIGATION_MAPS || {})[zone.id] || null;
  const circleScale = irrigation?.circleScale || 1;
  const plantRecords = zone.plantKey ? (window.OAK.PLANTS[zone.plantKey] || []) : [];
  const plantNumbers = new Map(plantRecords.map((plant, index) => [plant.name, index + 1]));
  const radiusFor = (marker) => Math.min(marker.r * circleScale, 22);
  const applicationFor = (marker) => irrigation?.applicationsById?.[marker.plantId] || irrigation?.applications?.[marker.name] || null;
  const applicationStroke = (application) => application === "dropper" ? "var(--irrigation-dropper)" : "var(--irrigation-sprinkler)";

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
        <mask id="pm-clear-canopies" maskUnits="userSpaceOnUse" x="-6" y="-6" width="112" height="112">
          <rect x="-6" y="-6" width="112" height="112" fill="white" />
          {map.map((marker, index) => (
            <circle key={`mask-plant-${index}`} cx={marker.x} cy={marker.y} r={radiusFor(marker) + 0.8} fill="black" />
          ))}
          {(irrigation?.extras || []).map((marker, index) => (
            <circle key={`mask-extra-${index}`} cx={marker.x} cy={marker.y} r={radiusFor(marker) + 0.8} fill="black" />
          ))}
        </mask>
      </defs>

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

      <g style={{ pointerEvents: "none" }}>
        <text x={W / 2} y={-2} textAnchor="middle" fontFamily="var(--type)" fontSize="3.2" fill="var(--ink)" opacity="0.5">N ↑</text>
      </g>

      {irrigation?.pipe && (
        <g style={{ pointerEvents: "none" }}>
          <path
            d={irrigation.pipe.path}
            fill="none"
            stroke="var(--irrigation-main)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#pm-rough-soft)"
          />
          <text
            x={irrigation.pipe.labelXY[0]}
            y={irrigation.pipe.labelXY[1]}
            textAnchor="middle"
            fontFamily="var(--type)"
            fontSize="3"
            fill="var(--irrigation-main)"
          >13mm</text>
          <g mask="url(#pm-clear-canopies)">
            {map.map((marker, index) => {
              const application = applicationFor(marker);
              if (!application || application === "none") return null;
              return (
                <path
                  key={`lead-${marker.name}`}
                  d={irrigationLeadPath(irrigation.pipe, marker, radiusFor(marker), index)}
                  fill="none"
                  stroke={applicationStroke(application)}
                  strokeWidth="0.58"
                  strokeDasharray={application === "sprinkler" ? "1.6 1.15" : undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              );
            })}
            {(irrigation.extras || []).map((marker, index) => (
              <path
                key={`extra-lead-${marker.name}`}
                d={irrigationLeadPath(irrigation.pipe, marker, radiusFor(marker), map.length + index)}
                fill="none"
                stroke={applicationStroke(marker.application)}
                strokeWidth="0.58"
                strokeDasharray={marker.application === "sprinkler" ? "1.6 1.15" : undefined}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </g>
        </g>
      )}

      {(irrigation?.extras || []).map((marker) => {
        const radius = radiusFor(marker);
        return (
          <g key={marker.name} style={{ pointerEvents: "none" }}>
            <title>{marker.name}</title>
            <g filter="url(#pm-rough)">
              <circle cx={marker.x} cy={marker.y} r={radius} fill={`oklch(0.68 0.12 ${marker.hue})`} fillOpacity="0.58" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="0.55" strokeDasharray="2 1.4" />
            </g>
            <text x={marker.x} y={marker.y + 1.1} textAnchor="middle" fontFamily="var(--type)" fontSize="3.1" fill="var(--ink)">{marker.marker}</text>
            <circle cx={marker.x + radius * 0.68} cy={marker.y + radius * 0.68} r="3.1" fill="var(--paper)" stroke={applicationStroke(marker.application)} strokeWidth="0.7" />
            <text x={marker.x + radius * 0.68} y={marker.y + radius * 0.68 + 1.05} textAnchor="middle" fontFamily="var(--type)" fontSize="2.6" fill="var(--ink)">{marker.application === "dropper" ? "D" : "S"}</text>
          </g>
        );
      })}

      {map.map((m, i) => {
        const radius = radiusFor(m);
        const application = applicationFor(m);
        const plantNumber = plantNumbers.get(m.name) || i + 1;
        return (
          <g
            key={m.name + i}
            className="plant-pin"
            role="button"
            tabIndex="0"
            aria-label={`Open plant ${plantNumber}, ${m.name}`}
            onClick={() => onOpenPlant({ zoneKey: zone.id, plantId: m.plantId, plantName: m.name })}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpenPlant({ zoneKey: zone.id, plantId: m.plantId, plantName: m.name });
              }
            }}
            onMouseEnter={() => setHoverPlant(m.name)}
            onMouseLeave={() => setHoverPlant(null)}
            onFocus={() => setHoverPlant(m.name)}
            onBlur={() => setHoverPlant(null)}
          >
            <circle
              className="plant-pin-glow"
              cx={m.x}
              cy={m.y}
              r={radius + 1.8}
              fill={`oklch(0.7 0.15 ${m.hue})`}
              fillOpacity="0.18"
            />
            <g filter="url(#pm-rough)">
              <circle
                cx={m.x}
                cy={m.y}
                r={radius}
                fill={`oklch(${m.lightness || 0.66} ${m.chroma || 0.12} ${m.hue})`}
                fillOpacity={hoverPlant === m.name ? "0.88" : "0.72"}
                stroke="var(--ink)"
                strokeOpacity="0.5"
                strokeWidth="0.5"
              />
              <circle
                cx={m.x - radius * 0.3}
                cy={m.y - radius * 0.3}
                r={radius * 0.45}
                fill={`oklch(0.78 0.08 ${m.hue})`}
                fillOpacity="0.52"
              />
            </g>
            <text x={m.x} y={m.y + 1.2} textAnchor="middle" fontFamily="var(--type)" fontSize="3.4" fill="var(--ink)" style={{ pointerEvents: "none" }}>{plantNumber}</text>
            {application && (
              <g style={{ pointerEvents: "none" }}>
                <circle
                  cx={m.x + radius * 0.68}
                  cy={m.y + radius * 0.68}
                  r="3.1"
                  fill="var(--paper)"
                  stroke={application === "none" ? "var(--pencil)" : applicationStroke(application)}
                  strokeWidth="0.7"
                />
                <text
                  x={m.x + radius * 0.68}
                  y={m.y + radius * 0.68 + 1.05}
                  textAnchor="middle"
                  fontFamily="var(--type)"
                  fontSize="2.6"
                  fill="var(--ink)"
                >{application === "dropper" ? "D" : application === "sprinkler" ? "S" : "–"}</text>
              </g>
            )}
            {hoverPlant === m.name && (
              <text
                x={m.x}
                y={m.y - radius - 2}
                textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize="4.2"
                fill="var(--ink)"
              >
                {m.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ── Photo or fallback ─────────────────────────────────────────────────
function PhotoOrFallback({ src, caption, onClick, interactive = true }) {
  const [errored, setErrored] = useState_BD(false);
  const displaySrc = interactive ? window.OAK.thumbnailFor(src) : src;
  const [resolvedSrc, setResolvedSrc] = useState_BD(displaySrc);

  useEffect_BD(() => {
    setErrored(false);
    setResolvedSrc(displaySrc);
  }, [displaySrc]);

  const handleError = () => {
    if (resolvedSrc !== src) {
      setResolvedSrc(src);
    } else {
      setErrored(true);
    }
  };
  const content = errored || !src ? (
    <div className="imgfallback" style={{ width: "100%", height: "100%" }}>
      <span>{caption || "photo"}</span>
    </div>
  ) : (
    <img
      src={resolvedSrc}
      alt={caption}
      loading="lazy"
      decoding="async"
      fetchPriority={interactive ? "auto" : "high"}
      onError={handleError}
    />
  );
  if (!interactive) return content;
  if (errored || !src) {
    return (
      <button className="photo-open-btn" onClick={onClick} aria-label={`Open ${caption || "photo"}`}>
        {content}
      </button>
    );
  }
  return (
    <button className="photo-open-btn" onClick={onClick} aria-label={`Enlarge ${caption || "photo"}`}>
      {content}
    </button>
  );
}

window.BedDetail = BedDetail;
window.PhotoOrFallback = PhotoOrFallback;
