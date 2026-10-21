import type { SiteSettings } from '../../i18n/utils/types';

function getSiteUrl(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL) {
    return import.meta.env.PUBLIC_SITE_URL;
  }
  return 'http://localhost:4321';
}

function getEnv(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV) {
    return import.meta.env.PUBLIC_ENV;
  }
  return 'development';
}

function getContactEmail(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_CONTACT_EMAIL) {
    return import.meta.env.PUBLIC_CONTACT_EMAIL;
  }
  return 'saberoconsulting@gmail.com';
}

function getWhatsApp(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_WHATSAPP) {
    return `+${import.meta.env.PUBLIC_WHATSAPP}`;
  }
  return '+51925988211';
}

function getGaid(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_GA_ID) {
    return import.meta.env.PUBLIC_GA_ID;
  }
  return '';
}

export const siteSettings: SiteSettings = {
  name: import.meta.env?.PUBLIC_SITE_NAME || 'SABERO Consulting',
  tagline: 'Digital Product Engineering & Platform Evolution',
  description:
    'SABERO Consulting disena, desarrolla y evoluciona plataformas digitales para empresas que necesitan escalar procesos, productos y operaciones en America y Europa.',
  url: getSiteUrl(),
  logo: '/images/saberologo.png',
  location: 'Lima, Peru',
  social: {
    linkedin: 'https://www.linkedin.com/in/sabero-consulting',
    instagram: 'https://www.instagram.com/saberoconsulting/',
    youtube: 'https://www.youtube.com/@saberoconsulting',
    facebook: 'https://web.facebook.com/profile.php?id=61590813075379',
  },
  contact: {
    email: getContactEmail(),
    whatsapp: getWhatsApp(),
  },
};

export const env = {
  isProduction: getEnv() === 'production',
  isDevelopment: getEnv() !== 'production',
  gaId: getGaid(),
  siteUrl: getSiteUrl(),
};
