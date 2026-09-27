import catalog from "./photos.json";

export type Photo = (typeof catalog)[number];
export const photos: Photo[] = catalog;
export const photoById = new Map(photos.map((photo) => [photo.id, photo]));

export const galleryCategories = ["All", ...Array.from(new Set(photos.map((photo) => photo.category)))];
