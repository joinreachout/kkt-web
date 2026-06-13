// /solutions/optimus content. German careful; Estonian first pass (verify).
import type { Locale } from '../config';

type NameBody = { name: string; body: string };
type TitleBody = { title: string; body: string };
type TagBody = { tag: string; body: string };
type Step = { name: string; body: string };
type Cluster = { eyebrow: string; name: string; items: NameBody[] };
type Stat = { num: string; label: string };

export type OptimusDict = {
  meta: { title: string; description: string };
  sectionLabel: string;
  h1: string;
  heroSub: string;
  lede: string;
  defPre: string; defLink: string; defPost: string;
  ctaPrimary: string; ctaSecondary: string;
  pulse: {
    erpT: string; erpS: string;
    forecastT: string; forecastS: string;
    advisorT: string; advisorS: string;
    operatorChip: string; operatorT: string; operatorS: string;
    note: string; caption: string; ariaLabel: string;
  };
  morning: { label: string; h2: string; steps: Step[] };
  changes: { label: string; h2: string; outcomes: TitleBody[]; note: string };
  how: { label: string; h2: string; lede: string; clusters: Cluster[] };
  screens: { label: string; h2: string; lede: string };
  scenarios: { label: string; h2: string; lede: string; imgAlt: string; imgCaption: string; cards: TagBody[]; tail: string };
  deployments: { label: string; h2: string; name: string; meta: string; stats: Stat[]; body: string; link: string };
  pullquote: string;
  cta: { heading: string; body: string; primary: string; secondary: string };
};

export const OPTIMUS: Record<Locale, OptimusDict> = {
  en: {
    meta: {
      title: 'Optimus — KKT',
      description: 'The procurement-and-margin engine for fuel networks — buying on connected data, not experience. In pilot at Red Petroleum, Kyrgyzstan.',
    },
    sectionLabel: 'Solutions — Optimus',
    h1: 'Optimus.',
    heroSub: 'The procurement-and-margin engine for fuel networks.',
    lede: 'Optimus turns fuel buying from a decision made on experience and availability into one made on data. Each morning it pulls live ERP data — current stocks, in-transit orders, station-level sales, supplier offers — forecasts when each station × fuel-type position will run critical, flags inbound delivery conflicts where arriving volume exceeds tank capacity, and produces concrete procurement recommendations: which supplier, how many tons, by what date, at what price.',
    defPre: 'The user is the head of supply. The morning workflow is 10 to 15 minutes: read the briefing, close the critical positions, confirm or adjust the recommendations, issue the purchase orders. Optimus is in pilot at Red Petroleum — an independent fuel network in Kyrgyzstan, around 250 stations. It is one embodiment of how we work in fuel: the procurement-and-margin engine, on connected data — the wider network economy is on the ',
    defLink: 'fuel-retail page',
    defPost: '.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Read the Red Petroleum case',
    pulse: {
      erpT: 'ERP', erpS: 'stocks · in-transit · sales',
      forecastT: 'Forecast engine', forecastS: 'stockout × delivery',
      advisorT: 'Procurement Advisor', advisorS: 'supplier · tonnage · price',
      operatorChip: '08:00', operatorT: 'Operator', operatorS: '10–15 min · confirm or override, issue POs',
      note: 'Critical alerts mirror to a Telegram group all day — independent of the web interface.',
      caption: 'Daily pulse: data lands at 03:30, the head of supply opens Optimus at 08:00, ten to fifteen minutes later the day’s procurement decisions are issued.',
      ariaLabel: 'Optimus daily pulse: ERP import at 03:30, forecast engine, procurement advisor, operator at 08:00; critical alerts mirror to Telegram independently of the web.',
    },
    morning: {
      label: "A morning at the operator's desk",
      h2: 'Ten to fifteen minutes, then the day starts.',
      steps: [
        { name: '8:00 AM — Open the briefing.', body: "The head of supply opens Optimus and sees yesterday's pipeline freshness in one glance, not 40 minutes of reconciliation. Action Required. Good News. Savings Tip. What changed since yesterday." },
        { name: 'Close critical positions.', body: 'Procurement Advisor surfaces every station × fuel that will hit critical level inside the planning window. Each row already has a recommended supplier, tonnage, and deadline. Confirm or override.' },
        { name: 'Resolve delivery conflicts.', body: 'When inbound volume exceeds available tank capacity, Auto-Distribute reroutes overflow to the nearest stations with free capacity. The operator sees the proposed routing, not just an alert.' },
        { name: 'Issue the POs.', body: 'One-click PO creation on confirmed recommendations. The Reserves Panel covers any fuel already held at supplier without destination — assign it to a station with capacity check.' },
        { name: 'Walk away.', body: 'Critical alerts mirror to a Telegram group. The operator does not depend on the web interface for the rest of the day.' },
      ],
    },
    changes: {
      label: 'What it actually changes',
      h2: 'What it changes.',
      outcomes: [
        { title: 'Stockouts', body: 'Fewer surprise critical positions. The forecast surfaces them days before they happen, when there is still time to act.' },
        { title: 'Working capital', body: '$ frozen in inventory becomes visible per fuel and per region — and so does where to release it. Inventory turnover stops being a quarterly review and becomes a daily decision.' },
        { title: 'Procurement speed', body: 'Decisions that took half a day of reconciliation move to minutes. The operator sees the recommendation and the data behind it on the same screen.' },
        { title: 'Supplier consolidation', body: "Recommendation history makes supplier-by-supplier savings visible over time. The Procurement Advisor's defaults shift with what the data shows." },
      ],
      note: "Numbers per deployment vary by network size, fuel mix, and baseline. We publish ranges from real deployments. See the Red Petroleum case for one deployment's actual movement.",
    },
    how: {
      label: 'How it works',
      h2: 'The full functional surface, in four clusters.',
      lede: 'Fourteen capabilities, organised by how the operator actually meets them — what you see, what you act on, what you track over time, and what runs without you.',
      clusters: [
        { eyebrow: 'Visibility', name: 'What you see on day one', items: [
          { name: 'AI Briefing', body: 'Plain-language daily summary — Action Required, Good News, Savings Tip. Free-form chat answers questions from live data.' },
          { name: 'Stockout Forecast', body: 'Days remaining until critical level per station × fuel. Includes in-transit and split-wagon transfers.' },
          { name: 'Fuel Level Forecast', body: 'Per-station stock projection charts with region and fuel filters.' },
          { name: 'Station Fill Levels', body: 'Per-station, per-fuel % capacity and tonnage, sorted by urgency.' },
        ]},
        { eyebrow: 'Decision surface', name: 'What you act on', items: [
          { name: 'Procurement Advisor', body: 'Concrete order recommendations with supplier, tonnage, deadline, price. Statuses CRITICAL / ORDER / OK. One-click PO creation.' },
          { name: 'Reserves Panel', body: 'Fuel held at supplier without destination. Release reserve assigns to a specific station with capacity check.' },
          { name: 'Delivery conflict resolver', body: 'Auto-Distribute reroutes overflow wagons to nearest stations with free capacity. Audit trail.' },
          { name: 'Forced Order flow', body: 'Senior management override path with audit trail and ship-history fallback.' },
        ]},
        { eyebrow: 'History & money', name: 'What you track over time', items: [
          { name: 'Working Capital', body: '$ frozen in inventory and where to release.' },
          { name: 'Inventory Turnover', body: 'Per-fuel turnover rate, days on hand, value at stake.' },
          { name: 'Recommendation History', body: 'Daily snapshots — rewind to any past day to see what was advised and what happened.' },
          { name: 'Shipments Timeline', body: '14 / 30 / 60-day forward view per station. Color-coded OK / Tight / Conflict.' },
        ]},
        { eyebrow: 'Autonomous', name: 'What runs without you', items: [
          { name: 'Auto-import (cron, ~03:30 local)', body: 'Pulls fresh stocks and orders from ERP. No manual upload.' },
          { name: 'Telegram alert mirror', body: 'Critical events pushed to operator group regardless of web availability.' },
        ]},
      ],
    },
    screens: {
      label: 'Selected views',
      h2: 'What it actually looks like.',
      lede: 'Four operator surfaces, lifted from a live deployment. At this display size the structure and density are visible but individual numbers are not — the way it should be.',
    },
    scenarios: {
      label: 'Strategy & Scenarios',
      h2: 'Five operating modes, one engine.',
      lede: 'Optimus runs the same forecast engine in five postures — pick the one that matches the moment. The procurement recommendations, working-capital pressure, and inventory posture re-balance accordingly. CFO-grade comparison built into the operator surface.',
      imgAlt: 'Optimus Strategy and Scenarios — side-by-side mode comparison table across Standard Safety / Cost Optimization / Cash Conservation / Balanced / Crisis',
      imgCaption: 'Mode comparison table — same inputs, five different recommendation sets, visible side-by-side.',
      cards: [
        { tag: 'Standard Safety', body: 'Default. Conservative buffers, 45-day horizon, low surprise risk.' },
        { tag: 'Cost Optimization', body: 'Push for cheapest landed price across the network. Tighter buffers, more sensitivity to supplier price shifts.' },
        { tag: 'Cash Conservation', body: 'Minimise capital lock. Lower inventory days, smaller PO sizes, accept slightly tighter operating margin.' },
        { tag: 'Balanced', body: 'Median posture between cost, cash, and risk. Useful default when conditions are stable.' },
        { tag: 'Crisis', body: 'Hold-the-line mode. Survive the immediate window, defer everything that can be deferred.' },
      ],
      tail: 'Each mode produces a different recommendation set against the same operational reality — visible side-by-side. Mode comparison view in the screenshot above.',
    },
    deployments: {
      label: 'In pilot',
      h2: 'In pilot at Red Petroleum.',
      name: 'Red Petroleum',
      meta: 'Kyrgyzstan · Pilot',
      stats: [
        { num: '250', label: 'stations' },
        { num: 'Pilot', label: 'live trial' },
      ],
      body: 'An independent fuel network piloting Optimus for procurement and margin — buying on connected data instead of experience and availability.',
      link: 'Read the case →',
    },
    pullquote: 'Numbers per deployment vary by network size, fuel mix, and baseline. We publish ranges from real deployments.',
    cta: {
      heading: 'See if Optimus fits your network.',
      body: 'A two-week diagnostic looks at your pricing posture, margin posture, and station-level operations — and tells you what shipping Optimus into your network would actually look like.',
      primary: 'Book a diagnostic',
      secondary: 'Read the Red Petroleum case',
    },
  },

  de: {
    meta: {
      title: 'Optimus — KKT',
      description: 'Die Beschaffungs- und Margen-Engine für Tankstellennetze — Einkauf auf vernetzten Daten statt aus Erfahrung. Im Pilotbetrieb bei Red Petroleum, Kirgisistan.',
    },
    sectionLabel: 'Lösungen — Optimus',
    h1: 'Optimus.',
    heroSub: 'Die Beschaffungs- und Margen-Engine für Tankstellennetze.',
    lede: 'Optimus macht aus dem Kraftstoffeinkauf eine datenbasierte Entscheidung statt einer, die auf Erfahrung und Verfügbarkeit beruht. Jeden Morgen zieht es Live-ERP-Daten — aktuelle Bestände, Bestellungen unterwegs, Verkäufe je Station, Lieferantenangebote — prognostiziert, wann jede Position aus Station × Kraftstoffsorte kritisch wird, kennzeichnet eingehende Lieferkonflikte, bei denen das ankommende Volumen die Tankkapazität übersteigt, und erstellt konkrete Beschaffungsempfehlungen: welcher Lieferant, wie viele Tonnen, bis wann, zu welchem Preis.',
    defPre: 'Der Nutzer ist der Leiter der Versorgung. Der morgendliche Ablauf dauert 10 bis 15 Minuten: das Briefing lesen, die kritischen Positionen schließen, die Empfehlungen bestätigen oder anpassen, die Bestellungen auslösen. Optimus läuft im Pilotbetrieb bei Red Petroleum — einem unabhängigen Tankstellennetz in Kirgisistan mit rund 250 Stationen. Es ist eine Ausprägung unserer Arbeitsweise im Kraftstoffgeschäft: die Beschaffungs- und Margen-Engine, auf vernetzten Daten — die umfassendere Netzwerk-Ökonomie steht auf der ',
    defLink: 'Tankstellen-Seite',
    defPost: '.',
    ctaPrimary: 'Demo buchen',
    ctaSecondary: 'Den Red-Petroleum-Fall lesen',
    pulse: {
      erpT: 'ERP', erpS: 'Bestände · unterwegs · Verkäufe',
      forecastT: 'Prognose-Engine', forecastS: 'Fehlbestand × Lieferung',
      advisorT: 'Beschaffungsberater', advisorS: 'Lieferant · Tonnage · Preis',
      operatorChip: '08:00', operatorT: 'Operator', operatorS: '10–15 Min · bestätigen oder übersteuern, Bestellungen auslösen',
      note: 'Kritische Warnungen werden den ganzen Tag in eine Telegram-Gruppe gespiegelt — unabhängig von der Weboberfläche.',
      caption: 'Täglicher Takt: die Daten landen um 03:30, der Leiter der Versorgung öffnet Optimus um 08:00, zehn bis fünfzehn Minuten später sind die Beschaffungsentscheidungen des Tages ausgelöst.',
      ariaLabel: 'Täglicher Optimus-Takt: ERP-Import um 03:30, Prognose-Engine, Beschaffungsberater, Operator um 08:00; kritische Warnungen werden unabhängig vom Web nach Telegram gespiegelt.',
    },
    morning: {
      label: 'Ein Morgen am Operator-Arbeitsplatz',
      h2: 'Zehn bis fünfzehn Minuten, dann beginnt der Tag.',
      steps: [
        { name: '8:00 Uhr — Das Briefing öffnen.', body: 'Der Leiter der Versorgung öffnet Optimus und sieht den Stand der gestrigen Pipeline auf einen Blick — statt 40 Minuten Abstimmung. Handlungsbedarf. Gute Nachrichten. Spartipp. Was sich seit gestern geändert hat.' },
        { name: 'Kritische Positionen schließen.', body: 'Der Beschaffungsberater zeigt jede Station × Kraftstoff, die innerhalb des Planungsfensters den kritischen Stand erreicht. Jede Zeile hat bereits einen empfohlenen Lieferanten, eine Tonnage und einen Termin. Bestätigen oder übersteuern.' },
        { name: 'Lieferkonflikte lösen.', body: 'Übersteigt das ankommende Volumen die verfügbare Tankkapazität, leitet Auto-Distribute den Überschuss zu den nächstgelegenen Stationen mit freier Kapazität um. Der Operator sieht das vorgeschlagene Routing, nicht nur eine Warnung.' },
        { name: 'Die Bestellungen auslösen.', body: 'Bestellungen mit einem Klick auf bestätigte Empfehlungen. Das Reserven-Panel deckt Kraftstoff ab, der ohne Ziel beim Lieferanten liegt — einer Station mit Kapazitätsprüfung zuweisen.' },
        { name: 'Weggehen.', body: 'Kritische Warnungen werden in eine Telegram-Gruppe gespiegelt. Der Operator ist für den Rest des Tages nicht auf die Weboberfläche angewiesen.' },
      ],
    },
    changes: {
      label: 'Was sich tatsächlich ändert',
      h2: 'Was sich ändert.',
      outcomes: [
        { title: 'Fehlbestände', body: 'Weniger überraschende kritische Positionen. Die Prognose zeigt sie Tage im Voraus, wenn noch Zeit zum Handeln bleibt.' },
        { title: 'Working Capital', body: 'Im Bestand gebundenes Kapital wird je Kraftstoff und Region sichtbar — und ebenso, wo es freizusetzen ist. Der Lagerumschlag ist keine Quartalsprüfung mehr, sondern eine tägliche Entscheidung.' },
        { title: 'Beschaffungstempo', body: 'Entscheidungen, die einen halben Tag Abstimmung kosteten, dauern jetzt Minuten. Der Operator sieht die Empfehlung und die Daten dahinter auf demselben Bildschirm.' },
        { title: 'Lieferantenkonsolidierung', body: 'Die Empfehlungshistorie macht Einsparungen Lieferant für Lieferant über die Zeit sichtbar. Die Voreinstellungen des Beschaffungsberaters verschieben sich mit dem, was die Daten zeigen.' },
      ],
      note: 'Die Zahlen je Einsatz variieren mit Netzgröße, Kraftstoffmix und Ausgangslage. Wir veröffentlichen Spannen aus echten Einsätzen. Der Red-Petroleum-Fall zeigt die tatsächliche Bewegung eines Einsatzes.',
    },
    how: {
      label: 'Wie es funktioniert',
      h2: 'Die volle Funktionsfläche, in vier Clustern.',
      lede: 'Vierzehn Funktionen, geordnet danach, wie der Operator ihnen tatsächlich begegnet — was man sieht, worauf man handelt, was man über die Zeit verfolgt und was ohne einen läuft.',
      clusters: [
        { eyebrow: 'Sichtbarkeit', name: 'Was man am ersten Tag sieht', items: [
          { name: 'KI-Briefing', body: 'Tägliche Zusammenfassung in Klartext — Handlungsbedarf, gute Nachrichten, Spartipp. Freier Chat beantwortet Fragen aus Live-Daten.' },
          { name: 'Fehlbestand-Prognose', body: 'Verbleibende Tage bis zum kritischen Stand je Station × Kraftstoff. Inklusive Transporten unterwegs und geteilten Waggons.' },
          { name: 'Füllstand-Prognose', body: 'Bestandsprojektions-Diagramme je Station mit Filtern nach Region und Kraftstoff.' },
          { name: 'Stations-Füllstände', body: '% Kapazität und Tonnage je Station und Kraftstoff, nach Dringlichkeit sortiert.' },
        ]},
        { eyebrow: 'Entscheidungsfläche', name: 'Worauf man handelt', items: [
          { name: 'Beschaffungsberater', body: 'Konkrete Bestellempfehlungen mit Lieferant, Tonnage, Termin, Preis. Status CRITICAL / ORDER / OK. Bestellung mit einem Klick.' },
          { name: 'Reserven-Panel', body: 'Kraftstoff, der ohne Ziel beim Lieferanten liegt. „Reserve freigeben“ weist ihn einer bestimmten Station mit Kapazitätsprüfung zu.' },
          { name: 'Lieferkonflikt-Löser', body: 'Auto-Distribute leitet überzählige Waggons zu den nächstgelegenen Stationen mit freier Kapazität um. Mit Audit-Trail.' },
          { name: 'Zwangsbestellung', body: 'Übersteuerungspfad für die Geschäftsführung mit Audit-Trail und Rückgriff auf die Versandhistorie.' },
        ]},
        { eyebrow: 'Historie & Geld', name: 'Was man über die Zeit verfolgt', items: [
          { name: 'Working Capital', body: 'Im Bestand gebundenes Kapital und wo es freizusetzen ist.' },
          { name: 'Lagerumschlag', body: 'Umschlagsrate je Kraftstoff, Reichweite in Tagen, gebundener Wert.' },
          { name: 'Empfehlungshistorie', body: 'Tägliche Momentaufnahmen — zu jedem vergangenen Tag zurückspulen und sehen, was empfohlen wurde und was geschah.' },
          { name: 'Lieferungs-Zeitleiste', body: 'Vorausschau über 14 / 30 / 60 Tage je Station. Farbcodiert OK / Eng / Konflikt.' },
        ]},
        { eyebrow: 'Autonom', name: 'Was ohne einen läuft', items: [
          { name: 'Auto-Import (Cron, ~03:30 lokal)', body: 'Zieht frische Bestände und Bestellungen aus dem ERP. Kein manuelles Hochladen.' },
          { name: 'Telegram-Warnungsspiegel', body: 'Kritische Ereignisse werden an die Operator-Gruppe gesendet, unabhängig von der Web-Verfügbarkeit.' },
        ]},
      ],
    },
    screens: {
      label: 'Ausgewählte Ansichten',
      h2: 'Wie es tatsächlich aussieht.',
      lede: 'Vier Operator-Oberflächen aus einem Live-Einsatz. In dieser Anzeigegröße sind Struktur und Dichte sichtbar, einzelne Zahlen jedoch nicht — so wie es sein soll.',
    },
    scenarios: {
      label: 'Strategie & Szenarien',
      h2: 'Fünf Betriebsmodi, eine Engine.',
      lede: 'Optimus betreibt dieselbe Prognose-Engine in fünf Haltungen — wählen Sie die, die zum Moment passt. Die Beschaffungsempfehlungen, der Druck auf das Working Capital und die Bestandshaltung balancieren sich entsprechend neu aus. Ein Vergleich auf CFO-Niveau, direkt in der Operator-Oberfläche.',
      imgAlt: 'Optimus Strategie und Szenarien — Vergleichstabelle der Modi nebeneinander über Standard Safety / Cost Optimization / Cash Conservation / Balanced / Crisis',
      imgCaption: 'Modus-Vergleichstabelle — gleiche Eingaben, fünf verschiedene Empfehlungssätze, nebeneinander sichtbar.',
      cards: [
        { tag: 'Standard Safety', body: 'Standard. Konservative Puffer, 45-Tage-Horizont, geringes Überraschungsrisiko.' },
        { tag: 'Cost Optimization', body: 'Auf den günstigsten Landepreis im Netz drängen. Engere Puffer, höhere Empfindlichkeit gegenüber Preisbewegungen der Lieferanten.' },
        { tag: 'Cash Conservation', body: 'Kapitalbindung minimieren. Weniger Lagertage, kleinere Bestellmengen, etwas knappere Betriebsmarge in Kauf nehmen.' },
        { tag: 'Balanced', body: 'Mittlere Haltung zwischen Kosten, Liquidität und Risiko. Sinnvoller Standard bei stabilen Bedingungen.' },
        { tag: 'Crisis', body: 'Haltelinie-Modus. Das unmittelbare Fenster überstehen, alles Aufschiebbare aufschieben.' },
      ],
      tail: 'Jeder Modus erzeugt gegen dieselbe operative Realität einen anderen Empfehlungssatz — nebeneinander sichtbar. Die Modus-Vergleichsansicht zeigt der Screenshot oben.',
    },
    deployments: {
      label: 'Im Pilotbetrieb',
      h2: 'Im Pilotbetrieb bei Red Petroleum.',
      name: 'Red Petroleum',
      meta: 'Kirgisistan · Pilot',
      stats: [
        { num: '250', label: 'Stationen' },
        { num: 'Pilot', label: 'Live-Testbetrieb' },
      ],
      body: 'Ein unabhängiges Tankstellennetz, das Optimus für Beschaffung und Marge pilotiert — Einkauf auf vernetzten Daten statt aus Erfahrung und Verfügbarkeit.',
      link: 'Den Fall lesen →',
    },
    pullquote: 'Die Zahlen je Einsatz variieren mit Netzgröße, Kraftstoffmix und Ausgangslage. Wir veröffentlichen Spannen aus echten Einsätzen.',
    cta: {
      heading: 'Prüfen Sie, ob Optimus zu Ihrem Netz passt.',
      body: 'Eine zweiwöchige Diagnose betrachtet Ihre Preis- und Margenhaltung sowie den Betrieb auf Stationsebene — und zeigt, wie es konkret aussähe, Optimus in Ihr Netz zu bringen.',
      primary: 'Diagnose buchen',
      secondary: 'Den Red-Petroleum-Fall lesen',
    },
  },

  et: {
    meta: {
      title: 'Optimus — KKT',
      description: 'Hanke- ja marginaalimootor kütusevõrkudele — ostmine ühendatud andmetel, mitte kogemusel. Piloodis Red Petroleumis, Kõrgõzstanis.',
    },
    sectionLabel: 'Lahendused — Optimus',
    h1: 'Optimus.',
    heroSub: 'Hanke- ja marginaalimootor kütusevõrkudele.',
    lede: 'Optimus muudab kütuse ostmise kogemusel ja saadavusel põhinevast otsusest andmepõhiseks. Igal hommikul tõmbab see live ERP-andmeid — praegused laoseisud, teel olevad tellimused, jaamapõhine müük, tarnijate pakkumised — prognoosib, millal iga jaam × kütuseliik jõuab kriitilisele tasemele, märgib sissetulevad tarnekonfliktid, kus saabuv maht ületab paagi mahtu, ja koostab konkreetsed hankesoovitused: milline tarnija, mitu tonni, mis kuupäevaks, millise hinnaga.',
    defPre: 'Kasutaja on varustusjuht. Hommikune töövoog kestab 10 kuni 15 minutit: loe briifing, sulge kriitilised positsioonid, kinnita või kohanda soovitused, väljasta tellimused. Optimus on piloodis Red Petroleumis — sõltumatus kütusevõrgus Kõrgõzstanis, umbes 250 jaama. See on üks kehastus sellest, kuidas me kütusevaldkonnas töötame: hanke- ja marginaalimootor ühendatud andmetel — laiem võrgumajandus on ',
    defLink: 'kütuse jaemüügi lehel',
    defPost: '.',
    ctaPrimary: 'Broneeri demo',
    ctaSecondary: 'Loe Red Petroleumi juhtumit',
    pulse: {
      erpT: 'ERP', erpS: 'laoseisud · teel · müük',
      forecastT: 'Prognoosimootor', forecastS: 'laovähesus × tarne',
      advisorT: 'Hankenõustaja', advisorS: 'tarnija · tonnaaž · hind',
      operatorChip: '08:00', operatorT: 'Operaator', operatorS: '10–15 min · kinnita või tühista, väljasta tellimused',
      note: 'Kriitilised teated peegelduvad terve päeva Telegrami gruppi — sõltumatult veebiliidesest.',
      caption: 'Päevarütm: andmed saabuvad 03:30, varustusjuht avab Optimuse 08:00, kümme kuni viisteist minutit hiljem on päeva hankeotsused väljastatud.',
      ariaLabel: 'Optimuse päevarütm: ERP-import 03:30, prognoosimootor, hankenõustaja, operaator 08:00; kriitilised teated peegelduvad Telegrami veebist sõltumatult.',
    },
    morning: {
      label: 'Hommik operaatori laua taga',
      h2: 'Kümme kuni viisteist minutit, siis algab päev.',
      steps: [
        { name: '8:00 — Ava briifing.', body: 'Varustusjuht avab Optimuse ja näeb eilse torujuhtme värskust ühe pilguga, mitte 40 minutit kooskõlastust. Tegevus vajalik. Head uudised. Säästunõuanne. Mis on eilsest muutunud.' },
        { name: 'Sulge kriitilised positsioonid.', body: 'Hankenõustaja toob esile iga jaama × kütuse, mis jõuab planeerimisaknas kriitilisele tasemele. Igal real on juba soovitatud tarnija, tonnaaž ja tähtaeg. Kinnita või tühista.' },
        { name: 'Lahenda tarnekonfliktid.', body: 'Kui saabuv maht ületab vaba paagimahu, suunab Auto-Distribute ülejäägi lähimatesse vaba mahuga jaamadesse. Operaator näeb pakutud marsruuti, mitte ainult hoiatust.' },
        { name: 'Väljasta tellimused.', body: 'Kinnitatud soovitustel tellimuse loomine ühe klikiga. Reservide paneel katab kütuse, mis on tarnija juures ilma sihtkohata — määra see jaamale koos mahukontrolliga.' },
        { name: 'Mine ära.', body: 'Kriitilised teated peegelduvad Telegrami gruppi. Operaator ei sõltu ülejäänud päeva jooksul veebiliidesest.' },
      ],
    },
    changes: {
      label: 'Mida see tegelikult muudab',
      h2: 'Mida see muudab.',
      outcomes: [
        { title: 'Laovähesus', body: 'Vähem ootamatuid kriitilisi positsioone. Prognoos toob need esile päevi enne, kui veel on aega tegutseda.' },
        { title: 'Käibekapital', body: 'Laos kinni olev raha muutub nähtavaks kütuse ja piirkonna kaupa — ja ka see, kus seda vabastada. Laoringlus pole enam kvartaliülevaade, vaid igapäevane otsus.' },
        { title: 'Hankekiirus', body: 'Otsused, mis võtsid pool päeva kooskõlastust, võtavad nüüd minuteid. Operaator näeb soovitust ja selle taga olevaid andmeid samal ekraanil.' },
        { title: 'Tarnijate koondamine', body: 'Soovituste ajalugu teeb tarnijapõhise säästu aja jooksul nähtavaks. Hankenõustaja vaikeväärtused nihkuvad vastavalt sellele, mida andmed näitavad.' },
      ],
      note: 'Numbrid juurutuse kohta sõltuvad võrgu suurusest, kütusevalikust ja lähtetasemest. Avaldame vahemikke päris juurutustest. Red Petroleumi juhtum näitab ühe juurutuse tegelikku liikumist.',
    },
    how: {
      label: 'Kuidas see töötab',
      h2: 'Kogu funktsionaalne pind, neljas klastris.',
      lede: 'Neliteist võimekust, korrastatud selle järgi, kuidas operaator nendega tegelikult kokku puutub — mida sa näed, mille peale tegutsed, mida jälgid aja jooksul ja mis töötab ilma sinuta.',
      clusters: [
        { eyebrow: 'Nähtavus', name: 'Mida sa esimesel päeval näed', items: [
          { name: 'TI-briifing', body: 'Igapäevane kokkuvõte selges keeles — tegevus vajalik, head uudised, säästunõuanne. Vaba vestlus vastab küsimustele live-andmetest.' },
          { name: 'Laovähesuse prognoos', body: 'Päevi kriitilise tasemeni jaama × kütuse kohta. Sealhulgas transiidis ja jagatud vagunites.' },
          { name: 'Kütusetaseme prognoos', body: 'Jaamapõhised laoseisu projektsiooni graafikud piirkonna ja kütuse filtritega.' },
          { name: 'Jaamade täituvus', body: '% maht ja tonnaaž jaama ja kütuse kohta, sorteeritud kiireloomulisuse järgi.' },
        ]},
        { eyebrow: 'Otsustuspind', name: 'Mille peale sa tegutsed', items: [
          { name: 'Hankenõustaja', body: 'Konkreetsed tellimissoovitused tarnija, tonnaaži, tähtaja ja hinnaga. Staatused CRITICAL / ORDER / OK. Tellimuse loomine ühe klikiga.' },
          { name: 'Reservide paneel', body: 'Tarnija juures ilma sihtkohata hoitav kütus. „Vabasta reserv“ määrab selle kindlale jaamale koos mahukontrolliga.' },
          { name: 'Tarnekonflikti lahendaja', body: 'Auto-Distribute suunab ülejäägi vagunid lähimatesse vaba mahuga jaamadesse. Auditi jälg.' },
          { name: 'Sundtellimuse voog', body: 'Tippjuhtkonna tühistusrada koos auditi jälje ja saatmisajaloo varuvariandiga.' },
        ]},
        { eyebrow: 'Ajalugu & raha', name: 'Mida sa aja jooksul jälgid', items: [
          { name: 'Käibekapital', body: 'Laos kinni olev raha ja kus seda vabastada.' },
          { name: 'Laoringlus', body: 'Ringluskiirus kütuse kohta, päevi laos, kaalul olev väärtus.' },
          { name: 'Soovituste ajalugu', body: 'Igapäevased hetktõmmised — keri tagasi mis tahes möödunud päeva, et näha, mida soovitati ja mis juhtus.' },
          { name: 'Tarnete ajatelg', body: '14 / 30 / 60-päevane edasivaade jaama kohta. Värvikoodiga OK / Pingeline / Konflikt.' },
        ]},
        { eyebrow: 'Autonoomne', name: 'Mis töötab ilma sinuta', items: [
          { name: 'Automaatne import (cron, ~03:30 kohalik)', body: 'Tõmbab ERP-ist värsked laoseisud ja tellimused. Käsitsi üleslaadimist pole.' },
          { name: 'Telegrami teadete peegel', body: 'Kriitilised sündmused saadetakse operaatorite gruppi olenemata veebi kättesaadavusest.' },
        ]},
      ],
    },
    screens: {
      label: 'Valitud vaated',
      h2: 'Kuidas see tegelikult välja näeb.',
      lede: 'Neli operaatori pinda, võetud live-juurutusest. Selles kuvasuuruses on struktuur ja tihedus nähtavad, kuid üksikud numbrid mitte — nii nagu peabki.',
    },
    scenarios: {
      label: 'Strateegia & stsenaariumid',
      h2: 'Viis töörežiimi, üks mootor.',
      lede: 'Optimus käitab sama prognoosimootorit viies hoiakus — vali see, mis hetkele sobib. Hankesoovitused, surve käibekapitalile ja laohoiak tasakaalustuvad vastavalt. CFO-tasemel võrdlus, sisse ehitatud operaatori pinda.',
      imgAlt: 'Optimus Strateegia ja stsenaariumid — režiimide kõrvutav võrdlustabel: Standard Safety / Cost Optimization / Cash Conservation / Balanced / Crisis',
      imgCaption: 'Režiimide võrdlustabel — samad sisendid, viis erinevat soovituste komplekti, kõrvuti nähtavad.',
      cards: [
        { tag: 'Standard Safety', body: 'Vaikimisi. Konservatiivsed puhvrid, 45-päevane horisont, madal üllatusrisk.' },
        { tag: 'Cost Optimization', body: 'Suru kogu võrgus odavaima maandatud hinna poole. Tihedamad puhvrid, suurem tundlikkus tarnijate hinnamuutuste suhtes.' },
        { tag: 'Cash Conservation', body: 'Minimeeri kapitali kinnijäämist. Vähem laopäevi, väiksemad tellimused, lepi veidi pingelisema tegevusmarginaaliga.' },
        { tag: 'Balanced', body: 'Keskmine hoiak kulu, raha ja riski vahel. Kasulik vaikimisi, kui tingimused on stabiilsed.' },
        { tag: 'Crisis', body: 'Hoia-liini režiim. Ela vahetu aken üle, lükka edasi kõik, mida saab edasi lükata.' },
      ],
      tail: 'Iga režiim toodab sama tegevusreaalsuse vastu erineva soovituste komplekti — kõrvuti nähtavad. Režiimide võrdlusvaade on ülal oleval kuvatõmmisel.',
    },
    deployments: {
      label: 'Piloodis',
      h2: 'Piloodis Red Petroleumis.',
      name: 'Red Petroleum',
      meta: 'Kõrgõzstan · Piloot',
      stats: [
        { num: '250', label: 'jaama' },
        { num: 'Piloot', label: 'live-katsetus' },
      ],
      body: 'Sõltumatu kütusevõrk, mis pilodib Optimust hanke ja marginaali jaoks — ostmine ühendatud andmetel kogemuse ja saadavuse asemel.',
      link: 'Loe juhtumit →',
    },
    pullquote: 'Numbrid juurutuse kohta sõltuvad võrgu suurusest, kütusevalikust ja lähtetasemest. Avaldame vahemikke päris juurutustest.',
    cta: {
      heading: 'Vaata, kas Optimus sobib su võrku.',
      body: 'Kahenädalane diagnostika vaatab su hinnastamise hoiakut, marginaali hoiakut ja jaamatasandi tegevust — ja ütleb, milline Optimuse toomine su võrku tegelikult välja näeks.',
      primary: 'Broneeri diagnostika',
      secondary: 'Loe Red Petroleumi juhtumit',
    },
  },
};

export function useOptimus(locale: string | undefined): OptimusDict {
  return OPTIMUS[(locale as Locale)] ?? OPTIMUS.en;
}
