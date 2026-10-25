import { INTERVIEWS, YOUTUBE } from "@/content/site";

export function MidiaSection() {
  const items = INTERVIEWS.filter((i) => i.published && i.url);
  const showYoutube = YOUTUBE.visible && YOUTUBE.url;
  if (items.length === 0 && !showYoutube) return null;

  return (
    <>
      {items.length > 0 && (
        <section className="container-edit pb-16 md:pb-24">
          <div className="eyebrow hairline">Na mídia</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {items.map((i) => (
              <a
                key={i.id}
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-foreground pt-6 hover:opacity-70 transition"
              >
                <div className="eyebrow">{i.outlet}</div>
                <h2 className="card-title mt-4 group-hover:text-[color:var(--gold)] transition">
                  {i.title}
                </h2>
                <div className="eyebrow mt-6">Ler entrevista →</div>
              </a>
            ))}
          </div>
        </section>
      )}
      {showYoutube && (
        <section className="container-edit pb-16 md:pb-24">
          <div className="eyebrow hairline">YouTube</div>
          <a
            href={YOUTUBE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-t border-foreground pt-6 mt-10 hover:opacity-70 transition"
          >
            <h2 className="card-title group-hover:text-[color:var(--gold)] transition">
              Assista ao canal no YouTube
            </h2>
            <div className="eyebrow mt-6">Acessar canal →</div>
          </a>
        </section>
      )}
    </>
  );
}