import { useRef } from 'react'

import { useExploreFontList } from '@/entity/font'
import { PopularFontCardList } from '@/features/popular-fonts'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SortTab } from '@/shared/ui'
import { FontPreviewCardList } from '@/shared/ui/FontPreviewCardList'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const ExplorePage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()
  const { data: exploreFontInfo } = useExploreFontList({ page, sortBy, keyword })

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
          fontList={exploreFontInfo.fontList}
          isEmpty={exploreFontInfo.isEmpty}
          emptyMessage={keyword ? EMPTY_MESSAGE.noSearchData : undefined}
        />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={exploreFontInfo.currentPage}
            totalPages={exploreFontInfo.totalPages}
            scrollTargetRef={scrollTargetRef}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default ExplorePage
