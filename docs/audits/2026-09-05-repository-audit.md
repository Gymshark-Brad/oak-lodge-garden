# Oak Lodge Garden — repository, setup and image audit

Audit date: 5 September 2026. Audited revision: `a9932d1ed623ad3231e391dc2c5a4545b27f7790`.

This is a fresh assessment of the current site, superseding the July audit's measurements and the August backlog's status assumptions. It proposes changes; no application code, garden records, images, GitHub settings or deployments were changed. The companion [roadmap proposal](2026-09-05-roadmap-proposal.md) turns these findings into releases.

## Assessment

Keep the current static architecture and garden-notebook design. The data relationships are sound and the live application works in normal conditions. The highest-value improvements are a consistent photo pipeline, a working deployment guard, and access to the complete photo history. A framework migration, backend or mandatory build system is unnecessary.

The reported inconsistent image loading is supported by several concrete weaknesses, but was not reproduced as a random permanent failure during normal browsing. Every referenced live image URL responded successfully. The distinction matters: repairing nonexistent file paths would miss the main issues.

## What was verified

| Check | Result |
|---|---|
| Local versus deployed application | All 23 local HTML, stylesheet, component and data files compared byte-for-byte with the live site: identical |
| GitHub Pages | Public site, built successfully, source `main` at `/`, HTTPS enforced |
| Latest deployment | Successful Pages run for the audited revision; completed 28 August 2026, 15:22:51 UTC |
| Main branch | Classic branch-protection endpoint reports “Branch not protected”; repository rulesets were not separately enumerated |
| Tracked working tree before reporting | Clean; no existing tracked changes |
| Inventory | 161 distinct plant IDs, 31 plant groups, 34 zones; all 161 active plants have authored profiles |
| Local photo references | 532 originals and 532 thumbnails exist; Pillow format/structure verification reported no errors |
| Live image availability | All 1,064 referenced original/thumbnail URLs returned HTTP 200 in a HEAD sweep |
| Data relationships | Existing audit passes after isolating its JavaScriptCore scope bug in a temporary copy; profiles, watering, seasonal, map and journal references resolved |
| Main-screen browser matrix | 6 screens × 3 widths (390, 768, 1440) × 5 palettes = 90 checks; no page exceptions or failed requests in the normal run |
| Mobile regression | Seasonal calendar reproduces 434px document width in a 390px viewport; all five palettes affected |
| Lightbox | A large Front Bed 4 original loaded normally; close received focus, background became inert, Escape closed the dialog |
| Failure injection | Blocking a plant-journal thumbnail left a broken image; blocking React produced an entirely blank page |
| Refresh | Refreshing a plant profile returned to the back-garden plan |
| Startup observation | About 2.23 seconds to the mounted application in one fresh, unthrottled desktop Chrome session; a lab observation, not a mobile performance benchmark |

The six main screens were Back Garden, Front Garden, House Plants, Garden journal, Seasonal calendar and Watering guide. Targeted bed/profile/lightbox checks supplemented that matrix. The automated matrix checked headings, document overflow and exceptions; it was not a full visual or WCAG conformance certification.

## Findings and proposed remedies

### A01 · High · Photo delivery has an extreme size jump

**Evidence:** `PlantProfile.jsx:24`, `BedDetail.jsx:731–759`, `app.jsx:318–331`, `generate-thumbnails.py:22–23`.

There are only two delivery levels: a small WebP thumbnail and the retained original. Referenced originals total **635.2 MB (605.8 MiB)**, compared with **16.9 MB (16.2 MiB)** of thumbnails. Of the originals, **97 exceed 1 MiB and 74 exceed 4 MiB**. The largest is **8.38 MB**. A lightbox opens the original directly, with no visible thumbnail retained while the larger image arrives.

At a hypothetical 5 Mbit/s connection, an 8.38 MB image alone takes roughly 13 seconds to transfer, before other overhead. This is a calculation, not an observed mobile timing. It explains how a working image can appear absent on one connection and immediate on a warm cache.

**Proposal:** retain private originals; generate display derivatives in roughly 360px, 720px and 1600–2000px size classes, preserving aspect ratio and colour. Use responsive selection for gallery/profile images and an optimised large image in the lightbox. Keep the small preview visible until the large image decodes. Use eager loading for a photo the reader has explicitly opened, lazy loading for off-screen galleries, and a clear retry action on failure.

**Acceptance:** cold-cache phone testing on a controlled slow connection; stable photo space from first render; visible preview during enlargement; no routine lightbox needs a camera-sized original. Start with a proposed 500 KB budget for large viewing copies and permit documented exceptions where detail warrants them.

### A02 · High · Referenced originals expose GPS metadata

**Evidence:** metadata scan of the 532 referenced originals, plus one remote/local byte comparison of a GPS-bearing sample.

**120 originals contain EXIF metadata; 102 contain a GPS IFD.** All their URLs were accessible, and the sampled live original exactly matched its local bytes. The thumbnail generator strips metadata, but lightboxes and fallback paths serve originals. The previous audit's “GPS not confirmed” statement no longer describes the evidence.

**Proposal:** remove metadata from every publicly served image, including large viewing copies and any retained publicly accessible originals. Keep original evidence photographs in a verified private archive. Merely changing UI references does not remove an existing public original URL. Removing metadata in the current tree also does not erase old Git objects or previously cached copies; separately assess whether historical exposure warrants further cleanup.

**Acceptance:** zero GPS/device EXIF in the files intended for public delivery, confirmed against deployed samples. Preserve colour appearance and plant-label detail. Deletion or history rewriting remains a separately reviewed action after backup confirmation.

### A03 · High · The deployment guard currently crashes

**Evidence:** `audit-data.js:17–29`; `deploy.sh:22`.

Running the documented `./audit-data.js "$PWD"` fails with `ReferenceError: Can't find variable: window` under the installed macOS JavaScriptCore runner. It never reaches its validation result, so `deploy.sh` stops at its first guard. An isolated temporary copy placing the simulated `window` in global scope passes for all 161 plants and 532 photo references. The repository file was left unchanged.

The duplicate-ID check also compares keys already taken from an object with a Set of the same keys. Duplicate source IDs could already have overwritten one another by then.

**Proposal:** make data evaluation explicit and compatible with the documented runner, and detect duplicate IDs from raw plant arrays before building lookups. Separate reusable validation logic from the runner so browser, deployment and export checks evaluate the same final data.

**Acceptance:** the unmodified documented command succeeds on Brad's machine; controlled duplicate-ID, missing-photo, missing-watering and broken-map fixtures each fail with useful messages. Do not remove the guard to get a deployment through.

### A04 · High · Image storage is approaching the hosting budget

**Evidence:** read-only Git index inventory: 1,278 tracked files, **945.6 MB (901.8 MiB)** in the current tracked tree; **937.3 MB** under `images/`. These are logical file sizes, not Finder disk allocation or Git pack size.

There are **18 tracked raw camera files totalling 45.5 MB**. A further **141 tracked image files totalling 285.1 MB** are absent from the runtime photo-reference set. Those are review candidates, not automatically disposable: social-preview, historical or handoff images may be intentional. Six exact duplicate groups account for only **1.42 MB** of avoidable copies.

The entire local image folder is larger still because it includes ignored intake material. That local total must not be confused with the published tree. Git objects occupy approximately 519 MiB by disk-usage reporting; garbage and reachability were not re-audited.

GitHub recommends keeping Pages source repositories within 1 GB and limits published sites to 1 GB. The tracked source size is not a measurement of the final Pages artifact, but it leaves little room for continued camera-sized additions. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

**Proposal:** optimise the retained viewing set, inventory each unreferenced candidate, confirm backups, then remove approved source/handoff copies. Measure the actual publishable tree during deployment. Prioritise large originals over the comparatively small duplicate saving. Avoid a history rewrite as the first cleanup step.

**Acceptance:** a proposed initial published-asset budget under 400 MB, with growth reported per release; no broken runtime or historical references and no reduction in required identification detail.

### A05 · Medium · Different photo views recover differently

**Evidence:** `PlantProfile.jsx:23–30,265`; `PlantCard.jsx:76–84`; `BedDetail.jsx:731–759`.

The profile hero falls back to an original, then to a text placeholder. Bed/journal photos use another fallback implementation. The profile's photo-journal images have **no error handler**. Blocking one thumbnail in Chrome left `naturalWidth: 0` and the failed thumbnail URL in place, although the original existed. None of these flows offers an explicit retry after a transient error. The hero's state also is not reset if the component receives a different plant without unmounting; this is a latent risk for future next/previous navigation, not a reproduced current user path.

**Proposal:** use one shared photo component across bed, journal, profile and lightbox views. Give it explicit loading, loaded and failed states; reset on source change; try the next derivative once; preserve dimensions; provide retry and caption. Treat “no photograph recorded” separately from “photograph could not load”.

**Acceptance:** block a thumbnail, large image, and both in turn; each view responds consistently, without retry loops or an unexplained blank area.

### A06 · Medium · Preloading competes with visible photographs; image quality has only one small setting

**Evidence:** `BedDetail.jsx:66–76`; `generate-thumbnails.py:22–23`; `PlantProfile.jsx:265`.

Opening a bed preloads the hero thumbnail for every plant, including **23 images for Front Bed 5** and **22 for the Stone Bed**, before a plant is selected. This deliberately improves later card opening but can compete with the visible gallery on a slow connection. All 532 checked thumbnails fit the current 360×540 bounding box; none exceeded 100 KiB. The current files are consistent, but the single small size can look soft in large/high-density displays. There is no `srcset`/`sizes` selection.

**Proposal:** load visible photographs first, prefetch a small bounded number on focus/intent or idle time, and respect connection-saving preferences where available. Add appropriate source sizes without raising the cost of every thumbnail. Declare intrinsic dimensions alongside existing frame aspect ratios. [MDN image guidance](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)

**Acceptance:** measure request count and transferred bytes before the first plant selection; retain quick repeat navigation without eager downloads for a whole large bed.

### A07 · Medium · Older photo history and some archives disappear from bed views

**Evidence:** `BedDetail.jsx:11–26,27–56`.

Bed pages scan object insertion order backwards and display only the selected latest month. Older month galleries cannot be selected. The Stone Bed's July archive is therefore absent once its August photos are selected; similar cases exist for other beds. Front Bed 5 has August archive photos but no matching archive label, so it receives the default “Pre-June 2026” wording.

The context file's instruction to sort month names alphabetically is wrong for both the implementation and calendar chronology. The current insertion order happens to be chronological.

**Proposal:** add explicit sortable dates, month selection and independent archive records with their own dates/captions. Preserve historical bed numbers and locations where appropriate; do not recreate history from current plant positions.

**Acceptance:** every stored month and archive has an intentional user route; Stone Bed's July archive remains accessible after adding another month; Front Bed 5 shows the correct archive period; adding January after December sorts correctly.

### A08 · Medium · A failed CDN request still blanks the entire site

**Evidence:** `index.html:20–22,35–36,54–67`.

React, ReactDOM and Babel are pinned but externally hosted and required to start the application. Blocking the React request in an isolated browser session resulted in empty root and body text. The existing `noscript` helps only when JavaScript is disabled; it does not explain a script-load failure. Approximately **1.09 MB of uncompressed data JavaScript** is also loaded before any particular bed/profile is requested. This is not the compressed transfer size.

**Proposal:** self-host the pinned runtime files, keep licensing/version notes, and add a lightweight startup message that remains useful if startup fails. Preserve browser JSX and the current no-install/no-build workflow. Babel itself advises that standalone is normally not the production choice; here it is a deliberate simplicity tradeoff, so removing compilation is a later measured option requiring an agreed workflow change. [Babel standalone documentation](https://babeljs.io/docs/babel-standalone/)

Google Fonts are a secondary external dependency; existing fallback fonts and `display=swap` are helpful. Consider locally hosted font subsets after core loading is reliable.

**Acceptance:** the journal starts with unpkg blocked; a failed essential local script produces a useful message; normal startup retains the notebook typography and all five palettes.

### A09 · Medium · Deployment can publish the wrong result or be difficult to retry

**Evidence:** `deploy.sh:24–28,33–40,112–123`.

The script removes `.git/index.lock` unconditionally without establishing that it is stale. It commits the current branch, then pushes the local `main` ref; running it from the existing migration branch could commit there while pushing unchanged `main`. Following a failed push, a second invocation with no new edits exits as “nothing to deploy” before retrying the existing commit. The script announces deployment after push, without checking the Pages result.

**Proposal:** verify branch and remote first; stop safely on a live lock; distinguish clean-and-published from clean-with-unpushed-commits; report conflicts without discarding changes; check the completed Pages revision. Keep the staged summary and journal checkpoint. Do not introduce mandatory pull requests just to manage a personal site; an optional remote read-only validation check would provide protection against bypassing the local script while retaining the simple update workflow.

**Acceptance:** wrong branch, active lock, failed push and failed Pages build each produce an accurate result; successful retry requires no dummy edit; only the intended revision is declared live.

### A10 · Medium · Exports match the base data but not the displayed identities

**Evidence:** `generate-plant-exports.py:35–54`; `cultivar-resolution-data.js`; `data/plants.json`.

The JSON currently contains all **161** plants and exactly matches `data.js` before enrichment. It is not missing the latest plant count. However, **78 displayed names differ** after the identity layer is applied. Examples include exported “Kerria” versus displayed “Yellow Corydalis — assumed”, and exported “New Zealand Flax” versus displayed “Yucca ‘Color Guard’ — assumed”. The exporter loads only `data.js`, so simply regenerating it will preserve this discrepancy. The workbook uses the same loader; its current cell content was not independently reread in this audit.

**Proposal:** generate reader-facing exports from the same resolved data as the site, retaining stable IDs, original aliases and explicit assumption/confirmation fields. If a raw export remains useful, label it clearly as raw authoring data. Validate the actual expected export contract.

**Acceptance:** resolved names, confidence, zone and IDs agree between site, JSON and workbook; no assumed identity loses its qualification. Verify all intended exported fields, not just the first three columns.

### A11 · Medium · Navigation loses the reader's place

**Evidence:** `app.jsx:8,77–128,250–282`; browser refresh reproduction.

URLs never identify the open plant/bed. Refresh resets to the plan and browser Back cannot retrace application navigation. Bed scroll restoration exists and is useful, but calendar/journal/watering screens unmount when a full profile opens, resetting selected months, filters or other view state on return. Seasonal completion itself is saved separately and survives.

**Proposal:** add GitHub-Pages-safe hash URLs using stable plant IDs, keep the current explicit return-source convention, and preserve per-view selections and scroll. No router dependency is required.

**Acceptance:** copied plant/bed/month URLs reopen the same content; refresh, Back and Forward behave predictably; opening a profile from a filtered or non-current-month view returns to that same view state.

### A12 · Medium · The seasonal calendar overflows on phones

**Evidence:** `SeasonalCalendar.jsx:398–400,467–468`.

At 390px, September's calendar produced a 434px document width after animations settled. The month heading and decorative SVG share a two-column header that has insufficient room. Internal scrolling of the month tabs is intentional; page-wide scrolling is the defect. The first rapid journal check also registered transient overflow, which was not separately confirmed as a persistent journal defect.

**Proposal:** allow the month-title column to shrink/wrap or stack the decorative illustration at phone widths. Check all twelve month names, long task titles and text zoom. Preserve the paper illustration and palettes.

**Acceptance:** no document-wide horizontal scroll at 360/390px in any month or palette, while the month strip remains scrollable and keyboard-operable.

### A13 · Medium · Photo maintenance and documentation have drifted

**Evidence:** `AGENTS.md`, `README.md`, `BACKLOG.md`, `generate-thumbnails.py`, `audit-data.js`.

The documented `garden-photo-sync.sh` is absent from this checkout. This does not establish whether an external automation exists elsewhere; its schedule, last run and iCloud intake availability were not verified. The generator scans only `data.js`, while validation gathers several runtime photo collections including the journal. Today all 532 references are covered; a future journal-only photo can fall outside generation. It rewrites every thumbnail on every run.

Documentation still claims 158 plants, describes a different thumbnail size, advises `node audit-data.js` although that script is JXA, and understates the current weather/checklist features. The old backlog's completed-versus-next-release wording is contradictory.

**Proposal:** document the actual workflow; introduce a unified photo manifest or common resolved-reference collector; make derivative generation incremental using source and recipe hashes; generate counts and validation commands from the real setup. Archive old context documents with explicit historical status.

**Acceptance:** adding a photo to any supported collection generates all required variants, records it in the intended gallery/journal, and passes validation through one documented process. A no-change repeat run does not rewrite images.

### A14 · Medium · Personal progress and weather behaviour need clearer resilience

**Evidence:** `SeasonalCalendar.jsx:25–38,49–55`; `WateringGuide.jsx:64–117,174–211`.

Completed jobs already persist in local storage, scoped by year, but have no backup/import or cross-device transfer. Storage failure is silently ignored. The watering guide already uses town-level Open-Meteo weather, cached per session, with fallback/retry and indoor separation. It has no application-level request timeout; schedule context is fixed at mount, and missing numerical weather values can become zero rather than “unknown”. These are code-level resilience risks, not evidence of incorrect care advice observed today.

**Proposal:** add export/import for personal progress, a clear “saved on this device” explanation and a nonintrusive unsaved-state indication. Add a weather timeout, timestamp/age checks, explicit unknown values, and refresh on a new day or return to the tab. Retain moisture-check language and avoid presenting modelled town rainfall as a measurement in the bed.

**Acceptance:** offline and malformed/stale weather responses remain usable and clearly qualified; an open tab refreshes the daily round after midnight; progress can be backed up and restored without changing the public garden record.

## Existing strengths to preserve

- Stable plant IDs and explicit, source-backed authored profiles across every active plant.
- Visible assumed/confirmed identities, rather than silently upgrading guesses.
- Explicit historical journal events; previous locations/removals do not depend on current prose.
- Working weather-aware watering rounds and seasonal completion checkboxes.
- Reusable accessible modal, semantic plant buttons, focus handling, reduced-motion support and five palettes.
- A static site with pinned dependencies, a single personal deploy command and no mandatory npm/build workflow.
- Consistent cache suffixes in the currently deployed application files.

## Setup and assurance limits

The configured workspace path is a symlink to `/Users/bradleygregg/Documents/Codex/Projects/oak-lodge-garden`. This session's filesystem sandbox and computer-use integration rejected the symlinked writable root. Approved command execution against the real files enabled the audit. Several initial Git status commands stalled; the later bounded tracked-file status completed cleanly. This is evidence of a local tooling issue, not evidence of repository corruption or proof that cloud storage caused it. Registering the real directory as the Codex project is a sensible setup correction.

No obvious private-key/token patterns were found in the current text-file scan. That is not a secret-history audit. No destructive cleanup, push, publication, branch alteration or message to another person was performed. Classical branch protection was checked; all possible organisation/repository rulesets were not. Git history recovery, backup completeness and external automation execution remain unverified.

This was an application/data/operational audit, not a fresh horticultural review of every statement in 161 profiles. Source coverage was checked structurally; all botanical claims and external source links were not re-researched. Physical iPhone/Safari behaviour, VoiceOver, pinch gestures, comprehensive contrast combinations, full image pixel decoding and field performance on a poor connection remain acceptance work for implementation.

## Recommended next decision

Approve the scope of the first two releases in the companion roadmap: repair deployment validation and deliver consistent, optimised, metadata-free photos. Then restore chronological photo browsing and URL navigation. Keep raw-file deletion and any history rewrite separate until backups and retained evidence are confirmed.
