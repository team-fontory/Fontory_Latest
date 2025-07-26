import { publicApiClient } from '@/app/api'

import type { User } from '../types/user.type'

class Service {
  getProfile() {
    return publicApiClient.get<User>('/member/me')
  }
}

export const AuthService = new Service()
