import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { authQueryKeys } from '@/entity/user'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  editAccount: '/member/me',
  deleteUser: '/member/me',
} as const

export const useEditAccount = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation(
    (formData) =>
      apiClient.patch(endpoints.editAccount, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: authQueryKeys.all })
      },
    },
  )
}
