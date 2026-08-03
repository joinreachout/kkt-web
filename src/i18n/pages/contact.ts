// /contact content. German careful; Estonian first pass (verify).
// Contact values (phone, address, email, LinkedIn URL, legal name) are
// language-invariant and stay in the page; only labels and prose translate.
import type { Locale } from '../config';

export type ContactDict = {
  meta: { title: string; description: string };
  introLabel: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  lede: string;
  cardLabel: string; emailBtn: string;
  detailLabels: { phone: string; office: string; linkedin: string; legal: string };
  nextLabel: string; nextH2: string;
  steps: { name: string; body: string }[];
  quote: string;
};

export const CONTACT: Record<Locale, ContactDict> = {
  en: {
    meta: {
      title: 'Contact — KKT',
      description: "Tell us what your business is trying to move — margin, cash, availability, customer value, or productivity — and we'll tell you whether AI and PMO discipline can earn their place. Tallinn, EU.",
    },
    introLabel: 'Contact',
    h1Pre: 'Tell us what you’re trying to ', h1Accent: 'move', h1Post: '.',
    lede: 'Tell us what the business needs to move — margin, cash, availability, customer value, or productivity. We’ll tell you whether data and AI can realistically help.',
    cardLabel: 'Write to a senior person',
    emailBtn: 'Email us',
    detailLabels: { phone: 'Phone', office: 'Office', linkedin: 'LinkedIn', legal: 'Legal' },
    nextLabel: 'What happens next',
    nextH2: 'After you email.',
    steps: [
      { name: 'Reply within two working days', body: 'One of us reads your note and writes back. No SDR chain, no scheduling forms.' },
      { name: 'A 30-minute call', body: 'A senior person on our side. We hear the situation honestly and tell you whether a diagnostic makes sense — or whether the answer is “not us”.' },
      { name: 'If a fit, scope a diagnostic', body: 'Two weeks, fixed shape, a decision-grade readout. See /approach for the day-by-day.' },
    ],
    quote: 'If a diagnostic is not the right move, we’ll say so on the first call. No mystery sales motion.',
  },

  de: {
    meta: {
      title: 'Kontakt — KKT',
      description: 'Sagen Sie uns, was Ihr Unternehmen bewegen will — Marge, Liquidität, Verfügbarkeit, Kundenwert oder Produktivität — und wir sagen Ihnen, ob KI und PMO-Disziplin ihren Platz verdienen. Tallinn, EU.',
    },
    introLabel: 'Kontakt',
    h1Pre: 'Sagen Sie uns, was Sie ', h1Accent: 'bewegen', h1Post: ' wollen.',
    lede: 'Sagen Sie uns, was das Geschäft bewegen muss — Marge, Liquidität, Verfügbarkeit, Kundenwert oder Produktivität. Wir sagen Ihnen, ob Daten und KI realistisch helfen können.',
    cardLabel: 'Schreiben Sie an einen Senior',
    emailBtn: 'E-Mail an uns',
    detailLabels: { phone: 'Telefon', office: 'Büro', linkedin: 'LinkedIn', legal: 'Rechtsträger' },
    nextLabel: 'Wie es weitergeht',
    nextH2: 'Nachdem Sie geschrieben haben.',
    steps: [
      { name: 'Antwort binnen zwei Werktagen', body: 'Einer von uns liest Ihre Nachricht und antwortet. Keine SDR-Kette, keine Terminformulare.' },
      { name: 'Ein 30-minütiges Gespräch', body: 'Eine Senior-Person auf unserer Seite. Wir hören die Situation ehrlich an und sagen Ihnen, ob eine Diagnose sinnvoll ist — oder ob die Antwort „nicht wir“ lautet.' },
      { name: 'Wenn es passt, eine Diagnose abstecken', body: 'Zwei Wochen, feste Form, ein entscheidungsreifer Bericht. Den Tag-für-Tag-Ablauf siehe /approach.' },
    ],
    quote: 'Wenn eine Diagnose nicht der richtige Schritt ist, sagen wir das im ersten Gespräch. Kein undurchsichtiges Verkaufsmanöver.',
  },

  et: {
    meta: {
      title: 'Kontakt — KKT',
      description: 'Ütle meile, mida su äri tahab liigutada — marginaal, raha, saadavus, kliendiväärtus või tootlikkus — ja me ütleme, kas TI ja PMO-distsipliin teenivad oma koha välja. Tallinn, EL.',
    },
    introLabel: 'Kontakt',
    h1Pre: 'Ütle meile, mida sa tahad ', h1Accent: 'liigutada', h1Post: '.',
    lede: 'Ütle meile, mida äri vajab liigutada — marginaal, raha, saadavus, kliendiväärtus või tootlikkus. Me ütleme, kas andmed ja TI saavad realistlikult aidata.',
    cardLabel: 'Kirjuta kogenud inimesele',
    emailBtn: 'Kirjuta meile',
    detailLabels: { phone: 'Telefon', office: 'Kontor', linkedin: 'LinkedIn', legal: 'Juriidiline' },
    nextLabel: 'Mis juhtub edasi',
    nextH2: 'Pärast seda, kui kirjutad.',
    steps: [
      { name: 'Vastus kahe tööpäeva jooksul', body: 'Üks meist loeb su sõnumi ja vastab. Ei mingit SDR-ahelat ega broneerimisvorme.' },
      { name: '30-minutiline kõne', body: 'Kogenud inimene meie poolt. Kuulame olukorra ausalt ära ja ütleme, kas diagnostika on mõttekas — või kas vastus on „mitte meie“.' },
      { name: 'Kui sobib, kavanda diagnostika', body: 'Kaks nädalat, fikseeritud kuju, otsustusküps ülevaade. Päev-päevalt vaata /approach.' },
    ],
    quote: 'Kui diagnostika pole õige samm, ütleme seda esimeses kõnes. Mingit salapärast müügimanöövrit pole.',
  },

  // Thai — first pass, PENDING native review.
  th: {
    meta: {
      title: 'ติดต่อ — KKT',
      description: 'บอกเราว่าธุรกิจของคุณอยากขยับอะไร — มาร์จิน เงินสด ความพร้อมของสินค้า คุณค่าต่อลูกค้า หรือประสิทธิภาพ — แล้วเราจะบอกว่า AI และวินัยแบบ PMO คุ้มค่าที่จะใช้หรือไม่ Tallinn, EU.',
    },
    introLabel: 'ติดต่อ',
    h1Pre: 'บอกเราว่าคุณอยาก', h1Accent: 'ขยับ', h1Post: 'อะไร',
    lede: 'บอกเราว่าธุรกิจต้องขยับอะไร — มาร์จิน เงินสด ความพร้อมของสินค้า คุณค่าต่อลูกค้า หรือประสิทธิภาพ เราจะบอกว่าข้อมูลและ AI ช่วยได้จริงหรือไม่',
    cardLabel: 'เขียนถึงผู้บริหารระดับอาวุโส',
    emailBtn: 'อีเมลถึงเรา',
    detailLabels: { phone: 'โทรศัพท์', office: 'สำนักงาน', linkedin: 'LinkedIn', legal: 'นิติบุคคล' },
    nextLabel: 'ขั้นตอนถัดไป',
    nextH2: 'หลังจากคุณส่งอีเมล',
    steps: [
      { name: 'ตอบกลับภายในสองวันทำการ', body: 'หนึ่งในทีมเราอ่านข้อความของคุณและตอบกลับ ไม่มีสาย SDR ไม่มีแบบฟอร์มนัดหมาย' },
      { name: 'โทรคุย 30 นาที', body: 'ผู้บริหารอาวุโสจากฝั่งเรา เราฟังสถานการณ์อย่างตรงไปตรงมา และบอกว่าการวิเคราะห์เหมาะสมหรือไม่ — หรือคำตอบคือ “ไม่ใช่เรา”' },
      { name: 'ถ้าเหมาะ วางขอบเขตการวิเคราะห์', body: 'สองสัปดาห์ รูปแบบตายตัว ผลสรุปพร้อมตัดสินใจ ดูรายละเอียดวันต่อวันที่ /approach' },
    ],
    quote: 'ถ้าการวิเคราะห์ไม่ใช่ก้าวที่ถูก เราจะบอกตั้งแต่โทรครั้งแรก ไม่มีลูกเล่นการขายที่คลุมเครือ',
  },
};

export function useContact(locale: string | undefined): ContactDict {
  return CONTACT[(locale as Locale)] ?? CONTACT.en;
}
