import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { authQueryKeys } from '@/entity/user'
import { useAxiosMutation } from '@/hooks/useAxiosQuery'

export const endpoints = {
  logout: '/auth/logout',
} as const

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation(() => apiClient.post(endpoints.logout), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authQueryKeys.all })
    },
  })
}
