import { apiClient } from '@/app/api'
import { useAxiosMutation } from '@/shared/hooks'

export const endpoints = {
  validateName: (fontName: string) => `/fonts/verify-name?fontName=${fontName}`,
} as const

export const useValidateFontName = () =>
  useAxiosMutation((fontName: string) => apiClient.post(endpoints.validateName(fontName), null))
