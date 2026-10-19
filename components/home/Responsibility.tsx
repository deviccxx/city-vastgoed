import { Landmark, FileCheck, PiggyBank, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const safeguards = [
  {
    icon: Landmark,
    title: "Eigen B.V. per pand",
    text: "Huurcontracten, hypotheek en uw inleg zijn per pand gescheiden.",
  },
  {
    icon: FileCheck,
    title: "Onafhankelijke taxatie",
    text: "Elke twee jaar een officieel taxatierapport van uw panden.",
  },
  {
    icon: PiggyBank,
    title: "Geldreserve per pand",
    text: "Een buffer vangt tijdelijke leegstand of wanbetaling op.",
  },
  {
    icon: Leaf,
    title: "Energielabel A+ / A++",
    text: "Toekomstbestendige woningen met lage lasten voor huurders.",
  },
];

export function Responsibility() {
  return (
    <Section tone="ink" id="afm">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Zekerheid"
              title="Zo beschermen wij uw inleg."
              titleSize="md"
              lead="Beleggen brengt risico met zich mee. Daarom bouwen wij per pand zekerheden in en communiceren wij uitsluitend over verwachte en gerealiseerde cijfers."
            />
            <p className="mt-6 text-[0.8125rem] leading-relaxed text-cream/45">
              City Vastgoed valt niet onder toezicht van de AFM; er geldt een vrijstelling van de
              prospectusplicht. Beleg uitsluitend met vermogen dat u langere tijd kunt missen.
            </p>
            <Button
              href="/veelgestelde-vragen/werkwijze-en-verdienmodel-van-city-vastgoed/"
              variant="outline-light"
              arrow
              className="mt-10"
            >
              Onze werkwijze
            </Button>
          </div>

          <div className="grid gap-px bg-cream/10 sm:grid-cols-2 lg:col-span-7">
            {safeguards.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full bg-ink p-8">
                  <span className="icon-tile">
                    <s.icon className="h-5 w-5" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-cream/60">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
