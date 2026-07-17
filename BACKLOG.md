# Oak Lodge Garden — Prioritised Backlog

**Updated:** 17 July 2026  
**Source:** [AUDIT.md](AUDIT.md)  
**Audit position:** all 7 High findings are complete. The remaining remediation is 8 Medium and 5 Low findings.

This file turns the audit into deployable batches. The batches are ordered to remove fragile data and deployment behaviour before adding more features.

## Next batch — data and deployment foundations

This is the recommended next release. It is self-contained, does not need a garden decision from Brad, and makes every later batch safer.

- [ ] **M-03 — Store the final Bed 2 and Bed 3 plant lists directly in `data.js`.** Remove the runtime `BED3_PLANT_NAMES` split so the source data is the data the site actually uses.
- [ ] **M-04 — Make `data.js` the documented source of truth.** Generate `data/plants.json` and `Oak_Lodge_Garden_Plant_Guide.xlsx` from it, then refresh the README and context documentation so plant counts and locations agree.
- [ ] **M-10 — Make deployment safer without losing the one-command workflow.** Stop automatically deleting prototype files, run the data audit before staging, reject unexpected raw/oversized files, and show the staged summary before committing.

Acceptance checks:

- The site still resolves 90 plant records, all watering entries, seasonal links, plant-map pins and image references.
- No Bed 2/3 migration or post-load mutation remains.
- Generated JSON and spreadsheet records match `data.js` for count, zone and plant name.
- `./deploy.sh "message"` remains the only deployment command.
- The deployment guard fails before commit when data or suspicious assets are invalid.

## Batch 2 — resilient loading, URLs and browser checks

- [ ] **M-05 — Remove the external-script blank-page risk.** Store pinned React, ReactDOM and Babel runtime files with the site while preserving the no-install, no-build workflow.
- [ ] **M-08 — Add URL and browser history state.** Use GitHub-Pages-safe hash routes for front/back plans, beds, calendar, watering and plant cards so refresh, Back and Forward behave as expected.
- [ ] **L-09 — Add a browser smoke check to deployment.** Cover the main routes, palette switching, plant dialog and photo lightbox at phone, tablet and desktop widths. The existing data audit remains mandatory even where a browser runner is unavailable.

Acceptance checks:

- The journal starts without reaching a third-party CDN.
- A copied bed or plant URL opens the same view after refresh.
- Browser Back closes overlays and returns through views before leaving the journal.
- Smoke checks cover 390 px, 768 px and 1440 px widths in all five palettes.
- Brad still does not need npm, a build command or a development server to update the journal.

## Batch 3 — repository and image cleanup

**Blocked until Brad confirms that the original photographs and historical hand-offs are backed up outside this repository.** This batch changes source history and removes files; it should be done as one measured cleanup with before/after sizes recorded.

- [ ] **M-06 — Remove 18 unused raw HEIC files** from the public repository after backup confirmation.
- [ ] **M-12 — Reduce the remaining repository asset footprint.** The live cards and galleries already use the 7.3 MiB thumbnail set; remove unused originals and hand-off copies without reducing the quality of full-screen photos.
- [ ] **L-04 — Archive or remove `front-garden-handoff/` and `front-garden-handoff-v2/`.**
- [ ] **L-05 — Consolidate the six exact duplicate image pairs.** Redirect references to one canonical file, delete the duplicate and regenerate the affected thumbnails.
- [ ] **L-06 — Resolve the stale migration branch and prune Git garbage.** Confirm whether its final commit is needed before deleting anything, then run repository maintenance.

Brad confirmation checklist:

- [ ] The original iPhone/HEIC photographs exist in iCloud or another backup.
- [ ] The two front-garden hand-off folders are no longer needed in GitHub.
- [ ] The `front-garden-v2-migration` branch contains nothing that must be retained.
- [ ] It is acceptable for the public repository to retain the location detail currently documented in the journal.

Acceptance checks:

- Every runtime image and thumbnail reference passes the data audit.
- Full-screen photos remain sharp; gallery and card thumbnails remain fast.
- No raw HEIC or superseded hand-off asset remains in the public tree.
- Before/after working-tree, image and Git object sizes are recorded in the deployment note.

## Batch 4 — plant identity and safety

This needs Brad to compare the garden plants with labels, receipts or fresh close-up photographs. Engineering can prepare the checklist and UI, but uncertain identities must not be guessed.

- [ ] **M-13 — Resolve generic or unidentified plant records.** Prioritise Candy House Mix, the unidentified climber, white-pink climbing rose, Coreopsis Gold, fern, unidentified hedge, gold Hosta cultivar, pink/unspecified roses and the Weeping Cherry species.
- [ ] **L-07 — Add toxicity and handling cautions** to the plant schema and care cards where relevant to people or pets.

Acceptance checks:

- Confirmed botanical names and cultivars are supported by a label, receipt or diagnostic photographs.
- Unconfirmed records are clearly labelled as uncertain and avoid cultivar-specific advice.
- Relevant sap, skin, ingestion and pet cautions are visible but do not overwhelm routine care.
- Plant, seasonal and watering references still pass the data audit.

## Product enhancements — after audit remediation

- [ ] **Monthly timeline view.** Add month tabs or a before/after comparison per bed.
- [ ] **Mobile swipe for photo galleries.** Add natural touch navigation to the polaroid gallery and lightbox.
- [ ] **Automatic monthly photo registration.** Extend the CoWork photo workflow so a new month is added to `PHOTOS_BY_MONTH` without the current manual edit.

## Definition of done for every release

- [ ] Run `node audit-data.js` successfully.
- [ ] Test affected views at phone and desktop widths and in all five seasonal palettes.
- [ ] Bump every local `?v=` cache suffix in `index.html` when a runtime file changes.
- [ ] Deploy with `./deploy.sh "short description"`.
- [ ] Verify the new commit and key behaviour on GitHub Pages after the rebuild.

## Completed audit work

- [x] H-01–H-07 — care safety, broken seasonal links, plant corrections, journal keys and keyboard/dialog accessibility.
- [x] M-01, M-02, M-07 and M-09 — contrast, palette control, live metadata and page semantics.
- [x] M-11 — formerly unreachable hardscape photographs.
- [x] L-01–L-03 — reduced motion, touch target and page metadata improvements.
- [x] Image-performance release — responsive thumbnail derivatives for plant cards and galleries; 7.3 MiB versus 60.4 MiB of referenced originals.
- [x] L-08 — this prioritised backlog now replaces the missing document reference.
