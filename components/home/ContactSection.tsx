import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/home/ContactForm";
import { site } from "@/lib/data/site";

export function ContactSection({ id = "contact" }: { id?: string }) {
  return (
    <Section tone="ink" id={id}>
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Persoonlijk contact"
              title="Liever eerst een gesprek?"
              lead="Wij lichten het aanbod, de voorwaarden en de risico's graag persoonlijk toe. Bel, mail of plan direct een belafspraak."
            />
            <dl className="mt-12 space-y-8 border-t border-cream/15 pt-10">
              <div>
                <dt className="eyebrow mb-2 text-gold-2">Telefoon</dt>
                <dd>
                  <a href={site.contact.phoneHref} className="font-display text-3xl hover:text-gold-2">
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2 text-gold-2">E-mail</dt>
                <dd>
                  <a href={`mailto:${site.contact.email}`} className="font-display text-3xl hover:text-gold-2">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2 text-gold-2">Belafspraak</dt>
                <dd>
                  <a
                    href={site.contact.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="link-gold text-[0.8125rem] uppercase tracking-[0.16em] text-cream/80 hover:text-cream"
                  >
                    Plan 30 minuten in
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
