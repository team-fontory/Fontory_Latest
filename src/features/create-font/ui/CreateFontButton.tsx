import { useFormContext } from 'react-hook-form'

import type { CreateFontFormType } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontForm } from '../hook/useCreateFontForm'

export const CreateFontButton = () => {
  const { handleSubmit, reset } = useFormContext<CreateFontFormType>()
  const { handleSubmitForm } = useCreateFontForm()

  const onSubmit = (formData: CreateFontFormType) => {
    handleSubmitForm(formData)
    reset()
  }

  return (
    <PrimaryButton type="submit" direction="none" onClick={handleSubmit(onSubmit)}>
      제작하기
    </PrimaryButton>
  )
}
