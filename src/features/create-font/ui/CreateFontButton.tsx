import { useFormContext } from 'react-hook-form'

import type { CreateFontFormType } from '@/entity/font'
import { useVerificationActions } from '@/features/check-font-name-duplicate'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontForm } from '../hook/useCreateFontForm'
import { useCreateFontStepActions } from '../model/createFontStep.store'

export const CreateFontButton = () => {
  const { handleSubmit, reset } = useFormContext<CreateFontFormType>()
  const { handleSubmitForm } = useCreateFontForm()
  const { resetVerification } = useVerificationActions()
  const { resetStep } = useCreateFontStepActions()

  const onSubmit = (formData: CreateFontFormType) => {
    handleSubmitForm(formData)
    resetVerification()
    reset()
    resetStep()
  }

  return (
    <PrimaryButton type="submit" direction="none" onClick={handleSubmit(onSubmit)}>
      제작하기
    </PrimaryButton>
  )
}
