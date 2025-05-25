import { apiClient } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  validateName: '/fonts/verify-name',
} as const

export const useValidateFontName = () =>
  useAxiosMutation((name) => apiClient.post(endpoints.validateName, { name }))
