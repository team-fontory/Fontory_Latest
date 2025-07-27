import type { RefObject } from 'react'

import { useCompletedFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'
import { Pagination } from '@/shared/ui'

type Props = {
  scrollTargetRef: RefObject<HTMLDivElement | null>
}

export const ProgressPagination = ({ scrollTargetRef }: Props) => {
  const [page, setPage] = useTypedSearchParam<number>('page', 1)

  const { data: completedFontInfo } = useCompletedFontList(page)

  return (
    <nav className="mt-[8.75rem]">
      <Pagination
        currentPage={page}
        totalPages={completedFontInfo.totalPages}
        scrollTargetRef={scrollTargetRef}
        onPageChange={(page) => setPage(page)}
      />
    </nav>
  )
}
