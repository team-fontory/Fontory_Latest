import { useState } from 'react'

import { MyFontPreviewCardList, ProgressTable } from '@/features/progress'
import { Pagination, SectionHeader } from '@/shared/ui'

const MyFontPage = () => {
  const [page, setPage] = useState(1)

  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <section>
        <SectionHeader title="IN PROGRESS" />
        <ProgressTable />
      </section>

      <section className="mt-60">
        <SectionHeader title="COMPLETED" />
        <MyFontPreviewCardList />

        <nav className="mt-[8.75rem]">
          <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />
        </nav>
      </section>
    </div>
  )
}

export default MyFontPage
