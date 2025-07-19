import { useRef } from 'react'

import { useBookmarkFontList } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SortTab } from '@/shared/ui'
import { FontPreviewCardList } from '@/shared/ui/FontPreviewCardList'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const BookmarkPage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()
  const { data: bookmarkFontInfo } = useBookmarkFontList({ page, sortBy, keyword })

  return (
    <Layout hasPadding>
      <section ref={scrollTargetRef}>
        <SectionHeader title="BOOKMARKED" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={sortBy} onChange={(sortBy) => setFilterParams({ sortBy })} />
          <SearchBar onSearch={(keyword) => setFilterParams({ keyword, page: 1 })} />
        </div>

        <FontPreviewCardList
          fontList={bookmarkFontInfo.fontList}
          isEmpty={bookmarkFontInfo.isEmpty}
          emptyMessage={EMPTY_MESSAGE.noBookmark}
        />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={bookmarkFontInfo.currentPage}
            totalPages={bookmarkFontInfo.totalPages}
            scrollTargetRef={scrollTargetRef}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default BookmarkPage
