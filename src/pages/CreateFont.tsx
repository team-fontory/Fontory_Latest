import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'

import { type CreateFontFormType, createFontSchema, defaultValues } from '@/entity/font'
import { useVerificationActions } from '@/features/check-font-name-duplicate'
import {
  CreateFontStepOne,
  CreateFontStepThree,
  CreateFontStepTwo,
  stepLabels,
  useCreateFontStep,
  useCreateFontStepActions,
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

  const { resetVerification } = useVerificationActions()
  const { resetStep } = useCreateFontStepActions()

  useEffect(() => {
    return () => {
      formMethods.reset()
      resetVerification()
      resetStep()
    }
  }, [formMethods, resetStep, resetVerification])

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
