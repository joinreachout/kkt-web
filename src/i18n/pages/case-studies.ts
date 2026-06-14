// /case-studies content. German careful; Estonian first pass (verify).
// Invariant per-case data (id, name, logo, img) stays in the page; this module
// holds only translatable text, keyed by case id.
import type { Locale } from '../config';

export type CaseText = {
  name?: string;   // overrides the structural name when the case has no brand (descriptive title)
  focus: string;
  sector: string;
  years: string;
  image: string;   // MediaSlot label (descriptive)
  what: string;
  scope: string[];
  outcome: string[];
};

export type CaseStudiesDict = {
  meta: { title: string; description: string };
  introLabel: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  lede: string;
  colDid: string;
  colChanged: string;
  close: string;
  smaller: { label: string; lede: string; items: Record<string, { region: string; blurb: string }> };
  cases: Record<string, CaseText>;
};

export const CASE_STUDIES: Record<Locale, CaseStudiesDict> = {
  en: {
    meta: {
      title: 'Case studies — KKT',
      description: 'Selected work across fuel retail, logistics, customer analytics, industrial operations, and AI for management decisions. Filter by sector; open a client for the full picture.',
    },
    introLabel: 'Selected work',
    h1Pre: 'What we’ve ', h1Accent: 'delivered', h1Post: '.',
    lede: 'A cross-section of the work — fuel, retail, telecom, mobility, logistics, industry, and enterprise AI. Open a client for the full picture: what we did, the scope, the result.',
    colDid: 'What we did',
    colChanged: 'What changed',
    close: 'Close',
    smaller: {
      label: 'Other engagements',
      lede: "More work we've delivered, across industries.",
      items: {
        'clubtek': { region: 'Phuket, Thailand', blurb: 'Audio-visual systems integration — sound, video, intelligent lighting and unified automation for hotels, clubs and villas.' },
        'khaos-marani': { region: 'Kakheti, Georgia', blurb: 'Winery. Advanced analytics and predictive ML to forecast wine demand, optimise pricing, and segment consumers for targeted marketing.' },
        'fuel-loyalty': { region: 'Fuel retail', blurb: 'Reactivating dormant customers through a hybrid RFM + clustering segmentation — ~12,000 reactivated, refreshed by an automatic ML pipeline.' },
        'enterprise-agent': { region: 'Enterprise AI', blurb: 'A natural-language analytics agent for the executive team — business semantic layer, KPI grounding, 90%+ answer accuracy in production.' },
      },
    },
    cases: {
      'tic-iso': {
        focus: 'Prototype of an AI audit-preparation assistant',
        sector: 'Testing, Inspection & Certification', years: '2025',
        image: 'ISO audit-preparation assistant',
        what: 'A pilot AI assistant for ISO audit preparation, built with a confidential enterprise client. The first version focused on ISO 9001, with future applicability to more specialized standards — automotive (ISO 16949) and medical (ISO 13485).',
        scope: ['Business discovery and process mapping of the real audit-preparation workflow', 'AI feasibility assessment with audit-domain experts', 'Prototype delivery with clear boundaries around expert judgment and compliance-sensitive decisions'],
        outcome: ['A broad “AI for auditors” idea turned into a practical, testable pilot', 'Defined business logic, technical boundaries, and a roadmap to ISO 16949 and ISO 13485'],
      },
      'click-grow': {
        focus: 'Customer analytics for a D2C smart-garden brand',
        sector: 'Retail / D2C', years: 'EU · 2022–2023',
        image: 'Customer segments / lifecycle dashboard',
        what: 'Customer analytics, segmentation, and personalisation built on device-and-consumable behaviour.',
        scope: ['Customer analytics and segmentation across the D2C base', 'Transactional behaviour combined with product-engagement signals', 'Personalisation support for retention and lifecycle marketing'],
        outcome: ['Customer behaviour made actionable for retention planning', 'Lifecycle marketing grounded in real customer data'],
      },
      'csc-telecom': {
        focus: 'Customer analytics, tariff analysis, and churn modelling for TravelSIM',
        sector: 'Telecom', years: 'Baltics · 2023–present',
        image: 'TravelSIM — travel-eSIM brand',
        what: 'Behavioural segmentation, personalised communications, tariff and promo-response analysis, and first churn models for retention — for TravelSIM, CSC Telecom’s travel-eSIM brand.',
        scope: ['Behavioural segmentation and personalised-communication design', 'Tariff structure and package-configuration analysis', 'Promo-response evaluation by cohort', 'First churn models to route at-risk customers into retention'],
        outcome: ['Risk groups visible earlier, not lost in overall traffic', 'Marketing and commercial decisions on one customer base'],
      },
      'gte': {
        focus: 'Fuel-efficiency optimisation in compressor design',
        sector: 'Industry', years: '2022–2023',
        image: 'Compressor efficiency model / engineering view',
        what: 'Business-problem framing, an architecture blending operations research, ML and physical engineering rules, team-shaping support, and development oversight.',
        scope: ['Framing the fuel-efficiency optimisation problem in compressor design', 'Architecture combining OR, ML, and physical engineering rules', 'Team-composition recommendations', 'Oversight of the technical development'],
        outcome: ['Model used in active design work', 'Fuel-efficiency gains validated against engineering baselines'],
      },
      'forrest-taxi': {
        focus: 'Dynamic-pricing architecture and feasibility',
        sector: 'Mobility', years: 'Baltics & Nordics · 2023',
        image: 'Taxigo — ride-hailing',
        what: 'Business-problem framing, a target architecture, an ML prototype to prove feasibility, implementation-vendor support, and results control against a baseline.',
        scope: ['Framing the in-app pricing problem', 'Defining the target architecture', 'An ML prototype to prove feasibility', 'Vendor-selection support and development oversight'],
        outcome: ['Feasibility proven before committing to a full build', 'Target architecture aligned to the business problem', 'Rollout controlled against a measurable baseline'],
      },
      'kricon': {
        focus: 'Operational visibility for international logistics',
        sector: 'Logistics', years: 'International · 2023–2024',
        image: 'Anomaly / clustering signals dashboard',
        what: 'Reporting infrastructure, anomaly detection, and clustering models that turn operational data into ops-level signals.',
        scope: ['Reporting infrastructure across operations', 'Anomaly detection on operational data', 'Clustering models for ops-level signals'],
        outcome: ['Operational issues surfaced as signals, not after the fact', 'A reporting base the operation can run on'],
      },
      'red-petroleum': {
        focus: 'A multi-year data & AI transformation across the network',
        sector: 'Fuel', years: 'Central Asia · 2024–present',
        image: 'Optimus — procurement advisor',
        what: 'AI-readiness and roadmap, a DWH/BI foundation, customer segmentation, anti-fraud analytics, internal assistants, and automation across payments, logistics and procurement.',
        scope: ['Roadmap and leadership alignment for the data & AI programme', 'DWH/BI foundation: 24+ dashboards across 9 departments', 'Segmentation of 380,000+ loyalty members; anti-fraud over 30M+ transactions', 'NL analytics agent, internal RAG assistants, payment/logistics automation, a first procurement-optimisation product', 'Hiring and training the client’s in-house data team'],
        outcome: ['Most of the roadmap delivered', 'In-house data team now runs independently', 'Reporting that took days now takes minutes', 'First in-house ML models in production'],
      },
      'loyalty-reactivation': {
        name: 'Fuel retail loyalty',
        focus: 'Reactivating dormant customers through segmentation',
        sector: 'Fuel', years: '2024–2025',
        image: 'RFM segments deployed in the loyalty app',
        what: 'Problem framing with marketing leadership, a hybrid RFM + clustering segmentation, 11 segments deployed in the app, and A/B-tested campaigns.',
        scope: ['A hybrid RFM + GMM-clustering segmentation prototype', '11 segments validated with the business', 'Segments deployed in the loyalty mobile app', 'A/B-tested campaigns and an automatic refresh pipeline handed over'],
        outcome: ['~12,000 dormant customers reactivated', 'Segments adopted into the next marketing cycle', 'An automatic ML pipeline now refreshes the programme'],
      },
      'nl-analytics': {
        name: 'Enterprise analytics agent',
        focus: 'A natural-language analytics agent for the executive team',
        sector: 'Enterprise AI', years: 'Enterprise DWH · 2025',
        image: 'NL analytics agent / semantic layer',
        what: 'A business semantic layer, KPI grounding, a golden training set, and support for a multi-agent analytics architecture.',
        scope: ['KPI definitions, business hierarchies, and logic grounding', 'A golden Q&A set for accuracy tuning', 'Support for a specialised multi-agent architecture by question type', 'Preparing internal staff to maintain and extend it'],
        outcome: ['90%+ answer accuracy in production', 'Leadership can query enterprise data directly', 'Internal staff trained to run and improve the system'],
      },
    },
  },

  de: {
    meta: {
      title: 'Fallstudien — KKT',
      description: 'Ausgewählte Arbeiten in Tankstellengeschäft, Logistik, Kundenanalytik, industriellem Betrieb und KI für Managemententscheidungen. Nach Branche filtern; einen Kunden öffnen für das ganze Bild.',
    },
    introLabel: 'Ausgewählte Arbeiten',
    h1Pre: 'Was wir ', h1Accent: 'geliefert', h1Post: ' haben.',
    lede: 'Ein Querschnitt der Arbeit — Kraftstoff, Einzelhandel, Telekom, Mobilität, Logistik, Industrie und Enterprise-KI. Öffnen Sie einen Kunden für das ganze Bild: was wir getan haben, der Umfang, das Ergebnis.',
    colDid: 'Was wir getan haben',
    colChanged: 'Was sich änderte',
    close: 'Schließen',
    smaller: {
      label: 'Weitere Engagements',
      lede: 'Weitere von uns gelieferte Arbeit, über Branchen hinweg.',
      items: {
        'clubtek': { region: 'Phuket, Thailand', blurb: 'Audio-Video-Systemintegration — Ton, Video, intelligente Beleuchtung und einheitliche Automatisierung für Hotels, Clubs und Villen.' },
        'khaos-marani': { region: 'Kachetien, Georgien', blurb: 'Weingut. Advanced Analytics und Predictive ML zur Prognose der Weinnachfrage, Preisoptimierung und Konsumentensegmentierung für gezieltes Marketing.' },
        'fuel-loyalty': { region: 'Kraftstoffhandel', blurb: 'Reaktivierung inaktiver Kunden durch eine hybride RFM- + Clustering-Segmentierung — ~12.000 reaktiviert, aktualisiert durch eine automatische ML-Pipeline.' },
        'enterprise-agent': { region: 'Enterprise-KI', blurb: 'Ein natürlichsprachlicher Analytik-Agent für das Führungsteam — geschäftliche semantische Schicht, KPI-Grounding, 90%+ Antwortgenauigkeit in Produktion.' },
      },
    },
    cases: {
      'tic-iso': {
        name: 'Großes TIC-Unternehmen',
        focus: 'Prototyp eines KI-Assistenten zur Audit-Vorbereitung',
        sector: 'Prüfung, Inspektion & Zertifizierung', years: '2025',
        image: 'KI-Assistent zur ISO-Audit-Vorbereitung',
        what: 'Ein Pilot-KI-Assistent zur ISO-Audit-Vorbereitung, gemeinsam mit einem vertraulichen Unternehmenskunden gebaut. Die erste Version konzentrierte sich auf ISO 9001, mit künftiger Anwendbarkeit auf spezialisiertere Standards — Automotive (ISO 16949) und Medizin (ISO 13485).',
        scope: ['Business Discovery und Prozess-Mapping des realen Audit-Vorbereitungs-Workflows', 'KI-Machbarkeitsbewertung mit Audit-Fachexperten', 'Prototyp-Lieferung mit klaren Grenzen um Expertenurteil und compliance-sensible Entscheidungen'],
        outcome: ['Aus einer breiten „KI für Auditoren“-Idee wurde ein praktischer, testbarer Pilot', 'Definierte Geschäftslogik, technische Grenzen und eine Roadmap zu ISO 16949 und ISO 13485'],
      },
      'click-grow': {
        focus: 'Kundenanalytik für eine D2C-Smart-Garden-Marke',
        sector: 'Einzelhandel / D2C', years: 'EU · 2022–2023',
        image: 'Kundensegmente / Lifecycle-Dashboard',
        what: 'Kundenanalytik, Segmentierung und Personalisierung, aufgebaut auf dem Verhalten rund um Gerät und Verbrauchsmaterial.',
        scope: ['Kundenanalytik und Segmentierung über die gesamte D2C-Basis', 'Transaktionsverhalten kombiniert mit Produkt-Engagement-Signalen', 'Personalisierungs-Support für Retention und Lifecycle-Marketing'],
        outcome: ['Kundenverhalten für die Retention-Planung nutzbar gemacht', 'Lifecycle-Marketing auf echten Kundendaten gegründet'],
      },
      'csc-telecom': {
        focus: 'Kundenanalytik, Tarifanalyse und Churn-Modellierung für TravelSIM',
        sector: 'Telekom', years: 'Baltikum · 2023–heute',
        image: 'TravelSIM — Reise-eSIM-Marke',
        what: 'Verhaltenssegmentierung, personalisierte Kommunikation, Tarif- und Promo-Response-Analyse sowie erste Churn-Modelle für die Retention — für TravelSIM, die Reise-eSIM-Marke von CSC Telecom.',
        scope: ['Verhaltenssegmentierung und Design personalisierter Kommunikation', 'Analyse von Tarifstruktur und Paketkonfiguration', 'Bewertung der Promo-Response nach Kohorte', 'Erste Churn-Modelle, um gefährdete Kunden in die Retention zu leiten'],
        outcome: ['Risikogruppen früher sichtbar, nicht im Gesamtverkehr verloren', 'Marketing- und Commercial-Entscheidungen auf einer Kundenbasis'],
      },
      'gte': {
        focus: 'Optimierung der Kraftstoffeffizienz im Verdichterdesign',
        sector: 'Industrie', years: '2022–2023',
        image: 'Verdichter-Effizienzmodell / Engineering-Ansicht',
        what: 'Rahmung der Geschäftsfrage, eine Architektur aus Operations Research, ML und physikalischen Ingenieurregeln, Unterstützung bei der Teamzusammenstellung und Aufsicht über die Entwicklung.',
        scope: ['Rahmung des Kraftstoffeffizienz-Optimierungsproblems im Verdichterdesign', 'Architektur aus OR, ML und physikalischen Ingenieurregeln', 'Empfehlungen zur Teamzusammensetzung', 'Aufsicht über die technische Entwicklung'],
        outcome: ['Modell in aktiver Designarbeit im Einsatz', 'Kraftstoffeffizienz-Gewinne gegen Engineering-Baselines validiert'],
      },
      'forrest-taxi': {
        focus: 'Architektur und Machbarkeit dynamischer Preisbildung',
        sector: 'Mobilität', years: 'Baltikum & Nordeuropa · 2023',
        image: 'Taxigo — Ride-Hailing',
        what: 'Rahmung der Geschäftsfrage, eine Zielarchitektur, ein ML-Prototyp zum Nachweis der Machbarkeit, Unterstützung des Umsetzungs-Dienstleisters und Ergebniskontrolle gegen eine Baseline.',
        scope: ['Rahmung des In-App-Preisbildungsproblems', 'Definition der Zielarchitektur', 'Ein ML-Prototyp zum Nachweis der Machbarkeit', 'Unterstützung bei der Anbieterauswahl und Entwicklungsaufsicht'],
        outcome: ['Machbarkeit bewiesen, bevor ein voller Aufbau zugesagt wurde', 'Zielarchitektur am Geschäftsproblem ausgerichtet', 'Rollout gegen eine messbare Baseline kontrolliert'],
      },
      'kricon': {
        focus: 'Operative Transparenz für internationale Logistik',
        sector: 'Logistik', years: 'International · 2023–2024',
        image: 'Dashboard für Anomalie- / Clustering-Signale',
        what: 'Reporting-Infrastruktur, Anomalieerkennung und Clustering-Modelle, die operative Daten in Signale auf Betriebsebene verwandeln.',
        scope: ['Reporting-Infrastruktur über den Betrieb hinweg', 'Anomalieerkennung auf operativen Daten', 'Clustering-Modelle für Signale auf Betriebsebene'],
        outcome: ['Betriebsprobleme als Signale sichtbar, nicht erst im Nachhinein', 'Eine Reporting-Basis, auf der der Betrieb laufen kann'],
      },
      'red-petroleum': {
        focus: 'Eine mehrjährige Daten- & KI-Transformation über das Netz',
        sector: 'Kraftstoff', years: 'Zentralasien · 2024–heute',
        image: 'Optimus — Beschaffungsberater',
        what: 'KI-Readiness und Roadmap, ein DWH/BI-Fundament, Kundensegmentierung, Anti-Fraud-Analytik, interne Assistenten und Automatisierung über Zahlungen, Logistik und Beschaffung.',
        scope: ['Roadmap und Führungs-Alignment für das Daten- & KI-Programm', 'DWH/BI-Fundament: 24+ Dashboards über 9 Abteilungen', 'Segmentierung von 380.000+ Loyalty-Mitgliedern; Anti-Fraud über 30 Mio.+ Transaktionen', 'NL-Analytik-Agent, interne RAG-Assistenten, Zahlungs-/Logistik-Automatisierung, ein erstes Beschaffungsoptimierungsprodukt', 'Aufbau und Schulung des internen Datenteams des Kunden'],
        outcome: ['Der Großteil der Roadmap geliefert', 'Internes Datenteam arbeitet jetzt eigenständig', 'Reporting, das Tage dauerte, dauert jetzt Minuten', 'Erste interne ML-Modelle in Produktion'],
      },
      'loyalty-reactivation': {
        name: 'Loyalty im Tankstellengeschäft',
        focus: 'Reaktivierung inaktiver Kunden durch Segmentierung',
        sector: 'Kraftstoff', years: '2024–2025',
        image: 'RFM-Segmente in der Loyalty-App ausgerollt',
        what: 'Problemrahmung mit der Marketingleitung, eine hybride RFM- + Clustering-Segmentierung, 11 in der App ausgerollte Segmente und A/B-getestete Kampagnen.',
        scope: ['Ein hybrider RFM- + GMM-Clustering-Segmentierungsprototyp', '11 mit dem Geschäft validierte Segmente', 'Segmente in der Loyalty-Mobile-App ausgerollt', 'A/B-getestete Kampagnen und eine übergebene automatische Refresh-Pipeline'],
        outcome: ['~12.000 inaktive Kunden reaktiviert', 'Segmente in den nächsten Marketingzyklus übernommen', 'Eine automatische ML-Pipeline aktualisiert jetzt das Programm'],
      },
      'nl-analytics': {
        name: 'Enterprise-Analytik-Agent',
        focus: 'Ein natürlichsprachlicher Analytik-Agent für das Führungsteam',
        sector: 'Enterprise-KI', years: 'Enterprise-DWH · 2025',
        image: 'NL-Analytik-Agent / semantische Schicht',
        what: 'Eine geschäftliche semantische Schicht, KPI-Grounding, ein Golden-Trainingsset und Unterstützung für eine Multi-Agenten-Analytik-Architektur.',
        scope: ['KPI-Definitionen, Geschäftshierarchien und Logik-Grounding', 'Ein Golden-Q&A-Set zum Genauigkeits-Tuning', 'Unterstützung für eine spezialisierte Multi-Agenten-Architektur nach Fragetyp', 'Vorbereitung interner Mitarbeiter zur Wartung und Erweiterung'],
        outcome: ['90%+ Antwortgenauigkeit in Produktion', 'Die Führung kann Unternehmensdaten direkt abfragen', 'Interne Mitarbeiter geschult, das System zu betreiben und zu verbessern'],
      },
    },
  },

  et: {
    meta: {
      title: 'Juhtumiuuringud — KKT',
      description: 'Valitud tööd kütuse jaemüügis, logistikas, kliendianalüütikas, tööstuse tegevuses ja TI-s juhtimisotsuste jaoks. Filtreeri sektori järgi; ava klient täispildi nägemiseks.',
    },
    introLabel: 'Valitud tööd',
    h1Pre: 'Mida me oleme ', h1Accent: 'teostanud', h1Post: '.',
    lede: 'Töö läbilõige — kütus, jaemüük, telekom, liikuvus, logistika, tööstus ja ettevõtte TI. Ava klient täispildi nägemiseks: mida tegime, ulatus, tulemus.',
    colDid: 'Mida me tegime',
    colChanged: 'Mis muutus',
    close: 'Sulge',
    smaller: {
      label: 'Muud projektid',
      lede: 'Veel meie tehtud tööd, üle erinevate valdkondade.',
      items: {
        'clubtek': { region: 'Phuket, Tai', blurb: 'Audio-video süsteemide integratsioon — heli, video, intelligentne valgustus ja ühtne automatiseerimine hotellidele, klubidele ja villadele.' },
        'khaos-marani': { region: 'Kahheetia, Gruusia', blurb: 'Veinitööstus. Edasijõudnud analüütika ja ennustav ML veininõudluse prognoosimiseks, hinnastamise optimeerimiseks ja tarbijate segmenteerimiseks suunatud turunduse jaoks.' },
        'fuel-loyalty': { region: 'Kütuse jaemüük', blurb: 'Uinunud klientide taasaktiveerimine hübriidse RFM + klasterdamise segmenteerimisega — ~12 000 taasaktiveeritud, värskendab automaatne ML-konveier.' },
        'enterprise-agent': { region: 'Ettevõtte TI', blurb: 'Loomuliku keele analüütika agent juhtkonnale — äriline semantiline kiht, KPI maandamine, 90%+ vastuste täpsus tootmises.' },
      },
    },
    cases: {
      'tic-iso': {
        name: 'Suur TIC-ettevõte',
        focus: 'TI-põhise auditi-ettevalmistuse assistendi prototüüp',
        sector: 'Testimine, inspekteerimine & sertifitseerimine', years: '2025',
        image: 'ISO auditi-ettevalmistuse assistent',
        what: 'Piloot-TI-assistent ISO auditi ettevalmistuseks, ehitatud koos konfidentsiaalse ettevõttekliendiga. Esimene versioon keskendus ISO 9001-le, tulevase rakendatavusega spetsialiseeritumatele standarditele — autotööstus (ISO 16949) ja meditsiin (ISO 13485).',
        scope: ['Äri-avastus ja reaalse auditi-ettevalmistuse töövoo protsessikaardistus', 'TI teostatavuse hindamine auditivaldkonna ekspertidega', 'Prototüübi tarne selgete piiridega eksperthinnangu ja vastavustundlike otsuste ümber'],
        outcome: ['Lai „TI audiitoritele“ idee muudeti praktiliseks, testitavaks piloodiks', 'Määratletud äriloogika, tehnilised piirid ja teekaart ISO 16949 ja ISO 13485 suunas'],
      },
      'click-grow': {
        focus: 'Kliendianalüütika D2C nutiaia brändile',
        sector: 'Jaemüük / D2C', years: 'EL · 2022–2023',
        image: 'Kliendisegmendid / elutsükli töölaud',
        what: 'Kliendianalüütika, segmenteerimine ja personaliseerimine, üles ehitatud seadme ja tarvikute käitumisele.',
        scope: ['Kliendianalüütika ja segmenteerimine üle kogu D2C-baasi', 'Tehingute käitumine ühendatud tootega seotuse signaalidega', 'Personaliseerimise tugi hoidmisele ja elutsükli turundusele'],
        outcome: ['Kliendikäitumine muudetud hoidmise planeerimiseks kasutatavaks', 'Elutsükli turundus rajatud päris kliendiandmetele'],
      },
      'csc-telecom': {
        focus: 'Kliendianalüütika, tariifianalüüs ja churn-modelleerimine TravelSIM-ile',
        sector: 'Telekom', years: 'Balti · 2023–praegu',
        image: 'TravelSIM — reisi-eSIM bränd',
        what: 'Käitumuslik segmenteerimine, personaliseeritud kommunikatsioon, tariifide ja promo-vastuse analüüs ning esimesed churn-mudelid hoidmiseks — TravelSIM-ile, CSC Telecomi reisi-eSIM brändile.',
        scope: ['Käitumuslik segmenteerimine ja personaliseeritud kommunikatsiooni disain', 'Tariifistruktuuri ja paketikonfiguratsiooni analüüs', 'Promo-vastuse hindamine kohordi kaupa', 'Esimesed churn-mudelid riskiklientide suunamiseks hoidmisesse'],
        outcome: ['Riskigrupid varem nähtavad, mitte üldises liikluses kadunud', 'Turundus- ja äriotsused ühel kliendibaasil'],
      },
      'gte': {
        focus: 'Kütusetõhususe optimeerimine kompressori disainis',
        sector: 'Tööstus', years: '2022–2023',
        image: 'Kompressori tõhususe mudel / inseneeria vaade',
        what: 'Äriprobleemi raamimine, arhitektuur, mis ühendab operatsioonianalüüsi, masinõppe ja füüsilised inseneeriareeglid, meeskonna kujundamise tugi ja arenduse järelevalve.',
        scope: ['Kütusetõhususe optimeerimise probleemi raamimine kompressori disainis', 'Arhitektuur, mis ühendab OR-i, ML-i ja füüsilised inseneeriareeglid', 'Meeskonna koosseisu soovitused', 'Tehnilise arenduse järelevalve'],
        outcome: ['Mudel kasutusel aktiivses disainitöös', 'Kütusetõhususe võidud valideeritud inseneeria lähtetasemete vastu'],
      },
      'forrest-taxi': {
        focus: 'Dünaamilise hinnastamise arhitektuur ja teostatavus',
        sector: 'Liikuvus', years: 'Balti & Põhjamaad · 2023',
        image: 'Taxigo — sõidujagamine',
        what: 'Äriprobleemi raamimine, siht­arhitektuur, ML-prototüüp teostatavuse tõestamiseks, teostaja-tarnija tugi ja tulemuste kontroll lähtetaseme vastu.',
        scope: ['Rakendusesisese hinnastamise probleemi raamimine', 'Sihtarhitektuuri määratlemine', 'ML-prototüüp teostatavuse tõestamiseks', 'Tarnija valiku tugi ja arenduse järelevalve'],
        outcome: ['Teostatavus tõestatud enne täisehituse lubamist', 'Sihtarhitektuur joondatud äriprobleemiga', 'Juurutus kontrollitud mõõdetava lähtetaseme vastu'],
      },
      'kricon': {
        focus: 'Tegevuse nähtavus rahvusvahelisele logistikale',
        sector: 'Logistika', years: 'Rahvusvaheline · 2023–2024',
        image: 'Anomaalia / klasterdamise signaalide töölaud',
        what: 'Aruandlustaristu, anomaaliate tuvastamine ja klasterdamismudelid, mis muudavad tegevusandmed tegevustaseme signaalideks.',
        scope: ['Aruandlustaristu üle kogu tegevuse', 'Anomaaliate tuvastamine tegevusandmetel', 'Klasterdamismudelid tegevustaseme signaalideks'],
        outcome: ['Tegevusprobleemid esile toodud signaalidena, mitte tagantjärele', 'Aruandlusbaas, millel tegevus saab töötada'],
      },
      'red-petroleum': {
        focus: 'Mitmeaastane andme- & TI-transformatsioon üle võrgu',
        sector: 'Kütus', years: 'Kesk-Aasia · 2024–praegu',
        image: 'Optimus — hankenõustaja',
        what: 'TI-valmidus ja teekaart, DWH/BI-vundament, kliendisegmenteerimine, pettusevastane analüütika, sisemised assistendid ja automatiseerimine maksetes, logistikas ja hangetes.',
        scope: ['Teekaart ja juhtkonna joondamine andme- & TI-programmile', 'DWH/BI-vundament: 24+ töölauda üle 9 osakonna', '380 000+ lojaalsusliikme segmenteerimine; pettusevastane üle 30 mln+ tehingu', 'NL-analüütika agent, sisemised RAG-assistendid, makse-/logistika-automatiseerimine, esimene hankeoptimeerimise toode', 'Kliendi sisemise andmemeeskonna värbamine ja koolitamine'],
        outcome: ['Suurem osa teekaardist teostatud', 'Sisemine andmemeeskond töötab nüüd iseseisvalt', 'Aruandlus, mis võttis päevi, võtab nüüd minuteid', 'Esimesed sisemised ML-mudelid tootmises'],
      },
      'loyalty-reactivation': {
        name: 'Kütuse jaemüügi lojaalsus',
        focus: 'Uinunud klientide taasaktiveerimine segmenteerimise kaudu',
        sector: 'Kütus', years: '2024–2025',
        image: 'RFM-segmendid juurutatud lojaalsusrakendusse',
        what: 'Probleemi raamimine turundusjuhtkonnaga, hübriidne RFM + klasterdamise segmenteerimine, 11 rakendusse juurutatud segmenti ja A/B-testitud kampaaniad.',
        scope: ['Hübriidne RFM + GMM-klasterdamise segmenteerimise prototüüp', '11 äriga valideeritud segmenti', 'Segmendid juurutatud lojaalsuse mobiilirakendusse', 'A/B-testitud kampaaniad ja üle antud automaatne värskenduskonveier'],
        outcome: ['~12 000 uinunud klienti taasaktiveeritud', 'Segmendid võetud kasutusele järgmises turundustsüklis', 'Automaatne ML-konveier värskendab nüüd programmi'],
      },
      'nl-analytics': {
        name: 'Ettevõtte analüütika agent',
        focus: 'Loomuliku keele analüütika agent juhtkonnale',
        sector: 'Ettevõtte TI', years: 'Ettevõtte DWH · 2025',
        image: 'NL-analüütika agent / semantiline kiht',
        what: 'Äriline semantiline kiht, KPI-de maandamine, kuldne treeningkomplekt ja tugi mitme-agendi analüütika arhitektuurile.',
        scope: ['KPI-definitsioonid, ärihierarhiad ja loogika maandamine', 'Kuldne K&V komplekt täpsuse häälestamiseks', 'Tugi spetsialiseeritud mitme-agendi arhitektuurile küsimuse tüübi järgi', 'Sisemiste töötajate ettevalmistamine selle hooldamiseks ja laiendamiseks'],
        outcome: ['90%+ vastuste täpsus tootmises', 'Juhtkond saab ettevõtte andmeid otse pärida', 'Sisemised töötajad koolitatud süsteemi käitama ja parandama'],
      },
    },
  },
};

export function useCaseStudies(locale: string | undefined): CaseStudiesDict {
  return CASE_STUDIES[(locale as Locale)] ?? CASE_STUDIES.en;
}
