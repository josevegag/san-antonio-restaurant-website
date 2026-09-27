import Image from "next/image";
import { media } from "@/data/media";
import { tr, type Locale } from "@/data/i18n";

export function HeroMedia({ locale }: { locale: Locale }) {
  return <div className="hero-media">
    <Image src="/images/menu/platillos-parrillada-mixta.webp" alt={tr(locale, "Parrillada Mixta at San Antonio Mexican Restaurant", "Parrillada mixta de San Antonio Mexican Restaurant")} fill priority sizes="100vw" className="hero-image" />
    {media.heroVideo && <video className="hero-video" autoPlay muted loop playsInline preload="none" poster="/images/menu/platillos-parrillada-mixta.webp"><source src={media.heroVideo} type="video/mp4" /></video>}
    <div className="hero-shade" />
  </div>;
}
