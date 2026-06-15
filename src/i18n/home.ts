// Homepage content (below the hero), keyed by locale. German is a careful
// pass; Estonian is a first pass, to be verified by a native reviewer.
// Brand/company names (Click & Grow, CSC Telecom, GTE, Taxigo, Red Petroleum,
// Noventiq, Microsoft, AWS, Meta) stay untranslated.

import type { Locale } from './config';

type Step = { n: string; title: string; lead: string; outputs: string[] };
type Point = { title: string; body: string };
type CaseT = { id: string; focus: string; sector: string; what: string; scope: string[]; outcome: string[] };

export type HomeDict = {
  maps: { label: string; lede: string; retail: string; retailArrow: string; fuel: string; fuelArrow: string };
  how: { label: string; title: string; intro: string; steps: Step[] };
  why: { label: string; title: string; intro: string; points: Point[] };
  cases: {
    label: string; title: string; intro: string;
    partnerNotes: string[];   // Noventiq, Microsoft, AWS, Meta
    didLabel: string; changedLabel: string; close: string; tail: string;
    items: CaseT[];           // matches ClientCases case ids/order
  };
  cta: { heading: string; body: string; primary: string; secondary: string };
};

const CASE_IDS = ['click-grow', 'csc-telecom', 'kricon', 'gte', 'forrest-taxi', 'red-petroleum'];

export const HOME: Record<Locale, HomeDict> = {
  en: {
    maps: {
      label: 'Specialized solutions',
      lede: 'AI Transformation Maps, built for the industries we go deepest in:',
      retail: 'Retail AI Canvas', retailArrow: 'Across the retail business →',
      fuel: 'Fuel AI Transformation Map', fuelArrow: 'The whole fuel network economy →',
    },
    how: {
      label: 'How we work',
      title: 'From question to delivered solution.',
      intro: 'Four stages, from a business question to a solution that runs. The starting point is always the objective or decision that needs to improve — technology comes after that.',
      steps: [
        { n: '01', title: 'Identify & qualify', lead: 'We clarify the business question, understand the current situation, and assess whether AI, data, analytics, automation, or process redesign can realistically help.', outputs: ['A clear view of the business issue, its owner, and the expected result', 'A first check of available data, process reality, and feasibility', 'A recommendation to proceed, reshape the idea, or stop early'] },
        { n: '02', title: 'Scope & prepare', lead: 'We turn a promising opportunity into a delivery-ready project that both business and technical teams can understand.', outputs: ['What needs to change in the process and decision flow', 'The data, systems, people, and rules required', 'A delivery plan with requirements, owners, and acceptance criteria'] },
        { n: '03', title: 'Execute & coordinate', lead: 'We support implementation from the business side and keep technical delivery connected to business outcomes.', outputs: ['Coordinated work between business, vendors, and technical teams', 'Regular checks that the solution still solves the business problem', 'Testing, acceptance, stakeholder alignment, and adoption support'] },
        { n: '04', title: 'Close, adopt & scale', lead: 'We help make the solution operational, measurable, and ready for further improvement.', outputs: ['A working solution embedded into the business process', 'Handover, user adoption, and value tracking', 'Clear next steps for scaling or improving the solution'] },
      ],
    },
    why: {
      label: 'Why us',
      title: "We sit on the owner's side of the table.",
      intro: 'A senior team with roots in business, not just tech — so the work is shaped by what moves the business, and built to keep running after we leave.',
      points: [
        { title: 'AI tied to business economics', body: 'Every initiative is tied to margin, losses, working capital, revenue, service, or team efficiency — not the fashion of technology.' },
        { title: 'Quick wins, then the system', body: 'We start from clear use cases and build the data, processes, models, and agents up from there.' },
        { title: 'World experience, your context', body: 'We bring international practice but account for data maturity, system availability, operating constraints, and local reality.' },
        { title: 'From idea to implementation', body: 'We define the priorities, the data, the dependencies, the pilots, and the next realistic step for your business.' },
      ],
    },
    cases: {
      label: 'Our partners & clients', title: 'Partners and clients.',
      intro: 'We work alongside global technology partners and with clients across fuel, retail, telecom, mobility, logistics, and industry. Tap a client for the full picture — what we did, the scope, and the result.',
      partnerNotes: ['Digital-transformation partner', 'Microsoft AI Cloud Partner', 'AWS Partner Network member', 'Meta Tech Provider'],
      didLabel: 'What we did', changedLabel: 'What changed', close: 'Close',
      tail: 'See the full list of clients and projects',
      items: [
        { id: 'click-grow', focus: 'Customer analytics for a D2C smart-garden brand', sector: 'Consumer hardware · D2C', what: 'Customer analytics, segmentation, and personalisation built on device-and-consumable behaviour.', scope: ['Customer analytics and segmentation across the D2C base', 'Transactional behaviour combined with product-engagement signals', 'Personalisation support for retention and lifecycle marketing'], outcome: ['Customer behaviour made actionable for retention planning', 'Lifecycle marketing grounded in real customer data'] },
        { id: 'csc-telecom', focus: 'Customer analytics, tariff analysis, and churn modelling', sector: 'Telecom', what: 'Behavioural segmentation, personalised communications, tariff and promo-response analysis, and first churn models for retention.', scope: ['Behavioural segmentation and personalised-communication design', 'Tariff structure and package-configuration analysis', 'Promo-response evaluation by cohort', 'First churn models to route at-risk customers into retention'], outcome: ['Risk groups visible earlier, not lost in overall traffic', 'Marketing and commercial decisions on one customer base'] },
        { id: 'kricon', focus: 'Operational visibility for international logistics', sector: 'International logistics', what: 'Reporting infrastructure, anomaly detection, and clustering models that turn operational data into ops-level signals.', scope: ['Reporting infrastructure across operations', 'Anomaly detection on operational data', 'Clustering models for ops-level signals'], outcome: ['Operational issues surfaced as signals, not after the fact', 'A reporting base the operation can run on'] },
        { id: 'gte', focus: 'Fuel-efficiency optimisation in compressor design', sector: 'Industrial manufacturing', what: 'Business-problem framing, an architecture blending operations research, ML and physical engineering rules, team-shaping support, and development oversight.', scope: ['Framing the fuel-efficiency optimisation problem in compressor design', 'Architecture combining OR, ML, and physical engineering rules', 'Team-composition recommendations', 'Oversight of the technical development'], outcome: ['Model used in active design work', 'Fuel-efficiency gains validated against engineering baselines'] },
        { id: 'forrest-taxi', focus: 'Dynamic-pricing architecture and feasibility', sector: 'Mobility · ride-hailing', what: 'Business-problem framing, a target architecture, an ML prototype to prove feasibility, implementation-vendor support, and results control against a baseline.', scope: ['Framing the in-app pricing problem', 'Defining the target architecture', 'An ML prototype to prove feasibility', 'Vendor-selection support and development oversight'], outcome: ['Feasibility proven before committing to a full build', 'Target architecture aligned to the business problem', 'Rollout controlled against a measurable baseline'] },
        { id: 'red-petroleum', focus: 'A multi-year data & AI transformation across the network', sector: 'Fuel retail', what: 'AI-readiness and roadmap, a DWH/BI foundation, customer segmentation, anti-fraud analytics, internal assistants, and automation across payments, logistics and procurement.', scope: ['Roadmap and leadership alignment for the data & AI programme', 'DWH/BI foundation: 24+ dashboards across 9 departments', 'Segmentation of 380,000+ loyalty members; anti-fraud over 30M+ transactions', 'NL analytics agent, internal RAG assistants, payment/logistics automation, a first procurement-optimisation product', 'Hiring and training the client’s in-house data team'], outcome: ['Most of the roadmap delivered', 'In-house data team now runs independently', 'Reporting that took days now takes minutes', 'First in-house ML models in production'] },
      ],
    },
    cta: {
      heading: 'Let’s talk about your business problem.',
      body: 'Tell us the problem you are trying to move — margin, cost, availability, customer value, or productivity. We will tell you whether data and AI can realistically help, and what the first step looks like.',
      primary: 'Book a diagnostic', secondary: 'See our work',
    },
  },

  de: {
    maps: {
      label: 'Spezialisierte Lösungen',
      lede: 'AI-Transformationskarten, gebaut für die Branchen, in die wir am tiefsten gehen:',
      retail: 'Retail AI Canvas', retailArrow: 'Über das gesamte Einzelhandelsgeschäft →',
      fuel: 'Fuel AI Transformation Map', fuelArrow: 'Die gesamte Ökonomie eines Tankstellennetzes →',
    },
    how: {
      label: 'So arbeiten wir',
      title: 'Von der Frage zur fertigen Lösung.',
      intro: 'Vier Phasen, von einer geschäftlichen Frage zu einer Lösung, die läuft. Ausgangspunkt ist immer das Ziel oder die Entscheidung, die besser werden soll — die Technologie kommt danach.',
      steps: [
        { n: '01', title: 'Erkennen & qualifizieren', lead: 'Wir klären die geschäftliche Frage, verstehen die aktuelle Lage und prüfen, ob KI, Daten, Analytik, Automatisierung oder Prozessumbau realistisch helfen können.', outputs: ['Ein klares Bild des Problems, seines Verantwortlichen und des erwarteten Ergebnisses', 'Eine erste Prüfung der verfügbaren Daten, der Prozessrealität und der Machbarkeit', 'Eine Empfehlung: weitermachen, die Idee anpassen oder früh stoppen'] },
        { n: '02', title: 'Umfang & Vorbereitung', lead: 'Wir machen aus einer vielversprechenden Gelegenheit ein umsetzungsreifes Projekt, das Fach- und Technikteams gleichermaßen verstehen.', outputs: ['Was sich im Prozess und im Entscheidungsfluss ändern muss', 'Die nötigen Daten, Systeme, Menschen und Regeln', 'Ein Umsetzungsplan mit Anforderungen, Verantwortlichen und Abnahmekriterien'] },
        { n: '03', title: 'Umsetzen & koordinieren', lead: 'Wir unterstützen die Umsetzung von der Geschäftsseite und halten die technische Lieferung an den geschäftlichen Ergebnissen ausgerichtet.', outputs: ['Koordinierte Arbeit zwischen Fachbereich, Dienstleistern und Technikteams', 'Regelmäßige Prüfung, dass die Lösung das Problem weiterhin löst', 'Tests, Abnahme, Stakeholder-Abstimmung und Einführungsbegleitung'] },
        { n: '04', title: 'Abschließen, einführen & skalieren', lead: 'Wir machen die Lösung betriebsbereit, messbar und bereit für weitere Verbesserungen.', outputs: ['Eine funktionierende, in den Geschäftsprozess eingebettete Lösung', 'Übergabe, Nutzerakzeptanz und Wertverfolgung', 'Klare nächste Schritte zum Skalieren oder Verbessern der Lösung'] },
      ],
    },
    why: {
      label: 'Warum wir',
      title: 'Wir sitzen auf der Seite des Eigentümers.',
      intro: 'Ein erfahrenes Team mit Wurzeln im Geschäft, nicht nur in der Technik — damit die Arbeit von dem geprägt ist, was das Geschäft bewegt, und auch nach unserem Weggang weiterläuft.',
      points: [
        { title: 'KI an die Geschäftsökonomie gebunden', body: 'Jede Initiative ist an Marge, Verluste, Working Capital, Umsatz, Service oder Teameffizienz gebunden — nicht an die Mode der Technologie.' },
        { title: 'Schnelle Erfolge, dann das System', body: 'Wir starten von klaren Anwendungsfällen und bauen Daten, Prozesse, Modelle und Agenten von dort aus auf.' },
        { title: 'Weltweite Erfahrung, Ihr Kontext', body: 'Wir bringen internationale Praxis ein, berücksichtigen aber Datenreife, Systemverfügbarkeit, betriebliche Rahmenbedingungen und die lokale Realität.' },
        { title: 'Von der Idee zur Umsetzung', body: 'Wir definieren die Prioritäten, die Daten, die Abhängigkeiten, die Pilotprojekte und den nächsten realistischen Schritt für Ihr Geschäft.' },
      ],
    },
    cases: {
      label: 'Unsere Partner & Kunden', title: 'Partner und Kunden.',
      intro: 'Wir arbeiten mit globalen Technologiepartnern und mit Kunden aus den Bereichen Kraftstoff, Einzelhandel, Telekommunikation, Mobilität, Logistik und Industrie. Tippen Sie auf einen Kunden für das ganze Bild — was wir gemacht haben, den Umfang und das Ergebnis.',
      partnerNotes: ['Partner für digitale Transformation', 'Microsoft AI Cloud Partner', 'AWS Partner Network member', 'Meta Tech Provider'],
      didLabel: 'Was wir gemacht haben', changedLabel: 'Was sich verändert hat', close: 'Schließen',
      tail: 'Die vollständige Liste der Kunden und Projekte ansehen',
      items: [
        { id: 'click-grow', focus: 'Kundenanalytik für eine D2C-Marke für smarte Gärten', sector: 'Consumer Hardware · D2C', what: 'Kundenanalytik, Segmentierung und Personalisierung auf Basis des Geräte- und Verbrauchsverhaltens.', scope: ['Kundenanalytik und Segmentierung über die gesamte D2C-Basis', 'Transaktionsverhalten kombiniert mit Produkt-Engagement-Signalen', 'Personalisierung zur Unterstützung von Bindung und Lifecycle-Marketing'], outcome: ['Kundenverhalten nutzbar gemacht für die Bindungsplanung', 'Lifecycle-Marketing auf echten Kundendaten gegründet'] },
        { id: 'csc-telecom', focus: 'Kundenanalytik, Tarifanalyse und Churn-Modellierung', sector: 'Telekommunikation', what: 'Verhaltensbasierte Segmentierung, personalisierte Kommunikation, Tarif- und Promo-Response-Analyse sowie erste Churn-Modelle zur Bindung.', scope: ['Verhaltenssegmentierung und Gestaltung personalisierter Kommunikation', 'Analyse von Tarifstruktur und Paketkonfiguration', 'Promo-Response-Bewertung nach Kohorte', 'Erste Churn-Modelle, um gefährdete Kunden in die Bindung zu leiten'], outcome: ['Risikogruppen früher sichtbar, nicht im Gesamtverkehr verloren', 'Marketing- und Geschäftsentscheidungen auf einer Kundenbasis'] },
        { id: 'kricon', focus: 'Operative Transparenz für die internationale Logistik', sector: 'Internationale Logistik', what: 'Reporting-Infrastruktur, Anomalieerkennung und Clustering-Modelle, die operative Daten in Signale auf Betriebsebene verwandeln.', scope: ['Reporting-Infrastruktur über den gesamten Betrieb', 'Anomalieerkennung auf operativen Daten', 'Clustering-Modelle für Signale auf Betriebsebene'], outcome: ['Operative Probleme als Signale sichtbar, nicht erst im Nachhinein', 'Eine Reporting-Basis, auf der der Betrieb laufen kann'] },
        { id: 'gte', focus: 'Optimierung der Kraftstoffeffizienz im Kompressordesign', sector: 'Industrielle Fertigung', what: 'Problemrahmung, eine Architektur aus Operations Research, ML und physikalischen Ingenieurregeln, Unterstützung bei der Teambildung und Entwicklungsbegleitung.', scope: ['Rahmung des Effizienzproblems im Kompressordesign', 'Architektur aus OR, ML und physikalischen Ingenieurregeln', 'Empfehlungen zur Teamzusammensetzung', 'Begleitung der technischen Entwicklung'], outcome: ['Modell in aktiver Designarbeit eingesetzt', 'Effizienzgewinne gegen technische Referenzwerte validiert'] },
        { id: 'forrest-taxi', focus: 'Architektur und Machbarkeit dynamischer Preisgestaltung', sector: 'Mobilität · Ride-Hailing', what: 'Problemrahmung, eine Zielarchitektur, ein ML-Prototyp zum Nachweis der Machbarkeit, Unterstützung bei der Umsetzung und Ergebniskontrolle gegen eine Baseline.', scope: ['Rahmung des In-App-Preisproblems', 'Definition der Zielarchitektur', 'Ein ML-Prototyp zum Nachweis der Machbarkeit', 'Unterstützung bei der Anbieterauswahl und Entwicklungsbegleitung'], outcome: ['Machbarkeit nachgewiesen, bevor ein vollständiger Aufbau begann', 'Zielarchitektur am Geschäftsproblem ausgerichtet', 'Rollout gegen eine messbare Baseline kontrolliert'] },
        { id: 'red-petroleum', focus: 'Eine mehrjährige Daten- & KI-Transformation über das gesamte Netz', sector: 'Kraftstoffhandel', what: 'KI-Readiness und Roadmap, ein DWH/BI-Fundament, Kundensegmentierung, Anti-Fraud-Analytik, interne Assistenten und Automatisierung über Zahlungen, Logistik und Beschaffung.', scope: ['Roadmap und Führungsabstimmung für das Daten- & KI-Programm', 'DWH/BI-Fundament: 24+ Dashboards über 9 Abteilungen', 'Segmentierung von 380.000+ Loyalty-Mitgliedern; Anti-Fraud über 30 Mio.+ Transaktionen', 'NL-Analytik-Agent, interne RAG-Assistenten, Zahlungs-/Logistikautomatisierung, ein erstes Produkt zur Beschaffungsoptimierung', 'Aufbau und Schulung des internen Datenteams des Kunden'], outcome: ['Großteil der Roadmap geliefert', 'Internes Datenteam arbeitet nun eigenständig', 'Berichte, die Tage brauchten, dauern nun Minuten', 'Erste interne ML-Modelle in Produktion'] },
      ],
    },
    cta: {
      heading: 'Sprechen wir über Ihr geschäftliches Problem.',
      body: 'Sagen Sie uns, welches Problem Sie bewegen wollen — Marge, Kosten, Verfügbarkeit, Kundenwert oder Produktivität. Wir sagen Ihnen, ob Daten und KI realistisch helfen können und wie der erste Schritt aussieht.',
      primary: 'Diagnose buchen', secondary: 'Unsere Arbeiten ansehen',
    },
  },

  et: {
    maps: {
      label: 'Spetsialiseeritud lahendused',
      lede: 'Tehisintellekti transformatsioonikaardid, loodud valdkondadele, kuhu läheme kõige sügavamale:',
      retail: 'Retail AI Canvas', retailArrow: 'Läbi kogu jaekaubanduse →',
      fuel: 'Fuel AI Transformation Map', fuelArrow: 'Kogu kütusevõrgu majandus →',
    },
    how: {
      label: 'Kuidas me töötame',
      title: 'Küsimusest valmis lahenduseni.',
      intro: 'Neli etappi, äriküsimusest lahenduseni, mis töötab. Lähtepunkt on alati eesmärk või otsus, mis vajab parandamist — tehnoloogia tuleb pärast seda.',
      steps: [
        { n: '01', title: 'Tuvasta ja kvalifitseeri', lead: 'Selgitame äriküsimuse, mõistame praegust olukorda ja hindame, kas tehisintellekt, andmed, analüütika, automatiseerimine või protsessi ümberkujundamine saavad realistlikult aidata.', outputs: ['Selge pilt probleemist, selle omanikust ja oodatavast tulemusest', 'Esmane kontroll saadaolevate andmete, protsessi reaalsuse ja teostatavuse üle', 'Soovitus: jätkata, ideed ümber kujundada või varakult peatuda'] },
        { n: '02', title: 'Määratle ja valmista ette', lead: 'Muudame lubava võimaluse teostuseks valmis projektiks, mida mõistavad nii äri- kui ka tehnilised meeskonnad.', outputs: ['Mis peab protsessis ja otsustusvoos muutuma', 'Vajalikud andmed, süsteemid, inimesed ja reeglid', 'Teostusplaan nõuete, vastutajate ja vastuvõtukriteeriumidega'] },
        { n: '03', title: 'Teosta ja koordineeri', lead: 'Toetame teostust äri poolelt ja hoiame tehnilise töö äriliste tulemustega seotuna.', outputs: ['Koordineeritud töö äri, tarnijate ja tehniliste meeskondade vahel', 'Regulaarne kontroll, et lahendus ikka probleemi lahendab', 'Testimine, vastuvõtt, osapoolte joondamine ja kasutuselevõtu tugi'] },
        { n: '04', title: 'Lõpeta, võta kasutusele ja skaleeri', lead: 'Aitame muuta lahenduse toimivaks, mõõdetavaks ja valmis edasiseks parandamiseks.', outputs: ['Toimiv lahendus, mis on äriprotsessi sisse põimitud', 'Üleandmine, kasutuselevõtt ja väärtuse jälgimine', 'Selged järgmised sammud lahenduse skaleerimiseks või parandamiseks'] },
      ],
    },
    why: {
      label: 'Miks meie',
      title: 'Istume omaniku poolel lauas.',
      intro: 'Kogenud meeskond, mille juured on äris, mitte ainult tehnoloogias — nii et töö lähtub sellest, mis äri liigutab, ja jääb tööle ka pärast meie lahkumist.',
      points: [
        { title: 'Tehisintellekt seotud äri majandusega', body: 'Iga algatus on seotud marginaali, kahjude, käibekapitali, tulu, teeninduse või meeskonna tõhususega — mitte tehnoloogia moega.' },
        { title: 'Kiired võidud, siis süsteem', body: 'Alustame selgetest kasutusjuhtudest ja ehitame sealt üles andmed, protsessid, mudelid ja agendid.' },
        { title: 'Maailma kogemus, teie kontekst', body: 'Toome rahvusvahelise praktika, kuid arvestame andmeküpsuse, süsteemide saadavuse, tegevuspiirangute ja kohaliku reaalsusega.' },
        { title: 'Ideest teostuseni', body: 'Määratleme prioriteedid, andmed, sõltuvused, pilootprojektid ja järgmise realistliku sammu teie äri jaoks.' },
      ],
    },
    cases: {
      label: 'Meie partnerid ja kliendid', title: 'Partnerid ja kliendid.',
      intro: 'Töötame koos globaalsete tehnoloogiapartneritega ja klientidega kütuse, jaekaubanduse, telekommunikatsiooni, liikuvuse, logistika ja tööstuse valdkondades. Puuduta klienti, et näha tervikpilti — mida tegime, ulatust ja tulemust.',
      partnerNotes: ['Digitaalse transformatsiooni partner', 'Microsoft AI Cloud Partner', 'AWS Partner Network member', 'Meta Tech Provider'],
      didLabel: 'Mida me tegime', changedLabel: 'Mis muutus', close: 'Sulge',
      tail: 'Vaata klientide ja projektide täielikku nimekirja',
      items: [
        { id: 'click-grow', focus: 'Kliendianalüütika D2C nutiaia brändile', sector: 'Tarbijaelektroonika · D2C', what: 'Kliendianalüütika, segmenteerimine ja personaliseerimine, mis põhineb seadme- ja tarbekauba käitumisel.', scope: ['Kliendianalüütika ja segmenteerimine kogu D2C baasi ulatuses', 'Tehingukäitumine kombineeritud tootega seotud signaalidega', 'Personaliseerimise tugi hoidmiseks ja elutsükli turunduseks'], outcome: ['Kliendikäitumine muudetud rakendatavaks hoidmise planeerimisel', 'Elutsükli turundus rajatud tegelikele kliendiandmetele'] },
        { id: 'csc-telecom', focus: 'Kliendianalüütika, tariifianalüüs ja churn-modelleerimine', sector: 'Telekommunikatsioon', what: 'Käitumuslik segmenteerimine, personaliseeritud kommunikatsioon, tariifi- ja promo-vastuse analüüs ning esimesed churn-mudelid hoidmiseks.', scope: ['Käitumuslik segmenteerimine ja personaliseeritud kommunikatsiooni disain', 'Tariifistruktuuri ja paketikonfiguratsiooni analüüs', 'Promo-vastuse hindamine kohortide kaupa', 'Esimesed churn-mudelid riskiklientide suunamiseks hoidmisse'], outcome: ['Riskirühmad varem nähtaval, mitte üldises liikluses kadunud', 'Turundus- ja äriotsused ühel kliendibaasil'] },
        { id: 'kricon', focus: 'Operatiivne nähtavus rahvusvahelisele logistikale', sector: 'Rahvusvaheline logistika', what: 'Aruandlustaristu, anomaaliate tuvastamine ja klasterdamismudelid, mis muudavad operatiivandmed tegevustasandi signaalideks.', scope: ['Aruandlustaristu üle kogu tegevuse', 'Anomaaliate tuvastamine operatiivandmetel', 'Klasterdamismudelid tegevustasandi signaalide jaoks'], outcome: ['Operatiivprobleemid ilmnevad signaalidena, mitte tagantjärele', 'Aruandlusbaas, millel tegevus saab toimida'] },
        { id: 'gte', focus: 'Kütusetõhususe optimeerimine kompressori disainis', sector: 'Tööstuslik tootmine', what: 'Äriprobleemi raamistamine, arhitektuur, mis ühendab operatsioonianalüüsi, masinõppe ja füüsikalised inseneeria reeglid, meeskonna kujundamise tugi ja arenduse järelevalve.', scope: ['Kütusetõhususe probleemi raamistamine kompressori disainis', 'Arhitektuur, mis ühendab OR-i, masinõppe ja füüsikalised reeglid', 'Soovitused meeskonna koosseisu kohta', 'Tehnilise arenduse järelevalve'], outcome: ['Mudel kasutusel aktiivses disainitöös', 'Tõhususe võidud valideeritud inseneeria baasjoonte vastu'] },
        { id: 'forrest-taxi', focus: 'Dünaamilise hinnastamise arhitektuur ja teostatavus', sector: 'Liikuvus · sõidujagamine', what: 'Äriprobleemi raamistamine, siharhitektuur, masinõppe prototüüp teostatavuse tõestamiseks, teostuspartneri tugi ja tulemuste kontroll baasjoone vastu.', scope: ['Rakendusesisese hinnastamise probleemi raamistamine', 'Siharhitektuuri määratlemine', 'Masinõppe prototüüp teostatavuse tõestamiseks', 'Tarnija valiku tugi ja arenduse järelevalve'], outcome: ['Teostatavus tõestatud enne täismahus ehitust', 'Siharhitektuur joondatud äriprobleemiga', 'Juurutus kontrollitud mõõdetava baasjoone vastu'] },
        { id: 'red-petroleum', focus: 'Mitmeaastane andmete ja tehisintellekti transformatsioon üle kogu võrgu', sector: 'Kütuse jaemüük', what: 'TI-valmidus ja teekaart, DWH/BI vundament, kliendisegmenteerimine, pettusevastane analüütika, sisemised assistendid ja automatiseerimine maksete, logistika ja hangete üleselt.', scope: ['Teekaart ja juhtkonna joondamine andmete ja TI programmi jaoks', 'DWH/BI vundament: 24+ töölauda üle 9 osakonna', '380 000+ lojaalsusliikme segmenteerimine; pettusevastane üle 30 mln+ tehingu', 'Loomuliku keele analüütikaagent, sisemised RAG-assistendid, maksete/logistika automatiseerimine, esimene hangete optimeerimise toode', 'Kliendi sisemise andmemeeskonna värbamine ja koolitamine'], outcome: ['Suurem osa teekaardist tarnitud', 'Sisemine andmemeeskond töötab nüüd iseseisvalt', 'Aruandlus, mis võttis päevi, võtab nüüd minuteid', 'Esimesed sisemised masinõppe mudelid tootmises'] },
      ],
    },
    cta: {
      heading: 'Räägime teie ärilisest probleemist.',
      body: 'Öelge meile, millist probleemi soovite liigutada — marginaal, kulu, saadavus, kliendiväärtus või tootlikkus. Ütleme teile, kas andmed ja tehisintellekt saavad realistlikult aidata ja milline on esimene samm.',
      primary: 'Broneeri diagnostika', secondary: 'Vaata meie töid',
    },
  },
};

export function useHome(locale: string | undefined): HomeDict {
  return HOME[(locale as Locale)] ?? HOME.en;
}

export { CASE_IDS };
