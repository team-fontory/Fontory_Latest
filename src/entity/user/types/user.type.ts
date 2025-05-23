import type z from 'zod'

import type { userSchema } from '../config/user.schema'

export type GenderType = 'MALE' | 'FEMALE' | null

export type UserFieldsType = {
  nickname: string
  birth: string
  gender: GenderType
}

export type UserFormType = z.infer<typeof userSchema> & {
  file: File | null
}
