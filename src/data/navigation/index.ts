import type { SupportedLocale, NavigationData } from '../../i18n/utils/types';
import { navEs } from './es';
import { navEn } from './en';
import { navPt } from './pt';
import { navFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/navigation', `${l}.ts`);

const navigationMap: Record<SupportedLocale, NavigationData> = {
  es: navEs,
  en: navEn,
  pt: navPt,
  fr: navFr,
};

export function getNavigation(locale: SupportedLocale): NavigationData {
  return getCachedData(
    'navigation', locale, [dep(locale)],
    () => navigationMap[locale] || navigationMap.es
  );
}
