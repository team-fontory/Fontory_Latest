import { type UseQueryOptions, useSuspenseQueries } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import type { FontDetailResponse, FontDetailType } from '@/entity/font'

export const detailKeys = {
  all: [...FONT_QUERY_KEY, 'detail'],
  detail: (fontId: number) => [...detailKeys.all, fontId],
  recommend: (fontId: number) => [...detailKeys.all, 'recommend', fontId],
} as const

const endpoints = {
  detail: (fontId: number) => `/fonts/${fontId}`,
  recommend: (fontId: number) => `/fonts/${fontId}/others`,
} as const

export const useFontDetail = (fontId: number) => {
  const [detailQuery, recommendQuery] = useSuspenseQueries<
    [
      UseQueryOptions<FontDetailResponse, AxiosError, FontDetailType>,
      UseQueryOptions<FontDetailResponse[], AxiosError, FontDetailType[]>,
    ]
  >({
    queries: [
      {
        queryKey: detailKeys.detail(fontId),
        queryFn: () => apiClient.get(endpoints.detail(fontId)),
        select: ({ id, name, bookmarked, ...rest }) => ({
          fontId: id,
          fontName: name,
          isBookmarked: bookmarked,
          ...rest,
        }),
      },
      {
        queryKey: detailKeys.recommend(fontId),
        queryFn: () => apiClient.get(endpoints.recommend(fontId)),
        select: (data) =>
          data.map(({ id, name, bookmarked, ...rest }) => ({
            fontId: id,
            fontName: name,
            isBookmarked: bookmarked,
            ...rest,
          })),
      },
    ],
  })

  return {
    fontDetail: detailQuery.data,
    recommendList: recommendQuery.data,
  }
}
