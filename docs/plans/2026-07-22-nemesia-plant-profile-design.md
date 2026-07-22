# Nemesia Plant Profile Prototype

## Purpose

Replace the shallow, generated plant summary with one genuinely useful plant profile before rebuilding the full plant database. The prototype plant is Nemesia ‘Aroma Heart of Gold’ in Flower Bed 1.

The profile must work simultaneously as:

- a practical garden guide;
- a trustworthy plant reference; and
- an Oak Lodge journal entry.

## Experience

The plant opens as a full-page journal leaf, not a modal. A clear return control takes the reader back to the view from which the plant was opened. The layout is one continuous, layered page: useful facts appear first, while deeper reference and journal material follows naturally.

The visual language remains Oak Lodge’s paper-and-ink notebook: textured paper, botanical typography, stamps, ruled dividers, taped photographs and restrained seasonal colour. It must work in all five palettes and stack cleanly on mobile.

## Information hierarchy

1. **Specimen header** — current Oak Lodge photograph, common and botanical names, plant type, fragrance, garden location and planting date.
2. **Descriptive introduction** — specific appearance, scent, habit and flowering character, without generic template copy.
3. **At a glance** — flowering months, mature size, light, soil moisture, hardiness and fragrance in plain language.
4. **Keeping it happy** — watering, feeding, trimming and overwintering advice, including observable under- and overwatering signs.
5. **Through the year** — only genuine seasonal actions and expectations.
6. **What to watch for** — recognisable symptoms, likely causes and corrective actions.
7. **About the plant** — cultivar-specific botanical and breeding context.
8. **At Oak Lodge** — exact position, date added, local observations and photo journal.
9. **Sources and confidence** — compact links that distinguish researched cultivar facts from garden observations.

## Data approach

Nemesia receives a new authored `profile` object alongside the existing fields. The profile page is selected only when that object exists; all other plants continue to use the existing PlantCard. This avoids inventing rich information for records that have not yet been researched and establishes the schema for the later database rebuild.

## Verified sources

- Royal Horticultural Society cultivar profile: cultivation, habit, flowering, hardiness, pests, disease and botanical details.
- Brookside Nursery cultivar listing: UK breeding attribution, compact size and cultivar colour description.
- Oak Lodge records: location, planting date, photographs and observed appearance.

## Acceptance criteria

- Nemesia opens as a responsive full page from Bed 1, the seasonal calendar and watering guide.
- Back navigation returns to the correct originating view.
- Other plants still open in the existing modal card.
- No generic profile prose is shown for Nemesia.
- Information remains readable in Spring, Summer, Autumn, Winter and Night palettes.
- Missing images fall back safely, source links are external and accessible, and reduced-motion preferences are respected.
