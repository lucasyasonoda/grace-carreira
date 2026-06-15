import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AREAS } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/atuacao/")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — Grace Carreira" },
      {
        name: "description",
        content:
          "Gestão Cultural, Leis de Incentivo, Contratos e Direitos Autorais, Patrimônio Cultural — quatro áreas de atuação especializada em direito cultural.",
      },
      { property: "og:title", content: "Áreas de Atuação — Grace Carreira" },
      {
        property: "og:description",
        content: "Quatro áreas de atuação especializada em direito cultural.",
      },
      { property: "og:url", content: "/atuacao" },
    ],
    links: [{ rel: "canonical", href: "/atuacao" }],
  }),
  component: AtuacaoHub,
});

function AtuacaoHub() {
  return (
    <>
      <PageHero
        overline="Áreas de Atuação"
        title={
          <>
            Quatro frentes de especialização em{" "}
            <span className="gold-italic">direito cultural</span>.
          </>
        }
        lead="Cada área cobre um conjunto distinto de demandas — da estruturação de políticas públicas à proteção autoral de artistas independentes. Explore o escopo, os instrumentos legais aplicáveis e quando faz sentido procurar consultoria especializada."
      />

      <section className="container-edit py-16 md:py-24 space-y-6">
        {AREAS.map((a, i) => (
          <Link
            key={a.slug}
            to="/atuacao/$slug"
            params={{ slug: a.slug }}
            className="group block border border-border hover:border-foreground transition p-8 md:p-12"
          >
            <div className="grid md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start">
              <div className="font-serif text-4xl font-semibold text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="card-title group-hover:text-[color:var(--gold)] transition">
                  {a.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-3xl">{a.chapeu}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {a.subservices.slice(0, 4).map((s) => (
                    <span
                      key={s.title}
                      className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1.5 rounded-full"
                    >
                      {s.tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="hidden md:block group-hover:translate-x-2 transition mt-3" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
