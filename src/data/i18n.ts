export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export function localizedHref(locale: Locale, path = "/") {
  return locale === "es" ? `/es${path === "/" ? "" : path}` : path;
}

export function alternateHref(pathname: string, target: Locale) {
  const englishPath = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return localizedHref(target, englishPath);
}

export function tr(locale: Locale, english: string, spanish: string) {
  return locale === "es" ? spanish : english;
}

export const navigation = [
  { path: "/about", en: "Our Story", es: "Nuestra Historia" },
  { path: "/menu", en: "Menu", es: "Menú" },
  { path: "/gallery", en: "Gallery", es: "Galería" },
  { path: "/locations", en: "Locations", es: "Sucursales" },
  { path: "/catering", en: "Catering", es: "Catering" },
  { path: "/reservations", en: "Reservations", es: "Reservaciones" },
  { path: "/contact", en: "Contact", es: "Contacto" },
] as const;

export const menuCategoryLabels: Record<string, [string, string]> = {
  All: ["All", "Todo"], Tacos: ["Tacos", "Tacos"], Breakfast: ["Breakfast", "Desayunos"],
  Plates: ["Plates", "Platillos"], Antojitos: ["Antojitos", "Antojitos"],
  Seafood: ["Seafood", "Mariscos"], Soups: ["Soups", "Sopas"], Desserts: ["Desserts", "Postres"],
};

export const galleryCategoryLabels: Record<string, [string, string]> = {
  All: ["All photos", "Todas las fotos"], APPETIZERS: ["Appetizers", "Entradas"],
  BAKERY: ["Bakery", "Panadería"], BEVERAGES: ["Beverages", "Bebidas"], BURRITOS: ["Burritos", "Burritos"],
  DESAYUNOS: ["Breakfast", "Desayunos"], DESSERTS: ["Desserts", "Postres"], ENSALADAS: ["Salads", "Ensaladas"],
  HUARACHES: ["Huaraches", "Huaraches"], "KIDS MENU": ["Kids menu", "Menú infantil"],
  PICADITAS: ["Picaditas", "Picaditas"], PLATILLOS: ["Plates", "Platillos"],
  QUESADILLAS: ["Quesadillas", "Quesadillas"], SEAFOOD: ["Seafood", "Mariscos"], SIDES: ["Sides", "Acompañamientos"],
  SOPAS: ["Soups", "Sopas"], SOPES: ["Sopes", "Sopes"], TACOS: ["Tacos", "Tacos"],
  TAMALES: ["Tamales", "Tamales"], TLACOYOS: ["Tlacoyos", "Tlacoyos"], TORTAS: ["Tortas", "Tortas"],
  TOSTADAS: ["Tostadas", "Tostadas"], WEEKENDS: ["Weekends", "Fines de semana"],
};

export function categoryLabel(locale: Locale, category: string, labels: Record<string, [string, string]>) {
  const pair = labels[category];
  return pair ? pair[locale === "es" ? 1 : 0] : category;
}

export function hoursDays(locale: Locale, days: string) {
  if (locale === "en") return days;
  return ({ "Every day": "Todos los días", "Sunday – Thursday": "Domingo a jueves", "Friday – Saturday": "Viernes y sábado" } as Record<string, string>)[days] ?? days;
}
