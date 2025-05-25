import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import type { CustomFontArray, FontArrayResponse, FontFilter } from '@/entity/font'
import { useAxiosSuspenseQuery } from '@/shared/hooks'

export const bookmarkKeys = {
  all: [...FONT_QUERY_KEY, 'bookmark'] as const,
  list: ({ page, sortBy, keyword }: FontFilter) =>
    [...bookmarkKeys.all, 'list', page, sortBy, keyword] as const,
}

const endpoints = {
  list: '/bookmarks',
} as const

export const useBookmarkFontList = ({ page, sortBy, keyword }: FontFilter) => {
  return useAxiosSuspenseQuery<CustomFontArray, FontArrayResponse>(
    bookmarkKeys.list({ page, sortBy, keyword }),
    () =>
      apiClient.get(endpoints.list, {
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
}
