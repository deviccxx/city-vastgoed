import { Briefcase, Wallet, PiggyBank } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const personas = [
  {
    icon: Briefcase,
    title: "De ondernemer",
    text: "Belegt een deel van de winst in stenen en houdt liquiditeit in de onderneming.",
    range: "€ 100.000 – € 500.000",
  },
  {
    icon: Wallet,
    title: "De vermogende particulier",
    text: "Spreidt vermogen over meerdere panden en steden, zonder beheer.",
    range: "€ 50.000 – € 250.000",
  },
  {
    icon: PiggyBank,
    title: "De spaarder",
    text: "Zet spaargeld of een erfenis aan het werk met een maandelijkse uitkering.",
    range: "Vanaf € 500",
  },
];

export function Personas() {
  return (
    <Section tone="ink">
      <Container>
        <SectionHeading
          light
          eyebrow="Voor wie"
          title="Voor wie vermogen rustig wil laten werken."
          titleSize="md"
          align="center"
        />
        <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full bg-ink p-9">
                <span className="icon-tile">
                  <p.icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <h3 className="mt-6 font-display text-3xl">{p.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-cream/60">{p.text}</p>
                <p className="tnum mt-6 text-[0.6875rem] uppercase tracking-[0.16em] text-gold-2">
                  Typische inleg · {p.range}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/inloggen/#registreren" variant="gold" arrow>
            Maak een gratis account aan
          </Button>
        </div>
      </Container>
    </Section>
  );
}
