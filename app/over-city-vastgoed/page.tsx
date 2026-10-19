import type { Metadata } from "next";
import { Image } from "@/components/ui/Img";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Testimonials } from "@/components/home/Testimonials";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Over City Vastgoed",
  description:
    "City Vastgoed is een online beleggingsplatform voor Nederlands woonvastgoed. Lees over onze visie, missie en werkwijze.",
};

const values = [
  { title: "Persoonlijk", text: "U heeft altijd een vast aanspreekpunt. Vragen of advies? Wij nemen de tijd." },
  { title: "Pragmatisch", text: "Geen omslachtige constructies. Eén Brik, één pand, één helder overzicht." },
  { title: "Praktisch", text: "Van huurdersselectie tot onderhoud: wij regelen het, u ontvangt." },
  { title: "Betrouwbaar", text: "Lange termijn, transparante cijfers, onafhankelijke taxaties." },
];

export default function OverPage() {
  return (
    <>
      <PageHero
        eyebrow="Over City Vastgoed"
        title="Een platform gebouwd op ervaring en lange termijn."
        lead="City Vastgoed is een online beleggingsplatform waar particuliere en zakelijke investeerders via vastgoedobligaties, Briks, investeren in Nederlands woonvastgoed. Wij kopen panden aan, renoveren ze tot energiezuinige woningen en verhuren ze."
        image="/images/facade.jpg"
      />

      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Zorgeloos investeren"
                title="Wij nemen de zorgen uit handen."
                titleSize="md"
                lead="Huurdersselectie, reparaties, verzekeringen, onvoorziene kosten: het is ons werk, niet het uwe. Zodra de units in een pand gereed zijn voor verhuur, bieden wij het aan op het platform. In uw portaal ziet u uw inleg, het verwachte en behaalde rendement per pand en al uw transacties."
              />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Transparantie en wet- en regelgeving staan voorop. Rendementen zijn
                niet gegarandeerd en kunnen variëren; daarom communiceren wij
                uitsluitend over verwachte en gerealiseerde cijfers, onderbouwd
                met onafhankelijke taxaties.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                  <Image src="/images/interior.jpg" alt="Interieur van een gerenoveerd appartement" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3">
            <div>
              <p className="eyebrow mb-5 text-gold-2">Visie</p>
              <h3 className="font-display text-3xl">Vastgoed rendeert beter dan sparen.</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cream/65">
                Beleggen in vastgoed levert op de lange termijn meer op dan een
                spaarrekening, en is stabieler dan de beurs. Huurinkomsten worden
                maandelijks uitgekeerd; elke vijf jaar deelt u in de waardestijging.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-5 text-gold-2">Missie</p>
              <h3 className="font-display text-3xl">Stabiel rendement, minimaal risico.</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cream/65">
                Een gestructureerde en modelmatige aanpak: uitsluitend Nederlands
                vastgoed, uitsluitend panden met potentie, uitsluitend
                energiezuinige woningen met label A+ of A++.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-5 text-gold-2">Lange termijn</p>
              <h3 className="font-display text-3xl">Relaties van minimaal vijf jaar.</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cream/65">
                Leegstand voorkomen wij door samen te werken met ervaren
                verhuurmakelaars. Elke twee jaar ontvangt u een onafhankelijk
                taxatierapport van uw panden.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-10 border-t border-cream/15 pt-12 md:grid-cols-4">
            <Stat light value="€ 500" label="Per Brik" />
            <Stat light value="5 jaar" label="Minimale looptijd" />
            <Stat light value="Maandelijks" label="Uitkering" size="sm" />
            <Stat light value="A+ / A++" label="Energielabel" />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Waarden" title="Waar wij voor staan." titleSize="md" align="center" />
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="rule-gold mb-6" />
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/aanbod/" variant="ink" arrow>
              Bekijk het aanbod
            </Button>
          </div>
        </Container>
      </Section>

      <Testimonials />
      <ContactSection />
      <ArticlesPreview />
    </>
  );
}
