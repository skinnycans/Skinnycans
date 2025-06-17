import Image from 'next/image'
import React from 'react'

import VideoBg from '@/assets/video-background.webp'
import { useTranslations } from 'next-intl'
import { Icons } from './icons'

import EventFlower1 from '@/assets/event-flower-1.svg'
import EventFlower2 from '@/assets/event-flower-2.svg'

export default function Events() {
  const t = useTranslations('Index')

  return (
    <div className="relative w-screen overflow-hidden">
      <Image
        src={EventFlower1}
        alt="Flower"
        sizes="100%"
        className="absolute -top-40 left-0 z-0"
      />
      <Image
        src={EventFlower2}
        alt="Flower"
        sizes="100%"
        className="absolute right-0 top-1/2 z-0 -translate-y-1/2"
      />
      <div className="container relative z-10 py-28 md:py-48">
        <div className="grid items-center gap-8 md:grid-cols-5 lg:gap-16">
          <div className="relative h-[450px] p-4 md:col-span-3">
            <Image
              src={VideoBg}
              alt="Video Background"
              fill
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
            <div className="relative h-full w-full bg-white"></div>
          </div>
          <div className="md:col-span-2">
            <section className="space-y-4 text-left font-varela tracking-wider text-primary">
              <div className="relative w-fit after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-7 after:rounded-full after:bg-primary">
                <p className="text-xs uppercase md:text-sm lg:text-base">
                  {t('event')}
                </p>
              </div>
              <h2 className="max-w-xs font-amiri text-3xl uppercase md:text-4xl lg:text-5xl">
                {t('event_heading')}
              </h2>
              <p className="max-w-md text-sm leading-5 text-[#96A69C] md:text-base lg:text-lg">
                {t('event_description')}
              </p>
              <div className="pt-7">
                <button className="flex items-center justify-center gap-2 bg-[#F1F1F1] px-8 py-3 text-sm uppercase tracking-wider lg:text-base">
                  {t('contact_us')} <Icons.rightArrow className="h-5 w-5" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
