import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { UspRow } from "@/components/home/UspRow";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";

export const metadata: Metadata = {
  title: "Beleggen in vastgoedobligaties",
  description:
    "Wat is een vastgoedobligatie, hoe werkt een Brik en waarom beleggen vermogende particulieren en ondernemers in Nederlands woonvastgoed?",
};

const advantages = [
  "Meer rendement op de lange termijn dan sparen, met minder volatiliteit dan aandelen",
  "Vaste, maandelijkse inkomsten uit contractueel vastgelegde huur",
  "Spreiding over meerdere panden en steden, vanaf één Brik",
  "Tastbaar: u weet precies in welk pand u investeert",
  "Geen omkijken naar huurders, onderhoud of financiering",
  "Onafhankelijke taxaties en een transparant financieel overzicht per pand",
];

export default function ObligatiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Beleggen in vastgoedobligaties"
        title="Het rendement van stenen, zonder de lasten."
        lead="Vastgoedobligaties zijn de afgelopen jaren sterk in populariteit toegenomen. Huizenprijzen stijgen structureel en de vraag naar kwalitatieve huurwoningen overtreft het aanbod. Via Briks profiteert u daarvan, zonder zelf een pand te hoeven kopen of beheren."
        image="/images/modern.jpg"
      >
        <div className="mt-10">
          <Button href="/aanbod/" variant="gold" arrow>
            Bekijk het aanbod
          </Button>
        </div>
      </PageHero>

      <UspRow />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Hoe het werkt"
                title="Een lening aan een pand, met rente uit de huur."
                titleSize="md"
              />
            </div>
            <div className="prose-luxe lg:col-span-6 lg:col-start-7 text-base leading-relaxed text-ink/80 md:text-lg">
              <p>
                Uw belegging is een lening aan de vennootschap die het pand bezit.
                Maandelijks ontvangt u een evenredig deel van de netto
                huuropbrengsten, afhankelijk van uw inleg. Aan het einde van de
                looptijd wordt de hoofdsom terugbetaald, inclusief uw aandeel in de
                waardevermeerdering van het pand.
              </p>
              <p>
                Het vastgoed bestaat uit panden met appartementen en studio&apos;s die
                zijn gerenoveerd tot energiezuinige woningen. Het verwachte
                rendement staat bij elk pand vermeld en is gebonden aan een
                looptijd van vijf jaar. De actuele rente ziet u in uw portaal.
              </p>
              <p>
                U investeert vanaf één Brik van € 500. Voor investeerders in het
                hogere segment is spreiding over meerdere panden eenvoudig: u kiest
                per pand het aantal Briks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Voor wie"
                title="Ondernemers, vermogende particulieren en spaarders."
                titleSize="md"
                lead="Vastgoed is waardevast en geschikt om vermogen op de lange termijn veilig te stellen. Ondernemers beleggen een deel van de winst en houden liquiditeit. Particulieren zetten spaargeld of een erfenis aan het werk, zonder de verantwoordelijkheid van eigen vastgoed."
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6 text-gold-2">De voordelen op een rij</p>
              <ul className="divide-y divide-cream/10 border-y border-cream/10">
                {advantages.map((a, i) => (
                  <Reveal key={a} delay={i * 80} as="li">
                    <div className="flex items-start gap-4 py-4 text-[0.9375rem] text-cream/80">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                      {a}
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Button href="/inloggen/#registreren" variant="gold" arrow className="mt-10">
                Maak een gratis account aan
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Testimonials />
      <FaqPreview />
      <ContactSection />
      <ArticlesPreview />
    </>
  );
}
