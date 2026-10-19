import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DummyNote } from "@/components/trust/DummyNote";
import { TrackRecordGrid } from "@/components/trust/TrackRecordTable";
import { StructureDiagram } from "@/components/trust/StructureDiagram";
import { TeamCard } from "@/components/trust/TeamGrid";
import { ProcessTimeline } from "@/components/trust/ProcessTimeline";
import { DocumentList } from "@/components/trust/DocumentList";
import { team, partners, trackRecord } from "@/lib/data/trust";
import { pct } from "@/lib/format";

/** Home: gerealiseerd rendement per pand, met bewijs. */
export function TrackRecordPreview() {
  return (
    <Section tone="cream-2">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Trackrecord"
            title={`Gemiddeld ${pct(trackRecord.avgRealizedReturnPct, 1)} per jaar, per pand onderbouwd.`}
            titleSize="md"
            lead="Geen gemiddelden zonder bewijs. Per gerealiseerd pand tonen wij rendement, bezetting en taxatiewaarde per jaar."
          />
          <div className="flex shrink-0 items-center gap-4">
            <DummyNote />
            <Button href="/trackrecord/" variant="outline-dark" arrow>
              Volledig trackrecord
            </Button>
          </div>
        </div>
        <div className="mt-14">
          <TrackRecordGrid slugs={["oscarlaan-182-184-almere", "belgieplein-36-amsterdam"]} />
        </div>
      </Container>
    </Section>
  );
}

/** Home: waar staat uw geld. */
export function StructurePreview() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Juridische structuur"
              title="Waar uw geld staat, en wie er bij kan."
              titleSize="md"
              lead="Uw Briks zitten in de vennootschap van het pand, niet bij City Vastgoed. Een onafhankelijke stichting bewaakt uw belang."
            />
            <Button href="/juridische-structuur/" variant="outline-dark" arrow className="mt-8">
              Structuur en rangorde
            </Button>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <StructureDiagram />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Home: de mensen en partners. */
export function TeamPreview() {
  const contacts = team.filter((m) => m.contactPerson);
  return (
    <Section tone="cream">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Wie uw vermogen beheert"
              title="Mensen met naam, nummer en staat van dienst."
              titleSize="md"
              lead="U spreekt altijd dezelfde personen. Bel ze gerust voordat u investeert."
            />
            <DummyNote className="mt-6" />
            <Button href="/team/" variant="outline-dark" arrow className="mt-8">
              Het hele team
            </Button>

            <div className="mt-12 border-t border-stone-2 pt-8">
              <p className="eyebrow mb-4">Onze partners</p>
              <ul className="space-y-2.5 text-[0.875rem]">
                {partners.map((p) => (
                  <li key={p.name} className="flex justify-between gap-4">
                    <span>{p.name}</span>
                    <span className="shrink-0 text-[0.625rem] uppercase tracking-[0.12em] text-muted">{p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {contacts.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <TeamCard member={m} size="lg" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Home: wat er gebeurt na registratie + documenten. */
export function ProcessPreview() {
  return (
    <Section tone="ink">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              light
              eyebrow="Zo werkt investeren"
              title="Zes stappen, met termijnen."
              titleSize="md"
              lead="Van registratie tot eerste uitkering binnen twee weken. Uw inleg loopt via de derdengeldenrekening van de notaris."
            />
            <div className="mt-12">
              <ProcessTimeline light />
            </div>
            <Button href="/zo-werkt-het/" variant="outline-light" arrow className="mt-12">
              Het volledige proces
            </Button>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow mb-5 text-gold-2">Documenten per pand</p>
            <DocumentList light />
            <p className="mt-5 text-[0.75rem] leading-relaxed text-cream/45">
              Obligatievoorwaarden, taxatierapport en gecontroleerde jaarrekening zijn na kosteloze
              registratie in te zien.{" "}
              <Link href="/risicos/" className="link-gold text-gold-2">
                Lees ook de risico&apos;s
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
