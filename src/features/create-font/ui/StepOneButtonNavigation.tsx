import { useFormContext, useWatch } from 'react-hook-form'

import { fontAttribute } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontStepActions } from '../model/createFontStep.store'

export const StepOneButtonNavigation = () => {
  const file = useWatch({ name: fontAttribute.file.section })

  const { handleSubmit } = useFormContext()
  const { setStep } = useCreateFontStepActions()

  const onSubmit = () => {
    setStep(2)
  }

  return (
    <PrimaryButton
      direction="right"
      className="mt-5 ml-auto"
      onClick={handleSubmit(onSubmit)}
      disabled={!file}
    >
      다음 단계
    </PrimaryButton>
  )
}
