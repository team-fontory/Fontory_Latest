import { publicApiClient, USER_QUERY_KEY } from '@/app/api'
import { useAxiosQuery } from '@/shared/hooks'

export const authKeys = {
  all: [...USER_QUERY_KEY, 'auth'],
  profile: () => [...authKeys.all, 'profile'],
} as const

const endpoints = {
  profile: '/member/me',
} as const

export const useMyProfile = () =>
  useAxiosQuery<unknown>(authKeys.profile(), () => publicApiClient.get(endpoints.profile))
