import type { Location } from "./locations";

export type BranchSlug = Location["slug"];
export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  photoId: string;
  specialty?: boolean;
  prices: Partial<Record<BranchSlug, number>>;
};

/** A photo-led selection checked against the official branch ordering menus.
 * Null prices mean the product was not clearly listed for that branch.
 */
export const menuItems: MenuItem[] = [
  { id: "tacos-suadero", name: "Tacos de Suadero", category: "Tacos", description: "A San Antonio taco favorite.", photoId: "tacos-tacos-de-suadero", specialty: true, prices: { monroe: 12, clifton: 12 } },
  { id: "tacos-rancheros", name: "Tacos Rancheros de Bistec", category: "Tacos", description: "Bistec served ranchero style.", photoId: "tacos-tacos-rancheros-de-bistec", specialty: true, prices: { monroe: 13.5, clifton: 13 } },
  { id: "tacos-lengua", name: "Tacos de Lengua", category: "Tacos", description: "Traditional tacos de lengua.", photoId: "tacos-tacos-de-lengua", prices: { monroe: 13.5, clifton: 13 } },
  { id: "tacos-dorados", name: "Tacos Dorados de Queso", category: "Tacos", description: "Crisp tacos filled with cheese.", photoId: "tacos-tacos-dorados-de-queso", prices: { monroe: 12, broadway: 11, clifton: 12 } },
  { id: "huevos-mexicana", name: "Huevos a la Mexicana", category: "Breakfast", description: "A familiar breakfast classic.", photoId: "desayunos-huevos-a-la-mexicana", prices: { monroe: 13, broadway: 13, clifton: 12 } },
  { id: "huevos-chorizo", name: "Huevos con Chorizo", category: "Breakfast", description: "Eggs with chorizo.", photoId: "desayunos-huevos-con-chorizo", prices: { monroe: 13, broadway: 13, clifton: 12 } },
  { id: "huevos-nopales", name: "Huevos con Nopales", category: "Breakfast", description: "Eggs with nopales.", photoId: "desayunos-huevos-con-nopales", prices: { monroe: 13, broadway: 13, clifton: 12 } },
  { id: "enchiladas-suizas", name: "Enchiladas Suizas", category: "Plates", description: "A beloved enchilada plate.", photoId: "platillos-enchiladas-suizas", specialty: true, prices: { monroe: 16, clifton: 16 } },
  { id: "enchiladas-mole", name: "Enchiladas de Mole", category: "Plates", description: "Enchiladas with mole.", photoId: "platillos-enchiladas-de-mole", prices: { monroe: 16, broadway: 16, clifton: 16 } },
  { id: "bistec-encebollado", name: "Bisteck Encebollado", category: "Plates", description: "Bistec with onions.", photoId: "platillos-bistec-encebollado", prices: { monroe: 17, broadway: 17, clifton: 17 } },
  { id: "bistec-nopales", name: "Bisteck con Nopales y Rajas", category: "Plates", description: "Bistec, nopales and rajas.", photoId: "platillos-bistec-con-nopales-y-rajas", prices: { monroe: 17, broadway: 17, clifton: 17 } },
  { id: "fajitas-mixtas", name: "Fajitas Mixtas", category: "Plates", description: "Mixed fajitas served hot.", photoId: "platillos-fajita-mixta", prices: { monroe: 17, broadway: 17, clifton: 17 } },
  { id: "parrillada", name: "Parrillada Mixta", category: "Plates", description: "San Antonio style mixed grill.", photoId: "platillos-parrillada-mixta", specialty: true, prices: { clifton: 19 } },
  { id: "molcajete", name: "Molcajete Mixto", category: "Plates", description: "An abundant molcajete to share.", photoId: "platillos-molcajete-mixto", specialty: true, prices: { clifton: 47.8 } },
  { id: "alambre", name: "Alambre", category: "Plates", description: "A house menu favorite.", photoId: "platillos-alambre", prices: { monroe: 17.5, broadway: 17.5, clifton: 17.5 } },
  { id: "huarache-cecina", name: "Huarache de Cecina", category: "Antojitos", description: "Huarache topped with cecina.", photoId: "huaraches-huarache-de-cecina", prices: { monroe: 11, broadway: 11, clifton: 11 } },
  { id: "huarache-sencillo", name: "Huarache Sencillo", category: "Antojitos", description: "A traditional huarache.", photoId: "huaraches-huarache-sencillo", prices: { monroe: 9.5, broadway: 9.5, clifton: 9.5 } },
  { id: "picaditas-pastor", name: "Picaditas al Pastor", category: "Antojitos", description: "Picaditas topped with al pastor.", photoId: "picaditas-picaditas-al-pastor", prices: { monroe: 14, clifton: 14 } },
  { id: "quesadilla-huitlacoche", name: "Quesadilla de Huitlacoche", category: "Antojitos", description: "Quesadilla with huitlacoche.", photoId: "quesadillas-quesadilla-de-huitlacoche", prices: { monroe: 14, broadway: 14, clifton: 14 } },
  { id: "quesadilla-pollo", name: "Quesadilla de Pollo", category: "Antojitos", description: "Quesadilla with chicken.", photoId: "quesadillas-quesadilla-de-pollo", prices: { monroe: 14, broadway: 14, clifton: 14 } },
  { id: "sopes-bistec", name: "Sopes de Bistec", category: "Antojitos", description: "Sopes topped with bistec.", photoId: "sopes-sopez-de-bistec", prices: { monroe: 14, broadway: 14.5, clifton: 14.5 } },
  { id: "tlacoyos-cecina", name: "Tlacoyos de Cecina", category: "Antojitos", description: "Tlacoyos topped with cecina.", photoId: "tlacoyos-tlacoyos-de-cecina", prices: { monroe: 14, clifton: 14.5 } },
  { id: "camarones-diabla", name: "Camarones a la Diabla", category: "Seafood", description: "Shrimp in a spicy diabla sauce.", photoId: "seafood-camarones-a-la-diabla", specialty: true, prices: { monroe: 16, broadway: 16, clifton: 16 } },
  { id: "camarones-ajillo", name: "Camarones al Ajillo", category: "Seafood", description: "Shrimp with garlic.", photoId: "seafood-camarones-al-ajillo", prices: { monroe: 16, broadway: 16, clifton: 16 } },
  { id: "pozole", name: "Pozole", category: "Soups", description: "A traditional bowl of pozole.", photoId: "sopas-pozole", prices: { monroe: 14.5, clifton: 14.5 } },
  { id: "chocoflan", name: "Chocoflan", category: "Desserts", description: "A sweet finish to the meal.", photoId: "desserts-chocoflan", prices: { monroe: 5, broadway: 5, clifton: 5 } },
  { id: "flan", name: "Flan", category: "Desserts", description: "Classic flan.", photoId: "desserts-flan", prices: { monroe: 5, broadway: 5, clifton: 5 } },
];

export const menuCategories = ["All", "Tacos", "Breakfast", "Plates", "Antojitos", "Seafood", "Soups", "Desserts"];

export const menuDescriptionsEs: Record<string, string> = {
  "tacos-suadero": "Uno de los tacos favoritos de San Antonio.",
  "tacos-rancheros": "Bistec preparado al estilo ranchero.",
  "tacos-lengua": "Tacos tradicionales de lengua.",
  "tacos-dorados": "Tacos crujientes rellenos de queso.",
  "huevos-mexicana": "Un clásico del desayuno mexicano.",
  "huevos-chorizo": "Huevos con chorizo.",
  "huevos-nopales": "Huevos con nopales.",
  "enchiladas-suizas": "Un platillo de enchiladas muy querido.",
  "enchiladas-mole": "Enchiladas con mole.",
  "bistec-encebollado": "Bistec con cebolla.",
  "bistec-nopales": "Bistec con nopales y rajas.",
  "fajitas-mixtas": "Fajitas mixtas servidas calientes.",
  "parrillada": "Parrillada mixta al estilo San Antonio.",
  "molcajete": "Un abundante molcajete para compartir.",
  "alambre": "Uno de los favoritos del menú.",
  "huarache-cecina": "Huarache con cecina.",
  "huarache-sencillo": "Un huarache tradicional.",
  "picaditas-pastor": "Picaditas con carne al pastor.",
  "quesadilla-huitlacoche": "Quesadilla de huitlacoche.",
  "quesadilla-pollo": "Quesadilla de pollo.",
  "sopes-bistec": "Sopes con bistec.",
  "tlacoyos-cecina": "Tlacoyos con cecina.",
  "camarones-diabla": "Camarones en salsa picante a la diabla.",
  "camarones-ajillo": "Camarones al ajillo.",
  "pozole": "Un plato tradicional de pozole.",
  "chocoflan": "Un dulce final para la comida.",
  "flan": "Flan clásico.",
};
