import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/trust/ProcessTimeline";
import { DocumentList } from "@/components/trust/DocumentList";
import { PortalTeaser } from "@/components/home/PortalTeaser";
import { ContactSection } from "@/components/home/ContactSection";
import { eur } from "@/lib/format";

export const metadata: Metadata = {
  title: "Zo werkt investeren",
  description: "Wat er gebeurt na uw registratie: identificatie, overeenkomst, betaling via de notaris, bevestiging en eerste uitkering.",
};

const payoutExample = [
  { label: "Uw Briks in Bergweg 36", value: "120 Briks · € 60.000" },
  { label: "Netto huurresultaat pand (maand)", value: eur(4051) },
  { label: "Uw aandeel (120 / 1.628)", value: "7,37%" },
  { label: "Uw uitkering 1 november", value: eur(298.6, true) },
];

export default function ProcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Zo werkt investeren"
        title="Van registratie tot eerste uitkering."
        lead="Zes stappen, elk met een termijn. Uw inleg loopt via de derdengeldenrekening van de notaris."
        image="/images/facade.jpg"
        compact
      />

      <Section tone="cream">
        <Container>
          <ProcessTimeline />
          <div className="mt-14">
            <Button href="/inloggen/#registreren" variant="ink" arrow>
              Start met registreren
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Voorbeeld uitkering"
                title="Zo ziet een maandelijkse uitkering eruit."
                titleSize="md"
                lead="Elke maand ontvangt u een specificatie in uw portaal en per e-mail. Jaarlijks volgt een jaaropgave voor uw belastingaangifte."
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-gold/30 bg-ink-2 p-8">
                <p className="eyebrow mb-6 text-gold-2">Uitkeringsspecificatie · november 2025</p>
                <dl className="divide-y divide-cream/10">
                  {payoutExample.map((r, i) => (
                    <div key={r.label} className="flex items-baseline justify-between gap-6 py-3 text-[0.9375rem]">
                      <dt className={i === payoutExample.length - 1 ? "text-cream" : "text-cream/65"}>{r.label}</dt>
                      <dd className={"tnum " + (i === payoutExample.length - 1 ? "font-display text-2xl text-gold-2" : "")}>{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Documenten" title="Wat u ontvangt." titleSize="md" />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <DocumentList />
            </div>
          </div>
        </Container>
      </Section>

      <PortalTeaser />
      <ContactSection />
    </>
  );
}
