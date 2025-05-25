import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { type UserFormType, userSchema } from '@/entity/user'
import { SignupButton, SignupForm } from '@/features/sign-up'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader, StepProgressBar } from '@/shared/ui'

const SignupStepTwoPage = () => {
  const navigate = useNavigate()
  const formMethods = useCustomForm<UserFormType>(userSchema)

  const goToPrevStep = () => {
    navigate(-1)
  }

  return (
    <section className="my-[16.63rem] px-48">
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
  )
}

export default SignupStepTwoPage
