import type { SupportedLocale } from '../utils/types';
import { uiEs } from './es';
import { uiEn } from './en';
import { uiPt } from './pt';
import { uiFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/i18n/ui', `${l}.ts`);

const uiMap: Record<SupportedLocale, Record<string, string>> = {
  es: uiEs,
  en: uiEn,
  pt: uiPt,
  fr: uiFr,
};

export function getUI(locale: SupportedLocale): Record<string, string> {
  return getCachedData(
    'ui', locale, [dep(locale)],
    () => uiMap[locale] || uiMap.es
  );
}

export function t(locale: SupportedLocale, key: string): string {
  const ui = getUI(locale);
  return ui[key] || key;
}
