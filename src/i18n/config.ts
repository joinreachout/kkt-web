// i18n helpers. English is the default locale at the site root (no prefix);
// German and Estonian live under /de/ and /et/. Astro sets Astro.currentLocale
// from the URL; these helpers handle link localisation and hreflang alternates.

export const LOCALES = ['en', 'de', 'et'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Native language names for the switcher, plus the BCP-47 tag for <html lang>
// and hreflang.
export const LANGS: Record<Locale, { label: string; native: string; bcp47: string; flag: string }> = {
  en: { label: 'EN', native: 'English', bcp47: 'en', flag: '🇬🇧' },
  de: { label: 'DE', native: 'Deutsch', bcp47: 'de', flag: '🇩🇪' },
  et: { label: 'ET', native: 'Eesti', bcp47: 'et', flag: '🇪🇪' },
};

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

export function toLocale(x: string | undefined): Locale {
  return isLocale(x) ? x : DEFAULT_LOCALE;
}

// Strip any leading /de or /et prefix → the canonical EN path (always starts
// with "/", trailing slash preserved).
export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/(de|et)(\/|$)/);
  if (!m) return pathname || '/';
  const rest = pathname.slice(m[1].length + 1);
  return rest.startsWith('/') ? rest : '/' + rest;
}

// Paths that currently have de/et versions. Grows as pages are localised.
// Anything not in here falls back to English so links never 404 mid-rollout.
export const TRANSLATED_PATHS = new Set<string>(['/', '/industries/retail', '/industries/fuel-retail', '/solutions', '/solutions/optimus', '/case-studies']);

export function hasTranslation(pathname: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return TRANSLATED_PATHS.has(stripLocale(pathname));
}

// Localise an EN (root) path for the given locale. EN stays unprefixed.
// If the target page isn't translated yet, return the English path so the
// link still resolves (no 404 during the rollout).
export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  if (!TRANSLATED_PATHS.has(base)) return base;
  if (base === '/') return `/${locale}/`;
  return `/${locale}${base}`;
}

// hreflang alternates for the current path: one per locale + x-default (EN).
export function alternates(pathname: string, site: string | URL | undefined) {
  const origin = site ? new URL(site).origin : 'https://kittykat.tech';
  const list = LOCALES.map((loc) => ({
    hreflang: LANGS[loc].bcp47,
    href: origin + localizePath(pathname, loc),
  }));
  list.push({ hreflang: 'x-default', href: origin + stripLocale(pathname) });
  return list;
}
