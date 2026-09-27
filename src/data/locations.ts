export type Hours = { days: string; time: string };
export type Location = {
  slug: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  tel: string;
  hours: Hours[];
  orderUrl: string;
  mapUrl: string;
  services: string[];
  galleryIds: string[];
};

/** Business facts are from the client's official contact and online-ordering pages. */
export const locations: Location[] = [
  {
    slug: "monroe",
    name: "San Antonio Monroe",
    neighborhood: "Passaic · Monroe Street",
    address: "206 Monroe St",
    city: "Passaic, NJ 07055",
    phone: "(973) 614-9666",
    tel: "+19736149666",
    hours: [{ days: "Every day", time: "9:30 AM – 11:00 PM" }],
    orderUrl: "https://order.epipay.com/m4200000556620/en/WebOrder?STORE_CODE=MTAwMA%3D%3D",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=206+Monroe+St+Passaic+NJ+07055",
    services: ["Dine in", "Online ordering"],
    galleryIds: ["tacos-tacos-rancheros-de-bistec", "platillos-enchiladas-suizas", "sopas-pozole"],
  },
  {
    slug: "broadway",
    name: "San Antonio Broadway",
    neighborhood: "Passaic · Broadway",
    address: "101 Broadway",
    city: "Passaic, NJ 07055",
    phone: "(973) 246-3996",
    tel: "+19732463996",
    hours: [
      { days: "Sunday – Thursday", time: "10:00 AM – 9:00 PM" },
      { days: "Friday – Saturday", time: "10:00 AM – 10:00 PM" },
    ],
    orderUrl: "https://order.epipay.com/m4200000556620/en/WebOrder?STORE_CODE=MTAwMQ%3D%3D",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=101+Broadway+Passaic+NJ+07055",
    services: ["Dine in", "Online ordering"],
    galleryIds: ["platillos-parrillada-mixta", "huaraches-huarache-de-cecina", "desserts-chocoflan"],
  },
  {
    slug: "clifton",
    name: "San Antonio Clifton",
    neighborhood: "Clifton · Village Square",
    address: "3–5 Village Square E",
    city: "Clifton, NJ 07011",
    phone: "(973) 272-6950",
    tel: "+19732726950",
    hours: [{ days: "Every day", time: "9:00 AM – 11:00 PM" }],
    orderUrl: "https://order.epipay.com/m4200000556620/en/WebOrder?STORE_CODE=MTAwMg%3D%3D",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=3-5+Village+Square+E+Clifton+NJ+07011",
    services: ["Dine in", "Online ordering"],
    galleryIds: ["platillos-molcajete-mixto", "tacos-tacos-de-suadero", "seafood-camarones-a-la-diabla"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
