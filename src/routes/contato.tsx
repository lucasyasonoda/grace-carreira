import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Grace Carreira" },
      {
        name: "description",
        content:
          "Agende uma consulta com a Dra. Grace Carreira. Atendimento para prefeituras, organizações culturais e artistas.",
      },
      { property: "og:title", content: "Contato — Grace Carreira" },
      { property: "og:description", content: "Agende uma consulta inicial." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", perfil: "Gestor público", mensagem: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\nPerfil: ${form.perfil}\n\n${form.mensagem}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Consulta — site")}&body=${body}`;
  };

  return (
    <>
      <PageHero
        overline="Contato"
        title={
          <>
            Vamos <span className="gold-italic">conversar</span>.
          </>
        }
        lead="Conte brevemente sobre seu projeto ou necessidade. Retorno em até dois dias úteis com uma proposta de conversa inicial."
      />

      <section className="container-edit py-16 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-16">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="eyebrow">Nome</label>
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-foreground py-3 outline-none focus:border-[color:var(--gold)] transition"
            />
          </div>
          <div>
            <label className="eyebrow">E-mail</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-foreground py-3 outline-none focus:border-[color:var(--gold)] transition"
            />
          </div>
          <div>
            <label className="eyebrow">Perfil</label>
            <select
              value={form.perfil}
              onChange={(e) => setForm({ ...form, perfil: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-foreground py-3 outline-none focus:border-[color:var(--gold)] transition"
            >
              <option>Gestor público</option>
              <option>Organização cultural / OSC</option>
              <option>Artista / Produtor</option>
              <option>Influenciador / Criador digital</option>
              <option>Proprietário de bem tombado</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="eyebrow">Mensagem</label>
            <textarea
              required
              rows={5}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-3 w-full bg-transparent border-b border-foreground py-3 outline-none focus:border-[color:var(--gold)] transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/85 transition"
          >
            Enviar mensagem
          </button>
        </form>

        <aside className="space-y-8">
          <div>
            <div className="eyebrow hairline">Canais diretos</div>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-[color:var(--gold)] mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    E-mail
                  </div>
                  <a href={`mailto:${SITE.email}`} className="font-serif text-base font-semibold">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle size={20} className="text-[color:var(--gold)] mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </div>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-base font-semibold"
                  >
                    Conversar agora
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[color:var(--gold)] mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Localização
                  </div>
                  <div className="font-serif text-base font-semibold">{SITE.address}</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <div className="eyebrow">Atendimento</div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Atuação consultiva e contenciosa em todo o território nacional, com reuniões
              presenciais em São Paulo e online para demais regiões.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
