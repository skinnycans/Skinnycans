import { getSiteConfig } from '@/config/site-i18n'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import BannerCarousel from '@/components/BannerCarousel'
import SkinnyStory from '@/components/SkinnyStory'
import Events from '@/components/Events'
import Moments from '@/components/Moments'
import Waitlist from '@/components/Waitlist'
import CarouselContent from '@/components/CarouselContent'
import ProductOverview from '@/components/ProductOverview'
import AlcoholBackground from '@/components/AlcoholBackground'
import SmarterDrinking from '@/components/SmarterDrinking'
import Counters from '@/components/Counters'

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')
  const siteConfig = getSiteConfig(locale)
  return (
    <main className="mx-auto mt-20 w-screen overflow-hidden lg:mt-40">
      <BannerCarousel {...siteConfig} />
      <Counters />
      <SmarterDrinking />
      <AlcoholBackground />
      <ProductOverview />
      <Events />
      <SkinnyStory />
      <Moments />
      <Waitlist />
    </main>
  )
}
