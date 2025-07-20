import Image from 'next/image'
import React from 'react'
import NewNeedImg from '@/assets/new_need.png'
import SkinnyExist from '@/assets/skinny_exists.png'
import { useTranslations } from 'next-intl'
import BGNeed from '@/assets/new_need_bg.png'

export default function NewNeed() {
  const t = useTranslations('BBS')

  const Benefits = t.raw('benefits') as string[]

  return (
    <>
      <div className="container relative overflow-hidden">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <Image
              src={NewNeedImg}
              alt="Image"
              sizes="100%"
              className="h-full w-full max-w-[450px] object-cover object-center"
            />
          </div>
          <div className="relative z-10 space-y-2 pt-10 md:pt-14 lg:pt-20">
            <h2 className="font-amiri text-3xl text-primary md:text-4xl lg:text-5xl xl:text-6xl">
              {t('new_need')}
            </h2>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t('need_paragraph')}
            </p>
          </div>
        </section>
        <Image
          src={BGNeed}
          alt="BG"
          sizes="100%"
          className="absolute top-0 z-0 h-full w-full object-cover object-left md:object-contain"
        />
      </div>
      <div className="container mt-10 pb-14 lg:-mt-10 xl:-mt-48">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10 space-y-2 md:pt-20">
            <h3 className="font-amiri text-3xl text-primary lg:text-4xl">
              {t('whySkinnyTitle')}
            </h3>
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] md:text-base lg:text-lg">
              {t('whySkinnyDescription')}
            </p>
            {Benefits.map((items, idz) => (
              <ul key={idz} className="list-inside list-disc">
                <li className="font-varela text-sm text-primary md:text-base">
                  {items}
                </li>
              </ul>
            ))}
            <p className="max-w-[450px] font-varela text-sm text-[#5F5F5F] lg:text-base xl:text-lg">
              {t('enjoyWithoutCompromise')
                .split('\n')
                .map((line, idx, arr) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx !== arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </p>
          </div>
          <div>
            <Image
              src={SkinnyExist}
              alt="Image"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </>
  )
}
