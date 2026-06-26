import type { SupportedLocale } from '../../i18n/utils/types';
import type { OfertaData } from './types';
import { ofertaEs } from './es';
import { ofertaEn } from './en';
import { ofertaPt } from './pt';
import { ofertaFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/oferta', `${l}.ts`);

const ofertaMap: Record<SupportedLocale, OfertaData> = {
  es: ofertaEs,
  en: ofertaEn,
  pt: ofertaPt,
  fr: ofertaFr,
};

export function getOfertaData(locale: SupportedLocale): OfertaData {
  return getCachedData(
    'oferta', locale, [dep(locale)],
    () => ofertaMap[locale] || ofertaMap.es
  );
}
