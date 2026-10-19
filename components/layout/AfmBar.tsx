import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AfmBar() {
  return (
    <div className="bg-ink text-cream">
      <Container className="flex items-center justify-between gap-4 py-2 text-[0.6875rem] tracking-wide">
        <p className="text-cream/70">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
          U belegt buiten AFM-toezicht. Er geldt een vrijstelling van de
          prospectusplicht.
        </p>
        <Link
          href="/veelgestelde-vragen/werkwijze-en-verdienmodel-van-city-vastgoed/"
          className="link-gold shrink-0 text-[0.625rem] uppercase tracking-[0.16em] text-gold-2"
        >
          Meer informatie
        </Link>
      </Container>
    </div>
  );
}
