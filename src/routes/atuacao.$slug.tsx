import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AREAS, type Area } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { LegalRef } from "@/components/site/LegalRef";

export const Route = createFileRoute("/atuacao/$slug")({
  loader: ({ params }) => {
    const area = AREAS.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.area;
    if (!a) return { meta: [{ title: "Área não encontrada" }] };
    return {
      meta: [
        { title: `${a.title} — Grace Carreira` },
        { name: "description", content: a.chapeu },
        { property: "og:title", content: `${a.title} — Grace Carreira` },
        { property: "og:description", content: a.chapeu },
        { property: "og:url", content: `/atuacao/${a.slug}` },
      ],
      links: [{ rel: "canonical", href: `/atuacao/${a.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-edit py-32 text-center">
      <h1 className="page-title">Área não encontrada</h1>
      <Link
        to="/atuacao"
        className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Ver áreas
      </Link>
    </div>
  ),
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  return (
    <>
      <div className="container-edit pt-10">
        <Link
          to="/atuacao"
          className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2 hover:text-foreground"
        >
          <ArrowLeft size={12} /> Áreas de Atuação
        </Link>
      </div>

      <PageHero overline={area.title} title={area.headline} lead={area.chapeu} />

      <section className="container-edit py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="lead-copy text-foreground/90">{area.intro}</p>
        </div>
      </section>

      <section className="container-edit pb-24">
        <div className="overline hairline">Sub-serviços</div>
        <h2 className="section-title mt-6 mb-12">O que está incluído</h2>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {(area.subservices as Area["subservices"]).map((s) => (
            <article key={s.title} className="bg-background p-8 md:p-10">
              <div className="service-label">{s.tag}</div>
              <h3 className="card-title mt-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-5 leading-relaxed">{s.body}</p>
              {s.hint && (
                <p className="font-serif italic text-base mt-5 leading-snug text-foreground/80 border-l-2 border-[color:var(--gold)] pl-4">
                  {s.hint}
                </p>
              )}
              {s.ref && (
                <div className="mt-6">
                  <LegalRef>{s.ref}</LegalRef>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <CTASection text={area.cta} />

      <section className="container-edit pb-24">
        <div className="overline">Outras áreas</div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {AREAS.filter((a) => a.slug !== area.slug).map((a) => (
            <Link
              key={a.slug}
              to="/atuacao/$slug"
              params={{ slug: a.slug }}
              className="border border-border p-6 hover:border-foreground transition"
            >
              <div className="font-serif text-xl">{a.title}</div>
              <div className="text-xs text-muted-foreground mt-2 line-clamp-2">{a.chapeu}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
