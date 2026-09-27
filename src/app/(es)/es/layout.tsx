import type { Metadata } from "next";
import { SiteDocument, siteMetadata } from "@/components/site-document";

export const metadata: Metadata = siteMetadata("es");
export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="es">{children}</SiteDocument>;
}
