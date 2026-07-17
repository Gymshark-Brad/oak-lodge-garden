#!/usr/bin/env python3
"""Generate lightweight display copies for every image referenced by data.js.

The journal keeps its existing originals for full-screen viewing. Cards and
galleries use these metadata-free WebP derivatives, with a runtime fallback to
the original if a new photo has not been processed yet.
"""

from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent
DATA_FILE = ROOT / "data.js"
THUMB_ROOT = ROOT / "images" / "thumbs"
MAX_SIZE = (360, 540)
WEBP_QUALITY = 45


def referenced_images() -> list[Path]:
    paths = re.findall(
        r"images/[^\"']+?\.(?:webp|jpe?g)",
        DATA_FILE.read_text(encoding="utf-8"),
        flags=re.IGNORECASE,
    )
    return sorted({ROOT / path for path in paths})


def thumbnail_path(source: Path) -> Path:
    relative = source.relative_to(ROOT / "images").with_suffix(".webp")
    return THUMB_ROOT / relative


def generate(source: Path, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        image.save(
            destination,
            "WEBP",
            quality=WEBP_QUALITY,
            method=6,
            exif=b"",
            icc_profile=None,
        )


def main() -> None:
    sources = referenced_images()
    missing = [source for source in sources if not source.exists()]
    if missing:
        joined = "\n".join(str(path.relative_to(ROOT)) for path in missing)
        raise SystemExit(f"Missing referenced images:\n{joined}")

    written = 0
    source_bytes = 0
    thumb_bytes = 0
    for source in sources:
        destination = thumbnail_path(source)
        source_bytes += source.stat().st_size
        # Always rewrite: the size/quality recipe may have changed even when
        # the source photograph has not.
        generate(source, destination)
        written += 1
        thumb_bytes += destination.stat().st_size

    saving = 100 * (1 - thumb_bytes / source_bytes) if source_bytes else 0
    print(
        f"Thumbnail set ready: {len(sources)} files, {written} written, "
        f"{thumb_bytes / 1024 / 1024:.1f} MiB ({saving:.0f}% smaller than originals)."
    )


if __name__ == "__main__":
    main()
