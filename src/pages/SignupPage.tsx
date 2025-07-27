import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'

import { userConfig, type UserFormType } from '@/entity/user'
import {
  SignupStepOne,
  SignupStepTwo,
  stepLabels,
  useResetSignupForm,
  useSignupStep,
  useSignupTotalSteps,
} from '@/features/sign-up'
import { useCustomForm } from '@/hooks/useCustomForm'
import { StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const RenderSignupPage = () => {
  const currentStep = useSignupStep()
  const { resetAll } = useResetSignupForm()

  useEffect(() => {
    return () => {
      resetAll()
    }
  }, [resetAll])

  switch (currentStep) {
    case 1:
      return <SignupStepOne />
    case 2:
      return <SignupStepTwo />
  }
}

const SignupPage = () => {
  const currentStep = useSignupStep()
  const totalSteps = useSignupTotalSteps()
  const formMethods = useCustomForm<UserFormType>(userConfig.schema)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'ACCOUNT INFO'} />
        <StepProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
          label={stepLabels[currentStep - 1]}
        />
        <FormProvider {...formMethods}>
          <form>
            <RenderSignupPage />
          </form>
        </FormProvider>
      </section>
    </Layout>
  )
}

export default SignupPage
