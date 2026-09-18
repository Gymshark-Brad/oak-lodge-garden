# Plant records and care audit — 18 September 2026

Reviewed the assembled website inventory: **181 active plant records in 39 groups**, including six houseplants. This is a content correction, not a new planting or identification event; no garden-history entries were created or rewritten. Changes are local and require the normal deployment step.

## Findings and corrections

| Area | Finding | Result |
| --- | --- | --- |
| Duplicate inventory | No duplicate stable IDs or same-group plant names | All 181 records and their IDs retained |
| Keeping it happy | 161 records in 15 groups shared complete care guides; broad shrub/perennial templates gave inappropriate advice | 162 guides rewritten with botanical care and individual specimen actions; 19 existing detailed guides retained |
| At a glance | Four pairs shared entire fact sets; September records contained placeholder explanations | All 181 fact sets updated with individual care priorities; water, size, light, soil, hardiness and display corrected where needed |
| Descriptions | Conflicting identities, generic copy and unsupported certainty | 35 profile descriptions rewritten; all legacy descriptions synchronised with profiles |
| Troubleshooting | Routine division recommended for roses, pansies, Cyclamen and other unsuitable plants | 17 problem sections corrected; plant-specific alternatives added where useful |
| Flowering | Evergreen foliage treated as twelve-month flowering; fern flowering windows | 16 flowering arrays corrected, distinguishing foliage, intermittent seasonal flowers and unresolved species |
| Sources | Several corrections needed more specific evidence | Source lists updated on 17 profiles, retaining the existing research elsewhere |
| Cross-record corruption | Big Pot 1 and Big Pot 2 Fuchsia, Nepeta and Lobelia shared nested fact arrays | Profiles detached before corrections; edits to one specimen no longer overwrite another's nested data |
| Map labels | Five stair-pot pin labels differed from their canonical plant names | Labels corrected without changing IDs or positions |
| Downloads | Export generator loaded only the base inventory and missed final identities/profiles | JSON and Excel regenerated from the website's ordered data layers; 181 matching records |

Sharing sound advice between specimens of the same plant is intentional. For example, two Fuchsias still need similar frost protection. Their local care priorities distinguish their different containers. Repeated names in separate beds or pots are not evidence of duplicate inventory. Grouped plantings also remain grouped: a record count is not a count of individual root balls.

## Important content corrections

- Skimmia care no longer prescribes ericaceous compost. Moisture, shade and drainage come first; the second Skimmia is not assumed to provide compatible pollen. [RHS Skimmia guide](https://www.rhs.org.uk/plants/skimmia/growing-guide).
- Wisteria and the different Clematis and Hydrangea types have appropriate pruning guidance instead of general shrub pruning. [RHS Wisteria](https://www.rhs.org.uk/plants/wisteria/pruning-guide), [Clematis](https://www.rhs.org.uk/plants/clematis/pruning-guide), [Hydrangea](https://www.rhs.org.uk/plants/hydrangea/pruning-guide).
- Strawberry tree, Eternal Flame Cercis and Flamingo Phormium facts use reviewed mature sizes and cultivation guidance. These are potential dimensions, not measurements of the Oak Lodge specimens. [RHS Arbutus](https://www.rhs.org.uk/plants/1473/arbutus-unedo/details), [Cercis](https://www.rhs.org.uk/plants/506839/cercis-canadensis-eternal-flame-nc2016-2/details), [Phormium](https://www.rhs.org.uk/plants/135026/phormium-tenax-flamingo/details).
- Midnight Sky Petunia is no longer automatically equated with NightSky or assigned NightSky's breeder code. The existing garden name remains while label evidence is unresolved. [Michigan State University Extension](https://msu-prod.dotcmscloud.com/news/consult-breeder-culture-sheets-for-success-with-new-cultivars).
- Ferns have foliage displays, while unidentified Cyclamen has qualified winter care and no invented annual flowering window. [RHS ferns](https://www.rhs.org.uk/plants/types/ferns/growing-guide), [RHS Cyclamen persicum comparison](https://www.rhs.org.uk/plants/101163/cyclamen-persicum-persian-cyclamen/details).
- The moved Aroma Heart of Gold Nemesia's winter advice refers to Bed 5. Basket heather seasonal advice refers to two plants, one per basket, rather than three root balls.

## Evidence still needed

Existing “assumed” names remain visibly qualified. No cultivar was promoted to confirmed through inference during this audit. In particular:

- Basket fern, Lysimachia, Chrysanthemum and Cyclamen need labels or diagnostic photographs before precise species, mature sizes or winter survival can be asserted.
- Blue stair-pot Gaultheria needs a species identification; the unnamed Front Bed 5 shrub rose still needs cultivar evidence.
- Midnight Sky needs a matching label before assigning a breeder code. Hypericum Radiance retains its label-confirmed selling name without choosing among conflicting commercial codes.
- Double Diamond and Antarctica Skimmia need better cultivar evidence for precise size, flower sex and berry expectations. Garden observations should record their flowers and fruit separately.
- Assumed cultivars elsewhere, unidentified Butterfly Bush and genus-level Agapanthus retain qualified advice. Measure actual growth and retain future labels.

Historical photo references to removed or moved specimens remain in the archive. They are not active duplicates and were not deleted. All image paths and thumbnail availability were checked; this was not a fresh visual identification of every plant in every photograph. Existing external sources were retained, with targeted live checks for the corrections above; the audit does not certify every historical external URL or every cultivar claim.

## Maintenance and validation

Corrections live in `plant-care-data.js`, after the existing cultivar layer. The new layer supplies the plant-specific care introduction rendered by `PlantProfile.jsx`, and copies reviewed content out to legacy summary fields. JSON includes the complete assembled profiles. Excel keeps its original seven columns and adds Description, At a Glance, Identity / Evidence, Sources and Stable Plant ID.

Validation completed:

- `osascript -l JavaScript audit-data.js .`: 181 unique records, profile/source coverage, maps, watering keys, seasonal/journal references and 585 image thumbnails passed.
- `python3 generate-plant-exports.py`: 181 records across 39 groups; JSON equality and spreadsheet content verified.
- Deliberate invalid-data checks confirmed rejection of duplicate inventory IDs, generic care cards, placeholder facts, a flowering fern and a stale summary description.
- Headless Chrome rendered all 181 profiles and checked their fact counts, care-card counts, titles and individual introductions against the data.
- Five seasonal palettes checked at desktop (1280px) and mobile (390px) widths using Wisteria, basket fern, Cleopatra Skimmia, stair-pot pansy and strawberry tree; no page errors or horizontal overflow. Representative screenshots visually inspected.

All local asset version strings were bumped to `20260918`. To publish, run `./deploy.sh "Audit plant descriptions, facts and care guidance"` and answer **no** at the garden-history checkpoint: these changes correct the records without recording new garden activity.
