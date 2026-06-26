import type { SupportedLocale, ContactData } from '../../i18n/utils/types';
import { contactEs } from './es';
import { contactEn } from './en';
import { contactPt } from './pt';
import { contactFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/contact', `${l}.ts`);

const contactMap: Record<SupportedLocale, ContactData> = {
  es: contactEs,
  en: contactEn,
  pt: contactPt,
  fr: contactFr,
};

export function getContact(locale: SupportedLocale): ContactData {
  return getCachedData(
    'contact', locale, [dep(locale)],
    () => contactMap[locale] || contactMap.es
  );
}
