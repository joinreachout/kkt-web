// /industries/fuel-retail content. German careful; Estonian first pass (verify).
import type { Locale } from '../config';

export type FuelDict = {
  meta: { title: string; description: string };
  introLabel: string; h1a: string; h1grad: string; lede: string; imgAlt: string; imgLabel: string;
  pathLabel: string; pathTitle: string; pathLede: string;
  stages: { tag: string; name: string; body: string }[];
  startsLabel: string; startsTitle: string; startsLede: string;
  blocks: { lever: string; detail: string; tasks: string[] }[];
  tailMap: string; tailCase: string;
  hwwLabel: string; hwwTitle: string; hww: { k: string; p: string }[];
  ctaHeading: string; ctaBody: string;
};

export const FUEL: Record<Locale, FuelDict> = {
  en: {
    meta: { title: 'Fuel retail — KKT', description: 'AI and data for independent fuel networks — procurement and margin, logistics, stations, customers, finance and control. Bottom-up, on the data you already have.' },
    introLabel: 'Industries — Fuel retail', h1a: 'For independent ', h1grad: 'fuel networks',
    lede: 'Your network already has the data — ERP, POS, loyalty, GPS, depots, BI, spreadsheets. What is usually missing is connectedness: the network runs on people, calls, manual reconciliation and the experience of individual managers, while the data you have piled up does not yet work for your decisions.',
    imgAlt: 'Fuel station forecourt lit at dusk', imgLabel: 'Fuel — station forecourt, depot, or the network at a glance',
    pathLabel: 'How the path runs', pathTitle: 'AI earns its place on top of a foundation — so the path runs bottom-up.',
    pathLede: 'AI agents are not installed on top of chaos. Every block of the network economy climbs the same way — start small on data you already have, build the foundation as you go. You do not need to be at the top to begin.',
    stages: [
      { tag: 'Stage 1', name: 'Essential solutions', body: 'Quick to launch on the data you already have. A clear effect without a big process change.' },
      { tag: 'Stage 2', name: 'Advanced solutions', body: 'Need more mature data, integrations and models. A bigger effect from optimizing decisions and processes.' },
      { tag: 'Stage 3', name: 'Agentic & systemic solutions', body: 'End-to-end solutions and AI agents that run on top of the foundation. The person sets the rules and controls the result.' },
    ],
    startsLabel: 'Engagement starting points', startsTitle: 'Across the whole network economy.',
    startsLede: 'The effect runs across the whole network economy — procurement and margin, pricing, logistics, stations, finance and control. We start where the diagnostic points.',
    blocks: [
      { lever: 'Fuel: procurement, price & margin', detail: 'Procurement and price run as one commercial loop — forecast the need, choose supplier and moment, account for the full landed cost of a batch, set price-at-pump by market and demand.', tasks: ['Buy fuel in the right volume at the right moment', 'Choose the supplier and purchase terms', 'Account for the full landed cost of a batch', 'Set price by market and demand'] },
      { lever: 'Logistics & fuel supply', detail: 'Fuel supply made manageable end-to-end — batch movement, delay risk, acceptance discrepancies, railcars and demurrage, depot operations, station delivery, trip execution.', tasks: ['Track batch movement and delay risk', 'Find where you lose on supply discrepancies', 'Control railcars and demurrage', 'Plan fuel delivery to stations'] },
      { lever: 'Stations, stores & cafés', detail: 'The station run as a profit point, not only an operational object — underperformance, queues and lost traffic, dispenser and POS violations, shift work, equipment, assortment, store conversion.', tasks: ['Understand why a station underperforms', 'Stop losses at the dispenser and the till', 'Keep station equipment in service', 'Turn fuel traffic into store purchases'] },
      { lever: 'Customers, loyalty & B2B', detail: 'The customer base and B2B portfolio turned into a managed source of growth — customer value, churn, frequency and check, promo, reviews, retail media, corporate-client profitability.', tasks: ['Understand the customer and their economics', 'Retain customers and prevent churn', 'Grow frequency, check and non-fuel share', 'Run and measure promotions'] },
      { lever: 'Finance, money & control', detail: 'Finance sees the business as a live picture and finds the cause of a deviation faster — margin, costs, cash, receivables, payment risks, financial losses and policy violations made visible early.', tasks: ['See the financial picture here and now', 'Understand the cause of a deviation, not just the fact', 'Anticipate cash and cash-flow gaps', 'Surface financial losses and discrepancies'] },
      { lever: 'Supporting functions', detail: 'The routine taken out and control strengthened across the functions that support the business — HR, legal, MTO procurement, contractors, internal control, documents and back-office.', tasks: ['HR and workforce', 'Legal', 'MTO procurement and contractors', 'Internal control, losses and risk'] },
      { lever: 'Data & processes — the foundation', detail: 'The foundation analytics, automation and AI run on — one data base, quality and availability, reporting, knowledge search, office AI tools, process re-engineering and agentic solutions.', tasks: ['One source of truth instead of different numbers per department', 'Find answers in the company’s knowledge', 'Take routine off the team'] },
    ],
    tailMap: 'See the full transformation map', tailCase: 'Read the Red Petroleum case',
    hwwLabel: 'How we work', hwwTitle: 'Built around your business economics.',
    hww: [
      { k: 'From quick wins to systemic transformation', p: 'Start with clear use cases, then build out the data, processes, models and agentic systems behind them.' },
      { k: 'AI tied to business economics, not the tech of the month', p: 'Every initiative answers to margin, losses, working capital, revenue, service, or team efficiency.' },
      { k: 'We walk it from idea to deployment', p: 'We set the priorities, the data, the dependencies, the pilots, and the next realistic step for your network.' },
    ],
    ctaHeading: 'Fuel network diagnostic, two weeks.', ctaBody: 'Two weeks to find where data and AI can move the numbers in your network — procurement, logistics, stations, finance — and what to build first.',
  },

  de: {
    meta: { title: 'Kraftstoffhandel — KKT', description: 'KI und Daten für unabhängige Tankstellennetze — Beschaffung und Marge, Logistik, Stationen, Kunden, Finanzen und Kontrolle. Bottom-up, auf den Daten, die Sie bereits haben.' },
    introLabel: 'Branchen — Kraftstoffhandel', h1a: 'Für unabhängige ', h1grad: 'Tankstellennetze',
    lede: 'Ihr Netz hat die Daten bereits — ERP, POS, Loyalty, GPS, Depots, BI, Tabellen. Was meist fehlt, ist die Vernetzung: Das Netz läuft auf Menschen, Anrufen, manueller Abstimmung und der Erfahrung einzelner Manager, während die angehäuften Daten noch nicht für Ihre Entscheidungen arbeiten.',
    imgAlt: 'Tankstellenvorplatz in der Abenddämmerung beleuchtet', imgLabel: 'Kraftstoff — Vorplatz, Depot oder das Netz auf einen Blick',
    pathLabel: 'Wie der Weg verläuft', pathTitle: 'KI verdient ihren Platz auf einem Fundament — daher verläuft der Weg von unten nach oben.',
    pathLede: 'KI-Agenten werden nicht auf Chaos installiert. Jeder Block der Netzökonomie steigt auf dieselbe Weise auf — klein anfangen mit den Daten, die Sie haben, und das Fundament unterwegs aufbauen. Sie müssen nicht oben sein, um zu beginnen.',
    stages: [
      { tag: 'Stufe 1', name: 'Grundlegende Lösungen', body: 'Schnell zu starten mit den Daten, die Sie bereits haben. Ein klarer Effekt ohne große Prozessänderung.' },
      { tag: 'Stufe 2', name: 'Fortgeschrittene Lösungen', body: 'Brauchen reifere Daten, Integrationen und Modelle. Ein größerer Effekt durch das Optimieren von Entscheidungen und Prozessen.' },
      { tag: 'Stufe 3', name: 'Agentische & systemische Lösungen', body: 'Durchgängige Lösungen und KI-Agenten, die auf dem Fundament laufen. Der Mensch setzt die Regeln und kontrolliert das Ergebnis.' },
    ],
    startsLabel: 'Einstiegspunkte für die Zusammenarbeit', startsTitle: 'Über die gesamte Netzökonomie.',
    startsLede: 'Der Effekt erstreckt sich über die gesamte Netzökonomie — Beschaffung und Marge, Preisgestaltung, Logistik, Stationen, Finanzen und Kontrolle. Wir beginnen dort, wohin die Diagnose zeigt.',
    blocks: [
      { lever: 'Kraftstoff: Beschaffung, Preis & Marge', detail: 'Beschaffung und Preis laufen als ein kommerzieller Kreislauf — Bedarf prognostizieren, Lieferant und Zeitpunkt wählen, die vollen Landekosten einer Charge berücksichtigen, Tankstellenpreis nach Markt und Nachfrage setzen.', tasks: ['Kraftstoff in der richtigen Menge zum richtigen Zeitpunkt einkaufen', 'Lieferant und Einkaufskonditionen wählen', 'Die vollen Landekosten einer Charge berücksichtigen', 'Preis nach Markt und Nachfrage setzen'] },
      { lever: 'Logistik & Kraftstoffversorgung', detail: 'Kraftstoffversorgung durchgängig steuerbar gemacht — Chargenbewegung, Verzögerungsrisiko, Annahmedifferenzen, Eisenbahnwaggons und Standgeld, Depotbetrieb, Stationsbelieferung, Fahrtausführung.', tasks: ['Chargenbewegung und Verzögerungsrisiko verfolgen', 'Finden, wo Sie bei Versorgungsdifferenzen verlieren', 'Eisenbahnwaggons und Standgeld kontrollieren', 'Kraftstofflieferung an Stationen planen'] },
      { lever: 'Stationen, Shops & Cafés', detail: 'Die Station als Profitpunkt geführt, nicht nur als operatives Objekt — Minderleistung, Schlangen und verlorener Verkehr, Verstöße an Zapfsäule und POS, Schichtarbeit, Ausrüstung, Sortiment, Shop-Conversion.', tasks: ['Verstehen, warum eine Station unterdurchschnittlich abschneidet', 'Verluste an Zapfsäule und Kasse stoppen', 'Stationsausrüstung im Betrieb halten', 'Kraftstoffverkehr in Shop-Käufe verwandeln'] },
      { lever: 'Kunden, Loyalty & B2B', detail: 'Kundenbasis und B2B-Portfolio in eine gesteuerte Wachstumsquelle verwandelt — Kundenwert, Abwanderung, Frequenz und Bon, Promo, Bewertungen, Retail Media, Profitabilität von Firmenkunden.', tasks: ['Den Kunden und seine Ökonomie verstehen', 'Kunden binden und Abwanderung verhindern', 'Frequenz, Bon und Nicht-Kraftstoff-Anteil steigern', 'Promotions durchführen und messen'] },
      { lever: 'Finanzen, Geld & Kontrolle', detail: 'Die Finanzen sehen das Geschäft als Live-Bild und finden die Ursache einer Abweichung schneller — Marge, Kosten, Liquidität, Forderungen, Zahlungsrisiken, finanzielle Verluste und Richtlinienverstöße früh sichtbar gemacht.', tasks: ['Das Finanzbild hier und jetzt sehen', 'Die Ursache einer Abweichung verstehen, nicht nur die Tatsache', 'Liquiditäts- und Cashflow-Lücken vorhersehen', 'Finanzielle Verluste und Differenzen aufdecken'] },
      { lever: 'Unterstützende Funktionen', detail: 'Die Routine herausgenommen und die Kontrolle gestärkt über die Funktionen, die das Geschäft unterstützen — HR, Recht, MTO-Beschaffung, Auftragnehmer, interne Kontrolle, Dokumente und Back-Office.', tasks: ['HR und Personal', 'Recht', 'MTO-Beschaffung und Auftragnehmer', 'Interne Kontrolle, Verluste und Risiko'] },
      { lever: 'Daten & Prozesse — das Fundament', detail: 'Das Fundament, auf dem Analytik, Automatisierung und KI laufen — eine Datenbasis, Qualität und Verfügbarkeit, Berichte, Wissenssuche, Office-KI-Tools, Prozess-Reengineering und agentische Lösungen.', tasks: ['Eine Quelle der Wahrheit statt unterschiedlicher Zahlen pro Abteilung', 'Antworten im Wissen des Unternehmens finden', 'Routine vom Team nehmen'] },
    ],
    tailMap: 'Die vollständige Transformationskarte ansehen', tailCase: 'Den Red-Petroleum-Fall lesen',
    hwwLabel: 'So arbeiten wir', hwwTitle: 'Auf Ihre Geschäftsökonomie ausgerichtet.',
    hww: [
      { k: 'Von schnellen Erfolgen zur systemischen Transformation', p: 'Mit klaren Anwendungsfällen beginnen, dann die Daten, Prozesse, Modelle und agentischen Systeme dahinter aufbauen.' },
      { k: 'KI an die Geschäftsökonomie gebunden, nicht an die Technik des Monats', p: 'Jede Initiative antwortet auf Marge, Verluste, Working Capital, Umsatz, Service oder Teameffizienz.' },
      { k: 'Wir begleiten es von der Idee bis zum Einsatz', p: 'Wir setzen die Prioritäten, die Daten, die Abhängigkeiten, die Pilotprojekte und den nächsten realistischen Schritt für Ihr Netz.' },
    ],
    ctaHeading: 'Diagnose für Tankstellennetze, zwei Wochen.', ctaBody: 'Zwei Wochen, um zu finden, wo Daten und KI die Zahlen in Ihrem Netz bewegen können — Beschaffung, Logistik, Stationen, Finanzen — und was zuerst zu bauen ist.',
  },

  et: {
    meta: { title: 'Kütuse jaemüük — KKT', description: 'Tehisintellekt ja andmed sõltumatutele kütusevõrkudele — hanked ja marginaal, logistika, jaamad, kliendid, rahandus ja kontroll. Alt üles, andmetel, mis teil juba on.' },
    introLabel: 'Tööstusharud — Kütuse jaemüük', h1a: 'Sõltumatutele ', h1grad: 'kütusevõrkudele',
    lede: 'Teie võrgul on andmed juba olemas — ERP, POS, lojaalsus, GPS, depood, BI, tabelid. Tavaliselt puudub seotus: võrk töötab inimestel, kõnedel, käsitsi võrdlemisel ja üksikute juhtide kogemusel, samal ajal kui kogutud andmed ei tööta veel teie otsuste heaks.',
    imgAlt: 'Tankla esiplats hämaras valgustatud', imgLabel: 'Kütus — tankla esiplats, depoo või võrk ühe pilguga',
    pathLabel: 'Kuidas tee kulgeb', pathTitle: 'Tehisintellekt teenib oma koha vundamendil — seega kulgeb tee alt üles.',
    pathLede: 'Tehisintellekti agente ei paigaldata kaose peale. Iga võrgumajanduse plokk tõuseb samamoodi — alusta väikeselt olemasolevate andmetega ja ehita vundament käigu pealt. Alustamiseks ei pea olema tipus.',
    stages: [
      { tag: '1. etapp', name: 'Põhilahendused', body: 'Kiire käivitada olemasolevate andmetega. Selge mõju ilma suure protsessimuutuseta.' },
      { tag: '2. etapp', name: 'Edasijõudnud lahendused', body: 'Vajavad küpsemaid andmeid, integratsioone ja mudeleid. Suurem mõju otsuste ja protsesside optimeerimisest.' },
      { tag: '3. etapp', name: 'Agentsed ja süsteemsed lahendused', body: 'Otsast-otsani lahendused ja TI-agendid, mis töötavad vundamendi peal. Inimene seab reeglid ja kontrollib tulemust.' },
    ],
    startsLabel: 'Koostöö alguspunktid', startsTitle: 'Läbi kogu võrgumajanduse.',
    startsLede: 'Mõju ulatub läbi kogu võrgumajanduse — hanked ja marginaal, hinnastamine, logistika, jaamad, rahandus ja kontroll. Alustame sealt, kuhu diagnostika osutab.',
    blocks: [
      { lever: 'Kütus: hanked, hind ja marginaal', detail: 'Hanked ja hind toimivad ühe ärilise tsüklina — prognoosi vajadus, vali tarnija ja hetk, arvesta partii täielik tarnekulu, sea pumbahind turu ja nõudluse järgi.', tasks: ['Osta kütust õiges koguses õigel hetkel', 'Vali tarnija ja ostutingimused', 'Arvesta partii täielik tarnekulu', 'Sea hind turu ja nõudluse järgi'] },
      { lever: 'Logistika ja kütusetarne', detail: 'Kütusetarne otsast-otsani hallatav — partii liikumine, viivituse risk, vastuvõtu erinevused, raudteevagunid ja seisuaeg, depootegevus, jaamatarne, reisi teostus.', tasks: ['Jälgi partii liikumist ja viivituse riski', 'Leia, kus tarne erinevustel kaotad', 'Kontrolli raudteevaguneid ja seisuaega', 'Planeeri kütusetarne jaamadesse'] },
      { lever: 'Jaamad, poed ja kohvikud', detail: 'Jaam juhitud kasumipunktina, mitte ainult tegevusobjektina — alasooritus, järjekorrad ja kaotatud liiklus, tankuri ja POS-i rikkumised, vahetustöö, seadmed, sortiment, poe konversioon.', tasks: ['Mõista, miks jaam alasooritab', 'Peata kaod tankuril ja kassas', 'Hoia jaama seadmed töökorras', 'Muuda kütuseliiklus poeostudeks'] },
      { lever: 'Kliendid, lojaalsus ja B2B', detail: 'Kliendibaas ja B2B-portfell muudetud juhitud kasvuallikaks — kliendiväärtus, lahkumine, sagedus ja tšekk, promo, arvustused, jaemeedia, ärikliendi kasumlikkus.', tasks: ['Mõista klienti ja tema ökonoomikat', 'Hoia kliente ja väldi lahkumist', 'Kasvata sagedust, tšekki ja mitte-kütuse osakaalu', 'Vii läbi ja mõõda kampaaniaid'] },
      { lever: 'Rahandus, raha ja kontroll', detail: 'Rahandus näeb äri elava pildina ja leiab kõrvalekalde põhjuse kiiremini — marginaal, kulud, raha, nõuded, makseriskid, rahalised kaod ja reeglirikkumised varakult nähtavaks tehtud.', tasks: ['Näe finantspilti siin ja praegu', 'Mõista kõrvalekalde põhjust, mitte ainult fakti', 'Näe ette raha- ja rahavoo lünki', 'Too esile rahalised kaod ja erinevused'] },
      { lever: 'Tugifunktsioonid', detail: 'Rutiin välja võetud ja kontroll tugevdatud läbi funktsioonide, mis äri toetavad — HR, õigus, MTO-hanked, töövõtjad, sisekontroll, dokumendid ja tugitegevus.', tasks: ['HR ja tööjõud', 'Õigus', 'MTO-hanked ja töövõtjad', 'Sisekontroll, kaod ja risk'] },
      { lever: 'Andmed ja protsessid — vundament', detail: 'Vundament, millel analüütika, automatiseerimine ja TI töötavad — üks andmebaas, kvaliteet ja saadavus, aruandlus, teadmiste otsing, kontori-TI-tööriistad, protsesside ümberkujundamine ja agentsed lahendused.', tasks: ['Üks tõe allikas erinevate osakonnanumbrite asemel', 'Leia vastused ettevõtte teadmistest', 'Võta rutiin meeskonnalt ära'] },
    ],
    tailMap: 'Vaata täielikku transformatsioonikaarti', tailCase: 'Loe Red Petroleumi juhtumit',
    hwwLabel: 'Kuidas me töötame', hwwTitle: 'Üles ehitatud teie äri ökonoomika ümber.',
    hww: [
      { k: 'Kiiretest võitudest süsteemse transformatsioonini', p: 'Alusta selgetest kasutusjuhtudest, seejärel ehita välja andmed, protsessid, mudelid ja agentsed süsteemid nende taga.' },
      { k: 'Tehisintellekt seotud äri ökonoomikaga, mitte kuu tehnoloogiaga', p: 'Iga algatus vastab marginaalile, kahjudele, käibekapitalile, tulule, teenindusele või meeskonna tõhususele.' },
      { k: 'Käime selle läbi ideest juurutuseni', p: 'Seame prioriteedid, andmed, sõltuvused, pilootprojektid ja järgmise realistliku sammu teie võrgu jaoks.' },
    ],
    ctaHeading: 'Kütusevõrgu diagnostika, kaks nädalat.', ctaBody: 'Kaks nädalat, et leida, kus andmed ja tehisintellekt saavad teie võrgus numbreid liigutada — hanked, logistika, jaamad, rahandus — ja mida esmalt ehitada.',
  },
};

export function useFuel(locale: string | undefined): FuelDict {
  return FUEL[(locale as Locale)] ?? FUEL.en;
}
