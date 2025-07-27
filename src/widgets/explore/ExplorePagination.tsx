import type { RefObject } from 'react'

import { Pagination } from '@/components/Pagination'
import { SORT_OPTIONS, type SortKey } from '@/components/SortTab'
import { useExploreFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'

type Props = {
  scrollTargetRef: RefObject<HTMLElement | null>
}

export const ExplorePagination = ({ scrollTargetRef }: Props) => {
  const [page, setPage] = useTypedSearchParam<number>('page', 1)
  const [sortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword] = useTypedSearchParam<string>('keyword')

  const { data: exploreFontInfo } = useExploreFontList({ page, sortBy, keyword })

  return (
    <nav className="mt-[8.75rem]">
      <Pagination
        currentPage={page}
        totalPages={exploreFontInfo.totalPages}
        scrollTargetRef={scrollTargetRef}
        onPageChange={setPage}
      />
    </nav>
  )
}
