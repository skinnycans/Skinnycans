'use client'
import Link from 'next/link'
import Logo from "@/assets/Logo.svg";
import { getSiteConfig } from '@/config/site-i18n'
import { Icons } from '@/components/icons'
import { Locale } from '@/i18n'
import LanguageSelector from './ui/LanguageSelector'
import Image from 'next/image';
import { useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

interface SiteHeaderProps {
  locale: Locale
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const siteConfig = getSiteConfig(locale)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50 bg-white sticky top-0 overflow-hidden w-screen">
      <nav>
        {/* Top Nav */}
        <section className="container py-2 border-b border-[#E6E6E6]">
          <div className="relative min-h-16 flex justify-between items-center w-full">

            {/* Language or Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <div className='hidden lg:inline-block'>
                <LanguageSelector locale={locale} />
              </div>
              {/* Hamburger button for mobile */}
              <button
                className={`lg:hidden text-primary ${isOpen ? '-translate-x-40' : 'translate-x-0'} transition-transform ease-in-out duration-300 focus:outline-none text-sm uppercase`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {!isOpen ? (
                  <span className='flex items-center gap-1'>
                    <RiMenu4Fill className='text-xl' />
                    {siteConfig.menu}
                  </span>
                ) : (
                  <span className='flex items-center gap-1'>
                    <IoClose className='text-xl' />
                    {siteConfig.close}
                  </span>
                )}
              </button>

            </div>



            {/* Centered Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="LOGO"
                  sizes="100%"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </Link>
            </div>

            <div className="flex">
              <Link
                href=""
                className="text-primary font-varela flex items-center gap-2 text-xs uppercase"
              >
                <span>{siteConfig.location}</span>
                <Icons.locate className="h-5 w-5 hidden md:inline-block" />
              </Link>
            </div>


          </div>
        </section>

        {/* Main Nav */}
        <section>
          <ul className="hidden border-b py-4 border-[#E6E6E6] lg:flex items-center justify-center gap-12">
            {siteConfig.mainNav.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-primary font-amiri uppercase">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>


          {/* Mobile Nav Links */}

          <div className={`fixed ${isOpen ? 'translate-x-0' : '-translate-x-[100vw]'} duration-300 transition-transform ease-in-out delay-100 h-screen inset-0 bg-white`}>
            <section className="container py-2 border-b border-[#E6E6E6]">
              <div className="relative min-h-16 flex justify-between items-center w-full">

                {/* Language or Mobile Menu Button */}
                <div className="flex items-center gap-4">
                  {/* Hamburger button for mobile */}
                  <button
                    className={`lg:hidden text-primary focus:outline-none text-sm uppercase`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                  >

                    <span className='flex items-center gap-1'>
                      <IoClose className='text-xl' />
                      {siteConfig.close}
                    </span>

                  </button>

                </div>



                {/* Centered Logo */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src={Logo}
                      alt="LOGO"
                      sizes="100%"
                      className="h-10 md:h-12 lg:h-14 w-auto"
                    />
                  </Link>
                </div>

                <div className="flex">
                  <Link
                    href=""
                    onClick={() => setIsOpen(false)}
                    className="text-primary font-varela flex items-center gap-2 text-xs uppercase"
                  >
                    <span>{siteConfig.location}</span>
                    <Icons.locate className="h-5 w-5 hidden md:inline-block" />
                  </Link>
                </div>


              </div>
            </section>
            <ul className="flex flex-col items-start container gap-6 py-8">
              {siteConfig.mainNav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-primary font-amiri uppercase text-lg"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Show language on mobile too */}
            <div className='border-t border-[#E6E6E6] container py-4'>
              <LanguageSelector locale={locale} width='w-full' />
            </div>
          </div>



        </section>
      </nav>
    </header>
  )
}
