import type { ImageKey } from './images';
import type { WorkKey } from './work';

export type ServiceContent = {
  slug: string;
  title: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  heroPromise: string;
  heroVariant: 'navy' | 'blue' | 'black' | 'yellow';
  heroImageKey: ImageKey;
  whatWeDo: string[];
  whereUsed: Array<{ label: string; href: string }>;
  howItWorks: Array<{ title: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
  /** Optional before/after gallery — keys into src/data/work.ts. */
  gallery?: WorkKey[];
  /** Optional standalone illustrative image (not a before/after collage). */
  illustration?: { src: string; alt: string; caption?: string };
  metaTitle: string;
  metaDescription: string;
};

const sectorChips = {
  hospital: { label: 'Hospital & Healthcare', href: '/sectors#hospital-and-healthcare' },
  commercial: { label: 'Commercial', href: '/sectors#commercial' },
  domestic: { label: 'Domestic', href: '/sectors#domestic' },
};

export const serviceContent: Record<string, ServiceContent> = {
  'marble-and-stone-restoration': {
    slug: 'marble-and-stone-restoration',
    title: 'Marble & Stone Restoration',
    heroEyebrow: 'Service · Restoration',
    heroHeadline: 'Marble & Stone, restored to its former glory!',
    heroSubhead:
      'Diamond grinding, honing and polishing to remove scratches, wear patterns and lippage from marble, limestone, travertine and terrazzo.',
    heroPromise: 'A polished, even finish on natural stone — without having to replace it.',
    heroVariant: 'navy',
    heroImageKey: 'serviceMarble',
    whatWeDo: [
      'Diamond grind to remove lippage and deep scratches.',
      'Hone to a uniform finish across the entire floor.',
      'Polish to the natural sheen of the stone.',
      'Cracks and chips repaired using colour-matched resins.',
      'Sealed to prevent staining and make day-to-day cleaning easier.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.hospital, sectorChips.domestic],
    howItWorks: [
      { title: 'Survey', body: 'On-site assessment — condition, level of damage, wear pattern, access and agreed notes.' },
      { title: 'Grind or deep clean', body: 'Coarse to fine diamond pads, low-dust extraction/submersion — lippage and deeper scratches removed during this process. Or simply for a deep clean, chemical stripping delivers the kind of results that can\'t be achieved by simply mopping.' },
      { title: 'Hone & polish', body: 'Progressively finer grit pads until the agreed finish is achieved, edges done by hand. Or, after a cleansing chemical strip, high-speed polishing pads.' },
      { title: 'Seal & polish', body: 'Impregnating sealer (on certain stone) or high-speed polish, with an aftercare guide so the finish lasts.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical lobby or function room is 1–3 days. Larger jobs are determined by the access available to us.' },
      { q: 'Do you need to close the area?', a: 'We isolate the work zone. If out-of-hours work is needed so the rest of the business stays open, we can come to an arrangement.' },
      { q: 'Will it look different?', a: 'In short, yes — the stone\'s own colour, veining and natural texture become more prominent.' },
      { q: 'How long does the finish last?', a: 'Years, in normal use. We supply a care guide so cleaning routines maintain the just-polished look.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    gallery: ['marbleBathroom', 'marbleHallway', 'churchFlagstone', 'limestoneFlagstone', 'slateFloor', 'commercialLobby'],
    metaTitle: 'Marble & Stone Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Marble, limestone, travertine and terrazzo restoration across Ireland — diamond grind, hone, polish and seal. Insurer-friendly documentation. Based in Ennis.',
  },

  'wooden-floor-restoration': {
    slug: 'wooden-floor-restoration',
    title: 'Wooden Floor Restoration',
    heroEyebrow: 'Service · Restoration',
    heroHeadline: 'Hardwood floors brought back to life.',
    heroSubhead:
      'Sand, repair and re-finish solid and engineered wood floors with dust-extracted equipment so the rest of the space stays usable.',
    heroPromise: 'A clean, even hardwood finish without replacing the floor.',
    heroVariant: 'navy',
    heroImageKey: 'serviceWood',
    whatWeDo: [
      'Coarse-to-fine sanding with dust extraction.',
      'Board and gap repairs, colour-matched filler.',
      'Hard-wax oil or polyurethane lacquer, water-based options for low odour.',
      'Stain to match an existing area or a sample.',
      'Re-coat existing finishes where a full sand is not needed.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Inspect', body: 'Confirm treatment type, thickness, existing finish and what repairs are required.' },
      { title: 'Treatment type', body: 'Sanding: fix problem boards, then sand with dust extraction through three grits. Or chemical peel: strip the existing surface and re-seal.' },
      { title: 'Finish', body: 'Hardwood-wax, oil or lacquer — two or three coats.' },
      { title: 'Hand over', body: 'Care guide and cleaning recommendations.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical room is 1–2 days. Open-plan spaces depend on access and drying time between coats.' },
      { q: 'Do I need to move out?', a: 'Usually no — the area itself has to be empty and ventilated, but the rest of the house or building stays in use.' },
      { q: 'Is the dust a problem?', a: 'We use HEPA-extracted sanders. There is residual dust but nothing like a traditional sand.' },
      { q: 'How long does the finish last?', a: '7–10 years in a domestic setting before a re-coat; sooner on a commercial floor due to higher traffic.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    gallery: ['oakRestoration', 'oakLivingRoom', 'pubFloor', 'pineHallway'],
    metaTitle: 'Wooden Floor Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Sanding, repair and re-finishing of solid and engineered wood floors across Ireland. Dust-extracted equipment. Hard-wax oil and lacquer options.',
  },

  'travertine': {
    slug: 'travertine',
    title: 'Travertine Restoration',
    heroEyebrow: 'Service · Restoration',
    heroHeadline: 'Travertine, restored to a smooth, even finish.',
    heroSubhead:
      'Diamond grinding, resin crack-filling, honing and polishing to take wear, etching and lippage out of travertine floors.',
    heroPromise: 'A smooth, even travertine finish — without replacing the floor.',
    heroVariant: 'navy',
    heroImageKey: 'serviceTravertine',
    whatWeDo: [
      'Diamond grind to remove lippage, wear and surface damage.',
      'Repair damage, cracks and pitting with colour-matched resin.',
      'Hone to a uniform finish across the entire floor.',
      'Polish to the natural sheen of the stone.',
      'Seal to slow staining and make day-to-day cleaning easier.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.hospital, sectorChips.domestic],
    howItWorks: [
      { title: 'Survey', body: 'On-site assessment — condition, level of holing, wear pattern, access and agreed notes.' },
      { title: 'Grind & fill', body: 'Coarse to fine diamonds with low-dust extraction, then fill open holes and pitting with colour-matched resin.' },
      { title: 'Hone & polish', body: 'Progressively finer grit pads until the agreed finish is achieved, edges done by hand.' },
      { title: 'Seal & hand back', body: 'Impregnating sealer and an aftercare guide so the finish lasts.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical room or lobby is 1–3 days. Larger jobs are determined by the access available to us.' },
      { q: 'Do you fill the holes?', a: 'Yes — open holes and pitting are filled with colour-matched resin as part of the restoration, then honed flat.' },
      { q: 'Will it look different?', a: 'In short, yes — the stone\'s own colour and natural texture become more prominent, with the finish (matte, satin or polished) agreed up front.' },
      { q: 'How long does the finish last?', a: 'Years, in normal use. We supply a care guide so cleaning routines maintain the finish.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    gallery: ['marbleHallway', 'limestoneFlagstone', 'slateFloor'],
    metaTitle: 'Travertine Floor Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Travertine restoration across Ireland — diamond grind, resin hole-filling, hone, polish and seal. Restored in place, without replacing the floor. Based in Ennis.',
  },

  'marmoleum': {
    slug: 'marmoleum',
    title: 'Marmoleum Floor Restoration',
    heroEyebrow: 'Service · Restoration',
    heroHeadline: 'Marmoleum and linoleum floors, brought back to life.',
    heroSubhead:
      'Strip back tired dressings, deep clean and re-polish marmoleum and linoleum floors to a fresh, even sheen — common in schools, healthcare and commercial settings.',
    heroPromise: 'A fresh, even marmoleum finish without replacing the floor.',
    heroVariant: 'navy',
    heroImageKey: 'serviceMarmoleum',
    whatWeDo: [
      'Strip old, worn polish and dressings back to a clean surface.',
      'Deep clean to lift ingrained dirt and scuffing.',
      'Re-seal and polish with a hard-wearing floor dressing.',
      'Restore colour and sheen without replacing the floor.',
      'Anti-slip options where slip resistance is a concern.',
    ],
    whereUsed: [sectorChips.hospital, sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Survey', body: 'Confirm the floor type, condition and the finish you want.' },
      { title: 'Strip & clean', body: 'Remove old dressings and deep clean the surface.' },
      { title: 'Seal & polish', body: 'Apply a hard-wearing dressing and buff to an even sheen.' },
      { title: 'Hand over', body: 'Care guide and cleaning recommendations so the finish lasts.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical room is 1–2 days, depending on the number of coats and drying time between them.' },
      { q: 'Do I need to close the area?', a: 'Just the work zone, and it needs to stay clear while coats dry. Out-of-hours work is available if needed.' },
      { q: 'Can you make it less slippery?', a: 'Yes — we can finish with a more slip-resistant dressing or apply an anti-slip treatment where needed.' },
      { q: 'How long does the finish last?', a: 'It depends on traffic and cleaning regime. A good maintenance routine keeps the sheen for longer; we provide a care guide.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    gallery: ['yellowSchoolFloor', 'blueSchoolFloor', 'redSafetyFloor'],
    metaTitle: 'Marmoleum & Linoleum Floor Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Marmoleum and linoleum floor restoration across Ireland — strip, deep clean, re-seal and polish. Common in schools, healthcare and commercial settings. Based in Ennis.',
  },

  'anti-slip-treatments': {
    slug: 'anti-slip-treatments',
    title: 'Anti-Slip Treatments',
    heroEyebrow: 'Service · Safety',
    heroHeadline: 'Anti-Slip Treatment.',
    heroSubhead:
      'A chemical treatment that micro-etches the floor to raise slip-resistance traction without changing how the floor appears.',
    heroPromise: 'Higher slip resistance on wet floors — without changing the look.',
    heroVariant: 'navy',
    heroImageKey: 'serviceAntiSlip',
    whatWeDo: [
      'Pendulum reading before treatment.',
      'Targeted chemical treatment matched to the floor type.',
      'Pendulum re-test once the treatment has been completed.',
      'Written record and report you can keep on file.',
      'Care guidance to ensure continued safety.',
    ],
    whereUsed: [sectorChips.hospital, sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Test & agree works', body: 'Establish the risk level on the floor in wet and dry conditions.' },
      { title: 'Treatment', body: 'Apply the right product for tile, stone, concrete or porcelain.' },
      { title: 'Cure & rinse', body: 'Allow to react, then neutralise and rinse.' },
      { title: 'Re-test & report', body: 'Pendulum re-test and a written before/after report.' },
    ],
    faqs: [
      { q: 'Will it change how the floor looks?', a: 'No. The treatment works at a microscopic level. The floor looks the same (only cleaner) as it did before — it simply has a textured feel that prevents slips and falls.' },
      { q: 'How long does it take?', a: 'A typical entrance lobby or bathroom can be done in a few hours to a day. A pool deck is done in one to two days.' },
      { q: 'How long does it last?', a: 'If chemical etching is carried out it will last indefinitely. If a clear surface coating is used, 2–5 years depending on traffic and cleaning regime. We can re-test on request.' },
      { q: 'Does it need to close the area?', a: 'Just the work zone. We can also do this out of hours if required.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    metaTitle: 'Anti-Slip Treatments Ireland | SaniSafe Solutions',
    metaDescription:
      'Invisible chemical anti-slip treatments for tiles, stone, concrete and porcelain. Pendulum tested before and after. Nationwide service from Ennis.',
  },

  'deep-cleaning': {
    slug: 'deep-cleaning',
    title: 'Deep Clean & Stain Removal',
    heroEyebrow: 'Service · Cleaning',
    heroHeadline: 'Deep cleaning and stain removal that brings floors back to life.',
    heroSubhead:
      'Specialist deep cleaning for marble, tile, stone, wood, concrete and marmoleum — lifting ingrained dirt, limescale and stains that everyday cleaning leaves behind.',
    heroPromise: 'A deep clean that restores the look without a full restoration.',
    heroVariant: 'navy',
    heroImageKey: 'serviceDeepClean',
    whatWeDo: [
      'Deep chemical cleaning of tile, stone, wood, concrete and marmoleum floors.',
      'Limescale, grime and ingrained-dirt removal from grout and surfaces.',
      'Stain removal.',
      'Strip and re-seal where a protective finish has broken down.',
      'Care guidance so the floor stays cleaner for longer.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.hospital, sectorChips.domestic],
    howItWorks: [
      { title: 'Survey', body: 'Identify the floor type, the soiling and any staining, then agree the method.' },
      { title: 'Deep clean', body: 'Mechanical and chemical cleaning matched to the surface — no damage to the floor.' },
      { title: 'Treat stains', body: 'Targeted stain and limescale removal on the problem areas.' },
      { title: 'Seal & hand back', body: 'Re-seal where needed and a written care guide so it lasts.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'This depends on the floor type and size. A typical domestic room is usually 1–2 days; commercial spaces depend on access and drying time between coats.' },
      { q: 'Do I need to move out or close my business?', a: 'Usually not — the area itself has to be empty and ventilated, but the rest of the house or building should stay in use. Out-of-hours work is available if needed.' },
      { q: 'Are the dust or smells an issue?', a: 'We minimise both. Some cleaning chemicals can have an odour, but with proper ventilation this is kept to a minimum.' },
      { q: 'Will it remove every stain?', a: 'Most surface and ingrained staining lifts with the right method. Deep, set-in stains on porous stone can sometimes only be reduced — we tell you honestly before we start.' },
      { q: 'Is there a payment plan arrangement?', a: 'Yes — we offer scheduled term payments to our regular business partners.' },
    ],
    gallery: ['slateFloor', 'limestoneFlagstone', 'marbleBathroom', 'churchFlagstone'],
    illustration: {
      src: '/images/work/pool-limescale-deposits.webp',
      alt: 'Limescale and mineral deposits built up along the waterline tiles of a swimming pool',
      caption: 'Limescale & deposits — understanding and prevention. We lift built-up limescale that everyday cleaning leaves behind.',
    },
    metaTitle: 'Deep Clean & Stain Removal for Floors in Ireland | SaniSafe Solutions',
    metaDescription:
      'Specialist deep cleaning and stain removal for marble, tile, stone, wood, concrete and marmoleum floors across Ireland. Based in Ennis, nationwide service.',
  },

  'sliptest': {
    // SlipTest content used as fallback metadata; its page is bespoke (see /services/sliptest/index.astro)
    slug: 'sliptest',
    title: 'SlipTest — Pendulum Slip Testing & Insurance Reports',
    heroEyebrow: 'SlipTest · Confidence in every step',
    heroHeadline: 'Pendulum Slip Testing & Full Insurance Report Service.',
    heroSubhead:
      'On-site pendulum testing to HSA guidance, a written report you can hand to an insurer, and treatment if the PTV is below threshold.',
    heroPromise: 'Test, treat and re-test — one contractor closes the loop.',
    heroVariant: 'yellow',
    heroImageKey: 'serviceSlipTest',
    whatWeDo: [
      'On-site pendulum testing across wet and dry conditions.',
      'PTV readings recorded per zone.',
      'Photographic record of test positions and conditions.',
      'Written report referencing HSA guidance.',
      'Recommendations for treatment where readings sit below the safety threshold.',
    ],
    whereUsed: [sectorChips.hospital, sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Brief', body: 'You tell us the building, the surfaces and the reason for testing.' },
      { title: 'On-site test', body: 'Pendulum readings per zone, both wet and dry.' },
      { title: 'Report', body: 'PTV per zone, photographs and HSA-referenced recommendations.' },
      { title: 'Treat & re-test', body: 'If treatment is needed, we treat the floor and re-test under the same conditions.' },
    ],
    faqs: [
      { q: 'What is the pendulum test?', a: 'A standardised swing test that simulates a heel strike on the floor. The pendulum value (PTV) tells you, in numbers, how slip-resistant the floor is.' },
      { q: 'Is this what insurers require?', a: 'Yes. Pendulum (PTV) is the recognised method in HSA and UK HSE guidance, and it produces a number that is defendable in court.' },
      { q: 'How long does a test take?', a: 'A typical site visit is half a day; the report follows.' },
      { q: 'What if we fail?', a: 'We can recommend treatments for the floor and re-test under the same conditions once remedial works have been completed.' },
    ],
    metaTitle: 'SlipTest — Pendulum Slip Testing & Insurance Reports Ireland',
    metaDescription:
      'Pendulum (PTV) slip testing to HSA guidance, written insurance-grade reports, and treatment if needed. SlipTest by SaniSafe Solutions — nationwide.',
  },
};
