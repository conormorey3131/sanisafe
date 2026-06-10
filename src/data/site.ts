export const site = {
  name: 'SaniSafe Solutions',
  shortName: 'SaniSafe',
  tagline: 'Protection You Can Trust. Safety You Can Stand On!',
  domain: 'sanisafe.ie',
  url: 'https://sanisafe.ie',
  email: 'info@sanisafe.ie',
  // TODO: paste the Web3Forms access key for info@sanisafe.ie (free, instant at https://web3forms.com).
  // Until this is set to a real key, the contact form falls back to opening the visitor's email app.
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  phoneDisplay: '+353 86 179 7079',
  phoneHref: 'tel:+353861797079',
  location: {
    addressLocality: 'Ennis',
    addressRegion: 'Clare',
    addressCountry: 'IE',
    // TODO: real street address once confirmed
    streetAddressDisplay: 'Ennis, Co. Clare — serving all of Ireland.',
  },
  hours: 'Mon–Fri, 08:00–18:00.',
  // TODO: replace placeholder with real CRO number once issued
  croDisplay: 'CRO No.: [PLACEHOLDER — CRO registration pending]',
  subBrand: {
    name: 'SlipTest',
    strapline: 'Confidence in every step.',
    logo: '/sliptest-logo.jpeg',
  },
  social: {
    // TODO: real social links
    instagram: '#',
    linkedin: '#',
    facebook: '#',
  },
} as const;

export const nav = [
  { label: 'Services', href: '/services', children: [
    { label: 'Marble & Stone Restoration', href: '/services/marble-and-stone-restoration' },
    { label: 'Wooden Floor Restoration', href: '/services/wooden-floor-restoration' },
    { label: 'Travertine Restoration', href: '/services/travertine' },
    { label: 'Marmoleum Floor Restoration', href: '/services/marmoleum' },
    { label: 'Anti-Slip Treatments', href: '/services/anti-slip-treatments' },
    { label: 'Deep Clean & Stain Removal', href: '/services/deep-cleaning' },
    { label: 'SlipTest — Pendulum Testing', href: '/services/sliptest' },
  ] },
  { label: 'Sectors', href: '/sectors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    slug: 'marble-and-stone-restoration',
    title: 'Marble & Stone Restoration',
    short: 'Marble Restoration',
    promise: 'Grind, hone and polish natural stone back to a clear, even finish.',
    accent: 'blue' as const,
    imageKey: 'serviceMarble' as const,
  },
  {
    slug: 'wooden-floor-restoration',
    title: 'Wooden Floor Restoration',
    short: 'Wooden Floors',
    promise: 'Sand, repair and seal hardwood floors with low-dust extraction.',
    accent: 'blue' as const,
    imageKey: 'serviceWood' as const,
  },
  {
    slug: 'travertine',
    title: 'Travertine Restoration',
    short: 'Travertine',
    promise: 'Grind, hone, fill and polish travertine back to a smooth, even finish.',
    accent: 'green' as const,
    imageKey: 'serviceTravertine' as const,
  },
  {
    slug: 'marmoleum',
    title: 'Marmoleum Floor Restoration',
    short: 'Marmoleum',
    promise: 'Strip, clean and re-polish marmoleum and linoleum floors to a fresh, even sheen.',
    accent: 'blue' as const,
    imageKey: 'serviceMarmoleum' as const,
  },
  {
    slug: 'anti-slip-treatments',
    title: 'Anti-Slip Treatments',
    short: 'Anti-Slip Treatments',
    promise: 'Invisible chemical treatments that raise slip resistance on wet floors.',
    accent: 'green' as const,
    imageKey: 'serviceAntiSlip' as const,
  },
  {
    slug: 'deep-cleaning',
    title: 'Deep Clean & Stain Removal',
    short: 'Deep Cleaning',
    promise: 'Specialist deep cleaning and stain removal for tile, stone, wood, concrete and marmoleum.',
    accent: 'blue' as const,
    imageKey: 'serviceDeepClean' as const,
  },
  {
    slug: 'sliptest',
    title: 'SlipTest — Pendulum Slip Testing',
    short: 'SlipTest',
    promise: 'Pendulum (PTV) testing and full insurance reports under our SlipTest service.',
    accent: 'yellow' as const,
    imageKey: 'serviceSlipTestCard' as const,
  },
] as const;

export const sectors = [
  {
    slug: 'hospital-and-healthcare',
    title: 'Hospital & Healthcare',
    pitch:
      'Floors that meet infection-control standards and stand up to constant cleaning. Pendulum-tested surfaces give your H&S team the paperwork they need.',
    imageKey: 'sectorHospital' as const,
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    pitch:
      'Hotels, retail, offices, leisure centres and schools — restored out of hours so trading is not affected. Anti-slip treatments protect guests, staff and your brand.',
    imageKey: 'sectorCommercial' as const,
  },
  {
    slug: 'domestic',
    title: 'Domestic',
    pitch:
      'Bring tired floors back to life without ripping them out. Same care and standards we apply to commercial work — at a price that makes sense for a home.',
    imageKey: 'sectorDomestic' as const,
  },
] as const;
