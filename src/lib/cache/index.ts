import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const CACHE_DIR = resolve(process.cwd(), '.cache', 'data');

interface CacheEntry {
  d: string;
  m: Record<string, number>;
}

export function getCachedData<T>(
  section: string,
  locale: string,
  deps: string[],
  compute: () => T
): T {
  const cacheFile = resolve(CACHE_DIR, `${section}-${locale}.json`);

  if (existsSync(cacheFile)) {
    try {
      const entry: CacheEntry = JSON.parse(readFileSync(cacheFile, 'utf-8'));
      const valid = deps.length > 0 && deps.every(d => {
        try { return statSync(d).mtimeMs === entry.m[d]; }
        catch { return false; }
      });
      if (valid) return JSON.parse(entry.d) as T;
    } catch {
      // corrupted cache, recompute
    }
  }

  const data = compute();
  const m: Record<string, number> = {};
  for (const d of deps) {
    try { m[d] = statSync(d).mtimeMs; } catch {}
  }

  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(cacheFile, JSON.stringify({ d: JSON.stringify(data), m }));

  return data;
}
