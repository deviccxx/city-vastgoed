import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { StructureDiagram, RankingList } from "@/components/trust/StructureDiagram";
import { DocumentList } from "@/components/trust/DocumentList";
import { ContactSection } from "@/components/home/ContactSection";
import { structureExplainer } from "@/lib/data/trust";

export const metadata: Metadata = {
  title: "Juridische structuur",
  description: "Hoe uw Briks juridisch zijn ondergebracht, wie eigenaar is van het pand en wie er bij faillissement eerst aan de beurt is.",
};

export default function StructuurPage() {
  return (
    <>
      <PageHero
        eyebrow="Juridische structuur"
        title="Waar uw geld staat, en wie er bij kan."
        lead="Uw Briks zitten in de vennootschap van het pand, niet bij City Vastgoed. Zo zit dat in elkaar."
        compact
      />

      <Section tone="white">
        <Container>
          <StructureDiagram />
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Stap voor stap" title="Van Brik tot uitkering." titleSize="md" />
            </div>
            <ol className="divide-y divide-stone-2 border-y border-stone-2 lg:col-span-7 lg:col-start-6">
              {structureExplainer.map((s, i) => (
                <Reveal key={s.title} delay={i * 80} as="li">
                  <div className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                    <span className="font-display text-3xl text-gold">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl">{s.title}</h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Rangorde bij verkoop of uitwinning"
                title="Wie staat waar in de rij."
                titleSize="md"
                lead="Eerlijk benoemd: de hypotheekverstrekker gaat vóór. Daarna u. City Vastgoed komt als laatste."
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <RankingList light />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Documenten" title="Lees het na." titleSize="md" lead="De obligatievoorwaarden en het informatiememorandum beschrijven de structuur volledig." />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <DocumentList />
            </div>
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}
