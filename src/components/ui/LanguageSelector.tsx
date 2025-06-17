"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales, languageNames } from '@/i18n'

interface LanguageToggleProps {
  locale: Locale
  width?: string
}


export default function LanguageSelector({ locale, width }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split('/');
    segments[1] = newLocale; // replaces locale segment
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className={`font-mono ${width ? width : 'min-w-[16rem]'} tracking-widest`}>
      <Select value={locale} defaultValue="en" onValueChange={switchLanguage}>
        <SelectTrigger className={`border-0 ${width ? width : ''} focus-visible:ring-0 focus-visible:border-0  shadow-none uppercase text-primary text-xs`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={`uppercase  ${width ? width : 'min-w-[16rem]'} rounded-none shadow-xs border-0`}>
          {locales.map((lang) => (
            <SelectItem
              key={lang}
              value={lang}
              className="py-3 rounded-none text-primary text-sm"
            >
              {languageNames[lang]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}