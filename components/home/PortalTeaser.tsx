import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { eur, pct } from "@/lib/format";

/** Stylised, static mock of the investor portal. No real data. */
function PortalMock() {
  const rows = [
    { name: "Bergweg 36, Zeist", briks: 120, value: 60000, yieldPct: 5.97 },
    { name: "Steynlaan 96, Zeist", briks: 80, value: 40000, yieldPct: 6.01 },
  ];
  const total = rows.reduce((s, r) => s + r.value, 0);
  const monthly = rows.reduce((s, r) => s + (r.value * r.yieldPct) / 100 / 12, 0);

  return (
    <div className="border border-stone-2 bg-white p-6 md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow mb-2">Portefeuille</p>
          <p className="font-display tnum text-4xl md:text-5xl">{eur(total)}</p>
        </div>
        <div className="text-right">
          <p className="eyebrow mb-2">Volgende uitkering</p>
          <p className="font-display tnum text-2xl md:text-3xl">{eur(monthly, true)}</p>
          <p className="mt-1 text-[0.625rem] uppercase tracking-[0.14em] text-muted">1 november</p>
        </div>
      </div>

      <div className="mt-8 flex h-16 items-end gap-1.5">
        {[42, 48, 46, 52, 55, 54, 58, 62, 61, 66, 70, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gold/70"
            style={{ height: `${h}%`, opacity: 0.35 + i * 0.055 }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[0.625rem] uppercase tracking-[0.14em] text-muted">
        <span>Uitkeringen, laatste 12 maanden</span>
        <span className="tnum">+ {pct(1.6, 1)} geïndexeerd</span>
      </div>

      <div className="mt-8 divide-y divide-stone border-t border-stone">
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-6 py-4 text-[0.875rem]">
            <span>{r.name}</span>
            <span className="tnum text-muted">{r.briks} Briks</span>
            <span className="tnum font-medium">{pct(r.yieldPct)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortalTeaser() {
  return (
    <Section tone="cream-2">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <Reveal>
              <PortalMock />
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            <SectionHeading
              eyebrow="Het klantportaal"
              title="Altijd inzicht in uw rendement."
              lead="Uitkeringen, indexeringen en taxaties per pand. Glashelder inzicht in uw eigen vastgoedportfolio."
            />
            <Button href="/inloggen/#registreren" variant="ink" arrow className="mt-10">
              Vrijblijvend registreren
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
