import { apiClient } from '@/app/api'
import { useAxiosMutation } from '@/hooks/useAxiosQuery'

export const endpoints = {
  validateName: (fontName: string) => `/fonts/verify-name?fontName=${fontName}`,
} as const

export const useValidateFontName = () =>
  useAxiosMutation<boolean, string>((fontName) => apiClient.get(endpoints.validateName(fontName)))
