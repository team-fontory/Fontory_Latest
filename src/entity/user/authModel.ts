import type { User } from './types/user.type'

export class AuthModel {
  private readonly nickname: User['nickname']
  private readonly gender: User['gender']
  private readonly birth: User['birth']

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
