import { Link } from "@tanstack/react-router";
import { AREAS, SITE } from "@/content/site";
import { trackWhatsappClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-secondary/40">
      <div className="container-edit py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl">Grace Carreira</div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Advogada especialista em Direitos Culturais e Gestão Pública.
          </p>
          <p className="text-xs text-muted-foreground mt-4 tracking-widest uppercase">{SITE.oab}</p>
        </div>

        <div>
          <div className="overline mb-4">Navegação</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-foreground">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/atuacao" className="hover:text-foreground">
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link to="/artigos" className="hover:text-foreground">
                Artigos
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-foreground">
                Conteúdo Digital
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="overline mb-4">Áreas</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/atuacao/$slug"
                  params={{ slug: a.slug }}
                  className="hover:text-foreground"
                >
                  {a.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="overline mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{SITE.address}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsappClick("footer")}
                className="hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={SITE.spotify}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              {/* ⏳ Confirmar handle exato do Facebook com Amábile/Grace */}
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-edit py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} Grace Carreira. Todos os direitos reservados.</span>
          <span>Direitos Culturais · Gestão Pública · Patrimônio</span>
        </div>
      </div>
    </footer>
  );
}
