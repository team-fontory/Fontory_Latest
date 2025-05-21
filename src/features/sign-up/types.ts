export type GenderType = 'MALE' | 'FEMALE' | null

export type SignupFieldsType = {
  nickname: string
  birth: string
  gender: GenderType
}

export type SignupForm = {
  agreedTerms: boolean
  fields: SignupFieldsType
}
