import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Brain,
  CalendarDays,
  FileText,
  HeartHandshake,
  MessageCircle,
  Pill,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/grace-hero.jpg";
import bioImg from "@/assets/grace-bio.jpg";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/synapsecare")({
  head: () => ({
    meta: [
      { title: "SynapseCare — Grace Carreira" },
      {
        name: "description",
        content:
          "Projeto de vida que une saúde mental, autonomia e tecnologia, com conteúdo sobre cuidado, demências e o aplicativo SynApp.",
      },
      { property: "og:title", content: "SynapseCare — Grace Carreira" },
      {
        property: "og:description",
        content: "Um espaço onde ciência, arte e afeto se encontram para cuidar de quem cuida.",
      },
      { property: "og:url", content: "/synapsecare" },
    ],
    links: [{ rel: "canonical", href: "/synapsecare" }],
  }),
  component: SynapseCare,
});

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Olá! Quero entrar na Lista de Espera VIP do SynApp.",
)}`;

function SynapseCare() {
  return (
    <>
      <section className="bg-[#f7f4ee] text-[#26352b]">
        <div className="container-edit min-h-[78vh] py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="overline hairline">Da resiliência ao propósito</div>
            <h1 className="display-title mt-7">
              Construindo sua <span className="italic text-[#a55f55]">fortaleza</span>.
            </h1>
            <p className="editorial-lead text-[#26352b]/75 mt-6 max-w-xl">
              Aos 46 anos, transformei uma jornada de superação em um novo caminho de autonomia.
              Minha vida é a prova de que é possível desmantelar padrões e construir uma fortaleza
              sobre novas bases.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#jornada"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#a55f55] text-white text-xs tracking-widest uppercase"
              >
                Minha jornada <ArrowDown size={14} />
              </a>
              <a
                href="#synapp"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[#26352b] text-xs tracking-widest uppercase"
              >
                Conheça o SynApp <Brain size={14} />
              </a>
            </div>
          </div>
          <figure className="relative">
            <img
              src={heroImg}
              alt="Grace Carreira"
              className="w-full aspect-[4/5] object-cover grayscale"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 md:p-10 bg-black/65 text-white font-serif italic text-lg leading-relaxed">
              “Sua história é o seu maior capital. Vamos construir seu próximo capítulo juntas.”
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container-edit py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <Sparkles className="mx-auto text-[#a55f55]" />
          <h2 className="section-title mt-5">O ecossistema SynapseCare</h2>
          <p className="editorial-lead text-muted-foreground mt-5">
            O SynapseCare não é apenas um aplicativo. É um projeto de vida que une saúde mental,
            autonomia e tecnologia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border mt-14">
          <article className="bg-background p-8 md:p-10">
            <HeartHandshake className="text-[#a55f55]" size={32} />
            <h3 className="card-title mt-6">O Projeto SynapseCare</h3>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Um espaço de acolhimento e conteúdo sobre saúde mental, demências e autonomia. Aqui
              falamos sobre a importância das emoções, da memória e dos afetos — as sinapses que nos
              conectam.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li>Caminhos para a autonomia afetiva</li>
              <li>Encontros e trocas de experiência</li>
              <li>Podcast e conteúdo educativo</li>
            </ul>
          </article>
          <article className="bg-[#26352b] text-white p-8 md:p-10">
            <Brain className="text-[#d08b7f]" size={32} />
            <h3 className="card-title mt-6">O Aplicativo SynApp</h3>
            <p className="text-white/70 mt-5 leading-relaxed">
              A solução tecnológica nascida da necessidade real. Uma ferramenta para monitorar o
              cuidado, entender a progressão de demências e facilitar a comunicação com médicos.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/80">
              <li>Monitoramento de sintomas</li>
              <li>Relatórios para médicos</li>
              <li>Gestão de rotina e medicamentos</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="jornada" className="bg-[#f7f4ee]">
        <div className="container-edit py-20 md:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <figure className="lg:sticky lg:top-28">
            <img
              src={bioImg}
              alt="Grace Carreira olhando pela janela"
              className="w-full aspect-[4/5] object-cover grayscale"
            />
            <figcaption className="font-serif italic text-base leading-relaxed border-l-2 border-[#a55f55] pl-5 mt-7">
              “A Cultura, que me escolheu, é o grande capital humano que costura os eixos da minha
              vida: História, Direito e Autonomia.”
            </figcaption>
          </figure>
          <div>
            <div className="overline hairline">História e propósito</div>
            <h2 className="section-title mt-6">Da resiliência à construção de fortalezas</h2>
            <div className="body-copy space-y-6 text-[#26352b]/80 mt-8">
              <p>
                Minha história começa muito antes de eu entender o que significava autonomia. Aos 11
                anos, vivi uma experiência que marcaria profundamente minha visão sobre
                independência. Em 1989, nossa família estava no auge; um ano depois, tudo havia
                mudado. As dívidas levaram meu pai quase à falência, e me vi sozinha com ele,
                aprendendo cedo demais que a verdadeira força vem de dentro.
              </p>
              <p>
                A educação sempre foi meu refúgio. Estudei tecnologia dos alimentos, jornalismo e
                direito. Por muito tempo, carreguei a frustração de não ter uma carreira linear, mas
                hoje compreendo que minha trajetória é na gestão cultural, e todo o conhecimento
                acumulado é útil a esse propósito. A cultura me escolheu, e é ela quem trabalha a
                emoção e nos dá o sentido de ser e pertencer.
              </p>
              <p>
                A vida adulta trouxe novos desafios. Durante 18 anos de casamento, vivi em uma
                relação que só descobri ser abusiva quando o Alzheimer do meu marido começou a se
                manifestar. O diagnóstico de Alzheimer atípico em 2023 mudou tudo. De repente, me vi
                como cuidadora principal, enfrentando a sobrecarga emocional e a falta de
                ferramentas adequadas.
              </p>
              <p>
                Foi nesse momento de vulnerabilidade que nasceu minha maior força. Comecei a fazer
                anotações diárias em cadernos e planilhas, documentando sintomas e progressos. Essa
                necessidade prática se transformou na semente do <strong>SynApp</strong>. Percebi
                que o cuidado com o cérebro vai muito além das doenças degenerativas; é sobre cuidar
                de quem comanda tudo.
              </p>
              <p>
                Assim nasceu o <strong>SynapseCare</strong>: um espaço onde minha jornada pessoal,
                minha experiência em direito e cultura e minha paixão pelo cuidado se encontram.
                Minha história não é apenas minha — é de todas as pessoas que buscam autonomia e
                dignidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="synapp" className="bg-[#26352b] text-white">
        <div className="container-edit py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="overline hairline">Tecnologia com empatia</div>
            <h2 className="section-title mt-6">SynApp</h2>
            <p className="lead-copy text-white/70 mt-5">
              O aplicativo que nasceu de anotações em cadernos e planilhas para se tornar seu aliado
              no cuidado diário.
            </p>
            <div className="grid gap-5 mt-9">
              {[
                { icon: CalendarDays, text: "Monitore sintomas e comportamentos com facilidade." },
                {
                  icon: FileText,
                  text: "Gere relatórios detalhados para consultas médicas mais produtivas.",
                },
                { icon: Pill, text: "Organize a rotina de cuidados e medicamentos sem estresse." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4 border-t border-white/15 pt-5">
                  <Icon className="text-[#d08b7f] shrink-0" />
                  <p className="text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/20 p-8 md:p-10">
            <Brain size={52} className="text-[#d08b7f]" />
            <p className="font-serif italic text-lg leading-relaxed text-white/75 mt-6">
              O SynApp está em fase final de desenvolvimento. Entre na lista VIP para ser avisado em
              primeira mão e receber condições especiais de lançamento.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white text-xs tracking-widest uppercase hover:bg-[#1fb75a] transition"
            >
              <MessageCircle size={17} /> Entrar na lista de espera VIP
            </a>
            <p className="text-xs text-white/45 mt-3">Você será direcionado para o WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="container-edit py-20 md:py-24 text-center">
        <div className="overline hairline">Cursos e conteúdos digitais</div>
        <h2 className="section-title mt-6">Formações disponíveis na EDUZZ</h2>
        <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
          Acesse a plataforma para consultar cursos, inscrições e condições disponíveis.
        </p>
        <Link
          to="/cursos"
          className="mt-9 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-xs tracking-widest uppercase"
        >
          <ShoppingBag size={16} /> Ver conteúdo digital
        </Link>
      </section>
    </>
  );
}
