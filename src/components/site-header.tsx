"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["Our Story", "/about"], ["Menu", "/menu"], ["Gallery", "/gallery"],
  ["Locations", "/locations"], ["Catering", "/catering"],
  ["Reservations", "/reservations"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement">THREE NEIGHBORHOOD LOCATIONS · PASSAIC & CLIFTON, NEW JERSEY <span aria-hidden="true">✳</span> FRESHLY MADE, ALWAYS SHARED</div>
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href="/" className="wordmark" aria-label="San Antonio Mexican Restaurant home" onClick={() => setOpen(false)}>
          <span className="wordmark-top">RESTAURANTE</span><span className="wordmark-main">San Antonio<span className="wordmark-sun">✳</span></span><span className="wordmark-bottom">MEXICAN RESTAURANT</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className={pathname === href || pathname?.startsWith(`${href}/`) ? "active" : ""}>{label}</Link>)}
        </nav>
        <Link href="/order-online" className="nav-order">Order online <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/order-online" onClick={() => setOpen(false)}>Order online ↗</Link>
      </nav>}
    </header>
  </>;
}
