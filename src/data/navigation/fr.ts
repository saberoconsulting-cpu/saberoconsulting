import type { NavigationData } from '../../i18n/utils/types';

export const navFr: NavigationData = {
  main: [
    { label: 'Notre offre', href: '/fr/oferta' },
    { label: 'Industries', href: '/fr/industrias' },
    { label: 'Cas et impact', href: '/casos' },
    { label: 'Insights', href: '/insights' },
    { label: 'Nous', href: '/nosotros' },
    { label: 'Careers', href: '/careers' },
  ],
  megaMenus: {
    offre: {
      id: 'offre',
      columns: [
        {
          title: 'Notre offre',
          text: 'SABERO concoit, developpe et fait evoluer des plateformes numeriques pour les entreprises qui ont besoin de passer a l\'echelle leurs processus, produits et operations en Amerique et en Europe.',
          items: [],
        },
        {
          title: 'Capacites',
          items: [
            { label: 'Services', href: '/#services' },
            { label: 'Solutions', href: '/#solutions' },
            { label: 'Capacites technologiques', href: '/#capacites' },
            { label: 'Modeles de collaboration', href: '/#modeles' },
            { label: 'Innovation et modernisation', href: '/#innovation' },
          ],
        },
        {
          title: 'Specialites',
          items: [
            { label: 'Developpement logiciel sur mesure', href: '/#developpement' },
            { label: 'Plateformes web et marketplaces', href: '/#plateformes' },
            { label: 'Modernisation de systemes', href: '/#modernisation' },
            { label: 'Integrations et automatisation', href: '/#integrations' },
            { label: 'Cloud et DevOps', href: '/#cloud' },
            { label: 'AQ et evolution continue', href: '/#aq' },
            { label: 'Donnees, analytique et IA', href: '/#donnees' },
            { label: 'Architecture de produit', href: '/#architecture' },
          ],
        },
      ],
    },
    industries: {
      id: 'industries',
      columns: [
        {
          title: 'Industries',
          text: 'Chaque industrie a des processus, des metriques et des defis distincts. SABERO adapte le produit, l\'architecture et l\'experience a ce contexte.',
          items: [],
        },
        {
          title: 'Secteurs',
          items: [
            { label: 'PropTech', href: '/fr/industrias#proptech' },
            { label: 'Fintech et paiements', href: '/fr/industrias#fintech' },
            { label: 'Marketplaces et plateformes', href: '/fr/industrias#marketplaces' },
            { label: 'Education et EdTech', href: '/fr/industrias#edtech' },
            { label: 'Logistique et operations', href: '/fr/industrias#logistica' },
            { label: 'Solutions internes entreprises', href: '/fr/industrias#internas' },
          ],
        },
        {
          title: 'Solutions par industrie',
          items: [
            { label: 'Plateformes immobilieres', href: '/fr/industrias#inmobiliarias' },
            { label: 'Traitement des paiements', href: '/fr/industrias#pagos' },
            { label: 'Portails B2B et B2C', href: '/fr/industrias#portales' },
            { label: 'Gestion operationnelle et tableaux de bord', href: '/fr/industrias#gestion' },
            { label: 'Automatisation des processus', href: '/fr/industrias#automatizacion' },
            { label: 'Experiences numeriques', href: '/fr/industrias#experiencias' },
          ],
        },
      ],
    },
    cas: {
      id: 'cas',
      columns: [
        {
          title: 'Cas et impact',
          text: 'Nous transformons les defis commerciaux en produits, plateformes et operations numeriques mesurables.',
          items: [],
        },
        {
          title: 'Explorer',
          items: [
            { label: 'Cas en vedette', href: '/casos' },
            { label: 'Resultats par industrie', href: '/casos#industrias' },
            { label: 'Plateformes construites', href: '/casos#plataformas' },
            { label: 'Histoires de produit', href: '/casos#historias' },
            { label: 'Transformation numerique appliquee', href: '/casos#transformacion' },
          ],
        },
        {
          title: 'Projets recents',
          items: [
            { label: 'Marketplace immobilier', href: '/casos/' },
            { label: 'Plateforme freelance-entreprise', href: '/casos/' },
            { label: 'Solution de paiements', href: '/casos/' },
            { label: 'Plateforme sociale ou de matching', href: '/casos/' },
            { label: 'Systemes internes et automatisation', href: '/casos/' },
            { label: 'MVP et evolution continue', href: '/casos/' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Contenus pour les dirigeants d\'entreprise et les equipes qui cherchent a comprendre le produit numerique, l\'automatisation, l\'evolutivite et l\'evolution technologique.',
          items: [],
        },
        {
          title: 'Contenu',
          items: [
            { label: 'Articles', href: '/insights' },
            { label: 'Guides', href: '/insights#guides' },
            { label: 'Tendances', href: '/insights#tendances' },
            { label: 'Cas commentes', href: '/insights#cas' },
            { label: 'Ressources telechargeables', href: '/insights#ressources' },
          ],
        },
        {
          title: 'En vedette',
          items: [
            { label: 'Comment valider un MVP', href: '/insights/' },
            { label: 'Quand moderniser une plateforme', href: '/insights/' },
            { label: 'Integrations de paiement sans friction', href: '/insights/' },
            { label: 'Architecture pour produits evolutifs', href: '/insights/' },
            { label: 'IA appliquee aux processus d\'entreprise', href: '/insights/' },
            { label: 'SEO et performance pour plateformes', href: '/insights/' },
          ],
        },
      ],
    },
    nous: {
      id: 'nous',
      columns: [
        {
          title: 'Nous',
          text: 'SABERO Consulting est une fabrique de logiciels nee au Perou, axee sur la construction de produits et plateformes numeriques pour les organisations ayant une vision de croissance en Amerique et en Europe.',
          items: [],
        },
        {
          title: 'Decouvrir',
          items: [
            { label: 'Notre histoire', href: '/nosotros/' },
            { label: 'Notre vision', href: '/nosotros/' },
            { label: 'Notre approche', href: '/nosotros/' },
            { label: 'Comment nous travaillons', href: '/nosotros/' },
            { label: 'Culture et valeurs', href: '/nosotros/' },
          ],
        },
        {
          title: 'Differenciateurs',
          items: [
            { label: 'Perou comme point de depart', href: '/nosotros/' },
            { label: 'Approche regionale', href: '/nosotros/' },
            { label: 'Livraison agile et collaborative', href: '/nosotros/' },
            { label: 'Excellence technique', href: '/nosotros/' },
            { label: 'Conception orientee metier', href: '/nosotros/' },
            { label: 'Relations a long terme', href: '/nosotros/' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Rejoignez une equipe qui construit des produits numeriques axes sur l\'ingenierie, le business et l\'evolution continue.',
          cta: { label: 'Explorer careers', href: '/careers' },
          items: [],
        },
        {
          title: 'Explorer',
          items: [
            { label: 'Vie chez SABERO', href: '/careers#vie' },
            { label: 'Domaines de travail', href: '/careers#domaines' },
            { label: 'Processus de selection', href: '/careers#processus' },
            { label: 'Postes ouverts', href: '/careers#postes' },
            { label: 'Talents futurs', href: '/careers#talents' },
          ],
        },
        {
          title: 'Equipes',
          items: [
            { label: 'Engineering', href: '/careers#engineering' },
            { label: 'Product', href: '/careers#product' },
            { label: 'UX/UI', href: '/careers#ux' },
            { label: 'QA', href: '/careers#qa' },
            { label: 'DevOps', href: '/careers#devops' },
            { label: 'Business & Growth', href: '/careers#business' },
          ],
        },
      ],
    },
  },
};
