"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/data/photos";
import { categoryLabel, galleryCategoryLabels, tr, type Locale } from "@/data/i18n";

export function Gallery({ photos, categories, locale }: { photos: Photo[]; categories: string[]; locale: Locale }) {
  const [category, setCategory] = useState("All");
  const [limit, setLimit] = useState(18);
  const [selected, setSelected] = useState<number | null>(null);
  const filtered = category === "All" ? photos : photos.filter(photo => photo.category === category);
  const visible = filtered.slice(0, limit);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected(index => index === null ? null : (index + 1) % filtered.length);
      if (event.key === "ArrowLeft") setSelected(index => index === null ? null : (index - 1 + filtered.length) % filtered.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, filtered.length]);

  return <>
    <div className="filter-row" role="group" aria-label={tr(locale, "Filter photos by category", "Filtrar fotos por categoría")}>{categories.map(item => <button type="button" key={item} className={item === category ? "filter active" : "filter"} onClick={() => { setCategory(item); setLimit(18); setSelected(null); }}>{categoryLabel(locale, item, galleryCategoryLabels)}</button>)}</div>
    <div className="gallery-grid">{visible.map((photo, index) => <button className="gallery-item" type="button" key={photo.id} onClick={() => setSelected(index)} aria-label={`${tr(locale, "View", "Ver")} ${photo.title}`}><Image src={photo.src} alt={photo.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" /><span>{photo.title}</span></button>)}</div>
    {limit < filtered.length && <div className="centered"><button type="button" className="button button-outline" onClick={() => setLimit(value => value + 18)}>{tr(locale, "Load more photos", "Cargar más fotos")}</button></div>}
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={filtered[selected].title} onClick={() => setSelected(null)}><button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label={tr(locale, "Close photo", "Cerrar foto")}><X/></button><button type="button" className="lightbox-prev" onClick={event => {event.stopPropagation(); setSelected((selected - 1 + filtered.length) % filtered.length);}} aria-label={tr(locale, "Previous photo", "Foto anterior")}><ChevronLeft/></button><div className="lightbox-image" onClick={event => event.stopPropagation()}><Image src={filtered[selected].src} alt={filtered[selected].title} fill sizes="90vw" /><span>{filtered[selected].title} · {selected + 1} / {filtered.length}</span></div><button type="button" className="lightbox-next" onClick={event => {event.stopPropagation(); setSelected((selected + 1) % filtered.length);}} aria-label={tr(locale, "Next photo", "Foto siguiente")}><ChevronRight/></button></div>}
  </>;
}
