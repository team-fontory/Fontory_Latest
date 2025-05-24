import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  addBookmark: (fontId: number) => `/bookmarks/${fontId}`,
  removeBookmark: (fontId: number) => `/bookmarks/${fontId}`,
} as const

export const useAddBookmark = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation<unknown, number>(
    (fontId) => apiClient.post(endpoints.addBookmark(fontId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
      },
    },
  )
}

export const useRemoveBookmark = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation<unknown, number>(
    (fontId) => apiClient.delete(endpoints.removeBookmark(fontId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
      },
    },
  )
}
