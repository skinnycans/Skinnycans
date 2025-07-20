import Stories from '@/components/Stories'
import StoryBanner from '@/components/StoryBanner'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import StoryBg from '@/assets/skinny-story.webp'

export default function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')

  return (
    <main>
      <StoryBanner title={t('skinny_story')} img={StoryBg} />
      <Stories />
    </main>
  )
}
