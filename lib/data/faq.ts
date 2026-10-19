export type FaqItem = { q: string; a: string };
export type FaqCategory = {
  slug: string;
  title: string;
  intro: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "vragen-over-beleggen-bij-city-vastgoed",
    title: "Beleggen bij City Vastgoed",
    intro: "Over de mogelijkheden, de looptijd en wat u van ons mag verwachten.",
    items: [
      {
        q: "Wat zijn de mogelijkheden van beleggen bij City Vastgoed?",
        a: "Vastgoed is een belegging voor de lange termijn. U investeert via Briks in panden die zijn getransformeerd tot woningen, appartementen en studio's. Zodra een pand gereed is voor verhuur, wordt het op het platform aangeboden. U ontvangt maandelijks uw aandeel in de netto huurinkomsten en deelt na de looptijd in de waardeontwikkeling.",
      },
      {
        q: "Wat is een realistisch jaarlijks rendement?",
        a: "Het rendement bestaat uit twee componenten: de maandelijkse uitkering uit de netto huurinkomsten en de waardeontwikkeling van het pand na de looptijd. Op basis van de huidige panden projecteren wij een totaalrendement tussen de 5 en 9% per jaar. Rendementen zijn schattingen en kunnen hoger of lager uitvallen.",
      },
      {
        q: "Hoe lang is de looptijd?",
        a: "De looptijd van een investering is vijf jaar. Na afloop kunt u uw inleg plus uw aandeel in de waardeontwikkeling opnemen, herinvesteren, of een combinatie daarvan. Wij informeren u tijdig voor het einde van de looptijd.",
      },
      {
        q: "Hoe word ik belast over mijn belegging?",
        a: "Beleggingen bij City Vastgoed vallen voor particulieren in Box 3, net als aandelen en spaargeld. Zakelijke investeerders raden wij aan hun accountant te raadplegen.",
      },
    ],
  },
  {
    slug: "vragen-over-briks-en-het-rendement",
    title: "Briks en het rendement",
    intro: "Hoe een Brik werkt, hoe het rendement wordt bepaald en uitbetaald.",
    items: [
      {
        q: "Wat is een Brik?",
        a: "Een Brik is een vastgoedobligatie met een waarde van € 500. Met een Brik leent u geld aan het pand van uw keuze en ontvangt u in ruil daarvoor rente uit de huurinkomsten en terugbetaling van uw inleg na de looptijd. U investeert vanaf één Brik, tot maximaal het aantal Briks dat per pand beschikbaar is.",
      },
      {
        q: "Hoe wordt het rendement bepaald?",
        a: "Het rendement bestaat uit het netto rendement uit de huurinkomsten en de waardevermeerdering van het pand na vijf jaar. Huurinkomsten en pandwaarde kunnen meevallen of tegenvallen; het werkelijke rendement kan dus afwijken van de schattingen.",
      },
      {
        q: "Hoe wordt het rendement uitbetaald?",
        a: "Elke maand ontvangt u het netto huurrendement, naar rato van uw inleg in een of meerdere panden. Wijzigingen zoals de jaarlijkse huurindexering worden automatisch doorgevoerd. Alle bedragen en berekeningen vindt u terug in uw persoonlijke portaal.",
      },
      {
        q: "Wat gebeurt er met de waardestijging?",
        a: "Na de looptijd van vijf jaar wordt de waardevermeerdering van het pand naar rato van uw Briks uitgekeerd, op basis van de meest recente taxatie door een onafhankelijke partij. U kunt er ook voor kiezen te herinvesteren, vanaf één Brik.",
      },
      {
        q: "Word ik op de hoogte gehouden van de waardeontwikkeling?",
        a: "Ja. Elke twee jaar informeren wij investeerders over de actuele waarde van hun panden, onderbouwd met een officieel taxatierapport van een onafhankelijke taxateur.",
      },
      {
        q: "Wat zijn de risico's?",
        a: "Wanneer u investeert, loopt u altijd een zeker risico. Huurinkomsten kunnen tegenvallen door leegstand en de waarde van vastgoed kan dalen. City Vastgoed valt niet onder toezicht van de AFM; er geldt een vrijstelling van de prospectusplicht. Beleg uitsluitend met vermogen dat u voor langere tijd kunt missen.",
      },
      {
        q: "Wie is de eigenaar van de panden?",
        a: "Elk pand wordt aangekocht door een afzonderlijke B.V. Deze vennootschap draagt de huurcontracten, de hypotheek en uw investering. Zo blijft het resultaat per pand gescheiden. Dit is vastgelegd in de Obligatievoorwaarden.",
      },
      {
        q: "Ben ik als investeerder aansprakelijk voor het pand?",
        a: "Nee. U bent nooit aansprakelijk voor wat er met het pand gebeurt; uw risico is beperkt tot uw inleg.",
      },
      {
        q: "Wie kan investeren bij City Vastgoed?",
        a: "Investeerders zijn minimaal 18 jaar oud en woonachtig in Nederland. Zowel particulieren als ondernemingen zijn welkom.",
      },
    ],
  },
  {
    slug: "vragen-over-de-financiering-en-het-beheer",
    title: "Financiering en beheer",
    intro: "Hoe wij panden financieren, beheren en verhuren.",
    items: [
      {
        q: "Hoe wordt een pand gefinancierd?",
        a: "Elk pand wordt gefinancierd met een combinatie van hypothecaire financiering en de inleg van investeerders via Briks. Het financieel overzicht per pand toont de aankoopprijs, hypotheek, kosten en reserves, zodat u precies ziet waar uw inleg voor wordt gebruikt.",
      },
      {
        q: "Wie beheert de panden?",
        a: "City Vastgoed verzorgt het volledige beheer: huurdersselectie, huurincasso, onderhoud, verzekeringen en onvoorziene kosten. Wij werken samen met ervaren verhuurmakelaars om leegstand zoveel mogelijk te voorkomen.",
      },
      {
        q: "Wat gebeurt er bij leegstand of wanbetaling?",
        a: "Per pand wordt een geldreserve aangehouden om tijdelijke leegstand of wanbetaling op te vangen. Daarnaast zetten wij actief in op snelle wederverhuur.",
      },
      {
        q: "Waar wordt mijn geld voor gebruikt?",
        a: "Uw inleg, samen met die van andere investeerders, wordt gebruikt voor de aankoop, bouw en renovatie van panden en woningen. Wij investeren uitsluitend in Nederland.",
      },
    ],
  },
  {
    slug: "vragen-over-een-account-op-dit-platform",
    title: "Uw account",
    intro: "Over de veiligheid van uw gegevens, opzeggen en profielinstellingen.",
    items: [
      {
        q: "Is mijn account veilig?",
        a: "City Vastgoed beveiligt uw account en beschermt uw gegevens volgens de AVG. Gevoelige gegevens worden op beveiligde externe servers opgeslagen en uw persoonlijke portaal is met een wachtwoord afgeschermd.",
      },
      {
        q: "Kan ik mijn account opzeggen?",
        a: "Na afloop van de looptijd brengen wij u tijdig op de hoogte. U kiest dan of u uw inleg plus waardevermeerdering opneemt, herinvesteert, of een combinatie daarvan. Vroegtijdig opzeggen is mogelijk; daarvoor geldt een boete van 6% over het ingelegde bedrag, ongeacht hoe lang u heeft deelgenomen.",
      },
      {
        q: "Hoe beheer ik mijn profielinstellingen?",
        a: "Onder Mijn account vindt u de pagina Profielinstellingen, waar u uw gegevens kunt aanvullen en wijzigen.",
      },
      {
        q: "Kunnen er nog kosten bijkomen?",
        a: "Nee. Tijdens de looptijd betaalt u geen extra kosten. Alleen bij vroegtijdig terugvorderen van uw investering geldt een boete van 6% over het geïnvesteerde bedrag.",
      },
    ],
  },
  {
    slug: "werkwijze-en-verdienmodel-van-city-vastgoed",
    title: "Werkwijze en verdienmodel",
    intro: "Hoe City Vastgoed te werk gaat en waar wij aan verdienen.",
    items: [
      {
        q: "Hoe gaat City Vastgoed te werk?",
        a: "Wij selecteren panden met potentie, kopen deze aan via een afzonderlijke B.V., laten ze renoveren tot energiezuinige woningen met energielabel A+ of A++ en verhuren ze. Zodra het pand verhuurklaar is, wordt het op het platform aangeboden aan investeerders.",
      },
      {
        q: "Waar verdient City Vastgoed aan?",
        a: "City Vastgoed rekent een eenmalige vergoeding per project, die transparant in het financieel overzicht van elk pand is opgenomen, en een maandelijkse beheervergoeding die uit de huurinkomsten wordt voldaan voordat het netto rendement aan investeerders wordt uitgekeerd.",
      },
      {
        q: "Staat City Vastgoed onder toezicht van de AFM?",
        a: "City Vastgoed valt op dit moment niet onder toezicht van de Autoriteit Financiële Markten (AFM). Wij voldoen aan de vrijstelling van de prospectusplicht. Op termijn is het onze intentie een volledige AFM-vergunning aan te vragen.",
      },
    ],
  },
  {
    slug: "meer-informatie-over-aanbrengbonussen",
    title: "Aanbrengbonus",
    intro: "Introduceer relaties en ontvang een bonus zodra zij investeren.",
    items: [
      {
        q: "Hoe werkt de aanbrengbonus?",
        a: "U kunt relaties uitnodigen om bij City Vastgoed te investeren. Zodra zij daadwerkelijk investeren, vanaf één Brik, ontvangen zowel u als de nieuwe investeerder een bonus van € 50. Het aantal doorverwezen relaties ziet u op de pagina Aanbrengbonus in uw portaal.",
      },
      {
        q: "Waar vind ik mijn persoonlijke uitnodigingslink?",
        a: "Uw unieke code staat op de pagina Aanbrengbonus in uw portaal. Van daaruit deelt u de code via e-mail, WhatsApp of sociale media. Deze pagina is alleen zichtbaar wanneer u bent ingelogd.",
      },
      {
        q: "Wat gebeurt er met mijn bonus bij vroegtijdige beëindiging?",
        a: "Bij vroegtijdige beëindiging wordt het opgespaarde bonusbedrag verrekend met de boete van 6%. Het resterende bedrag wordt aan u uitbetaald.",
      },
      {
        q: "Wat zijn de voorwaarden van de aanbrengbonus?",
        a: "Bonussen worden opgespaard tot één Brik (€ 500), waarmee u kunt herinvesteren. Tijdens de looptijd worden bonusgelden niet uitgekeerd. Is na afloop van de looptijd één Brik niet bereikt, dan wordt het gespaarde bedrag alsnog aan u uitbetaald. Voor de nieuwe investeerder wordt de bonus automatisch verrekend met de eerste investering.",
      },
    ],
  },
];

export function getFaqCategory(slug: string) {
  return faqCategories.find((c) => c.slug === slug);
}

/** The five questions shown on the home page */
export const faqHighlights: FaqItem[] = [
  faqCategories[0].items[0],
  faqCategories[0].items[1],
  faqCategories[1].items[0],
  faqCategories[4].items[2],
  faqCategories[0].items[3],
];
