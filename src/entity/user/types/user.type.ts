import type z from 'zod'

import type { userSchema } from '../config/user.schema'

export type GenderType = 'MALE' | 'FEMALE' | null

export type User = {
  nickname: string
  gender: GenderType
  birth: string
}

export type UserFormType = z.input<typeof userSchema> & {
  file: File | null
}
