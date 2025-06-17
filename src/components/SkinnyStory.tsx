import Image from 'next/image'
import React from 'react'

import StoryBg from '@/assets/skinny-story.webp'
import { useTranslations } from 'next-intl'
import { Icons } from './icons'

export default function SkinnyStory() {

    const t = useTranslations('Index');

    return (
        <div className='relative py-36 lg:py-64 flex items-center justify-center'>
            <Image
                src={StoryBg}
                alt='Background Image'
                fill
                sizes='100%'
                className='h-full w-full object-cover object-center absolute z-0'
            />
            <div className='absolute z-10 inset-0 bg-black/50' />
            <div className="relative container z-20 flex items-center text-center flex-col text-white uppercase space-y-4">
                <div className='relative after:absolute after:-bottom-1 after:h-0.5 after:rounded-full after:w-7 after:bg-white after:-translate-x-1/2 after:left-1/2'>
                    <p className='text-sm md:text-base uppercase'>{t('discover')}</p>
                </div>
                <h2 className='font-amiri text-4xl md:text-5xl lg:text-6xl'>{t('skinny_story')}</h2>
                <button className='text-sm uppercase bg-white py-3 tracking-wider text-primary px-8 flex items-center justify-center gap-2'>
                    {t('full_story')} <Icons.rightArrow className='w-5 h-5' />
                </button>
            </div>
        </div>
    )
}
