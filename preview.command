#!/usr/bin/env bash

# Double-click this file in Finder to preview Oak Lodge Garden locally.
set -euo pipefail
cd "$(dirname "$0")"

PORT=8765
URL="http://localhost:${PORT}/"

python3 -m http.server "$PORT" &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM

sleep 1
open "$URL"

echo ""
echo "Oak Lodge Garden is available at:"
echo "  $URL"
echo ""
echo "Keep this window open while previewing."
echo "Press Control-C when you are finished."

wait "$SERVER_PID"
