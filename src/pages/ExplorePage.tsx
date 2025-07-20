import { useRef } from 'react'

import { useExploreFontList } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useTypedSearchParam } from '@/shared/hooks'
import { Pagination, SearchBar, SORT_OPTIONS, type SortKey, SortTab } from '@/shared/ui'
import { FontPreviewCardList } from '@/shared/ui/FontPreviewCardList'
import { Layout } from '@/widgets'
import { PopularFontCardList } from '@/widgets/popular-font'
import { SectionHeader } from '@/widgets/section'

const ExplorePage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const [page, setPage] = useTypedSearchParam<number>('page', 1)
  const [sortBy, setSortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword, setKeyword] = useTypedSearchParam<string>('keyword')

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
          <SortTab value={sortBy} onChange={setSortBy} />
          <SearchBar onSearch={setKeyword} />
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
            onPageChange={setPage}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default ExplorePage
