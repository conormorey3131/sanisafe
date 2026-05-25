export const site = {
  name: 'SaniSafe Solutions',
  shortName: 'SaniSafe',
  tagline: 'Protection You Can Trust. Safety You Can Stand On!',
  domain: 'sanisafe.ie',
  url: 'https://sanisafe.ie',
  email: 'info@sanisafe.ie',
  phoneDisplay: '+353 86 179 7079',
  phoneHref: 'tel:+353861797079',
  location: {
    addressLocality: 'Ennis',
    addressRegion: 'Clare',
    addressCountry: 'IE',
    // TODO: real street address once confirmed
    streetAddressDisplay: 'Ennis, Co. Clare — serving all of Ireland.',
  },
  hours: 'Mon–Fri, 08:00–18:00. Emergency call-outs by arrangement.',
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
    { label: 'Polished Concrete', href: '/services/polished-concrete' },
    { label: 'Anti-Slip Treatments', href: '/services/anti-slip-treatments' },
    { label: 'Etching & Graphics', href: '/services/etching-and-graphics' },
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
    slug: 'polished-concrete',
    title: 'Polished Concrete',
    short: 'Polished Concrete',
    promise: 'Mechanically polished concrete for durable, low-maintenance floors.',
    accent: 'green' as const,
    imageKey: 'serviceConcrete' as const,
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
    slug: 'etching-and-graphics',
    title: 'Etching & Graphics',
    short: 'Etching & Graphics',
    promise: 'Permanent etched graphics and lane markings for pools and leisure.',
    accent: 'blue' as const,
    imageKey: 'serviceEtching' as const,
  },
  {
    slug: 'sliptest',
    title: 'SlipTest — Pendulum Slip Testing',
    short: 'SlipTest',
    promise: 'Pendulum (PTV) testing and full insurance reports under our SlipTest service.',
    accent: 'yellow' as const,
    imageKey: 'serviceSlipTest' as const,
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
