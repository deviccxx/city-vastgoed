import { Image } from "@/components/ui/Img";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { statusLabel, type Property } from "@/lib/data/properties";
import { pct, num } from "@/lib/format";
import { cn } from "@/lib/utils";

export function PropertyCard({
  property: p,
  size = "md",
  light = false,
}: {
  property: Property;
  size?: "md" | "lg";
  light?: boolean;
}) {
  const ret = p.realizedReturnPct ?? p.expectedReturnPct ?? 0;
  const retLabel = p.realizedReturnPct ? "Gerealiseerd p.j." : "Verwacht p.j.";

  return (
    <Link
      href={`/aanbod/${p.slug}/`}
      className={cn("group block", light ? "text-cream" : "text-ink")}
    >
      <div
        className={cn(
          "img-zoom relative overflow-hidden bg-ink-2",
          size === "lg" ? "aspect-[4/3]" : "aspect-[3/2]",
        )}
      >
        <Image
          src={p.cover}
          alt={p.address}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
        <span
          className={cn(
            "absolute left-5 top-5 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.16em]",
            p.status === "open"
              ? "bg-gold text-ink"
              : "bg-ink/80 text-cream/90 backdrop-blur",
          )}
        >
          {statusLabel[p.status]}
        </span>
        {p.status !== "gerealiseerd" && (
          <div className="absolute inset-x-5 bottom-5">
            <div className="mb-2 flex items-center justify-between text-[0.6875rem] uppercase tracking-[0.14em] text-cream/80">
              <span>Gefinancierd</span>
              <span className="tnum">{pct(p.fundedPct, p.fundedPct === 100 ? 0 : 2)}</span>
            </div>
            <div className="h-px w-full bg-cream/25">
              <div
                className="h-px bg-gold-2"
                style={{ width: `${Math.min(100, p.fundedPct)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-6 pt-6">
        <div>
          <p className={cn("eyebrow mb-2", light && "text-gold-2")}>{p.city}</p>
          <h3
            className={cn(
              "font-display leading-tight",
              size === "lg" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl",
            )}
          >
            {p.name}
          </h3>
          <p className={cn("mt-3 max-w-md text-[0.9rem] leading-relaxed", light ? "text-cream/60" : "text-muted")}>
            {p.summary}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display tnum text-3xl md:text-4xl">{pct(ret, ret % 1 === 0 ? 1 : 2)}</p>
          <p className={cn("mt-1 text-[0.625rem] uppercase tracking-[0.14em]", light ? "text-cream/50" : "text-muted")}>
            {retLabel}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "mt-6 flex items-center justify-between border-t pt-4 text-[0.6875rem] uppercase tracking-[0.14em]",
          light ? "border-cream/15 text-cream/60" : "border-stone-2 text-muted",
        )}
      >
        <span>
          {p.status === "open"
            ? `${num(p.briks.remaining)} Briks beschikbaar`
            : p.facts.unitsLabel}
        </span>
        <span className="flex items-center gap-1.5 text-gold transition-transform duration-300 group-hover:translate-x-1">
          Bekijk pand <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
