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
    name: 'Skinny Cans',
    description: 'A new era of alcohol — clean, conscious, and crafted.',
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
        title: 'The Story',
        href: '/story',
      },
      {
        title: 'Partner',
        href: '/partner',
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
    name: 'Tynne bokser',
    description: 'En ny æra med alkohol – ren, bevisst og håndlaget.',
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
        title: 'historien',
        href: '/story',
      },
      {
        title: 'Partner',
        href: '/partner',
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
    name: 'Skinny Cans',
    description: 'Ođđa áigodat alkoholas — buhtis, diđolaš ja hábmejuvvon.',
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
        title: 'muitalus',
        href: '/story',
      },
      {
        title: 'guoibmi',
        href: '/partner',
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
