import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { FontFilter } from '@/entity/font'
import { MyFontPreviewCardList, ProgressTable } from '@/features/progress'
import { useQueryParam } from '@/shared/hooks'
import { toQueryString } from '@/shared/lib'
import { Pagination, SectionHeader } from '@/shared/ui'

const MyFontPage = () => {
  const navigate = useNavigate()
  const { getQueryParam } = useQueryParam()

  const page = parseInt(getQueryParam('page') ?? '1', 10)

  const setFilterParams = (next: Partial<FontFilter>) => {
    const query = toQueryString({ page: next.page ?? page })
    navigate(`${ROUTES.MY_FONT}?${query}`)
  }

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
          <Pagination
            currentPage={page}
            totalPages={8}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </div>
  )
}

export default MyFontPage
