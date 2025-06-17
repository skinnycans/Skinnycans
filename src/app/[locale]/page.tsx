import Link from 'next/link'

import { getSiteConfig } from '@/config/site-i18n'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import BannerCarousel from '@/components/BannerCarousel'
import Collections from '@/components/Collections'
import SkinnyStory from '@/components/SkinnyStory'
import Events from '@/components/Events'
import Moments from '@/components/Moments'
import Waitlist from '@/components/Waitlist'

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')
  const siteConfig = getSiteConfig(locale)
  return (
    <main className='w-screen'>
      <BannerCarousel />
      <Collections />
      <SkinnyStory />
      <Events />
      <Moments />
      <Waitlist />
    </main>
  )
}
