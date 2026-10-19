import { Users, Landmark, Building2, ShieldCheck, ArrowDown, ArrowRight } from "lucide-react";
import { rankingExplainer } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

/** Visual: investeerder → Briks → pand-B.V. → pand. Pure CSS/SVG icons, no images. */
export function StructureDiagram({ light = false }: { light?: boolean }) {
  const box = cn(
    "flex flex-col items-center gap-3 border px-5 py-6 text-center",
    light ? "border-cream/20 bg-ink-2" : "border-stone-2 bg-white",
  );
  const muted = light ? "text-cream/55" : "text-muted";
  const nodes = [
    { icon: Users, title: "U, obligatiehouder", text: "Koopt Briks van € 500" },
    { icon: Landmark, title: "Pand-B.V.", text: "Eén vennootschap per pand" },
    { icon: Building2, title: "Het pand", text: "Verhuurde woningen" },
  ];

  return (
    <div>
      <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {nodes.map((n, i) => (
          <div key={n.title} className="contents">
            <div className={box}>
              <span className="icon-tile">
                <n.icon className="h-5 w-5" strokeWidth={1.25} />
              </span>
              <p className="font-display text-xl">{n.title}</p>
              <p className={cn("text-[0.8125rem]", muted)}>{n.text}</p>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center justify-center py-1 text-gold">
                <ArrowRight className="hidden h-5 w-5 md:block" strokeWidth={1.25} />
                <ArrowDown className="h-5 w-5 md:hidden" strokeWidth={1.25} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className={cn("text-center text-[0.75rem] md:col-start-1", muted)}>
          ← Maandelijkse huuruitkering
        </div>
        <div className={cn("hidden md:block", "md:col-start-3 text-center text-[0.75rem]", muted)}>
          Hypotheek, huurcontracten, reserve
        </div>
        <div className={cn("text-center text-[0.75rem] md:col-start-5", muted)}>
          Huurinkomsten →
        </div>
      </div>

      <div
        className={cn(
          "mt-8 flex items-start gap-4 border-l-2 border-gold py-1 pl-5",
        )}
      >
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
        <p className={cn("text-[0.875rem] leading-relaxed", light ? "text-cream/75" : "text-ink/80")}>
          <span className={light ? "text-cream" : "text-ink"}>Stichting Obligatiehouders</span> houdt
          onafhankelijk toezicht op de pand-B.V. en treedt namens alle obligatiehouders op. City
          Vastgoed B.V. is beheerder, geen eigenaar van uw inleg.
        </p>
      </div>
    </div>
  );
}

export function RankingList({ light = false }: { light?: boolean }) {
  return (
    <ol className={cn("divide-y border-y", light ? "divide-cream/15 border-cream/15" : "divide-stone-2 border-stone-2")}>
      {rankingExplainer.map((r) => (
        <li key={r.rank} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
          <span className="font-display text-3xl text-gold">{r.rank}</span>
          <div>
            <p className="font-display text-xl">{r.who}</p>
            <p className={cn("mt-1 text-[0.875rem] leading-relaxed", light ? "text-cream/60" : "text-muted")}>{r.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
