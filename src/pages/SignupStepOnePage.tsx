import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { TermsAgreementList, TermsButtonGroup, useTermsAgreement } from '@/features/sign-up'
import { PrimaryButton, SectionHeader, StepProgressBar } from '@/shared/ui'

const SignupStepOnePage = () => {
  const navigate = useNavigate()

  const { checkedTerms, toggleCheck, agreeAll, isAllAgreed } = useTermsAgreement()

  const onSubmit = () => {
    if (isAllAgreed) {
      navigate(ROUTES.SIGN_UP_STEP_TWO)
    }
  }

  return (
    <section className="my-[16.63rem] px-48">
      <SectionHeader title="SIGN UP" />
      <StepProgressBar currentStep={1} totalSteps={2} label="이용약관에 동의해주세요." />

      <TermsAgreementList checkedTerms={checkedTerms} onToggle={toggleCheck} />
      <TermsButtonGroup checkedTerms={checkedTerms} onToggleAllTerms={agreeAll} />

      <p className="font-page-description mt-10">
        회원가입 이후에도 마이페이지에서 약관을 다시 확인할 수 있습니다.
      </p>

      <PrimaryButton
        direction="right"
        className="mt-5 ml-auto"
        onClick={onSubmit}
        disabled={!isAllAgreed}
      >
        다음 단계
      </PrimaryButton>
    </section>
  )
}

export default SignupStepOnePage
