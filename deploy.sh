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

# 4. Stage everything. Deployment never deletes project files automatically;
#    cleanup must be an explicit, separately reviewed change.
git add -A

# 5. Bail out politely if there's nothing to publish
if git diff --cached --quiet; then
  echo "Nothing to deploy — the site already matches your last commit."
  exit 0
fi

# 6. Reject source-camera formats and unexpectedly large new files before a
#    commit can be created. Existing tracked originals are unaffected.
MAX_NEW_FILE_BYTES=$((12 * 1024 * 1024))
while IFS= read -r -d '' path; do
  case "$path" in
    *.heic|*.HEIC|*.heif|*.HEIF|*.dng|*.DNG|*.cr2|*.CR2|*.nef|*.NEF|*.arw|*.ARW|*.psd|*.PSD|*.tif|*.TIF|*.tiff|*.TIFF)
      echo ""
      echo "Deployment stopped: unexpected raw/source image: $path"
      echo "Convert it to JPEG or WebP and keep the camera original in the external photo archive."
      exit 1
      ;;
  esac

  if [ -f "$path" ]; then
    file_bytes=$(wc -c < "$path" | tr -d ' ')
    if [ "$file_bytes" -gt "$MAX_NEW_FILE_BYTES" ]; then
      echo ""
      echo "Deployment stopped: new file exceeds the 12 MiB safety limit: $path"
      echo "Size: $((file_bytes / 1024 / 1024)) MiB. Compress it or review the asset deliberately."
      exit 1
    fi
  fi
done < <(git diff --cached --name-only --diff-filter=AM -z)

echo ""
echo "Staged deployment summary"
git status --short
echo ""
git diff --cached --stat
echo ""
echo "Staged file sizes"
while IFS= read -r -d '' path; do
  if [ -f "$path" ]; then
    file_bytes=$(wc -c < "$path" | tr -d ' ')
    printf "%8d KiB  %s\n" "$(((file_bytes + 1023) / 1024))" "$path"
  fi
done < <(git diff --cached --name-only --diff-filter=AM -z)

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
