import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { UspRow } from "@/components/home/UspRow";
import { PropertyShowcase } from "@/components/home/PropertyShowcase";
import { GrowthChart } from "@/components/home/GrowthChart";
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
      <TrustStrip />
      <UspRow />
      <PropertyShowcase />
      <GrowthChart />
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
