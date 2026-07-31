import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "@/assets/grace-hero.jpg";
import { AREAS, ARTICLES, SITE, TESTIMONIALS } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grace Carreira — Direitos Culturais e Gestão Pública" },
      {
        name: "description",
        content:
          "20+ anos de experiência em direitos culturais. 16 anos na Secretaria de Estado da Cultura de SP. Membro do CONPRESP. Assessoria jurídica para prefeituras, organizações e artistas.",
      },
      { property: "og:title", content: "Grace Carreira — Direitos Culturais e Gestão Pública" },
      {
        property: "og:description",
        content:
          "Assessoria jurídica especializada em direitos culturais, gestão pública e patrimônio.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-edit pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="overline hairline">Advocacia e Consultoria</div>
            <h1 className="display-title mt-8">
              Transformando <span className="gold-italic">complexidade</span> em soluções culturais.
            </h1>
            <p className="lead-copy text-muted-foreground mt-6 max-w-xl">
              Mais de 20 anos de experiência em gestão pública e legislação cultural. Assessoria
              jurídica completa para Prefeituras, Organizações Culturais e Artistas.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                to="/contato"
                className="inline-flex items-center px-7 py-4 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/85 transition"
              >
                Agendar Consulta
              </Link>
              <Link
                to="/atuacao"
                className="inline-flex items-center gap-2 px-7 py-4 border border-foreground text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition"
              >
                Áreas de Atuação <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img
              src={heroImg}
              alt="Grace Carreira, advogada especialista em direitos culturais"
              width={1024}
              height={1280}
              className="w-full grayscale aspect-[4/5] object-cover"
            />
            <figure className="hidden md:block absolute -bottom-8 -left-8 max-w-xs bg-card border border-border p-6 shadow-xl">
              <p className="editorial-lead italic">
                "Minha missão é transformar a burocracia em ponte para o acesso à cultura."
              </p>
              <figcaption className="overline mt-4">— Grace Carreira</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      {/* ⏳ Confirmar com a Grace: 20 ou 25 anos na SEC-SP */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-edit py-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
          {[
            { n: "20+", l: "anos de experiência em direitos culturais" },
            { n: "20+", l: "anos na Secretaria de Estado da Cultura de SP" },
            { n: "14", l: "anos de atuação na área jurídica" },
            { n: "2023–2026", l: "Atuação no CONPRESP — Patrimônio de SP" },
            { n: "2.000+", l: "pessoas atendidas em palestras, oficinas e atividades" },
          ].map((s) => (
            <div key={s.l} className="md:border-l md:first:border-l-0 md:pl-8 border-border">
              <div className="font-serif text-3xl font-semibold text-[color:var(--gold)]">
                {s.n}
              </div>
              <div className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto md:mx-0">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="container-edit py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="overline hairline">Áreas de Atuação</div>
            <h2 className="section-title mt-6">
              Soluções jurídicas precisas para cada ator do{" "}
              <span className="gold-italic">ecossistema cultural</span>.
            </h2>
          </div>
          <Link
            to="/atuacao"
            className="text-sm uppercase tracking-widest hover:text-[color:var(--gold)] inline-flex items-center gap-2"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {AREAS.map((a, i) => (
            <Link
              key={a.slug}
              to="/atuacao/$slug"
              params={{ slug: a.slug }}
              className="group bg-background p-8 md:p-10 hover:bg-secondary/60 transition"
            >
              <div className="overline text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="card-title mt-4 group-hover:text-[color:var(--gold)] transition">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-4">
                {a.chapeu}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest">
                Conhecer <ArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ARTIGOS */}
      <section className="container-edit py-24 md:py-32 border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="overline hairline">Artigos</div>
            <h2 className="section-title mt-6">
              Reflexões sobre <span className="gold-italic">direito e cultura</span>.
            </h2>
          </div>
          <Link
            to="/artigos"
            className="text-sm uppercase tracking-widest hover:text-[color:var(--gold)] inline-flex items-center gap-2"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {ARTICLES.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              to="/artigos/$slug"
              params={{ slug: article.slug }}
              className="group bg-background p-8 hover:bg-secondary/60 transition"
            >
              <div className="overline text-muted-foreground">{article.category}</div>
              <h3 className="card-title mt-4 group-hover:text-[color:var(--gold)] transition line-clamp-3">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest">
                Ler artigo <ArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTEÚDO DIGITAL */}
      <section className="border-y border-border bg-secondary/25">
        <div className="container-edit py-20 md:py-24 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div className="max-w-3xl">
            <div className="overline hairline">Conteúdo Digital</div>
            <h2 className="section-title mt-6">Cursos, podcast e materiais de apoio.</h2>
            <p className="editorial-lead italic text-muted-foreground mt-5">
              Conhecimento prático para dominar a burocracia cultural com autonomia — no vídeo, no
              texto e no áudio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.spotify}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-foreground text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition"
            >
              Ouvir no Spotify <ExternalLink size={14} />
            </a>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/85 transition"
            >
              Ver Conteúdo Digital <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-edit">
          <div className="overline hairline" style={{ color: "var(--gold)" }}>
            Depoimentos
          </div>
          <h2 className="section-title mt-6 max-w-2xl">O que dizem clientes e parceiros.</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border-t border-background/20 pt-6">
                <p className="font-serif italic text-base leading-relaxed">"{t.quote}"</p>
                <figcaption className="mt-6">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-background/60 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edit py-24 md:py-32 text-center">
        <h2 className="section-title max-w-3xl mx-auto">
          Vamos conversar sobre o seu <span className="gold-italic">projeto cultural</span>.
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
          Agende uma consulta inicial e avaliemos juntos como posso contribuir para o seu projeto,
          sua gestão ou sua carreira.
        </p>
        <Link
          to="/contato"
          className="mt-10 inline-flex items-center px-8 py-4 bg-foreground text-background text-xs tracking-widest uppercase"
        >
          Agendar Consulta
        </Link>
      </section>
    </>
  );
}
