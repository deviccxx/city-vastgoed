import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { UspRow } from "@/components/home/UspRow";
import { GrowthChart } from "@/components/home/GrowthChart";
import { Personas } from "@/components/home/Personas";
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
  "Meer rendement dan sparen, minder volatiel dan aandelen",
  "Maandelijkse inkomsten uit contractueel vastgelegde huur",
  "Spreiding over panden en steden, vanaf één Brik",
  "Tastbaar: u weet precies in welk pand u investeert",
  "Geen huurders, onderhoud of financiering",
  "Onafhankelijke taxaties en transparante cijfers per pand",
];

export default function ObligatiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Beleggen in vastgoedobligaties"
        title="Het rendement van stenen, zonder de lasten."
        lead="De vraag naar kwalitatieve huurwoningen overtreft het aanbod. Via Briks profiteert u daarvan, zonder zelf een pand te kopen of te beheren."
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
                eyebrow="Wat is een Brik"
                title="Een lening aan een pand, met rente uit de huur."
                titleSize="md"
                lead="Uw inleg is een lening aan de vennootschap die het pand bezit. Maandelijks ontvangt u rente uit de netto huur; na de looptijd krijgt u uw inleg terug, plus uw aandeel in de waardeontwikkeling."
              />
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-stone pt-8">
                <Stat value="€ 500" label="Per Brik" size="sm" />
                <Stat value="5 jaar" label="Looptijd" size="sm" />
                <Stat value="Maandelijks" label="Rente-uitkering" size="sm" />
                <Stat value="1 B.V." label="Per pand" size="sm" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6">De voordelen op een rij</p>
              <ul className="divide-y divide-stone border-y border-stone">
                {advantages.map((a, i) => (
                  <Reveal key={a} delay={i * 80} as="li">
                    <div className="flex items-start gap-4 py-4 text-[0.9375rem] text-ink/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                      {a}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <GrowthChart />
      <Personas />
      <Testimonials />
      <FaqPreview />
      <ContactSection />
      <ArticlesPreview />
    </>
  );
}
