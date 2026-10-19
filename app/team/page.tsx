import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { DummyNote } from "@/components/trust/DummyNote";
import { TeamGrid } from "@/components/trust/TeamGrid";
import { ContactSection } from "@/components/home/ContactSection";
import { partners, legalEntity } from "@/lib/data/trust";

export const metadata: Metadata = {
  title: "Team en partners",
  description: "De mensen achter City Vastgoed en de notaris, taxateur, accountant en financier waarmee wij werken.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team en partners"
        title="De mensen achter uw investering."
        lead="Wie uw geld beheert, wie het controleert en wie u belt met vragen."
        image="/images/interior.jpg"
        compact
      />

      <Section tone="cream">
        <Container>
          <div className="flex items-center justify-between gap-6">
            <SectionHeading eyebrow="Het team" title="Vier mensen, één aanspreekpunt." titleSize="md" />
            <DummyNote />
          </div>
          <div className="mt-14">
            <TeamGrid />
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <SectionHeading
            light
            eyebrow="Onafhankelijke partners"
            title="Wie controleert, passeert en taxeert."
            titleSize="md"
            lead="Geen enkele stap in het proces ligt alleen bij City Vastgoed."
          />
          <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="h-full bg-ink p-8">
                  <p className="eyebrow mb-3 text-gold-2">{p.role}</p>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-cream/60">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" tight>
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-3">Bedrijfsgegevens</p>
              <h2 className="font-display text-3xl">{legalEntity.statutoryName}</h2>
            </div>
            <dl className="grid gap-x-10 gap-y-5 text-[0.875rem] sm:grid-cols-2 md:col-span-8">
              <div><dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">KvK</dt><dd className="tnum mt-1">{legalEntity.kvk}</dd></div>
              <div><dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">BTW</dt><dd className="tnum mt-1">{legalEntity.vat}</dd></div>
              <div><dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">Bestuurders</dt><dd className="mt-1">{legalEntity.directors.join(", ")}</dd></div>
              <div><dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">Opgericht</dt><dd className="tnum mt-1">{legalEntity.founded}</dd></div>
              <div className="sm:col-span-2"><dt className="text-[0.625rem] uppercase tracking-[0.14em] text-muted">Vestigingsadres</dt><dd className="mt-1">{legalEntity.address}</dd></div>
            </dl>
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}
