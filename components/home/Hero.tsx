import { Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Heading";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <div className="kenburns absolute inset-0 -z-20">
        <Image
          src="/images/hero-amsterdam.jpg"
          alt="Amsterdamse grachtenpanden"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative flex min-h-[78vh] flex-col justify-end pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow rise rise-1 mb-7 text-gold-2">
            Vastgoedobligaties · Nederland
          </p>
          <div className="rise rise-2">
            <Title as="h1" size="hero">
              Vermogen laten renderen in Nederlands woonvastgoed.
            </Title>
          </div>
          <p className="rise rise-3 mt-8 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
            Gerenoveerde woonpanden. Maandelijkse uitkering. Volledig inzicht
            in uw portaal.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/aanbod/" variant="gold" arrow>
              Bekijk het aanbod
            </Button>
            <Button href={site.contact.calendly} external variant="outline-light">
              Plan een gesprek
            </Button>
          </div>
        </div>

        <ul className="rise rise-5 mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/15 pt-7 text-[0.6875rem] uppercase tracking-[0.16em] text-cream/60 md:mt-20">
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {site.keyFacts.expectedReturn} verwacht p.j.
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Maandelijks uitgekeerd
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Looptijd {site.keyFacts.termYears} jaar
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Vanaf € 500 per Brik
          </li>
        </ul>
      </Container>
    </section>
  );
}
