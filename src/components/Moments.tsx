import { useTranslations } from 'next-intl'
import React from 'react'

import Moment1 from '@/assets/moments/moment_one.webp'
import Moment2 from '@/assets/moments/moment_two.webp'
import Moment3 from '@/assets/moments/moment_three.webp'
import Moment4 from '@/assets/moments/moment_four.webp'
import Moment5 from '@/assets/moments/moment_five.webp'
import MomentsBg from '@/assets/moments/moments_bg.svg'
import Image from 'next/image'

export default function Moments() {
  const t = useTranslations('Index')

  return (
    <div className="relative">
      <Image
        src={MomentsBg}
        alt="Flower Background"
        sizes="100%"
        fill
        className="h-full w-full object-cover object-top opacity-40 md:opacity-100"
      />
      <div className="container relative z-10 space-y-4 pb-20 text-primary md:space-y-5">
        <div className="relative w-fit after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-7 after:rounded-full after:bg-primary">
          <p className="text-xs uppercase md:text-sm lg:text-base">
            {t('moments')}
          </p>
        </div>
        <h2 className="font-amiri text-2xl uppercase md:text-3xl lg:text-4xl">
          {t('moments_heading')}
        </h2>
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src={Moment1}
              alt="Sips and Moments"
              sizes="100%"
              className="h-auto w-full"
            />
          </div>

          <div className="md:col-span-4">
            <Image
              src={Moment2}
              alt="Sips and Moments"
              sizes="100%"
              className="h-auto w-full"
            />
          </div>

          <div className="self-start md:col-span-3 md:pt-10 lg:pt-16">
            <Image
              src={Moment3}
              alt="Sips and Moments"
              sizes="100%"
              className="h-auto w-full"
            />
          </div>

          <div className="md:col-span-5">
            <Image
              src={Moment4}
              alt="Sips and Moments"
              sizes="100%"
              className="h-auto w-full"
            />
          </div>

          {/* Bottom-right image */}
          <div className="self-start md:col-span-7 md:-mt-4">
            <Image
              src={Moment5}
              alt="Sips and Moments"
              sizes="100%"
              className="h-auto w-full"
            />
            <p className="mt-10 text-right font-varela text-sm uppercase">
              {t('moments_footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
