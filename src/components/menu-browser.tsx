"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menuCategories, menuItems } from "@/data/menu";
import { photoById } from "@/data/photos";
import { locations } from "@/data/locations";

export function MenuBrowser() {
  const [category, setCategory] = useState("All");
  const [branch, setBranch] = useState("monroe");
  const location = locations.find(item => item.slug === branch)!;
  const filtered = menuItems.filter(item => category === "All" || item.category === category);
  return <>
    <div className="menu-controls"><div className="filter-row" role="group" aria-label="Filter menu">{menuCategories.map(item => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? "filter active" : "filter"}>{item}</button>)}</div><label className="branch-select">Prices for <select value={branch} onChange={event => setBranch(event.target.value)}>{locations.map(item => <option key={item.slug} value={item.slug}>{item.name.replace("San Antonio ", "")}</option>)}</select></label></div>
    <div className="menu-grid">{filtered.map(item => { const photo = photoById.get(item.photoId); const price = item.prices[branch]; return <article className="menu-card" key={item.id}><div className="menu-card-image">{photo && <Image src={photo.src} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />}{item.specialty && <span className="specialty">SAN ANTONIO FAVORITE</span>}</div><div className="menu-card-body"><div className="menu-card-top"><span className="eyebrow">{item.category}</span><span className="price">{price === undefined ? "See live menu" : `$${price.toFixed(2)}`}</span></div><h3>{item.name}</h3><p>{item.description}</p></div></article>; })}</div>
    <div className="menu-disclaimer"><p>Selection shown. Availability and prices may change; the live ordering menu for each restaurant has the latest details.</p><a href={location.orderUrl} target="_blank" rel="noopener noreferrer" className="button button-dark">See {location.name.replace("San Antonio ", "")} live menu <ArrowUpRight size={18}/></a></div>
  </>;
}
