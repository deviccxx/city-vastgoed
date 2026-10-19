import { Hero } from "@/components/home/Hero";
import { UspRow } from "@/components/home/UspRow";
import { PropertyShowcase } from "@/components/home/PropertyShowcase";
import { PlatformIntro } from "@/components/home/PlatformIntro";
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
      <UspRow />
      <PropertyShowcase />
      <PlatformIntro />
      <Responsibility />
      <PortalTeaser />
      <Testimonials />
      <FaqPreview />
      <ContactSection />
      <ArticlesPreview />
    </>
  );
}
