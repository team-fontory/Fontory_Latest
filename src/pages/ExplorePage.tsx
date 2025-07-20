import { useRef } from 'react'

import { Layout } from '@/widgets'
import { ExploreFilterBar, ExploreFontPreviewCardList, ExplorePagination } from '@/widgets/explore'
import { PopularFontCardList } from '@/widgets/popular-font'
import { SectionHeader } from '@/widgets/section'

const ExplorePage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'POPULAR'} />
        <PopularFontCardList />
      </section>

      <section ref={scrollTargetRef} className="mt-60">
        <SectionHeader title={'ALL FONTS'} />
        <ExploreFilterBar />
        <ExploreFontPreviewCardList />
        <ExplorePagination scrollTargetRef={scrollTargetRef} />
      </section>
    </Layout>
  )
}

export default ExplorePage
