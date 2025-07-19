import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { type FontFilter, useCompletedFontList } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useQueryParam } from '@/shared/hooks'
import { toQueryString } from '@/shared/lib'
import { Pagination } from '@/shared/ui'
import { Layout } from '@/widgets'
import { MyFontPreviewCardList, ProgressTable } from '@/widgets/progress'
import { SectionHeader } from '@/widgets/section'

const MyFontPage = () => {
  const navigate = useNavigate()
  const scrollTargetRef = useRef<HTMLDivElement>(null)

  const { getQueryParam } = useQueryParam()

  const page = parseInt(getQueryParam('page') ?? '1', 10)

  const { data: completedFontInfo } = useCompletedFontList(page)

  const setFilterParams = (next: Partial<FontFilter>) => {
    const query = toQueryString({ page: next.page ?? page })
    navigate(`${ROUTES.MY_FONT}?${query}`)
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'IN PROGRESS'} />
        <ProgressTable />
      </section>

      <section ref={scrollTargetRef} className="mt-60">
        <SectionHeader title={'COMPLETED'} />
        <MyFontPreviewCardList
          fontList={completedFontInfo.fontList}
          isEmpty={completedFontInfo.isEmpty}
          emptyMessage={EMPTY_MESSAGE.noCompleted}
        />

        <nav className="mt-[8.75rem]">
          <Pagination
            currentPage={page}
            totalPages={completedFontInfo.totalPages}
            scrollTargetRef={scrollTargetRef}
            onPageChange={(page) => setFilterParams({ page })}
          />
        </nav>
      </section>
    </Layout>
  )
}

export default MyFontPage
