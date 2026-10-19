import Link from "next/link";
import { ShieldCheck, CalendarCheck, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const usps = [
  {
    icon: ShieldCheck,
    title: "Beleggen zonder zorgen",
    text: "Selectie, renovatie, verhuur en beheer: wij doen het werk. U belegt op onze kennis van de Nederlandse woningmarkt.",
    href: "/over-city-vastgoed/",
  },
  {
    icon: CalendarCheck,
    title: "Maandelijks uitgekeerd",
    text: "Elke maand uw aandeel in de netto huur. Na vijf jaar deelt u in de waardeontwikkeling van het pand.",
    href: "/veelgestelde-vragen/vragen-over-briks-en-het-rendement/",
  },
  {
    icon: TrendingUp,
    title: "5 – 9% verwacht per jaar",
    text: "Energiezuinige panden op locaties met een structureel tekort aan kwalitatieve huurwoningen.",
    href: "/veelgestelde-vragen/vragen-over-briks-en-het-rendement/",
  },
];

export function UspRow() {
  return (
    <Section tone="cream" tight>
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 120}>
              <span className="icon-tile">
                <u.icon className="h-5 w-5" strokeWidth={1.25} />
              </span>
              <h3 className="mt-6 font-display text-3xl leading-tight">{u.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{u.text}</p>
              <Link
                href={u.href}
                className="link-gold mt-5 inline-block text-[0.6875rem] uppercase tracking-[0.16em] text-ink"
              >
                Lees meer
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
