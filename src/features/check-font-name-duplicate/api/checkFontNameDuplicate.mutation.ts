import { apiClient } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  validateName: '/fonts/verify-name',
} as const

export const useValidateFontName = () =>
  useAxiosMutation((fontName) => apiClient.post(endpoints.validateName, { fontName }))
