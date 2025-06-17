'use client'

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';

import BannerBgOne from '@/assets/banner-bg-one.svg';
import BannerBgTwo from '@/assets/banner-bg-two.svg';
import BannerBgThree from '@/assets/banner-bg-three.svg';

import SliderBgOne from '@/assets/slider-bg-one.svg';
import SliderBgTwo from '@/assets/slider-bg-two.svg';
import SliderBgThree from '@/assets/slider-bg-three.svg';

import SlideOneFlowerLeft from '@/assets/slider-one-flower-left.svg'
import SlideOneFlowerRight from '@/assets/slider-one-flower-right.svg'
import SlideTwoFlowerLeft from '@/assets/slider-two-flower-left.svg'
import SlideTwoFlowerRight from '@/assets/slider-two-flower-right.png'
import SlideThreeFlowerLeft from '@/assets/slider-three-flower-left.svg'
import SlideThreeFlowerRight from '@/assets/slider-three-flower-right.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const backgroundImages = [BannerBgOne, BannerBgTwo, BannerBgThree];

export default function BannerCarousel() {
    const [activeBg, setActiveBg] = useState(0);
    const [prevBg, setPrevBg] = useState(0);
    const t = useTranslations('Index');

    const flowerSets = [
        { left: SlideOneFlowerLeft, right: SlideOneFlowerRight },
        { left: SlideTwoFlowerLeft, right: SlideTwoFlowerRight },
        { left: SlideThreeFlowerLeft, right: SlideThreeFlowerRight }
    ];

    useEffect(() => {
        if (activeBg !== prevBg) {
            setPrevBg(activeBg);
        }
    }, [activeBg]);

    return (
        <div className="container py-20 md:py-28">
            <div className="max-w-[250px] md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto w-full relative">

                {/* 🪻 BACKGROUND FLOWERS */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`right-${activeBg}`}
                        initial={{ x: 150, opacity: 0, scale: 0 }}
                        animate={{ x: -80, opacity: 1, scale: 1 }}
                        exit={{ x: 150, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            position: 'absolute',
                            top: '0',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}
                        className='left-[5%] md:-left-[5%] xl:-left-[9%]'
                    >
                        <Image
                            src={flowerSets[activeBg].left}
                            alt='Flower'
                            sizes='100%'
                            className='h-40 md:h-64 xl:h-96 w-auto'
                        />
                    </motion.div>
                    <motion.div
                        key={`right-${activeBg}`}
                        initial={{ x: -150, opacity: 0, scale: 0 }}
                        animate={{ x: 200, opacity: 1, scale: 1 }}
                        exit={{ x: -150, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}
                        className='left-[12%] md:left-auto md:right-[10%] xl:right-0'
                    >
                        <Image
                            src={flowerSets[activeBg].right}
                            alt='Flower'
                            sizes='100%'
                            className='h-40 md:h-64 xl:h-96 w-auto'
                        />
                    </motion.div>
                </AnimatePresence>


                {/* Previous Background - fading out and zoomed in */}
                <Image
                    src={backgroundImages[prevBg]}
                    alt="Background Carousel Previous"
                    fill
                    sizes="100%"
                    className={clsx(
                        'absolute object-cover object-center transition-all duration-[3000ms] w-full h-auto ease-out scale-[1.25] opacity-0 z-0'
                    )}
                />

                {/* Active Background - zoomed out and fading in */}
                <Image
                    src={backgroundImages[activeBg]}
                    alt="Background Carousel Active"
                    fill
                    sizes="100%"
                    className={clsx(
                        'absolute object-cover object-center transition-all duration-[3000ms] w-full h-auto ease-out scale-100 opacity-100 z-0'
                    )}
                />

                <section className="relative z-10 bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8">
                    <Slider setActiveBg={setActiveBg} />
                </section>
            </div>
        </div >
    );
}

const sliderImages = [SliderBgOne, SliderBgTwo, SliderBgThree];

const Slider = ({ setActiveBg }: { setActiveBg: (index: number) => void }) => {
    return (
        <Swiper
            centeredSlides={true}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex ?? 0;
                setActiveBg(realIndex);
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            modules={[Autoplay, Pagination]}
            className="mySwiper relative"
        >
            {sliderImages.map((image, i) => (
                <SwiperSlide key={i}>
                    <div className="relative after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:bg-gradient-to-r from-black/50 after:z-0 overflow-hidden">
                        <Image
                            src={image}
                            alt={`Slide ${i}`}
                            sizes="100%"
                            className="h-full w-full object-center object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}

            <div className="custom-pagination" />
        </Swiper>
    );
};
