import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AREAS } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-edit flex h-20 items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide">
          GRACE CARREIRA
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs xl:text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="hover:text-foreground transition"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="hover:text-foreground transition"
          >
            Sobre
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <Link
              to="/atuacao"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              Áreas de Atuação <ChevronDown size={14} />
            </Link>
            {menu && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px]">
                <div className="bg-card border border-border shadow-xl rounded-md p-2">
                  {AREAS.map((a) => (
                    <Link
                      key={a.slug}
                      to="/atuacao/$slug"
                      params={{ slug: a.slug }}
                      className="block px-4 py-3 rounded hover:bg-secondary transition"
                    >
                      <div className="font-serif text-lg leading-tight">{a.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {a.chapeu}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/cursos"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="hover:text-foreground transition"
          >
            Conteúdo Digital
          </Link>
          <Link
            to="/artigos"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="hover:text-foreground transition"
          >
            Artigos
          </Link>
          <Link
            to="/synapsecare"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="hover:text-foreground transition"
          >
            SynapseCare
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center px-5 py-2.5 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/85 transition"
          >
            Agendar Consulta
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-edit py-4 flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setOpen(false)}>
              Início
            </Link>
            <Link to="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>
            <div className="font-serif text-base pt-2">Áreas de Atuação</div>
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to="/atuacao/$slug"
                params={{ slug: a.slug }}
                onClick={() => setOpen(false)}
                className="pl-4 text-muted-foreground"
              >
                {a.title}
              </Link>
            ))}
            <Link to="/cursos" onClick={() => setOpen(false)}>
              Conteúdo Digital
            </Link>
            <Link to="/artigos" onClick={() => setOpen(false)}>
              Artigos
            </Link>
            <Link to="/synapsecare" onClick={() => setOpen(false)}>
              SynapseCare
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center px-5 py-3 bg-foreground text-background uppercase tracking-widest text-xs"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
