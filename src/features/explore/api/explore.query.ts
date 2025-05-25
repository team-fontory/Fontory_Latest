import { publicApiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api'
import type { CustomFontArray, FontArrayResponse } from '@/entity/font'
import { useAxiosSuspenseQuery } from '@/shared/hooks'
import type { SortLabel } from '@/shared/ui'

type ExploreListParams = {
  page: number
  sortBy: SortLabel
  keyword: string | null
}

export const exploreKeys = {
  all: [...MAIN_QUERY_KEY, 'explore'],
  list: ({ page, sortBy, keyword }: ExploreListParams) =>
    [...exploreKeys.all, 'list', page, sortBy, keyword] as const,
} as const

const endpoints = {
  list: '/fonts',
} as const

export const useExploreList = ({ page, sortBy, keyword }: ExploreListParams) =>
  useAxiosSuspenseQuery<CustomFontArray, FontArrayResponse>(
    exploreKeys.list({ page, sortBy, keyword }),
    () =>
      publicApiClient.get(endpoints.list, {
        params: { page: page - 1, size: 8, keyword, sortBy },
      }),
    {
      select: ({ content, number, totalPages }) => {
        const array = content.map(({ id, name, bookmarked, ...rest }) => ({
          fontId: id,
          fontName: name,
          isBookmarked: bookmarked,
          ...rest,
        }))

        return { content: array, currentPage: number + 1, totalPages }
      },
    },
  )
