"""Optimize the restaurant's supplied original photographs for the web.

Run: python scripts/prepare_images.py "C:/path/to/Fotos san antonio"
The original folder is read only. Generated assets and catalog stay in this repo.
"""

import json
import re
import sys
import unicodedata
from pathlib import Path
from PIL import Image, ImageOps

SOURCE = Path(sys.argv[1])
ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public" / "images" / "menu"
CATALOG = ROOT / "src" / "data" / "photos.json"


def slug(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


photos = []
for source in sorted(SOURCE.rglob("*")):
    if source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        continue
    category = source.parent.name
    title = source.stem.title().replace("Sopez", "Sopes").replace("Milanbesa", "Milanesa")
    image_id = f"{slug(category)}-{slug(source.stem)}"
    target = DEST / f"{image_id}.webp"
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as original:
        original = ImageOps.exif_transpose(original).convert("RGB")
        original.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        original.save(target, "WEBP", quality=86, method=6)
        width, height = original.size
    photos.append({
        "id": image_id,
        "title": title,
        "category": category,
        "src": f"/images/menu/{target.name}",
        "width": width,
        "height": height,
    })

CATALOG.parent.mkdir(parents=True, exist_ok=True)
CATALOG.write_text(json.dumps(photos, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Optimized {len(photos)} restaurant photographs")
