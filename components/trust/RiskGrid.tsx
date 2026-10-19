import { risks } from "@/lib/data/trust";
import { Reveal } from "@/components/ui/Reveal";

export function RiskGrid() {
  return (
    <div className="grid gap-px bg-stone-2 md:grid-cols-2">
      {risks.map((r, i) => (
        <Reveal key={r.title} delay={i * 80}>
          <article className="h-full bg-cream p-8">
            <p className="eyebrow mb-3">Risico 0{i + 1}</p>
            <h3 className="font-display text-2xl md:text-3xl">{r.title}</h3>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/80">{r.description}</p>
            <dl className="mt-5 space-y-4 border-t border-stone-2 pt-5 text-[0.875rem] leading-relaxed">
              <div>
                <dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">Rekenvoorbeeld</dt>
                <dd className="tnum mt-1 text-ink/80">{r.example}</dd>
              </div>
              <div>
                <dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">Hoe wij dit beperken</dt>
                <dd className="mt-1 text-ink/80">{r.mitigation}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
