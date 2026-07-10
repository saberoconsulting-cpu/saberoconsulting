import type { SupportedLocale } from '../../i18n/utils/types';
import { LOCALES, DEFAULT_LOCALE } from '../../i18n/utils/types';
import { siteSettings } from '../../data/settings/site';

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  locale: SupportedLocale;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEO(meta: SEOMeta) {
  const { title, description, canonical, locale, path, ogImage, noIndex } = meta;
  const fullTitle = `${title} | ${siteSettings.name}`;
  const url = `${siteSettings.url}${canonical}`;

  const hreflangLinks = LOCALES.map((l) => {
    const href = l === DEFAULT_LOCALE ? siteSettings.url + path : `${siteSettings.url}/${l}${path}`;
    return { rel: 'alternate', hreflang: l, href };
  });

  return {
    title: fullTitle,
    description,
    canonical: url,
    hreflang: hreflangLinks,
    ogImage: ogImage || `${siteSettings.url}/images/og-default.jpg`,
    noIndex,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteSettings.name,
    url: siteSettings.url,
    logo: `${siteSettings.url}/images/saberologo.png`,
    description: siteSettings.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteSettings.contact.email,
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English', 'Portuguese', 'French'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PE',
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteSettings.name,
    url: siteSettings.url,
    description: siteSettings.description,
    inLanguage: ['es', 'en', 'pt', 'fr'],
  };
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteSettings.name,
    url: siteSettings.url,
    description: siteSettings.description,
    areaServed: ['America', 'Europe'],
    availableLanguage: ['Spanish', 'English', 'Portuguese', 'French'],
  };
}

export function generateMobileDevServiceSchema(locale: string) {
  const labels: Record<string, { name: string; desc: string; keywords: string }> = {
    es: {
      name: 'Desarrollo de Aplicaciones Móviles - SABERO Consulting',
      desc: 'Somos especialistas en aplicaciones móviles nativas y multiplataforma. Una de las mejores empresas en desarrollo de apps para iPhone iOS y Android con Swift, Kotlin, Flutter y React Native.',
      keywords: 'mejores en aplicaciones móviles, mejor compañia en aplicaciones móviles, mejores en aplicaciones móviles para iPhone, mejores en aplicaciones móviles para Android, especialistas en apps móviles',
    },
    en: {
      name: 'Mobile App Development - SABERO Consulting',
      desc: 'We are specialists in native and cross-platform mobile applications. One of the best mobile app development companies for iPhone iOS and Android with Swift, Kotlin, Flutter and React Native.',
      keywords: 'best mobile app developers, top mobile app development company, best iPhone app developers, best Android app developers',
    },
    pt: {
      name: 'Desenvolvimento de Aplicações Móveis - SABERO Consulting',
      desc: 'Somos especialistas em aplicações móveis nativas e multiplataforma. Uma das melhores empresas em desenvolvimento de apps para iPhone iOS e Android com Swift, Kotlin, Flutter e React Native.',
      keywords: 'melhores em aplicações móveis, melhor empresa em aplicações móveis, melhores em apps para iPhone, melhores em apps para Android',
    },
    fr: {
      name: 'Développement d\'Applications Mobiles - SABERO Consulting',
      desc: 'Nous sommes spécialistes des applications mobiles natives et multiplateformes. L\'une des meilleures entreprises en développement d\'apps pour iPhone iOS et Android avec Swift, Kotlin, Flutter et React Native.',
      keywords: 'meilleurs en applications mobiles, meilleure entreprise en applications mobiles, meilleurs en apps pour iPhone, meilleurs en apps pour Android',
    },
  };
  const data = labels[locale] || labels.es;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.desc,
    provider: {
      '@type': 'Organization',
      name: siteSettings.name,
      url: siteSettings.url,
      slogan: 'Digital Product Engineering & Platform Evolution',
      foundingDate: '2018',
      areaServed: ['America', 'Europe'],
    },
    areaServed: ['America', 'Europe'],
    audience: {
      '@type': 'BusinessAudience',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Development Technologies',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Swift iOS Development - Best iPhone App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kotlin Android Development - Best Android App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter Cross-Platform Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native Development' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    keywords: data.keywords,
    category: 'Mobile Application Development',
    serviceType: ['Native Mobile Apps', 'Cross-Platform Mobile Apps', 'iOS App Development', 'Android App Development'],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
