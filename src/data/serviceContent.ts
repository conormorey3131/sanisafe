import type { ImageKey } from './images';

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
    heroHeadline: 'Marble & stone, restored properly.',
    heroSubhead:
      'Diamond grinding, honing and polishing to take scratches, wear patterns and lippage out of marble, limestone, travertine and terrazzo.',
    heroPromise: 'A clear, even finish on natural stone — without ripping it out.',
    heroVariant: 'navy',
    heroImageKey: 'serviceMarble',
    whatWeDo: [
      'Diamond grind to remove lippage and deep scratches.',
      'Hone to a uniform finish across the whole floor.',
      'Polish to the gloss level you want — matte, satin or high polish.',
      'Crack and chip repair using colour-matched resins.',
      'Seal to slow staining and make day-to-day cleaning easier.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.hospital, sectorChips.domestic],
    howItWorks: [
      { title: 'Survey', body: 'On-site assessment — stone type, current condition, wear pattern, access notes.' },
      { title: 'Grind', body: 'Coarse to fine diamonds, low-dust extraction. Lippage and major scratches come out here.' },
      { title: 'Hone & polish', body: 'Progressive finer grits to the agreed finish, edges done by hand.' },
      { title: 'Seal & hand back', body: 'Impregnating sealer and a written care guide so the finish lasts.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical lobby or function room is 1–3 days, including hand-back. Larger jobs are programmed around your trading hours.' },
      { q: 'Do you need to close the area?', a: 'We isolate the work zone, but most jobs are done out of hours or weekends so the rest of the building stays open.' },
      { q: 'Will it look different?', a: 'You agree the gloss level up front — matte, satin or high polish. The stone\'s own colour and veining come back out.' },
      { q: 'How long does the finish last?', a: 'Years, in normal use. We send a care guide so cleaning routines don\'t wear it back down.' },
    ],
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
    heroPromise: 'A clean, even hardwood finish without tearing out the floor.',
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
      { title: 'Inspect', body: 'Confirm species, thickness, existing finish and whether repairs are needed.' },
      { title: 'Repair & sand', body: 'Fix problem boards, then sand with dust extraction through three grits.' },
      { title: 'Finish', body: 'Hard-wax oil or lacquer, two or three coats with light de-nibbing.' },
      { title: 'Hand back', body: 'Care guide and a touch-up kit for high-traffic edges.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'A typical room is 1–2 days. Open-plan spaces depend on access and drying time between coats.' },
      { q: 'Do I need to move out?', a: 'Usually no — the area itself has to be empty and ventilated, but the rest of the house or building stays in use.' },
      { q: 'Is the dust a problem?', a: 'We use HEPA-extracted sanders. There is residual dust but nothing like a traditional sand.' },
      { q: 'How long does the finish last?', a: '7–10 years in a domestic setting before a re-coat; sooner on a commercial floor.' },
    ],
    metaTitle: 'Wooden Floor Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Sanding, repair and re-finishing of solid and engineered wood floors across Ireland. Dust-extracted equipment. Hard-wax oil and lacquer options.',
  },

  'polished-concrete': {
    slug: 'polished-concrete',
    title: 'Polished Concrete',
    heroEyebrow: 'Service · Restoration',
    heroHeadline: 'Mechanically polished concrete that lasts.',
    heroSubhead:
      'A multi-stage diamond grind and densify process that turns existing concrete into a hard, low-maintenance, low-dust floor.',
    heroPromise: 'A durable polished concrete floor without pouring new slab.',
    heroVariant: 'navy',
    heroImageKey: 'serviceConcrete',
    whatWeDo: [
      'Diamond grind to expose the aggregate level you choose.',
      'Chemical densifier to harden the surface.',
      'Progressive polish to the gloss level you want.',
      'Crack and joint repair where movement allows.',
      'Penetrating sealer for stain resistance.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Test patch', body: 'A 1m² test patch to confirm aggregate exposure and gloss level.' },
      { title: 'Grind', body: 'Heavy planetary grinders with vacuum extraction.' },
      { title: 'Densify & polish', body: 'Lithium densifier and progressive resin diamonds.' },
      { title: 'Seal', body: 'Penetrating sealer and a written care guide.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: '3–7 days for a medium-sized commercial floor, depending on aggregate exposure and finish level.' },
      { q: 'Is it slippery when wet?', a: 'A polished concrete floor on its own can be slick when wet. We can apply an anti-slip treatment that does not change the look.' },
      { q: 'Can you fix existing cracks?', a: 'Static cracks are repairable with epoxy. Live cracks (moving with the slab) need to be respected, not hidden.' },
      { q: 'How long does it last?', a: 'Decades on a sound slab, with periodic re-polish on the wear lanes.' },
    ],
    metaTitle: 'Polished Concrete Floor Restoration in Ireland | SaniSafe Solutions',
    metaDescription:
      'Polished concrete floor restoration across Ireland — diamond grind, densify, polish and seal. Durable, low-maintenance and low-dust.',
  },

  'anti-slip-treatments': {
    slug: 'anti-slip-treatments',
    title: 'Anti-Slip Treatments',
    heroEyebrow: 'Service · Safety',
    heroHeadline: 'Invisible anti-slip treatment for wet floors.',
    heroSubhead:
      'A chemical treatment that micro-etches the floor to raise slip resistance without changing how the floor looks.',
    heroPromise: 'Higher slip resistance on wet floors — without changing the look.',
    heroVariant: 'navy',
    heroImageKey: 'serviceAntiSlip',
    whatWeDo: [
      'Pendulum reading before treatment.',
      'Targeted chemical treatment matched to the floor type.',
      'Pendulum re-test once the treatment has cured.',
      'Photographic record and written report you can keep on file.',
      'Care guidance so cleaning routines don\'t reverse the effect.',
    ],
    whereUsed: [sectorChips.hospital, sectorChips.commercial, sectorChips.domestic],
    howItWorks: [
      { title: 'Test', body: 'Pendulum reading on the floor in its current state, wet and dry.' },
      { title: 'Treat', body: 'Apply the right chemistry for tile, stone, concrete or porcelain.' },
      { title: 'Cure & rinse', body: 'Allow to react, then neutralise and rinse.' },
      { title: 'Re-test & report', body: 'Pendulum re-test and a written before/after report.' },
    ],
    faqs: [
      { q: 'Will it change how the floor looks?', a: 'No. The treatment works at a microscopic level. The floor looks identical when it\'s dry.' },
      { q: 'How long does it take?', a: 'A typical entrance lobby or pool surround is done in a few hours. The floor is back in use the same day.' },
      { q: 'How long does it last?', a: '2–5 years depending on traffic and cleaning regime. We can re-test on request.' },
      { q: 'Does it need to close the area?', a: 'Just the work zone. We can do this out of hours.' },
    ],
    metaTitle: 'Anti-Slip Treatments Ireland | SaniSafe Solutions',
    metaDescription:
      'Invisible chemical anti-slip treatments for tiles, stone, concrete and porcelain. Pendulum tested before and after. Nationwide service from Ennis.',
  },

  'etching-and-graphics': {
    slug: 'etching-and-graphics',
    title: 'Etching & Graphics',
    heroEyebrow: 'Service · Specialist',
    heroHeadline: 'Permanent floor graphics that stay safe underfoot.',
    heroSubhead:
      'Etched lane markings, depth markers, hazard zones and logos for swimming pools, leisure centres and schools.',
    heroPromise: 'Floor graphics that don\'t peel — and don\'t reduce slip resistance.',
    heroVariant: 'navy',
    heroImageKey: 'serviceEtching',
    whatWeDo: [
      'Pool lane markers, depth markers and warning zones.',
      'Wayfinding and brand graphics on hard floors.',
      'Hazard demarcation for warehouses and workshops.',
      'Done with anti-slip aware chemistry — no slippy patches.',
      'Permanent, abrasion-resistant — they wear with the floor, not on top of it.',
    ],
    whereUsed: [sectorChips.commercial, sectorChips.hospital],
    howItWorks: [
      { title: 'Design', body: 'Confirm graphics, sizes and positions. Approval drawing.' },
      { title: 'Mask', body: 'Precision masking on the floor surface.' },
      { title: 'Etch', body: 'Controlled chemical etch — no thermal damage.' },
      { title: 'Clean & verify', body: 'Wash off, photograph, hand over.' },
    ],
    faqs: [
      { q: 'Will it make the floor slipperier?', a: 'No. We use chemistry that respects the existing anti-slip profile of the floor.' },
      { q: 'How long does it last?', a: 'Permanent — it\'s part of the floor surface, not a sticker.' },
      { q: 'Can you match a brand colour?', a: 'Where the substrate allows, yes. We agree the test panel before commencing.' },
      { q: 'Do you need to drain the pool?', a: 'For pool-side graphics, yes — we work with your maintenance window.' },
    ],
    metaTitle: 'Etched Floor Graphics & Lane Markings Ireland | SaniSafe Solutions',
    metaDescription:
      'Permanent etched floor graphics — pool markers, hazard zones, wayfinding and brand graphics — for leisure centres, schools and commercial sites in Ireland.',
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
      'Recommendations for treatment where readings sit below the safe threshold.',
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
      { q: 'Is this what insurers want?', a: 'Yes. Pendulum (PTV) is the recognised method in HSA and UK HSE guidance, and it produces a number that is defensible in court.' },
      { q: 'How long does a test take?', a: 'A typical site is half a day, including report-time on the day.' },
      { q: 'What if we fail?', a: 'We treat the floor and re-test under the same conditions. Treatment is invisible.' },
    ],
    metaTitle: 'SlipTest — Pendulum Slip Testing & Insurance Reports Ireland',
    metaDescription:
      'Pendulum (PTV) slip testing to HSA guidance, written insurance-grade reports, and treatment if needed. SlipTest by SaniSafe Solutions — nationwide.',
  },
};
