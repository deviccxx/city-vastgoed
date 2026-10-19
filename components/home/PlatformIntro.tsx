import { Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Registreer",
    text: "Maak vrijblijvend een account aan. Binnen enkele minuten heeft u toegang tot het volledige aanbod en de financiële overzichten per pand.",
  },
  {
    n: "02",
    title: "Kies uw Briks",
    text: "Selecteer een pand en het aantal Briks van € 500. Spreid desgewenst over meerdere panden en steden.",
  },
  {
    n: "03",
    title: "Ontvang maandelijks",
    text: "Vanaf de eerste maand ontvangt u uw aandeel in de netto huurinkomsten. Na vijf jaar deelt u in de waardeontwikkeling.",
  },
];

export function PlatformIntro() {
  return (
    <Section tone="white" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Het platform"
              title="Hét online platform voor investeren in vastgoed."
              lead="Beleggen in vastgoed via Briks is profiteren van een goed renderende vastgoedmarkt, zonder de lasten die erbij komen kijken. Wij kopen aan, verzorgen het onderhoud en onderhouden de relatie met huurders. U volgt uw portefeuille en uitbetalingen in uw persoonlijke portaal."
            />
            <Button href="/beleggen-in-vastgoedobligaties/" variant="ink" arrow className="mt-10">
              Lees er alles over
            </Button>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/facade.jpg"
                  alt="Gevel van een gerenoveerd woonpand"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-10 border-t border-stone pt-14 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <p className="font-display text-5xl text-gold">{s.n}</p>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
