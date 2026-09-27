import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/data/locations";
import "./globals.css";

const siteUrl = process.env.SITE_CANONICAL_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const isLive = Boolean(process.env.SITE_CANONICAL_URL);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "San Antonio Mexican Restaurant | Passaic & Clifton, NJ", template: "%s | San Antonio Mexican Restaurant" },
  description: "Fresh, made-to-order Mexican food at three neighborhood restaurants in Passaic and Clifton, New Jersey. Explore the menu, find a location, and order online.",
  openGraph: { type: "website", locale: "en_US", siteName: "San Antonio Mexican Restaurant", title: "San Antonio Mexican Restaurant", description: "Made to share. Made with heart. Discover our three locations in Passaic and Clifton, NJ.", images: [{ url: "/images/menu/platillos-parrillada-mixta.webp", width: 1800, height: 1200 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: isLive, follow: isLive },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: "San Antonio Mexican Restaurant", url: siteUrl },
      ...locations.map(location => ({ "@type": "Restaurant", name: location.name, servesCuisine: "Mexican", telephone: location.tel, address: { "@type": "PostalAddress", streetAddress: location.address, addressLocality: location.city.startsWith("Clifton") ? "Clifton" : "Passaic", addressRegion: "NJ", postalCode: location.city.slice(-5), addressCountry: "US" }, hasMenu: `${siteUrl}/menu`, url: `${siteUrl}/locations/${location.slug}` })),
    ],
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;
}
