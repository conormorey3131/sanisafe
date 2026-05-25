# SaniSafe Solutions — Website

Marketing website for **SaniSafe Solutions**, an Ennis-based floor restoration and slip-safety company working across Ireland. Built with Astro 4, Tailwind CSS 3 and TypeScript. Targeted at Lighthouse ≥ 95 on Performance / Accessibility / Best Practices / SEO (current home-page scores: **100 / 100 / 100 / 100**).

---

## 1. Local development

Requirements: Node 18.18+ (tested on Node 24). npm 9+.

```bash
npm install
npm run dev
```

Dev server: <http://localhost:4321>.

Other scripts:

```bash
npm run build      # static build to ./dist
npm run preview    # serve ./dist locally for testing
npm run astro -- … # raw Astro CLI
```

The build emits 14 HTML pages + `sitemap.xml`, with no client-side framework runtime — just hand-written `<script>` islands for the mobile menu, the FAQ `<details>` and the `/work` sector filter.

---

## 2. Project layout

```
public/                       # static assets served as-is
  logo.jpeg                   # SaniSafe Solutions logo (CLIENT-SUPPLIED)
  sliptest-logo.jpeg          # SlipTest sub-brand logo (CLIENT-SUPPLIED)
  og-default.png              # Open Graph image (placeholder, branded)
  robots.txt
  images/client-supplied/     # reference images (see PLACEHOLDERS.md)

src/
  components/                 # Header, Footer, Hero, ServiceCard, StatBand,
                              # BeforeAfter, Testimonial, CTA, ContactForm,
                              # Section, ServicePage (template)
  data/
    site.ts                   # name, tagline, nav, services[], sectors[]
    images.ts                 # central image registry — SWAP HERE
    serviceContent.ts         # per-service copy (hero, FAQs, gallery)
  layouts/
    Layout.astro              # <head>, OG, JSON-LD, skip link
  pages/
    index.astro               # /
    services/                 # /services + 6 sub-pages
    sectors.astro             # /sectors with #anchors
    about.astro
    work.astro
    contact.astro
    privacy.astro             # noindex, DRAFT
    cookies.astro             # noindex, DRAFT
    sitemap.xml.ts            # hand-rolled sitemap endpoint
  styles/global.css           # Tailwind base + component classes
```

---

## 3. How to deploy (Netlify)

The site is a fully static Astro build, so it deploys anywhere that can serve a `dist/` folder. Netlify is the recommended target because the contact form is wired to Netlify Forms out of the box.

### One-time setup

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Netlify, **Add new site → Import from Git → choose this repository**.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 or higher (Netlify defaults are fine)
4. **Forms** — Netlify auto-detects the form on `/contact` (it's marked `data-netlify="true"` and has a hidden `form-name` input). After the first deploy:
   - Go to **Site → Forms → sanisafe-contact**.
   - Add a **Form notification → Email** to `info@sanisafe.ie` so every enquiry triggers an email.
   - Optionally turn on **Akismet spam filtering** in Netlify Forms settings (the form already includes a honeypot `bot-field`, so this is belt-and-braces).
5. **Custom domain** — point `sanisafe.ie` and `www.sanisafe.ie` at Netlify, switch the canonical to the apex in `src/data/site.ts` if needed (currently set to `https://sanisafe.ie`).

### Optional `netlify.toml`

The defaults work without one, but if you want to lock in the build settings, drop this at the repo root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 404
```

### Mailto fallback

If the form is ever disabled, the contact form has a visible `Or email info@sanisafe.ie directly` link beside the submit button, so the page is still usable as-is.

---

## 4. How to swap placeholders for real content

Everything that needs replacing before launch is **either**

- prefixed with `TODO:` in the source (greppable with `grep -rn 'TODO' src/`), **or**
- listed explicitly in [`PLACEHOLDERS.md`](./PLACEHOLDERS.md).

### Swapping a placeholder image

1. Open [`src/data/images.ts`](./src/data/images.ts) — it is the **single source of truth** for every `<img>` on the site.
2. Find the slot (e.g. `hero`, `serviceMarble`, `beforeMarble`).
3. Drop the new file into `public/images/<area>/<name>.jpg` (use JPG or WebP, ideally ≤ 300 KB, exact dimensions noted on the slot).
4. Update three fields on the slot:
   - `src` → `/images/<area>/<name>.jpg`
   - `alt` → meaningful description (no "image of…")
   - `width` / `height` if they changed
5. Tick the matching row in `PLACEHOLDERS.md`.

That's it — the change automatically propagates to every page that uses the slot (home page hero, service card, before/after, etc.).

`PLACEHOLDERS.md` lists pre-built **Unsplash + Pexels search URLs** for each slot so the swap is one click of finding a photo + one file move.

### Swapping copy

- Site-wide values (name, tagline, email, phone, CRO line, social links) live in `src/data/site.ts`.
- Service-page copy (hero text, bullets, FAQs, gallery captions) lives in `src/data/serviceContent.ts`.
- Sector copy lives in `src/pages/sectors.astro`.
- Testimonials are in `src/pages/index.astro`, each marked `{/* TODO: real testimonial */}`.

### CRO number

Once issued by the CRO, replace the placeholder string in `src/data/site.ts` (`croDisplay`) — it renders in three places (Footer, Contact page, Privacy page) and they will all update.

### Phone number

Update `phoneDisplay` and `phoneHref` in `src/data/site.ts`. There's also a TODO in `Layout.astro` to add `telephone` to the LocalBusiness JSON-LD once the number is confirmed.

---

## 5. Plugging in a different form backend

The contact form is just a vanilla HTML form with Netlify markup. To switch to a different backend (Formspree, Basin, your own endpoint, etc.):

1. Open `src/components/ContactForm.astro`.
2. Change the `action="…"` and `method="POST"` attributes to point at your endpoint.
3. Remove the Netlify-specific markers if you no longer need them:
   - `data-netlify="true"`
   - `data-netlify-honeypot="bot-field"`
   - the hidden `<input type="hidden" name="form-name" value="sanisafe-contact" />`
   - the hidden honeypot paragraph

The mailto fallback link beside the submit button works regardless of which backend you choose.

---

## 6. Accessibility & performance baseline

- `lang="en-IE"`, skip-to-content link, `<main id="main">`.
- WCAG 2.2 AA contrast across all text and CTAs — including the yellow SlipTest pages, where text is always brand-navy (never white) on yellow.
- Focus-visible outline in brand green (3px, 2px offset).
- `prefers-reduced-motion` honoured globally.
- All `<img>` tags have explicit width/height + meaningful alt + `loading="lazy"` (eager on the LCP hero only).
- All decorative SVGs marked `aria-hidden="true"`.
- JSON-LD `LocalBusiness` on every page; `Service` + `FAQPage` on service pages; `WebSite` + `ItemList` on home; branded `Service` (with `brand: SlipTest`) on SlipTest.
- `sitemap.xml` + `robots.txt`.

Run Lighthouse against `npm run preview` (default `http://127.0.0.1:4321`) to verify before each deploy.

---

## 7. Known TODOs at launch

| TODO | Where | What's needed |
| --- | --- | --- |
| Real CRO number | `src/data/site.ts` | once registration is issued |
| Real phone number | `src/data/site.ts` + `Layout.astro` JSON-LD | confirm with client |
| Real street address | `src/data/site.ts` | confirm with client |
| SVG / transparent-PNG logo | `public/logo.svg` (referenced in PLACEHOLDERS) | currently using `.jpeg`, white tile behind it in Footer to hide the JPEG matte |
| 95% stat source | `StatBand.astro` comment | confirm UK HSE vs Irish HSA with client |
| Testimonials | `src/pages/index.astro` | three placeholder quotes marked TODO |
| Photography | `src/data/images.ts` (see `PLACEHOLDERS.md`) | swap branded `placehold.co` images for real photos |
| Social links | `src/data/site.ts` (`social`) | currently `#` placeholders |
| Founder bio + photo | `src/pages/about.astro` | one TODO line in the About page |
| Insurance details | `src/pages/about.astro` | confirm policy details with client |
| Real case studies | `src/pages/work.astro` | nine placeholder cards marked TODO |

See `PLACEHOLDERS.md` for the exhaustive list, including per-image search URLs on Unsplash and Pexels.
