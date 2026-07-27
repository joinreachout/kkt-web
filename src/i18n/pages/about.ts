// /about content. German careful; Estonian first pass (verify).
// Personal names, company chips, and the legal entity name stay verbatim;
// only labels, role lines, and prose are translated.
import type { Locale } from '../config';

export type AboutDict = {
  meta: { title: string; description: string };
  introLabel: string;
  h1Accent: string; h1Rest: string;
  lede: string;
  statLabels: string[];      // parallel to the page's stat nums (4)
  partnersLabel: string; partnersH2: string; partnersBodyHtml: string;
  teamLabel: string; teamH2: string;
  groupDomain: string; groupTechnical: string;
  assocChip: string;
  benchNote: string;
  legalHtml: string;
  lines: Record<string, string>;   // role line keyed by member name
};

export const ABOUT: Record<Locale, AboutDict> = {
  en: {
    meta: {
      title: 'About — KKT',
      description: 'Kitty Kat Technologies — a senior data & AI delivery firm headquartered in Tallinn, Estonia, with affiliates in Bangkok and Georgia.',
    },
    introLabel: 'About',
    h1Accent: 'Kitty Kat', h1Rest: ' Technologies.',
    lede: 'Kitty Kat Technologies is a data and AI advisory and implementation firm specialising in fuel retail and mid-sized retail. We help operators improve customer revenue, inventory and availability, margins, loss control and management productivity — starting from the business question, and leading the work from business case and solution architecture through to deployment, adoption, and a system your team runs. Headquartered in Tallinn, Estonia (EU), with affiliates in Bangkok and Georgia.',
    statLabels: ['Tallinn HQ · EU entity', 'AI & ML projects delivered', 'large-scale AI & data transformations', 'typical client revenue'],
    partnersLabel: 'Partnerships',
    partnersH2: 'Who we work alongside.',
    partnersBodyHtml: 'We partner with <strong>Noventiq</strong>, a global digital-transformation and cybersecurity provider, to bring data and AI into business operations across EMEA, Central Asia, and South-East Asia.',
    teamLabel: 'Team & experts',
    teamH2: 'One team, end to end.',
    groupDomain: 'Domain',
    groupTechnical: 'Technical',
    assocChip: 'Associated expert',
    benchNote: 'Plus a wider bench of data scientists, ML engineers, data engineers, analysts, domain specialists, and external experts as needed.',
    legalHtml: 'Registered as <strong>Kitty Kat Technologies OÜ</strong>, Tallinn, Estonia — an EU entity.',
    lines: {
      'Pavel Mityshkin': '15+ years in FMCG/Retail, RGM and Commercial Excellence',
      'Yana Kujrikhina': '10+ years in Oil & Gas, process consulting and digitalization',
      'Nikolay Terentyev': '15+ years in banking, finance operations and digital transformation',
      'Pavel Gabaidullin': '19+ years in enterprise procurement and international supply chains',
      'Levan Buachidze': '5+ years in digital logistics, supply chain and retail category management',
      'George Shevardenidze': '15+ years in technical consulting and operational transformation',
      'Dennis Nepomniashy': '20+ years in HoReCa and business informatics',
      'Nageye Rascid': '20+ years in enterprise data, cloud and AI platforms',
      'Denis Perov': '15+ years in software engineering and AI/ML solution architecture',
      'Igor Trifonov': '10+ years in data engineering, BI and enterprise data solutions',
    },
  },

  de: {
    meta: {
      title: 'Über uns — KKT',
      description: 'Kitty Kat Technologies — ein Senior-Lieferhaus für Daten & KI mit Sitz in Tallinn, Estland, und Niederlassungen in Bangkok und Georgien.',
    },
    introLabel: 'Über uns',
    h1Accent: 'Kitty Kat', h1Rest: ' Technologies.',
    lede: 'Ein Senior-Lieferhaus für Daten & KI mit Sitz in Tallinn, Estland, und Niederlassungen in Bangkok und Georgien. Wir verbinden Branchenexpertise mit der technischen Umsetzung, um Daten und KI an die Arbeit zu bringen — und am Laufen zu halten.',
    statLabels: ['Hauptsitz Tallinn · EU-Gesellschaft', 'KI- & ML-Projekte geliefert', 'groß angelegte KI- & Daten-Transformationen', 'typischer Kundenumsatz'],
    partnersLabel: 'Partnerschaften',
    partnersH2: 'Mit wem wir zusammenarbeiten.',
    partnersBodyHtml: 'Wir arbeiten mit <strong>Noventiq</strong> zusammen, einem globalen Anbieter für digitale Transformation und Cybersicherheit, um Daten und KI in die Geschäftsabläufe in EMEA, Zentralasien und Südostasien zu bringen.',
    teamLabel: 'Team & Experten',
    teamH2: 'Ein Team, durchgängig.',
    groupDomain: 'Fachbereich',
    groupTechnical: 'Technik',
    assocChip: 'Assoziierter Experte',
    benchNote: 'Dazu ein breiterer Pool an Data Scientists, ML-Ingenieuren, Data Engineers, Analysten, Fachspezialisten und externen Experten nach Bedarf.',
    legalHtml: 'Eingetragen als <strong>Kitty Kat Technologies OÜ</strong>, Tallinn, Estland — eine EU-Gesellschaft.',
    lines: {
      'Pavel Mityshkin': '15+ Jahre in FMCG/Einzelhandel, RGM und Commercial Excellence',
      'Yana Kujrikhina': '10+ Jahre in Öl & Gas, Prozessberatung und Digitalisierung',
      'Nikolay Terentyev': '15+ Jahre in Banking, Finanzbetrieb und digitaler Transformation',
      'Pavel Gabaidullin': '19+ Jahre in Unternehmensbeschaffung und internationalen Lieferketten',
      'Levan Buachidze': '5+ Jahre in digitaler Logistik, Supply Chain und Retail-Category-Management',
      'George Shevardenidze': '15+ Jahre in technischer Beratung und operativer Transformation',
      'Dennis Nepomniashy': '20+ Jahre in HoReCa und Wirtschaftsinformatik',
      'Nageye Rascid': '20+ Jahre in Enterprise-Daten, Cloud und KI-Plattformen',
      'Denis Perov': '15+ Jahre in Softwareentwicklung und KI/ML-Lösungsarchitektur',
      'Igor Trifonov': '10+ Jahre in Data Engineering, BI und Enterprise-Datenlösungen',
    },
  },

  et: {
    meta: {
      title: 'Meist — KKT',
      description: 'Kitty Kat Technologies — kogenud andme- & TI-teostuse ettevõte peakorteriga Tallinnas, Eestis, ning sidusettevõtetega Bangkokis ja Gruusias.',
    },
    introLabel: 'Meist',
    h1Accent: 'Kitty Kat', h1Rest: ' Technologies.',
    lede: 'Kogenud andme- & TI-teostuse ettevõte peakorteriga Tallinnas, Eestis, ning sidusettevõtetega Bangkokis ja Gruusias. Ühendame valdkonna asjatundlikkuse tehnilise teostusega, et panna andmed ja TI tööle — ja hoida need töös.',
    statLabels: ['Peakorter Tallinn · EL-i üksus', 'TI- & ML-projekti teostatud', 'suuremahulist TI- & andmetransformatsiooni', 'tüüpiline kliendi käive'],
    partnersLabel: 'Partnerlused',
    partnersH2: 'Kellega me koos töötame.',
    partnersBodyHtml: 'Teeme koostööd ettevõttega <strong>Noventiq</strong>, ülemaailmse digitaalse transformatsiooni ja küberturbe pakkujaga, et tuua andmed ja TI ärioperatsioonidesse üle EMEA, Kesk-Aasia ja Kagu-Aasia.',
    teamLabel: 'Tiim & eksperdid',
    teamH2: 'Üks tiim, otsast lõpuni.',
    groupDomain: 'Valdkond',
    groupTechnical: 'Tehniline',
    assocChip: 'Assotsieerunud ekspert',
    benchNote: 'Lisaks laiem pink andmeteadlasi, ML-insenere, andmeinsenere, analüütikuid, valdkonnaspetsialiste ja väliseksperte vastavalt vajadusele.',
    legalHtml: 'Registreeritud kui <strong>Kitty Kat Technologies OÜ</strong>, Tallinn, Eesti — EL-i üksus.',
    lines: {
      'Pavel Mityshkin': '15+ aastat FMCG/jaemüügis, RGM ja Commercial Excellence',
      'Yana Kujrikhina': '10+ aastat nafta & gaasi alal, protsessikonsultatsioon ja digitaliseerimine',
      'Nikolay Terentyev': '15+ aastat panganduses, finantsoperatsioonides ja digitaalses transformatsioonis',
      'Pavel Gabaidullin': '19+ aastat ettevõtte hangetes ja rahvusvahelistes tarneahelates',
      'Levan Buachidze': '5+ aastat digitaalses logistikas, tarneahelas ja jaemüügi kategooriahalduses',
      'George Shevardenidze': '15+ aastat tehnilises konsultatsioonis ja operatiivses transformatsioonis',
      'Dennis Nepomniashy': '20+ aastat HoReCa-s ja ärinformaatikas',
      'Nageye Rascid': '20+ aastat ettevõtte andmetes, pilves ja TI-platvormidel',
      'Denis Perov': '15+ aastat tarkvaraarenduses ja TI/ML-lahenduste arhitektuuris',
      'Igor Trifonov': '10+ aastat andmetehnoloogias, BI-s ja ettevõtte andmelahendustes',
    },
  },
};

export function useAbout(locale: string | undefined): AboutDict {
  return ABOUT[(locale as Locale)] ?? ABOUT.en;
}
