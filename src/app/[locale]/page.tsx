import { getSiteConfig } from '@/config/site-i18n'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import BannerCarousel from '@/components/BannerCarousel'
import Collections from '@/components/Collections'
import SkinnyStory from '@/components/SkinnyStory'
import Events from '@/components/Events'
import Moments from '@/components/Moments'
import Waitlist from '@/components/Waitlist'
import CarouselContent from '@/components/CarouselContent'

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')
  const siteConfig = getSiteConfig(locale)
  return (
    <main className="mx-auto max-w-screen-2xl overflow-hidden">
      <BannerCarousel {...siteConfig} />
      <Collections />
      <SkinnyStory />
      <Events />
      <Moments />
      <Waitlist />
    </main>
  )
}
