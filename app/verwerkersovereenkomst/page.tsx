import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Verwerkersovereenkomst" };

export default function Page() {
  return (
    <LegalPage
      title="Verwerkersovereenkomst"
      updated="1 januari 2025"
      sections={[
        {
          heading: "Partijen en onderwerp",
          paragraphs: [
            "Deze verwerkersovereenkomst maakt deel uit van de overeenkomst tussen City Vastgoed B.V. (verwerkingsverantwoordelijke) en de door haar ingeschakelde verwerkers, en regelt de verwerking van persoonsgegevens van investeerders conform de Algemene verordening gegevensbescherming (AVG).",
          ],
        },
        {
          heading: "Verplichtingen verwerker",
          paragraphs: [
            "De verwerker verwerkt persoonsgegevens uitsluitend in opdracht van en volgens de instructies van City Vastgoed, treft passende technische en organisatorische beveiligingsmaatregelen en schakelt geen subverwerkers in zonder voorafgaande schriftelijke toestemming.",
          ],
        },
        {
          heading: "Datalekken",
          paragraphs: [
            "De verwerker informeert City Vastgoed onverwijld, en uiterlijk binnen 24 uur, over iedere inbreuk in verband met persoonsgegevens.",
          ],
        },
        {
          heading: "Duur en beëindiging",
          paragraphs: [
            "Deze overeenkomst geldt zolang de verwerker persoonsgegevens namens City Vastgoed verwerkt. Na beëindiging worden alle persoonsgegevens verwijderd of geretourneerd, naar keuze van City Vastgoed.",
          ],
        },
      ]}
    />
  );
}
