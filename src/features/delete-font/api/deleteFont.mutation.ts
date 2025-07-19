import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { fontQueryKeys } from '@/entity/font/api/fontQueryKeys'

export const useDeleteFontMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (fontId: number) => apiClient.delete(`/fonts/members/${fontId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: fontQueryKeys.all }),
  })
}
