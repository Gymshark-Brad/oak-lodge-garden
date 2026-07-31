#!/usr/bin/env bash
#
# Oak Lodge Garden — one-command deploy
# ------------------------------------------------------------------
# Usage:
#   ./deploy.sh "your commit message"
#   ./deploy.sh                 # uses a timestamped message
#
# What it does: stages every change, commits it, and pushes to GitHub.
# GitHub Pages rebuilds automatically — the live site updates in ~1 min.
# ------------------------------------------------------------------
set -euo pipefail

# Always run from the repo root (the folder this script lives in)
cd "$(dirname "$0")"

# 1. Refuse to deploy broken plant, map, watering or seasonal references
./audit-data.js "$PWD"

# 2. Clear any stale git lock left behind by tooling
rm -f .git/index.lock

# 3. Make sure commits are authored with the personal identity
git config --local user.name  "Bradley Gregg"
git config --local user.email "bradg4@hotmail.com"

# 4. Remove the old duplicate prototype folder if it's still around
if git ls-files oak-lodge-garden/ | grep -q . ; then
  echo "Removing stale duplicate oak-lodge-garden/ folder..."
  git rm -r --quiet oak-lodge-garden
fi
rm -rf oak-lodge-garden 2>/dev/null || true

# 5. Stage everything
git add -A

# 6. Bail out politely if there's nothing to publish
if git diff --cached --quiet; then
  echo "Nothing to deploy — the site already matches your last commit."
  exit 0
fi

# 7. Every release must consider the public garden journal. Technical-only
#    releases can continue, but real garden, identification or photo changes
#    must include an explicit journal-data.js update in the same commit.
echo ""
echo "Garden journal checkpoint"
echo "Does this release include real garden changes, plant identifications,"
printf "or new plant/garden photographs? [y/N] "
read -r JOURNAL_WORTHY
case "${JOURNAL_WORTHY:-n}" in
  y|Y|yes|YES|Yes)
    if ! git diff --cached --name-only -- journal-data.js | grep -qx "journal-data.js"; then
      echo ""
      echo "Deployment stopped: update journal-data.js for this garden-content release."
      echo "Record the month, event and selected photographs, then run deploy again."
      exit 1
    fi
    echo "Journal update found — continuing."
    ;;
  n|N|no|NO|No|"")
    echo "Marked as a technical or site-administration release."
    ;;
  *)
    echo "Please answer y or n. Deployment stopped without committing."
    exit 1
    ;;
esac

# 8. Commit (use the message you passed, or a timestamped default)
MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG"

# 9. Push — this is what makes it go live
git push origin main

echo ""
echo "✅ Deployed. Live in ~1 minute:"
echo "   https://gymshark-brad.github.io/oak-lodge-garden/"
