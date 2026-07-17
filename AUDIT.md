# Oak Lodge Garden — Full Website and Repository Audit

**Audit date:** 16 July 2026  
**Target:** `main` at `df9c7ba` and the deployed GitHub Pages site  
**Scope:** Read-only audit; this report is the only repository change

## Remediation status

Updated 16 July 2026 after the audit remediation work:

- **Completed and deployed:** H-01–H-07.
- **Completed in the current accessibility/polish batch:** M-01, M-02, M-07, M-09, L-01, L-02 and L-03.
- **Completed in the current image-performance batch:** M-11. The Steps and Patio Lounge photo folios are now reachable from the plan.
- **Partially addressed:** M-03 (seasonal/watering migrations removed; the Bed 2/3 runtime split remains), M-10 (data validation added; broad staging/removal behaviour remains), M-12 (cards and galleries now use a 7.3 MiB derivative set that is 88% smaller than the referenced originals; repository originals still need cleanup) and L-09 (data integrity guard added; browser smoke testing is not yet part of deployment).
- **Still open after this batch:** M-03–M-06, M-08, M-10, M-12–M-13 and L-04–L-09 — **8 Medium and 6 Low findings**.

The original audit evidence below is retained as the baseline record.

## Executive summary

The site is visually distinctive, stable at the tested desktop and mobile widths, and unusually well documented for a personal project. Its central zone/plant/map/watering/photo relationships are mostly sound: all 29 zones resolve, all 90 plant records have watering entries, every plant-map marker resolves, and all 259 image paths referenced by the runtime exist.

The site should not yet be treated as a fully reliable care guide. The largest risks are:

1. The watering screen converts contextual horticultural decisions into fixed weekly schedules and uses the thirstiest plant to schedule whole containers.
2. The seasonal calendar contains 28 plant/zone references that no longer resolve after garden renumbering and plant moves.
3. Several plant records are materially misidentified or over-confident, most notably “Little Heath”, the Bed 5 “Yucca”, and the front “Box Hedge”.
4. Plant rows, plant-map markers and gallery images are not keyboard operable, while the plant card and lightboxes lack dialog semantics and focus management.
5. Repeated data and historical documents have diverged substantially from the runtime source.

**Overall health:** usable and visually strong, but **needs targeted remediation** before the calendar and watering guide can be considered dependable. No Critical issue was found. There are 7 High, 13 Medium and 9 Low findings.

## Scope and method

- Parsed the runtime JavaScript and checked all cross-references between 29 zones, 90 plant records, 26 plant groups, 26 plant maps, watering data, seasonal data and three photo months.
- Compared `data.js` with `data/plants.json`, `Oak_Lodge_Garden_Plant_Guide.xlsx`, documentation and handoff material.
- Exercised the live and local site in Chromium at 1440px, 768px and 390px widths.
- Exercised back garden, front garden, bed, plant card, calendar, watering, lightbox and return-navigation flows.
- Forced Spring, Summer, Autumn, Winter and Night palettes.
- Tested keyboard navigation, Escape and arrow behaviour, tab order, focus visibility, dialog behaviour and reduced-motion preference.
- Reviewed every one of the 76 unique plant names covering all 90 records. RHS and Kew were used as primary factual references; photographs were used only for identification suggestions.
- Reviewed tracked and untracked assets, duplicate files, branches and Git object-store health.

## Positive findings

- `index.html` loads data before components in a valid order and uses a single shared cache-busting date consistently.
- All 29 zone IDs are unique and every non-null `plantKey` resolves.
- All 90 plant records have matching watering-band entries; no orphan watering entries were found.
- All plant-map entries resolve to a plant in the associated zone, and no plant is omitted from its map.
- All 259 runtime image references resolve to existing files.
- The deployed `index.html` matched the audited local file and returned HTTP 200.
- No horizontal overflow was found at 1440px, 768px or 390px in the primary plans.
- All five palettes render without a runtime exception or layout overflow when set through stored state.
- Plant-card Escape and left/right plant navigation work.
- Images in bed galleries use lazy loading.
- The notebook design language is coherent across plans, beds, care cards, calendar and watering screens.

## Prioritised findings

| ID | Severity | Finding | Main evidence |
|---|---|---|---|
| H-01 | High | Fixed watering schedules are presented as instructions despite weather, soil, establishment and moisture being decisive | `watering-data.js:5-10`; `WateringGuide.jsx:37-47`, `94-105` |
| H-02 | High | 28 seasonal plant links point to the wrong zone or a plant that no longer exists | `seasonal-data.js:306-331`; `SeasonalCalendar.jsx:35-39`, `183-192` |
| H-03 | High | Three plant records are probably materially misidentified | `data.js:557-564`, `790-797`, `1306-1315` |
| H-04 | High | Callistemon hardiness and winter/pruning advice is unsafe for the recorded cultivar and location | `data.js:718-725`; `seasonal-data.js:19`, `268`, `299` |
| H-05 | High | Plant photo journals collide when the same common name occurs in multiple zones | `PlantCard.jsx:25-28`; `data.js:1647-1864` |
| H-06 | High | Plant rows, SVG plant pins and clickable gallery images are unavailable to keyboard users | `BedDetail.jsx:95-115`, `294-346`, `352-373` |
| H-07 | High | Plant card and lightboxes are not accessible dialogs; focus remains in the page and the main lightbox ignores Escape | `PlantCard.jsx:13-21`, `64-65`, `219-228`; `app.jsx:198-210` |
| M-01 | Medium | Multiple palette colours fail WCAG 2.1 AA text contrast | `paper.css:11-43` |
| M-02 | Medium | Seasonal palette control is dead/unreachable and palette definitions are repeated four times | `palette.js:5-10`, `42-55`, `128-135`; `app.jsx:213-242`; `data.js:2023-2084` |
| M-03 | Medium | Runtime data is post-mutated to split beds, making authored source differ from the data the UI uses | `data.js:1344-1360`; `seasonal-data.js:306-331`; `watering-data.js:416-433` |
| M-04 | Medium | JSON, spreadsheet and documentation copies are incomplete or stale | See data-discrepancy matrix |
| M-05 | Medium | Browser-side Babel and three CDN scripts create a blank-site failure mode and startup cost | `index.html:9-11`, `20-27` |
| M-06 | Medium | Raw HEIC files expose device/time metadata and add 43 MB of unused public-source material | `images/june-2026-updates/*.HEIC` |
| M-07 | Medium | Static dates, version and plant counts contradict current content | `app.jsx:145`; `BedDetail.jsx:61`; `PlantCard.jsx:80`; `SeasonalCalendar.jsx:56` |
| M-08 | Medium | URL/history state is absent: refresh loses the current view and browser Back can leave the site | `app.jsx:5-17`, routing state |
| M-09 | Medium | Landmark, heading, tab, form-label and sortable-table semantics are incomplete | `app.jsx:100-146`; `SeasonalCalendar.jsx:65-78`; `WateringGuide.jsx:331-337`, `394-400` |
| M-10 | Medium | Deployment stages everything and removes files without validation | `deploy.sh:17-32`, `40-45` |
| M-11 | Medium | Five hardscape photographs are stored but cannot be reached through normal navigation | `data.js` May `steps` and `lounge` photo groups; plan legends |
| M-12 | Medium | Asset footprint is large for a static journal: 108 MB of images and 24 files above 500 KB | `images/` |
| M-13 | Medium | 14 records remain generic or unidentified, so cultivar-specific care cannot be verified | Plant matrix |
| L-01 | Low | Animations continue when reduced motion is requested | `paper.css:169-176`, `186-190` |
| L-02 | Low | Navigation controls and most mobile targets are smaller than the recommended 44px touch size | `app.jsx:106-135`; responsive CSS |
| L-03 | Low | No `noscript`, description, canonical, favicon, social metadata or theme colour | `index.html:3-16` |
| L-04 | Low | Historical handoff folders and photos duplicate current assets | `front-garden-handoff/`, `front-garden-handoff-v2/` |
| L-05 | Low | Six exact duplicate image pairs remain in `images/` | Repository cleanup matrix |
| L-06 | Low | Git has a stale branch and 236.78 MiB of garbage objects | Git inspection |
| L-07 | Low | Care cards do not record plant toxicity/handling cautions | `data.js` plant schema |
| L-08 | Low | Documentation points to a missing `BACKLOG.md` | `AGENTS.md:49`, `280`; `CLAUDE.md:49`, `275` |
| L-09 | Low | There is no automated integrity or browser smoke test before deployment | Repository root and `deploy.sh` |

## Detailed high-severity findings

### H-01 — The watering guide overstates fixed schedules

`watering-data.js:5-10` assigns “daily”, “2–3x a week”, “weekly” and “fortnightly” bands. `WateringGuide.jsx:43-47` then ranks a zone using its maximum band, and `WateringGuide.jsx:94-105` collapses a container to its thirstiest resident.

This can encourage unnecessary watering of established border plants and overwatering of drought-tolerant plants sharing containers. The RHS advises checking soil/compost moisture, watering borders selectively in drought, and adapting to container, compost, position and weather rather than following a calendar alone.

**Recommendation:** present bands as “check priority”, not a required schedule. Require a moisture check before watering; separate newly planted from established plants; distinguish containers from beds; show rain/temperature override guidance; do not assign a whole mixed container the maximum resident frequency without a warning.

Sources: [RHS watering guidance](https://www.rhs.org.uk/garden-jobs/watering), [RHS container watering](https://www.rhs.org.uk/container-gardening/how-to-water-containers).

### H-02 — 28 seasonal references are broken

The migration block at `seasonal-data.js:306-331` rewrites old bed numbers after authoring. A task has one `bed`, so mixed tasks such as Apple Tree + Pear Tree or Candy House Mix + Coreopsis cannot be corrected per plant. `SeasonalCalendar.jsx:183-192` marks a plant clickable when the bed exists, not when that plant exists in it. Clicking a broken reference silently does nothing.

| Month | Broken references |
|---|---|
| February | Pear Tree → Bed 4 |
| March | Aubrieta → Stone Bed; English Daisy → Bed 1; New Zealand Flax → Bed 5; New Zealand Flax (dark) → Bed 5 |
| April | Aubrieta → Stone Bed; English Daisy → Bed 1 |
| May | Clematis montana → Patio (runtime name is `Clematis`); Aubrieta → Stone Bed; Geranium → Big Pot 1 |
| June | Nemesia → Bed 2; Honeysuckle → Stone Bed; Coreopsis Gold → Wall Pot 1; repeated Nemesia task → Bed 2 |
| July | Honeysuckle → Stone Bed; Coreopsis Gold → Wall Pot 1 |
| August | Pear Tree → Bed 4; Coreopsis Gold → Wall Pot 1 |
| September | Honeysuckle → Stone Bed; Nemesia → Bed 2; Pear Tree → Bed 4 |
| October | New Zealand Flax → Bed 5; New Zealand Flax (dark) → Bed 5 |
| November | Peony → Bed 1 |
| December | New Zealand Flax → Bed 5; Silverbush → Bed 1; Cabbage Tree → Bed 1 |

**Recommendation:** store each seasonal reference as `{zoneKey, plantName}`; split mixed-zone tasks into separate records; remove the runtime renumbering block; validate every seasonal reference during deployment and render unresolved references as non-clickable warnings in development.

### H-03 — Probable material plant misidentifications

| Record | Evidence | Assessment | Confidence | Resolution |
|---|---|---|---|---|
| Little Heath | `data.js:557-564`; broad white-margined leaves in `little-heath-3.webp`; nursery label visible in the photo | This is consistent with **Pieris japonica ‘Little Heath’**, not `Erica carnea`. The current flowering habit, pruning and drought advice belongs to a heather and is materially wrong. | High | Replace taxonomy and all care/seasonal tasks after Brad confirms the label. |
| Yucca | `data.js:790-797`; `images/plants/yucca*.webp`; older `phormium-yellow.webp`; seasonal data still says New Zealand Flax | The leaves appear flexible, broad and striped, without the marginal filaments characteristic of `Yucca filamentosa`; likely **Phormium**. Cultivar cannot be established from these photos. | High at genus; low at cultivar | Rename to “New Zealand Flax (cultivar to confirm)” and retake diagnostic photos/label. |
| Front Box Hedge | `data.js:1306-1315`; `wallbed-start.webp`, `cotoneaster.webp` | Arching herringbone stems and berries are consistent with **Cotoneaster**, not a clipped `Buxus` hedge. | High that it is not box; medium for Cotoneaster genus | Confirm leaves, flowers and berries in person; remove box blight/caterpillar care unless Buxus is confirmed. |

Sources: [RHS Pieris ‘Little Heath’](https://www.rhs.org.uk/plants/68304/pieris-japonica-little-heath-(v)/details), [RHS Yucca filamentosa](https://www.rhs.org.uk/plants/19164/yucca-filamentosa/details), [RHS Phormium guide](https://www.rhs.org.uk/plants/phormium), [RHS wall cotoneasters](https://www.rhs.org.uk/plants/cotoneaster/wall-shrubs), [RHS common box](https://www.rhs.org.uk/plants/2579/buxus-sempervirens/details).

### H-04 — Callistemon hardiness and task timing

`data.js:724` says ‘Inferno’ is hardy to about −10°C. RHS lists the trade cultivar `Callistemon Inferno ('Yanferno')` as H3, approximately −5°C to 1°C, for a warm sheltered position with thorough protection from severe cold. The January calendar task at `seasonal-data.js:19` says to cut it back, despite the same task saying “only ever after flowering”; RHS says established plants should be pruned gradually in summer immediately after flowering.

**Recommendation:** use the registered trade-name form, record H3, describe winter protection as necessary rather than optional during severe cold, and delete the January pruning instruction.

Source: [RHS Callistemon Inferno](https://www.rhs.org.uk/plants/299484/callistemon-inferno-yanferno/details).

### H-05 — Common-name photo journal collisions

`PlantCard.jsx:26` selects `PLANT_PHOTOS[plant.name]`. Four names occur in more than one zone: Hosta, Angel Wings, Apple Tree and Lavender. Any journal keyed by one of those names is reused by all records. In the browser, the front stone-trough Hosta displayed the Bed 1 Hosta journal.

**Recommendation:** key journals by stable plant ID or `${plantKey}:${plantId}`, not display name. Add unique IDs to plant records and use those IDs in maps, watering, seasonal data and photos.

### H-06 — Core plant and photo interactions are not keyboard operable

- Plant list rows are clickable `<li>` elements without `tabIndex`, keyboard handlers or buttons (`BedDetail.jsx:95-115`).
- Plant pins are clickable SVG `<g>` elements without role, accessible name or keyboard behaviour (`BedDetail.jsx:294-346`).
- Gallery images and fallback blocks rely on `onClick` (`BedDetail.jsx:352-373`).

The zone SVGs have keyboard-accessible legend buttons, but the bed plant interactions do not have an equivalent. This fails WCAG 2.1.1 Keyboard.

**Recommendation:** make plant rows real buttons/links; give SVG pins a button role, `tabIndex="0"`, accessible name and Enter/Space handling, or make them presentational if the list is the sole interaction; wrap gallery images in labelled buttons.

### H-07 — Dialogs lack semantics and focus management

The plant card backdrop (`PlantCard.jsx:64`) and both lightboxes are plain `<div>` overlays. They do not use `role="dialog"`, `aria-modal`, an accessible title, initial focus, focus trapping, inert background content, scroll locking or focus restoration. Browser testing showed focus remained on an underlying calendar link and Tab continued through the hidden page. Escape closes the plant card, but not the main photo lightbox.

**Recommendation:** implement a reusable modal shell with dialog semantics, labelled title, initial close-button focus, focus trap, Escape handling, background inertness, scroll lock and focus restoration. When the journal lightbox is open, its Escape handling must take precedence over closing the entire plant card.

## Medium and low findings

### Colour contrast

Contrast ratios below are calculated against each palette’s `--paper`. Normal text requires 4.5:1 under WCAG 2.1 AA.

| Palette | Failing base colours | Notes |
|---|---|---|
| Spring | `--pencil` 4.26:1 | Fails normal-size text |
| Summer | `--pencil` 3.64, `--stamp` 3.11, `--green` 3.44, `--accent` 3.51 | Widespread failure in small metadata, stamps and links |
| Autumn | `--accent` 4.22 | Fails normal-size text |
| Winter | `--accent` 3.53 | Fails normal-size text |
| Night | None of the base colours | Base text colours pass |

`--ink-faint` is about 2.1–2.45:1 in every palette and `--hairline` about 1.44–1.51:1. The latter also falls below the 3:1 non-text contrast expected where it conveys a control boundary or state.

### Palette feature discrepancy

`palette.js` contains a functioning `PaletteSwitcher`, but never renders it. It exports a no-op `TweaksPanel` at `palette.js:128-135`; `app.jsx:213-242` places a second palette UI inside that no-op component. The palette data is separately repeated in `paper.css`, `data.js`, `palette.js` and `app.jsx`.

The palettes work only if an existing local-storage value is present or a developer sets one manually. Keep one palette definition and render one accessible control.

### Stale labels and dates

- Header remains `v.2026.05` (`app.jsx:145`).
- Calendar says “36 plants” (`SeasonalCalendar.jsx:56`) although there are 90 records.
- Every zone says “recorded · 09 may 2026” (`BedDetail.jsx:61`), including July-only front zones.
- Every plant card says `09 · v · 2026` (`PlantCard.jsx:80`).

Generate these labels from data or remove them where no reliable date exists.

### Source mutation and insertion-order dates

Bed 2 and Bed 3 are authored as one array, then split at runtime (`data.js:1344-1360`). Seasonal and watering data are also migrated after authoring. This makes search results and maintenance misleading.

`BedDetail.jsx:11-18` chooses the last inserted month with photos, not the “last key alphabetically” described in `AGENTS.md:124`. Both insertion order and lexicographic month keys are fragile. Store an ISO date or explicit ordered month list.

### CDN, startup and resilience

React, ReactDOM and Babel are blocking external scripts in the document head (`index.html:9-11`) without Subresource Integrity. Babel compiles eight JSX files in the browser and prints its production warning on every load. A CDN or Babel failure leaves an empty root with no fallback.

The no-build-step constraint is reasonable for this project. Improvements can preserve it:

- self-host pinned minified React/ReactDOM/Babel files or add integrity hashes;
- add `defer` where ordering allows;
- precompile JSX only as an optional checked-in maintenance step, not a user-required build;
- add a useful `<noscript>` and a loading/error fallback.

### Privacy and public metadata

Eighteen raw HEIC files in `images/june-2026-updates/` total about 43 MB. Embedded strings identify an Apple iPhone 15 Pro Max and capture timestamps. GPS coordinates were **not confirmed**, but raw originals should be treated as potentially containing more metadata than the converted web files.

Strip metadata from published derivatives and keep originals outside the public repository unless they are intentionally archival.

### Navigation and semantic structure

- The main navigation is a group of buttons in a `<div>`, not a `<nav>` landmark.
- The two plan screens have no `<h1>`.
- Calendar tabs use `role="tab"` but do not implement Arrow key navigation or `aria-controls`.
- Watering filters rely on placeholder text instead of labels.
- Sortable tables do not expose `aria-sort`.
- View state is not represented in the URL or browser history.

### Deployment risk

`deploy.sh` deletes `.git/index.lock`, deletes a nested `oak-lodge-garden/` folder if present, stages every change and immediately commits/pushes. It performs no data integrity, broken-reference, missing-image or syntax check. Retain the one-command workflow, but add a read-only audit script and require it to pass before staging.

### Motion and touch

No `prefers-reduced-motion` override exists for page and lightbox animations. On the 390px test, 19 of 20 visible interactive controls were below 44px high; this is not a WCAG 2.1 AA failure by itself, but it is a material mobile usability issue.

## Complete data-integrity results

| Check | Result | Detail |
|---|---|---|
| Zones | Pass | 29 unique zones |
| Zone `plantKey` | Pass | 26 non-null keys; all resolve |
| Plant records | Pass | 90 records, 76 unique display names |
| Watering groups | Pass | 26 groups; every plant has one band; no orphan bands |
| Plant maps | Pass | 26 maps; all entries resolve; no mapped-zone plant omitted |
| Photo paths | Pass | 259 references; all files exist |
| Photo months | Pass with fragility | Three months; latest selection depends on object insertion order |
| Seasonal months | Pass | All 12 months exist |
| Seasonal plant references | **Fail** | 28 unresolved or wrong-zone references |
| Plant journals | **Fail** | Common-name keys collide across zones |
| Palette cache busting | Pass | All local assets use `?v=20260716` |
| Script order | Pass | Data scripts precede JSX components; app loads last |

## Data-discrepancy matrix

| Source | Current state | Discrepancy | Recommended disposition |
|---|---|---|---|
| `data.js` | Runtime authority | Large and partially post-mutated, but current | Keep; simplify internally |
| `data/plants.json` | 7 zones / 36 records | Does not mirror 26 groups / 90 records | Regenerate automatically or remove |
| `Oak_Lodge_Garden_Plant_Guide.xlsx` | 36 records | Stale pre-expansion inventory | Regenerate from `data.js` when needed; do not hand-maintain |
| `watering-data.js` | Complete coverage | Independent name-keyed copy; fixed-schedule model | Keep after model/ID redesign |
| `seasonal-data.js` | 12 months | 28 broken references; post-authoring migration | Rewrite against stable IDs |
| `PLANT_PHOTOS` in `data.js` | Photo journals | Repeats paths/captions already in plants/month data and keys by common name | Re-key by plant ID; consider generating |
| Palette definitions | Four copies | Values can drift; UI currently dead | Retain one source |
| `README.md` | 48 lines | Says 36 plants, tells user to edit `index.html`, contains placeholder URL | Rewrite as short current project guide |
| `AGENTS.md` | Main context | Missing `BACKLOG.md`, stale counts, false “JSON mirrors data.js”, incorrect month-order claim | Update after fixes |
| `CLAUDE.md` | Near-duplicate context | Materially diverged old bed model | Remove or generate from `AGENTS.md` |
| `DESIGN_HANDOFF.md` | Historical design handoff | Describes 36 plants and obsolete architecture | Archive as dated history |
| `MANAGEMENT_SUMMARY.md` | Historical summary | Points to stale context and contains deployment assumptions | Archive or refresh |
| `front-garden-handoff/` | Old handoff | Superseded; includes duplicate photos | Archive outside repo or remove after confirmation |
| `front-garden-handoff-v2/` | Newer handoff | Still historical now implementation is live | Archive outside repo |

Current documented inventory is also stale: `AGENTS.md` reports Bed 1 as 14 plants (runtime 17), Stone Bed as 7 (runtime 6), and Patio as 1 (runtime 2).

## Plant verification matrix

Status meanings:

- **Sound:** taxonomy and broad UK care are reasonable.
- **Sound, generic:** genus/group-level advice is reasonable, but cultivar-specific claims are not verifiable.
- **Amend:** a factual or taxonomic correction is recommended.
- **Confirm:** photographs, label or physical inspection are needed.

All 90 records are covered below; repeated common names list every affected group.

| Plant | Group(s) | Status | Finding and confidence | Authoritative reference |
|---|---|---|---|---|
| Abelia 'Kaleidoscope' | Bed 4 | Sound | Broad care/season is suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Abelia%20Kaleidoscope) |
| Achillea | Bed 4 | Sound, generic | Species/cultivar flower colour may vary; high at genus | [RHS](https://www.rhs.org.uk/plants/achillea) |
| Angel Wings | Bed 1, Bed 2 | Sound | Dry drainage and frost caution are appropriate; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Senecio%20Angel%20Wings) |
| Apple Tree | Bed 4, Front Apple Tree | Sound, generic | Species correct; cultivar and rootstock unknown; high | [RHS apples](https://www.rhs.org.uk/fruit/apples/grow-your-own) |
| Astilbe | Bed 1 | Sound, generic | Moisture advice appropriate; cultivar unknown; high | [RHS](https://www.rhs.org.uk/plants/astilbe) |
| Avens | Bed 1 | Sound, generic | `Geum` level only; flowering timing cultivar-dependent; medium | [RHS](https://www.rhs.org.uk/plants/geum) |
| Bacopa | Baskets | Amend | `Sutera cordata` is a synonym; accepted name is `Chaenostoma cordatum`; high | [Kew synonym](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A810104-1) |
| Bacopa White | Front Pot | Sound, generic | Trade/cultivar not recorded; care suitable; medium | [Kew accepted species](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A801445-1) |
| Box Hedging | Bed 1 | Sound | Bed 1 photos are consistent with box; high | [RHS Buxus](https://www.rhs.org.uk/plants/2579/buxus-sempervirens/details) |
| Box Hedging | Front Box Hedge | Amend | Photos are inconsistent with box and suggest Cotoneaster; high not-box / medium genus | [RHS cotoneaster](https://www.rhs.org.uk/plants/cotoneaster/wall-shrubs) |
| Cabbage Tree | Stone Bed | Sound | `Cordyline australis` care broadly appropriate; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Cordyline%20australis) |
| Calibrachoa | Big Pot 1, Front Pot | Sound, generic | Container care appropriate; cultivar unknown; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Calibrachoa) |
| Callistemon 'Inferno' | Bed 4 | Amend | RHS trade name is Inferno (‘Yanferno’), H3 rather than −10°C; high | [RHS](https://www.rhs.org.uk/plants/299484/callistemon-inferno-yanferno/details) |
| Candy House Mix | Wall Pot 1 | Confirm | Trade mix is not botanically identified; care cannot be species-verified; low | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results) |
| Celosia | Bed 4 | Sound, generic | Tender annual care appropriate; type/cultivar unknown; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Celosia) |
| Centaurea 'Snowy Owl' | Bed 3 | Sound | Cultivar naming/care plausible; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Centaurea%20Snowy%20Owl) |
| Cherry Laurel | Front Bed 5 | Sound | Photo and care plausible; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Prunus%20laurocerasus) |
| Clematis | Patio | Sound, generic | `Clematis montana` plausible; cultivar unknown; high at species group | [RHS Clematis montana](https://www.rhs.org.uk/plants/clematis/montana-group) |
| Climber (unidentified) | Front Bed 5 | Confirm | Thorns, compound serrated leaves and hips suggest **Rosa**; high genus, no cultivar | [RHS roses](https://www.rhs.org.uk/plants/roses) |
| Climbing Rose (white-pink) | Front Bed 3 | Confirm | Rose is plausible; cultivar and pruning group unknown; medium | [RHS climbing roses](https://www.rhs.org.uk/plants/roses/climbing/pruning-guide/) |
| Coreopsis Gold | Wall Pot 2 | Confirm | Coreopsis is plausible, but “Gold” is not a verified cultivar and hardiness is uncertain; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Coreopsis) |
| Dahlia | Bed 1 | Sound, generic | “Bishop type” is descriptive, not a confirmed cultivar; high genus | [RHS dahlias](https://www.rhs.org.uk/plants/dahlia) |
| Dahlia (yellow) | Bed 1 | Sound, generic | Same; cultivar not established; high genus | [RHS dahlias](https://www.rhs.org.uk/plants/dahlia) |
| Euonymus | Bed 1 | Sound, generic | Care appropriate; species/cultivar unknown; medium | [RHS Euonymus](https://www.rhs.org.uk/plants/euonymus) |
| Euonymus 'Emerald Gaiety' | Bed 3 | Sound | Accepted garden cultivar; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Euonymus%20Emerald%20Gaiety) |
| Fern | Front Bed 3 | Confirm | `Dryopteris filix-mas` is plausible but diagnostic fronds/sori are not shown; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Dryopteris%20filix-mas) |
| Forget-me-not | Bed 3 | Sound, generic | `Myosotis sylvatica` plausible; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Myosotis%20sylvatica) |
| Fuchsia | Big Pot 1, Big Pot 2 | Sound, generic | Container annual treatment is safe; cultivar unknown; high | [RHS fuchsias](https://www.rhs.org.uk/plants/fuchsia) |
| Gaillardia | Bed 4 | Sound, generic | Broad care suitable; winter survival cultivar/drainage-dependent; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Gaillardia) |
| Garden Pink | Bed 3 | Sound, generic | `Dianthus` care broadly suitable; cultivar unknown; medium | [RHS Dianthus](https://www.rhs.org.uk/plants/dianthus) |
| Gazania 'Orange Flame' | Front Pot | Sound, generic | Trade name not independently confirmed; tender-container advice suitable; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Gazania) |
| Gazania 'Sunny Side Up' | Front Pot | Sound | Cultivar naming plausible; tender-container advice suitable; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Gazania%20Sunny%20Side%20Up) |
| Geranium | Little Pots 1–2 | Amend label | These are Pelargoniums; care text recognises this, but display name should avoid confusion with hardy Geranium; high | [RHS pelargoniums](https://www.rhs.org.uk/plants/pelargonium) |
| Hardy Geranium | Bed 1 | Sound, generic | Species/cultivar unknown; broad care suitable; high | [RHS hardy geraniums](https://www.rhs.org.uk/plants/geranium) |
| Hebe | Stone Bed | Sound, generic | Genus-level ID plausible; exact cultivar unresolved; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Hebe) |
| Hedge (to identify) | Front Hedge | Confirm | No photograph or usable characteristics; unavailable | Physical inspection required |
| Honeysuckle | Patio | Sound, generic | `Lonicera` care broadly appropriate; species/cultivar unknown; high genus | [RHS honeysuckles](https://www.rhs.org.uk/plants/lonicera) |
| Hosta | Bed 1, Front Stone Trough | Sound, generic | Both plausible; cultivar unknown; photo journal collision must be fixed; high | [RHS hostas](https://www.rhs.org.uk/plants/hosta) |
| Hosta (gold) | Bed 1 | Confirm cultivar | Hosta is sound; ‘Gold Standard’ requires label/seasonal leaf confirmation; medium | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Hosta%20Gold%20Standard) |
| Houseleeks | Stone Bed | Sound, generic | `Sempervivum` and drainage advice appropriate; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Sempervivum) |
| Hydrangea | Front Bed 1 | Sound, generic | `H. macrophylla` plausible; cultivar and pruning type unknown; medium | [RHS hydrangeas](https://www.rhs.org.uk/plants/hydrangea) |
| Hydrangea petiolaris | Bed 3 | Sound | Taxonomy and shade/moisture care suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Hydrangea%20petiolaris) |
| Japanese Aralia | Bed 1 | Sound | `Fatsia japonica ‘Spider’s Web’` plausible and care suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Fatsia%20Spiders%20Web) |
| Japanese Maple | Bed 1 | Sound, generic | `Acer palmatum` correct; cultivar unknown; high | [RHS Japanese maples](https://www.rhs.org.uk/plants/acer/japanese-maples) |
| Kerria | Bed 3 | Sound | `Kerria japonica` care suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Kerria%20japonica) |
| Lavender | Bed 5, Front Bed 1 | Amend care | English lavender plausible; routine second spring trim should be a frost-damage tidy, not another prune; high | [RHS lavender guide](https://www.rhs.org.uk/plants/lavender/growing-guide) |
| Little Heath | Bed 1 | Amend | Almost certainly `Pieris japonica ‘Little Heath’`, not Erica; high | [RHS](https://www.rhs.org.uk/plants/68304/pieris-japonica-little-heath-(v)/details) |
| Lobelia | Big Pot 1, Big Pot 2 | Sound, generic | Bedding Lobelia treatment appropriate; cultivar unknown; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Lobelia%20erinus) |
| Lobelia 'Starship Scarlet Bronze Leaf' | Lobelia Pot | Sound with note | Name and H5 status supported; needs reliably moist soil and dry winter mulch; high | [RHS](https://www.rhs.org.uk/plants/505406/lobelia-x-speciosa-starship-scarlet-bronze-leaf-pas1302716-starship-series/details) |
| Maiden Pink | Bed 3 | Sound | `Dianthus deltoides` plausible; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Dianthus%20deltoides) |
| Mexican Orange Blossom | Front Bed 5 | Sound | `Choisya ternata ‘Sundance’` plausible; medium-high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Choisya%20Sundance) |
| Nemesia | Bed 1 | Sound, generic | Species/cultivar unknown; seasonal care broadly suitable; high genus | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Nemesia) |
| Nepeta | Big Pot 1, Big Pot 2 | Sound, generic | Genus-level ID and care plausible; high | [RHS Nepeta](https://www.rhs.org.uk/plants/nepeta) |
| New Zealand Flax (dark) | Stone Bed | Sound, generic | Phormium identification plausible; cultivar unknown; high genus | [RHS Phormium](https://www.rhs.org.uk/plants/phormium) |
| Pear Tree | Tree | Sound, generic | `Pyrus` correct; cultivar/rootstock unknown; high | [RHS pears](https://www.rhs.org.uk/fruit/pears/grow-your-own) |
| Peony | Bed 2 | Sound, generic | Herbaceous peony advice broadly suitable; cultivar unknown; high | [RHS peonies](https://www.rhs.org.uk/plants/peony) |
| Petunia | Big Pots 1–2, Little Pots 1–2 | Sound, generic | Container annual care suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Petunia) |
| Red Hot Poker | Bed 1 | Sound, generic | `Kniphofia` correct; flowering and evergreen habit cultivar-dependent; medium | [RHS Kniphofia](https://www.rhs.org.uk/plants/kniphofia) |
| Rhododendron | Bed 1 | Sound | ‘Goldflimmer’ naming and ericaceous care plausible; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Rhododendron%20Goldflimmer) |
| Rose | Bed 5 | Confirm type | Rosa is correct, but “prune hard” is unsafe until shrub/climbing group is known; high genus | [RHS rose pruning](https://www.rhs.org.uk/plants/roses/pruning-guide/) |
| Rose (pink) | Front Bed 3 | Confirm | Rosa plausible; cultivar and pruning group unknown; medium | [RHS roses](https://www.rhs.org.uk/plants/roses) |
| Rosemary | Stone Bed | Sound | `Salvia rosmarinus` is current accepted taxonomy; high | [Kew](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A457138-1) |
| Silverbush | Bed 3 | Sound | `Convolvulus cneorum` and drainage advice suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Convolvulus%20cneorum) |
| Spiraea 'Double Play Big Bang' | Bed 3 | Sound | Cultivar and care plausible; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Spiraea%20Double%20Play%20Big%20Bang) |
| Stonecrop | Stone Bed | Sound, generic | Sedum-level ID and drainage advice appropriate; high | [RHS sedums](https://www.rhs.org.uk/plants/sedum) |
| The Generous Gardener | Front Bed 4 | Sound | `Rosa ‘Ausdrawn’` is correct; high | [RHS](https://www.rhs.org.uk/plants/196207/rosa-the-generous-gardener-ausdrawn-pbr-cl/details) |
| The Pilgrim | Front Bed 4 | Sound | `Rosa ‘Auswalker’` is correct; high | [David Austin](https://www.davidaustinroses.co.uk/products/the-pilgrim) |
| Trailing Fuchsia | Baskets | Sound, generic | Cultivar unknown; basket care suitable; high | [RHS fuchsias](https://www.rhs.org.uk/plants/fuchsia) |
| Trailing Lobelia | Baskets | Sound, generic | `Lobelia erinus` treatment suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Lobelia%20erinus) |
| Trailing Verbena | Baskets | Sound, generic | Cultivar unknown; basket care suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Verbena) |
| Variegated Dogwood | Bed 2 | Sound | `Cornus alba ‘Elegantissima’` and coppicing advice suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Cornus%20alba%20Elegantissima) |
| Verbena | Big Pot 1, Big Pot 2 | Sound, generic | Container bedding treatment suitable; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Verbena) |
| Weeping Cherry | Bed 2 | Confirm species | Prunus is clear; species/cultivar unresolved, limiting pruning precision; medium | [RHS ornamental cherries](https://www.rhs.org.uk/plants/prunus/ornamental-cherries) |
| Weigela | Bed 3 | Sound, generic | Genus-level ID and post-flowering pruning suitable; high | [RHS Weigela](https://www.rhs.org.uk/plants/weigela) |
| Wintercreeper | Bed 1 | Sound, generic | `Euonymus fortunei` plausible; cultivar unknown; high | [RHS Plant Finder](https://www.rhs.org.uk/plants/search-results?query=Euonymus%20fortunei) |
| Wisteria | Bed 5 | Sound, generic | Twice-yearly pruning guidance suitable; species/cultivar unknown; high | [RHS wisteria pruning](https://www.rhs.org.uk/plants/wisteria/pruning-guide) |
| Yucca | Bed 5 | Amend | Likely Phormium rather than `Yucca filamentosa`; high genus-level correction | [RHS comparison sources](https://www.rhs.org.uk/plants/phormium) |

### Additional horticultural cautions

- The January instruction “Prune roses hard” (`seasonal-data.js:22`) is too broad. Climbing, rambling, shrub and bush roses require different methods. Identify the Bed 5 rose type first.
- The site has no toxicity/handling field. Pieris is harmful if eaten; Lobelia can be harmful and a skin irritant; several other entries have pet/handling cautions. Add such a field only where relevant and source it, rather than adding generic alarm text to every plant.
- Physical soil, drainage, exposure and establishment dates were not available. Those conditions can override generic watering and hardiness guidance.

## Accessibility and browser test results

| Test | Result |
|---|---|
| Live site availability | Pass — HTTP 200; deployed HTML matched local `index.html` |
| Desktop 1440px | Pass for primary layout; no horizontal overflow |
| Tablet 768px | Pass for primary layout; no horizontal overflow |
| Mobile 390px | Pass for primary layout; no horizontal overflow; controls are crowded/small |
| 200% zoom proxy | Partial — responsive widths remain usable, but a full assistive-technology zoom session was not available |
| Spring palette | Layout pass; pencil text contrast fail |
| Summer palette | Layout pass; multiple text contrast failures |
| Autumn palette | Layout pass; accent contrast fail |
| Winter palette | Layout pass; accent contrast fail |
| Night palette | Layout and base-colour contrast pass |
| Keyboard-only zones | Partial — legend buttons work; SVG zones themselves are not focusable |
| Keyboard-only plants | Fail — rows and pins are not focusable |
| Keyboard-only photos | Fail — images are click-only |
| Calendar Arrow keys | Fail — tablist does not implement expected arrow navigation |
| Plant-card Escape | Pass |
| Plant-card left/right arrows | Pass |
| Main lightbox Escape | Fail |
| Modal initial focus | Fail |
| Modal focus trap/background inertness | Fail |
| Focus visibility | Partial — browser defaults appear on native buttons; no consistent `:focus-visible` design |
| Screen-reader dialog semantics | Fail |
| Navigation landmark | Fail |
| Main plan heading | Fail — no `h1` |
| Reduced motion | Fail — animations remain active |

WCAG 2.1 AA criteria most directly affected: 1.4.3 Contrast (Minimum), 2.1.1 Keyboard, 2.4.3 Focus Order, 3.3.2 Labels or Instructions, and 4.1.2 Name, Role, Value.

## Performance, security and privacy

| Area | Assessment | Recommendation |
|---|---|---|
| React/Babel delivery | Pinned versions, but blocking CDN dependency and browser compilation | Preserve no-build workflow while self-hosting or adding SRI/fallbacks |
| Fonts | Four Google font families loaded through CSS `@import` | Consider self-hosting/subsetting or accept as an explicit aesthetic trade-off |
| Images | 108 MB repository footprint; 24 files >500 KB, 18 >1 MB | Keep web images near 1200px and compress; move originals out |
| Lazy loading | Used for bed gallery/thumbs | Keep; add explicit dimensions/aspect ratios where possible |
| Security headers | GitHub Pages supplies HTTPS/HSTS; no CSP | Add a CSP through a compatible `<meta>` if external sources are retained and tested |
| Subresource integrity | Missing for CDN scripts | Add `integrity` attributes or self-host |
| Privacy | Raw HEIC exposes device and timestamp metadata | Remove public raw originals after verified backup; strip metadata |
| Location disclosure | Site intentionally names Oak Lodge, Bromsgrove and maps the property | Confirm that this level of public location/layout detail is intentional |
| Error handling | No error boundary or no-script fallback | Add user-readable failure states |

## Repository cleanup matrix

No cleanup was performed.

| Item | Classification | Evidence / action |
|---|---|---|
| Runtime files and referenced web images | **Keep** | Active site |
| `AGENTS.md` | **Keep, update** | Best current context but contains stale facts |
| `README.md` | **Regenerate** | Obsolete instructions and counts |
| `data/plants.json` | **Regenerate or remove** | Only 36 of 90 records |
| Plant-guide spreadsheet | **Regenerate on demand** | Only 36 records |
| `CLAUDE.md` | **Safe to remove after confirmation** | Large stale duplicate of `AGENTS.md` |
| `DESIGN_HANDOFF.md` | **Archive** | Historical 36-plant architecture |
| `MANAGEMENT_SUMMARY.md` | **Archive or refresh** | Historical/stale operational context |
| `front-garden-handoff/` | **Archive / safe to remove after backup** | 5.8 MB; superseded; 23 photos duplicate `images/jul-2026` |
| `front-garden-handoff-v2/` | **Archive / safe to remove after backup** | Implementation is now live |
| 18 HEIC originals | **Archive outside repo, then remove** | 43 MB, unused by runtime, metadata-bearing |
| 103 unreferenced images | **Review then archive/remove** | Includes raw originals and useful historical/identification material; not all are disposable |
| `.DS_Store` files | **Safe to remove locally** | Ignored and untracked |
| `front-garden-v2-migration` branch | **Archive/delete after confirming unique commit** | Local branch is one commit ahead of its remote tracking ref |
| Git garbage objects | **Safe to prune after backup** | 186 garbage objects / 236.78 MiB; reachable history is not reported corrupt |
| Missing `BACKLOG.md` references | **Regenerate file or remove references** | Documentation currently points to a nonexistent file |

Exact duplicate pairs in `images/`:

1. `may-2026/bed4.jpg` = `may-2026/bed4-wide.jpg`
2. `jul-2026/coreopsis-gold-2.webp` = `jul-2026/wall-pot-b.webp`
3. `may-2026/bed1-7.webp` = `plants/box-hedging-1.webp`
4. `jul-2026/candy-house-mix.webp` = `jul-2026/wall-pot-c.webp`
5. `may-2026/bed1-close3.webp` = `plants/box-hedging.webp`
6. `jul-2026/coreopsis-gold-1.webp` = `jul-2026/wall-pot-a.webp`

Do not delete a duplicate until all data references are redirected to the retained path.

## Ranked remediation order

### Quick wins

1. Correct the three probable plant misidentifications after Brad confirms the photographs/labels.
2. Correct Callistemon hardiness and remove its January pruning task.
3. Repair the 28 seasonal references and add a validator so they cannot recur.
4. Change watering language from fixed instructions to moisture-check priorities.
5. Correct the visible version, plant count and recorded dates.
6. Render the existing palette switcher or remove the dead UI; adjust failing colours.
7. Add labels to filters, a navigation landmark, plan `h1`s and reduced-motion CSS.
8. Remove/archive raw HEIC files after a verified external backup.

### Focused engineering work

1. Add stable plant IDs and migrate maps, watering, seasonal data and journals to IDs.
2. Create a reusable accessible modal/lightbox.
3. Convert plant rows and image interactions to semantic buttons; add keyboard support to pins.
4. Replace post-authoring bed migrations with directly authored final data.
5. Add URL/history routing without introducing a router dependency.
6. Add a read-only `audit-data` script covering references, duplicate IDs and image existence, and run it from `deploy.sh`.

### Structural housekeeping

1. Decide whether `data.js` remains the authoring source or is generated from a standalone data file. Keep one authority.
2. Generate JSON/spreadsheet exports rather than maintaining copies.
3. Consolidate current documentation into `README.md` + `AGENTS.md`; archive dated handoffs.
4. Move source photos outside the public repository; keep only optimised derivatives and intentionally retained evidence images.
5. Prune confirmed-unused assets, stale branch and Git garbage after backup.

## Limitations and confirmations required

- Photo-based plant identification is not equivalent to examining the plant. Brad should confirm labels and inspect leaves, stems, flowers and fruit before factual corrections are applied.
- The front hedge has no photograph and cannot be identified.
- Several cultivars cannot be verified from foliage-only or distant photographs; they are listed as generic rather than guessed.
- No soil analysis, aspect measurement, drainage test, establishment date or irrigation/rainfall history was available. Watering advice must remain conditional.
- GPS metadata was not confirmed in the raw HEIC files; the report confirms device and timestamp metadata only.
- A full screen-reader session on VoiceOver/NVDA and physical iPhone touch test were not available. Semantic and keyboard defects were verified through DOM inspection and Chromium interaction.
- Obsolete remote branches could not be exhaustively confirmed because a final remote network query was unavailable; local tracking state was inspected.

## Acceptance checklist

- [x] Every zone `plantKey` checked.
- [x] Every plant-map entry checked.
- [x] Every watering-band entry checked.
- [x] Every seasonal plant reference checked; all 28 failures listed.
- [x] Every runtime photo path checked.
- [x] All 90 plant records / 76 unique names reviewed.
- [x] Back garden, front garden, bed, plant card, calendar, watering, lightbox and return flows exercised.
- [x] Desktop, tablet and mobile widths exercised.
- [x] All five palettes exercised.
- [x] Keyboard, Escape, arrow, focus and dialog behaviour checked.
- [x] Runtime and site files left unchanged.
