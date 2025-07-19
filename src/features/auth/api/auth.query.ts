import { useQuery } from '@tanstack/react-query'

import { publicApiClient, USER_QUERY_KEY } from '@/app/api'
import type { User } from '@/entity/user'

export const authKeys = {
  all: [...USER_QUERY_KEY, 'auth'],
  profile: () => [...authKeys.all, 'profile'],
} as const

const endpoints = {
  profile: '/member/me',
} as const

export const useMyProfile = () => {
  return useQuery<User>({
    queryKey: authKeys.profile(),
    queryFn: () => publicApiClient.get(endpoints.profile),
    select: ({ nickname, gender, birth }) => ({ nickname, gender, birth }),
  })
}
