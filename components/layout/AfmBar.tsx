import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AfmBar() {
  return (
    <div className="border-b border-stone bg-cream-2 text-ink">
      <Container className="flex items-center justify-between gap-4 py-2.5 text-[0.75rem] tracking-wide">
        <p className="text-ink/80">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
          Let op: u belegt buiten AFM-toezicht. Er geldt een vrijstelling van de
          prospectusplicht.
        </p>
        <Link
          href="/veelgestelde-vragen/werkwijze-en-verdienmodel-van-city-vastgoed/"
          className="link-gold shrink-0 text-[0.6875rem] uppercase tracking-[0.16em] text-gold"
        >
          Meer informatie
        </Link>
      </Container>
    </div>
  );
}
