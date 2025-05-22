import type z from 'zod'

import type { signupSchema } from './config/signup.schema'

export type GenderType = 'MALE' | 'FEMALE' | null

export type SignupFieldsType = {
  nickname: string
  birth: string
  gender: GenderType
}

export type SignupFormType = z.infer<typeof signupSchema> & {
  file: File | null
}
