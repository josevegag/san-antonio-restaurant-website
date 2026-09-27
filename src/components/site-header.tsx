"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { alternateHref, localizedHref, navigation, tr, type Locale } from "@/data/i18n";

function LanguageSwitch({ locale, pathname, onNavigate }: { locale: Locale; pathname: string; onNavigate?: () => void }) {
  return <div className="language-switch" aria-label={tr(locale, "Select language", "Seleccionar idioma")}>
    <Link href={alternateHref(pathname, "en")} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined} onClick={onNavigate}>EN</Link>
    <span aria-hidden="true">/</span>
    <Link href={alternateHref(pathname, "es")} hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined} onClick={onNavigate}>ES</Link>
  </div>;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = localizedHref(locale);
  return <>
    <div className="announcement">{tr(locale, "THREE NEIGHBORHOOD LOCATIONS · PASSAIC & CLIFTON, NEW JERSEY", "TRES SUCURSALES · PASSAIC Y CLIFTON, NUEVA JERSEY")} <span aria-hidden="true">✳</span> {tr(locale, "FRESHLY MADE, ALWAYS SHARED", "RECIÉN HECHO, SIEMPRE PARA COMPARTIR")}</div>
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href={home} className="brand-logo" aria-label={tr(locale, "San Antonio Mexican Restaurant home", "Inicio de San Antonio Mexican Restaurant")} onClick={() => setOpen(false)}>
          <Image src="/images/brand/logo-san-antonio.png" alt="San Antonio Mexican Restaurant" width={258} height={195} priority />
        </Link>
        <nav className="desktop-nav" aria-label={tr(locale, "Main navigation", "Navegación principal")}>
          {navigation.map(item => { const href = localizedHref(locale, item.path); return <Link key={item.path} href={href} className={pathname === href || pathname?.startsWith(`${href}/`) ? "active" : ""}>{item[locale]}</Link>; })}
        </nav>
        <div className="header-actions"><LanguageSwitch locale={locale} pathname={pathname}/><Link href={localizedHref(locale, "/order-online")} className="nav-order">{tr(locale, "Order online", "Ordenar en línea")} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <button className="mobile-toggle" type="button" aria-label={tr(locale, open ? "Close menu" : "Open menu", open ? "Cerrar menú" : "Abrir menú")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label={tr(locale, "Mobile navigation", "Navegación móvil")}>
        <div className="mobile-nav-top"><Image src="/images/brand/logo-san-antonio.png" alt="San Antonio Mexican Restaurant" width={258} height={195}/><LanguageSwitch locale={locale} pathname={pathname} onNavigate={() => setOpen(false)}/></div>
        {navigation.map(item => <Link key={item.path} href={localizedHref(locale, item.path)} onClick={() => setOpen(false)}>{item[locale]}</Link>)}
        <Link href={localizedHref(locale, "/order-online")} onClick={() => setOpen(false)}>{tr(locale, "Order online", "Ordenar en línea")} ↗</Link>
      </nav>}
    </header>
  </>;
}
