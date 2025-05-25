import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { FontFilter } from '@/entity/font'
import { MyFontPreviewCardList, ProgressTable, useMyFontList } from '@/features/progress'
import { useQueryParam } from '@/shared/hooks'
import { toQueryString } from '@/shared/lib'
import { Pagination, SectionHeader } from '@/shared/ui'
import { Layout } from '@/widgets'

const MyFontPage = () => {
  const navigate = useNavigate()
  const { getQueryParam } = useQueryParam()

  const page = parseInt(getQueryParam('page') ?? '1', 10)

  const { data: myFontList } = useMyFontList({ page })

  const setFilterParams = (next: Partial<FontFilter>) => {
    const query = toQueryString({ page: next.page ?? page })
    navigate(`${ROUTES.MY_FONT}?${query}`)
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="IN PROGRESS" />
        <ProgressTable />
      </section>

      <section className="mt-60">
        <SectionHeader title="COMPLETED" />
        <MyFontPreviewCardList fontList={myFontList.content} />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={page}
            totalPages={myFontList.totalPages}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default MyFontPage
