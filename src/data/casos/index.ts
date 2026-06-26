import type { SupportedLocale } from '../../i18n/utils/types';
import type { CasosData } from './types';
import { casosEs } from './es';
import { casosEn } from './en';
import { casosPt } from './pt';
import { casosFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/casos', `${l}.ts`);

const casosMap: Record<SupportedLocale, CasosData> = {
  es: casosEs,
  en: casosEn,
  pt: casosPt,
  fr: casosFr,
};

export function getCasosData(locale: SupportedLocale): CasosData {
  return getCachedData(
    'casos', locale, [dep(locale)],
    () => casosMap[locale] || casosMap.es
  );
}
