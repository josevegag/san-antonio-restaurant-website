import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const live = process.env.SITE_CANONICAL_URL;
  if (!live) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${live}/sitemap.xml` };
}
