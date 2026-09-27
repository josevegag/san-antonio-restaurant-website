import Image from "next/image";
import type { Photo } from "@/data/photos";

export function PhotoCard({ photo, className = "", priority = false }: { photo: Photo; className?: string; priority?: boolean }) {
  return <div className={`photo-card ${className}`}><Image src={photo.src} alt={photo.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={priority} className="object-cover" /></div>;
}
