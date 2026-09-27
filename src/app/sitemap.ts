import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_CANONICAL_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const paths = ["", "about", "menu", "gallery", "locations", "order-online", "catering", "reservations", "contact", ...locations.map(location => `locations/${location.slug}`)];
  return paths.map(path => ({ url: `${base}/${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.7 }));
}
