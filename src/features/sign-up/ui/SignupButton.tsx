import { useFormContext } from 'react-hook-form'

import type { UserFormType } from '@/entity/user'
import { useVerificationStatus } from '@/features/check-nickname-duplicate/model/nicknameVerification.store'
import { PrimaryButton } from '@/shared/ui'

import { useSignupForm } from '../model/useSignupForm'

export const SignupButton = () => {
  const isVerified = useVerificationStatus()

  const { handleSubmitForm } = useSignupForm()
  const { handleSubmit, formState } = useFormContext<UserFormType>()

  return (
    <PrimaryButton
      direction="none"
      onClick={handleSubmit(handleSubmitForm)}
      disabled={!isVerified || !formState.isValid}
    >
      가입하기
    </PrimaryButton>
  )
}
