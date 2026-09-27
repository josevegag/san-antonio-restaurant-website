"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menuCategories, menuDescriptionsEs, menuItems } from "@/data/menu";
import { photoById } from "@/data/photos";
import { locations } from "@/data/locations";
import { categoryLabel, menuCategoryLabels, tr, type Locale } from "@/data/i18n";

export function MenuBrowser({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState("All");
  const [branch, setBranch] = useState("monroe");
  const location = locations.find(item => item.slug === branch)!;
  const filtered = menuItems.filter(item => category === "All" || item.category === category);
  return <>
    <div className="menu-controls"><div className="filter-row" role="group" aria-label={tr(locale, "Filter menu", "Filtrar menú")}>{menuCategories.map(item => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? "filter active" : "filter"}>{categoryLabel(locale, item, menuCategoryLabels)}</button>)}</div><label className="branch-select">{tr(locale, "Prices for", "Precios de")} <select value={branch} onChange={event => setBranch(event.target.value)}>{locations.map(item => <option key={item.slug} value={item.slug}>{item.name.replace("San Antonio ", "")}</option>)}</select></label></div>
    <div className="menu-grid">{filtered.map(item => { const photo = photoById.get(item.photoId); const price = item.prices[branch]; return <article className="menu-card" key={item.id}><div className="menu-card-image">{photo && <Image src={photo.src} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />}{item.specialty && <span className="specialty">{tr(locale, "SAN ANTONIO FAVORITE", "FAVORITO DE SAN ANTONIO")}</span>}</div><div className="menu-card-body"><div className="menu-card-top"><span className="eyebrow">{categoryLabel(locale, item.category, menuCategoryLabels)}</span><span className="price">{price === undefined ? tr(locale, "See live menu", "Ver menú en línea") : `$${price.toFixed(2)}`}</span></div><h3>{item.name}</h3><p>{locale === "es" ? menuDescriptionsEs[item.id] : item.description}</p></div></article>; })}</div>
    <div className="menu-disclaimer"><p>{tr(locale, "Selection shown. Availability and prices may change; the live ordering menu for each restaurant has the latest details.", "Mostramos una selección. La disponibilidad y los precios pueden cambiar; el menú de pedidos de cada sucursal tiene los detalles más recientes.")}</p><a href={location.orderUrl} target="_blank" rel="noopener noreferrer" className="button button-dark">{tr(locale, `See ${location.name.replace("San Antonio ", "")} live menu`, `Ver menú de ${location.name.replace("San Antonio ", "")}`)} <ArrowUpRight size={18}/></a></div>
  </>;
}
