// /solutions content. German careful; Estonian first pass (verify);
// Thai first pass, PENDING native review.
//
// The page is a grid of equal solution tiles, so per-solution text lives in
// `items`, keyed by the same id the page uses for its structural data (mark,
// preview image, href). Adding a solution = one entry here per locale plus one
// entry in SOLUTIONS_LIST in the page. Product feature detail belongs on each
// product's own page, not on this index.
import type { Locale, LocaleDict } from '../config';

export type SolutionItem = {
  /** Who it is built for — one short line under the name. */
  kind: string;
  /** Two sentences, no more: what it is and what it does. */
  body: string;
  /** Status chip: how far along the product is. */
  status: string;
  /** Link label at the foot of the tile. */
  link: string;
};

export type SolutionsDict = {
  meta: { title: string; description: string };
  introLabel: string; h1: string; lede: string;
  items: Record<'optimus' | 'codoo', SolutionItem>;
  ctaHeading: string; ctaBody: string;
};

export const SOLUTIONS: LocaleDict<SolutionsDict> = {
  en: {
    meta: { title: 'Our Solutions — KKT', description: "KKT's own products: Optimus, operating intelligence for fuel-distribution networks, and Codoo, a guest assistant for short-term rentals." },
    introLabel: 'Our solutions', h1: 'Products we built and run.',
    lede: 'Alongside client work, we build our own products — when a recurring problem in our industries is worth solving once and running ourselves.',
    items: {
      optimus: {
        kind: 'Fuel-distribution networks',
        body: 'An AI-powered system that manages fuel inventory for you in real time — across every depot and every fuel grade at once, factoring in demand, supplier lead times and supplier reliability.',
        status: 'In pilot',
        link: 'See how Optimus works',
      },
      codoo: {
        kind: 'Short-term rental operators',
        body: 'A guest assistant on WhatsApp, across Booking.com, Airbnb and direct bookings. From the moment a guest books, it handles check-in, WiFi, parking and questions in the guest’s language, and pulls in a human when one is needed.',
        status: 'Live',
        link: 'codoo.kittykat.tech',
      },
    },
    ctaHeading: 'Want one of these in your operation?',
    ctaBody: 'Optimus is built for fuel networks; the approach behind it applies wherever a recurring operational decision is worth solving once and running. Tell us the decision you want to get under control.',
  },

  de: {
    meta: { title: 'Unsere Lösungen — KKT', description: 'KKTs eigene Produkte: Optimus, operative Intelligenz für Tankstellennetze, und Codoo, ein Gäste-Assistent für Kurzzeitvermietung.' },
    introLabel: 'Unsere Lösungen', h1: 'Produkte, die wir gebaut haben und betreiben.',
    lede: 'Neben der Kundenarbeit bauen wir eigene Produkte — wenn ein wiederkehrendes Problem in unseren Branchen es wert ist, einmal gelöst und selbst betrieben zu werden.',
    items: {
      optimus: {
        kind: 'Tankstellennetze',
        body: 'Ein KI-gestütztes System, das Ihre Kraftstoffbestände in Echtzeit steuert — über alle Tanklager und Kraftstoffarten zugleich, unter Berücksichtigung von Nachfrage, Lieferzeiten und Zuverlässigkeit der Lieferanten.',
        status: 'Im Pilotbetrieb',
        link: 'So funktioniert Optimus',
      },
      codoo: {
        kind: 'Betreiber von Kurzzeit-Apartments',
        body: 'Ein Gäste-Assistent über WhatsApp, bei Booking.com, Airbnb und Direktbuchungen. Vom Moment der Buchung an übernimmt er Check-in, WLAN, Parken und Fragen in der Sprache des Gastes und holt einen Menschen dazu, wenn er gebraucht wird.',
        status: 'Im Einsatz',
        link: 'codoo.kittykat.tech',
      },
    },
    ctaHeading: 'Möchten Sie so etwas in Ihrem Betrieb?',
    ctaBody: 'Optimus ist für Tankstellennetze gebaut; der Ansatz dahinter gilt überall, wo eine wiederkehrende operative Entscheidung es wert ist, einmal gelöst und betrieben zu werden. Sagen Sie uns, welche Entscheidung Sie unter Kontrolle bringen wollen.',
  },

  et: {
    meta: { title: 'Meie lahendused — KKT', description: 'KKT enda tooted: Optimus, tegevusintelligentsus kütusevõrkudele, ja Codoo, külalisassistent lühiajalisele üürile.' },
    introLabel: 'Meie lahendused', h1: 'Tooted, mille ehitasime ja mida käitame.',
    lede: 'Kliendi töö kõrval ehitame oma tooteid — kui korduv probleem meie valdkondades on väärt korra lahendamist ja ise käitamist.',
    items: {
      optimus: {
        kind: 'Kütusevõrgud',
        body: 'Tehisintellektil põhinev süsteem, mis haldab teie kütusevarusid reaalajas — korraga kõigis kütusebaasides ja kõigi kütuseliikide lõikes, arvestades nõudlust, tarneaegu ja tarnijate usaldusväärsust.',
        status: 'Piloodis',
        link: 'Vaata, kuidas Optimus töötab',
      },
      codoo: {
        kind: 'Lühiajalise üüri operaatorid',
        body: 'Külalisassistent WhatsAppis, üle Booking.comi, Airbnb ja otsebroneeringute. Alates hetkest, mil külaline broneerib, tegeleb see sisseregistreerimise, WiFi, parkimise ja küsimustega külalise keeles ning kaasab inimese siis, kui seda on vaja.',
        status: 'Töötab',
        link: 'codoo.kittykat.tech',
      },
    },
    ctaHeading: 'Soovite sellist oma tegevusse?',
    ctaBody: 'Optimus on ehitatud kütusevõrkudele; selle taga olev lähenemine kehtib kõikjal, kus korduv tegevusotsus on väärt korra lahendamist ja käitamist. Öelge meile, millise otsuse soovite kontrolli alla saada.',
  },

  // Thai — first pass, PENDING native review (including the two status chips).
  th: {
    meta: { title: 'โซลูชันของเรา — KKT', description: 'ผลิตภัณฑ์ของ KKT เอง: Optimus สำหรับเครือข่ายปั๊มน้ำมัน และ Codoo ผู้ช่วยดูแลผู้เข้าพักสำหรับที่พักระยะสั้น' },
    introLabel: 'โซลูชันของเรา', h1: 'ผลิตภัณฑ์ที่เราสร้างและดูแลเอง',
    lede: 'นอกจากงานกับลูกค้า เราสร้างผลิตภัณฑ์ของเราเอง — เมื่อปัญหาที่เกิดซ้ำในอุตสาหกรรมของเราคุ้มค่าที่จะแก้ครั้งเดียวและดูแลต่อเอง',
    items: {
      optimus: {
        kind: 'เครือข่ายปั๊มน้ำมัน',
        body: 'ระบบบน AI ที่บริหารสต็อกน้ำมันแทนคุณแบบเรียลไทม์ — ครอบคลุมทุกคลังน้ำมันและทุกชนิดน้ำมันพร้อมกัน โดยคำนึงถึงความต้องการ ระยะเวลาส่งมอบ และความน่าเชื่อถือของผู้จำหน่าย',
        status: 'นำร่อง',
        link: 'ดูวิธีการทำงานของ Optimus',
      },
      codoo: {
        kind: 'ผู้ให้บริการที่พักระยะสั้น',
        body: 'ผู้ช่วยดูแลผู้เข้าพักบน WhatsApp ครอบคลุม Booking.com, Airbnb และการจองตรง ตั้งแต่วินาทีที่แขกจอง มันดูแลการเช็คอิน WiFi ที่จอดรถ และคำถามต่าง ๆ ในภาษาของแขก และดึงคนเข้ามาเมื่อจำเป็น',
        status: 'ใช้งานจริง',
        link: 'codoo.kittykat.tech',
      },
    },
    ctaHeading: 'อยากได้อย่างใดอย่างหนึ่งนี้ในงานของคุณไหม?',
    ctaBody: 'Optimus สร้างมาเพื่อเครือข่ายปั๊มน้ำมัน แต่แนวทางเบื้องหลังใช้ได้ทุกที่ที่การตัดสินใจปฏิบัติการซ้ำ ๆ คุ้มค่าที่จะแก้ครั้งเดียวและดูแลต่อ บอกเราว่าการตัดสินใจไหนที่คุณอยากควบคุมให้ได้',
  },
};

export function useSolutions(locale: string | undefined): SolutionsDict {
  return SOLUTIONS[(locale as Locale)] ?? SOLUTIONS.en;
}
