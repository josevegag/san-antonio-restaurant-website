import type { Locale } from "./i18n";

export const sections = ["about", "menu", "gallery", "locations", "order-online", "catering", "reservations", "contact"] as const;
export type Section = typeof sections[number];
export function isSection(value: string): value is Section { return sections.includes(value as Section); }

export const sectionCopy: Record<Section, Record<Locale, { title: string; subtitle: string }>> = {
  about: {
    en: { title: "Our Story", subtitle: "Good food, good company, and a place for everyone at the table." },
    es: { title: "Nuestra Historia", subtitle: "Buena comida, buena compañía y un lugar para todos en la mesa." },
  },
  menu: {
    en: { title: "Our Menu", subtitle: "Traditional favorites, made to order and ready to share." },
    es: { title: "Nuestro Menú", subtitle: "Favoritos tradicionales, preparados al momento para compartir." },
  },
  gallery: {
    en: { title: "Gallery", subtitle: "A closer look at the flavors that make us, us." },
    es: { title: "Galería", subtitle: "Conoce de cerca los sabores que nos distinguen." },
  },
  locations: {
    en: { title: "Locations", subtitle: "Three neighborhood restaurants. One warm welcome." },
    es: { title: "Sucursales", subtitle: "Tres restaurantes en tu comunidad. La misma bienvenida cálida." },
  },
  "order-online": {
    en: { title: "Order Online", subtitle: "Choose your San Antonio and let us take care of the rest." },
    es: { title: "Ordenar en línea", subtitle: "Elige tu San Antonio y déjanos encargarnos del resto." },
  },
  catering: {
    en: { title: "Catering", subtitle: "Bring the flavors of San Antonio to your next celebration." },
    es: { title: "Catering", subtitle: "Lleva los sabores de San Antonio a tu próxima celebración." },
  },
  reservations: {
    en: { title: "Reservations", subtitle: "Planning a visit? Your neighborhood restaurant is ready to help." },
    es: { title: "Reservaciones", subtitle: "¿Planeas visitarnos? Tu sucursal está lista para ayudarte." },
  },
  contact: {
    en: { title: "Contact", subtitle: "We would love to hear from you." },
    es: { title: "Contacto", subtitle: "Nos encantará saber de ti." },
  },
};
