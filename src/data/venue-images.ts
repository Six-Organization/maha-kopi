/**
 * Venue / atmosphere photos of MAHA Kopi Bali (interior, terrace, rice-field
 * view, service). Drop the original files into /public/venue (see README there),
 * then fill in the entries below — the UI switches from placeholders to real
 * photos automatically once `venuePhotos` is non-empty.
 *
 * Each `src` must point to a file that actually exists in /public/venue,
 * otherwise Next.js image optimization will 404.
 */
export type VenuePhoto = {
  src: string;
  label: { id: string; en: string };
};

export const venuePhotos: VenuePhoto[] = [
  { src: "/venue/interior-window.webp", label: { id: "View Jendela", en: "Window View" } },
  { src: "/venue/interior-sunset.webp", label: { id: "Cahaya Sore", en: "Golden Hour" } },
  { src: "/venue/service.webp", label: { id: "Pelayanan Ramah", en: "Friendly Service" } },
];

/** Iconic outdoor terrace shot — used as the gallery feature & About panel. */
export const venueOutdoor = "/venue/outdoor-terrace.webp";

/** Wide hero-background / gallery-feature photo. */
export const venueHero: string | null = venueOutdoor;

export const hasVenuePhotos = venuePhotos.length > 0;
