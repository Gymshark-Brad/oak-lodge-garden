# Seasonal calendar review — 21 September 2026

## Result and scope

All twelve months were reviewed against the assembled live inventory, the existing reviewed plant-care layer, and targeted authoritative horticultural guidance. The calendar now presents category jobs, named plant instructions and a bed-by-bed round. Both views share the same task records and completion state. Only locations with relevant work appear; this is not a monthly checklist for every plant.

The eight categories are pruning/training, deadheading/cutting back, removing finished plants, pot/basket refresh, planting/moving/dividing, mulching/feeding, frost/winter protection and checks/clearing/harvest. Urgency remains visible within each category. Tools, steps, retained growth, removal targets, mistakes, completion criteria and sources are available in each how-to. Ten original labelled SVG schematics have equivalent written instructions, with keyboard-accessible horizontal scrolling on narrow screens.

The operating assumptions are **outdoor shelter only**, **keep healthy plants where practical**, and **use weather/growth cues rather than calendar dates alone**. No work is recorded as having happened. No inventory, identification, photograph, export or journal data was changed.

## Content corrections

| Period | Review and corrections |
|---|---|
| January | Retained restrained apple/pear pruning and the explicit no-winter-pruning advice for cherry/damson. Winter checks now acknowledge that frost-free storage is not available by default. Added the winter Viola/Pansy round. |
| February | Separated standard climbing-rose pruning from Super Fairy's repeat-rambler treatment and unidentified roses. Added explicit plant methods for shared fruit-tree work and illustrations for Wisteria, clematis, renewal cuts and panicle Hydrangea. |
| March | Included both Bed 3 Spiraeas. Added conservative unidentified-shrub advice, selective Abelia work, distinct mophead Hydrangea care and perennial-pot checks. Specified mulch depth and bed-specific crown exceptions. Moved Euphorbia's routine spent-stem removal to after flowering. |
| April | Spring frost and damage advice distinguishes plant types and current locations. Added the big-pot Fuchsias' wait-for-live-buds pruning. Included all relevant Pieris in flower-head tidying. |
| May | Summer container refresh now preserves living plants and fills genuine gaps. Added conditional Viburnum and groundcover trims. Kept Montana's post-flowering pruning separate from the front viticella's late-winter cut. |
| June | Replaced forced Alstroemeria stem pulling in the shared pot with a conservative cut-at-base method. Added climbing Hydrangea work after flowering and post-flowering Euphorbia work, with sap precautions. Differentiated each perennial's deadheading method. |
| July | Honeysuckle advice now retains active flowers rather than assuming its display has finished. Added Snowflake's old-wood caution. Retained dry-weather, minimal stone-fruit work and plant-specific summer deadheading. |
| August | The Hellebore job now maintains the established plant instead of implying its pot needs emptying. Fruit advice distinguishes firm harvest-stage pears, apples, damsons and ornamental crab apples. Corrected stale bed highlights. |
| September | Tender-plant plans and cuttings require a realistic winter home; outdoor cuttings are not guaranteed insurance. Added conditional division, winter display care and Basket 3's distinct plant instructions. Kept recently moved Astrantia undisturbed unless later established and congested. |
| October | Included Tampico in Dahlia protection. Made the outdoor-versus-frost-free tradeoff explicit for Dahlias, Echeverias, Rubrum, Begonia and container Alstroemeria. Front Pot clearing is selective. Added uncertain-hardiness Fuchsia/fern checks and continued winter display care. |
| November | Protection checks no longer presume plants were stored. Hardy houseleeks, dormant Hosta, Calluna and borderline plants receive different instructions. Retained useful seedheads and healthy basal growth. |
| December | Retained measured dormant-fruit work and access checks; winter accommodation remains conditional. The same plant-specific protection limits carry through the year. |

Alstroemeria's first-season/shared-root exception, Euphorbia's post-flowering timing, rose classification, Hydrangea flowering wood and the limits of outdoor winter protection were checked particularly closely. Display names and locations are resolved from stable IDs, including IDs whose historical names still refer to former beds.

## Sources and remaining uncertainty

The following RHS guidance was consulted directly for the relevant corrections and techniques:

- [Wisteria pruning](https://www.rhs.org.uk/plants/wisteria/pruning-guide)
- [Climbing-rose pruning](https://www.rhs.org.uk/plants/roses/climbing/pruning-guide) and [Super Fairy](https://www.rhs.org.uk/plants/136423/rosa-super-fairy-helsufair-pbr-ra/details)
- [Hydrangea pruning](https://www.rhs.org.uk/plants/hydrangea/pruning-guide)
- [Clematis pruning](https://www.rhs.org.uk/plants/clematis/pruning-guide), including [group three](https://www.rhs.org.uk/plants/clematis/group-three-pruning-guide)
- [Alstroemeria care](https://www.rhs.org.uk/plants/alstroemeria/growing-guide) and [Dahlia care](https://www.rhs.org.uk/plants/dahlia/growing-guide)
- [Garden Euphorbias](https://www.rhs.org.uk/plants/euphorbia/growing-guide)
- [Fleece and crop covers](https://www.rhs.org.uk/prevention-protection/fleece-and-crop-covers)
- [Mulching](https://www.rhs.org.uk/soil-composts-mulches/mulch), [deadheading](https://www.rhs.org.uk/garden-jobs/deadheading-plants) and [dividing perennials](https://www.rhs.org.uk/plants/types/perennials/dividing)

Existing plant-profile references are retained alongside these technique sources. This is a content and reference-integrity review, not a fresh photographic identification of every plant or certification of every historical external URL. All assumed qualifications remain. The inherited roses, Buddleja, moved Fuchsia and fern, Basket 3's Cyclamen/Chrysanthemum and the front mixed pots still require identification evidence for more precise instructions. No weather service or automatic frost forecast was added.

The inventory remains the authority for what is currently present. The advice is recurring maintenance of that inventory; it must not be mistaken for the historical garden state in January–August 2026.

## Implementation and checks

- `seasonal-data.js` holds explicit jobs, plant notes, optional location notes and source references. `seasonal-guides.js` holds category/technique definitions and diagram captions. No botanical prose is generated from plant-name matching at runtime.
- Existing IDs remain for unchanged actions. Materially changed work has new IDs, so an old completion cannot silently mark a new action done. Removed old keys may remain harmlessly in local storage. A shared job is counted once and should be ticked only after all its locations are complete.
- `calendarMonth` is retained by the app while full-page plant profiles are open. The explicit calendar return flag is unchanged.
- The data audit checks all shared plant notes, source and diagram references, current plant/zone links and existing special Bed 5 container scopes. It no longer forces six jobs per month, one job per pot or a blanket ban on the word “water”. Routine watering remains in its own guide; necessary planting aftercare is allowed.
- The full data audit passed: **181 unique plants, 602 thumbnails, all references resolved**. Read-only export verification confirmed **all 181 plant records remain unchanged**. No export regeneration was needed.
- Browser regression checks cover all twelve months in all five palettes, all ten diagrams, correct per-bed plant filtering, shared completion counts, persistence and reset, previous-year isolation, profile return, keyboard month navigation, jump focus, unavailable storage and narrow-screen overflow, including expanded how-to panels.
- Screenshots were inspected for desktop and mobile layout and diagram legibility. There is no new production dependency, build step, server or module loader.

### Running the checks

Run `osascript -l JavaScript audit-data.js .` from the repository root. The optional `tests/seasonal-calendar.cjs` suite uses **existing** Node/Playwright tooling with a local static preview at `http://127.0.0.1:8765`. `PLAYWRIGHT_MODULE_PATH`, `PLAYWRIGHT_EXECUTABLE_PATH` and `CALENDAR_TEST_URL` can point to an existing runtime/browser/preview; do not add npm installation or a build step to the site. Browser screenshots are written to the system temporary directory.

Deployment remains Brad's normal `./deploy.sh "Improve the seasonal calendar"` workflow. Answer **no** at the garden-journal checkpoint for this guidance/UI-only change.
