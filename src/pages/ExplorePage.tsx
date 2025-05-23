import { useState } from 'react'

import { FontPreviewCardList } from '@/features/explore'
import { PopularFontCardList } from '@/features/popular-fonts'
import { SearchBar, SectionHeader, SORT_OPTIONS, type SortLabel, SortTab } from '@/shared/ui'

const ExplorePage = () => {
  const [value, setValue] = useState<SortLabel>(SORT_OPTIONS.all)

  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <section className="mb-60">
        <SectionHeader title="POPULAR" />
        <PopularFontCardList />
      </section>

      <section>
        <SectionHeader title="ALL FONTS" />

        <div className="mb-[4.5rem] grid grid-cols-2">
          <SortTab value={value} onChange={setValue} />
          <SearchBar onSearch={() => {}} />
        </div>

        <FontPreviewCardList />
      </section>
    </div>
  )
}

export default ExplorePage
