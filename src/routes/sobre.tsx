import { createFileRoute } from "@tanstack/react-router";
import bioImg from "@/assets/grace-bio.jpg";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Grace Carreira" },
      {
        name: "description",
        content:
          "Advogada especialista em Direitos Culturais e Gestão Pública. 16 anos na Secretaria de Estado da Cultura de SP, Diretora de Cultura, membro do CONPRESP.",
      },
      { property: "og:title", content: "Sobre — Grace Carreira" },
      {
        property: "og:description",
        content: "20+ anos dedicados a fazer a lei funcionar a favor da cultura.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const TIMELINE = [
  {
    period: "Formação e início de carreira",
    title: "A base jurídica e a escolha pelo setor cultural",
    body: "Com formação em Direito e especialização em Propriedade Imaterial, Grace desenvolveu sua carreira na área dos Direitos Culturais e da Gestão Pública da Cultura, construindo uma atuação focada na interseção entre o ordenamento jurídico e as políticas culturais.",
  },
  {
    period: "16 anos — Secretaria de Estado da Cultura de SP",
    title: "Projeto Oficinas Culturais e Diretoria de Cultura",
    body: "Atuação por 16 anos no Projeto Oficinas Culturais da Secretaria de Estado da Cultura de São Paulo e por 2 anos como Diretora de Cultura de Araçoiaba da Serra/SP. Uma experiência que proporcionou visão completa do funcionamento das políticas culturais públicas — dos editais à execução, da captação à prestação de contas.",
  },
  {
    period: "2023–2026 — CONPRESP",
    title: "Membro do Conselho Municipal de Patrimônio de SP",
    body: "Integrou o CONPRESP — Conselho Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São Paulo —, atuando diretamente nas decisões que definem a proteção da memória urbana e do patrimônio cultural paulistano.",
  },
];

function Sobre() {
  return (
    <>
      <PageHero
        overline="Quem é Grace Carreira"
        title={
          <>
            A advogada que conhece a Gestão Cultural <span className="gold-italic">por dentro</span>{" "}
            — e sabe o que funciona na prática.
          </>
        }
      />

      <section className="container-edit py-16 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <img
            src={bioImg}
            alt="Grace Carreira"
            loading="lazy"
            width={1024}
            height={1280}
            className="grayscale w-full aspect-[4/5] object-cover"
          />
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-serif text-3xl text-[color:var(--gold)]">20+</div>
              <div className="text-muted-foreground">anos no direito cultural</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--gold)]">16</div>
              <div className="text-muted-foreground">anos na SEC-SP</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--gold)]">14</div>
              <div className="text-muted-foreground">anos na área jurídica</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--gold)]">2023–2026</div>
              <div className="text-muted-foreground">atuação no CONPRESP</div>
            </div>
          </div>
        </div>

        <div className="body-copy space-y-6">
          <p>
            Grace Carreira é advogada especialista em Direitos Culturais e Gestão Pública, com mais
            de 20 anos de experiência na interseção entre o direito e a cultura.
          </p>
          <p>
            Sua trajetória é construída de dentro para fora: por 16 anos, atuou na Secretaria de
            Estado da Cultura de São Paulo, no Projeto Oficinas Culturais; e, entre 2019 e 2020, foi
            Diretora de Cultura de Araçoiaba da Serra. Essa vivência não é apenas um título no
            currículo — é o que permite a ela enxergar além do texto da lei e compreender o que
            realmente move o setor cultural: suas limitações orçamentárias, seus entraves
            burocráticos e seu potencial transformador.
          </p>
          <p>
            Além da advocacia, atuou em colegiados como o <strong>CONPRESP</strong> — Conselho
            Municipal de Preservação do Patrimônio Histórico, Cultural e Ambiental da Cidade de São
            Paulo (gestão 2023–2026) —, órgão que atua diretamente nas decisões que definem a
            proteção da memória urbana paulistana.
          </p>
          <p>
            O que diferencia Grace é uma dupla fluência que poucos profissionais da área dominam: o
            rigor técnico de quem conhece a legislação cultural em profundidade, e a sensibilidade
            de quem conhece o fazer cultural na prática — como gestora, como operadora de políticas
            públicas e como advogada.
          </p>
        </div>
      </section>

      <section className="container-edit py-16 md:py-24 border-t border-border">
        <div className="overline hairline">Destaques da trajetória</div>
        <h2 className="section-title mt-6 max-w-2xl">
          Uma carreira construída <span className="gold-italic">de dentro para fora</span>.
        </h2>

        <ol className="mt-16 space-y-12 md:space-y-16">
          {TIMELINE.map((t, i) => (
            <li
              key={t.title}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 border-t border-border pt-8"
            >
              <div>
                <div className="font-serif text-4xl font-semibold text-[color:var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                  {t.period}
                </div>
              </div>
              <div>
                <h3 className="card-title">{t.title}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CTASection text="Pronto para transformar seus desafios culturais em oportunidades? Entre em contato e vamos conversar sobre como posso contribuir para o seu projeto, a sua gestão ou a sua carreira." />
    </>
  );
}
