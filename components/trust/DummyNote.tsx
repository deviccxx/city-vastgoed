import { DUMMY } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

/** Small marker so reviewers know a block shows example data. Remove when real data is in. */
export function DummyNote({ light = false, className }: { light?: boolean; className?: string }) {
  if (!DUMMY) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 text-[0.5625rem] uppercase tracking-[0.16em]",
        light ? "border-cream/25 text-cream/50" : "border-stone-2 text-muted",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-gold" /> Voorbeeldgegevens
    </span>
  );
}
