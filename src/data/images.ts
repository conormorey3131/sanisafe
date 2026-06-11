/**
 * Central image registry.
 *
 * Every <img> on the site MUST reference a slot here so that swapping in real
 * photography later is a one-file change. Each slot also records the recommended
 * Unsplash/Pexels search query so PLACEHOLDERS.md stays in sync.
 *
 * Current state: 17/17 slots are pointed at curated Unsplash photos (free,
 * royalty-free, photographer-credit best practice — see PLACEHOLDERS.md).
 * They are served via the Unsplash CDN with `auto=format&fit=crop` so each
 * browser gets a responsive WebP/AVIF at the correct dimensions.
 *
 * To swap in a bespoke photo:
 *   1. Drop the file in /public/images/<area>/<name>.jpg (≤ 300 KB).
 *   2. Update the `src` to /images/<area>/<name>.jpg.
 *   3. Update `alt` to a meaningful description (no "image of…").
 *   4. Tick the box in PLACEHOLDERS.md.
 */

export type ImageSlot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  swapQuery: string;
  swapSource: 'unsplash' | 'pexels';
};

const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  // ---- Hero (LCP — eager loaded) ----
  hero: {
    src: unsplash('photo-1631248055158-edec7a3c072b', 1920, 75),
    alt: 'Polished hard floor in a clean public corridor',
    width: 1920,
    height: 1080,
    swapQuery: 'polished marble hospital corridor',
    swapSource: 'unsplash',
  },

  // ---- Home hero (LCP) — real restoration photography to lead on cleaning & restoration ----
  heroHome: {
    src: '/images/work/oak-living-room.jpeg',
    alt: 'Restored oak floor re-finished to a warm, even sheen',
    width: 1600,
    height: 1067,
    swapQuery: 'restored hardwood floor warm interior',
    swapSource: 'unsplash',
  },

  // ---- Service cards ----
  serviceMarble: {
    src: unsplash('photo-1620207418302-439b387441b0', 800),
    alt: 'Restored marble floor in a modern interior',
    width: 800,
    height: 600,
    swapQuery: 'marble floor polishing close up',
    swapSource: 'unsplash',
  },
  serviceWood: {
    src: unsplash('photo-1493663284031-b7e3aefcae8e', 800),
    alt: 'Restored hardwood floor in warm daylight',
    width: 800,
    height: 600,
    swapQuery: 'restored hardwood floor sanding',
    swapSource: 'unsplash',
  },
  serviceTravertine: {
    src: '/images/work/marble-hallway-polished.jpeg',
    alt: 'Travertine floor honed and polished back to a clear, even finish',
    width: 800,
    height: 600,
    swapQuery: 'travertine floor polishing close up',
    swapSource: 'unsplash',
  },
  serviceMarmoleum: {
    src: '/images/work/yellow-school-floor.jpeg',
    alt: 'Marmoleum floor stripped back and polished to a clean sheen',
    width: 800,
    height: 600,
    swapQuery: 'marmoleum linoleum floor polished',
    swapSource: 'unsplash',
  },
  serviceAntiSlip: {
    src: unsplash('photo-1571902943202-507ec2618e8f', 800),
    alt: 'Swimming pool deck with a wet tiled surround',
    width: 800,
    height: 600,
    swapQuery: 'swimming pool deck wet tiles anti slip',
    swapSource: 'unsplash',
  },
  serviceDeepClean: {
    src: '/images/work/slate-floor-sealed.jpeg',
    alt: 'Slate floor before and after a deep clean and re-seal',
    width: 800,
    height: 600,
    swapQuery: 'deep clean stain removal tiled floor',
    swapSource: 'unsplash',
  },
  serviceSlipTest: {
    src: unsplash('photo-1604014237800-1c9102c219da', 800),
    alt: 'Inspection of a hard floor under controlled conditions',
    width: 800,
    height: 600,
    swapQuery: 'pendulum slip test equipment floor',
    swapSource: 'pexels',
  },
  // Homepage service card for SlipTest — a pool deck (the SlipTest page hero keeps serviceSlipTest)
  serviceSlipTestCard: {
    src: '/images/work/killarney-pool-deck.webp',
    alt: 'Indoor pool deck at a Killarney leisure centre — the kind of wet surface we slip-test',
    width: 800,
    height: 600,
    swapQuery: 'swimming pool deck wet tiles',
    swapSource: 'unsplash',
  },

  // ---- Sector tiles ----
  sectorHospital: {
    src: unsplash('photo-1538108149393-fbbd81895907', 1200),
    alt: 'Clean hospital corridor with a polished hard floor',
    width: 1200,
    height: 800,
    swapQuery: 'hospital corridor clean floor',
    swapSource: 'unsplash',
  },
  sectorCommercial: {
    src: unsplash('photo-1566073771259-6a8506099945', 1200),
    alt: 'Hotel lobby with a restored marble floor',
    width: 1200,
    height: 800,
    swapQuery: 'hotel lobby marble floor',
    swapSource: 'unsplash',
  },
  // Schools — a classroom with a polished hard floor (we do a lot of school work)
  classroom: {
    src: unsplash('photo-1580582932707-520aed937b7b', 1200),
    alt: 'Empty classroom with desks, a blackboard and a clean, polished hard floor',
    width: 1200,
    height: 800,
    swapQuery: 'empty classroom polished floor',
    swapSource: 'unsplash',
  },
  sectorDomestic: {
    src: unsplash('photo-1556909114-f6e7ad7d3136', 1200),
    alt: 'Bright modern kitchen with a tiled floor',
    width: 1200,
    height: 800,
    swapQuery: 'domestic kitchen tiled floor',
    swapSource: 'unsplash',
  },

  // ---- About / location ----
  about: {
    src: unsplash('photo-1590089415225-401ed6f9db8e', 1200),
    alt: 'Irish landscape near Ennis, Co. Clare',
    width: 1200,
    height: 800,
    swapQuery: 'ennis county clare ireland',
    swapSource: 'unsplash',
  },

  // ---- Open Graph (the live OG image is /public/og-default.png) ----
  og: {
    src: '/og-default.png',
    alt: 'SaniSafe Solutions — floor restoration, anti-slip and pendulum slip testing',
    width: 1200,
    height: 630,
    swapQuery: 'polished marble hospital corridor',
    swapSource: 'unsplash',
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
