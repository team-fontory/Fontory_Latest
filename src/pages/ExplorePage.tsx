import { useRef } from 'react'

import { useExploreList } from '@/features/explore'
import { PopularFontCardList } from '@/features/popular-fonts'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SortTab } from '@/shared/ui'
import { FontPreviewCardList } from '@/shared/ui/FontPreviewCardList'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const ExplorePage = () => {
  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const {
    data: { content, currentPage, totalPages },
  } = useExploreList({ page, sortBy, keyword })

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'POPULAR'} />
        <PopularFontCardList />
      </section>

      <section ref={scrollTargetRef} className="mt-60">
        <SectionHeader title={'ALL FONTS'} />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={sortBy} onChange={(sortBy) => setFilterParams({ sortBy })} />
          <SearchBar onSearch={(keyword) => setFilterParams({ keyword, page: 1 })} />
        </div>

        <FontPreviewCardList
          fontList={content}
          emptyMessage={keyword ? EMPTY_MESSAGE.noSearchData : undefined}
        />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            scrollTargetRef={scrollTargetRef}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default ExplorePage
