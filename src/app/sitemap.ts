import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_CANONICAL_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const paths = ["", "about", "menu", "gallery", "locations", "order-online", "catering", "reservations", "contact", ...locations.map(location => `locations/${location.slug}`)];
  return paths.flatMap(path => {
    const en = `${base}/${path}`;
    const es = `${base}/es${path ? `/${path}` : ""}`;
    const alternates = { languages: { en, es } };
    return [
      { url: en, alternates, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 },
      { url: es, alternates, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 },
    ];
  });
}
