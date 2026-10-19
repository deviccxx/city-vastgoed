import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { site } from "@/lib/data/site";
import { eur } from "@/lib/format";

export function Responsibility() {
  return (
    <Section tone="ink" id="afm">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              light
              eyebrow="Verantwoordelijkheid"
              title="Wij kennen onze verantwoordelijkheid."
              lead="City Vastgoed werkt met uw vermogen en is zich daarvan bewust. Ook bij deze vorm van beleggen loopt u risico: huurinkomsten kunnen tegenvallen en de waarde van vastgoed kan dalen. Daar staat tegenover dat Nederlands woonvastgoed historisch een stabiel rendement laat zien in vergelijking met sparen of aandelen."
            />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/70 md:text-lg">
              Wij bieden obligaties in de vorm van Briks. Uw inleg wordt, samen
              met die van andere investeerders, ingezet voor de aankoop, bouw en
              renovatie van woonpanden in Nederland. Elk pand is ondergebracht in
              een afzonderlijke vennootschap, zodat resultaten gescheiden blijven.
            </p>
            <p className="mt-6 max-w-3xl text-[0.875rem] leading-relaxed text-cream/50">
              City Vastgoed valt niet onder toezicht van de AFM. Er geldt een
              vrijstelling van de prospectusplicht. Beleg uitsluitend met vermogen
              dat u voor langere tijd kunt missen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/risicos/" variant="gold" arrow>
                Alle risico&apos;s met rekenvoorbeelden
              </Button>
              <Button
                href="/veelgestelde-vragen/werkwijze-en-verdienmodel-van-city-vastgoed/"
                variant="outline-light"
              >
                Onze werkwijze
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 self-center border-l border-cream/15 pl-10 lg:col-span-5 lg:pl-16">
            <Stat light value={eur(site.keyFacts.brikPrice)} label="Per Brik" />
            <Stat light value={`${site.keyFacts.termYears} jaar`} label="Looptijd" />
            <Stat light value="100%" label="Nederlands vastgoed" />
            <Stat light value="A+ / A++" label="Energielabel" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
