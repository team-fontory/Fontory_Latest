import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { SignupForm, type SignupFormType, signupSchema } from '@/features/sign-up'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader, StepProgressBar } from '@/shared/ui'

const SignupStepTwoPage = () => {
  const navigate = useNavigate()
  const formMethods = useCustomForm<SignupFormType>(signupSchema)

  const goToPrevStep = () => {
    navigate(-1)
  }

  const onSubmit = (formData: SignupFormType) => {
    console.log('submit')
    console.log(formData)
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

          <PrimaryButton
            direction="right"
            onClick={formMethods.handleSubmit(onSubmit)}
            // disabled={!isAllAgreed}
          >
            다음 단계
          </PrimaryButton>
        </div>
      </FormProvider>
    </section>
  )
}

export default SignupStepTwoPage
