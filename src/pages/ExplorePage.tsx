import { ExploreFontPreviewCardList, useExploreList } from '@/features/explore'
import { PopularFontCardList } from '@/features/popular-fonts'
import { useFontFilterParams } from '@/shared/hooks'
import { Pagination, SearchBar, SectionHeader, SortTab } from '@/shared/ui'
import { Layout } from '@/widgets'

const ExplorePage = () => {
  const { page, sortBy, keyword, setFilterParams } = useFontFilterParams()

  const {
    data: { content, currentPage, totalPages },
  } = useExploreList({ page, sortBy, keyword })

  return (
    <Layout hasPadding>
      <section className="mb-60">
        <SectionHeader title="POPULAR" />
        <PopularFontCardList />
      </section>

      <section>
        <SectionHeader title="ALL FONTS" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={sortBy} onChange={(sortBy) => setFilterParams({ sortBy })} />
          <SearchBar onSearch={(keyword) => setFilterParams({ keyword, page: 1 })} />
        </div>

        <ExploreFontPreviewCardList fontList={content} />

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

export default ExplorePage
