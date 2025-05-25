import { publicApiClient, USER_QUERY_KEY } from '@/app/api'
import type { User } from '@/entity/user'
import { useAxiosQuery } from '@/shared/hooks'

export const authKeys = {
  all: [...USER_QUERY_KEY, 'auth'],
  profile: () => [...authKeys.all, 'profile'],
} as const

const endpoints = {
  profile: '/member/me',
} as const

export const useMyProfile = () =>
  useAxiosQuery<User>(authKeys.profile(), () => publicApiClient.get(endpoints.profile), {
    select: ({ nickname, gender, birth }) => ({ nickname, gender, birth }),
  })
