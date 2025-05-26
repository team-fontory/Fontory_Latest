import { useBookmarkFontList } from '@/features/bookmark'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SectionHeader, SortTab } from '@/shared/ui'
import { FontPreviewCardList } from '@/shared/ui/FontPreviewCardList'
import { Layout } from '@/widgets'

const BookmarkPage = () => {
  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()

  const {
    data: { content, currentPage, totalPages },
  } = useBookmarkFontList({ page, sortBy, keyword })

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="BOOKMARKED" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={sortBy} onChange={(sortBy) => setFilterParams({ sortBy })} />
          <SearchBar onSearch={(keyword) => setFilterParams({ keyword, page: 1 })} />
        </div>

        <FontPreviewCardList fontList={content} emptyMessage={EMPTY_MESSAGE.noBookmark} />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default BookmarkPage
