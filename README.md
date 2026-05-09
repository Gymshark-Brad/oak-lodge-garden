# Oak Lodge Garden

Interactive garden plan for Oak Lodge, Bromsgrove.

## Structure

```
oak-lodge-garden/
  index.html          # Main application
  data/
    plants.json       # Plant care database (36 plants)
  images/
    garden-plan.jpg   # Original hand-drawn plan
    may-2026/         # Monthly photo folder
      bed1.jpg
      bed1-close1.jpg
      bed1-close2.jpg
      bed2-1.jpg
      bed2-2.jpg
      bed2-kitchen.jpg
      bed2-steps.jpg
      bed2-south1.jpg
      bed2-south2.jpg
      bed3.jpg
      bed3-detail.jpg
      bed4.jpg
      bed4-wide.jpg
      stone-bed.jpg
      stone-bed-wide.jpg
      stone-bed-detail1.jpg
      stone-bed-detail2.jpg
      steps.jpg
      patio.jpg
      patio-door.jpg
      patio-clematis.jpg
```

## Adding monthly photos

1. Create a new folder: `images/jun-2026/`
2. Add photos using the same naming convention
3. Update the `PHOTOS` object in `index.html` to include the new paths

## Hosting

Hosted via GitHub Pages. Enable in repo Settings > Pages > Source: main branch.

Site will be available at: `https://<username>.github.io/oak-lodge-garden/`
