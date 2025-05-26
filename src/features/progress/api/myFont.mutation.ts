import { useQueryClient } from '@tanstack/react-query'

import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  deleteFont: (fontId: number) => `/fonts/members/${fontId}`,
} as const

export const useDeleteFontMutation = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation<unknown, number>(
    (fontId) => apiClient.delete(endpoints.deleteFont(fontId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: FONT_QUERY_KEY })
      },
    },
  )
}
