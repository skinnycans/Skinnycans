import { Locale } from '@/i18n'

export type SiteConfig = {
  name: string
  description: string
  mainNav: { title: string; href: string }[]
  links: {
    twitter: string
    instagram: string
    facebook: string
    youtube: string
  }
  location: string
  follow: string
  footer: {
    drink_responsibly: string
    rights: string
  }
  menu: string
  close: string
  brewed: string
  backed: string
  built: string
  banner_description: string
  button_banner: string
}

const siteConfigBase: Record<Locale, SiteConfig> = {
  en: {
    name: 'NSIT',
    description:
      'This is a modern web development starter template that integrates Next.js, Tailwind CSS, ShadcnUI, and internationalization features, designed for quickly building efficient, customizable, and multilingual front-end projects.',
    mainNav: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Product',
        href: '/product',
      },
      {
        title: 'Partner',
        href: '/partner',
      },
      {
        title: 'The Story',
        href: '/story',
      },
    ],
    links: {
      twitter: ' ',
      instagram: '',
      facebook: '',
      youtube: '',
    },
    location: 'Store locator',
    footer: {
      drink_responsibly: 'PLEASE DRINK RESPONSIBLY.',
      rights: 'All rights reserved',
    },
    follow: 'Follow us',
    menu: 'menu',
    close: 'close',
    brewed: `Brewed\nby hand`,
    backed: 'Backed by\n science ',
    built: 'Built for\n health',
    banner_description: 'Skinny is here to change drinking for good.',
    button_banner: 'Read The Full Story',
  },
  no: {
    name: 'NSIT',
    description:
      '这是一个集成了Next.js、Tailwind CSS、ShadcnUI和国际化功能的现代化Web开发启动模板，旨在快速搭建高效、可定制且多语言支持的前端项目。',
    mainNav: [
      {
        title: 'hjem',
        href: '/',
      },
      {
        title: 'produkt',
        href: '/product',
      },
      {
        title: 'Partner',
        href: '/partner',
      },
      {
        title: 'historien',
        href: '/story',
      },
    ],
    links: {
      twitter: ' ',
      instagram: '',
      facebook: '',
      youtube: '',
    },
    location: 'Butikksøker',
    footer: {
      drink_responsibly: 'Vennligst drikk ansvarlig.',
      rights: 'Alle rettigheter forbeholdt.',
    },
    follow: 'Følg oss',
    menu: 'meny',
    close: 'lukk',
    brewed: 'Håndbrygget',
    backed: 'Støttet av\n vitenskapen',
    built: 'Bygget for \nhelse',
    banner_description: 'Skinny er her for å forandre drikking for godt.',
    button_banner: 'Les hele historien',
  },
  se: {
    name: 'NSIT',
    description:
      "Ceci est un modèle de démarrage de développement web moderne qui intègre Next.js, Tailwind CSS, ShadcnUI et des fonctionnalités d'internationalisation, conçu pour construire rapidement des projets front-end efficaces, personnalisables et multilingues.",
    mainNav: [
      {
        title: 'ruoktu',
        href: '/',
      },
      {
        title: 'buvtta',
        href: '/product',
      },
      {
        title: 'guoibmi',
        href: '/partner',
      },
      {
        title: 'muitalus',
        href: '/story',
      },
    ],
    links: {
      twitter: ' ',
      instagram: '',
      facebook: '',
      youtube: '',
    },
    location: 'Gávpi gávdnan',
    footer: {
      drink_responsibly: 'JUOGA OVDDASVÁSTÁDUSLAČČAT.',
      rights: 'uot vuoigatvuođat leat suddjejuvvon',
    },
    follow: 'Čuovo min',
    menu: 'meny',
    close: 'lahka',
    brewed: 'Gieđain \nráhkaduvvon',
    backed: 'Dieđalaš \ndoarjja',
    built: 'Huksejuvvon \ndearvvašvuođa várás',
    banner_description: 'Skinny lea dáppe rievdadeamen juhkanvuođa buorrin.',
    button_banner: 'Loga olles muitalusa',
  },
}

export function getSiteConfig(locale: Locale): SiteConfig {
  return siteConfigBase[locale] || siteConfigBase.en
}
