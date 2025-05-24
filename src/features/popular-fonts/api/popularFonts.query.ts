import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import type { FontDetailResponse, FontDetailType } from '@/entity/font'
import { useAxiosSuspenseQuery } from '@/shared/hooks'

export const popularFontsQueryKeys = {
  list: [...FONT_QUERY_KEY, 'popular'],
} as const

const endpoints = {
  list: () => '/fonts/popular',
}

export const usePopularFonts = () =>
  useAxiosSuspenseQuery<FontDetailType[], FontDetailResponse[]>(
    popularFontsQueryKeys.list,
    () => apiClient.get(endpoints.list()),
    {
      staleTime: 60000,
      gcTime: 60000 * 5,
      select: (data) =>
        data.map(({ id, name, bookmarked, ...rest }) => ({
          fontId: id,
          fontName: name,
          isBookmarked: bookmarked,
          ...rest,
        })),
    },
  )
