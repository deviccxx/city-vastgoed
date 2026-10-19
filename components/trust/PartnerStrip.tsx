import { partners } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

/** Text lock-ups as logo placeholders. Swap for real SVG logos later. */
export function PartnerStrip({ light = false }: { light?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {partners.slice(0, 5).map((p) => (
        <li
          key={p.name}
          className={cn(
            "font-display text-[1.05rem] tracking-wide",
            light ? "text-cream/55" : "text-ink/55",
          )}
          title={p.role}
        >
          {p.name}
        </li>
      ))}
    </ul>
  );
}
