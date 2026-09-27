import Link from "next/link";
export default function NotFound() { return <section className="page-intro not-found"><div className="shell"><span className="eyebrow">404 / PÁGINA NO ENCONTRADA</span><h1>Perdimos la receta.</h1><p>No encontramos esta página.</p><Link className="button button-dark" href="/es">Volver al inicio →</Link></div></section>; }
