import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Algemene voorwaarden" };

export default function Page() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      updated="1 januari 2025"
      sections={[
        {
          heading: "Definities",
          paragraphs: [
            "In deze algemene voorwaarden wordt verstaan onder: City Vastgoed: City Vastgoed B.V., gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 61591459. Investeerder: de natuurlijke persoon of rechtspersoon die via het platform een of meer Briks verwerft. Brik: een vastgoedobligatie met een nominale waarde van € 500, uitgegeven door de vennootschap die het betreffende pand bezit. Obligatievoorwaarden: de voorwaarden die per pand van toepassing zijn op de uitgifte van Briks.",
          ],
        },
        {
          heading: "Toepasselijkheid",
          paragraphs: [
            "Deze voorwaarden zijn van toepassing op ieder gebruik van het platform en op iedere overeenkomst tussen City Vastgoed en de investeerder. Per pand gelden aanvullend de Obligatievoorwaarden; bij strijdigheid prevaleren de Obligatievoorwaarden.",
          ],
        },
        {
          heading: "Registratie en account",
          paragraphs: [
            "Om te investeren dient de investeerder een account aan te maken. De investeerder is minimaal 18 jaar en woonachtig in Nederland. De investeerder staat in voor de juistheid van de verstrekte gegevens en houdt zijn inloggegevens geheim.",
          ],
        },
        {
          heading: "Looptijd en vroegtijdige beëindiging",
          paragraphs: [
            "De looptijd van een investering bedraagt vijf jaar. Vroegtijdig terugvorderen van de inleg is mogelijk tegen een boete van 6% over het ingelegde bedrag, ongeacht de verstreken looptijd. Opgespaarde aanbrengbonussen worden met de boete verrekend.",
          ],
        },
        {
          heading: "Risico's en toezicht",
          paragraphs: [
            "Beleggen brengt risico's met zich mee. Rendementen zijn schattingen en worden niet gegarandeerd. City Vastgoed valt niet onder toezicht van de Autoriteit Financiële Markten; er geldt een vrijstelling van de prospectusplicht.",
          ],
        },
        {
          heading: "Toepasselijk recht",
          paragraphs: [
            "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.",
          ],
        },
      ]}
    />
  );
}
