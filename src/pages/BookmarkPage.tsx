import { useRef } from 'react'

import { Layout } from '@/widgets'
import {
  BookmarkFilterBar,
  BookmarkFontPreviewCardList,
  BookmarkPagination,
} from '@/widgets/bookmark'
import { SectionHeader } from '@/widgets/section'

const BookmarkPage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  return (
    <Layout hasPadding>
      <section ref={scrollTargetRef}>
        <SectionHeader title="BOOKMARKED" />
        <BookmarkFilterBar />
        <BookmarkFontPreviewCardList />
        <BookmarkPagination scrollTargetRef={scrollTargetRef} />
      </section>
    </Layout>
  )
}

export default BookmarkPage
