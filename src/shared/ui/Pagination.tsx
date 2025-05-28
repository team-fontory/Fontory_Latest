import { type RefObject, useEffect } from 'react'

import { cn } from '../lib'

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

const MAX_VISIBLE = 4

export const Pagination = ({ currentPage, totalPages, scrollTargetRef, onPageChange }: Props) => {
  const currentGroup = Math.floor((currentPage - 1) / MAX_VISIBLE)

  const start = currentGroup * MAX_VISIBLE + 1
  const end = Math.min(start + MAX_VISIBLE - 1, totalPages)
  const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const handleGoToPrevGroup = () => {
    const prevGroupFirstPage = Math.max(1, start - MAX_VISIBLE)
    onPageChange(prevGroupFirstPage)
  }

  const handleGoToNextGroup = () => {
    const nextGroupFirstPage = start + MAX_VISIBLE
    if (nextGroupFirstPage <= totalPages) {
      onPageChange(nextGroupFirstPage)
    }
  }

  const handleGoToSelectPage = (page: number) => {
    onPageChange(page)
  }

  useEffect(() => {
    scrollTargetRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentPage, scrollTargetRef])

  return (
    <div className="flex items-center justify-center gap-4">
      {start > 1 && (
        <button
          onClick={handleGoToPrevGroup}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary rotate-180" />
        </button>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handleGoToSelectPage(page)}
          className={cn(
            'rounded-small font-pagination border-grey h-20 w-20 border',
            page === currentPage ? 'bg-primary border-none text-white' : 'text-darkgrey',
          )}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <button
          onClick={handleGoToNextGroup}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size="2.25rem" className="text-primary" />
        </button>
      )}
    </div>
  )
}
