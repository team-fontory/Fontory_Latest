import { useFormContext } from 'react-hook-form'

import type { CreateFontStepThreeFormType } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontActions } from '../model/createFont.store'
import { useCreateFontForm } from '../model/useCreateFontForm'

export const CreateFontButton = () => {
  const { handleSubmit } = useFormContext<CreateFontStepThreeFormType>()
  const { setPhoneNumber } = useCreateFontActions()
  const { handleSubmitForm } = useCreateFontForm()
  const { reset } = useCreateFontActions()

  const onSubmit = (formData: CreateFontStepThreeFormType) => {
    setPhoneNumber(formData.phoneNumber)
    handleSubmitForm()
    reset()
  }

  return (
    <PrimaryButton direction="none" onClick={handleSubmit(onSubmit)}>
      제작하기
    </PrimaryButton>
  )
}
