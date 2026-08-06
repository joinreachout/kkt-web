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
      titleA: 'We help companies ', titleAccent1: 'improve revenue, margins and productivity',
      titleB: ' with Data, Process enhancement & AI', titleAccent2: '',
      sub: 'For fuel retail and mid-sized retail operators. Domain expertise and technical delivery in one team — through to a solution that runs in your operations.',
      ctaPrimary: 'See how we work', ctaSecondary: 'View selected work',
      vSources: ['Strategy', 'Operations', 'Data', 'IT systems', 'Finance'],
      vSolution: 'PRACTICAL AI SOLUTION', vOutcome: 'BUSINESS OUTCOME', vRoi: 'measurable ROI',
    },
    who: {
      label: 'Who we work with',
      title: 'Mid-sized fuel-retail networks and retailers.',
      lede: 'We specialise in fuel retail and mid-sized retail — and work with adjacent asset-heavy operators — with established operations, legacy systems, and complex processes, where the cost of getting things wrong is real and the value of a working solution is measurable.',
      industries: ['Fuel retail', 'Retail', 'Energy', 'Oil & Gas', 'Logistics'],
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
      titleA: 'Wir helfen Unternehmen, ', titleAccent1: 'Umsatz, Margen und Produktivität',
      titleB: ' zu steigern — mit Daten, Prozessoptimierung & KI', titleAccent2: '',
      sub: 'Für Betreiber im Tankstellen- und mittelständischen Einzelhandel. Fachwissen und technische Umsetzung in einem Team — bis zur Lösung, die in Ihrem Betrieb läuft.',
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
      titleA: 'Aitame ettevõtetel kasvatada ', titleAccent1: 'käivet, marginaale ja tootlikkust',
      titleB: ' — andmete, protsesside parendamise & tehisintellekti abil', titleAccent2: '',
      sub: 'Kütuse jaemüügi ja keskmise suurusega jaemüügi ettevõtetele. Valdkonna teadmised ja tehniline teostus ühes meeskonnas — kuni lahenduseni, mis töötab teie igapäevatöös.',
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

  // Thai — first pass, PENDING native review (same status Estonian shipped in).
  th: {
    nav: { retail: 'ค้าปลีก', fuel: 'ค้าปลีกน้ำมัน', solutions: 'โซลูชันของเรา', cases: 'กรณีศึกษา', insights: 'บล็อก', about: 'เกี่ยวกับเรา' },
    actions: { advisor: 'ถาม AI Advisor', diagnostic: 'จองเซสชันวิเคราะห์', menu: 'เปิดเมนู', switchLang: 'ภาษา' },
    footer: {
      tag: 'ข้อมูล AI และระบบอัตโนมัติ ที่ทำงานได้จริงในการดำเนินงานของคุณ',
      industries: 'อุตสาหกรรม', work: 'ผลงาน', company: 'บริษัท', contact: 'ติดต่อ',
      legal: (y) => `© ${y} Kitty Kat Technologies OÜ · Jõe 7, 10151 Tallinn, Estonia`,
    },
    hero: {
      eyebrow: 'ข้อมูลและ AI ที่เริ่มจากโจทย์ธุรกิจ',
      titleA: 'เราช่วยให้องค์กร', titleAccent1: 'เพิ่มรายได้ มาร์จิน และผลิตภาพ',
      titleB: ' ด้วยข้อมูล การปรับปรุงกระบวนการ และ AI', titleAccent2: '',
      sub: 'สำหรับผู้ประกอบการค้าปลีกน้ำมันและค้าปลีกขนาดกลาง ความเชี่ยวชาญในอุตสาหกรรมและการลงมือทำจริงอยู่ในทีมเดียวกัน — ต่อเนื่องจนถึงโซลูชันที่ทำงานได้จริงในการดำเนินงานของคุณ',
      ctaPrimary: 'ดูวิธีการทำงานของเรา', ctaSecondary: 'ดูผลงานที่คัดสรร',
      vSources: ['กลยุทธ์', 'การดำเนินงาน', 'ข้อมูล', 'ระบบไอที', 'การเงิน'],
      vSolution: 'โซลูชัน AI ที่ใช้ได้จริง', vOutcome: 'ผลลัพธ์ทางธุรกิจ', vRoi: 'ROI ที่วัดผลได้',
    },
    who: {
      label: 'เราทำงานกับใคร',
      title: 'เครือข่ายค้าปลีกน้ำมันและผู้ค้าปลีกขนาดกลาง',
      lede: 'เราเชี่ยวชาญด้านค้าปลีกน้ำมันและค้าปลีกขนาดกลาง — และทำงานกับธุรกิจที่ใช้สินทรัพย์หนักในกลุ่มใกล้เคียง — ที่มีการดำเนินงานตั้งตัวแล้ว ระบบเดิม และกระบวนการที่ซับซ้อน ซึ่งความผิดพลาดมีต้นทุนจริง และคุณค่าของโซลูชันที่ใช้ได้จริงนั้นวัดผลได้',
      industries: ['ค้าปลีกน้ำมัน', 'ค้าปลีก', 'พลังงาน', 'น้ำมันและก๊าซ', 'โลจิสติกส์'],
      more: '+ โทรคมนาคม โมบิลิตี้ อุตสาหกรรม',
    },
  },
};

export function useStrings(locale: string | undefined): Dict {
  return STRINGS[(locale as Locale)] ?? STRINGS.en;
}
