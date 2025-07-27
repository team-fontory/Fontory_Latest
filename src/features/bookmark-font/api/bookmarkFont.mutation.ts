import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { fontQueryKeys } from '@/entity/font/api/fontQueryKeys'
import { useAxiosMutation } from '@/hooks/useAxiosQuery'

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
        queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
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
        queryClient.invalidateQueries({ queryKey: fontQueryKeys.all })
      },
    },
  )
}
