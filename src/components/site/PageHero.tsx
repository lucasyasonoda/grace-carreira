import type { ReactNode } from "react";

export function PageHero({
  overline,
  title,
  lead,
  children,
}: {
  overline: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-edit pt-20 md:pt-28 pb-16 md:pb-24 border-b border-border">
      <div className="max-w-3xl">
        <div className="overline hairline">{overline}</div>
        <h1 className="page-title mt-6">{title}</h1>
        {lead && <p className="lead-copy text-muted-foreground mt-5 max-w-2xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
