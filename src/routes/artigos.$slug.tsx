import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/content/site";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/artigos/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Artigo não encontrado" }] };
    return {
      meta: [
        { title: `${a.title} — Grace Carreira` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/artigos/${a.slug}` },
      ],
      links: [{ rel: "canonical", href: `/artigos/${a.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-edit py-32 text-center">
      <h1 className="page-title">Artigo não encontrado</h1>
      <Link
        to="/artigos"
        className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={14} /> Ver artigos
      </Link>
    </div>
  ),
  component: ArtigoPage,
});

function ArtigoPage() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <article className="container-edit py-16 md:py-24 max-w-3xl">
        <Link
          to="/artigos"
          className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2 hover:text-foreground"
        >
          <ArrowLeft size={12} /> Artigos
        </Link>
        <div className="overline mt-8">{article.category}</div>
        <h1 className="page-title mt-4">{article.title}</h1>
        <p className="lead-copy text-muted-foreground mt-5">{article.excerpt}</p>

        <div className="body-copy mt-12 space-y-6 border-t border-border pt-8">
          {article.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <CTASection text="Quer discutir um caso ou aprofundar uma análise jurídica? Agende uma consulta." />
    </>
  );
}
