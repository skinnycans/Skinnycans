import StoryBanner from '@/components/StoryBanner'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import BBSBg from '@/assets/bbs.png'
import ScienceResearch from '@/components/ScienceResearch'
import NewNeed from '@/components/NewNeed'
import ScientificBacking from '@/components/ScientificBacking'

export default function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('BBS')

  return (
    <main>
      <StoryBanner title={t('heading')} img={BBSBg} />
      <ScienceResearch />
      <NewNeed />
      <ScientificBacking />
    </main>
  )
}
