import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { RiskGrid } from "@/components/trust/RiskGrid";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Risico's",
  description: "De risico's van beleggen in vastgoedobligaties, met rekenvoorbeelden en hoe City Vastgoed ze beperkt.",
};

export default function RisicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Risico's"
        title="Wat er mis kan gaan, en wat dat voor u betekent."
        lead="Beleggen is nooit zonder risico. Wij benoemen ze liever vooraf dan achteraf, met cijfers."
        compact
      />
      <Section tone="cream">
        <Container>
          <RiskGrid />
          <div className="mt-14 grid gap-10 border-t border-stone-2 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Ons uitgangspunt"
                title="Beleg uitsluitend met vermogen dat u vijf jaar kunt missen."
                titleSize="sm"
                lead="Twijfelt u of deze belegging bij uw situatie past? Bel ons, of raadpleeg uw eigen adviseur. Wij geven geen beleggingsadvies."
              />
            </div>
            <div className="flex items-end lg:col-span-4 lg:col-start-9">
              <Button href="/contact/" variant="ink" arrow>
                Bespreek uw situatie
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}
