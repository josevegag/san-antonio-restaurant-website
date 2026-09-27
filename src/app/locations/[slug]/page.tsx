import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";
import { getLocation, locations } from "@/data/locations";
import { photoById } from "@/data/photos";

export function generateStaticParams() { return locations.map(location => ({ slug: location.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const location = getLocation((await params).slug); return location ? { title: location.name, description: `Visit ${location.name} at ${location.address}, ${location.city}. Find hours, directions, phone and online ordering.` } : {}; }

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const location = getLocation((await params).slug);
  if (!location) notFound();
  const hero = photoById.get(location.galleryIds[0]);
  return <><section className="location-hero"><div className="location-hero-image">{hero && <Image src={hero.src} alt={hero.title} fill priority sizes="100vw"/>}<div className="hero-shade"/></div><div className="shell location-hero-content"><Link href="/locations">← All locations</Link><span className="eyebrow light">{location.neighborhood.toUpperCase()}</span><h1>{location.name}</h1><p>{location.address}, {location.city}</p></div></section><section className="section"><div className="shell location-detail-grid"><div><span className="eyebrow">COME ON IN</span><h2>Your table is waiting.</h2><p>Find us in the neighborhood, enjoy a meal, or order your favorites online.</p><div className="location-detail-actions"><a className="button button-dark" href={location.orderUrl} target="_blank" rel="noopener noreferrer">Order online <ArrowUpRight size={18}/></a><a className="button button-outline" href={location.mapUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18}/></a></div></div><div className="location-facts"><div><MapPin/><h3>Address</h3><p>{location.address}<br/>{location.city}</p></div><div><Phone/><h3>Call us</h3><a href={`tel:${location.tel}`}>{location.phone}</a></div><div><Clock3/><h3>Hours</h3>{location.hours.map(row => <p key={row.days}>{row.days}<br/><strong>{row.time}</strong></p>)}</div></div></div></section><section className="section warm-section"><div className="shell"><span className="eyebrow">A TASTE OF THIS LOCATION</span><h2>From our kitchen.</h2><p className="source-note">Restaurant photographs supplied by the client. Individual branch attribution for these images has not been confirmed.</p><div className="location-gallery">{location.galleryIds.map(id => {const photo=photoById.get(id); return photo && <div key={id}><Image src={photo.src} alt={photo.title} fill sizes="(max-width: 700px) 90vw, 33vw"/><span>{photo.title}</span></div>;})}</div></div></section></>;
}
