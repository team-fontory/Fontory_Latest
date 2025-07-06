import { useFormContext } from 'react-hook-form'

import type { CreateFontStepTwoFormType } from '@/entity/font'
import { useVerificationStatus } from '@/features/check-font-name-duplicate/model/fontNameVerification.store'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontActions } from '../model/createFont.store'
import { useCreateFontStepActions } from '../model/createFontStep.store'

export const StepTwoButtonNavigation = () => {
  const isVerified = useVerificationStatus()

  const { setStep } = useCreateFontStepActions()
  const { handleSubmit, formState } = useFormContext<CreateFontStepTwoFormType>()
  const { setFontInformation } = useCreateFontActions()

  const goToPrevStep = () => {
    setStep(1)
  }

  const goToNextStep = (formData: CreateFontStepTwoFormType) => {
    setStep(3)
    setFontInformation(formData)
  }

  return (
    <div className="flex-between-center mt-[6.25rem]">
      <PrimaryButton direction="left" onClick={goToPrevStep}>
        이전 단계
      </PrimaryButton>

      <PrimaryButton
        direction="right"
        disabled={!formState.isValid || !isVerified}
        onClick={handleSubmit(goToNextStep)}
      >
        다음 단계
      </PrimaryButton>
    </div>
  )
}
