import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PortalTeaser } from "@/components/home/PortalTeaser";
import { PropertyShowcase } from "@/components/home/PropertyShowcase";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Online beleggen in vastgoed",
  description:
    "Waarom online beleggen in vastgoed? Gemak, inzicht en spreiding, vanuit uw persoonlijke portaal.",
};

const reasons = [
  {
    title: "Gemak",
    text: "Registreren, een pand kiezen en investeren duurt minder dan tien minuten. Geen notaris, geen hypotheek, geen huurders.",
  },
  {
    title: "Inzicht",
    text: "Uw portaal toont per pand uw inleg, de maandelijkse uitkering, de indexering en de laatste taxatiewaarde.",
  },
  {
    title: "Spreiding",
    text: "Verdeel uw vermogen over meerdere panden en steden. Vanaf één Brik per pand.",
  },
  {
    title: "Stabiliteit",
    text: "Vastgoed is een belegging voor de lange termijn, met een rendement uit huur en waardeontwikkeling. Minder volatiel dan de beurs.",
  },
];

export default function OnlineBeleggenPage() {
  return (
    <>
      <PageHero
        eyebrow="Online beleggen in vastgoed"
        title="Investeren zonder zorgen. Inzicht zonder moeite."
        lead="Investeer online in gerenoveerde, verhuurde woonpanden en volg alles in uw persoonlijke portaal."
        image="/images/interior.jpg"
      />

      <Section tone="cream">
        <Container>
          <SectionHeading
            eyebrow="Waarom online"
            title="Vier redenen om online te beleggen in vastgoed."
            titleSize="md"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="rule-gold mb-6" />
                <p className="eyebrow mb-3">0{i + 1}</p>
                <h3 className="font-display text-2xl">{r.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                light
                eyebrow="Het rendement"
                title="Twee bronnen van rendement."
                titleSize="md"
                lead="Maandelijks uw aandeel in de netto huur. Na vijf jaar de waardeontwikkeling, vastgesteld door een onafhankelijke taxateur."
              />
              <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-cream/55">
                Op basis van de huidige panden projecteren wij een totaalrendement
                tussen de 5 en 9% per jaar. Rendementen zijn schattingen en bieden
                geen garantie.
              </p>
              <Button href="/beleggen-in-vastgoedobligaties/" variant="outline-light" arrow className="mt-10">
                Alles over vastgoedobligaties
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <PortalTeaser />
      <PropertyShowcase />
      <ContactSection />
    </>
  );
}
