import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locations } from "@/data/locations";
import { localizedHref, navigation, tr, type Locale } from "@/data/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer className="footer">
    <div className="shell footer-main">
      <div>
        <Link href={localizedHref(locale)} className="footer-logo" aria-label={tr(locale, "San Antonio home", "Inicio de San Antonio")}><Image src="/images/brand/logo-san-antonio.png" alt="San Antonio Mexican Restaurant" width={258} height={195}/></Link>
        <span className="eyebrow light">{tr(locale, "COME AS YOU ARE. LEAVE WELL FED.", "VEN COMO ERES. DISFRUTA DE UNA BUENA COMIDA.")}</span>
        <h2>{tr(locale, "Good food brings", "La buena comida nos")}<br/><em>{tr(locale, "us together.", "une.")}</em></h2>
        <Link href={localizedHref(locale, "/locations")} className="button button-light">{tr(locale, "Find your table", "Encuentra tu mesa")} <ArrowUpRight size={18}/></Link>
      </div>
      <div className="footer-links"><h3>{tr(locale, "Explore", "Explora")}</h3>{navigation.map(item => <Link key={item.path} href={localizedHref(locale, item.path)}>{item[locale]}</Link>)}<Link href={localizedHref(locale, "/order-online")}>{tr(locale, "Order Online", "Ordenar en línea")}</Link></div>
      <div className="footer-links"><h3>{tr(locale, "Visit us", "Visítanos")}</h3>{locations.map(location => <div key={location.slug} className="footer-location"><Link href={localizedHref(locale, `/locations/${location.slug}`)}>{location.name} ↗</Link><span>{location.address}<br/>{location.city}</span></div>)}</div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} San Antonio Mexican Restaurant</span><span>{tr(locale, "Made with the flavors of home.", "Hecho con los sabores de casa.")}</span><Link href={localizedHref(locale)}>{tr(locale, "Back to top", "Volver arriba")} ↑</Link></div>
  </footer>;
}
