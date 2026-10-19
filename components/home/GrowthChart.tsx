"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { eur, pct } from "@/lib/format";
import { cn } from "@/lib/utils";

const RENT_YIELD = 6.0; // avg of current open panden (5,97% / 6,01%)
const APPRECIATION = 1.0; // conservative annual appreciation
const SAVINGS_RATE = 1.5; // indicative savings rate for comparison
const YEARS = 5;
const AMOUNTS = [50000, 100000, 250000, 500000];

type Point = { m: number; rent: number; appr: number };

function series(investment: number): Point[] {
  const pts: Point[] = [];
  for (let m = 0; m <= YEARS * 12; m++) {
    const rent = (investment * (RENT_YIELD / 100)) / 12 * m;
    const appr = investment * (Math.pow(1 + APPRECIATION / 100, m / 12) - 1);
    pts.push({ m, rent, appr });
  }
  return pts;
}

export function GrowthChart() {
  const [investment, setInvestment] = useState(100000);
  const [hover, setHover] = useState<number | null>(null);

  const pts = useMemo(() => series(investment), [investment]);
  const last = pts[pts.length - 1];
  const total = last.rent + last.appr;
  const savings = investment * (Math.pow(1 + SAVINGS_RATE / 100, YEARS) - 1);

  // Chart geometry
  const W = 720;
  const H = 300;
  const padL = 56;
  const padR = 24;
  const padT = 18;
  const padB = 34;
  const maxY = total * 1.12;
  const x = (m: number) => padL + ((W - padL - padR) * m) / (YEARS * 12);
  const y = (v: number) => padT + (H - padT - padB) * (1 - v / maxY);

  const rentPath = pts.map((p, i) => `${i ? "L" : "M"}${x(p.m)},${y(p.rent)}`).join(" ");
  const totalPath = pts.map((p, i) => `${i ? "L" : "M"}${x(p.m)},${y(p.rent + p.appr)}`).join(" ");
  const rentArea = `${rentPath} L${x(last.m)},${y(0)} L${x(0)},${y(0)} Z`;
  const apprArea = `${totalPath} ${[...pts].reverse().map((p) => `L${x(p.m)},${y(p.rent)}`).join(" ")} Z`;

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => maxY * f);
  const hp = hover !== null ? pts[hover] : null;

  return (
    <Section tone="white" id="rendement">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Uw vermogen aan het werk"
              title="Zo groeit uw inleg in vijf jaar."
              titleSize="md"
              lead="Twee bronnen van rendement: elke maand huur, en na vijf jaar de waardeontwikkeling van het pand."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setInvestment(a)}
                  className={cn(
                    "tnum border px-4 py-2 text-[0.75rem] tracking-wide transition-colors",
                    a === investment
                      ? "border-ink bg-ink text-cream"
                      : "border-stone-2 text-ink/70 hover:border-ink",
                  )}
                >
                  {eur(a)}
                </button>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-stone pt-8">
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">Per maand</dt>
                <dd className="tnum mt-2 font-display text-3xl">{eur(last.rent / (YEARS * 12), true)}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">Totaal na 5 jaar</dt>
                <dd className="tnum mt-2 font-display text-3xl text-gold">{eur(total)}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">Huuruitkeringen</dt>
                <dd className="tnum mt-2 font-display text-2xl">{eur(last.rent)}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">Waardeontwikkeling</dt>
                <dd className="tnum mt-2 font-display text-2xl">{eur(last.appr)}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-stone-2 bg-cream p-5 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="font-display text-2xl">
                  Cumulatief rendement op {eur(investment)}
                </p>
                <ul className="flex gap-6 text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-gold" /> Huuruitkeringen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-ink/70" /> Waardeontwikkeling
                  </li>
                </ul>
              </div>

              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="mt-6 w-full"
                role="img"
                aria-label={`Cumulatief rendement op ${eur(investment)} over vijf jaar: ${eur(total)}`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const px = ((e.clientX - rect.left) / rect.width) * W;
                  const m = Math.round(((px - padL) / (W - padL - padR)) * YEARS * 12);
                  setHover(Math.max(0, Math.min(YEARS * 12, m)));
                }}
                onMouseLeave={() => setHover(null)}
              >
                {/* gridlines */}
                {ticks.map((t) => (
                  <g key={t}>
                    <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="#E7E1D6" strokeWidth={1} />
                    <text x={padL - 10} y={y(t) + 4} textAnchor="end" fontSize={11} fill="#6B7280" className="tnum">
                      {t === 0 ? "0" : `€ ${Math.round(t / 1000)}K`}
                    </text>
                  </g>
                ))}
                {/* x labels */}
                {Array.from({ length: YEARS + 1 }, (_, i) => (
                  <text key={i} x={x(i * 12)} y={H - 10} textAnchor="middle" fontSize={11} fill="#6B7280">
                    {i === 0 ? "Start" : `Jaar ${i}`}
                  </text>
                ))}
                {/* areas */}
                <path d={rentArea} fill="#B89A5A" fillOpacity={0.14} />
                <path d={apprArea} fill="#0E1420" fillOpacity={0.08} />
                {/* lines */}
                <path d={rentPath} fill="none" stroke="#B89A5A" strokeWidth={2} strokeLinejoin="round" />
                <path d={totalPath} fill="none" stroke="#0E1420" strokeWidth={2} strokeLinejoin="round" strokeOpacity={0.7} />
                {/* end markers + labels */}
                <circle cx={x(last.m)} cy={y(last.rent)} r={4} fill="#B89A5A" stroke="#F4F0E8" strokeWidth={2} />
                <circle cx={x(last.m)} cy={y(total)} r={4} fill="#0E1420" stroke="#F4F0E8" strokeWidth={2} />
                <text x={x(last.m) - 8} y={y(total) - 10} textAnchor="end" fontSize={12} fill="#0E1420" className="tnum">
                  {eur(total)}
                </text>
                {/* hover */}
                {hp && (
                  <g>
                    <line x1={x(hp.m)} x2={x(hp.m)} y1={padT} y2={H - padB} stroke="#B89A5A" strokeWidth={1} />
                    <circle cx={x(hp.m)} cy={y(hp.rent)} r={4} fill="#B89A5A" stroke="#F4F0E8" strokeWidth={2} />
                    <circle cx={x(hp.m)} cy={y(hp.rent + hp.appr)} r={4} fill="#0E1420" stroke="#F4F0E8" strokeWidth={2} />
                  </g>
                )}
              </svg>

              <div className="mt-3 flex min-h-[1.5rem] items-center justify-between text-[0.75rem] text-muted">
                {hp ? (
                  <p className="tnum">
                    Maand {hp.m}: huur {eur(hp.rent)} · waarde {eur(hp.appr)} ·{" "}
                    <span className="text-ink">totaal {eur(hp.rent + hp.appr)}</span>
                  </p>
                ) : (
                  <p>Beweeg over de grafiek voor de stand per maand.</p>
                )}
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                Vergelijking na 5 jaar
              </p>
              <div className="space-y-3">
                <Bar label="Spaarrekening" sub={`${pct(SAVINGS_RATE, 1)} p.j.`} value={savings} max={total} muted />
                <Bar label="City Vastgoed" sub={`${pct(RENT_YIELD, 1)} huur + ${pct(APPRECIATION, 1)} waarde p.j.`} value={total} max={total} />
              </div>
            </div>
            <p className="mt-5 text-[0.75rem] leading-relaxed text-muted">
              Indicatief. Gebaseerd op het gemiddelde huurrendement van de huidige panden en een
              aangenomen waardeontwikkeling van {pct(APPRECIATION, 1)} per jaar. Rendementen uit het
              verleden bieden geen garantie voor de toekomst.
            </p>
            <Button href="/aanbod/" variant="ink" arrow className="mt-8">
              Bekijk de panden
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Bar({
  label,
  sub,
  value,
  max,
  muted = false,
}: {
  label: string;
  sub: string;
  value: number;
  max: number;
  muted?: boolean;
}) {
  const w = Math.max(4, (value / max) * 100);
  return (
    <div className="grid grid-cols-[8rem_1fr_auto] items-center gap-4 text-[0.8125rem]">
      <div>
        <p className="text-ink">{label}</p>
        <p className="text-[0.625rem] uppercase tracking-[0.12em] text-muted">{sub}</p>
      </div>
      <div className="h-4 w-full">
        <div className={cn("h-4", muted ? "bg-stone-2" : "bg-gold")} style={{ width: `${w}%` }} />
      </div>
      <span className="tnum text-ink">{eur(value)}</span>
    </div>
  );
}
