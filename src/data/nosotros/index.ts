import type { SupportedLocale } from '../../i18n/utils/types';
import type { NosotrosData } from './types';
import { nosotrosEs } from './es';
import { nosotrosEn } from './en';
import { nosotrosPt } from './pt';
import { nosotrosFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/nosotros', `${l}.ts`);

const nosotrosMap: Record<SupportedLocale, NosotrosData> = {
  es: nosotrosEs,
  en: nosotrosEn,
  pt: nosotrosPt,
  fr: nosotrosFr,
};

export function getNosotrosData(locale: SupportedLocale): NosotrosData {
  return getCachedData(
    'nosotros', locale, [dep(locale)],
    () => nosotrosMap[locale] || nosotrosMap.es
  );
}
