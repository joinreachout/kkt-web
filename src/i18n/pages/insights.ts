// /insights chrome. German careful; Estonian first pass (verify).
// Post bodies are authored content (currently English) and are NOT translated
// here — only the listing/article chrome is localized. Post links resolve to the
// canonical (unprefixed) post URL regardless of locale.
import type { Locale } from '../config';

export type InsightsDict = {
  meta: { title: string; description: string };
  sectionLabel: string;
  h1: string;
  lede: string;
  emptyP1: string;
  emptyP2: string;
  links: {
    retailTitle: string; retailDesc: string;
    fuelTitle: string; fuelDesc: string;
    solutionsTitle: string; solutionsDesc: string;
  };
  readArrow: string;
  backAll: string;
  rssPre: string; rssLink: string; advisorBtn: string;
  linkedin: { label: string; note: string; cta: string };
  dateLocale: string;
};

export const INSIGHTS: Record<Locale, InsightsDict> = {
  en: {
    meta: {
      title: 'Blog — KKT',
      description: 'Working in public. Notes from the inside of mid-sized retail and fuel-retail engagements.',
    },
    sectionLabel: 'Blog — Working in Public',
    h1: 'Notes from inside the engagements.',
    lede: 'Two named authors, one post a month, no marketing fluff. What we are actually shipping, what is not working, and what we have changed our minds about.',
    emptyP1: 'First posts ship with the public site. Two named authors, one post a month — what we are actually shipping, what is not working, what we have changed our minds about.',
    emptyP2: 'Until the column starts, the open work lives here:',
    links: {
      retailTitle: 'Retail AI Canvas — open playbook ↗', retailDesc: '43 services across 11 retail domains, updated quarterly.',
      fuelTitle: 'Fuel AI Transformation Map ↗', fuelDesc: 'The whole fuel network economy in seven blocks.',
      solutionsTitle: 'Our Solutions', solutionsDesc: 'Optimus and Codoo — products we built and run.',
    },
    readArrow: 'Read →',
    backAll: '← All posts',
    rssPre: 'Subscribe via ', rssLink: 'RSS', advisorBtn: 'Ask the advisor',
    linkedin: {
      label: 'From LinkedIn',
      note: 'We post there more often than here — shorter takes from live engagements.',
      cta: 'Follow KKT on LinkedIn',
    },
    dateLocale: 'en-GB',
  },

  de: {
    meta: {
      title: 'Blog — KKT',
      description: 'Öffentlich arbeiten. Notizen aus dem Inneren von Einzelhandels- und Tankstellen-Engagements im Mittelstand.',
    },
    sectionLabel: 'Blog — Öffentlich arbeiten',
    h1: 'Notizen aus dem Inneren der Projekte.',
    lede: 'Zwei namentlich genannte Autoren, ein Beitrag pro Monat, kein Marketing-Geschwätz. Was wir tatsächlich liefern, was nicht funktioniert und wobei wir unsere Meinung geändert haben.',
    emptyP1: 'Die ersten Beiträge erscheinen mit der öffentlichen Website. Zwei namentlich genannte Autoren, ein Beitrag pro Monat — was wir tatsächlich liefern, was nicht funktioniert, wobei wir unsere Meinung geändert haben.',
    emptyP2: 'Bis die Kolumne startet, liegt die offene Arbeit hier:',
    links: {
      retailTitle: 'Retail-AI-Canvas — offenes Playbook ↗', retailDesc: '43 Services über 11 Einzelhandels-Domänen, vierteljährlich aktualisiert.',
      fuelTitle: 'Fuel-AI-Transformationskarte ↗', fuelDesc: 'Die gesamte Tankstellennetz-Ökonomie in sieben Blöcken.',
      solutionsTitle: 'Unsere Lösungen', solutionsDesc: 'Optimus und Codoo — Produkte, die wir gebaut haben und betreiben.',
    },
    readArrow: 'Lesen →',
    backAll: '← Alle Beiträge',
    rssPre: 'Abonnieren via ', rssLink: 'RSS', advisorBtn: 'KI-Berater fragen',
    linkedin: {
      label: 'Auf LinkedIn',
      note: 'Dort posten wir häufiger als hier — kürzere Notizen aus laufenden Projekten.',
      cta: 'KKT auf LinkedIn folgen',
    },
    dateLocale: 'de-DE',
  },

  et: {
    meta: {
      title: 'Blogi — KKT',
      description: 'Avalikult töötamine. Märkmed keskmise suurusega jaemüügi ja kütuse jaemüügi projektide seest.',
    },
    sectionLabel: 'Blogi — Avalikult töötamine',
    h1: 'Märkmed projektide seest.',
    lede: 'Kaks nimelist autorit, üks postitus kuus, ilma turundusmürata. Mida me tegelikult tarnime, mis ei toimi ja mille osas oleme meelt muutnud.',
    emptyP1: 'Esimesed postitused ilmuvad koos avaliku saidiga. Kaks nimelist autorit, üks postitus kuus — mida me tegelikult tarnime, mis ei toimi, mille osas oleme meelt muutnud.',
    emptyP2: 'Kuni veerg algab, elab avatud töö siin:',
    links: {
      retailTitle: 'Retail AI Canvas — avatud käsiraamat ↗', retailDesc: '43 teenust üle 11 jaemüügivaldkonna, värskendatud kvartalis.',
      fuelTitle: 'Fuel AI transformatsiooni kaart ↗', fuelDesc: 'Kogu kütusevõrgu majandus seitsmes plokis.',
      solutionsTitle: 'Meie lahendused', solutionsDesc: 'Optimus ja Codoo — tooted, mille me ehitasime ja mida käitame.',
    },
    readArrow: 'Loe →',
    backAll: '← Kõik postitused',
    rssPre: 'Telli ', rssLink: 'RSS', advisorBtn: 'Küsi TI-nõustajalt',
    linkedin: {
      label: 'LinkedInis',
      note: 'Postitame seal sagedamini kui siin — lühemad mõtted käimasolevatest projektidest.',
      cta: 'Jälgi KKT-d LinkedInis',
    },
    dateLocale: 'et-EE',
  },
};

export function useInsights(locale: string | undefined): InsightsDict {
  return INSIGHTS[(locale as Locale)] ?? INSIGHTS.en;
}
