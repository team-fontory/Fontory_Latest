import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import {
  type CreateFontStepThreeFormType,
  createFontStepThreeSchema,
  fontAttribute,
} from '@/entity/font'
import {
  CreateFontButton,
  useCreateFontStep2Done,
  useCreateFontStepActions,
  useCreateFontValues,
} from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { Input, PrimaryButton, SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

const CreateFontStepThreePage = () => {
  const navigate = useNavigate()
  const isStep2Completed = useCreateFontStep2Done()

  const { phoneNumber } = useCreateFontValues()
  const formMethods = useCustomForm<CreateFontStepThreeFormType>(createFontStepThreeSchema, {
    defaultValues: { phoneNumber },
  })

  const { cancelStep2 } = useCreateFontStepActions()

  useEffect(() => {
    if (!isStep2Completed) {
      navigate(ROUTES.CREATE_FONT_STEP_ONE)
    }
  }, [isStep2Completed, navigate])

  const goToPrevStep = () => {
    cancelStep2()
    navigate(-1)
  }

  return (
    <Layout hasPadding>
      <SectionHeader title="CREATION" />
      <StepProgressBar currentStep={3} totalSteps={3} label="전화번호를 입력해주세요. (선택)" />

      <FormProvider {...formMethods}>
        <form className="font-page-description mt-[6.25rem] grid grid-cols-2 items-end gap-6">
          <Input {...fontAttribute.phoneNumber} />
          <p className="text-right">
            제작 소요 시간은 최대 10분입니다.
            <br /> 제작이 완료되면 입력하신 전화번호로 알림을 전송해드립니다.
          </p>
        </form>

        <div className="flex-between-center mt-[6.25rem]">
          <PrimaryButton direction="left" onClick={goToPrevStep}>
            이전 단계
          </PrimaryButton>

          <CreateFontButton />
        </div>
      </FormProvider>
    </Layout>
  )
}

export default CreateFontStepThreePage
