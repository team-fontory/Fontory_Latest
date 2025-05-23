import { cn } from '../lib'

import { Icon } from './Icon/Icon'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

/**
 * 현재 페이지와 전체 페이지 수를 기반으로 한 페이지네이션
 *
 * - 첫/마지막 페이지에서는 화살표 버튼이 표시되지 않음
 *
 * @param currentPage - 현재 페이지 번호
 * @param totalPages - 전체 페이지 수
 * @param onPageChange - 페이지 변경 시 호출되는 콜백 함수
 */

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handleGoToPrevPage = () => {
    onPageChange(currentPage - 1)
  }

  const handleGoToNextPage = () => {
    onPageChange(currentPage + 1)
  }

  const handleGoToSelectPage = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className="flex items-center justify-center gap-4">
      {currentPage > 1 && (
        <button
          onClick={handleGoToPrevPage}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size={'2.25rem'} className="text-primary rotate-180" />
        </button>
      )}

      {pages.map((page) => (
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

      {currentPage < totalPages && (
        <button
          onClick={handleGoToNextPage}
          className="flex-center rounded-small border-grey h-20 w-20 border"
        >
          <Icon name="caret-right" size={'2.25rem'} className="text-primary" />
        </button>
      )}
    </div>
  )
}
