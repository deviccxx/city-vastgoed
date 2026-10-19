const eurFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const eurFormatterCents = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numFormatter = new Intl.NumberFormat("nl-NL", {
  maximumFractionDigits: 0,
});

/** € 1.234 (no cents) or € 1.234,56 with cents */
export function eur(value: number, cents = false): string {
  return (cents ? eurFormatterCents : eurFormatter).format(value);
}

/** 5,97% */
export function pct(value: number, decimals = 2): string {
  return (
    new Intl.NumberFormat("nl-NL", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value) + "%"
  );
}

/** 1.585 */
export function num(value: number): string {
  return numFormatter.format(value);
}

/** 657,10 m² */
export function m2(value: number): string {
  return (
    new Intl.NumberFormat("nl-NL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value) + " m²"
  );
}

/** 31 januari 2023 */
export function dateNl(iso: string): string {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
