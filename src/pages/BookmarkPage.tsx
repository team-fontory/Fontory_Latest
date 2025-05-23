import { useState } from 'react'

import { BookmarkFontPreviewCardList } from '@/features/bookmark'
import {
  Pagination,
  SearchBar,
  SectionHeader,
  SORT_OPTIONS,
  type SortLabel,
  SortTab,
} from '@/shared/ui'

const BookmarkPage = () => {
  const [value, setValue] = useState<SortLabel>(SORT_OPTIONS.all)
  const [page, setPage] = useState(1)

  return (
    <div>
      <section>
        <SectionHeader title="BOOKMARKED" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={value} onChange={setValue} />
          <SearchBar onSearch={() => {}} />
        </div>

        <BookmarkFontPreviewCardList />

        <nav className="mt-[8.75rem]">
          <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />
        </nav>
      </section>
    </div>
  )
}

export default BookmarkPage
