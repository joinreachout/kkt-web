// Translation strings, keyed by locale. German is a careful first pass;
// Estonian is flagged "to be verified" pending a native review (HQ is in
// Tallinn). Brand names (KKT, Optimus, Codoo, Red Petroleum) stay untranslated.
//
// NOTE (WIP): this currently covers the common chrome (nav/footer/switcher)
// and the homepage hero + "who we serve". The remaining homepage sections and
// other pages are being rolled out next.

import type { Locale } from './config';

type Dict = {
  nav: { retail: string; fuel: string; solutions: string; cases: string; insights: string; about: string };
  actions: { advisor: string; diagnostic: string; menu: string; switchLang: string };
  footer: {
    tag: string;
    industries: string;
    work: string;
    company: string;
    contact: string;
    legal: (year: number) => string;
  };
  hero: {
    eyebrow: string;
    titleA: string; titleAccent1: string; titleB: string; titleAccent2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    vSources: string[]; vSolution: string; vOutcome: string; vRoi: string;
  };
  who: {
    label: string;
    title: string;
    lede: string;
    industries: string[];
    more: string;
  };
};

export const STRINGS: Record<Locale, Dict> = {
  en: {
    nav: { retail: 'Retail', fuel: 'Fuel retail', solutions: 'Our Solutions', cases: 'Case studies', insights: 'Blog', about: 'About' },
    actions: { advisor: 'Ask AI Advisor', diagnostic: 'Book a diagnostic', menu: 'Open menu', switchLang: 'Language' },
    footer: {
      tag: 'Data, AI and automation that run in your operations.',
      industries: 'Industries', work: 'Work', company: 'Company', contact: 'Contact',
      legal: (y) => `© ${y} Kitty Kat Technologies OÜ · Jõe 7, 10151 Tallinn, Estonia`,
    },
    hero: {
      eyebrow: 'Business-first Data & AI',
      titleA: 'We help companies move from ', titleAccent1: 'business questions',
      titleB: ' to practical solutions in ', titleAccent2: 'data, AI, and automation',
      sub: 'Domain expertise and technical delivery in one team — from the business question to a solution that runs in your operations.',
      ctaPrimary: 'See how we work', ctaSecondary: 'View selected work',
      vSources: ['Strategy', 'Operations', 'Data', 'IT systems', 'Finance'],
      vSolution: 'PRACTICAL AI SOLUTION', vOutcome: 'BUSINESS OUTCOME', vRoi: 'measurable ROI',
    },
    who: {
      label: 'Who we work with',
      title: 'Mid-enterprise companies in traditional, asset-heavy industries.',
      lede: 'Companies with established operations, legacy systems, and complex processes — where the cost of getting things wrong is real and the value of a working solution is measurable. We start from the business question, not the technology.',
      industries: ['Oil & Gas', 'Energy', 'Retail', 'Fuel retail', 'Logistics'],
      more: '+ telecom, mobility, industry',
    },
  },

  de: {
    nav: { retail: 'Einzelhandel', fuel: 'Kraftstoffhandel', solutions: 'Unsere Lösungen', cases: 'Fallstudien', insights: 'Blog', about: 'Über uns' },
    actions: { advisor: 'KI-Berater fragen', diagnostic: 'Diagnose buchen', menu: 'Menü öffnen', switchLang: 'Sprache' },
    footer: {
      tag: 'Daten, KI und Automatisierung, die in Ihrem Betrieb laufen.',
      industries: 'Branchen', work: 'Projekte', company: 'Unternehmen', contact: 'Kontakt',
      legal: (y) => `© ${y} Kitty Kat Technologies OÜ · Jõe 7, 10151 Tallinn, Estland`,
    },
    hero: {
      eyebrow: 'Daten & KI mit Geschäftsfokus',
      titleA: 'Wir bringen Unternehmen von ', titleAccent1: 'geschäftlichen Fragen',
      titleB: ' zu praktischen Lösungen in ', titleAccent2: 'Daten, KI und Automatisierung',
      sub: 'Fachwissen und technische Umsetzung in einem Team — von der geschäftlichen Frage zu einer Lösung, die in Ihrem Betrieb läuft.',
      ctaPrimary: 'So arbeiten wir', ctaSecondary: 'Ausgewählte Arbeiten',
      vSources: ['Strategie', 'Betrieb', 'Daten', 'IT-Systeme', 'Finanzen'],
      vSolution: 'PRAKTISCHE KI-LÖSUNG', vOutcome: 'GESCHÄFTSERGEBNIS', vRoi: 'messbarer ROI',
    },
    who: {
      label: 'Mit wem wir arbeiten',
      title: 'Mittelständische Unternehmen in traditionellen, anlagenintensiven Branchen.',
      lede: 'Unternehmen mit etablierten Abläufen, Altsystemen und komplexen Prozessen — wo Fehler echte Kosten verursachen und der Wert einer funktionierenden Lösung messbar ist. Wir beginnen bei der geschäftlichen Frage, nicht bei der Technologie.',
      industries: ['Öl & Gas', 'Energie', 'Einzelhandel', 'Kraftstoffhandel', 'Logistik'],
      more: '+ Telekommunikation, Mobilität, Industrie',
    },
  },

  et: {
    nav: { retail: 'Jaekaubandus', fuel: 'Kütuse jaemüük', solutions: 'Meie lahendused', cases: 'Juhtumiuuringud', insights: 'Blogi', about: 'Meist' },
    actions: { advisor: 'Küsi TI-nõustajalt', diagnostic: 'Broneeri diagnostika', menu: 'Ava menüü', switchLang: 'Keel' },
    footer: {
      tag: 'Andmed, TI ja automatiseerimine, mis töötavad teie igapäevatöös.',
      industries: 'Tööstusharud', work: 'Tööd', company: 'Ettevõte', contact: 'Kontakt',
      legal: (y) => `© ${y} Kitty Kat Technologies OÜ · Jõe 7, 10151 Tallinn, Eesti`,
    },
    hero: {
      eyebrow: 'Ärist lähtuv andmed ja tehisintellekt',
      titleA: 'Aitame ettevõtetel liikuda ', titleAccent1: 'äriküsimustelt',
      titleB: ' praktiliste lahendusteni valdkondades ', titleAccent2: 'andmed, tehisintellekt ja automatiseerimine',
      sub: 'Valdkonna teadmised ja tehniline teostus ühes meeskonnas — äriküsimusest lahenduseni, mis töötab teie igapäevatöös.',
      ctaPrimary: 'Kuidas me töötame', ctaSecondary: 'Valitud tööd',
      vSources: ['Strateegia', 'Operatsioonid', 'Andmed', 'IT-süsteemid', 'Rahandus'],
      vSolution: 'PRAKTILINE TI-LAHENDUS', vOutcome: 'ÄRITULEM', vRoi: 'mõõdetav ROI',
    },
    who: {
      label: 'Kellega me töötame',
      title: 'Keskmise suurusega ettevõtted traditsioonilistes, varamahukates tööstusharudes.',
      lede: 'Ettevõtted väljakujunenud tegevuse, pärandsüsteemide ja keerukate protsessidega — kus vigade hind on reaalne ja toimiva lahenduse väärtus mõõdetav. Alustame äriküsimusest, mitte tehnoloogiast.',
      industries: ['Nafta ja gaas', 'Energeetika', 'Jaekaubandus', 'Kütuse jaemüük', 'Logistika'],
      more: '+ telekommunikatsioon, liikuvus, tööstus',
    },
  },
};

export function useStrings(locale: string | undefined): Dict {
  return STRINGS[(locale as Locale)] ?? STRINGS.en;
}
