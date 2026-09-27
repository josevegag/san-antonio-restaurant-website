import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionContent } from "@/components/section-content";
import { sectionCopy, sections, isSection } from "@/data/sections";
import { siteUrl } from "@/components/site-document";

export function generateStaticParams() { return sections.map(section => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!isSection(section)) return {};
  return { title: sectionCopy[section].es.title, description: sectionCopy[section].es.subtitle,
    alternates: { canonical: `${siteUrl}/es/${section}`, languages: { en: `${siteUrl}/${section}`, es: `${siteUrl}/es/${section}`, "x-default": `${siteUrl}/${section}` } } };
}
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!isSection(section)) notFound();
  return <SectionContent section={section} locale="es"/>;
}
