# Oak Lodge Garden — Management Summary

Quick reference for how this site is managed and deployed.

## The site
- **Live:** https://gymshark-brad.github.io/oak-lodge-garden/
- **Repo:** https://github.com/Gymshark-Brad/oak-lodge-garden
- **What it is:** Personal interactive garden journal. Static site on GitHub Pages — React 18 + Babel standalone, no build step, no npm. `data.js` is the single source of truth. Full context lives in `CLAUDE.md`.

## How deploying works
Deploying = pushing to `main`. GitHub Pages rebuilds automatically (~1 min). No CI, no build.

**One command, from the repo root:**
```bash
./deploy.sh "short description of the change"
```
It stages all changes, commits (as `Bradley Gregg <bradg4@hotmail.com>`, repo-local only), and pushes to `origin main`. Run with no message for a timestamped default. If you ever hit "permission denied," use `bash deploy.sh "message"`.

## Who runs the push
- **In Claude Code (local):** Claude can run `./deploy.sh` directly — the SSH key and network are on your machine.
- **In Cowork/Claude desktop:** Claude edits the files in the repo, then hands you the `./deploy.sh "…"` line to run in Terminal (its sandbox has no GitHub access, so the push must happen on your Mac).

## Changes made setting this up (publish with your next `./deploy.sh`)
- Switched commit identity from your work email to personal (`bradg4@hotmail.com`) — repo-local only.
- Added `deploy.sh` (the one-command deploy above).
- Removed the stale duplicate `oak-lodge-garden/` subfolder (old May prototype, 104 files).
- Cleared a leftover git lock file (handled automatically by `deploy.sh`).
- Documented the deploy workflow in `CLAUDE.md`.

## Monthly photo workflow (reminder)
1. Photos → `iCloud Drive > Documents > Personal > OperationDodford > Garden > Incoming Photos`
2. Automation converts to WebP and files them under `images/[mon]-[year]/`
3. Manual step: update `PHOTOS_BY_MONTH` in `data.js` with the new paths
4. Deploy with `./deploy.sh "add [month] photos"`

## Starting a new session
Paste the kickoff block from `CLAUDE.md` (bottom section) or the Claude Code handoff, then fill in "Today I want to: …".
