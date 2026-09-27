import Link from "next/link";
import { ArrowUpRight, MapPin, Clock3 } from "lucide-react";
import type { Location } from "@/data/locations";
import { photoById } from "@/data/photos";
import { PhotoCard } from "./photo-card";

export function LocationCard({ location, index }: { location: Location; index: number }) {
  const photo = photoById.get(location.galleryIds[0]);
  return <article className="location-card">
    <Link href={`/locations/${location.slug}`} className="location-cover" aria-label={`Explore ${location.name}`}>
      {photo && <PhotoCard photo={photo} />}<span className="location-index">0{index + 1}</span>
    </Link>
    <div className="location-card-body"><span className="eyebrow">{location.neighborhood}</span><h3>{location.name}</h3><p><MapPin size={16}/>{location.address}, {location.city}</p><p><Clock3 size={16}/>{location.hours[0].time}</p><div className="location-actions"><Link href={`/locations/${location.slug}`} className="text-link">Explore location <ArrowUpRight size={17}/></Link><a href={location.orderUrl} target="_blank" rel="noopener noreferrer" className="small-order">Order ↗</a></div></div>
  </article>;
}
