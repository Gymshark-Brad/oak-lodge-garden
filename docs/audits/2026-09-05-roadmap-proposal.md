# Oak Lodge Garden — proposed improvement roadmap

Prepared 5 September 2026. Based on the [current repository audit](2026-09-05-repository-audit.md). This is a proposal, not an implementation commitment or a replacement of the existing backlog before Brad reviews it.

The direction is to make the notebook dependable, easier to maintain and better at showing how the garden changes. Preserve the hand-drawn plans, paper textures, five palettes, static hosting and one-command publishing. Avoid introducing an account system or backend unless a later need justifies ongoing maintenance.

## Features already delivered

Weather-aware watering rounds, moisture-check guidance, plant search inside the watering guide, monthly maintenance jobs, saved completion checkboxes, a visual garden journal, researched profiles, indoor plants, stable IDs and accessible lightboxes already exist. The proposals below extend those capabilities.

## Delivery sequence

Effort estimates are rough focused implementation time, including relevant verification. They are not elapsed calendar promises; review, photo decisions and cleanup can extend them.

| Release | User-visible outcome | Scope and dependencies | Indicative effort |
|---|---|---|---|
| 1 · Reliable publishing | Updates can be checked and published with confidence | Repair JXA guard; meaningful duplicate/reference checks; correct-branch/lock/retry behaviour; truthful deployment status; record current setup | 1–2 days |
| 2 · Reliable photographs | Photos appear consistently, enlargements are fast and failures are understandable | Common photo component; responsive small/medium/large copies; visible preview; retry; metadata stripping; bounded prefetch; current public-image sanitisation; unified reference collection | 2–4 days plus photo review |
| 3 · Find your place | Refresh and Back work; older pictures are accessible | Stable hash URLs; preserved view state; month selectors; independent correctly dated archives; mobile calendar repair | 2–4 days |
| 4 · Easier maintenance | A photo/plant update requires fewer fragile manual edits | Resolved exports; photo import review/manifest; incremental generation; documentation refresh; progress export/import; optional remote validation | 2–4 days |
| 5 · Garden companion | The existing knowledge becomes quicker to use outside | Global search, a concise “Today at Oak Lodge” page, observation notes and better phone photo browsing | 3–5 days, split into small releases |
| 6 · Evidence-led planning | Decisions draw on what actually worked at Oak Lodge | Plant/bed history, flowering observations, loss/replacement records, measured site conditions and planning overlays | Several small releases; prioritise after using earlier features |

Start with Releases 1 and 2. The calendar width repair is small enough to bring forward if it is causing frequent friction. Do not wait for a broad redesign before improving image delivery.

## Ranked additional features

| Rank | Feature | Why it earns a place | Smallest useful version | Dependency / effort |
|---|---|---|---|---|
| 1 | Bed photo timeline and before/after | Existing photos are valuable but older months disappear behind the latest selection | Month tabs, persistent archives and two selected photos side by side; use matched viewpoints where available | Reliable images and explicit dates; medium |
| 2 | Global plant and place search | 161 plants are increasingly hard to find through maps alone | Search common/Latin names, aliases and zones; keyboard and phone-friendly results; shareable plant links | Stable URLs; small–medium |
| 3 | Mobile photo browser | Makes real garden photos easier to explore on the device used to take them | Swipe/previous/next, photo count and captions; accessible buttons and Escape remain; bounded neighbouring-image prefetch | Shared photo component; medium |
| 4 | Personal observations and dated job notes | A checked box says work happened, but not when or what was noticed | Optional timestamp and short note against a job or plant, with export/import; public journal remains an explicit editorial record | Persistence and backup contract; medium |
| 5 | Assisted photo intake | Reduces the most error-prone recurring maintenance task | Review date, plant/bed, caption and destination; produce derivatives and proposed gallery/journal entries; flag uncertain assignments | Unified photo references and release checks; medium–large |
| 6 | “Today at Oak Lodge” | Brings existing maintenance, watering and journal content together | Current month's urgent jobs, watering check priorities and latest note; links through to existing full guidance | Reuse existing data; small–medium |
| 7 | Plant life history | Connects purchases, moves, flowering and removal without rewriting the past | A chronological history on the profile using explicit journal events and retained historical location labels | Stable IDs plus historical records for removed plants; medium |
| 8 | Plant confidence and evidence queue | Makes uncertain identities easy to revisit at the right time | Filter assumed/unidentified plants; record the label or flower photograph needed; attach retained evidence | Existing confidence layer; small–medium |
| 9 | Soil, light and exposure notebook | Improves future placement and care decisions using local evidence | Authored notes for drainage, shade, wind, soil tests and pot/compost changes; distinguish measured from estimated | Brad's observations; small UI, ongoing data collection |
| 10 | Printable seasonal field sheet | Useful outside when a screen is inconvenient | Print the current month's jobs or a selected bed's essentials with readable black-and-white styling and dates | Existing jobs/profiles; small |
| 11 | Flowering and wildlife observations | Builds an Oak Lodge-specific seasonal record instead of relying only on generic windows | Date first/last bloom or an observation; optional annual view showing recorded data separately from expected behaviour | Observation model and backups; medium |
| 12 | Garden planning overlay | Helps assess additions without confusing plans with the planted garden | Explicit draft layer for candidate plants, mature spread and timing; existing layout remains authoritative | Better local conditions and sizes; medium–large |

## Product rules for the new features

**Keep the record honest.** A proposed plant, an observed event and a researched expectation are different things. Store them explicitly. Do not infer that a completed checklist item proves a planting, removal or photographed event, and do not infer exact dates from an undated note.

**Make private state portable before making it richer.** Current seasonal completion is device-local. Explain that clearly and add a downloadable backup plus validated import before storing substantial personal observations. True automatic cross-device sync would need a separate architecture decision; local storage cannot provide it.

**Keep photo ingestion reviewable.** Reuse capture dates as suggestions while handling missing/wrong timestamps. A plant move or ambiguous image should request a specific assignment during the intake workflow rather than silently changing the garden record. Register new public photo updates in the journal as required by the project.

**Let search complement the plans.** The illustrated garden remains a central navigation experience. Search should give direct access when Brad already knows the plant or job, and use stored aliases so identity refinements do not break familiarity.

**Use weather conservatively.** Weather-based watering already exists. Improve freshness, offline behaviour and explanations before adding more alerts. A forecast is useful context for a moisture check; it is not a moisture sensor. Any later frost warning should identify the forecast time, uncertainty and affected plants, and be tied to source-backed hardiness information.

## Acceptance gates

| Area | Release gate |
|---|---|
| Photo correctness | Every original/variant reference resolves; corrupt/missing images produce a readable state and retry; source changes reset state |
| Photo performance | Visible preview during enlargement; proposed routine large-image budget ≤500 KB; compare cold and warm loads under a repeatable slow-network test |
| Photo quality/privacy | Colour/orientation retained, relevant label detail readable; publicly served copies contain no GPS/device EXIF |
| Storage | Report publishable-tree size; initial target <400 MB; cleanup only after verified backups and reference review |
| Data | No duplicate IDs, orphan active references, missing watering bands or stale resolved exports; historical removed plants remain readable |
| Navigation | URLs, refresh, Back, Forward and return selections work across plan, bed, plant, calendar, journal and watering |
| Phone use | No document overflow at 360/390px; test tablet/desktop, all palettes, keyboard focus and reduced motion; physically check iPhone/Safari |
| Publishing | One deploy command; wrong branch and live locks stop safely; failed pushes can be retried; success means the expected Pages revision is live |
| Personal data | Device-local saving is explained; unavailable storage is visible; export/import round-trip preserves progress and notes |

These targets are proposed budgets, not measured improvements already achieved. Keep a before/after record for the affected screens rather than adding a large permanent test suite for every cosmetic change.

## Ideas to defer

- **Full framework migration or mandatory build system:** the present problems can be fixed within the existing architecture.
- **Accounts and automatic cloud sync:** useful only once the value of cross-device notes outweighs maintenance and privacy overhead. Start with portable backups.
- **Offline caching of the whole photo library:** too costly at the current size. If needed later, offer a clearly limited saved field guide with deliberate storage and update behaviour.
- **Automatic plant identification or autonomous care changes:** collect and display evidence; retain visible uncertainty and source-backed care.
- **Push notifications and recurring reminders:** consider only when there is a precise, useful trigger and an agreed notification preference. No reminders were created by this audit.
- **Shopping recommendations or a large plant marketplace:** lower value than understanding existing plants, observed conditions and available space.

## Suggested review decision

Adopt Releases 1–3 as the next engineering priorities. Choose global search and the photo timeline as the first user-facing feature additions, followed by portable observations if recording day-to-day progress is a priority. Review larger planning features after the reliable photo/history foundation is in use.
