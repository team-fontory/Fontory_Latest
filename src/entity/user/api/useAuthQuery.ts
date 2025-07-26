import { useSuspenseQuery } from '@tanstack/react-query'

import { AuthModel } from '../authModel'

import { authQueryKeys } from './authQueryKeys'
import { AuthService } from './AuthService'

export const useProfile = () => {
  return useSuspenseQuery({
    queryKey: authQueryKeys.profile(),
    queryFn: () => AuthService.getProfile(),
    select: (data) => {
      console.log(data, 'select')
      return new AuthModel(data)
    },
    retry: false,
  })
}
