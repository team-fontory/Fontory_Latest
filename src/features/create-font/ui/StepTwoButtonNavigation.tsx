import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { CreateFontStepTwoFormType } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontActions } from '../model/createFont.store'

export const StepTwoButtonNavigation = () => {
  const navigate = useNavigate()

  const { handleSubmit, formState } = useFormContext<CreateFontStepTwoFormType>()
  const { setFontInformation } = useCreateFontActions()

  const goToPrevStep = () => {
    navigate(-1)
  }

  const goToNextStep = (formData: CreateFontStepTwoFormType) => {
    setFontInformation(formData)
    navigate(ROUTES.CREATE_FONT_STEP_THREE)
  }

  return (
    <div className="flex-between-center mt-[6.25rem]">
      <PrimaryButton direction="left" onClick={goToPrevStep}>
        이전 단계
      </PrimaryButton>

      <PrimaryButton
        direction="right"
        disabled={!formState.isValid}
        onClick={handleSubmit(goToNextStep)}
      >
        다음 단계
      </PrimaryButton>
    </div>
  )
}
