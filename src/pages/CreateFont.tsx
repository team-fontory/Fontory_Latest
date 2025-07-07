import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'

import { createFontDefaultValues, type CreateFontFormType, createFontSchema } from '@/entity/font'
import {
  CreateFontStepOne,
  CreateFontStepThree,
  CreateFontStepTwo,
  stepLabels,
  useCreateFontStep,
  useCreateFontTotalSteps,
  useResetCreateFontForm,
} from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

const RenderCreateFontPage = () => {
  const currentStep = useCreateFontStep()
  const { resetAll } = useResetCreateFontForm()

  useEffect(() => {
    return () => {
      resetAll()
    }
  }, [resetAll])

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
  const formMethods = useCustomForm<CreateFontFormType>(createFontSchema, {
    defaultValues: createFontDefaultValues,
  })

  return (
    <Layout hasPadding>
      <SectionHeader title="CREATION" />
      <StepProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        label={stepLabels[currentStep - 1]}
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
