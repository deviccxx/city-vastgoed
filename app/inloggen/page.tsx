import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Title } from "@/components/ui/Heading";
import { AuthForms } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Inloggen of registreren",
  description: "Log in op uw persoonlijke portaal of maak vrijblijvend een account aan.",
};

export default function InloggenPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="py-16 md:py-20">
          <Eyebrow light className="mb-5">
            Mijn account
          </Eyebrow>
          <Title as="h1" size="lg">
            Inloggen of registreren.
          </Title>
          <p className="mt-5 max-w-xl text-cream/65">
            Registreren is kosteloos en vrijblijvend. Na registratie heeft u direct
            toegang tot het volledige aanbod en de financiële overzichten.
          </p>
        </Container>
      </section>
      <Section tone="cream">
        <Container>
          <AuthForms />
        </Container>
      </Section>
    </>
  );
}
