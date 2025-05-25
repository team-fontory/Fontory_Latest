import { useQueryClient } from '@tanstack/react-query'

import { apiClient, MAIN_QUERY_KEY } from '@/app/api'
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
      onSuccess: () => queryClient.invalidateQueries({ queryKey: MAIN_QUERY_KEY }),
    },
  )
}
