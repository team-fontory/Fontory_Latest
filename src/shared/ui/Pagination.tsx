import { type RefObject, useEffect, useMemo } from 'react'

import { cn } from '../lib'
import { PaginationManager } from '../lib/paginationManager'

import { Icon } from './Icon/Icon'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  scrollTargetRef: RefObject<HTMLElement | null>
}

/**
 * 현재 페이지와 전체 페이지 수를 기반으로 한 페이지네이션
 *
 * - 최대 4개의 페이지만 표시
 * - 화살표 클릭 시 이전/다음 그룹의 첫 페이지로 이동
 *
 * @param currentPage - 현재 페이지 번호
 * @param totalPages - 전체 페이지 수
 * @param scrollTargetRef - 페이지 변경 시 스크롤 될 ref
 * @param onPageChange - 페이지 변경 시 호출되는 콜백 함수
 */

export const Pagination = ({ currentPage, totalPages, scrollTargetRef, onPageChange }: Props) => {
  const manager = useMemo(
    () => new PaginationManager(currentPage, totalPages),
    [currentPage, totalPages],
  )

  useEffect(() => {
    scrollTargetRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentPage, scrollTargetRef])

  return (
    <div className="flex items-center justify-center gap-4">
      {manager.hasPrevGroup && (
        <button
          onClick={() => onPageChange(manager.prevGroupFirstPage)}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary rotate-180" />
        </button>
      )}

      {manager.visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'rounded-small font-pagination border-grey h-20 w-20 border',
            page === currentPage ? 'bg-primary border-none text-white' : 'text-darkgrey',
          )}
        >
          {page}
        </button>
      ))}

      {manager.hasNextGroup && (
        <button
          onClick={() => onPageChange(manager.nextGroupFirstPage)}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary" />
        </button>
      )}
    </div>
  )
}
