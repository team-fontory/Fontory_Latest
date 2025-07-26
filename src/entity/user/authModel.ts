import type { GenderType, User } from './types/user.type'

export class AuthModel {
  private readonly nickname: string
  private readonly gender: GenderType
  private readonly birth: string

  constructor(data: User) {
    this.nickname = data.nickname
    this.gender = data.gender
    this.birth = data.birth
  }

  get userData() {
    return {
      nickname: this.nickname,
      gender: this.gender,
      birth: this.birth,
    }
  }
}
