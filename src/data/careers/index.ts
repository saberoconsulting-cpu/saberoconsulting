import type { SupportedLocale } from '../../i18n/utils/types';
import type { CareersData } from './types';
import { careersEs } from './es';
import { careersEn } from './en';
import { careersPt } from './pt';
import { careersFr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/careers', `${l}.ts`);

const careersMap: Record<SupportedLocale, CareersData> = {
  es: careersEs,
  en: careersEn,
  pt: careersPt,
  fr: careersFr,
};

export function getCareersData(locale: SupportedLocale): CareersData {
  return getCachedData(
    'careers', locale, [dep(locale)],
    () => careersMap[locale] || careersMap.es
  );
}
