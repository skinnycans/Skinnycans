'use client'
import { getSiteConfig } from '@/config/site-i18n'
import React from 'react'
import LanguageSelector from './ui/LanguageSelector'
import { Locale } from '@/i18n'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import Awards from '@/assets/awards.svg'
import Image from 'next/image'
import Link from 'next/link'

interface SiteHeaderProps {
  locale: Locale
}

export default function Footer({ locale }: SiteHeaderProps) {
  const siteConfig = getSiteConfig(locale)

  return (
    <footer className=" relative z-10 border-t border-[#E6E6E6] bg-white pt-14 md:py-14">
      <div className="container">
        <div className="grid items-center justify-center gap-10 md:grid-cols-3 md:justify-between">
          <div className="justify-items-center md:col-span-3 md:justify-items-start lg:col-span-1">
            <Image
              src={Awards}
              alt="Awards"
              sizes="100%"
              className="mx-auto h-14 w-auto lg:mx-0"
            />
          </div>
          <div className="text-center md:col-span-2 md:text-start lg:col-span-1">
            <ul className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start md:gap-12">
              {siteConfig.mainNav.map((items, index) => (
                <li key={index} className="shrink-0">
                  <Link
                    href={items.href}
                    className="font-verala text-sm uppercase text-primary"
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-items-center space-y-5 text-center md:justify-items-start md:space-y-2 md:justify-self-end">
            <p className="font-varela text-base text-primary">
              {siteConfig.follow}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={siteConfig.links.instagram}
                className="text-xl text-[#6E6E6E] transition-colors duration-200 ease-out hover:text-primary"
                target="_blank"
              >
                <BsInstagram />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                className="text-xl text-[#6E6E6E] transition-colors duration-200 ease-out hover:text-primary"
                target="_blank"
              >
                <BsTwitterX />
              </Link>
              <Link
                href={siteConfig.links.facebook}
                className="text-xl text-[#6E6E6E] transition-colors duration-200 ease-out hover:text-primary"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={siteConfig.links.youtube}
                className="text-xl text-[#6E6E6E] transition-colors duration-200 ease-out hover:text-primary"
                target="_blank"
              >
                <AiOutlineYoutube />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E6E6E6] py-10">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center font-varela text-sm text-[#96A69C] md:text-left md:text-base">
              <p className="uppercase">{siteConfig.footer.drink_responsibly}</p>
              <p>
                ©{new Date().getFullYear()} Skinny Cans.{' '}
                {siteConfig.footer.rights}
              </p>
            </div>
            <LanguageSelector locale={locale} width={'w-fit'} />
          </div>
        </div>
      </div>
    </footer>
  )
}
