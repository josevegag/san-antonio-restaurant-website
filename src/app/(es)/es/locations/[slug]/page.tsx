import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationContent } from "@/components/location-content";
import { getLocation, locations } from "@/data/locations";
import { siteUrl } from "@/components/site-document";

export function generateStaticParams() { return locations.map(location => ({ slug: location.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const location = getLocation((await params).slug);
  if (!location) return {};
  const path = `/locations/${location.slug}`;
  return { title: location.name, description: `Visita ${location.name} en ${location.address}, ${location.city}. Consulta horarios, indicaciones, teléfono y pedidos en línea.`,
    alternates: { canonical: `${siteUrl}/es${path}`, languages: { en: `${siteUrl}${path}`, es: `${siteUrl}/es${path}`, "x-default": `${siteUrl}${path}` } } };
}
export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const location = getLocation((await params).slug);
  if (!location) notFound();
  return <LocationContent location={location} locale="es"/>;
}
