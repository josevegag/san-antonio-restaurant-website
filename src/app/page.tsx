import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { SectionHeading } from "@/components/section-heading";
import { LocationCard } from "@/components/location-card";
import { locations } from "@/data/locations";
import { menuItems } from "@/data/menu";
import { photoById } from "@/data/photos";

export default function Home() {
  const featured = menuItems.filter(item => item.specialty).slice(0, 3);
  return <>
    <section className="hero"><HeroMedia/><div className="shell hero-content"><span className="hero-kicker"><span className="dot"/> PASSAIC & CLIFTON · NEW JERSEY</span><h1>Food that<br/>feels like <em>home.</em></h1><p>Traditional Mexican flavors, made fresh and shared with everyone at the table.</p><div className="hero-actions"><Link href="/menu" className="button button-cream">Explore the menu <ArrowUpRight size={19}/></Link><Link href="/locations" className="hero-text-link">Find a location <ArrowRight size={18}/></Link></div></div><div className="hero-side-note">THREE LOCATIONS · ONE BIG TABLE</div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>FRESHLY MADE. ALWAYS SHARED.</span></div></section>

    <section className="intro-band"><div className="shell intro-inner"><span className="intro-star">✳</span><p>Rooted in tradition. <em>Made to bring people together.</em></p><span>FAMILY OWNED · 10+ YEARS</span></div></section>

    <section className="section story-section"><div className="shell story-grid"><div className="story-photos"><div className="story-photo-main"><Image src="/images/menu/platillos-molcajete-mixto.webp" alt="Molcajete Mixto served at San Antonio" fill sizes="(max-width: 800px) 90vw, 40vw" /></div><div className="story-photo-small"><Image src="/images/menu/quesadillas-quesadilla-de-huitlacoche.webp" alt="Quesadilla de huitlacoche" fill sizes="(max-width: 800px) 50vw, 20vw" /></div><span className="story-stamp">MADE<br/>WITH<br/>HEART ✳</span></div><div className="story-copy"><span className="eyebrow">01 / THE SAN ANTONIO STORY</span><h2>A little tradition in <em>every bite.</em></h2><p>We are a family-owned restaurant with a simple belief: good food should make you feel welcome. Our Mexican dishes are made to order with the flavors and recipes that have brought people together for generations.</p><p>For more than a decade, we have served our neighbors with the warmth of home.</p><Link href="/about" className="text-link">Get to know us <ArrowUpRight size={18}/></Link></div></div></section>

    <section className="section menu-feature"><div className="shell"><SectionHeading eyebrow="02 / A TASTE OF SAN ANTONIO" title="Come hungry. Leave happy." text="A few favorites from our table. Explore the full selection and choose your neighborhood location for ordering." href="/menu" action="View the menu"/><div className="featured-grid">{featured.map((item, index) => { const photo = photoById.get(item.photoId); return <Link href="/menu" className="featured-card" key={item.id}><div className="featured-image">{photo && <Image src={photo.src} alt={item.name} fill sizes="(max-width: 700px) 100vw, 33vw" />}</div><div className="featured-meta"><span>0{index + 1} / {item.category.toUpperCase()}</span><ArrowUpRight size={21}/></div><h3>{item.name}</h3></Link>; })}</div></div></section>

    <section className="photo-quote"><Image src="/images/menu/tacos-tacos-rancheros-de-bistec.webp" alt="Tacos Rancheros de Bistec" fill sizes="100vw"/><div className="photo-quote-overlay"/><div className="shell photo-quote-content"><Star size={25} fill="currentColor"/><span>OUR KIND OF COMFORT FOOD</span><h2>Made fresh.<br/><em>Made for you.</em></h2><Link href="/gallery" className="button button-cream">See the gallery <ArrowUpRight size={18}/></Link></div></section>

    <section className="section locations-section"><div className="shell"><SectionHeading eyebrow="03 / FIND YOUR SAN ANTONIO" title="Three places to gather." text="Your neighborhood table is closer than you think." href="/locations" action="All locations"/><div className="locations-grid">{locations.map((location, index) => <LocationCard key={location.slug} location={location} index={index}/>)}</div></div></section>

    <section className="catering-banner"><div className="shell catering-inner"><div><span className="eyebrow light">BRING THE FLAVOR TO YOUR CELEBRATION</span><h2>Let&apos;s make it<br/><em>a fiesta.</em></h2><p>From family gatherings to special occasions, explore San Antonio party packages.</p><Link href="/catering" className="button button-cream">Explore catering <ArrowUpRight size={18}/></Link></div><div className="catering-image"><Image src="/images/menu/platillos-parrillada-mixta.webp" alt="Parrillada Mixta" fill sizes="(max-width: 800px) 90vw, 40vw"/></div></div></section>
  </>;
}
