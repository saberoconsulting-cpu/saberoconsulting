import type { InsightsData } from './types';
import { es } from './es';
import { en } from './en';
import { pt } from './pt';
import { fr } from './fr';
import { getCachedData } from '../../lib/cache';
import { resolve } from 'node:path';

const dep = (l: string) => resolve(process.cwd(), 'src/data/insights', `${l}.ts`);

export const insightsData: Record<string, InsightsData> = {
  es,
  en,
  pt,
  fr,
};

export function getInsightsData(locale: string): InsightsData {
  return getCachedData(
    'insights', locale, [dep(locale)],
    () => insightsData[locale] || insightsData.es
  );
}

export type { InsightsData, InsightItem, InsightTrend, InsightCase, InsightResource, InsightType } from './types';
