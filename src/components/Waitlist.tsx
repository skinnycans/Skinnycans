import { useTranslations } from 'next-intl';
import React from 'react'
import { Icons } from './icons';

import WaitlistBg from '@/assets/waitlist_bg.webp'
import Image from 'next/image';
import WaitlistFlower from '@/assets/waitlist-flower.svg'

export default function Waitlist() {

    const t = useTranslations('Index');

    return (
        <div className='relative pb-32'>
            <div className="container relative z-10">
                <div className='relative'>
                    <Image
                        alt='Beer Pump'
                        src={WaitlistBg}
                        sizes='100%'
                        fill
                        className='h-full w-full object-cover object-center absolute z-0'
                    />
                    <section className='py-14 md:py-20 text-left text-white bg-gradient-to-r from-black/75 to-70% to-black/30 lg:to-70% lg:to-black/0 relative z-10 font-varela px-5 md:px-14'>
                        <div className="max-w-72 space-y-5 md:space-y-6 lg:space-y-8 tracking-wider">
                            <div className='relative w-fit after:absolute after:-bottom-1 after:h-0.5 after:rounded-full after:w-7 after:bg-white after:left-0'>
                                <p className='text-xs md:text-sm uppercase'>{t('waitlist')}</p>
                            </div>
                            <h2 className='font-amiri text-2xl md:text-3xl lg:text-4xl uppercase'>{t('waitlist_heading')}</h2>
                            <p className='text-sm mdtext-base lg:text-lg leading-5'>{t('waitlist_description')}</p>
                            <div className="mdpt-5">
                                <button className='text-sm lg:text-base uppercase bg-[#F1F1F1] text-primary py-3 tracking-wider px-8 flex items-center justify-center gap-2'>
                                    {t('join_waitlist')} <Icons.rightArrow className='w-5 h-5' />
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Image
                src={WaitlistFlower}
                alt='FLower'
                sizes='100%'
                className='absolute -bottom-1/2 -translate-y-1/3 z-0 h-auto w-64 md:w-72'
            />
        </div >
    )
}
