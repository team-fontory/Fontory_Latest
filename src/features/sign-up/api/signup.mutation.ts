import { publicApiClient } from '@/app/api'
import { useAxiosMutation } from '@/hooks/useAxiosQuery'

export const endpoints = {
  signup: '/register',
} as const

export const useSignup = () => {
  return useAxiosMutation<unknown, FormData>((formData) =>
    publicApiClient.post(endpoints.signup, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  )
}
