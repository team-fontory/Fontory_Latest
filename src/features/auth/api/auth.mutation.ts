import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  logout: '/auth/logout',
} as const

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation(() => apiClient.post(endpoints.logout), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
    },
  })
}
