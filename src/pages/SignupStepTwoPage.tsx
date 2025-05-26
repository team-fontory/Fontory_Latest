import { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { type UserFormType, userSchema } from '@/entity/user'
import {
  SignupButton,
  SignupForm,
  useSignupStep1Done,
  useSignupStepActions,
} from '@/features/sign-up'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

const SignupStepTwoPage = () => {
  const navigate = useNavigate()
  const isStep1Completed = useSignupStep1Done()
  const formMethods = useCustomForm<UserFormType>(userSchema)

  const { cancelStep1 } = useSignupStepActions()

  const goToPrevStep = () => {
    cancelStep1()
    navigate(-1)
  }

  useEffect(() => {
    if (!isStep1Completed) {
      navigate(ROUTES.SIGN_UP_STEP_ONE)
    }
  }, [isStep1Completed, navigate])

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="SIGN UP" />
        <StepProgressBar currentStep={2} totalSteps={2} label="가입 정보를 입력해주세요." />

        <FormProvider {...formMethods}>
          <SignupForm />

          <div className="flex-between-center mt-[6.25rem]">
            <PrimaryButton direction="left" onClick={goToPrevStep}>
              이전 단계
            </PrimaryButton>
            <SignupButton />
          </div>
        </FormProvider>
      </section>
    </Layout>
  )
}

export default SignupStepTwoPage
