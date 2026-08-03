// /solutions content. German careful; Estonian first pass (verify).
import type { Locale } from '../config';

export type SolutionsDict = {
  meta: { title: string; description: string };
  introLabel: string; h1: string; lede: string;
  optimusLabel: string; optimusTitle: string; optimusLede: string; optimusImg: string; optimusLink: string;
  features: { name: string; body: string }[];
  codooLabel: string; codooTitle: string; codooBody: string; codooLink: string;
  ctaHeading: string; ctaBody: string;
};

export const SOLUTIONS: Record<Locale, SolutionsDict> = {
  en: {
    meta: { title: 'Our Solutions — KKT', description: "KKT's own products: Optimus, operating intelligence for fuel-distribution networks, and Codoo." },
    introLabel: 'Our solutions', h1: 'Products we built and run.',
    lede: 'Alongside client work, we build our own products — when a recurring problem in our industries is worth solving once and running ourselves.',
    optimusLabel: 'Optimus', optimusTitle: 'Operating intelligence for fuel-distribution networks.',
    optimusLede: 'Procurement, margin, stockouts, and working capital — on connected data, in one operational picture. Optimus turns daily fuel-supply decisions into a controlled workflow: forecast the shortage, recommend the order, manage distribution, reconcile against the ERP. In pilot at Red Petroleum, an independent fuel network in Kyrgyzstan.',
    optimusImg: 'Optimus — procurement advisor',
    optimusLink: 'See how Optimus works',
    features: [
      { name: 'AI Briefing', body: 'A plain-language daily situation summary — what needs action, where the savings are — with free-form questions answered from live data.' },
      { name: 'Procurement Advisor', body: 'Concrete order recommendations: supplier, tonnage, deadline, price. Statuses from CRITICAL to OK, with one-click PO creation.' },
      { name: 'Stockout Forecast', body: 'Days remaining to a critical level per station and fuel type, including in-transit and split-wagon transfers.' },
      { name: 'Delivery conflict resolver', body: 'Auto-Distribute reroutes overflow wagons to the nearest stations with free capacity, with a full audit trail.' },
      { name: 'Working Capital', body: 'Money frozen in inventory and where to release it — per fuel and per region.' },
    ],
    codooLabel: 'Codoo', codooTitle: 'A guest assistant, from booking to checkout.',
    codooBody: 'Codoo runs on WhatsApp across Booking.com, Airbnb, and direct bookings. From the moment a guest books, it handles check-in, WiFi, parking, and questions in the guest’s language — and pulls in a human only when one is needed. Built for short-term-rental operators.',
    codooLink: 'Visit codoo.kittykat.tech',
    ctaHeading: 'Want one of these in your operation?',
    ctaBody: 'Optimus is built for fuel networks; the approach behind it applies wherever a recurring operational decision is worth solving once and running. Tell us the decision you want to get under control.',
  },

  de: {
    meta: { title: 'Unsere Lösungen — KKT', description: 'KKTs eigene Produkte: Optimus, operative Intelligenz für Tankstellennetze, und Codoo.' },
    introLabel: 'Unsere Lösungen', h1: 'Produkte, die wir gebaut haben und betreiben.',
    lede: 'Neben der Kundenarbeit bauen wir eigene Produkte — wenn ein wiederkehrendes Problem in unseren Branchen es wert ist, einmal gelöst und selbst betrieben zu werden.',
    optimusLabel: 'Optimus', optimusTitle: 'Operative Intelligenz für Tankstellennetze.',
    optimusLede: 'Beschaffung, Marge, Fehlbestände und Working Capital — auf vernetzten Daten, in einem operativen Bild. Optimus macht aus täglichen Kraftstoff-Versorgungsentscheidungen einen kontrollierten Ablauf: Engpass prognostizieren, Bestellung empfehlen, Verteilung steuern, gegen das ERP abstimmen. Im Pilotbetrieb bei Red Petroleum, einem unabhängigen Tankstellennetz in Kirgisistan.',
    optimusImg: 'Optimus — Beschaffungsberater',
    optimusLink: 'So funktioniert Optimus',
    features: [
      { name: 'KI-Briefing', body: 'Eine tägliche Lageübersicht in Klartext — was zu tun ist, wo die Einsparungen liegen — mit freien Fragen, die aus Live-Daten beantwortet werden.' },
      { name: 'Beschaffungsberater', body: 'Konkrete Bestellempfehlungen: Lieferant, Tonnage, Frist, Preis. Status von CRITICAL bis OK, mit Ein-Klick-Bestellerstellung.' },
      { name: 'Fehlbestandsprognose', body: 'Verbleibende Tage bis zum kritischen Niveau je Station und Kraftstoffart, inklusive in Transit und aufgeteilten Waggons.' },
      { name: 'Lieferkonfliktlöser', body: 'Auto-Distribute leitet überschüssige Waggons zu den nächsten Stationen mit freier Kapazität um, mit vollständigem Audit-Trail.' },
      { name: 'Working Capital', body: 'Im Bestand gebundenes Geld und wo es freizusetzen ist — je Kraftstoff und je Region.' },
    ],
    codooLabel: 'Codoo', codooTitle: 'Ein Gäste-Assistent, von der Buchung bis zum Checkout.',
    codooBody: 'Codoo läuft über WhatsApp bei Booking.com, Airbnb und Direktbuchungen. Vom Moment der Buchung an übernimmt es Check-in, WLAN, Parken und Fragen in der Sprache des Gastes — und holt einen Menschen nur dazu, wenn er gebraucht wird. Gebaut für Betreiber von Kurzzeit-Apartments.',
    codooLink: 'codoo.kittykat.tech besuchen',
    ctaHeading: 'Möchten Sie so etwas in Ihrem Betrieb?',
    ctaBody: 'Optimus ist für Tankstellennetze gebaut; der Ansatz dahinter gilt überall, wo eine wiederkehrende operative Entscheidung es wert ist, einmal gelöst und betrieben zu werden. Sagen Sie uns, welche Entscheidung Sie unter Kontrolle bringen wollen.',
  },

  et: {
    meta: { title: 'Meie lahendused — KKT', description: 'KKT enda tooted: Optimus, tegevusintelligentsus kütusevõrkudele, ja Codoo.' },
    introLabel: 'Meie lahendused', h1: 'Tooted, mille ehitasime ja mida käitame.',
    lede: 'Kliendi töö kõrval ehitame oma tooteid — kui korduv probleem meie valdkondades on väärt korra lahendamist ja ise käitamist.',
    optimusLabel: 'Optimus', optimusTitle: 'Tegevusintelligentsus kütusevõrkudele.',
    optimusLede: 'Hanked, marginaal, laovähesus ja käibekapital — ühendatud andmetel, ühes tegevuspildis. Optimus muudab igapäevased kütusetarne otsused kontrollitud töövooks: prognoosi puudujääk, soovita tellimus, halda jaotust, võrdle ERP-iga. Piloodis Red Petroleumis, sõltumatus kütusevõrgus Kõrgõzstanis.',
    optimusImg: 'Optimus — hankenõustaja',
    optimusLink: 'Vaata, kuidas Optimus töötab',
    features: [
      { name: 'TI-briifing', body: 'Igapäevane olukorra kokkuvõte selges keeles — mis vajab tegutsemist, kus on kokkuhoid — vabade küsimustega, millele vastatakse live-andmetest.' },
      { name: 'Hankenõustaja', body: 'Konkreetsed tellimissoovitused: tarnija, tonnaaž, tähtaeg, hind. Staatused CRITICAL kuni OK, ühe klikiga tellimuse loomine.' },
      { name: 'Laovähesuse prognoos', body: 'Päevi kriitilise tasemeni jaama ja kütuseliigi kohta, sealhulgas transiidis ja jagatud vagunites.' },
      { name: 'Tarnekonflikti lahendaja', body: 'Auto-Distribute suunab ülejäägi vagunid lähimatesse vaba mahuga jaamadesse, koos täieliku auditi jäljega.' },
      { name: 'Käibekapital', body: 'Laos kinni olev raha ja kus seda vabastada — kütuse ja piirkonna kaupa.' },
    ],
    codooLabel: 'Codoo', codooTitle: 'Külalisassistent, broneeringust väljaregistreerimiseni.',
    codooBody: 'Codoo töötab WhatsAppis üle Booking.comi, Airbnb ja otsebroneeringute. Alates hetkest, mil külaline broneerib, tegeleb see sisseregistreerimise, WiFi, parkimise ja küsimustega külalise keeles — ja kaasab inimese ainult siis, kui seda on vaja. Loodud lühiajalise üüri operaatoritele.',
    codooLink: 'Külasta codoo.kittykat.tech',
    ctaHeading: 'Soovite sellist oma tegevusse?',
    ctaBody: 'Optimus on ehitatud kütusevõrkudele; selle taga olev lähenemine kehtib kõikjal, kus korduv tegevusotsus on väärt korra lahendamist ja käitamist. Öelge meile, millise otsuse soovite kontrolli alla saada.',
  },

  // Thai — first pass, PENDING native review.
  th: {
    meta: { title: 'โซลูชันของเรา — KKT', description: 'ผลิตภัณฑ์ของ KKT เอง: Optimus ปัญญาเชิงปฏิบัติการสำหรับเครือข่ายจ่ายน้ำมัน และ Codoo' },
    introLabel: 'โซลูชันของเรา', h1: 'ผลิตภัณฑ์ที่เราสร้างและดูแลเอง',
    lede: 'นอกจากงานให้ลูกค้า เราสร้างผลิตภัณฑ์ของเราเอง — เมื่อปัญหาที่เกิดซ้ำในอุตสาหกรรมของเราคุ้มค่าที่จะแก้ครั้งเดียวและดูแลเอง',
    optimusLabel: 'Optimus', optimusTitle: 'ปัญญาเชิงปฏิบัติการสำหรับเครือข่ายจ่ายน้ำมัน',
    optimusLede: 'การจัดซื้อ มาร์จิน สินค้าขาดสต็อก และเงินทุนหมุนเวียน — บนข้อมูลที่เชื่อมโยงกัน ในภาพปฏิบัติการเดียว Optimus เปลี่ยนการตัดสินใจจัดหาน้ำมันประจำวันให้เป็นเวิร์กโฟลว์ที่ควบคุมได้: พยากรณ์การขาด แนะนำการสั่งซื้อ จัดการการกระจาย กระทบยอดกับ ERP อยู่ระหว่างนำร่องที่ Red Petroleum เครือข่ายปั๊มน้ำมันอิสระในคีร์กีซสถาน',
    optimusImg: 'Optimus — ที่ปรึกษาการจัดซื้อ',
    optimusLink: 'ดูวิธีการทำงานของ Optimus',
    features: [
      { name: 'AI Briefing', body: 'สรุปสถานการณ์ประจำวันเป็นภาษาที่เข้าใจง่าย — อะไรต้องลงมือ ประหยัดได้ตรงไหน — พร้อมตอบคำถามอิสระจากข้อมูลสด' },
      { name: 'Procurement Advisor', body: 'คำแนะนำการสั่งซื้อที่ชัดเจน: ผู้จำหน่าย ปริมาณ กำหนดเวลา ราคา สถานะตั้งแต่ CRITICAL ถึง OK สร้างใบสั่งซื้อได้ในคลิกเดียว' },
      { name: 'Stockout Forecast', body: 'จำนวนวันที่เหลือก่อนถึงระดับวิกฤตต่อสถานีและชนิดน้ำมัน รวมถึงที่กำลังขนส่งและการโอนแบบแยกตู้' },
      { name: 'ตัวช่วยแก้ความขัดแย้งการจัดส่ง', body: 'Auto-Distribute เปลี่ยนเส้นทางตู้ที่ล้นไปยังสถานีใกล้ที่สุดที่มีพื้นที่ว่าง พร้อมบันทึกตรวจสอบครบถ้วน' },
      { name: 'Working Capital', body: 'เงินที่จมอยู่ในสต็อกและควรปลดล็อกตรงไหน — ต่อชนิดน้ำมันและต่อภูมิภาค' },
    ],
    codooLabel: 'Codoo', codooTitle: 'ผู้ช่วยดูแลผู้เข้าพัก ตั้งแต่จองจนถึงเช็คเอาต์',
    codooBody: 'Codoo ทำงานบน WhatsApp ครอบคลุม Booking.com, Airbnb และการจองตรง ตั้งแต่วินาทีที่แขกจอง มันดูแลการเช็คอิน WiFi ที่จอดรถ และคำถามต่าง ๆ ในภาษาของแขก — และดึงคนเข้ามาเฉพาะเมื่อจำเป็น สร้างมาเพื่อผู้ให้บริการที่พักระยะสั้น',
    codooLink: 'เยี่ยมชม codoo.kittykat.tech',
    ctaHeading: 'อยากได้อย่างใดอย่างหนึ่งนี้ในงานของคุณไหม?',
    ctaBody: 'Optimus สร้างมาเพื่อเครือข่ายปั๊มน้ำมัน แต่แนวทางเบื้องหลังใช้ได้ทุกที่ที่การตัดสินใจปฏิบัติการซ้ำ ๆ คุ้มค่าที่จะแก้ครั้งเดียวและดูแลต่อ บอกเราว่าการตัดสินใจไหนที่คุณอยากควบคุมให้ได้',
  },
};

export function useSolutions(locale: string | undefined): SolutionsDict {
  return SOLUTIONS[(locale as Locale)] ?? SOLUTIONS.en;
}
