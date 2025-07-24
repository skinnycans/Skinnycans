import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import Backing1 from '@/assets/backing_1.png'
import Backing2 from '@/assets/backing_2.png'
import Backing3 from '@/assets/backing_3.jpg'
import BackingBg from '@/assets/backing.png'
import Link from 'next/link'
import { Icons } from './icons'

export default function ScientificBacking() {
  const t = useTranslations('BBS')
  return (
    <div className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl space-y-14">
        <h2 className="text-center font-amiri text-3xl uppercase text-primary md:text-4xl lg:text-5xl xl:text-6xl">
          {t('scientificBacking')}
        </h2>
        <div className="mx-auto grid w-fit max-w-6xl justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="max-h-60 overflow-hidden">
              <Image
                src={Backing1}
                alt="Study Image"
                sizes="100%"
                className="h-[180px] w-auto object-contain object-center md:ml-4 lg:ml-7"
              />
            </div>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t('backing-1')}
            </p>
            <Link
              href={
                'https://www.sciencedirect.com/science/article/abs/pii/S002231662216596X'
              }
              target="_blank"
              className="flex max-w-[270px] items-center justify-center gap-2 bg-primary px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#96A69C] md:text-sm lg:text-base"
            >
              {t('read')} <Icons.rightArrow className="h-5 w-5" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="max-h-60 overflow-hidden">
              <Image
                src={Backing2}
                alt="Study Image"
                sizes="100%"
                className="h-[180px] w-auto object-contain object-center"
              />
            </div>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t('backing-2')}
            </p>
            <Link
              href={'https://pubmed.ncbi.nlm.nih.gov/30949667/'}
              target="_blank"
              className="flex max-w-[270px] items-center justify-center gap-2 bg-primary px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#96A69C] md:text-sm lg:text-base"
            >
              {t('read')} <Icons.rightArrow className="h-5 w-5" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="max-h-60 overflow-hidden">
              <Image
                src={Backing3}
                alt="Study Image"
                sizes="100%"
                className="h-[180px] w-auto object-contain object-center md:ml-4 lg:ml-7"
              />
            </div>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t('backing-3')}
            </p>
            <Link
              href={
                'https://www.frontiersin.org/articles/10.3389/fimmu.2022.988481/full'
              }
              target="_blank"
              className="flex max-w-[270px] items-center justify-center gap-2 bg-primary px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#96A69C] md:text-sm lg:text-base"
            >
              {t('read')} <Icons.rightArrow className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={BackingBg}
        alt="Background"
        sizes="100%"
        className="absolute bottom-40 z-0 h-auto max-h-[800px] w-full object-contain object-left xl:left-10"
      />
    </div>
  )
}
