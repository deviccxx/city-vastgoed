import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/trust/TrustBar";
import { UspRow } from "@/components/home/UspRow";
import { PropertyShowcase } from "@/components/home/PropertyShowcase";
import { TrackRecordPreview, StructurePreview, TeamPreview, ProcessPreview } from "@/components/home/TrustSections";
import { Responsibility } from "@/components/home/Responsibility";
import { PortalTeaser } from "@/components/home/PortalTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <UspRow />
      <PropertyShowcase />
      <TrackRecordPreview />
      <StructurePreview />
      <TeamPreview />
      <Responsibility />
      <ProcessPreview />
      <PortalTeaser />
      <Testimonials />
      <FaqPreview />
      <ContactSection />
      <ArticlesPreview />
    </>
  );
}
