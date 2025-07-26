import type { User } from './types/user.type'

export class AuthModel {
  private readonly userData: User | null

  constructor(data: User) {
    this.userData = {
      nickname: data.nickname,
      gender: data.gender,
      birth: data.birth,
    }
  }

  get user() {
    return this.userData
  }
}
