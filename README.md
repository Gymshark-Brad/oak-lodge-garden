# Oak Lodge Garden

Personal interactive garden journal for Oak Lodge, Bromsgrove. The static React site documents the garden layout, its plant inventory, care guidance, seasonal work and monthly photographs.

**Live site:** https://gymshark-brad.github.io/oak-lodge-garden/

## Data and exports

`data.js` is the single source of truth for zones, plants, maps and photo galleries. The current inventory contains 158 active plant records across 31 plant groups.

Regenerate the standalone inventory copies after changing plant data:

```bash
./generate-plant-exports.py
```

This rewrites:

- `data/plants.json`
- `Oak_Lodge_Garden_Plant_Guide.xlsx`

Generate display thumbnails after adding or changing referenced photographs:

```bash
python3 generate-thumbnails.py
```

## Validation and deployment

Run the read-only relationship audit at any time:

```bash
./audit-data.js "$PWD"
```

Deployment remains one command:

```bash
./deploy.sh "short description of the change"
```

The deployment script runs the audit, stages the change, blocks unexpected raw or oversized new files, shows the staged summary, checks whether the garden journal needs updating, then commits and pushes to GitHub Pages.

The application deliberately has no npm or build step. React and Babel are loaded as browser scripts, and all project data is stored in static JavaScript files.
