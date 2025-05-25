import { useFormContext } from 'react-hook-form'

import type { UserFormType } from '@/entity/user'
import { PrimaryButton } from '@/shared/ui'

import { useSignupForm } from '../model/useSignupForm'

export const SignupButton = () => {
  const { handleSubmitForm } = useSignupForm()
  const { handleSubmit } = useFormContext<UserFormType>()

  return (
    <PrimaryButton direction="none" onClick={handleSubmit(handleSubmitForm)}>
      가입하기
    </PrimaryButton>
  )
}
