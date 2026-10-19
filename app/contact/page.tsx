import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqPreview } from "@/components/home/FaqPreview";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met City Vastgoed. Bel, mail of plan een belafspraak.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Wij lichten het graag persoonlijk toe."
        lead="Vragen over het aanbod, de voorwaarden of het portaal? Wij nemen de tijd voor een gesprek."
        compact
      />
      <ContactSection />
      <FaqPreview />
    </>
  );
}
