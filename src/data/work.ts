/**
 * Recent-work gallery registry (real client before/after photography).
 *
 * Each entry is a single self-contained before/after collage supplied by the
 * client, copied into /public/images/work/ with a clean filename. Pages
 * reference these by key so the same photo can appear in more than one place
 * (home gallery + the relevant service page) without duplicating metadata.
 *
 * `tag`     — short floor/material label shown above the caption.
 * `caption` — one-line description of the job.
 * `alt`     — meaningful alt text (describes the before → after change).
 */

export type WorkItem = {
  src: string;
  alt: string;
  tag: string;
  caption: string;
  /** Corner badge text. Defaults to "Before / After" — set this for single
   *  (non-before/after) photos such as facilities we maintain. */
  badge?: string;
};

export const work = {
  marbleHallway: {
    src: '/images/work/marble-hallway-polished.jpeg',
    alt: 'Travertine tiled floor before and after restoration — dull, worn tiles brought back to a clear, reflective polish',
    tag: 'Marble & stone',
    caption: 'Travertine floor — honed and polished back to a clear finish',
  },
  marbleBathroom: {
    src: '/images/work/marble-bathroom.jpeg',
    alt: 'Marble bathroom floor before and after — etched, dull tiles diamond-polished to a bright, even sheen',
    tag: 'Marble & stone',
    caption: 'Marble bathroom — diamond-pad polishing, gloss restored',
  },
  churchFlagstone: {
    src: '/images/work/church-flagstone.jpeg',
    alt: 'Church aisle sandstone flagstones before and after — dark, ingrained dirt lifted to reveal clean natural stone',
    tag: 'Natural stone',
    caption: 'Church flagstone aisle — decades of grime removed',
  },
  slateFloor: {
    src: '/images/work/slate-floor-sealed.jpeg',
    alt: 'Slate tiled floor before and after — dry, faded tiles cleaned and sealed to bring back the colour and depth',
    tag: 'Natural stone',
    caption: 'Slate floor — deep-cleaned and re-sealed',
  },
  limestoneFlagstone: {
    src: '/images/work/limestone-flagstone.jpeg',
    alt: 'Limestone flagstone floor before and after — grey, soiled flags cleaned back to a warm, even tone',
    tag: 'Natural stone',
    caption: 'Limestone flags — stripped, cleaned and sealed',
  },
  commercialLobby: {
    src: '/images/work/commercial-lobby-limestone.jpeg',
    alt: 'Commercial reception floor before and after — dull limestone tiles polished to a bright, reflective finish',
    tag: 'Commercial',
    caption: 'Reception floor — restored to a sharp, polished finish',
  },
  oakRestoration: {
    src: '/images/work/oak-floor-restoration.jpeg',
    alt: 'Solid oak floor before, mid-sand and after — stained, worn boards sanded and lacquered to a clean, even finish',
    tag: 'Wooden floors',
    caption: 'Solid oak — sanded, repaired and re-finished',
  },
  oakLivingRoom: {
    src: '/images/work/oak-living-room.jpeg',
    alt: 'Oak living-room floor after restoration — boards re-finished to a warm, glossy sheen',
    tag: 'Wooden floors',
    caption: 'Oak living-room floor — re-finished to a warm sheen',
  },
  pubFloor: {
    src: '/images/work/pub-floor-wood-mosaic.jpeg',
    alt: 'Bar floor before and after — scuffed wood and mosaic border cleaned and re-finished to a clean, even surface',
    tag: 'Wooden floors',
    caption: 'Bar floor — wood and mosaic border brought back',
  },
  pineHallway: {
    src: '/images/work/pine-hallway.jpeg',
    alt: 'Pine floorboards before and after — dull, marked boards sanded and sealed to a bright, clean finish',
    tag: 'Wooden floors',
    caption: 'Pine hallway — sanded and sealed',
  },
  redSafetyFloor: {
    src: '/images/work/red-safety-floor.jpeg',
    alt: 'Red safety-vinyl floor before and after — flat, scuffed surface stripped and re-sealed to a deep, glossy shine',
    tag: 'Safety flooring',
    caption: 'Safety vinyl — stripped back and re-sealed',
  },
  blueSchoolFloor: {
    src: '/images/work/blue-school-floor.jpeg',
    alt: 'Blue classroom floor before and after — worn, matt vinyl stripped and polished to a clean, reflective finish',
    tag: 'Schools',
    caption: 'School floor — stripped and polished out of hours',
  },
  greenClinicFloor: {
    src: '/images/work/green-clinic-floor.jpeg',
    alt: 'Green healthcare-grade floor before and after — dull, scratched surface stripped and sealed to a bright shine',
    tag: 'Healthcare',
    caption: 'Healthcare floor — restored and re-sealed',
  },
  yellowSchoolFloor: {
    src: '/images/work/yellow-school-floor.jpeg',
    alt: 'Yellow marmoleum floor before and after — faded, matt surface stripped and polished to a clean sheen',
    tag: 'Schools',
    caption: 'Marmoleum floor — stripped back and polished',
  },
  killarneyPool: {
    src: '/images/work/killarney-pool-deck.webp',
    alt: 'Indoor swimming pool and tiled pool deck at a Killarney leisure centre we maintain',
    tag: 'Leisure',
    caption: 'Killarney leisure-centre pool deck — a facility we maintain',
    badge: 'On site',
  },
} satisfies Record<string, WorkItem>;

export type WorkKey = keyof typeof work;

/** Resolve an ordered list of work items by key. */
export const pickWork = (keys: WorkKey[]): WorkItem[] => keys.map((k) => work[k]);

/**
 * Partner / client logos (real, client-supplied — present in /public).
 * Shown in the "Trusted by" strip.
 */
export const partners = [
  { name: 'Coral Gym', logo: '/gym-sanisafe.jpeg' },
] as const;
