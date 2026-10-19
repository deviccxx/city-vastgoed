import Link from "next/link";
import { getProperty } from "@/lib/data/properties";
import { propertyRecords, type PropertyRecord } from "@/lib/data/trust";
import { eur, pct } from "@/lib/format";
import { cn } from "@/lib/utils";

export function PropertyRecordCard({ record: r, light = false }: { record: PropertyRecord; light?: boolean }) {
  const p = getProperty(r.slug);
  if (!p) return null;
  const growth = ((r.valuationLatest - r.valuationStart) / r.valuationStart) * 100;
  const avg = r.years.reduce((s, y) => s + y.returnPct, 0) / r.years.length;
  const paid = r.years.reduce((s, y) => s + y.paidOut, 0);
  const muted = light ? "text-cream/55" : "text-muted";
  const border = light ? "border-cream/15" : "border-stone-2";

  return (
    <article className={cn("border p-7 md:p-8", border, light ? "bg-ink-2" : "bg-white")}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className={cn("eyebrow mb-2", light && "text-gold-2")}>{p.city}</p>
          <Link href={`/aanbod/${p.slug}/`} className="link-gold font-display text-2xl md:text-3xl">
            {p.name}
          </Link>
        </div>
        <div className="text-right">
          <p className="tnum font-display text-3xl md:text-4xl">{pct(avg, 1)}</p>
          <p className={cn("mt-1 text-[0.625rem] uppercase tracking-[0.14em]", muted)}>Gem. gerealiseerd p.j.</p>
        </div>
      </div>

      <table className="tnum mt-7 w-full text-[0.8125rem]">
        <thead>
          <tr className={cn("text-left text-[0.625rem] uppercase tracking-[0.14em]", muted)}>
            <th className="pb-2 font-normal">Jaar</th>
            <th className="pb-2 text-right font-normal">Rendement</th>
            <th className="pb-2 text-right font-normal">Bezetting</th>
            <th className="pb-2 text-right font-normal">Uitgekeerd</th>
          </tr>
        </thead>
        <tbody className={cn("divide-y", light ? "divide-cream/10" : "divide-stone")}>
          {r.years.map((y) => (
            <tr key={y.year}>
              <td className="py-2.5">{y.year}</td>
              <td className="py-2.5 text-right">{pct(y.returnPct, 1)}</td>
              <td className="py-2.5 text-right">{pct(y.occupancyPct, 1)}</td>
              <td className="py-2.5 text-right">{eur(y.paidOut)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dl className={cn("mt-6 grid grid-cols-3 gap-4 border-t pt-5 text-[0.8125rem]", border)}>
        <div>
          <dt className={cn("text-[0.625rem] uppercase tracking-[0.14em]", muted)}>Taxatie aankoop</dt>
          <dd className="tnum mt-1">{eur(r.valuationStart)}</dd>
        </div>
        <div>
          <dt className={cn("text-[0.625rem] uppercase tracking-[0.14em]", muted)}>Taxatie {r.valuationDate.replace("-", "/")}</dt>
          <dd className="tnum mt-1">
            {eur(r.valuationLatest)} <span className="text-gold">+{pct(growth, 1)}</span>
          </dd>
        </div>
        <div>
          <dt className={cn("text-[0.625rem] uppercase tracking-[0.14em]", muted)}>Totaal uitgekeerd</dt>
          <dd className="tnum mt-1">{eur(paid)}</dd>
        </div>
      </dl>
    </article>
  );
}

export function TrackRecordGrid({ slugs, light = false }: { slugs?: string[]; light?: boolean }) {
  const records = slugs ? propertyRecords.filter((r) => slugs.includes(r.slug)) : propertyRecords;
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {records.map((r) => (
        <PropertyRecordCard key={r.slug} record={r} light={light} />
      ))}
    </div>
  );
}
