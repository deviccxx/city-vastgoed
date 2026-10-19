import type { Property } from "@/lib/data/properties";
import { eur, num, pct } from "@/lib/format";
import { cn } from "@/lib/utils";

function Row({
  label,
  value,
  negative = false,
  strong = false,
}: {
  label: string;
  value: string;
  negative?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-6 py-3 text-[0.9375rem]",
        strong && "font-medium",
      )}
    >
      <span className={cn(negative ? "text-muted" : strong ? "text-ink" : "text-ink/85")}>
        {label}
      </span>
      <span className={cn("tnum", negative ? "text-muted" : "text-ink")}>
        {negative ? "– " : ""}
        {value}
      </span>
    </div>
  );
}

export function FinancialOverview({ property: p }: { property: Property }) {
  const f = p.financials;
  if (!f) return null;
  const c = f.monthlyCosts;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="eyebrow mb-5">Investering</p>
        <div className="divide-y divide-stone border-y border-stone-2">
          <Row label="Aankoopprijs" value={eur(f.purchasePrice)} />
          <Row label="Hypotheek" value={eur(f.mortgage)} negative />
          <Row label="Overdrachtsbelasting en kosten" value={eur(f.transferTax)} />
          <Row label="Vergoeding City Vastgoed" value={eur(f.fees)} />
          <Row label="Geldreserve" value={eur(f.reserves)} />
          <Row label="Totale investering" value={eur(f.totalInvestment)} strong />
          <Row label="Totaal aantal Briks" value={num(p.briks.total)} strong />
        </div>
      </div>

      <div>
        <p className="eyebrow mb-5">Huurrendement per maand</p>
        <div className="divide-y divide-stone border-y border-stone-2">
          <Row label="Huurinkomsten" value={eur(f.monthlyRent)} />
          <Row label="Hypotheekrente" value={eur(c.interest)} negative />
          <Row label="Beheerkosten" value={eur(c.management)} negative />
          <Row label="Verzekering" value={eur(c.insurance)} negative />
          <Row label="Belastingen" value={eur(c.taxes)} negative />
          <Row label="Nutsvoorzieningen" value={eur(c.utilities)} negative />
          <Row label="Onderhoud" value={eur(c.maintenance)} negative />
          <Row label="Netto maandinkomen" value={eur(f.monthlyNet)} strong />
          <Row label="Gemiddeld huurrendement" value={pct(f.rentYieldPct)} strong />
        </div>
      </div>
    </div>
  );
}
