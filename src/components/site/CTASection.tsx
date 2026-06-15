import { Link } from "@tanstack/react-router";

export function CTASection({ text, label = "Agendar Consulta" }: { text: string; label?: string }) {
  return (
    <section className="container-edit my-24">
      <div className="border-t border-b border-foreground py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <p className="card-title max-w-3xl">{text}</p>
        <Link
          to="/contato"
          className="inline-flex items-center justify-center px-7 py-4 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/85 transition whitespace-nowrap"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
