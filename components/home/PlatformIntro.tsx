import { UserPlus, Building2, CalendarCheck, TrendingUp } from "lucide-react";
import { Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: UserPlus, title: "Registreer", text: "Vrijblijvend, in enkele minuten.", meta: "Dag 1" },
  { icon: Building2, title: "Kies uw Briks", text: "Per pand, vanaf € 500. Spreid naar wens.", meta: "Dag 1" },
  { icon: CalendarCheck, title: "Ontvang maandelijks", text: "Uw aandeel in de netto huur, automatisch.", meta: "Elke maand" },
  { icon: TrendingUp, title: "Deel in de waarde", text: "Na vijf jaar: inleg terug plus waardeontwikkeling.", meta: "Jaar 5" },
];

export function PlatformIntro() {
  return (
    <Section tone="cream-2" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Hoe het werkt"
              title="Van registratie tot rendement in vier stappen."
              titleSize="md"
              lead="Wij kopen aan, renoveren en verhuren. U volgt uw portefeuille in uw persoonlijke portaal."
            />
            <Button href="/beleggen-in-vastgoedobligaties/" variant="ink" arrow className="mt-10">
              Lees er alles over
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                <Image src="/images/facade.jpg" alt="Gevel van een gerenoveerd woonpand" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative mt-20 grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gold/40 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} as="li">
              <div className="relative">
                <span className="icon-tile bg-cream-2">
                  <s.icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <p className="eyebrow mt-6">
                  0{i + 1} · {s.meta}
                </p>
                <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
