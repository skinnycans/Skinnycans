import Image from 'next/image'
import React from 'react'

import VideoBg from '@/assets/video-background.webp'
import { useTranslations } from 'next-intl';
import { Icons } from './icons';

import EventFlower1 from '@/assets/event-flower-1.svg'
import EventFlower2 from '@/assets/event-flower-2.svg'

export default function Events() {
    const t = useTranslations('Index');

    return (
        <div className="relative overflow-hidden w-screen">
            <Image
                src={EventFlower1}
                alt='Flower'
                sizes='100%'
                className='absolute -top-40 left-0 z-0'
            />
            <Image
                src={EventFlower2}
                alt='Flower'
                sizes='100%'
                className='absolute top-1/2 -translate-y-1/2 right-0 z-0'
            />
            <div className='py-28 md:py-48 container relative z-10'>
                <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
                    <div className="md:col-span-3 h-[450px] relative p-4">
                        <Image
                            src={VideoBg}
                            alt='Video Background'
                            fill
                            sizes='100%'
                            className='h-full w-full object-cover object-center'
                        />
                        <div className="relative bg-white h-full w-full"></div>
                    </div>
                    <div className="md:col-span-2">
                        <section className='text-left text-primary font-varela space-y-4 tracking-wider'>
                            <div className='relative w-fit after:absolute after:-bottom-1 after:h-0.5 after:rounded-full after:w-7 after:bg-primary after:left-0'>
                                <p className='text-xs md:text-sm lg:text-base uppercase'>{t('event')}</p>
                            </div>
                            <h2 className='font-amiri text-3xl lg:text-4xl uppercase'>{t('event_heading')}</h2>
                            <p className='text-[#96A69C] text-sm md:text-base lg:text-lg max-w-md leading-5'>{t('event_description')}</p>
                            <div className="pt-7">
                                <button className='text-sm lg:text-base uppercase bg-[#F1F1F1] py-3 tracking-wider px-8 flex items-center justify-center gap-2'>
                                    {t('contact_us')} <Icons.rightArrow className='w-5 h-5' />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
