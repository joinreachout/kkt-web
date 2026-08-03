// /industries/retail content. German careful; Estonian first pass (to verify).
// Stage/domain/pressure copy mirrors the Retail AI Canvas.
import type { Locale } from '../config';

export type RetailDict = {
  meta: { title: string; description: string };
  introLabel: string; h1a: string; h1grad: string; lede: string; imgAlt: string; imgLabel: string;
  pathLabel: string; pathTitle: string; pathLede: string;
  stages: { tag: string; name: string; body: string }[];
  coverLabel: string; coverTitle: string; coverLede: string; stageTag: (n: number) => string;
  domains: { title: string; sub: string }[];
  pressureLabel: string; pressures: string[];
  pbTag: string; pbTitle: string; pbBody: string; pbCta: string;
  ctaHeading: string; ctaBody: string;
};

export const RETAIL: Record<Locale, RetailDict> = {
  en: {
    meta: { title: 'Retail — KKT', description: 'AI and data for mid-sized retailers — strengthen core operations, optimize and grow, then expand and monetize. The full Retail AI Canvas at retail.kittykat.tech.' },
    introLabel: 'Industries — Retail', h1a: 'Data & AI for ', h1grad: 'retail',
    lede: 'Your data is already there — POS, ERP, loyalty, stock, supplier, finance, master data. In mid-sized retail the gaps are not abstract IT problems: unclear promo ROI, inconsistent margin views, poor fresh ordering, supplier disputes, and store reports nobody fully trusts.',
    imgAlt: 'Supermarket aisle with a shopper', imgLabel: 'Retail — store floor, shelf, or the analytics behind it',
    pathLabel: 'How the path runs', pathTitle: 'Strengthen the core, optimize and grow, then expand and monetize.',
    pathLede: 'The staged model behind the canvas. Strengthen the core first, optimize where it pays, and expand into new revenue only when the core is ready.',
    stages: [
      { tag: 'Stage 1', name: 'Strengthen Core Operations', body: 'Create a common factual base and reveal value leakage; then improve consistency, exception handling, and management response.' },
      { tag: 'Stage 2', name: 'Optimize and Grow', body: 'Use evidence, forecasting, segmentation, and decision support to improve economics — and embed better decisions into recurring work, reducing manual dependence.' },
      { tag: 'Stage 3', name: 'Expand and Monetize', body: 'Use stronger customer access, supplier relevance, and operating intelligence as strategic assets.' },
    ],
    coverLabel: 'What we cover', coverTitle: 'Across the retail business.',
    coverLede: 'The domains of the Retail AI Canvas — where AI and data create value across a mid-sized retailer, from the data foundation to new revenue pools.',
    stageTag: (n) => `Stage ${n}`,
    domains: [
      { title: 'Data Foundation', sub: 'Build the trusted base that every retail decision depends on.' },
      { title: 'Stock & Availability', sub: 'Stop carrying too much of the wrong stock while losing sales on the right products.' },
      { title: 'Margin & Cash', sub: 'Give leadership a clearer forward view of where profit and cash are moving.' },
      { title: 'Reporting & Decisions', sub: 'Turn trusted data into faster management decisions.' },
      { title: 'Store Execution', sub: 'Make the store network closer to the plan.' },
      { title: 'Warehouse & Transport Operations', sub: 'Make warehouse and transport execution visible before depot and delivery problems hit stores.' },
      { title: 'Supplier Performance', sub: 'Make supplier performance, claims, and commercial value visible before problems hit stores or money is left behind.' },
      { title: 'Loss Prevention', sub: 'Detect leakage earlier and focus investigation where value is genuinely at risk.' },
      { title: 'Workforce & AI Assistants', sub: 'Give store, field, head-office, HR, legal, commercial, and service teams practical AI support for the work they already do every day.' },
      { title: 'Customers & Loyalty', sub: 'Use loyalty, transaction, basket, campaign, and feedback data to understand customers as different groups with different value, needs, and risks.' },
      { title: 'Promotions & Pricing', sub: 'Spend commercial money where it creates real return, not where it only subsidizes demand that would have happened anyway.' },
      { title: 'Expand and Monetize', sub: 'Use stronger customer access, supplier relationships, store traffic, loyalty data, digital channels, and local trust to create new revenue pools beyond classic product margin.' },
    ],
    pressureLabel: 'Start from the pressure you feel',
    pressures: ['Improve margin and cash control', 'Reduce stockouts, waste and overstock', 'Make promotions and pricing more profitable', 'Grow customer value and loyalty', 'Improve store execution and field control', 'Make reporting and decisions faster', 'Improve supplier performance and claims', 'Improve labour productivity and scheduling', 'Reduce fraud, leakage and control gaps', 'Explore new revenue pools beyond classic retail'],
    pbTag: 'The retail playbook', pbTitle: 'Retail AI Canvas — 43 services across 11 domains.',
    pbBody: 'The full open playbook, built from real engagements and updated quarterly, with an advisor that walks you through it.',
    pbCta: 'Open the playbook →',
    ctaHeading: 'Retail diagnostic, two weeks.', ctaBody: 'Two weeks to see where the canvas applies to your business, and what to build first.',
  },

  de: {
    meta: { title: 'Einzelhandel — KKT', description: 'KI und Daten für mittelständische Einzelhändler — Kern stärken, optimieren und wachsen, dann expandieren und monetarisieren. Der vollständige Retail AI Canvas auf retail.kittykat.tech.' },
    introLabel: 'Branchen — Einzelhandel', h1a: 'Daten & KI für den ', h1grad: 'Einzelhandel',
    lede: 'Ihre Daten sind bereits da — POS, ERP, Loyalty, Bestand, Lieferanten, Finanzen, Stammdaten. Im mittelständischen Einzelhandel sind die Lücken keine abstrakten IT-Probleme: unklarer Promo-ROI, uneinheitliche Margensicht, schlechte Frischebestellung, Lieferantenstreitigkeiten und Filialberichte, denen niemand ganz vertraut.',
    imgAlt: 'Supermarktgang mit einer Kundin', imgLabel: 'Einzelhandel — Verkaufsfläche, Regal oder die Analytik dahinter',
    pathLabel: 'Wie der Weg verläuft', pathTitle: 'Den Kern stärken, optimieren und wachsen, dann expandieren und monetarisieren.',
    pathLede: 'Das Stufenmodell hinter dem Canvas. Zuerst den Kern stärken, dort optimieren, wo es sich lohnt, und erst dann in neue Umsätze expandieren, wenn der Kern bereit ist.',
    stages: [
      { tag: 'Stufe 1', name: 'Kernbetrieb stärken', body: 'Eine gemeinsame Faktenbasis schaffen und Wertverluste aufdecken; dann Konsistenz, Ausnahmebehandlung und Managementreaktion verbessern.' },
      { tag: 'Stufe 2', name: 'Optimieren und wachsen', body: 'Evidenz, Prognosen, Segmentierung und Entscheidungsunterstützung nutzen, um die Ökonomie zu verbessern — und bessere Entscheidungen in die wiederkehrende Arbeit einbetten, um manuelle Abhängigkeit zu reduzieren.' },
      { tag: 'Stufe 3', name: 'Expandieren und monetarisieren', body: 'Stärkeren Kundenzugang, Lieferantenrelevanz und operative Intelligenz als strategische Vermögenswerte nutzen.' },
    ],
    coverLabel: 'Was wir abdecken', coverTitle: 'Über das gesamte Einzelhandelsgeschäft.',
    coverLede: 'Die Domänen des Retail AI Canvas — wo KI und Daten Wert über einen mittelständischen Einzelhändler schaffen, vom Datenfundament bis zu neuen Umsatzquellen.',
    stageTag: (n) => `Stufe ${n}`,
    domains: [
      { title: 'Datenfundament', sub: 'Die vertrauenswürdige Basis aufbauen, von der jede Einzelhandelsentscheidung abhängt.' },
      { title: 'Bestand & Verfügbarkeit', sub: 'Aufhören, zu viel vom falschen Bestand zu führen und dabei Umsatz bei den richtigen Produkten zu verlieren.' },
      { title: 'Marge & Liquidität', sub: 'Der Führung eine klarere vorausschauende Sicht geben, wohin sich Gewinn und Liquidität bewegen.' },
      { title: 'Berichte & Entscheidungen', sub: 'Vertrauenswürdige Daten in schnellere Managemententscheidungen verwandeln.' },
      { title: 'Filialausführung', sub: 'Das Filialnetz näher an den Plan bringen.' },
      { title: 'Lager- & Transportbetrieb', sub: 'Lager- und Transportausführung sichtbar machen, bevor Depot- und Lieferprobleme die Filialen treffen.' },
      { title: 'Lieferantenleistung', sub: 'Lieferantenleistung, Reklamationen und kommerziellen Wert sichtbar machen, bevor Probleme die Filialen treffen oder Geld liegen bleibt.' },
      { title: 'Verlustprävention', sub: 'Schwund früher erkennen und die Untersuchung dort fokussieren, wo Wert wirklich gefährdet ist.' },
      { title: 'Personal & KI-Assistenten', sub: 'Teams in Filiale, Außendienst, Zentrale, HR, Recht, Vertrieb und Service praktische KI-Unterstützung für ihre tägliche Arbeit geben.' },
      { title: 'Kunden & Loyalty', sub: 'Loyalty-, Transaktions-, Warenkorb-, Kampagnen- und Feedbackdaten nutzen, um Kunden als unterschiedliche Gruppen mit unterschiedlichem Wert, Bedarf und Risiko zu verstehen.' },
      { title: 'Promotions & Preisgestaltung', sub: 'Kommerzielles Geld dort einsetzen, wo es echten Ertrag schafft, nicht dort, wo es nur Nachfrage subventioniert, die ohnehin entstanden wäre.' },
      { title: 'Expandieren und monetarisieren', sub: 'Stärkeren Kundenzugang, Lieferantenbeziehungen, Filialfrequenz, Loyalty-Daten, digitale Kanäle und lokales Vertrauen nutzen, um neue Umsatzquellen jenseits der klassischen Produktmarge zu schaffen.' },
    ],
    pressureLabel: 'Beginnen Sie bei dem Druck, den Sie spüren',
    pressures: ['Marge und Liquiditätskontrolle verbessern', 'Fehlbestände, Verschwendung und Überbestände reduzieren', 'Promotions und Preisgestaltung profitabler machen', 'Kundenwert und Loyalty steigern', 'Filialausführung und Außendienstkontrolle verbessern', 'Berichte und Entscheidungen schneller machen', 'Lieferantenleistung und Reklamationen verbessern', 'Arbeitsproduktivität und Personalplanung verbessern', 'Betrug, Schwund und Kontrolllücken reduzieren', 'Neue Umsatzquellen jenseits des klassischen Einzelhandels erschließen'],
    pbTag: 'Das Retail-Playbook', pbTitle: 'Retail AI Canvas — 43 Services über 11 Domänen.',
    pbBody: 'Das vollständige offene Playbook, aus echten Projekten aufgebaut und vierteljährlich aktualisiert, mit einem Berater, der Sie hindurchführt.',
    pbCta: 'Playbook öffnen →',
    ctaHeading: 'Retail-Diagnose, zwei Wochen.', ctaBody: 'Zwei Wochen, um zu sehen, wo der Canvas auf Ihr Geschäft zutrifft und was zuerst zu bauen ist.',
  },

  et: {
    meta: { title: 'Jaekaubandus — KKT', description: 'Tehisintellekt ja andmed keskmise suurusega jaemüüjatele — tugevda tuumtegevus, optimeeri ja kasva, seejärel laiene ja monetiseeri. Täielik Retail AI Canvas aadressil retail.kittykat.tech.' },
    introLabel: 'Tööstusharud — Jaekaubandus', h1a: 'Andmed ja TI ', h1grad: 'jaekaubandusele',
    lede: 'Teie andmed on juba olemas — POS, ERP, lojaalsus, laoseis, tarnijad, rahandus, põhiandmed. Keskmise suurusega jaekaubanduses ei ole lüngad abstraktsed IT-probleemid: ebaselge promo-ROI, ebajärjekindel marginaalivaade, kehv värske kauba tellimine, tarnijavaidlused ja poearuanded, mida keegi täielikult ei usalda.',
    imgAlt: 'Supermarketi vahekäik kliendiga', imgLabel: 'Jaekaubandus — müügipind, riiul või selle taga olev analüütika',
    pathLabel: 'Kuidas tee kulgeb', pathTitle: 'Tugevda tuum, optimeeri ja kasva, seejärel laiene ja monetiseeri.',
    pathLede: 'Canvase taga olev etapiline mudel. Tugevda kõigepealt tuum, optimeeri seal, kus see tasub, ja laiene uutesse tuludesse alles siis, kui tuum on valmis.',
    stages: [
      { tag: '1. etapp', name: 'Tugevda tuumtegevust', body: 'Loo ühine faktiline alus ja too esile väärtuse lekked; seejärel paranda järjepidevust, erandite käsitlemist ja juhtkonna reageerimist.' },
      { tag: '2. etapp', name: 'Optimeeri ja kasva', body: 'Kasuta tõendeid, prognoosimist, segmenteerimist ja otsustustuge ökonoomika parandamiseks — ja põimi paremad otsused korduvasse töösse, vähendades käsitsi sõltuvust.' },
      { tag: '3. etapp', name: 'Laiene ja monetiseeri', body: 'Kasuta tugevamat kliendijuurdepääsu, tarnijate asjakohasust ja tegevusintelligentsust strateegiliste varadena.' },
    ],
    coverLabel: 'Mida me katame', coverTitle: 'Läbi kogu jaekaubanduse.',
    coverLede: 'Retail AI Canvase valdkonnad — kus TI ja andmed loovad väärtust keskmise suurusega jaemüüja ulatuses, andmevundamendist uute tuluallikateni.',
    stageTag: (n) => `${n}. etapp`,
    domains: [
      { title: 'Andmevundament', sub: 'Ehita usaldusväärne alus, millest sõltub iga jaekaubanduse otsus.' },
      { title: 'Laoseis ja saadavus', sub: 'Lõpeta vale kauba liigne hoidmine, kaotades samal ajal müüki õigete toodete pealt.' },
      { title: 'Marginaal ja raha', sub: 'Anna juhtkonnale selgem ettevaatav pilt, kuhu kasum ja raha liiguvad.' },
      { title: 'Aruandlus ja otsused', sub: 'Muuda usaldusväärsed andmed kiiremateks juhtimisotsusteks.' },
      { title: 'Poe teostus', sub: 'Vii poevõrk plaanile lähemale.' },
      { title: 'Lao- ja transporditegevus', sub: 'Tee lao- ja transporditeostus nähtavaks enne, kui depoo- ja tarneprobleemid poodideni jõuavad.' },
      { title: 'Tarnijate tulemuslikkus', sub: 'Tee tarnijate tulemuslikkus, nõuded ja äriline väärtus nähtavaks enne, kui probleemid poodideni jõuavad või raha maha jääb.' },
      { title: 'Kahjude ennetamine', sub: 'Tuvasta lekked varem ja keskendu uurimisel sinna, kus väärtus on tõeliselt ohus.' },
      { title: 'Tööjõud ja TI-assistendid', sub: 'Anna poe-, väli-, peakontori-, HR-, õigus-, äri- ja teenindusmeeskondadele praktiline TI-tugi tööks, mida nad niigi iga päev teevad.' },
      { title: 'Kliendid ja lojaalsus', sub: 'Kasuta lojaalsus-, tehingu-, ostukorvi-, kampaania- ja tagasisideandmeid, et mõista kliente erinevate gruppidena erineva väärtuse, vajaduste ja riskidega.' },
      { title: 'Kampaaniad ja hinnastamine', sub: 'Kuluta ärilist raha sinna, kus see loob tegelikku tulu, mitte sinna, kus see vaid subsideerib nõudlust, mis oleks niikuinii tekkinud.' },
      { title: 'Laiene ja monetiseeri', sub: 'Kasuta tugevamat kliendijuurdepääsu, tarnijasuhteid, poe külastatavust, lojaalsusandmeid, digikanaleid ja kohalikku usaldust, et luua uusi tuluallikaid väljaspool klassikalist tootemarginaali.' },
    ],
    pressureLabel: 'Alusta survest, mida tunned',
    pressures: ['Paranda marginaali ja rahakontrolli', 'Vähenda laovähesust, raiskamist ja ületootmist', 'Muuda kampaaniad ja hinnastamine kasumlikumaks', 'Kasvata kliendiväärtust ja lojaalsust', 'Paranda poe teostust ja väljakontrolli', 'Muuda aruandlus ja otsused kiiremaks', 'Paranda tarnijate tulemuslikkust ja nõudeid', 'Paranda tööjõu tootlikkust ja graafikute koostamist', 'Vähenda pettust, lekkeid ja kontrollilünki', 'Uuri uusi tuluallikaid väljaspool klassikalist jaekaubandust'],
    pbTag: 'Jaekaubanduse playbook', pbTitle: 'Retail AI Canvas — 43 teenust üle 11 valdkonna.',
    pbBody: 'Täielik avatud playbook, üles ehitatud tegelikest projektidest ja kvartaalselt uuendatud, koos nõustajaga, kes juhatab sind sellest läbi.',
    pbCta: 'Ava playbook →',
    ctaHeading: 'Jaekaubanduse diagnostika, kaks nädalat.', ctaBody: 'Kaks nädalat, et näha, kus canvas teie ärile rakendub ja mida esmalt ehitada.',
  },

  // Thai — first pass, PENDING native review.
  th: {
    meta: { title: 'ค้าปลีก — KKT', description: 'AI และข้อมูลสำหรับผู้ค้าปลีกขนาดกลาง — เสริมความแข็งแรงของงานหลัก เพิ่มประสิทธิภาพและเติบโต แล้วขยายและสร้างรายได้ใหม่ ดู Retail AI Canvas ฉบับเต็มที่ retail.kittykat.tech' },
    introLabel: 'อุตสาหกรรม — ค้าปลีก', h1a: 'ข้อมูลและ AI สำหรับ', h1grad: 'ค้าปลีก',
    lede: 'ข้อมูลของคุณมีอยู่แล้ว — POS, ERP, ระบบสะสมแต้ม, สต็อก, ซัพพลายเออร์, การเงิน, ข้อมูลหลัก ในค้าปลีกขนาดกลาง ช่องว่างไม่ใช่ปัญหาไอทีเชิงนามธรรม: ROI ของโปรโมชันที่ไม่ชัด มุมมองมาร์จินที่ไม่สอดคล้อง การสั่งของสดที่ไม่ดี ข้อพิพาทกับซัพพลายเออร์ และรายงานสาขาที่ไม่มีใครเชื่อได้เต็มร้อย',
    imgAlt: 'ทางเดินในซูเปอร์มาร์เก็ตกับลูกค้า', imgLabel: 'ค้าปลีก — พื้นที่ขาย ชั้นวาง หรือการวิเคราะห์ที่อยู่เบื้องหลัง',
    pathLabel: 'เส้นทางเดินอย่างไร', pathTitle: 'เสริมงานหลักให้แข็งแรง เพิ่มประสิทธิภาพและเติบโต แล้วขยายและสร้างรายได้',
    pathLede: 'โมเดลเป็นระยะที่อยู่เบื้องหลัง canvas เสริมงานหลักให้แข็งแรงก่อน เพิ่มประสิทธิภาพตรงที่คุ้มค่า และขยายสู่รายได้ใหม่เมื่องานหลักพร้อมแล้วเท่านั้น',
    stages: [
      { tag: 'ระยะที่ 1', name: 'เสริมความแข็งแรงของงานหลัก', body: 'สร้างฐานข้อเท็จจริงร่วมกันและเผยจุดที่คุณค่ารั่วไหล จากนั้นปรับปรุงความสอดคล้อง การจัดการข้อยกเว้น และการตอบสนองของฝ่ายบริหาร' },
      { tag: 'ระยะที่ 2', name: 'เพิ่มประสิทธิภาพและเติบโต', body: 'ใช้หลักฐาน การพยากรณ์ การแบ่งกลุ่ม และการสนับสนุนการตัดสินใจ เพื่อยกระดับเศรษฐศาสตร์ — และฝังการตัดสินใจที่ดีขึ้นเข้าไปในงานประจำ ลดการพึ่งพาการทำด้วยมือ' },
      { tag: 'ระยะที่ 3', name: 'ขยายและสร้างรายได้', body: 'ใช้การเข้าถึงลูกค้าที่แข็งแกร่งขึ้น ความเกี่ยวข้องกับซัพพลายเออร์ และปัญญาเชิงปฏิบัติการ เป็นสินทรัพย์เชิงกลยุทธ์' },
    ],
    coverLabel: 'สิ่งที่เราครอบคลุม', coverTitle: 'ครอบคลุมทั้งธุรกิจค้าปลีก',
    coverLede: 'โดเมนต่าง ๆ ของ Retail AI Canvas — จุดที่ AI และข้อมูลสร้างคุณค่าทั่วทั้งผู้ค้าปลีกขนาดกลาง ตั้งแต่รากฐานข้อมูลจนถึงแหล่งรายได้ใหม่',
    stageTag: (n) => `ระยะที่ ${n}`,
    domains: [
      { title: 'รากฐานข้อมูล', sub: 'สร้างฐานที่เชื่อถือได้ ซึ่งทุกการตัดสินใจในค้าปลีกต้องพึ่งพา' },
      { title: 'สต็อกและความพร้อมของสินค้า', sub: 'เลิกถือสินค้าผิดตัวมากเกินไป ในขณะที่เสียยอดขายกับสินค้าที่ถูกต้อง' },
      { title: 'มาร์จินและเงินสด', sub: 'ให้ผู้บริหารเห็นภาพล่วงหน้าชัดขึ้นว่ากำไรและเงินสดกำลังเคลื่อนไปทางไหน' },
      { title: 'การรายงานและการตัดสินใจ', sub: 'เปลี่ยนข้อมูลที่เชื่อถือได้ให้เป็นการตัดสินใจของฝ่ายบริหารที่เร็วขึ้น' },
      { title: 'การปฏิบัติงานหน้าร้าน', sub: 'ทำให้เครือข่ายสาขาใกล้เคียงกับแผนมากขึ้น' },
      { title: 'การปฏิบัติงานคลังและขนส่ง', sub: 'ทำให้งานคลังและขนส่งมองเห็นได้ ก่อนปัญหาคลังและการจัดส่งจะกระทบสาขา' },
      { title: 'ผลงานของซัพพลายเออร์', sub: 'ทำให้ผลงานของซัพพลายเออร์ การเคลม และคุณค่าเชิงการค้ามองเห็นได้ ก่อนปัญหาจะกระทบสาขาหรือเงินตกหล่น' },
      { title: 'การป้องกันการสูญเสีย', sub: 'ตรวจจับการรั่วไหลได้เร็วขึ้น และมุ่งการสอบสวนไปที่จุดที่คุณค่าเสี่ยงจริง ๆ' },
      { title: 'บุคลากรและผู้ช่วย AI', sub: 'ให้ทีมสาขา ทีมภาคสนาม สำนักงานใหญ่ HR กฎหมาย การค้า และบริการ ได้ตัวช่วย AI ที่ใช้ได้จริงกับงานที่ทำอยู่ทุกวัน' },
      { title: 'ลูกค้าและระบบสะสมแต้ม', sub: 'ใช้ข้อมูลสะสมแต้ม ธุรกรรม ตะกร้าสินค้า แคมเปญ และฟีดแบ็ก เพื่อเข้าใจลูกค้าเป็นกลุ่มต่าง ๆ ที่มีคุณค่า ความต้องการ และความเสี่ยงต่างกัน' },
      { title: 'โปรโมชันและการตั้งราคา', sub: 'ใช้งบการค้าตรงที่สร้างผลตอบแทนจริง ไม่ใช่ตรงที่เพียงอุดหนุนอุปสงค์ที่จะเกิดขึ้นอยู่แล้ว' },
      { title: 'ขยายและสร้างรายได้', sub: 'ใช้การเข้าถึงลูกค้าที่แข็งแกร่งขึ้น ความสัมพันธ์กับซัพพลายเออร์ ทราฟฟิกหน้าร้าน ข้อมูลสะสมแต้ม ช่องทางดิจิทัล และความไว้วางใจในท้องถิ่น เพื่อสร้างแหล่งรายได้ใหม่นอกเหนือจากมาร์จินสินค้าแบบเดิม' },
    ],
    pressureLabel: 'เริ่มจากแรงกดดันที่คุณรู้สึก',
    pressures: ['ปรับปรุงมาร์จินและการควบคุมเงินสด', 'ลดสินค้าขาดสต็อก การสูญเสีย และสต็อกล้น', 'ทำให้โปรโมชันและการตั้งราคาทำกำไรมากขึ้น', 'เพิ่มคุณค่าลูกค้าและความภักดี', 'ปรับปรุงการปฏิบัติงานหน้าร้านและการควบคุมภาคสนาม', 'ทำให้การรายงานและการตัดสินใจเร็วขึ้น', 'ปรับปรุงผลงานซัพพลายเออร์และการเคลม', 'เพิ่มประสิทธิภาพแรงงานและการจัดตารางกะ', 'ลดการทุจริต การรั่วไหล และช่องโหว่การควบคุม', 'สำรวจแหล่งรายได้ใหม่นอกเหนือจากค้าปลีกแบบเดิม'],
    pbTag: 'Retail playbook', pbTitle: 'Retail AI Canvas — 43 บริการ ครอบคลุม 11 โดเมน',
    pbBody: 'playbook แบบเปิดฉบับเต็ม สร้างจากงานจริงและอัปเดตทุกไตรมาส พร้อมผู้ช่วยที่พาคุณเดินผ่านมันทีละขั้น',
    pbCta: 'เปิด playbook →',
    ctaHeading: 'วิเคราะห์ค้าปลีก สองสัปดาห์', ctaBody: 'สองสัปดาห์เพื่อดูว่า canvas ใช้กับธุรกิจของคุณตรงไหน และควรสร้างอะไรก่อน',
  },
};

export function useRetail(locale: string | undefined): RetailDict {
  return RETAIL[(locale as Locale)] ?? RETAIL.en;
}
