import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({ eyebrow, title, text, href, action }: { eyebrow: string; title: string; text?: string; href?: string; action?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{href && <Link href={href} className="text-link">{action ?? "Explore more"} <ArrowUpRight size={18}/></Link>}</div>;
}
