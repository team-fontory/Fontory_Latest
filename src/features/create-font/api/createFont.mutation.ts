import { useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/app/api'
import { fontQueryKeys } from '@/entity/font/api/fontQueryKeys'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  create: '/fonts',
} as const

export const useCreateFont = () => {
  const queryClient = useQueryClient()

  return useAxiosMutation<unknown, FormData>(
    (formData) =>
      apiClient.post(endpoints.create, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: fontQueryKeys.all }),
    },
  )
}
