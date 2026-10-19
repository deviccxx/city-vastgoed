import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ContactSection } from "@/components/home/ContactSection";
import { openProperties, realizedProperties } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Aanbod",
  description:
    "Overzicht van alle panden waarin u via Briks kunt investeren, met verwacht rendement en financieringsstatus.",
};

export default function AanbodPage() {
  return (
    <>
      <PageHero
        eyebrow="Het aanbod"
        title="Zorgvuldig geselecteerd. Volledig verhuurklaar."
        lead="Elk pand op het platform is gerenoveerd tot energiezuinige woningen en wordt pas aangeboden zodra het gereed is voor verhuur. Om te investeren maakt u eerst vrijblijvend een account aan."
        image="/images/skyline.jpg"
      >
        <p className="mt-8 text-[0.8125rem] text-cream/60">
          Nog geen account?{" "}
          <Link href="/inloggen/#registreren" className="link-gold text-gold-2">
            Registreer kosteloos
          </Link>{" "}
          of{" "}
          <Link href="/inloggen/" className="link-gold text-gold-2">
            log in
          </Link>
          .
        </p>
      </PageHero>

      <Section tone="cream">
        <Container>
          <Eyebrow className="mb-10">Beschikbaar en recent gefinancierd</Eyebrow>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
            {openProperties.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <PropertyCard property={p} size="lg" />
              </Reveal>
            ))}
          </div>

          <div className="mt-24 border-t border-stone-2 pt-14">
            <Eyebrow className="mb-10">Gerealiseerde projecten</Eyebrow>
            <div className="grid gap-14 md:grid-cols-2 lg:gap-12">
              {realizedProperties.map((p, i) => (
                <Reveal key={p.slug} delay={i * 120}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}
