import type { User } from './types/user.type'

export class AuthModel {
  public readonly userData: User

  constructor(data: User) {
    this.userData = {
      nickname: data.nickname,
      gender: data.gender,
      birth: data.birth,
    }
  }
}
