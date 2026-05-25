# SaniSafe Solutions — Brand Notes

This file is the single point of truth for how the **SaniSafe Solutions** website should look and read. It also explains where the moving parts live so that future tweaks stay consistent.

---

## 1. Names and how to use them

| Use | Where |
| --- | --- |
| **SaniSafe Solutions** (full legal/trading name) | `<title>`, footer, legal text, JSON-LD, first mention in any page of body copy |
| **SaniSafe** (shorthand) | OK after the first mention, in headlines, in social posts |
| **SlipTest** | Always when talking about pendulum slip testing — it is a sub-brand of SaniSafe Solutions |
| `info@sanisafe.ie` | The only email |
| `sanisafe.ie` | The only domain. Canonical, OG, sitemap, robots all point here. |

### Tagline

> **Protection You Can Trust. Safety You Can Stand On!**

Renders directly under the logo in the hero block and again in the footer. Do not paraphrase.

### SlipTest sub-brand strapline

> **Confidence in every step.**

Appears beside the SlipTest logo in:

- The home page SlipTest explainer block.
- The SlipTest service page hero.
- Any future SlipTest-only marketing material.

---

## 2. Positioning line

> Restoration is the craft. Safety is the reason to call.

If a competing claim ever has to be picked between *the floor will look better* and *the floor will be safer*, **safety wins**. Insurance defensibility and HSA compliance lead.

---

## 3. Palette

Tokens live in `tailwind.config.mjs` under `theme.extend.colors`. Use the Tailwind class — don't hard-code hex.

| Token | Hex | Use |
| --- | --- | --- |
| `brand.blue` | `#1E88E5` | Primary accent. Decorative only — bullets, large display numbers, hover states. **Not** for text on white at body sizes (fails AA). |
| `brand.blueDark` | `#1565C0` | Background of any blue band that carries white text (e.g. `<StatBand />`). Passes AA with white. |
| `brand.green` | `#8BC34A` | Accent / safety / confirmations. Decorative bullets, checklists, ring/glow effects. |
| `brand.greenDark` | `#33691E` | Background of the primary green CTA button (`btn-primary`) and the "After" badge — both carry white text and pass AA. |
| `brand.navy` | `#0D47A1` | Headings on light backgrounds, dark hero/CTA bands, body links on white. |
| `brand.yellow` | `#F5C518` | **SlipTest only.** SlipTest service card, SlipTest hero, SlipTest CTA, the SlipTest accent ring. Never paired with white text — always `text-brand-navy` on yellow. |
| `ink.charcoal` | `#1F2933` | Body text on light backgrounds. |
| `ink.slate` | `#465A65` | Secondary body text, captions, meta. |
| `surface.offwhite` | `#F7F9FC` | Light section bands (`<Section variant="offwhite">`). |
| `surface.grey` | `#E5E7EA` | Borders, dividers. |

### Contrast — non-negotiables

- White text **never** on `brand.blue`, `brand.green`, or `brand.yellow`. Use the `Dark` variants for blue and green; use `text-brand-navy` for yellow.
- Body links on white are `text-brand-navy underline`. Brand-blue underline on white **fails AA**.
- Yellow CTAs always use **deep navy** text.

---

## 4. Type

- **Body**: Inter (Google Fonts), 400/500/600/700.
- **Display / headings**: Manrope (Google Fonts), 700/800. Use `font-display font-extrabold` and bias toward 800 — match the punch in the client's existing infographics.
- **Tracking**: tight on headings, normal on body. Eyebrow labels use `tracking-[0.18em] uppercase font-bold`.
- **Sizing scale**: defined via Tailwind defaults — `h-display` (3xl→5xl) for h1, `h-section` (2xl→4xl) for h2.

Fonts are loaded with `<link rel="preconnect">` + a single Google Fonts stylesheet in `src/layouts/Layout.astro`. If switching to self-hosting, replace that block — nothing else needs to change.

---

## 5. Voice

Plain-spoken Irish trade voice. Safety-first. Stat-led where possible.

- **Yes**: "Pendulum (PTV) testing to HSA guidance.", "We test and we treat, so one contractor closes the loop.", "Honest, tidy work."
- **No**: marketing fluff ("solutions you can trust to deliver excellence"), CamelCase neologisms, "leveraging", "synergy", lengthy hedging.
- Lead with the outcome the buyer cares about (lower slip risk, insurer-defensible report, quieter restoration, less downtime) and let the technique speak second.
- Specific over vague — name surfaces (marble, limestone, terrazzo, vinyl, polished concrete) and standards (HSA, PTV, RAMS) when accurate.

When in doubt: would a facilities manager or a homeowner in Co. Clare actually use this sentence in conversation? If not, rewrite.

---

## 6. Visual language

The site extends the look of the client's existing infographics:

- **Full-bleed coloured bands** alternate with **clean white sections** down the page.
- Coloured bands use **white pictograms** (the slipping figure on `<StatBand />`, the pendulum on the SlipTest black band). Pictograms are flat, geometric, single-colour.
- One **full-width black band** exists, on the SlipTest service page. It is modelled on the client's "Pendulum Slip Testing and Full Insurance Report Service" image and should not be reused on other pages.
- Big display numbers (95%, 01–04 step numbers) are `font-display font-extrabold` and brand-blue or brand-yellow.
- Subtle shadows on cards (`shadow-card`), heavier green glow on the primary CTA (`shadow-cta`).
- Hover behaviour on cards: 4px tinted ring + small scale on the image. Never spin or bounce.

---

## 7. Logos

- **SaniSafe Solutions** — `public/logo.jpeg` (client supplied). 56×56 in the header, 56×56 in the footer (placed on a white tile in both header and footer to hide the JPEG matte against dark backgrounds).
- **SlipTest** — `public/sliptest-logo.jpeg` (client supplied). Used wherever pendulum slip testing is discussed.
- Both should be requested as transparent PNG or SVG (TODO recorded in `PLACEHOLDERS.md`).
- **Do not redraw** either logo. Crop, scale, or place on a white tile — that is it.

---

## 8. Do / don't

| Do | Don't |
| --- | --- |
| Use yellow only on SlipTest. | Use yellow on a general "request a quote" CTA — that's brand-green. |
| Use brand-navy text on yellow. | Use white text on yellow. |
| Use the darker `brand.blueDark` / `brand.greenDark` tokens whenever you place white text on a coloured background. | Hard-code hex codes in components. |
| Lead with safety / insurance / HSA compliance language on hero sections. | Lead with "premium" or "luxury" framing. |
| Treat restoration as the craft and slip-safety as the outcome. | Treat SlipTest as an add-on — it gets equal billing in the nav and on the home page. |
| Use the Section + Hero + CTA components for any new page. | Re-hand-roll the section padding / band logic — the spacing system is already there. |

---

## 9. Where things live (cheat sheet)

| Want to change… | File |
| --- | --- |
| Site name, tagline, email, phone, CRO line, social, hours | `src/data/site.ts` |
| Nav items / dropdown children | `src/data/site.ts` (`nav`) |
| The six services (titles, slugs, accent colour, image key) | `src/data/site.ts` (`services`) |
| The three sectors | `src/data/site.ts` (`sectors`) |
| Per-service hero / FAQ / gallery copy | `src/data/serviceContent.ts` |
| Every image on the site | `src/data/images.ts` |
| Palette | `tailwind.config.mjs` |
| Button styles, eyebrow, sections, focus rings | `src/styles/global.css` |
| LocalBusiness JSON-LD | `src/layouts/Layout.astro` |
| Sitemap entries | `src/pages/sitemap.xml.ts` |
