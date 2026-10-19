import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyCard } from "@/components/property/PropertyCard";
import { openProperties, realizedProperties } from "@/lib/data/properties";

export function PropertyShowcase() {
  return (
    <Section tone="cream">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Het aanbod"
            title="In tien minuten vastgoedinvesteerder."
            lead="Gerenoveerd, energiezuinig en verhuurklaar voordat het op het platform verschijnt."
          />
          <Button href="/aanbod/" variant="outline-dark" arrow className="shrink-0">
            Alle panden
          </Button>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {openProperties.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <PropertyCard property={p} size="lg" />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-stone-2 pt-12">
          <p className="eyebrow mb-8">Gerealiseerde projecten</p>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-10">
            {realizedProperties.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
