import { useTranslations } from 'next-intl';
import React from 'react'

import SodaOne from '@/assets/skinny-can-one.png'
import SodaTwo from '@/assets/skinny-can-two.png'

import BgOne from '@/assets/selection-bg-one.png'
import BgTwo from '@/assets/selection-bg-two.svg'

import Image from 'next/image';
import { Icons } from './icons';

export default function Collections() {
    const t = useTranslations('Index');

    const Selections = [
        {
            can: SodaOne,
            title: 'soda-one',
            year: 'year-one'
        },
        {
            can: SodaTwo,
            title: 'soda-two',
            year: 'year-two'
        }
    ]

    return (
        <div className='relative pb-32'>
            <div className="relative z-10">
                <section className='container text-center text-primary font-varela space-y-3 md:space-y-4 tracking-wider'>
                    <div className='relative after:absolute after:-bottom-1 after:h-0.5 after:rounded-full after:w-7 after:bg-primary after:left-1/2 after:-translate-x-1/2'>
                        <p className='text-sm lg:text-base uppercase'>{t('collection')}</p>
                    </div>
                    <h2 className='font-amiri text-3xl md:text-5xl lg:text-7xl'>{t('collection_heading')}</h2>
                    <p className='text-[#96A69C] text-sm md:text-base lg:text-lg max-w-72 md:max-w-md mx-auto leading-5'>{t('collection_description')}</p>
                </section>
                <section className='container max-w-6xl mx-auto w-full mt-12'>
                    <div className="grid md:grid-cols-2 gap-7">
                        {
                            Selections.map((items, index) => (
                                <div key={index} className='flex items-center flex-col gap-3 border bg-white border-[#E6E6E6] py-12 px-5 uppercase font-varela text-primary'>
                                    <Image
                                        src={items.can}
                                        alt={t(items.title)}
                                        sizes='100%'
                                        className='h-52 md:h-60 lg:h-80 w-auto'
                                    />
                                    <h4 className='text-xl md:text-2xl lg:text-3xl'>{t(items.title)}</h4>
                                    <p className='text-[#96A69C] text-xs md:text-sm lg:text-base'>{t(items.year)}</p>
                                    <button className='text-xs md:text-sm lg:text-base uppercase bg-[#F1F1F1] py-3 tracking-wider px-8 flex items-center justify-center gap-2'>
                                        {t('discover')} <Icons.rightArrow className='w-5 h-5' />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>

            {/* Backgrounds */}
            <div className='absolute inset-0 top-0 z-0'>
                <Image
                    src={BgOne}
                    alt='Background'
                    sizes='100%'
                    className='right-0 absolute top-0'
                />
                <Image
                    src={BgTwo}
                    alt='Background'
                    sizes='100%'
                    className='left-0 absolute -bottom-1/4 md:translate-y-16'
                />
            </div>
        </div>
    )
}
