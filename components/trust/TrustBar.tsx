import { Container } from "@/components/ui/Container";
import { DummyNote } from "@/components/trust/DummyNote";
import { PartnerStrip } from "@/components/trust/PartnerStrip";
import { trackRecord } from "@/lib/data/trust";
import { eur, pct } from "@/lib/format";

export function TrustBar() {
  const items = [
    { value: `Sinds ${trackRecord.activeSince}`, label: "Actief in woonvastgoed" },
    { value: eur(trackRecord.totalPaidOut), label: "Uitgekeerd aan investeerders" },
    { value: `${trackRecord.payoutsCount} / ${trackRecord.payoutsCount}`, label: "Uitkeringen op tijd" },
    { value: pct(trackRecord.avgOccupancyPct, 1), label: "Gemiddelde bezetting" },
  ];
  return (
    <section className="border-b border-stone bg-cream">
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:divide-x md:divide-stone">
          {items.map((it) => (
            <div key={it.label} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <dd className="tnum font-display text-3xl leading-none md:text-4xl">{it.value}</dd>
              <dt className="mt-3 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">{it.label}</dt>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-5 border-t border-stone py-7 md:flex-row md:items-center md:justify-between">
          <p className="shrink-0 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
            Wij werken met
          </p>
          <PartnerStrip />
          <DummyNote className="shrink-0" />
        </div>
      </Container>
    </section>
  );
}
