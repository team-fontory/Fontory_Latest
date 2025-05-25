import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import type { CustomFontArray, FontArrayResponse, FontFilter, FontProgress } from '@/entity/font'
import { useAxiosSuspenseQuery } from '@/shared/hooks'

type MyFontListType = Pick<FontFilter, 'page'>

export const myFontKeys = {
  all: [...FONT_QUERY_KEY, 'my-font'] as const,
  progress: () => [...myFontKeys.all, 'progress'] as const,
  list: ({ page }: MyFontListType) => [...myFontKeys.all, 'progress', page] as const,
} as const

const endpoints = {
  progress: '/fonts/progress',
  list: '/fonts/members',
} as const

export const useProgressFontList = () =>
  useAxiosSuspenseQuery<FontProgress[]>(
    myFontKeys.progress(),
    () => apiClient.get(endpoints.progress),
    {
      staleTime: 60000,
      gcTime: 60000 * 5,
      select: (data) => data.filter((font) => font.status === 'PROGRESS'),
    },
  )

export const useMyFontList = ({ page }: MyFontListType) =>
  useAxiosSuspenseQuery<CustomFontArray, FontArrayResponse>(
    myFontKeys.list({ page }),
    () => apiClient.get(endpoints.list, { params: { page: page - 1 } }),
    {
      staleTime: 60000,
      gcTime: 60000 * 5,
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
