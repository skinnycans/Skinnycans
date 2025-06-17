import { useTranslations } from 'next-intl';
import React from 'react'

import Moment1 from '@/assets/moments/moment_one.webp'
import Moment2 from '@/assets/moments/moment_two.webp'
import Moment3 from '@/assets/moments/moment_three.webp'
import Moment4 from '@/assets/moments/moment_four.webp'
import Moment5 from '@/assets/moments/moment_five.webp'
import MomentsBg from '@/assets/moments/moments_bg.svg'
import Image from 'next/image';

export default function Moments() {
    const t = useTranslations('Index');

    return (
        <div className='relative'>
            <Image
                src={MomentsBg}
                alt='Flower Background'
                sizes='100%'
                fill
                className='h-full w-full object-cover object-top opacity-40 md:opacity-100'
            />
            <div className="pb-20 container text-primary space-y-4 md:space-y-5 relative z-10">
                <div className='relative w-fit after:absolute after:-bottom-1 after:h-0.5 after:rounded-full after:w-7 after:bg-primary after:left-0'>
                    <p className='text-xs md:text-sm lg:text-base uppercase'>{t('moments')}</p>
                </div>
                <h2 className='font-amiri text-2xl md:text-3xl lg:text-4xl uppercase'>{t('moments_heading')}</h2>
                <div className="grid md:grid-cols-12 items-center gap-5">
                    <div className="md:col-span-5">
                        <Image
                            src={Moment1}
                            alt="Sips and Moments"

                        />
                    </div>

                    <div className="md:col-span-4">
                        <Image
                            src={Moment2}
                            alt="Sips and Moments"

                        />
                    </div>

                    <div className="md:col-span-3 self-start md:pt-10 lg:pt-16">
                        <Image
                            src={Moment3}
                            alt="Sips and Moments"

                        />
                    </div>

                    <div className="md:col-span-5">
                        <Image
                            src={Moment4}
                            alt="Sips and Moments"

                        />
                    </div>

                    {/* Bottom-right image */}
                    <div className="md:col-span-7 md:-mt-4 self-start">
                        <Image
                            src={Moment5}
                            alt="Sips and Moments"

                        />
                        <p className="text-right mt-10 font-varela text-sm uppercase">
                            {t('moments_footer')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
