// Oak Lodge Garden — PlantCard.jsx
// Herbarium specimen-style card. Slides up from the bottom when a plant is opened.

const { useEffect: useEffect_PC, useState: useState_PC } = React;

function PlantCard({ plant, zoneTitle, onClose, onPrev, onNext }) {
  const [photoIdx, setPhotoIdx] = useState_PC(0);
  const [journalLightbox, setJournalLightbox] = useState_PC(null);

  // Reset photo index when plant changes
  useEffect_PC(() => { setPhotoIdx(0); setJournalLightbox(null); }, [plant]);

  useEffect_PC(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && onPrev) onPrev();
      else if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!plant) return null;

  // Per-plant monthly photo journal from PLANT_PHOTOS
  const plantPhotos = (window.OAK.PLANT_PHOTOS || {})[plant.name] || [];
  const latestEntry  = plantPhotos.length > 0 ? plantPhotos[0] : null;
  const latestPhoto  = latestEntry && latestEntry.photos.length > 0 ? latestEntry.photos[0] : null;

  // Main image: use latest journal photo if available, else fall back to plant.photos carousel
  const photos = plant.photos || [];
  const hasPhotos = photos.length > 0;
  const useJournalMain = !!latestPhoto;

  const fields = [
    { label: "Light",          icon: "☀", text: plant.light    },
    { label: "Water",          icon: "◌", text: plant.water    },
    { label: "Care & soil",    icon: "✦", text: plant.care     },
    { label: "Through the year", icon: "❋", text: plant.seasonal },
  ];

  const specNo = (plant.latin || plant.name)
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase()
    .slice(0, 6)
    .padEnd(6, "0");

  const prevPhoto = () => setPhotoIdx((i) => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIdx((i) => (i + 1) % photos.length);

  return (
    <div className="pc-backdrop" onClick={onClose}>
      <div className="pc-shell" onClick={(e) => e.stopPropagation()}>
        <span className="tape" style={{ top: -10, left: 60, transform: "rotate(-6deg)" }} />
        <span className="tape" style={{ top: -10, right: 60, transform: "rotate(5deg)" }} />

        <div className="pc-card">
          {/* Top label band */}
          <div className="pc-band">
            <div className="pc-band-left">
              <div className="t-stamp">Herbarium Specimen</div>
              <div className="t-mono" style={{ marginTop: 4 }}>
                Oak Lodge · {zoneTitle}
              </div>
            </div>
            <div className="pc-band-right">
              <div className="t-mono" style={{ textAlign: "right" }}>No. {specNo}</div>
              <div className="t-mono" style={{ textAlign: "right", opacity: 0.7 }}>09 · v · 2026</div>
            </div>
          </div>

          {/* Specimen body */}
          <div className="pc-body">

            {/* Left: photo or silhouette */}
            <div className="pc-silhouette">
              {useJournalMain ? (
                <div className="pc-photo-wrap">
                  <img
                    key={latestPhoto.src}
                    src={latestPhoto.src}
                    alt={latestPhoto.caption || plant.name}
                    className="pc-photo"
                    onClick={() => setJournalLightbox(latestPhoto)}
                    style={{ cursor: "zoom-in" }}
                  />
                  <div className="t-mono" style={{ textAlign: "center", opacity: 0.55, marginTop: 6, fontSize: 10 }}>
                    Oak Lodge · {latestEntry.label}
                  </div>
                </div>
              ) : hasPhotos ? (
                <div className="pc-photo-wrap">
                  <img
                    key={photos[photoIdx]}
                    src={photos[photoIdx]}
                    alt={plant.name}
                    className="pc-photo"
                  />
                  {photos.length > 1 && (
                    <div className="pc-photo-nav">
                      <button className="pc-photo-btn" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>‹</button>
                      <span className="t-mono" style={{ fontSize: 10, opacity: 0.7 }}>
                        {photoIdx + 1} / {photos.length}
                      </span>
                      <button className="pc-photo-btn" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>›</button>
                    </div>
                  )}
                  <div className="t-mono" style={{ textAlign: "center", opacity: 0.55, marginTop: 6, fontSize: 10 }}>
                    Oak Lodge · reference
                  </div>
                </div>
              ) : (
                <>
                  <PlantSilhouette plant={plant} />
                  <div className="t-mono" style={{ textAlign: "center", opacity: 0.6, marginTop: 6 }}>
                    impression · pencil &amp; wash
                  </div>
                </>
              )}
            </div>

            {/* Right: naming */}
            <div className="pc-naming">
              <div className="t-stamp">Common name</div>
              <div className="t-display" style={{ fontSize: 56, lineHeight: 1, marginTop: 4 }}>
                {plant.name}
              </div>
              <div className="t-latin" style={{ fontSize: 26, marginTop: 8 }}>
                {plant.latin}
              </div>
              <div className="rule" style={{ margin: "20px 0 18px" }} />
              <div className="t-stamp">Position in bed</div>
              <div className="t-hand" style={{ fontSize: 22, marginTop: 4 }}>
                {plant.position || "—"}
              </div>
            </div>
          </div>

          <div className="rule" style={{ margin: "8px 0 16px" }} />

          {/* Care fields */}
          <div className="pc-fields">
            {fields.map((f) => (
              <div key={f.label} className="pc-field">
                <div className="pc-field-label">
                  <span className="pc-icon" aria-hidden="true">{f.icon}</span>
                  {f.label}
                </div>
                <div className="pc-field-text">{f.text}</div>
              </div>
            ))}
          </div>

          {/* Photo Journal */}
          {plantPhotos.length > 0 && (
            <div className="pc-journal">
              <div className="rule" style={{ margin: "8px 0 14px" }} />
              <div className="t-stamp" style={{ marginBottom: 12 }}>Photo journal</div>
              {plantPhotos.map((entry) => (
                <div key={entry.month} className="pc-journal-month">
                  <div className="pc-journal-month-label">{entry.label}</div>
                  <div className="pc-journal-thumbs">
                    {entry.photos.map((ph) => (
                      <button
                        key={ph.src}
                        className="pc-thumb-btn"
                        onClick={(e) => { e.stopPropagation(); setJournalLightbox(ph); }}
                        title={ph.caption}
                      >
                        <img src={ph.src} alt={ph.caption} className="pc-thumb" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="pc-foot">
            <div className="t-mono" style={{ opacity: 0.65 }}>
              det. b. h. · '26
            </div>
            <div className="row gap-3">
              {onPrev && (
                <button className="ghostbtn" onClick={onPrev} title="Previous plant (←)">‹ prev</button>
              )}
              {onNext && (
                <button className="ghostbtn" onClick={onNext} title="Next plant (→)">next ›</button>
              )}
              <button className="ghostbtn" onClick={onClose} title="Close (esc)">close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Journal lightbox — inline overlay on the card */}
      {journalLightbox && (
        <div
          className="pc-journal-lb"
          onClick={() => setJournalLightbox(null)}
        >
          <img src={journalLightbox.src} alt={journalLightbox.caption} className="pc-journal-lb-img" />
          <div className="pc-journal-lb-cap t-hand">{journalLightbox.caption}</div>
          <button className="ghostbtn pc-journal-lb-close" onClick={() => setJournalLightbox(null)}>close ✕</button>
        </div>
      )}

      <style>{`
        .pc-backdrop {
          position: fixed; inset: 0; z-index: 800;
          background: color-mix(in oklab, var(--ink) 80%, black 12%);
          display: grid; place-items: center; padding: 24px;
          animation: fadeIn 220ms ease;
        }
        .pc-shell {
          position: relative;
          width: min(820px, 96vw);
          max-height: calc(100vh - 48px);
          overflow: auto;
          animation: slideUp 360ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) rotate(-0.4deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0); }
        }
        .pc-card {
          position: relative;
          background: color-mix(in oklab, var(--paper) 96%, white 4%);
          background-image:
            radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--paper) 75%, var(--accent) 6%) 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, color-mix(in oklab, var(--paper-deep) 60%, var(--ink) 8%) 0%, transparent 50%);
          padding: 28px clamp(18px, 4vw, 40px) 24px;
          border: 1px solid color-mix(in oklab, var(--ink) 12%, transparent);
          box-shadow:
            0 1px 0 color-mix(in oklab, var(--paper) 100%, white 5%) inset,
            0 30px 80px -20px rgba(0, 0, 0, 0.6),
            0 8px 24px -8px rgba(0, 0, 0, 0.3);
        }
        .pc-band {
          display: flex; justify-content: space-between; align-items: flex-start;
          padding-bottom: 14px;
          border-bottom: 1px dashed var(--hairline);
        }
        .pc-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 26px;
          align-items: center;
          padding: 24px 0 16px;
        }
        @media (max-width: 600px) {
          .pc-body { grid-template-columns: 1fr; }
        }
        .pc-silhouette {
          display: flex; flex-direction: column; align-items: center;
          padding: 14px;
          background: color-mix(in oklab, var(--paper) 92%, var(--paper-deep) 8%);
          border: 1px dashed var(--hairline);
        }
        .pc-photo-wrap {
          width: 100%;
          display: flex; flex-direction: column; align-items: center;
        }
        .pc-photo {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          border: 1px solid color-mix(in oklab, var(--ink) 8%, transparent);
        }
        .pc-photo-nav {
          display: flex; align-items: center; gap: 10px;
          margin-top: 8px;
        }
        .pc-photo-btn {
          background: none;
          border: 1px solid color-mix(in oklab, var(--ink) 20%, transparent);
          color: var(--ink);
          font-family: var(--serif);
          font-size: 16px;
          padding: 2px 8px;
          cursor: pointer;
          border-radius: 2px;
          opacity: 0.7;
          transition: opacity 0.15s;
        }
        .pc-photo-btn:hover { opacity: 1; }
        .pc-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 30px;
          padding: 4px 0 12px;
        }
        @media (max-width: 600px) { .pc-fields { grid-template-columns: 1fr; } }
        .pc-field { padding: 6px 0; border-bottom: 1px dotted var(--hairline); }
        .pc-field-label {
          font-family: var(--type);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 6px;
        }
        .pc-icon { color: var(--accent); font-size: 13px; }
        .pc-field-text {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.45;
          color: var(--ink);
          text-wrap: pretty;
        }
        .pc-foot {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--hairline);
          margin-top: 8px;
        }

        /* Photo journal */
        .pc-journal { margin-top: 4px; }
        .pc-journal-month { margin-bottom: 14px; }
        .pc-journal-month-label {
          font-family: var(--type);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pencil);
          margin-bottom: 6px;
        }
        .pc-journal-thumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pc-thumb-btn {
          background: none;
          border: 1px solid color-mix(in oklab, var(--ink) 12%, transparent);
          padding: 0;
          cursor: zoom-in;
          border-radius: 1px;
          overflow: hidden;
          flex-shrink: 0;
          transition: border-color 0.15s, transform 0.15s;
        }
        .pc-thumb-btn:hover {
          border-color: var(--accent);
          transform: scale(1.04);
          z-index: 1;
        }
        .pc-thumb {
          width: 72px;
          height: 72px;
          object-fit: cover;
          display: block;
        }

        /* Journal lightbox */
        .pc-journal-lb {
          position: fixed; inset: 0; z-index: 900;
          background: rgba(0, 0, 0, 0.88);
          display: grid; place-items: center;
          padding: 32px;
          animation: fadeIn 180ms ease;
        }
        .pc-journal-lb-img {
          max-width: min(700px, 90vw);
          max-height: 80vh;
          object-fit: contain;
          display: block;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .pc-journal-lb-cap {
          position: absolute;
          bottom: 32px; left: 0; right: 0;
          text-align: center;
          color: rgba(255,255,255,0.85);
          font-size: 22px;
        }
        .pc-journal-lb-close {
          position: absolute;
          top: 20px; right: 20px;
          color: rgba(255,255,255,0.8);
          border-color: rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
}

// Hand-drawn-looking SVG silhouette — fallback when no photo exists
function PlantSilhouette({ plant }) {
  const name = (plant.name + " " + plant.latin).toLowerCase();
  let kind = "shrub";
  if (/(tree|cherry|maple|apple|pear)/.test(name)) kind = "tree";
  else if (/(wisteria|clematis|honeysuckle|rose|rosa)/.test(name)) kind = "vine";
  else if (/(phormium|cordyline|yucca|cabbage tree)/.test(name)) kind = "spike";
  else if (/(hosta|fatsia|aralia)/.test(name)) kind = "leaf";
  else if (/(daisy|peony|dianthus|nemesia|forget|aubrieta|geum|avens|geranium|kerria|pink)/.test(name)) kind = "flower";
  else if (/(sempervivum|sedum|stonecrop|houseleek)/.test(name)) kind = "succulent";
  else if (/(lavender|rosemary|salvia|hebe)/.test(name)) kind = "herb";

  return (
    <svg viewBox="0 0 100 130" style={{ width: 140, height: 180, display: "block" }}>
      <defs>
        <filter id="sl-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="9" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="1.4" />
        </filter>
      </defs>
      <line x1="10" y1="120" x2="90" y2="120" stroke="var(--ink)" strokeOpacity="0.6" strokeWidth="0.7" strokeDasharray="2 1.5" />
      <g filter="url(#sl-rough)" fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {kind === "tree" && (<g>
          <path d="M 50 120 L 50 70" />
          <path d="M 50 80 C 45 78 42 73 44 68" />
          <path d="M 50 75 C 56 73 60 68 58 62" />
          <ellipse cx="50" cy="50" rx="28" ry="26" />
          <ellipse cx="38" cy="42" rx="14" ry="12" />
          <ellipse cx="62" cy="42" rx="14" ry="12" />
          <ellipse cx="50" cy="34" rx="14" ry="11" />
        </g>)}
        {kind === "shrub" && (<g>
          <path d="M 50 120 L 50 100" />
          <ellipse cx="50" cy="80" rx="32" ry="22" />
          <ellipse cx="36" cy="72" rx="14" ry="12" />
          <ellipse cx="64" cy="74" rx="14" ry="12" />
        </g>)}
        {kind === "vine" && (<g>
          <path d="M 18 120 C 18 100 28 90 28 70 C 28 50 18 38 25 22" />
          <path d="M 30 110 C 38 100 38 90 50 84" />
          <path d="M 25 90 C 35 88 48 78 50 70" />
          <path d="M 28 65 C 40 60 48 52 60 50" />
          <circle cx="60" cy="50" r="3" />
          <circle cx="50" cy="70" r="2.6" />
          <circle cx="38" cy="98" r="2.4" />
        </g>)}
        {kind === "spike" && (<g>
          <path d="M 50 120 L 50 50" />
          <path d="M 50 60 L 28 30" /><path d="M 50 60 L 35 22" />
          <path d="M 50 60 L 50 18" /><path d="M 50 60 L 65 22" />
          <path d="M 50 60 L 72 30" /><path d="M 50 60 L 80 50" />
          <path d="M 50 60 L 20 50" />
        </g>)}
        {kind === "leaf" && (<g>
          <path d="M 50 120 C 35 110 28 90 32 70 C 35 56 45 50 50 50 C 55 50 65 56 68 70 C 72 90 65 110 50 120 Z" />
          <path d="M 50 60 L 50 118" />
          <path d="M 50 80 L 36 88" /><path d="M 50 80 L 64 88" />
          <path d="M 50 95 L 38 102" /><path d="M 50 95 L 62 102" />
        </g>)}
        {kind === "flower" && (<g>
          <path d="M 50 120 L 50 70" />
          <circle cx="50" cy="55" r="6" /><circle cx="50" cy="42" r="5" />
          <circle cx="42" cy="50" r="4.5" /><circle cx="58" cy="50" r="4.5" />
          <circle cx="44" cy="62" r="4" /><circle cx="56" cy="62" r="4" />
          <path d="M 50 90 L 40 85" /><path d="M 50 100 L 60 95" />
        </g>)}
        {kind === "succulent" && (<g>
          <ellipse cx="50" cy="100" rx="24" ry="8" />
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => {
            const x = 50 + Math.cos((a*Math.PI)/180)*18;
            const y = 100 + Math.sin((a*Math.PI)/180)*8;
            return <path key={i} d={`M 50 100 L ${x.toFixed(1)} ${y.toFixed(1)}`} />;
          })}
          <circle cx="50" cy="100" r="4" />
        </g>)}
        {kind === "herb" && (<g>
          <path d="M 30 120 C 30 100 38 80 42 60" />
          <path d="M 50 120 C 50 95 50 75 50 55" />
          <path d="M 70 120 C 70 100 64 82 58 60" />
          {[40,50,60,70,80,90].map((y, i) => (<g key={i}>
            <path d={`M 42 ${y} L 38 ${y-3}`} /><path d={`M 50 ${y} L 46 ${y-3}`} />
            <path d={`M 50 ${y} L 54 ${y-3}`} /><path d={`M 58 ${y} L 62 ${y-3}`} />
          </g>))}
        </g>)}
      </g>
    </svg>
  );
}

window.PlantCard = PlantCard;
