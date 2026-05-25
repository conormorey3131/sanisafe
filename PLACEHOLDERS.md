# Placeholders — SaniSafe Solutions

The site is built so it can ship today on placeholders and be updated piecemeal as real content arrives. **Every placeholder is listed here**, with the file it lives in, what is needed to replace it, and (for images) Unsplash + Pexels search URLs to make swap-in a single click.

To find every TODO in the source: `grep -rn "TODO" src/`.

---

## A. Imagery

All images on the site are served via the central registry in `src/data/images.ts`. **Status:** 17/17 slots currently point at real Unsplash CDN photos (free, royalty-free, served as auto-format WebP). The boxes below are ticked because the slot is filled with a real photo — they will be **unticked again** once a bespoke client photo replaces the Unsplash image (or, equivalently, until then the box just means "a real photo is showing on production").

To swap an Unsplash photo for bespoke client photography:

1. Drop the file into `public/images/<area>/<name>.jpg` (use JPG or WebP, ≤ 300 KB ideally).
2. In `src/data/images.ts`, update the slot's `src` to `/images/<area>/<name>.jpg`, plus `alt`, `width`, `height`.
3. Re-tick the row below as **client photo**.

To find a different Unsplash photo, use the search URL in the table.

> **Unsplash credit:** Under the Unsplash licence, attribution is not required, but recommended. If/when you launch with Unsplash photos still in place, consider listing the photographers somewhere (e.g. in the footer or an Acknowledgements page). The current photos are credited on Unsplash via the URLs in `src/data/images.ts`.

| Status | Slot (in `images.ts`) | Used by | Real-photo search query | Unsplash | Pexels |
| --- | --- | --- | --- | --- | --- |
| ☑ Unsplash | `hero` | Home hero, Services hero, Contact hero | polished marble hospital corridor | https://unsplash.com/s/photos/polished-marble-hospital-corridor | https://www.pexels.com/search/polished%20marble%20hospital%20corridor/ |
| ☑ Unsplash | `serviceMarble` | Service card + Marble service page | marble floor polishing close up | https://unsplash.com/s/photos/marble-floor-polishing-close-up | https://www.pexels.com/search/marble%20floor%20polishing%20close%20up/ |
| ☑ Unsplash | `serviceWood` | Service card + Wood service page | restored hardwood floor sanding | https://unsplash.com/s/photos/restored-hardwood-floor-sanding | https://www.pexels.com/search/restored%20hardwood%20floor%20sanding/ |
| ☑ Unsplash | `serviceConcrete` | Service card + Concrete service page | polished concrete floor warehouse | https://unsplash.com/s/photos/polished-concrete-floor-warehouse | https://www.pexels.com/search/polished%20concrete%20floor%20warehouse/ |
| ☑ Unsplash | `serviceAntiSlip` | Service card + Anti-Slip service page | wet floor anti slip treatment | https://unsplash.com/s/photos/wet-floor-anti-slip-treatment | https://www.pexels.com/search/wet%20floor%20anti%20slip%20treatment/ |
| ☑ Unsplash | `serviceEtching` | Service card + Etching service page | swimming pool tile graphics leisure centre | https://unsplash.com/s/photos/swimming-pool-tile-graphics-leisure-centre | https://www.pexels.com/search/swimming%20pool%20tile%20graphics%20leisure%20centre/ |
| ☑ Unsplash | `serviceSlipTest` | Service card + SlipTest hero | pendulum slip test equipment floor | https://unsplash.com/s/photos/pendulum-slip-test-equipment-floor | https://www.pexels.com/search/pendulum%20slip%20test%20equipment%20floor/ |
| ☑ Unsplash | `sectorHospital` | Sectors page + home sector tile | hospital corridor clean floor | https://unsplash.com/s/photos/hospital-corridor-clean-floor | https://www.pexels.com/search/hospital%20corridor%20clean%20floor/ |
| ☑ Unsplash | `sectorCommercial` | Sectors page + home sector tile + Sectors hero + Work hero | hotel lobby marble floor | https://unsplash.com/s/photos/hotel-lobby-marble-floor | https://www.pexels.com/search/hotel%20lobby%20marble%20floor/ |
| ☑ Unsplash | `sectorDomestic` | Sectors page + home sector tile | domestic kitchen tiled floor | https://unsplash.com/s/photos/domestic-kitchen-tiled-floor | https://www.pexels.com/search/domestic%20kitchen%20tiled%20floor/ |
| ☑ Unsplash | `beforeGrout` | Before/After grid (×2) | dirty grout floor before | https://unsplash.com/s/photos/dirty-grout-floor | https://www.pexels.com/search/dirty%20grout%20floor/ |
| ☑ Unsplash | `afterGrout` | Before/After grid (×2) | clean grout floor after | https://unsplash.com/s/photos/clean-grout-floor | https://www.pexels.com/search/clean%20grout%20floor/ |
| ☑ Unsplash | `beforeMarble` | Before/After grid (×2) | worn marble floor before restoration | https://unsplash.com/s/photos/worn-marble-floor | https://www.pexels.com/search/worn%20marble%20floor/ |
| ☑ Unsplash | `afterMarble` | Before/After grid (×2) | polished marble floor after | https://unsplash.com/s/photos/polished-marble-floor | https://www.pexels.com/search/polished%20marble%20floor/ |
| ☑ Unsplash | `beforeConcrete` | Before/After grid (×2) | dull concrete floor before polishing | https://unsplash.com/s/photos/dull-concrete-floor | https://www.pexels.com/search/dull%20concrete%20floor/ |
| ☑ Unsplash | `afterConcrete` | Before/After grid (×2) | polished concrete floor after | https://unsplash.com/s/photos/polished-concrete-floor | https://www.pexels.com/search/polished%20concrete%20floor/ |
| ☑ Unsplash | `about` | About page | Ennis, Co. Clare, Ireland | https://unsplash.com/s/photos/ennis-county-clare-ireland | https://www.pexels.com/search/ennis%20county%20clare%20ireland/ |
| ☑ Branded PNG | `og` (`/og-default.png`) | OG + Twitter card | branded social card (real photo + logo would be a future upgrade) | https://unsplash.com/s/photos/polished-marble-hospital-corridor | https://www.pexels.com/search/polished%20marble%20hospital%20corridor/ |

### Logos (client-supplied — present in `public/`)

| Done | File | Notes |
| --- | --- | --- |
| ☑ | `public/logo.jpeg` | SaniSafe Solutions, used in Header + Footer + favicon. Currently a JPEG — a transparent PNG or SVG should be requested from the client. |
| ☑ | `public/sliptest-logo.jpeg` | SlipTest sub-brand, used on the SlipTest service page hero and the home page SlipTest explainer. Same TODO — request transparent PNG or SVG. |
| ☐ | `public/logo.svg` | **TODO**: client to supply an SVG (or transparent PNG) of the SaniSafe Solutions logo. A JPEG logo will show a white box around it on coloured backgrounds. Until then, the Header and Footer both place the JPEG on a white tile to mask this. |

### Client-supplied reference images (not embedded on the live site)

These four images are used **as visual direction**, not as content on the site. They go in `public/images/client-supplied/`.

| Done | File | Used as reference for |
| --- | --- | --- |
| ☐ | `public/images/client-supplied/stat-95.jpeg` | The 95% `<StatBand />` on the home page — the slipping-figure pictogram and the typography weight. |
| ☐ | `public/images/client-supplied/pendulum-insurance.jpeg` | The full-bleed black band on `/services/sliptest`, white pendulum pictogram + headline. |
| ☐ | `public/images/client-supplied/wet-floor-sign.jpeg` | Visual direction for the Anti-Slip Treatments service card / page. |
| ☐ | `public/images/client-supplied/sliptest-logo-ref.jpeg` | Reference for the SlipTest sub-brand mark — should match the rendered SlipTest hero. |

*(The four files were not in the folder at the time of build — drop them in when you have them. Nothing on the live site embeds these directly.)*

---

## B. Copy / data placeholders

| Done | Where | What needs to happen |
| --- | --- | --- |
| ☑ | `src/data/site.ts` → `phoneDisplay` / `phoneHref` | Real number `+353 86 179 7079` in place (also added to LocalBusiness JSON-LD). |
| ☐ | `src/data/site.ts` → `croDisplay` | Replace the `[PLACEHOLDER — CRO registration pending]` string with the real CRO number once issued. This propagates to Footer, Contact page and Privacy page. |
| ☐ | `src/data/site.ts` → `location.streetAddressDisplay` | Add a real street address when available. |
| ☐ | `src/data/site.ts` → `social.{instagram,linkedin,facebook}` | Currently `#` placeholders. Replace with real URLs (or remove the entries entirely if a channel is not used — the Footer renders whatever is in `social`). |
| ☐ | `src/pages/index.astro` (testimonials array) | Three placeholder testimonials, each marked `{/* TODO: real testimonial */}`. Replace with real quotes + attribution. |
| ☐ | `src/pages/work.astro` (projects array) | Nine placeholder before/after entries. Replace with real case studies — at minimum a more specific `label` and ideally bespoke imagery per project. |
| ☐ | `src/pages/about.astro` | Two TODOs: founder bio/photo and insurance details. |
| ☐ | `src/components/StatBand.astro` | **Confirm with client whether the 95% figure cites the UK HSE or the Irish HSA.** Currently attributed `HSE (UK) estimate, 2025` to be safe. Update the `attribution` prop on `/` once the source is confirmed. |
| ☐ | `src/pages/privacy.astro` | DRAFT — review by data controller and/or solicitor before going live. Confirm controller details, retention periods and processor list. |
| ☐ | `src/pages/cookies.astro` | DRAFT — review by data controller before going live. Update cookie list once analytics (if any) is plugged in. |
| ☐ | `src/layouts/Layout.astro` (JSON-LD) | Add `telephone` to the LocalBusiness JSON-LD once the real phone number is confirmed. |

---

## C. Backend wiring

| Done | Where | What needs to happen |
| --- | --- | --- |
| ☐ | Netlify → Forms → `sanisafe-contact` | After the first deploy, add an email notification routed to `info@sanisafe.ie`. |
| ☐ | DNS | Point `sanisafe.ie` (apex + `www`) at Netlify. |
| ☐ | Analytics | If analytics is added (Plausible recommended for GDPR), update `src/pages/cookies.astro` to list any cookies, and update `src/layouts/Layout.astro` to include the script. |

---

## D. Pre-launch checklist (when all of the above is ticked)

- [ ] `grep -rn "TODO" src/` returns **zero results**.
- [ ] CRO number appears in Footer, Contact, Privacy — **without** the dashed amber placeholder styling.
- [ ] Phone number is real everywhere it appears, including the `tel:` link.
- [ ] `src/pages/privacy.astro` and `src/pages/cookies.astro` no longer say "DRAFT" and the `noindex` is removed in their `<Layout>` props.
- [ ] All 17 image slots in `src/data/images.ts` point to local `/images/...` paths (no `placehold.co` URLs left).
- [ ] OG image is a real branded social card, not the placeholder PNG.
- [ ] Lighthouse on the home page still hits ≥ 95 on all four categories on the deployed site.
- [ ] Sitemap (`/sitemap.xml`) submitted to Google Search Console.
