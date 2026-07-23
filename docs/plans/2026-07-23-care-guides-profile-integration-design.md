# Profile-led watering and seasonal guides

## Decision

The researched plant profile is the source of truth for plant-specific facts:

- stable identity and display name
- flowering months
- too-dry and too-wet symptoms
- four seasonal care notes
- planting or move history
- safety cautions

The watering guide retains Oak Lodge's five check-priority bands and shared-container observations. The seasonal calendar retains its curated month-specific highlights and jobs. This hybrid keeps local timing and the journal voice without duplicating researched plant care.

## Watering flow

`watering-data.js` builds a stable-ID band index when data loads. The watering guide walks `PLANT_BY_ID`, reads the band from that index, and reads individual moisture symptoms and establishment history from the profile. Shared pots continue to use one container-level symptom because they are watered as a unit.

The name-keyed watering objects remain temporarily available for compatibility, but their individual ground-plant symptoms are refreshed from profiles so they cannot contradict the plant page.

## Seasonal flow

The existing monthly page remains concise:

- curated highlights can include flowers, fruit, foliage and winter structure
- curated tasks keep an exact month and Oak Lodge wording
- flowering months add a compact, automatically complete “also flowering” list
- every profile contributes its current-season note to a browsable area-by-area reference
- profile cautions appear with those seasonal notes

Spring covers March–May, summer June–August, autumn September–November and winter December–February. Seasonal notes are references rather than automatically scheduled monthly jobs.

## Validation

Data checks must confirm that every active plant has:

- one researched profile
- one stable-ID watering band
- both moisture symptoms
- four seasonal notes
- valid calendar links

The browser smoke check covers the watering page, calendar month switching, profile links, filters, expandable seasonal groups and all five palettes.
