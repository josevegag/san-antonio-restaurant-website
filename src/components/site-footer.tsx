import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locations } from "@/data/locations";

export function SiteFooter() {
  return <footer className="footer">
    <div className="shell footer-main">
      <div>
        <span className="eyebrow light">COME AS YOU ARE. LEAVE WELL FED.</span>
        <h2>Good food brings<br/><em>us together.</em></h2>
        <Link href="/locations" className="button button-light">Find your table <ArrowUpRight size={18}/></Link>
      </div>
      <div className="footer-links"><h3>Explore</h3><Link href="/about">Our Story</Link><Link href="/menu">Menu</Link><Link href="/gallery">Gallery</Link><Link href="/catering">Catering</Link><Link href="/reservations">Reservations</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-links"><h3>Visit us</h3>{locations.map(location => <div key={location.slug} className="footer-location"><Link href={`/locations/${location.slug}`}>{location.name} ↗</Link><span>{location.address}<br/>{location.city}</span></div>)}</div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} San Antonio Mexican Restaurant</span><span>Made with the flavors of home.</span><Link href="/">Back to top ↑</Link></div>
  </footer>;
}
