# Oak Lodge Garden -- Design Handoff Brief

## What this is

An interactive garden journal for Oak Lodge, a private home in Bromsgrove. The owner (Brad) wants to document and track his garden over time -- plant inventory, monthly photos, care information, and a visual plan of the layout. This is a personal project, not commercial.

**Live site:** https://gymshark-brad.github.io/oak-lodge-garden/
**GitHub repo:** https://github.com/Gymshark-Brad/oak-lodge-garden
**Hosted via:** GitHub Pages (public repo, free hosting)

---

## Current state

The prototype is a single HTML file (~38KB) with all data embedded as JavaScript objects. It works, but it was built for function over form. The design needs elevating.

### What's built and working

- **Garden plan SVG** -- a top-down map of the entire garden with clickable zones (7 planting areas + 3 hardscape areas)
- **Bed detail view** -- click a zone to see its description, an SVG plant map showing approximate positions, a clickable plant list, and a photo gallery
- **Plant care cards** -- click any plant (on the map or in the list) to see its Latin name, light, watering, care, and seasonal information
- **Photo gallery with lightbox** -- 22 photos from May 2026, organised by zone
- **Three-level navigation** -- Garden Plan > Bed Detail > Plant Card, with back buttons at each level
- **Growth timeline placeholder** -- ready for monthly photo additions

### What's not built yet

- Monthly timeline comparison (side-by-side or slider showing the same bed across months)
- Search or filter across all plants
- Seasonal calendar view (what's flowering when, what needs doing each month)
- Any kind of notifications or reminders
- Print-friendly view

---

## File structure

```
oak-lodge-garden/
  index.html                    # Everything lives here for now
  README.md
  data/
    plants.json                 # 36 plants, full care data (also embedded in HTML)
  images/
    garden-plan.jpg             # Original hand-drawn plan scan
    may-2026/                   # Monthly photo folders
      bed1.jpg                  # Bed 1 -- overview from paving
      bed1-close1.jpg           # Bed 1 -- close-up of Japanese Maple area
      bed1-close2.jpg           # Bed 1 -- close-up of front planting
      bed2-1.jpg                # Bed 2 -- overview angle 1
      bed2-2.jpg                # Bed 2 -- overview angle 2
      bed2-kitchen.jpg          # Bed 2 -- from patio kitchen looking left
      bed2-steps.jpg            # Bed 2 -- from steps looking up at blossom tree
      bed2-south1.jpg           # Bed 2 -- from garden floor, south angle 1
      bed2-south2.jpg           # Bed 2 -- from garden floor, south angle 2
      bed3.jpg                  # Bed 3 -- overview with apple tree and avens
      bed3-detail.jpg           # Bed 3 -- detail from lower paving
      bed4.jpg                  # Bed 4 -- overview with wisteria
      bed4-wide.jpg             # Bed 4 -- wider angle showing circular paving
      stone-bed.jpg             # Stone Bed -- overview
      stone-bed-wide.jpg        # Stone Bed -- wide angle from patio
      stone-bed-detail1.jpg     # Stone Bed -- detail with dark Phormium, houseleeks
      stone-bed-detail2.jpg     # Stone Bed -- detail with Cordyline 'Red Star'
      steps.jpg                 # Steps -- connecting upper and lower levels
      patio.jpg                 # Patio -- main decking area
      patio-door.jpg            # Patio -- view towards house doors
      patio-clematis.jpg        # Patio -- mature Clematis montana on house wall
```

Monthly photos go in new folders: `images/jun-2026/`, `images/jul-2026/`, etc.

---

## The garden layout

The garden is roughly 15m wide and 10m deep behind a Victorian brick house. It has two levels connected by stone steps.

### Upper level (north, by the gate)
- **Flower Bed 1** (2.6m x 2.6m) -- raised timber-edged bed, corner by the gate. Dominated by a Japanese Maple.
- **Pear Tree** -- mature fruit tree on the upper terrace near Bed 1.
- **Flower Bed 4** (2m x 3.8m) -- mirrored L-shape along the right boundary wall. Wisteria over the wall.
- **Paved terrace** -- block paving connecting gate to steps.

### Transition
- **Steps** (~3m x 3m) -- block paving with brick edging, several levels.
- **Flower Bed 3** (0.8m x 0.8m) -- compact bed at the junction of steps and stone bed. Apple tree with bird feeders.

### Lower level (south, by the house)
- **Flower Bed 2** -- T-shaped bed along the left boundary between brick walls. Weeping cherry, dogwood, peony.
- **Stone Bed** (~4.8m x 1m) -- narrow gravel bed along the decking edge. Cordyline, houseleeks, aubrieta.
- **Patio** (~6m x 3m) -- composite decking. Clematis montana on the house wall (left side).
- **Patio Kitchen** (1.6m x 1.4m) -- sheltered outdoor kitchen between the walls.
- **Patio Lounge** (~3m x 1.4m) -- lower seating connecting kitchen to patio.

### SVG coordinates (if rebuilding the plan)

Scale: ~50px = 1m, viewBox 820x620

| Zone | Shape | Coordinates | Colour |
|------|-------|-------------|--------|
| Bed 1 | rect | x=75 y=38 w=130 h=130 | #8b5e3c |
| Bed 2 | polygon (T-shape) | 30,250 130,250 130,335 300,335 300,395 130,395 130,475 30,475 | #6b8e4e |
| Bed 3 | rect | x=490 y=255 w=40 h=40 | #c7a54a |
| Bed 4 | polygon (mirrored L) | 715,55 765,55 765,255 585,255 585,175 715,175 | #8e6fbf |
| Stone Bed | rect | x=530 y=267 w=225 h=48 | #7a8f9a |
| Steps | rect | x=300 y=260 w=185 h=150 | #6e6e5e |
| Patio | rect | x=488 y=318 w=277 h=155 | #8a7e6b |
| Kitchen | rect | x=175 y=400 w=105 h=70 | #5c6b54 |
| Lounge | rect | x=283 y=413 w=200 h=60 | #5c6b54 |
| Pear Tree | circle | cx=480 cy=65 r=32 | #3a6830 |
| House | rect | x=25 y=478 w=750 h=95 | #5c4a3a |
| Doors | rect at y=478 | x=205 w=50, x=400 w=70 | #d4a373 |

---

## Plant inventory -- 36 plants across 7 zones

### Bed 1 (9 plants)
| Plant | Latin name | Position in bed |
|-------|-----------|-----------------|
| Japanese Maple | Acer palmatum | Back centre, dominant canopy |
| Japanese Aralia | Fatsia japonica 'Spider's Web' | Mid-centre, under the Acer |
| Rhododendron | Rhododendron 'Goldflimmer' | Mid-left, variegated evergreen |
| Astilbe | Astilbe | Right side, feathery plumes in summer |
| Hosta | Hosta | Front-left, green/white variegation |
| Angel Wings | Senecio candicans | Front-centre, silvery-white leaves |
| Box Hedging | Buxus sempervirens | Full right edge, clipped |
| Euonymus | Euonymus fortunei (golden) | Front-left corner |
| English Daisy | Bellis perennis | Front-centre, pink pom-poms |

### Bed 2 (10 plants)
| Plant | Latin name | Position in bed |
|-------|-----------|-----------------|
| Weeping Cherry | Prunus species | Upper section, overhanging wall |
| Variegated Dogwood | Cornus alba | Upper section, red winter stems |
| Peony | Paeonia lactiflora | Lower section |
| Weigela | Weigela florida | Mid section |
| Silverbush | Convolvulus cneorum | Mid-right, silvery foliage |
| Hosta | Hosta | Lower, front-left |
| Angel Wings | Senecio candicans | Lower, front |
| Forget-me-not | Myosotis | Lower, small blue flowers |
| Maiden Pink | Dianthus deltoides | Between walls, pink flowers |
| Nemesia | Nemesia spp. | Between walls, orange/coral |

### Bed 3 (3 plants)
| Plant | Latin name | Position |
|-------|-----------|----------|
| Apple Tree | Malus domestica | Centre, with bird feeders |
| Avens | Geum | Front-left, orange flowers |
| Wintercreeper | Euonymus fortunei | Front-right, variegated evergreen |

### Bed 4 (5 plants)
| Plant | Latin name | Position |
|-------|-----------|----------|
| Wisteria | Wisteria spp. | Top, cascading over wall |
| New Zealand Flax | Phormium | Upper-mid, sword-shaped leaves |
| Rose | Rosa | Mid, on trellis/support |
| Yucca | Yucca filamentosa | Lower-left, spiky architectural |
| Lavender | Lavandula angustifolia | Right, grey-green foliage |

### Stone Bed (7 plants)
| Plant | Latin name | Position (left to right) |
|-------|-----------|--------------------------|
| Aubrieta | Aubrieta deltoidea | Left end, purple spring flowers |
| Houseleeks | Sempervivum | Left-centre, rosettes in gravel |
| Stonecrop | Sedum (trailing) | Centre-left |
| New Zealand Flax (dark) | Phormium 'Platt's Black' | Centre, dark burgundy spikes |
| Rosemary | Salvia rosmarinus | Centre-right, grey-green needles |
| Cabbage Tree | Cordyline australis | Right, large palm-like tree |
| Honeysuckle | Lonicera | Far right |

### Patio (1 plant)
| Plant | Latin name | Position |
|-------|-----------|----------|
| Clematis | Clematis montana | Left side of house wall, mature woody stems |

### Tree (1 plant)
| Plant | Latin name | Position |
|-------|-----------|----------|
| Pear Tree | Pyrus | Upper terrace, near gate, adjacent to Bed 1 |

Full care data (light, watering, care, seasonal changes) for every plant is in `data/plants.json` and also embedded in the HTML's PLANTS object.

---

## Current design tokens

These were chosen quickly for the prototype. Feel free to replace entirely.

```css
:root {
  --bg: #141a10;        /* Dark olive-green background */
  --card: #1c2316;      /* Slightly lighter card surfaces */
  --border: #2e3628;    /* Subtle green-grey borders */
  --text: #e4e0d6;      /* Warm cream text */
  --muted: #8e8a7e;     /* Grey-brown secondary text */
  --green: #7cb342;     /* Primary accent, lime green */
  --warm: #d4a373;      /* Secondary accent, warm terracotta */
}
```

**Fonts:** DM Serif Display (headings), DM Sans (body), loaded from Google Fonts.

**Zone colours:**
- Bed 1: #8b5e3c (earth brown)
- Bed 2: #6b8e4e (garden green)
- Bed 3: #c7a54a (golden amber)
- Bed 4: #8e6fbf (soft purple)
- Stone Bed: #7a8f9a (blue-grey)
- Steps: #6e6e5e (neutral grey)
- Patio: #8a7e6b (warm taupe)
- Kitchen/Lounge: #5c6b54 (muted green)
- Pear Tree: #3a6830 (deep green)

---

## Design direction and intent

This is a personal, living document -- not a magazine or portfolio piece. It should feel like a **well-organised garden notebook**, not a corporate dashboard or a slick startup landing page.

**Key qualities:**
- Warm, earthy, grounded -- it's about soil and seasons, not tech
- Easy to update -- Brad will add photos monthly, he's not an engineer
- Works on mobile -- he'll check it from the garden on his phone
- Celebrates the photographs -- the photos are the heart of it
- Calm, not busy -- a garden is a place of rest

**Interactions should feel natural:**
- Tapping a bed on the plan feels like pointing at a real garden map
- Plant maps should feel like overhead views of the actual planting
- Scrolling through monthly photos should feel like flipping through a journal
- Plant care cards should feel like helpful reference cards, not data tables

**What to avoid:**
- Overly techy UI patterns (search bars, filters, hamburger menus)
- Generic dashboard aesthetics
- Stock photography or illustrations -- the real photos are the content
- Anything that makes updating feel like work

---

## Data architecture

Everything currently lives in two JS objects at the top of `index.html`:

```javascript
const PHOTOS = {
  bed1: ["images/may-2026/bed1.jpg", ...],
  bed2: ["images/may-2026/bed2-1.jpg", ...],
  // ...
};

const PLANTS = {
  "Bed 1": [
    {
      name: "Japanese Maple",
      latin: "Acer palmatum",
      light: "Dappled shade to partial sun.",
      water: "Keep soil consistently moist but not waterlogged.",
      care: "Slightly acidic, well-drained loam.",
      seasonal: "Requires minimal pruning..."
    },
    // ...
  ],
  // ...
};

const ZONES = {
  bed1: {
    title: "Flower Bed 1",
    badge: "Raised Bed",
    color: "#8b5e3c",
    dims: ["2.6m x 2.6m", "Corner bed by gate"],
    desc: "Raised timber-edged bed...",
    plantKey: "Bed 1"  // Links to PLANTS object
  },
  // ...
};
```

The plant maps are JS functions (`BED_MAPS`) that return SVG strings using a helper function `mkSvgPlant()`.

**If you refactor this:**
- `plants.json` already exists in `data/` as a standalone file
- The PHOTOS object could become a JSON file too
- The SVG plant maps could be standalone SVG files or components
- The ZONES metadata could go in its own JSON

The monthly update workflow is: drop new photos in a folder, add their paths to the PHOTOS object (or JSON), commit and push. Keep this simple.

---

## Monthly update workflow (must remain simple)

1. Take photos at end of month
2. Export from Apple Photos as JPG (or WebP via CoWork automation)
3. Place in `images/[month]-[year]/` folder
4. Add the new paths to the PHOTOS data
5. `git add . && git commit -m "June 2026 photos" && git push`
6. Site updates in ~60 seconds via GitHub Pages

**Planned automation (not built yet):**
- CoWork watches a folder on Mac, auto-converts HEIC to WebP
- Claude Code handles the git commit and push
- Brad's total effort: drag photos into a folder

---

## What needs design attention

### Priority 1 -- Visual polish
- The garden plan SVG needs to look beautiful, not just functional
- Plant maps per bed feel rough -- they're coloured blobs with text
- Photo galleries are basic grids -- they could feel more like a journal
- Plant care cards are functional but plain -- they could have more character
- The colour palette works but wasn't designed with much intention
- Typography is fine but could be more considered

### Priority 2 -- Monthly timeline
- A way to view the same bed across months (comparison slider, carousel, or grid)
- Date filtering or month selector
- Visual indication of seasonal changes

### Priority 3 -- Interactions and feel
- Transitions between views (plan > bed > plant) feel abrupt
- The lightbox is minimal -- could be a proper photo viewer with swipe
- Mobile experience needs attention (touch targets, swipe gestures)
- Maybe an intro animation or seasonal theme that changes with the month

### Priority 4 -- Future features
- Search across all plants
- Seasonal calendar (what's flowering when, what care is needed)
- Notes per bed per month ("planted the nemesia this month", "box hedging needs clipping")
- Weather data integration for Bromsgrove

---

## Technical constraints

- **Hosting:** GitHub Pages (static files only, no server-side anything)
- **Build:** None currently. If you introduce one (Vite, Astro, etc.) it must be simple enough for a non-engineer to run, or automated via CI
- **Images:** Currently JPG, ~250-330KB each at 675x1200px. Could move to WebP for smaller files
- **Total project size:** Currently 6.1MB (mostly images). Will grow ~5-6MB per month as photos are added
- **Browser support:** Modern browsers only, no IE. Must work on Safari (iPhone), Chrome (desktop)
- **Performance:** Lazy loading on images already in place. As the photo library grows, some form of pagination or virtualisation may be needed
- **Offline:** Not required but would be a nice-to-have for checking in the garden

---

## Files included in this handoff

| File | Purpose |
|------|---------|
| `index.html` | The complete working prototype |
| `data/plants.json` | All 36 plants with full care data |
| `images/garden-plan.jpg` | Scan of original hand-drawn garden plan |
| `images/may-2026/*.jpg` | 22 photos from May 2026 |
| `Oak_Lodge_Garden_Plant_Guide.xlsx` | Spreadsheet version of all plant data |
| This document | Design brief and handoff notes |
