import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, SectionHeading, Title } from "@/components/ui/Heading";
import { Stat } from "@/components/ui/Stat";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/property/Gallery";
import { FinancialOverview } from "@/components/property/FinancialOverview";
import { ReturnCalculator } from "@/components/property/ReturnCalculator";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ContactSection } from "@/components/home/ContactSection";
import { Button } from "@/components/ui/Button";
import { getProperty, properties, statusLabel } from "@/lib/data/properties";
import { faqCategories } from "@/lib/data/faq";
import { eur, m2, num, pct } from "@/lib/format";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aanbod/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return {};
  return { title: p.address, description: p.summary };
}

const propertyFaq = [
  faqCategories[1].items[3], // verwacht rendement / waardestijging
  faqCategories[4].items[0], // werkwijze
  faqCategories[1].items[6], // eigenaar
  faqCategories[1].items[5], // risico's
  faqCategories[3].items[3], // kosten
];

export default async function PropertyPage({ params }: PageProps<"/aanbod/[slug]">) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const others = properties.filter((o) => o.slug !== p.slug).slice(0, 2);
  const ret = p.realizedReturnPct ?? p.expectedReturnPct ?? 0;

  return (
    <>
      {/* Title bar */}
      <section className="bg-ink text-cream">
        <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <Eyebrow light>{p.city}</Eyebrow>
              <span className="h-px w-8 bg-gold/50" />
              <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-cream/60">
                {statusLabel[p.status]}
              </span>
            </div>
            <Title as="h1" size="xl">
              {p.name}
            </Title>
          </div>
          <div className="flex gap-10 md:gap-14">
            <Stat
              light
              value={pct(ret, ret % 1 === 0 ? 1 : 2)}
              label={p.realizedReturnPct ? "Gerealiseerd p.j." : "Verwacht p.j."}
            />
            <Stat light value={pct(p.fundedPct, p.fundedPct === 100 ? 0 : 2)} label="Gefinancierd" />
            {p.status === "open" && (
              <Stat light value={num(p.briks.remaining)} label="Briks beschikbaar" />
            )}
          </div>
        </Container>
      </section>

      {/* Gallery + facts */}
      <Section tone="cream" tight>
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Gallery images={p.images} alt={p.address} />
            </div>
            <aside className="flex flex-col justify-between border border-stone-2 bg-white p-8">
              <div>
                <p className="eyebrow mb-6">Pand details</p>
                <dl className="divide-y divide-stone">
                  {p.facts.surfaceM2 > 0 && (
                    <Fact label="Totaaloppervlakte" value={m2(p.facts.surfaceM2)} />
                  )}
                  <Fact label="Woningen" value={p.facts.unitsLabel} />
                  {p.facts.propertyCost > 0 && (
                    <Fact label="Kosten pand" value={eur(p.facts.propertyCost)} />
                  )}
                  {p.facts.investors > 0 && (
                    <Fact label="Aantal investeerders" value={String(p.facts.investors)} />
                  )}
                  {p.briks.total > 0 && <Fact label="Totaal Briks" value={num(p.briks.total)} />}
                  <Fact label="Prijs per Brik" value={eur(500)} />
                  <Fact label="Looptijd" value={`${p.termYears} jaar`} />
                </dl>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                    <span>Financiering</span>
                    <span className="tnum">{pct(p.fundedPct, p.fundedPct === 100 ? 0 : 2)}</span>
                  </div>
                  <div className="h-px w-full bg-stone-2">
                    <div className="h-px bg-gold" style={{ width: `${Math.min(100, p.fundedPct)}%` }} />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                {p.status === "open" ? (
                  <Button href="#investeer" variant="gold" arrow className="w-full">
                    Investeer nu
                  </Button>
                ) : (
                  <Button href="/aanbod/" variant="outline-dark" arrow className="w-full">
                    Bekijk ander aanbod
                  </Button>
                )}
                <p className="mt-4 text-center text-[0.75rem] text-muted">
                  Om te investeren{" "}
                  <Link href="/inloggen/#registreren" className="underline underline-offset-4 hover:text-ink">
                    maakt u eerst een account aan
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Description */}
      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Het pand en de omgeving" title={`Wonen aan de ${p.name}.`} titleSize="md" />
              <div className="prose-luxe mt-8 max-w-2xl text-[0.9875rem] leading-relaxed text-ink/80">
                {p.description.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <p className="text-muted">{p.wozContext}</p>
              </div>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {p.usps.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-[0.9375rem]">
                    <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow mb-6">Bereikbaarheid</p>
              <dl className="space-y-7">
                <div>
                  <dt className="font-display text-xl">Ligging</dt>
                  <dd className="mt-2 text-[0.9rem] leading-relaxed text-muted">{p.accessibility.center}</dd>
                </div>
                <div>
                  <dt className="font-display text-xl">Openbaar vervoer</dt>
                  <dd className="mt-2 text-[0.9rem] leading-relaxed text-muted">{p.accessibility.publicTransport}</dd>
                </div>
                <div>
                  <dt className="font-display text-xl">Per auto</dt>
                  <dd className="mt-2 text-[0.9rem] leading-relaxed text-muted">{p.accessibility.car}</dd>
                </div>
              </dl>
              {p.mapsUrl && (
                <a
                  href={p.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-gold mt-8 inline-flex items-center gap-2 whitespace-nowrap text-[0.6875rem] uppercase tracking-[0.16em] text-ink"
                >
                  Bekijk op de kaart <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Financials + calculator */}
      {p.financials && (
        <Section tone="cream" id="investeer">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Financieel overzicht"
                  title="Transparant tot op de euro."
                  titleSize="md"
                  lead="Zo is dit pand gefinancierd en zo komt het maandelijkse huurrendement tot stand. Alle bedragen zijn afgerond."
                />
                <div className="mt-12">
                  <FinancialOverview property={p} />
                </div>
              </div>
              <div className="lg:col-span-5">
                <Reveal>
                  <ReturnCalculator rentYieldPct={p.financials.rentYieldPct} />
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Veelgestelde vragen" title="Over dit pand." titleSize="md" />
              <Button href="/veelgestelde-vragen/" variant="text" arrow className="mt-8">
                Alle vragen
              </Button>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Accordion items={propertyFaq} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Other properties */}
      <Section tone="cream-2">
        <Container>
          <Eyebrow className="mb-10">Ander aanbod</Eyebrow>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-10">
            {others.map((o) => (
              <PropertyCard key={o.slug} property={o} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 text-[0.875rem]">
      <dt className="text-muted">{label}</dt>
      <dd className="tnum text-right">{value}</dd>
    </div>
  );
}
