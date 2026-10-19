import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const usps = [
  {
    n: "01",
    title: "Beleggen zonder zorgen",
    text: "Wij selecteren de panden, verzorgen de renovatie, de verhuur en het beheer. U belegt vanuit een sterke basis van ervaring en kennis van de Nederlandse woningmarkt.",
    href: "/over-city-vastgoed/",
  },
  {
    n: "02",
    title: "Maandelijks uw rendement",
    text: "U investeert direct in verhuurde woonpanden, vanaf € 500 per Brik. Elke maand ontvangt u uw aandeel in de netto huurinkomsten, na vijf jaar deelt u in de waardeontwikkeling.",
    href: "/veelgestelde-vragen/vragen-over-briks-en-het-rendement/",
  },
  {
    n: "03",
    title: "5 – 9% verwacht op jaarbasis",
    text: "Onze panden verkeren in uitmuntende staat, zijn energiezuinig en liggen op locaties met een structureel tekort aan kwalitatieve huurwoningen.",
    href: "/veelgestelde-vragen/vragen-over-briks-en-het-rendement/",
  },
];

export function UspRow() {
  return (
    <Section tone="cream" className="border-b border-stone">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {usps.map((u, i) => (
            <Reveal key={u.n} delay={i * 120}>
              <div className="rule-gold mb-7" />
              <p className="eyebrow mb-4">{u.n}</p>
              <h3 className="font-display text-3xl leading-tight">{u.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                {u.text}
              </p>
              <Link
                href={u.href}
                className="link-gold mt-6 inline-block text-[0.6875rem] uppercase tracking-[0.16em] text-ink"
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
