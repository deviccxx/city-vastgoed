import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Title } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="cream" className="min-h-[60vh]">
      <Container>
        <Eyebrow className="mb-5">404</Eyebrow>
        <Title as="h1" size="lg">
          Deze pagina bestaat niet.
        </Title>
        <p className="mt-5 max-w-md text-muted">
          De pagina is verplaatst of de link is onjuist. Bekijk het aanbod of ga terug naar de homepage.
        </p>
        <div className="mt-10 flex gap-4">
          <Button href="/aanbod/" variant="ink" arrow>
            Bekijk het aanbod
          </Button>
          <Button href="/" variant="outline-dark">
            Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
