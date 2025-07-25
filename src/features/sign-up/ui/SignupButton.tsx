import { useFormContext } from 'react-hook-form'

import type { UserFormType } from '@/entity/user'
import { useNickNameChecked } from '@/features/check-nickname-duplicate'
import { PrimaryButton } from '@/shared/ui'

import { useSignupForm } from '../model/useSignupForm'

export const SignupButton = () => {
  const isChecked = useNickNameChecked()

  const { handleSubmitForm } = useSignupForm()
  const { handleSubmit, formState } = useFormContext<UserFormType>()

  return (
    <PrimaryButton
      direction="none"
      onClick={handleSubmit(handleSubmitForm)}
      disabled={!isChecked || !formState.isValid}
    >
      가입하기
    </PrimaryButton>
  )
}
