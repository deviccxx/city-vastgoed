import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Title } from "@/components/ui/Heading";
import { Stat } from "@/components/ui/Stat";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <Image
        src="/images/hero-amsterdam.jpg"
        alt="Amsterdamse grachtenpanden"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative flex min-h-[82vh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <Eyebrow light className="mb-7">
            Vastgoedobligaties · Nederland
          </Eyebrow>
          <Title as="h1" size="hero">
            Vermogen laten renderen in Nederlands woonvastgoed.
          </Title>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            Investeer in zorgvuldig geselecteerde, gerenoveerde woonpanden.
            Maandelijks ontvangt u uw aandeel in de huurinkomsten; na de looptijd
            deelt u in de waardeontwikkeling.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/aanbod/" variant="gold" arrow>
              Bekijk het aanbod
            </Button>
            <Button
              href={site.contact.calendly}
              external
              variant="outline-light"
            >
              Plan een gesprek
            </Button>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-cream/15 pt-8 md:mt-24 md:gap-10">
          <Stat light value={site.keyFacts.expectedReturn} label="Verwacht rendement p.j." />
          <Stat light value="Maandelijks" label="Uitkering huurinkomsten" size="sm" className="justify-end" />
          <Stat light value={`${site.keyFacts.termYears} jaar`} label="Looptijd" />
        </div>
      </Container>
    </section>
  );
}
