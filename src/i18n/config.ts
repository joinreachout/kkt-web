// i18n helpers. English is the default locale at the site root (no prefix);
// German and Estonian live under /de/ and /et/. Astro sets Astro.currentLocale
// from the URL; these helpers handle link localisation and hreflang alternates.

export const LOCALES = ['en', 'de', 'et', 'th', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Locales the whole site is published in. Every dictionary must carry all of
// them; the switcher offers them on every page.
export const FULL_LOCALES = ['en', 'de', 'et', 'th'] as const;
export type FullLocale = (typeof FULL_LOCALES)[number];

// Partial locales exist for a named handful of pages only — Russian covers the
// Optimus page and nothing else. They never appear in the switcher or in
// hreflang anywhere outside those pages, so adding one carries no obligation
// to translate the rest of the site. Extend a locale by listing another path.
export const PARTIAL_LOCALE_PATHS: Partial<Record<Locale, readonly string[]>> = {
  ru: ['/solutions/optimus'],
};
export function isPartialLocale(loc: Locale): boolean {
  return loc in PARTIAL_LOCALE_PATHS;
}

// Dictionary shape: the full locales are mandatory, partial ones optional and
// allowed to carry a subset (see useStrings — missing groups fall back to EN).
export type LocaleDict<T> = Record<FullLocale, T> & Partial<Record<Locale, T>>;
export type PartialLocaleDict<T> = Record<FullLocale, T> & Partial<Record<Locale, Partial<T>>>;

// Native language names for the switcher, plus the BCP-47 tag for <html lang>
// and hreflang.
export const LANGS: Record<Locale, { label: string; native: string; bcp47: string; flag: string }> = {
  en: { label: 'EN', native: 'English', bcp47: 'en', flag: '🇬🇧' },
  ru: { label: 'RU', native: 'Русский', bcp47: 'ru', flag: '🇷🇺' },
  de: { label: 'DE', native: 'Deutsch', bcp47: 'de', flag: '🇩🇪' },
  et: { label: 'ET', native: 'Eesti', bcp47: 'et', flag: '🇪🇪' },
  th: { label: 'TH', native: 'ไทย', bcp47: 'th', flag: '🇹🇭' },
};

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

export function toLocale(x: string | undefined): Locale {
  return isLocale(x) ? x : DEFAULT_LOCALE;
}

// Strip any leading non-default locale prefix (/de, /et, /th, …) → the
// canonical EN path (always starts with "/", trailing slash preserved). The
// prefix set is derived from LOCALES, so adding a locale can never trap the
// switcher on that language (omitting a prefix here makes the "English" target
// resolve back to the prefixed path instead of "/").
const PREFIX_RE = new RegExp(`^/(${LOCALES.filter((l) => l !== DEFAULT_LOCALE).join('|')})(/|$)`);
export function stripLocale(pathname: string): string {
  const m = pathname.match(PREFIX_RE);
  if (!m) return pathname || '/';
  const rest = pathname.slice(m[1].length + 1);
  return rest.startsWith('/') ? rest : '/' + rest;
}

// Paths that currently have de/et versions. Grows as pages are localised.
// Anything not in here falls back to English so links never 404 mid-rollout.
export const TRANSLATED_PATHS = new Set<string>(['/', '/industries/retail', '/industries/fuel-retail', '/solutions', '/solutions/optimus', '/case-studies', '/about', '/contact', '/blog']);

// Membership test against TRANSLATED_PATHS, tolerant of a trailing slash —
// Astro.url.pathname carries one (e.g. "/solutions/optimus/") but the Set
// entries don't, so normalise before the lookup.
function isTranslated(base: string): boolean {
  const key = base === '/' ? '/' : base.replace(/\/$/, '');
  return TRANSLATED_PATHS.has(key);
}

export function hasTranslation(pathname: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  const base = stripLocale(pathname);
  const partial = PARTIAL_LOCALE_PATHS[locale];
  if (partial) {
    const key = base === '/' ? '/' : base.replace(/\/$/, '');
    return partial.includes(key);
  }
  return isTranslated(base);
}

// Localise an EN (root) path for the given locale. EN stays unprefixed.
// If the target page isn't translated yet, return the English path so the
// link still resolves (no 404 during the rollout).
export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  if (!hasTranslation(base, locale)) return base;
  if (base === '/') return `/${locale}/`;
  return `/${locale}${base}`;
}

// hreflang alternates for the current path: one per locale + x-default (EN).
// A partial locale is announced only on the pages it actually covers —
// otherwise every page on the site would claim a Russian alternate that is
// really the English page.
export function alternates(pathname: string, site: string | URL | undefined) {
  const origin = site ? new URL(site).origin : 'https://kittykat.tech';
  const list = LOCALES.filter((loc) => !isPartialLocale(loc) || hasTranslation(pathname, loc)).map((loc) => ({
    hreflang: LANGS[loc].bcp47,
    href: origin + localizePath(pathname, loc),
  }));
  list.push({ hreflang: 'x-default', href: origin + stripLocale(pathname) });
  return list;
}
