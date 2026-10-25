import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { MidiaSection } from "@/components/site/MidiaSection";

export const Route = createFileRoute("/artigos/")({
  head: () => ({
    meta: [
      { title: "Artigos — Grace Carreira" },
      {
        name: "description",
        content:
          "Análises jurídicas sobre direito autoral, patrimônio cultural e políticas públicas de cultura.",
      },
      { property: "og:title", content: "Artigos — Grace Carreira" },
      {
        property: "og:description",
        content: "Análises jurídicas sobre o cenário cultural brasileiro.",
      },
      { property: "og:url", content: "/artigos" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
  component: Artigos,
});

function Artigos() {
  return (
    <>
      <PageHero
        overline="Artigos e Publicações"
        title={
          <>
            Análises jurídicas sobre o <span className="gold-italic">cenário cultural</span>.
          </>
        }
        lead="Reflexões sobre direito autoral, patrimônio, políticas públicas e o cotidiano do setor cultural."
      />

      <section className="container-edit py-16 md:py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            to="/artigos/$slug"
            params={{ slug: a.slug }}
            className="group block border-t border-foreground pt-6 hover:opacity-70 transition"
          >
            <div className="eyebrow">{a.category}</div>
            <h2 className="card-title mt-4 group-hover:text-[color:var(--gold)] transition">
              {a.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{a.excerpt}</p>
            <div className="eyebrow mt-6">Ler artigo →</div>
          </Link>
        ))}
      </section>

      <MidiaSection />
    </>
  );
}
