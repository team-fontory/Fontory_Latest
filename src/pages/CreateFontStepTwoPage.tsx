import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import {
  type CreateFontStepTwoFormType,
  createFontStepTwoSchema,
  fontAttribute,
} from '@/entity/font'
import { CheckFontNameDuplicate } from '@/features/check-font-name-duplicate'
import { StepTwoButtonNavigation, useCreateFontStep1Done } from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { Input, SectionHeader, StepProgressBar, Textarea } from '@/shared/ui'
import { Layout } from '@/widgets'

const CreateFontStepTwoPage = () => {
  const navigate = useNavigate()
  const isStep1Completed = useCreateFontStep1Done()
  const formMethods = useCustomForm<CreateFontStepTwoFormType>(createFontStepTwoSchema)

  useEffect(() => {
    if (!isStep1Completed) {
      navigate(ROUTES.CREATE_FONT_STEP_ONE)
    }
  }, [isStep1Completed, navigate])

  return (
    <Layout hasPadding>
      <SectionHeader title="CREATION" />
      <StepProgressBar currentStep={2} totalSteps={3} label="폰트 정보를 입력해주세요." />

      <FormProvider {...formMethods}>
        <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
          <div className="grid grid-cols-2 gap-6">
            <CheckFontNameDuplicate {...fontAttribute.name} />
            <Input {...fontAttribute.engName} />
          </div>

          <Textarea {...fontAttribute.example} />
        </form>

        <StepTwoButtonNavigation />
      </FormProvider>
    </Layout>
  )
}

export default CreateFontStepTwoPage
