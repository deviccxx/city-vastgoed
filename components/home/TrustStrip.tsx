"use client";

import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { properties } from "@/lib/data/properties";

const fundedViaBriks = properties.reduce(
  (s, p) => s + (p.financials?.totalInvestment ?? 0),
  0,
);
const units = properties.reduce((s, p) => s + p.facts.units, 0);
const investors = properties.reduce((s, p) => s + p.facts.investors, 0);

const eurM = (n: number) =>
  "€ " + (n / 1_000_000).toLocaleString("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " mln";
const int = (n: number) => Math.round(n).toLocaleString("nl-NL");

export function TrustStrip() {
  const items = [
    { value: fundedViaBriks, format: eurM, label: "Gefinancierd via Briks" },
    { value: properties.length, format: int, label: "Panden op het platform" },
    { value: units, format: int, label: "Woningen gerealiseerd" },
    { value: investors, format: int, label: "Actieve investeerders" },
  ];
  return (
    <section className="border-b border-stone bg-cream">
      <Container>
        <dl className="grid grid-cols-2 divide-stone md:grid-cols-4 md:divide-x">
          {items.map((it) => (
            <div key={it.label} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <dd className="font-display text-4xl leading-none md:text-5xl">
                <CountUp value={it.value} format={it.format} />
              </dd>
              <dt className="mt-3 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                {it.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
