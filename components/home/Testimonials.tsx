import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

const quotes = [
  {
    name: "Joep Groenewoud",
    role: "Zakelijk investeerder",
    initials: "JG",
    quote:
      "Een deel van de bedrijfswinst beleg ik in vastgoed via City Vastgoed. Dat geeft mij meer liquiditeit dan zelf panden aankopen, en een voorspelbare maandelijkse inkomstenstroom.",
  },
  {
    name: "Anneke de Jager",
    role: "Particulier investeerder",
    initials: "AJ",
    quote:
      "Geen zorgen en geen extra werk. Ik volg mijn portefeuille in het portaal en ontvang elke maand mijn uitkering. Ik raad het iedere particuliere belegger aan.",
  },
];

export function Testimonials() {
  return (
    <Section tone="white">
      <Container>
        <Eyebrow className="mb-12 text-center">Investeerders aan het woord</Eyebrow>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120} as="article">
              <blockquote className="font-display text-2xl leading-snug md:text-[1.75rem]">
                <span className="text-gold">“</span>
                {q.quote}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-[0.75rem] tracking-[0.1em] text-gold">
                  {q.initials}
                </span>
                <span>
                  <span className="block text-[0.9375rem]">{q.name}</span>
                  <span className="block text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                    {q.role}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
