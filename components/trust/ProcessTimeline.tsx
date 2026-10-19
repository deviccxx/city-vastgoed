import { process } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ light = false }: { light?: boolean }) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
      {process.map((s) => (
        <li key={s.step} className={cn("border-t pt-6", light ? "border-cream/20" : "border-stone-2")}>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl text-gold">{s.step}</span>
            <span className={cn("text-[0.625rem] uppercase tracking-[0.16em]", light ? "text-cream/50" : "text-muted")}>
              {s.term}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
          <p className={cn("mt-2 text-[0.875rem] leading-relaxed", light ? "text-cream/65" : "text-muted")}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
