import { useTranslations } from 'next-intl'
import BGImage from '@/assets/science_research_img.png'
import Image from 'next/image'
import React from 'react'

export default function ScienceResearch() {
  const t = useTranslations('BBS')

  const gridInfo = [
    {
      heading: 'alcohol_heading',
      paragrahInfo: 'alcohol_paragraph',
    },
    {
      heading: 'sugar_heading',
      paragrahInfo: 'sugar_paragraph',
    },
    {
      heading: 'calories',
      paragrahInfo: 'calories_paragraph',
    },
  ]

  return (
    <div className="relative pt-24">
      <section className="container  relative z-10 pb-10">
        <div className="grid gap-10 md:grid-cols-2">
          {gridInfo.map((items, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-amiri text-2xl text-primary md:text-3xl">
                {t(items.heading)}
              </h3>
              <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
                {t(items.paragrahInfo)
                  .split('\n')
                  .map((line, idx, arr) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx !== arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </p>
              {items.paragrahInfo === 'sugar_paragraph' ? (
                <p className="max-w-[450px] font-amiri text-sm font-bold text-primary md:text-base lg:text-lg">
                  {t('sugar_paired')}
                </p>
              ) : (
                ''
              )}
            </div>
          ))}
          <div className="relative z-10 space-y-2 pt-8 md:pt-10 lg:pt-14">
            <h2 className="font-amiri text-3xl text-primary md:text-4xl lg:text-5xl xl:text-6xl">
              {t('new_need')}
            </h2>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t.rich('need_paragraph', {
                strong: (chunks) => (
                  <strong className="font-amiri font-bold text-primary">
                    {chunks}
                  </strong>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
      <Image
        src={BGImage}
        alt="BG"
        sizes="100%"
        className="absolute top-0 z-0 h-full w-full object-cover object-top md:object-contain"
      />
    </div>
  )
}
