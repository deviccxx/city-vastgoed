import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Disclaimer" };

export default function Page() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="1 januari 2025"
      sections={[
        {
          heading: "Geen beleggingsadvies",
          paragraphs: [
            "De informatie op deze website is uitsluitend bedoeld als algemene informatie en vormt geen beleggingsadvies, aanbod of uitnodiging tot het doen van een aanbod. Raadpleeg bij twijfel een onafhankelijk adviseur.",
          ],
        },
        {
          heading: "Rendementen",
          paragraphs: [
            "Genoemde rendementen zijn verwachtingen of in het verleden gerealiseerde resultaten. Zij bieden geen garantie voor de toekomst. De waarde van uw belegging kan fluctueren.",
          ],
        },
        {
          heading: "Toezicht",
          paragraphs: [
            "City Vastgoed B.V. staat niet onder toezicht van de Autoriteit Financiële Markten (AFM) en beschikt niet over een vergunning op grond van de Wet op het financieel toezicht. Voor het aanbieden van Briks geldt een vrijstelling van de prospectusplicht.",
          ],
        },
        {
          heading: "Aansprakelijkheid",
          paragraphs: [
            "City Vastgoed streeft naar juiste en actuele informatie, maar aanvaardt geen aansprakelijkheid voor onjuistheden of onvolledigheden, noch voor schade die voortvloeit uit het gebruik van deze website.",
          ],
        },
      ]}
    />
  );
}
