import { useQuery } from '@tanstack/react-query'

import { AuthModel } from '../authModel'

import { authQueryKeys } from './authQueryKeys'
import { AuthService } from './AuthService'

export const useProfile = () => {
  return useQuery({
    queryKey: authQueryKeys.profile(),
    queryFn: () => AuthService.getProfile(),
    select: (data) => new AuthModel(data),
    retry: false,
  })
}
