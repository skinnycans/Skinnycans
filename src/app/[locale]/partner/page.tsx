import React from 'react'
import PartnerHeader from '@/components/PartnerHeader'

import BackingBg from '@/assets/backings_bg.png'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import PartnersInfo from '@/components/PartnersInfo'

export default function PartnerPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <div className="relative pt-48 lg:pt-60">
      <div className="relative z-10">
        <PartnerHeader />
        <PartnersInfo />
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
