import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { authQueryKeys } from '@/entity/user'

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => apiClient.delete('/member/me'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authQueryKeys.all })
    },
  })
}
