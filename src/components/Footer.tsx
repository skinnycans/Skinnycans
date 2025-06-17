'use client'
import { getSiteConfig } from '@/config/site-i18n'
import React from 'react'
import LanguageSelector from './ui/LanguageSelector';
import { Locale } from '@/i18n';
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Awards from '@/assets/awards.svg'
import Image from 'next/image';
import Link from 'next/link';

interface SiteHeaderProps {
    locale: Locale
}

export default function Footer({ locale }: SiteHeaderProps) {

    const siteConfig = getSiteConfig(locale)


    return (
        <footer className='border-t border-[#E6E6E6] bg-white relative z-10 container pt-14 md:py-14'>
            <div className='grid md:grid-cols-3 gap-10  items-center md:justify-between'>
                <div className='justify-items-center md:justify-items-start md:col-span-3 lg:col-span-1'>
                    <Image
                        src={Awards}
                        alt='Awards'
                        sizes='100%'
                        className='h-14 w-auto'
                    />
                </div>
                <div className='text-center md:col-span-2 md:text-start lg:col-span-1'>
                    <ul className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-10'>
                        {
                            siteConfig.mainNav.map((items, index) => (
                                <li key={index} className='shrink-0'>
                                    <Link href={items.href} className='text-primary font-verala uppercase text-sm'>
                                        {items.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='space-y-2 justify-items-center md:justify-items-start md:justify-self-end text-center'>
                    <p className='text-primary font-varela text-base'>{siteConfig.follow}</p>
                    <div className='flex items-center gap-4'>
                        <Link href={siteConfig.links.instagram} className='text-[#6E6E6E] hover:text-primary text-xl transition-colors ease-out duration-200' target='_blank'>
                            <BsInstagram />
                        </Link>
                        <Link href={siteConfig.links.twitter} className='text-[#6E6E6E] hover:text-primary text-xl transition-colors ease-out duration-200' target='_blank'>
                            <BsTwitterX />
                        </Link>
                        <Link href={siteConfig.links.facebook} className='text-[#6E6E6E] hover:text-primary text-xl transition-colors ease-out duration-200' target='_blank'>
                            <FaFacebookF />
                        </Link>
                        <Link href={siteConfig.links.youtube} className='text-[#6E6E6E] hover:text-primary text-xl transition-colors ease-out duration-200' target='_blank'>
                            <AiOutlineYoutube />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='border-t border-[#E6E6E6] py-10 mt-10'>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                    <div className='text-[#96A69C] font-varela text-sm md:text-base text-center md:text-left'>
                        <p className='uppercase'>{siteConfig.footer.drink_responsibly}</p>
                        <p>©{new Date().getFullYear()} Skinny Cans. {siteConfig.footer.rights}</p>
                    </div>
                    <LanguageSelector locale={locale} width={''} />
                </div>
            </div>
        </footer>
    )
}
