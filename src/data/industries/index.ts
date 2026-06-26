import type { SupportedLocale } from '../../i18n/utils/types';
import type { IndustriesData } from './types';
import { industriesEs } from './es';
import { industriesEn } from './en';
import { industriesPt } from './pt';
import { industriesFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/industries', `${l}.ts`);

const industriesMap: Record<SupportedLocale, IndustriesData> = {
  es: industriesEs,
  en: industriesEn,
  pt: industriesPt,
  fr: industriesFr,
};

export function getIndustriesData(locale: SupportedLocale): IndustriesData {
  return getCachedData(
    'industries', locale, [dep(locale)],
    () => industriesMap[locale] || industriesMap.es
  );
}
