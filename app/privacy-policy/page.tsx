import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="1 januari 2025"
      sections={[
        {
          heading: "Welke gegevens wij verwerken",
          paragraphs: [
            "Bij registratie verwerken wij uw naam, adres, e-mailadres, telefoonnummer, IBAN en, indien van toepassing, bedrijfsgegevens. Deze gegevens zijn noodzakelijk voor het beheren van uw account en het uitkeren van rendement.",
          ],
        },
        {
          heading: "Doeleinden en grondslag",
          paragraphs: [
            "Wij verwerken uw gegevens voor de uitvoering van de overeenkomst, het voldoen aan wettelijke verplichtingen en, uitsluitend met uw toestemming, voor het toezenden van informatie over nieuw aanbod en kennisartikelen.",
          ],
        },
        {
          heading: "Bewaartermijn en beveiliging",
          paragraphs: [
            "Gegevens worden niet langer bewaard dan noodzakelijk. Gevoelige gegevens worden versleuteld opgeslagen op beveiligde servers binnen de Europese Economische Ruimte.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Wij plaatsen strikt noodzakelijke cookies voor het functioneren van de website. Analytische cookies plaatsen wij uitsluitend na uw toestemming via de cookiebanner.",
          ],
        },
        {
          heading: "Uw rechten",
          paragraphs: [
            "U heeft recht op inzage, correctie en verwijdering van uw gegevens, en op het intrekken van gegeven toestemming. Neem hiervoor contact op via info@city-vastgoed.nl.",
          ],
        },
      ]}
    />
  );
}
