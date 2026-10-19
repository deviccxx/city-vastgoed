import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faqHighlights } from "@/lib/data/faq";

export function FaqPreview() {
  return (
    <Section tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Veelgestelde vragen"
              title="Helder over hoe het werkt."
              titleSize="md"
              lead="De vragen die wij het meest ontvangen. Staat de uwe er niet bij? Wij lichten het graag persoonlijk toe."
            />
            <Button href="/veelgestelde-vragen/" variant="outline-dark" arrow className="mt-8">
              Alle vragen
            </Button>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion items={faqHighlights} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
