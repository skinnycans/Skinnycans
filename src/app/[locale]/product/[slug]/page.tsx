import { useTranslations } from 'next-intl'
import React from 'react'
import SodaOne from '@/assets/skinny-can-one.png'
import SodaTwo from '@/assets/skinny-can-two.png'
import Image from 'next/image'
import { Icons } from '@/components/icons'
import BgOneSlug from '@/assets/product_slug_background.png'

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: PageProps) {
  const { slug } = params
  const t = useTranslations('Index')
  const productHighlights = t.raw(`${slug}_product_highlights`) as string[]

  return (
    <main className="mx-auto mt-20 w-screen overflow-hidden lg:mt-40">
      <div className="relative pb-32 pt-20">
        <Image
          src={BgOneSlug}
          alt="Background"
          sizes="100%"
          className="absolute bottom-0 left-0"
        />
        <div className="container relative z-10 space-y-28">
          <section className="space-y-5 text-center font-varela uppercase tracking-wider text-primary md:space-y-9 ">
            <div className="relative after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-primary">
              <p className="text-sm lg:text-base">{t('collection')}</p>
            </div>
            <h1 className="font-amiri text-3xl md:text-5xl lg:text-7xl">
              {t(`${slug}_product`)}
            </h1>
            <p className="font-varela text-sm leading-5 text-primary md:text-base">
              {t('year_two')}-{t('year')}
            </p>
          </section>
          <section>
            <div className="mx-auto grid max-w-5xl items-center justify-center gap-7 lg:grid-cols-3">
              <div className="h-full">
                <Image
                  src={slug === 'hard_lemonade' ? SodaOne : SodaTwo}
                  alt={t(`${slug}_product`)}
                  sizes="100%"
                  className="mx-auto h-full min-h-52 w-auto"
                />
              </div>
              <div className="space-y-7 py-4 lg:col-span-2">
                <h3 className="font-amiri text-2xl text-primary md:text-3xl lg:text-4xl">
                  {t(`${slug}_product_intro_title`)}
                </h3>
                <p className="text-base text-[#96A69C] md:text-lg">
                  {t(`${slug}_product_intro_description`)}
                </p>
                <p className="text-base text-[#96A69C] md:text-lg">
                  {t(`${slug}_product_intro_blend`)}
                </p>

                <ul className="list-disc space-y-1 py-3 pl-4">
                  {productHighlights.map((item, idx) => (
                    <li
                      className="text-base text-primary md:text-lg lg:text-xl"
                      key={idx}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center justify-center gap-2 bg-primary px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#96A69C] md:text-sm lg:text-base">
                  {t(`${slug}_find_reseller`)}{' '}
                  <Icons.rightArrow className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
