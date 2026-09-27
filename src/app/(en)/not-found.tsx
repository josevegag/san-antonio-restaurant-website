import Link from "next/link";
export default function NotFound() { return <section className="page-intro not-found"><div className="shell"><span className="eyebrow">404 / NOT FOUND</span><h1>We lost the recipe.</h1><p>This page could not be found.</p><Link className="button button-dark" href="/">Back home →</Link></div></section>; }
