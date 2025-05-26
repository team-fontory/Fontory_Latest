import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { MAIN_QUERY_KEY } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  editAccount: '/member/me',
  deleteUser: '/member/me',
} as const

export const useEditAccount = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation(() => apiClient.patch(endpoints.editAccount), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation(() => apiClient.delete(endpoints.deleteUser), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY })
    },
  })
}
