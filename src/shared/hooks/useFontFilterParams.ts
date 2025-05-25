import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { FontFilter } from '@/entity/font'
import { useQueryParam } from '@/shared/hooks'
import { toQueryString } from '@/shared/lib'
import { SORT_OPTIONS, type SortLabel } from '@/shared/ui'

/**
 * 페이지의 필터(query string) 상태를 관리하는 커스텀 훅
 *
 * - 현재 URL의 query string에서 page, sortBy, keyword 값을 파싱하여 반환
 * - 값이 없거나 잘못된 경우 기본값으로 처리
 * - setFilterParams 함수를 통해 query string을 업데이트하고 페이지 이동 수행
 */

export const useFontFilterParams = () => {
  const navigate = useNavigate()
  const { getQueryParam } = useQueryParam()

  const page = parseInt(getQueryParam('page') ?? '1', 10)
  const sortBy = getQueryParam<SortLabel>('sortBy') ?? SORT_OPTIONS.all
  const keyword = getQueryParam<string>('keyword') ?? null

  const setFilterParams = (next: Partial<FontFilter>) => {
    const query = toQueryString({
      page: next.page ?? page,
      sortBy: next.sortBy ?? sortBy,
      keyword: next.keyword ?? keyword,
    })

    navigate(`${ROUTES.EXPLORE}?${query}`)
  }

  return {
    page,
    sortBy,
    keyword,
    setFilterParams,
  }
}
