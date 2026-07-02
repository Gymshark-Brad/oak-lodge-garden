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

# 1. Clear any stale git lock left behind by tooling
rm -f .git/index.lock

# 2. Make sure commits are authored with the personal identity
git config --local user.name  "Bradley Gregg"
git config --local user.email "bradg4@hotmail.com"

# 3. Remove the old duplicate prototype folder if it's still around
if git ls-files oak-lodge-garden/ | grep -q . ; then
  echo "Removing stale duplicate oak-lodge-garden/ folder..."
  git rm -r --quiet oak-lodge-garden
fi
rm -rf oak-lodge-garden 2>/dev/null || true

# 4. Stage everything
git add -A

# 5. Bail out politely if there's nothing to publish
if git diff --cached --quiet; then
  echo "Nothing to deploy — the site already matches your last commit."
  exit 0
fi

# 6. Commit (use the message you passed, or a timestamped default)
MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG"

# 7. Push — this is what makes it go live
git push origin main

echo ""
echo "✅ Deployed. Live in ~1 minute:"
echo "   https://gymshark-brad.github.io/oak-lodge-garden/"
