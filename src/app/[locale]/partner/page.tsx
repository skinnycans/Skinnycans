import React from 'react'
import PartnerHeader from '@/components/PartnerHeader'
import Invite from '@/assets/waitlist_bg.webp'
import BackingBg from '@/assets/backings_bg.png'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import StoryBanner from '@/components/StoryBanner'
import { getSiteConfig } from '@/config/site-i18n'

export default function PartnerPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const siteConfig = getSiteConfig(locale)

  return (
    <div className="relative pb-40 md:pb-60">
      <div className="relative z-10">
        <StoryBanner img={Invite} page="partner" config={siteConfig} />
      </div>
      <Image
        src={BackingBg}
        alt="Background"
        sizes="100%"
        className="object-left-center absolute top-0 z-0 h-full w-full object-cover"
      />
    </div>
  )
}
