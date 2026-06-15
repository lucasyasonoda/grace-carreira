import { Scale } from "lucide-react";

export function LegalRef({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground border border-border bg-background px-3 py-1.5 rounded-full">
      <Scale size={12} className="text-[color:var(--gold)]" />
      <span>{children}</span>
    </div>
  );
}
