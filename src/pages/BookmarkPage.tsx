import { BookmarkFontPreviewCardList, useBookmarkFontList } from '@/features/bookmark'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SectionHeader, SortTab } from '@/shared/ui'

const BookmarkPage = () => {
  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()

  const {
    data: { content, currentPage, totalPages },
  } = useBookmarkFontList({ page, sortBy, keyword })

  return (
    <div>
      <section>
        <SectionHeader title="BOOKMARKED" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={sortBy} onChange={(sortBy) => setFilterParams({ sortBy })} />
          <SearchBar onSearch={(keyword) => setFilterParams({ keyword, page: 1 })} />
        </div>

        <BookmarkFontPreviewCardList fontList={content} />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </div>
  )
}

export default BookmarkPage
