import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { CreateFontStepThreeFormType } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontActions } from '../model/createFont.store'

export const StepThreeButtonNavigation = () => {
  const navigate = useNavigate()

  const { handleSubmit } = useFormContext<CreateFontStepThreeFormType>()
  const { setFontInformation } = useCreateFontActions()

  const goToPrevStep = () => {
    navigate(-1)
  }

  const onSubmit = (formData: CreateFontStepThreeFormType) => {
    navigate(ROUTES.MY_FONT)
  }

  return (
    <div className="flex-between-center mt-[6.25rem]">
      <PrimaryButton direction="left" onClick={goToPrevStep}>
        이전 단계
      </PrimaryButton>

      <PrimaryButton direction="none" onClick={handleSubmit(onSubmit)}>
        제작하기
      </PrimaryButton>
    </div>
  )
}
