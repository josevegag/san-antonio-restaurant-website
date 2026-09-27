import type { Metadata } from "next";
import { SiteDocument, siteMetadata } from "@/components/site-document";

export const metadata: Metadata = siteMetadata("en");
export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
