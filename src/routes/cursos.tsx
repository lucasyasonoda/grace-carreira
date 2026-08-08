import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Headphones,
  MessageCircle,
  Play,
  Video,
} from "lucide-react";
import courseImg from "@/assets/curso-fomento.jpg";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Conteúdo Digital — Grace Carreira" },
      {
        name: "description",
        content: "Cursos, podcast e materiais de apoio sobre editais, fomento e gestão cultural.",
      },
      { property: "og:title", content: "Conteúdo Digital — Grace Carreira" },
      {
        property: "og:description",
        content: "Conhecimento prático para dominar a burocracia cultural com autonomia.",
      },
      { property: "og:url", content: "/cursos" },
    ],
    links: [{ rel: "canonical", href: "/cursos" }],
  }),
  component: Cursos,
});

const whatsappNotice = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Olá! Quero ser avisado sobre o Plantão do Edital.",
)}`;

const whatsappGuides = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de receber os guias gratuitos sobre editais culturais.",
)}`;

function Cursos() {
  return (
    <>
      <section className="container-edit pt-20 md:pt-28 pb-16 md:pb-24 text-center">
        <div className="eyebrow hairline">Educação e conteúdo</div>
        <h1 className="display-title mt-7">
          Conhecimento que gera <span className="gold-italic">autonomia</span>.
        </h1>
        <p className="lead-copy text-muted-foreground mt-6 max-w-2xl mx-auto">
          Cursos práticos e mentorias para quem precisa dominar a burocracia cultural e focar no que
          importa: a arte.
        </p>
      </section>

      <section className="container-edit pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 border border-border bg-foreground text-background">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="eyebrow">Curso online</div>
            <h2 className="section-title mt-6">Marco Regulatório do Fomento à Cultura</h2>
            <p className="lead-copy text-background/65 mt-5">
              5 videoaulas completas para você dominar a Lei 14.903/2024 e garantir a segurança
              jurídica dos seus projetos.
            </p>
            <div className="flex flex-wrap items-end gap-4 mt-9">
              <span className="font-serif text-3xl font-semibold text-[color:var(--gold)]">
                R$ 129,90
              </span>
              <span className="text-xs uppercase tracking-widest text-background/50 pb-1">
                Acesso imediato
              </span>
            </div>
            <a
              href={SITE.eduzz}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 px-7 py-4 bg-[color:var(--gold)] text-foreground text-xs tracking-widest uppercase hover:opacity-90 transition"
            >
              Comprar na EDUZZ <ArrowRight size={15} />
            </a>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <img
              src={courseImg}
              alt="Planejamento financeiro de projeto cultural"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#142038]/65" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white">
                <Play size={32} fill="currentColor" className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/25">
        <div className="container-edit py-20 md:py-24">
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            <article className="bg-background p-8 flex flex-col min-h-[420px]">
              <Video className="text-[color:var(--gold)]" size={30} />
              <div className="eyebrow mt-7">Leitura comentada</div>
              <h2 className="card-title mt-3">Plantão do Edital</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Leitura e interpretação detalhada dos editais abertos. Tire suas dúvidas e evite
                erros de interpretação.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-7">
                <CheckCircle2 size={16} className="text-[color:var(--gold)]" />
                Novas turmas e encontros em breve.
              </div>
              <a
                href={whatsappNotice}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background text-xs tracking-widest uppercase"
              >
                <MessageCircle size={15} /> Quero ser avisado
              </a>
            </article>

            <article className="bg-background p-8 flex flex-col min-h-[420px]">
              <Headphones className="text-[color:var(--gold)]" size={30} />
              <div className="eyebrow mt-7">Podcast</div>
              <h2 className="card-title mt-3">Editais Descomplicados</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Episódios curtos e diretos ao ponto, desmistificando a burocracia cultural para você
                ouvir onde quiser.
              </p>
              <blockquote className="border-l-2 border-[color:var(--gold)] pl-4 mt-7 font-serif italic text-base leading-relaxed">
                Um guia sonoro para navegar pelo universo dos editais culturais sem medo e com
                estratégia.
              </blockquote>
              <a
                href={SITE.spotify}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-foreground text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition"
              >
                Ouvir no Spotify <ExternalLink size={14} />
              </a>
            </article>

            <article className="bg-background p-8 flex flex-col min-h-[420px]">
              <Download className="text-[color:var(--gold)]" size={30} />
              <div className="eyebrow mt-7">Material de apoio</div>
              <h2 className="card-title mt-3">Guias Gratuitos</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Solicite materiais de apoio para qualificar seus projetos e compreender melhor os
                editais culturais.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mt-7">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} className="text-[color:var(--gold)]" /> Democratização do
                  acesso
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 size={16} className="text-[color:var(--gold)]" /> Editais culturais
                </li>
              </ul>
              <a
                href={whatsappGuides}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background text-xs tracking-widest uppercase"
              >
                <MessageCircle size={15} /> Solicitar guias
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
