"use client";

import { useMemo, useState } from "react";
import { BRIK_PRICE, MIN_TERM_YEARS, estimateTotalReturn } from "@/lib/calc";
import { eur, pct, num } from "@/lib/format";
import { Button } from "@/components/ui/Button";

export function ReturnCalculator({
  rentYieldPct,
  defaultInvestment = 50000,
}: {
  rentYieldPct: number;
  defaultInvestment?: number;
}) {
  const [investment, setInvestment] = useState(defaultInvestment);
  const [years, setYears] = useState(MIN_TERM_YEARS);
  const [appreciation, setAppreciation] = useState(1);

  const r = useMemo(
    () =>
      estimateTotalReturn({
        investment,
        years,
        rentYieldPct,
        appreciationPct: appreciation,
      }),
    [investment, years, rentYieldPct, appreciation],
  );

  return (
    <div className="border border-gold/30 bg-ink p-7 text-cream md:p-9">
      <p className="eyebrow mb-2 text-gold-2">Rendementsindicatie</p>
      <p className="font-display text-3xl">Uw investering</p>

      <div className="mt-8 space-y-7">
        <label className="block">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/60">
              Inleg
            </span>
            <span className="tnum font-display text-2xl">{eur(investment)}</span>
          </div>
          <input
            type="range"
            min={BRIK_PRICE}
            max={500000}
            step={BRIK_PRICE}
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
          />
          <div className="mt-2 flex justify-between text-[0.625rem] uppercase tracking-[0.14em] text-cream/40">
            <span>{eur(BRIK_PRICE)}</span>
            <span className="tnum">{num(r.briks)} Briks</span>
            <span>{eur(500000)}</span>
          </div>
        </label>

        <div className="grid grid-cols-2 gap-6">
          <label className="block">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/60">
                Looptijd
              </span>
              <span className="tnum font-display text-xl">{years} jaar</span>
            </div>
            <input
              type="range"
              min={MIN_TERM_YEARS}
              max={15}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/60">
                Waardestijging p.j.
              </span>
              <span className="tnum font-display text-xl">{pct(appreciation, 1)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={5}
              step={0.5}
              value={appreciation}
              onChange={(e) => setAppreciation(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-cream/15 pt-8">
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/55">
            Per maand
          </p>
          <p className="tnum mt-2 font-display text-3xl">{eur(r.monthlyPayout, true)}</p>
        </div>
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/55">
            Huurrendement
          </p>
          <p className="tnum mt-2 font-display text-3xl">{pct(rentYieldPct)}</p>
        </div>
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/55">
            Waardeontwikkeling
          </p>
          <p className="tnum mt-2 font-display text-3xl">{eur(r.appreciation)}</p>
        </div>
        <div>
          <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/55">
            Totaal na {years} jaar
          </p>
          <p className="tnum mt-2 font-display text-3xl text-gold-2">{eur(r.totalReturn)}</p>
          <p className="tnum mt-1 text-[0.6875rem] text-cream/50">
            gem. {pct(r.annualizedPct)} per jaar
          </p>
        </div>
      </div>

      <Button href="/inloggen/#registreren" variant="gold" arrow className="mt-9 w-full">
        Investeer nu
      </Button>
      <p className="mt-5 text-[0.75rem] leading-relaxed text-cream/45">
        Rendementen zijn schattingen op basis van de huidige huurinkomsten en een
        aangenomen waardeontwikkeling. Zij bieden geen garantie voor de toekomst.
      </p>
    </div>
  );
}
