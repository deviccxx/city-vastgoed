/**
 * Pure return-estimation logic for Briks.
 * Shared between the public calculator and (later) the investor portal / backend.
 */

export const BRIK_PRICE = 500;
export const MIN_TERM_YEARS = 5;
export const EARLY_EXIT_PENALTY_PCT = 6;

export type ReturnInput = {
  /** Invested amount in EUR */
  investment: number;
  /** Term in years (minimum 5) */
  years: number;
  /** Net rental yield per year, in percent (e.g. 6.01) */
  rentYieldPct: number;
  /** Expected property appreciation per year, in percent (e.g. 1) */
  appreciationPct: number;
};

export type ReturnOutput = {
  briks: number;
  monthlyPayout: number;
  totalRent: number;
  appreciation: number;
  endValue: number;
  totalReturn: number;
  /** Simple (non-compounded) average annual return in percent */
  annualizedPct: number;
};

export function briksFor(amount: number): number {
  return Math.max(0, Math.floor(amount / BRIK_PRICE));
}

export function estimateTotalReturn(input: ReturnInput): ReturnOutput {
  const investment = Math.max(0, input.investment);
  const years = Math.max(MIN_TERM_YEARS, Math.floor(input.years));
  const rentYield = Math.max(0, input.rentYieldPct) / 100;
  const appreciation = Math.max(0, input.appreciationPct) / 100;

  const monthlyPayout = (investment * rentYield) / 12;
  const totalRent = monthlyPayout * 12 * years;
  const endValue = investment * Math.pow(1 + appreciation, years);
  const appreciationGain = endValue - investment;
  const totalReturn = totalRent + appreciationGain;
  const annualizedPct =
    investment > 0 ? (totalReturn / investment / years) * 100 : 0;

  return {
    briks: briksFor(investment),
    monthlyPayout,
    totalRent,
    appreciation: appreciationGain,
    endValue,
    totalReturn,
    annualizedPct,
  };
}

export function earlyExitPenalty(investment: number): number {
  return investment * (EARLY_EXIT_PENALTY_PCT / 100);
}
