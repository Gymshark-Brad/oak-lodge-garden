// Oak Lodge Garden — PlantProfile.jsx
// Full-page, researched plant profile used by the new authored profile schema.

const { useState: useState_PP } = React;

function PlantProfile({ plant, zoneTitle, backLabel, plantKey, onBack, onOpenLightbox }) {
  if (!plant || !plant.profile) return null;

  const profile = plant.profile;
  const display = profile.display || {};
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const floweringMonths = profile.floweringMonths || [];
  const hasFloweringWindow = floweringMonths.length > 0;
  const journal = (window.OAK.PLANT_PHOTOS_BY_ID || {})[plant.id] || [];
  const latestEntry = journal[0] || null;
  const latestPhoto = latestEntry && latestEntry.photos ? latestEntry.photos[0] : null;
  const heroPhoto = latestPhoto || ((plant.photos || [])[0]
    ? { src: plant.photos[0], caption: plant.name }
    : null);
  const waterBand = (window.OAK.WATER_BANDS_BY_ID || {})[plant.id]
    || (plantKey ? (window.OAK.WATER_BANDS[plantKey] || {})[plant.name] : null);
  const waterInfo = waterBand ? window.OAK.WATER_BAND_INFO[waterBand] : null;
  const [heroSrc, setHeroSrc] = useState_PP(
    heroPhoto ? window.OAK.thumbnailFor(heroPhoto.src) : null
  );
  const [heroFailed, setHeroFailed] = useState_PP(false);

  const handleHeroError = () => {
    if (heroPhoto && heroSrc !== heroPhoto.src) setHeroSrc(heroPhoto.src);
    else setHeroFailed(true);
  };

  const openPhoto = (photo) => {
    if (photo && onOpenLightbox) onOpenLightbox(photo);
  };

  return (
    <article className="plant-profile-page page-turn" aria-labelledby="profile-title">
      <div className="pp-topline">
        <button className="inkbtn pp-back" onClick={onBack}>
          <span className="arr" aria-hidden="true">←</span>
          <span>back to {backLabel || zoneTitle}</span>
        </button>
        <div className="t-stamp">Plant portrait · researched profile</div>
      </div>

      <header className="pp-hero">
        <div className="pp-hero-photo polaroid">
          <span className="tape pp-tape-left" aria-hidden="true" />
          <span className="tape pp-tape-right" aria-hidden="true" />
          <div className="frame pp-hero-frame">
            {heroPhoto && !heroFailed ? (
              <button
                className="pp-photo-button"
                onClick={() => openPhoto(heroPhoto)}
                aria-label={`Enlarge ${heroPhoto.caption || plant.name}`}
              >
                <img
                  src={heroSrc}
                  alt={heroPhoto.caption || plant.name}
                  decoding="async"
                  fetchPriority="high"
                  onError={handleHeroError}
                />
              </button>
            ) : (
              <div className="imgfallback pp-hero-fallback">
                <span>{plant.name}</span>
              </div>
            )}
          </div>
          <div className="caption">{heroPhoto ? heroPhoto.caption : "Oak Lodge specimen"}</div>
        </div>

        <div className="pp-identity">
          <div className="t-stamp pp-kicker">{zoneTitle} · specimen profile</div>
          <h1 id="profile-title" className="t-display pp-title">{plant.name}</h1>
          <div className="t-latin pp-latin">{plant.latin}</div>
          <div className="pp-badges" aria-label="Plant classifications">
            <span className="pp-type-badge">{profile.type}</span>
            {profile.badges.map((badge) => <span key={badge} className="pp-badge">{badge}</span>)}
            {profile.petSafety && (
              <span className={`pp-safety-badge pp-safety-${profile.petSafety.tone || "note"}`}>
                {profile.petSafety.label}
              </span>
            )}
          </div>
          <p className="pp-lede">{profile.description}</p>
          <div className="pp-location-note">
            <span className="t-stamp">At Oak Lodge</span>
            <strong>{profile.oakLodge.location}</strong>
            <span>{profile.oakLodge.added}</span>
          </div>
        </div>
      </header>

      <section className="pp-section pp-glance" aria-labelledby="glance-heading">
        <SectionHeading eyebrow="The useful bit first" title="At a glance" id="glance-heading" />

        <div className="pp-flowering">
          <div>
            <div className="pp-subheading">{display.cycleTitle || "Flowering period"}</div>
            <div className="pp-small-note">
              {display.cycleNote || "Typical UK window; weather and trimming affect the length of the display."}
            </div>
          </div>
          {hasFloweringWindow ? (
            <div className="pp-months" aria-label={`Flowers ${floweringMonths.join(" to ")}`}>
              {months.map((month) => {
                const active = floweringMonths.includes(month);
                return <span key={month} className={active ? "is-flowering" : ""}>{month}</span>;
              })}
            </div>
          ) : (
            <div className="pp-cycle-empty" role="note" aria-label={display.cycleAria || "No flowering period recorded"}>
              <span className="t-hand">{display.cycleEmpty || "no regular flowering period recorded"}</span>
              <span className="t-mono">Jan — Dec</span>
            </div>
          )}
        </div>

        <div className="pp-facts">
          {profile.facts.map((fact) => (
            <div className="pp-fact" key={fact.label}>
              <div className="t-stamp">{fact.label}</div>
              <div className="pp-fact-value">{fact.value}</div>
              <div className="pp-fact-detail">{fact.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pp-section" aria-labelledby="care-heading">
        <SectionHeading eyebrow="Practical guide" title="Keeping it happy" id="care-heading" />
        <div className="pp-care-intro">
          <p>The aim is resilient, balanced growth in the conditions this plant actually prefers.</p>
          {waterInfo && (
            <div className="pp-water-stamp">
              <span className="t-stamp">{profile.environment === "indoor" ? "Houseplant moisture-check band" : "Oak Lodge watering band"} {waterBand}</span>
              <strong>{waterInfo.chip}</strong>
              <span>{display.waterBandNote || waterInfo.freq}</span>
            </div>
          )}
        </div>
        <div className="pp-care-grid">
          {profile.careGuide.map((item, index) => (
            <article className="pp-care-item" key={item.title}>
              <span className="pp-item-no">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="pp-care-summary">{item.summary}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pp-water-cues">
          <div className="pp-water-cue pp-too-dry">
            <div className="t-stamp">Too dry</div>
            <p>{profile.waterSigns.under}</p>
          </div>
          <div className="pp-water-cue pp-too-wet">
            <div className="t-stamp">Too wet</div>
            <p>{profile.waterSigns.over}</p>
          </div>
        </div>
      </section>

      <section className="pp-section" aria-labelledby="season-heading">
        <SectionHeading eyebrow="A year with this plant" title="Through the year" id="season-heading" />
        <div className="pp-seasons">
          {profile.seasons.map((item) => (
            <article className={`pp-season pp-${item.season.toLowerCase()}`} key={item.season}>
              <div className="pp-season-name t-hand">{item.season}</div>
              <p>{item.action}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-section" aria-labelledby="problems-heading">
        <SectionHeading eyebrow="Diagnose before acting" title="What to watch for" id="problems-heading" />
        <div className="pp-problems">
          {profile.problems.map((problem) => (
            <article className="pp-problem" key={problem.name}>
              <h3>{problem.name}</h3>
              <dl>
                <div>
                  <dt>What you’ll see</dt>
                  <dd>{problem.sign}</dd>
                </div>
                <div>
                  <dt>What to do</dt>
                  <dd>{problem.response}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-section pp-about" aria-labelledby="about-heading">
        <SectionHeading eyebrow="Reference notes" title="About the plant" id="about-heading" />
        <div className="pp-about-grid">
          <div className="pp-botanical-copy">
            <p>{profile.about || profile.description}</p>
            {profile.provenanceNote && <p className="pp-provenance-note">{profile.provenanceNote}</p>}
            {profile.caution && (
              <div className="pp-caution" role="note" aria-label="Safety note">
                <div className="t-stamp">Safety note</div>
                <p>{profile.caution}</p>
              </div>
            )}
            {profile.petSafety && (
              <div className={`pp-pet-safety-note pp-safety-${profile.petSafety.tone || "note"}`} role="note" aria-label="Pet safety note">
                <div className="t-stamp">{profile.petSafety.label}</div>
                <p>{profile.petSafety.detail}</p>
              </div>
            )}
          </div>
          <dl className="pp-botanical-list">
            {profile.botanical.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pp-section pp-oak" aria-labelledby="oak-heading">
        <SectionHeading eyebrow="The individual specimen" title="At Oak Lodge" id="oak-heading" />
        <div className="pp-oak-grid">
          <dl className="pp-oak-record">
            <div><dt>Position</dt><dd>{profile.oakLodge.location}</dd></div>
            <div><dt>Added</dt><dd>{profile.oakLodge.added}</dd></div>
            <div><dt>{display.roleLabel || "Role in the bed"}</dt><dd>{profile.oakLodge.role}</dd></div>
            <div><dt>First observation</dt><dd>{profile.oakLodge.observation}</dd></div>
          </dl>
          <aside className="pp-field-note">
            <div className="t-stamp">{display.fieldNoteLabel || "Field note · July ’26"}</div>
            <p className="t-hand">{profile.oakLodge.status}</p>
          </aside>
        </div>

        {journal.length > 0 && (
          <div className="pp-journal">
            <div className="pp-subheading">Photo journal</div>
            {journal.map((entry) => (
              <div className="pp-journal-entry" key={entry.month}>
                <div className="t-mono pp-journal-date">{entry.label}</div>
                <div className="pp-journal-photos">
                  {entry.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      className="pp-journal-photo polaroid"
                      onClick={() => openPhoto(photo)}
                      aria-label={`Enlarge ${photo.caption}`}
                      style={{ transform: `rotate(${index % 2 === 0 ? "-1" : "1.2"}deg)` }}
                    >
                      <span className="tape" aria-hidden="true" />
                      <span className="frame">
                        <img src={window.OAK.thumbnailFor(photo.src)} alt={photo.caption} loading="lazy" decoding="async" />
                      </span>
                      <span className="caption">{photo.caption}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="pp-section pp-sources" aria-labelledby="sources-heading">
        <SectionHeading eyebrow="Research record" title="Sources & confidence" id="sources-heading" />
        <p className="pp-source-intro">
          {display.sourceIntro || "Cultivar facts are sourced; position, photographs and performance notes are Oak Lodge observations. Where the plant has not yet been through a full season here, the profile says so."}
        </p>
        <ol>
          {profile.sources.map((source) => (
            <li key={source.title}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
              ) : <strong>{source.title}</strong>}
              <span>{source.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <footer className="pp-footer">
        <button className="inkbtn" onClick={onBack}>
          <span className="arr" aria-hidden="true">←</span>
          <span>back to {backLabel || zoneTitle}</span>
        </button>
        <div className="t-mono">researched · july 2026 &nbsp;·&nbsp; observed at oak lodge</div>
      </footer>

      <style>{`
        .plant-profile-page { color: var(--ink); }
        .pp-topline {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding-bottom: 14px; border-bottom: 1px dashed var(--hairline);
        }
        .pp-back { padding-left: 0; }
        .pp-hero {
          display: grid; grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
          gap: clamp(28px, 5vw, 64px); align-items: center;
          padding: clamp(30px, 5vw, 62px) clamp(4px, 2vw, 20px) 46px;
        }
        .pp-hero-photo { width: 100%; max-width: 420px; justify-self: center; transform: rotate(-0.7deg); }
        .pp-hero-frame { aspect-ratio: 4 / 5; }
        .pp-photo-button {
          width: 100%; height: 100%; padding: 0; border: 0; background: transparent;
          cursor: zoom-in; display: block;
        }
        .pp-photo-button img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pp-hero-fallback { width: 100%; height: 100%; }
        .pp-tape-left { top: -10px; left: 13%; transform: rotate(-5deg); }
        .pp-tape-right { top: -8px; right: 11%; transform: rotate(7deg); }
        .pp-kicker { color: var(--accent); }
        .pp-title {
          font-size: clamp(44px, 6vw, 76px); line-height: 0.98; margin: 10px 0 8px;
          max-width: 11ch; text-wrap: balance;
        }
        .pp-latin { font-size: clamp(22px, 2.4vw, 29px); line-height: 1.25; }
        .pp-badges { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0; }
        .pp-badge, .pp-type-badge, .pp-safety-badge {
          display: inline-flex; align-items: center; min-height: 30px; padding: 5px 10px;
          border: 1px solid var(--hairline); font-family: var(--type); font-size: 10px;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: color-mix(in oklab, var(--paper) 90%, var(--green) 10%);
        }
        .pp-type-badge { color: var(--green); border-color: color-mix(in oklab, var(--green) 45%, var(--paper)); }
        .pp-safety-badge.pp-safety-safe {
          color: var(--green); border-color: color-mix(in oklab, var(--green) 55%, var(--paper));
          background: color-mix(in oklab, var(--paper) 82%, var(--green) 18%);
        }
        .pp-lede { font-size: clamp(19px, 2vw, 22px); line-height: 1.6; max-width: 64ch; margin: 0; }
        .pp-location-note {
          display: grid; grid-template-columns: auto 1fr; gap: 3px 12px; align-items: baseline;
          max-width: 560px; margin-top: 24px; padding: 12px 0 0 18px;
          border-left: 3px solid var(--accent);
        }
        .pp-location-note .t-stamp { grid-column: 1 / -1; }
        .pp-location-note strong { font-family: var(--hand); font-size: 22px; font-weight: 600; }
        .pp-location-note > span:last-child { color: var(--pencil); }
        .pp-section { padding: 42px clamp(4px, 2vw, 20px); border-top: 1px solid var(--hairline); }
        .pp-section-heading { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: end; margin-bottom: 24px; }
        .pp-section-heading h2 { font-size: clamp(34px, 4vw, 48px); margin: 4px 0 0; }
        .pp-section-mark { font-family: var(--hand); font-size: 20px; color: var(--accent); transform: rotate(-2deg); }
        .pp-subheading { font-family: var(--type); font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--ink); }
        .pp-small-note { color: var(--pencil); font-style: italic; font-size: 15px; margin-top: 4px; }
        .pp-flowering {
          display: grid; grid-template-columns: minmax(210px, 0.6fr) minmax(0, 1.4fr);
          gap: 24px; align-items: center; padding: 18px;
          background: color-mix(in oklab, var(--paper) 89%, var(--paper-deep) 11%);
          border: 1px solid var(--hairline);
        }
        .pp-months { display: grid; grid-template-columns: repeat(12, 1fr); border: 1px solid var(--hairline); }
        .pp-months span {
          display: grid; place-items: center; min-width: 0; min-height: 46px;
          font-family: var(--type); font-size: 10px; color: var(--pencil);
          border-right: 1px solid var(--hairline);
        }
        .pp-months span:last-child { border-right: 0; }
        .pp-months .is-flowering {
          color: var(--paper); background: var(--green); position: relative;
        }
        .pp-months .is-flowering::after {
          content: ""; position: absolute; left: 20%; right: 20%; bottom: 6px; height: 2px;
          background: color-mix(in oklab, var(--paper) 76%, transparent);
        }
        .pp-cycle-empty {
          min-height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 12px 16px; border: 1px dashed color-mix(in oklab, var(--green) 42%, var(--hairline));
          background: color-mix(in oklab, var(--paper) 92%, var(--green) 8%);
        }
        .pp-cycle-empty .t-hand { font-size: 23px; color: var(--green); }
        .pp-cycle-empty .t-mono { color: var(--pencil); white-space: nowrap; }
        .pp-facts {
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 18px; border: 1px solid var(--hairline);
        }
        .pp-fact { padding: 20px; min-height: 142px; border-right: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); }
        .pp-fact:nth-child(3n) { border-right: 0; }
        .pp-fact:nth-last-child(-n + 3) { border-bottom: 0; }
        .pp-fact-value { font-family: var(--display); font-size: 24px; line-height: 1.15; margin: 12px 0 7px; }
        .pp-fact-detail { color: var(--pencil); font-size: 15px; line-height: 1.4; }
        .pp-care-intro { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
        .pp-care-intro > p { font-size: 20px; margin: 0; }
        .pp-water-stamp {
          flex: 0 0 auto; display: grid; gap: 2px; min-width: 210px; padding: 12px 16px;
          border: 1px dashed var(--accent); transform: rotate(0.6deg);
          background: color-mix(in oklab, var(--paper) 94%, var(--accent) 6%);
        }
        .pp-water-stamp strong { font-family: var(--hand); font-size: 20px; color: var(--accent); }
        .pp-water-stamp > span:last-child { font-size: 14px; color: var(--pencil); }
        .pp-care-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--hairline); border: 1px solid var(--hairline); }
        .pp-care-item {
          display: grid; grid-template-columns: 38px 1fr; gap: 14px; padding: 24px;
          background: color-mix(in oklab, var(--paper) 97%, var(--green) 3%);
        }
        .pp-item-no { font-family: var(--type); color: var(--accent); font-size: 12px; padding-top: 4px; }
        .pp-care-item h3, .pp-problem h3 { font-family: var(--display); font-size: 22px; font-weight: 400; margin: 0 0 8px; }
        .pp-care-item p { margin: 7px 0 0; line-height: 1.5; }
        .pp-care-summary { font-weight: 600; color: var(--ink); }
        .pp-water-cues { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
        .pp-water-cue { padding: 18px 20px; border-left: 4px solid var(--accent); background: color-mix(in oklab, var(--paper) 93%, var(--paper-deep) 7%); }
        .pp-too-wet { border-left-color: var(--green); }
        .pp-water-cue p { margin: 7px 0 0; }
        .pp-seasons { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border: 1px solid var(--hairline); }
        .pp-season { padding: 22px; min-height: 220px; border-right: 1px solid var(--hairline); position: relative; overflow: hidden; }
        .pp-season:last-child { border-right: 0; }
        .pp-season::before {
          content: ""; position: absolute; width: 94px; height: 94px; border-radius: 50%;
          right: -34px; top: -38px; background: color-mix(in oklab, var(--green) 13%, transparent);
        }
        .pp-summer::before { background: color-mix(in oklab, var(--accent) 18%, transparent); }
        .pp-autumn::before { background: color-mix(in oklab, var(--stamp) 16%, transparent); }
        .pp-winter::before { background: color-mix(in oklab, var(--pencil) 13%, transparent); }
        .pp-season-name { font-size: 30px; color: var(--accent); }
        .pp-season p { margin: 16px 0 0; font-size: 16px; line-height: 1.5; }
        .pp-problems { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .pp-problem { padding: 22px; border: 1px solid var(--hairline); background: color-mix(in oklab, var(--paper) 96%, var(--stamp) 4%); }
        .pp-problem dl, .pp-problem dd { margin: 0; }
        .pp-problem dl > div { margin-top: 14px; }
        .pp-problem dt, .pp-botanical-list dt, .pp-oak-record dt {
          font-family: var(--type); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--pencil);
        }
        .pp-problem dd { margin-top: 4px; line-height: 1.45; }
        .pp-about-grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); gap: clamp(28px, 5vw, 62px); }
        .pp-botanical-copy { font-size: 19px; line-height: 1.6; }
        .pp-botanical-copy p { margin-top: 0; }
        .pp-provenance-note { padding: 18px; border: 1px dashed var(--hairline); font-size: 16px; color: var(--pencil); }
        .pp-caution { margin-top: 16px; padding: 16px 18px; border-left: 4px solid var(--stamp); background: color-mix(in oklab, var(--paper) 92%, var(--stamp) 8%); }
        .pp-caution .t-stamp { color: var(--stamp); }
        .pp-caution p { margin: 7px 0 0; font-size: 16px; }
        .pp-pet-safety-note { margin-top: 16px; padding: 16px 18px; border-left: 4px solid var(--green); }
        .pp-pet-safety-note.pp-safety-safe { background: color-mix(in oklab, var(--paper) 89%, var(--green) 11%); }
        .pp-pet-safety-note .t-stamp { color: var(--green); }
        .pp-pet-safety-note p { margin: 7px 0 0; font-size: 16px; }
        .pp-botanical-list { margin: 0; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--hairline); }
        .pp-botanical-list > div { padding: 14px 12px; border-bottom: 1px solid var(--hairline); }
        .pp-botanical-list dd { margin: 4px 0 0; line-height: 1.35; }
        .pp-oak-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr); gap: 28px; align-items: start; }
        .pp-oak-record { margin: 0; display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--hairline); }
        .pp-oak-record > div { padding: 18px; border-right: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); }
        .pp-oak-record > div:nth-child(even) { border-right: 0; }
        .pp-oak-record > div:nth-last-child(-n + 2) { border-bottom: 0; }
        .pp-oak-record dd { margin: 5px 0 0; font-size: 18px; }
        .pp-field-note { padding: 20px; border: 1px dashed var(--accent); background: color-mix(in oklab, var(--paper) 91%, var(--tape) 9%); transform: rotate(0.7deg); }
        .pp-field-note p { font-size: 25px; line-height: 1.25; margin: 14px 0 0; }
        .pp-journal { margin-top: 34px; }
        .pp-journal-entry { margin-top: 16px; }
        .pp-journal-date { margin-bottom: 18px; }
        .pp-journal-photos { display: grid; grid-template-columns: repeat(2, minmax(0, 300px)); gap: 28px; }
        .pp-journal-photo { width: 100%; border: 0; color: var(--ink); cursor: zoom-in; }
        .pp-journal-photo .tape { top: -9px; left: calc(50% - 35px); transform: rotate(-3deg); }
        .pp-journal-photo .frame { display: block; aspect-ratio: 4 / 3; }
        .pp-journal-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pp-journal-photo .caption { display: block; min-height: 38px; }
        .pp-source-intro { max-width: 70ch; font-size: 18px; }
        .pp-sources ol { margin: 22px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--hairline); }
        .pp-sources li { display: grid; grid-template-columns: minmax(220px, 0.65fr) 1fr; gap: 20px; padding: 14px 0; border-bottom: 1px solid var(--hairline); }
        .pp-sources a, .pp-sources strong { color: var(--accent); font-weight: 600; }
        .pp-sources li > span { color: var(--pencil); }
        .pp-footer {
          display: flex; align-items: center; justify-content: space-between; gap: 18px;
          padding: 26px 4px 4px; border-top: 1px dashed var(--hairline);
        }
        @media (max-width: 900px) {
          .pp-hero { grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr); gap: 28px; }
          .pp-title { font-size: clamp(40px, 6vw, 58px); }
          .pp-flowering { grid-template-columns: 1fr; }
          .pp-months span { min-height: 42px; }
          .pp-seasons { grid-template-columns: 1fr 1fr; }
          .pp-season { min-height: 180px; border-bottom: 1px solid var(--hairline); }
          .pp-season:nth-child(2) { border-right: 0; }
          .pp-season:nth-last-child(-n + 2) { border-bottom: 0; }
        }
        @media (max-width: 700px) {
          .pp-topline { align-items: flex-start; }
          .pp-topline > .t-stamp { text-align: right; }
          .pp-hero { grid-template-columns: 1fr; padding-top: 36px; }
          .pp-hero-photo { max-width: 480px; }
          .pp-identity { max-width: 620px; }
          .pp-title { max-width: 12ch; }
          .pp-facts { grid-template-columns: 1fr 1fr; }
          .pp-fact:nth-child(3n) { border-right: 1px solid var(--hairline); }
          .pp-fact:nth-child(even) { border-right: 0; }
          .pp-fact:nth-last-child(-n + 3) { border-bottom: 1px solid var(--hairline); }
          .pp-fact:nth-last-child(-n + 2) { border-bottom: 0; }
          .pp-care-intro { align-items: flex-start; flex-direction: column; }
          .pp-care-grid, .pp-water-cues, .pp-problems, .pp-about-grid, .pp-oak-grid { grid-template-columns: 1fr; }
          .pp-journal-photos { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .pp-topline { display: block; }
          .pp-topline > .t-stamp { margin-top: 6px; text-align: left; }
          .pp-section { padding-top: 34px; padding-bottom: 34px; }
          .pp-section-heading { grid-template-columns: 1fr; gap: 4px; }
          .pp-section-mark { display: none; }
          .pp-location-note { grid-template-columns: 1fr; }
          .pp-months { grid-template-columns: repeat(6, 1fr); }
          .pp-months span:nth-child(6) { border-right: 0; }
          .pp-months span:nth-child(-n + 6) { border-bottom: 1px solid var(--hairline); }
          .pp-facts, .pp-seasons, .pp-oak-record, .pp-botanical-list { grid-template-columns: 1fr; }
          .pp-fact, .pp-fact:nth-child(3n), .pp-fact:nth-child(even) { min-height: 0; border-right: 0; border-bottom: 1px solid var(--hairline); }
          .pp-fact:nth-last-child(-n + 2) { border-bottom: 1px solid var(--hairline); }
          .pp-fact:last-child { border-bottom: 0; }
          .pp-season, .pp-season:nth-child(2) { min-height: 0; border-right: 0; border-bottom: 1px solid var(--hairline); }
          .pp-season:nth-last-child(-n + 2) { border-bottom: 1px solid var(--hairline); }
          .pp-season:last-child { border-bottom: 0; }
          .pp-botanical-list > div { padding-left: 0; padding-right: 0; }
          .pp-oak-record > div, .pp-oak-record > div:nth-child(even) { border-right: 0; border-bottom: 1px solid var(--hairline); }
          .pp-oak-record > div:nth-last-child(-n + 2) { border-bottom: 1px solid var(--hairline); }
          .pp-oak-record > div:last-child { border-bottom: 0; }
          .pp-journal-photos { grid-template-columns: 1fr; }
          .pp-sources li { grid-template-columns: 1fr; gap: 4px; }
          .pp-footer { align-items: flex-start; flex-direction: column; }
        }
      `}</style>
    </article>
  );
}

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="pp-section-heading">
      <div>
        <div className="t-stamp" style={{ color: "var(--accent)" }}>{eyebrow}</div>
        <h2 id={id} className="t-display">{title}</h2>
      </div>
      <div className="pp-section-mark" aria-hidden="true">Oak Lodge · field notes</div>
    </div>
  );
}
