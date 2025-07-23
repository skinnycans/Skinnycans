import Image from 'next/image'
import React from 'react'

import { useTranslations } from 'next-intl'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import WaitlistForm from './WaitlistForm'
import { SiteConfig } from '@/config/site-i18n'

interface StoryBannerProps {
  page: string
  img: string | StaticImport
  config?: SiteConfig
}

export default function StoryBanner({ page, img, config }: StoryBannerProps) {
  const t = useTranslations('Index')

  return (
    <div className="relative flex items-center justify-center pb-28 pt-48 lg:py-72 lg:pb-60">
      <Image
        src={img}
        alt="Background Image"
        fill
        sizes="100%"
        className="absolute z-0 h-full w-full object-cover object-left-bottom"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="container relative z-20 flex flex-col items-center space-y-4 text-center text-white">
        <div className="relative after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-white">
          <p className="text-sm uppercase tracking-wide md:text-base">
            {t(`${page}_consequences`)}
          </p>
        </div>
        <h2 className="font-amiri text-3xl uppercase md:text-5xl lg:text-6xl">
          {t(`${page}_story`)}
        </h2>
        <p className="mx-auto max-w-2xl font-varela text-base capitalize tracking-wide">
          {t(`${page}_story_tagline`)
            .split('\n')
            .map((line, idx, arr) => (
              <React.Fragment key={idx}>
                {line}
                {idx !== arr.length - 1 && <br />}
              </React.Fragment>
            ))}
        </p>

        {page === 'partner' ? <WaitlistForm config={config} /> : ''}
      </div>
    </div>
  )
}
