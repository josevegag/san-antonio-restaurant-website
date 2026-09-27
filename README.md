# San Antonio Mexican Restaurant

Independent Next.js website for San Antonio Mexican Restaurant's three New Jersey locations.

## Stack

- Next.js 16, App Router, TypeScript, Tailwind CSS 4
- Static restaurant, menu, location and gallery data in `src/data`
- Original client photographs optimized as WebP in `public/images/menu`
- No account, ordering, reservation or payment implementation. Ordering links open the restaurant's existing provider.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Content model

- `src/data/locations.ts`: one record per restaurant with address, phone, hours, services, order URL, map URL and gallery IDs. Add a location here and it appears in navigation flows, the locations page, order page, contact page, footer, sitemap and structured data.
- `src/data/menu.ts`: typed products, description, category, specialty flag, photo ID and prices keyed by location slug. A missing price displays “See live menu.” The curated menu intentionally links to the provider for the complete, current menu.
- `src/data/photos.json`: generated photo metadata. The gallery filters by category, loads 18 images at a time, and uses lazy loaded Next.js images plus a keyboard accessible lightbox.
- `src/data/media.ts`: optional hero and promotional video paths. Add client videos to `public/videos`, then set the paths. The hero keeps a static poster and hides video on mobile or reduced motion.

To regenerate images from the client source folder:

```bash
python scripts/prepare_images.py "C:/path/to/Fotos san antonio"
```

The script reads originals without changing them, caps dimensions at 1800 px, applies EXIF orientation and emits quality 86 WebP. The 81 supplied originals were about 169 MB; generated assets total about 11.7 MB. Next.js performs device sized image optimization at request time.

## SEO and launch

The site includes per-page metadata, Open Graph, Twitter cards, sitemap, robots and Restaurant schema. Preview deployments are marked noindex and robots disallows crawling. After Preview approval and separate domain/DNS authorization, set `SITE_CANONICAL_URL` to the approved final URL and deploy. This enables indexing. Do not add the final domain during development.

## Source and editorial notes

See [CONTENT_SOURCES.md](./CONTENT_SOURCES.md). Official restaurant content was checked on 2026-09-27. Branch menus and prices can change in the third party ordering provider. No social links are displayed because the current site's social icons lead to Wix's accounts.
