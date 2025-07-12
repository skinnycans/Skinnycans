import Stories from '@/components/Stories'
import StoryBanner from '@/components/StoryBanner'
import React from 'react'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'no' }, { locale: 'se' }]
}

export default function page() {
  return (
    <main>
      <StoryBanner />
      <Stories />
    </main>
  )
}
