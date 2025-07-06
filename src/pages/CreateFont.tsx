import { FormProvider } from 'react-hook-form'

import { type CreateFontFormType, createFontSchema, defaultValues } from '@/entity/font'
import {
  CreateFontStepOne,
  CreateFontStepThree,
  CreateFontStepTwo,
  stepLabels,
  useCreateFontStep,
  useCreateFontTotalSteps,
} from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

const RenderCreateFontPage = () => {
  const currentStep = useCreateFontStep()

  switch (currentStep) {
    case 1:
      return <CreateFontStepOne />
    case 2:
      return <CreateFontStepTwo />
    case 3:
      return <CreateFontStepThree />
  }
}

const CreateFont = () => {
  const currentStep = useCreateFontStep()
  const totalSteps = useCreateFontTotalSteps()
  const formMethods = useCustomForm<CreateFontFormType>(createFontSchema, { defaultValues })

  return (
    <Layout hasPadding>
      <SectionHeader title="CREATION" />
      <StepProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        label={stepLabels[currentStep]}
      />

      <FormProvider {...formMethods}>
        <form>
          <RenderCreateFontPage />
        </form>
      </FormProvider>
    </Layout>
  )
}

export default CreateFont
