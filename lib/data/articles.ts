export type Article = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "hoe-beinvloedt-inflatie-het-investeren-in-vastgoed",
    title: "Hoe beïnvloedt inflatie het investeren in vastgoed?",
    date: "2023-01-31",
    excerpt:
      "Inflatie holt de koopkracht van spaargeld uit. Vastgoed beweegt historisch mee met het prijspeil, en huurinkomsten worden jaarlijks geïndexeerd.",
    image: "/images/skyline.jpg",
    body: [
      "Inflatie betekent dat geld minder waard wordt: met hetzelfde bedrag koopt u volgend jaar minder dan dit jaar. Voor spaarders is dat een stille kostenpost. Voor vastgoedbeleggers ligt dat anders.",
      "Vastgoedprijzen bewegen op de lange termijn mee met het algemene prijspeil. Daarnaast worden huurcontracten in Nederland jaarlijks geïndexeerd, waardoor de huurinkomsten meestijgen met de inflatie. Een belegging in vastgoed biedt daarmee een natuurlijke bescherming tegen koopkrachtverlies.",
      "Bij City Vastgoed wordt de jaarlijkse indexering automatisch doorgevoerd in de maandelijkse uitkering. U hoeft hier zelf niets voor te doen; de aangepaste bedragen ziet u terug in uw portaal.",
      "Uiteraard is inflatie niet de enige factor. Ook de rente, de lokale woningmarkt en de staat van het pand bepalen het rendement. Daarom selecteren wij uitsluitend panden op locaties met een structureel tekort aan kwalitatieve huurwoningen.",
    ],
  },
  {
    slug: "obligaties-in-vastgoed",
    title: "Obligaties in vastgoed",
    date: "2023-01-15",
    excerpt:
      "Een vastgoedobligatie is een lening aan een pand. U ontvangt rente uit de huurinkomsten en krijgt uw inleg na de looptijd terug.",
    image: "/images/facade.jpg",
    body: [
      "Een obligatie is in essentie een lening. Bij een vastgoedobligatie leent u geld aan een vennootschap die een specifiek pand bezit. In ruil daarvoor ontvangt u rente en wordt uw inleg aan het einde van de looptijd terugbetaald.",
      "Bij City Vastgoed heet zo'n obligatie een Brik, met een vaste waarde van € 500. De rente bestaat uit uw aandeel in de netto huurinkomsten en wordt maandelijks uitgekeerd. Na de looptijd van vijf jaar deelt u bovendien in de waardeontwikkeling van het pand.",
      "Het grote verschil met zelf vastgoed kopen: u heeft geen omkijken naar huurders, onderhoud of financiering. En anders dan bij een vastgoedfonds weet u precies in welk pand u investeert.",
      "Elk pand is ondergebracht in een afzonderlijke B.V., zodat de resultaten per pand gescheiden blijven. De voorwaarden zijn vastgelegd in de Obligatievoorwaarden die u bij uw investering ontvangt.",
    ],
  },
  {
    slug: "wat-zijn-de-voordelen-van-obligaties",
    title: "Wat zijn de voordelen van obligaties?",
    date: "2023-01-01",
    excerpt:
      "Vaste inkomsten, minder volatiliteit dan aandelen en spreiding over meerdere panden. De voordelen van vastgoedobligaties op een rij.",
    image: "/images/modern.jpg",
    body: [
      "Obligaties staan bekend als een relatief stabiele beleggingscategorie. Vastgoedobligaties combineren die stabiliteit met de tastbaarheid van stenen.",
      "Het eerste voordeel is voorspelbaarheid. De rente op een Brik komt uit de huurinkomsten van een concreet pand. Die inkomsten zijn contractueel vastgelegd en worden jaarlijks geïndexeerd.",
      "Het tweede voordeel is spreiding. Omdat u vanaf één Brik investeert, kunt u uw vermogen verdelen over meerdere panden en steden. Zo bent u minder afhankelijk van één object of één lokale markt.",
      "Het derde voordeel is gemak. Het beheer, de verhuur en het onderhoud zijn uitbesteed. U volgt uw portefeuille in uw persoonlijke portaal en ontvangt maandelijks uw uitkering.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
