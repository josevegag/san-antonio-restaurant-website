import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/data/locations";
import { localizedHref, tr, type Locale } from "@/data/i18n";
import "@/app/globals.css";

export const siteUrl = process.env.SITE_CANONICAL_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const isLive = Boolean(process.env.SITE_CANONICAL_URL);

export function siteMetadata(locale: Locale): Metadata {
  const description = tr(locale,
    "Fresh, made-to-order Mexican food at three neighborhood restaurants in Passaic and Clifton, New Jersey. Explore the menu, find a location, and order online.",
    "Comida mexicana fresca y preparada al momento en tres sucursales de Passaic y Clifton, Nueva Jersey. Explora el menú, encuentra tu sucursal y ordena en línea.");
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "San Antonio Mexican Restaurant | Passaic & Clifton, NJ", template: "%s | San Antonio Mexican Restaurant" },
    description,
    alternates: { canonical: `${siteUrl}${localizedHref(locale)}`, languages: { en: siteUrl, es: `${siteUrl}/es`, "x-default": siteUrl } },
    openGraph: { type: "website", locale: locale === "es" ? "es_US" : "en_US", alternateLocale: locale === "es" ? ["en_US"] : ["es_US"], siteName: "San Antonio Mexican Restaurant", title: "San Antonio Mexican Restaurant", description, images: [{ url: "/images/brand/logo-san-antonio.png", width: 258, height: 195, alt: "San Antonio Mexican Restaurant" }] },
    twitter: { card: "summary_large_image", images: ["/images/brand/logo-san-antonio.png"] },
    icons: { icon: "/images/brand/logo-san-antonio.png", apple: "/images/brand/logo-san-antonio.png" },
    robots: { index: isLive, follow: isLive },
  };
}

export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: "San Antonio Mexican Restaurant", url: siteUrl, logo: `${siteUrl}/images/brand/logo-san-antonio.png` },
      ...locations.map(location => ({ "@type": "Restaurant", name: location.name, servesCuisine: "Mexican", telephone: location.tel, image: `${siteUrl}/images/brand/logo-san-antonio.png`, address: { "@type": "PostalAddress", streetAddress: location.address, addressLocality: location.city.startsWith("Clifton") ? "Clifton" : "Passaic", addressRegion: "NJ", postalCode: location.city.slice(-5), addressCountry: "US" }, hasMenu: `${siteUrl}${localizedHref(locale, "/menu")}`, url: `${siteUrl}${localizedHref(locale, `/locations/${location.slug}`)}` })),
    ],
  };
  return <html lang={locale}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><SiteHeader locale={locale}/><main id="main-content">{children}</main><SiteFooter locale={locale}/></body></html>;
}
