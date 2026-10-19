import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Stat } from "@/components/ui/Stat";
import { DummyNote } from "@/components/trust/DummyNote";
import { TrackRecordGrid } from "@/components/trust/TrackRecordTable";
import { ContactSection } from "@/components/home/ContactSection";
import { trackRecord } from "@/lib/data/trust";
import { eur, pct, num } from "@/lib/format";

export const metadata: Metadata = {
  title: "Trackrecord",
  description: "Gerealiseerd rendement, bezetting en taxatiewaarde per pand, per jaar.",
};

export default function TrackrecordPage() {
  return (
    <>
      <PageHero
        eyebrow="Trackrecord"
        title="Cijfers per pand, per jaar."
        lead={`Sinds ${trackRecord.activeSince} keerden wij ${eur(trackRecord.totalPaidOut)} uit aan ${num(trackRecord.investors)} investeerders. Elke uitkering op tijd.`}
        image="/images/skyline.jpg"
        compact
      />

      <Section tone="ink" tight>
        <Container>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <Stat light value={pct(trackRecord.avgRealizedReturnPct, 1)} label="Gem. gerealiseerd p.j." />
            <Stat light value={pct(trackRecord.avgOccupancyPct, 1)} label="Gem. bezetting" />
            <Stat light value={`${trackRecord.payoutsCount}`} label="Uitkeringsrondes" />
            <Stat light value={`${trackRecord.missedPayouts}`} label="Gemiste uitkeringen" />
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Per pand"
              title="Rendement, bezetting en taxatie."
              titleSize="md"
              lead="Rendement is het netto huurrendement op de Briks in dat jaar. Taxaties zijn uitgevoerd door een onafhankelijke NRVT-taxateur."
            />
            <DummyNote className="shrink-0" />
          </div>
          <div className="mt-14">
            <TrackRecordGrid />
          </div>
          <p className="mt-8 max-w-3xl text-[0.75rem] leading-relaxed text-muted">
            Rendementen uit het verleden bieden geen garantie voor de toekomst. Taxatiewaarden zijn
            indicatief tot het moment van verkoop. Volledige jaaroverzichten per pand-B.V. zijn na
            registratie in te zien.
          </p>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}
