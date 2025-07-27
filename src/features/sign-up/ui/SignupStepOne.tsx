import { PrimaryButton } from '@/components/PrimaryButton'
import {
  TermsAgreementList,
  TermsButtonGroup,
  useSignupStepActions,
  useTermsAgreement,
} from '@/features/sign-up'

export const SignupStepOne = () => {
  const { setStep } = useSignupStepActions()
  const { checkedTerms, toggleCheck, agreeAll, isAllAgreed } = useTermsAgreement()

  const onSubmit = () => {
    if (isAllAgreed) {
      setStep(2)
    }
  }

  return (
    <>
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
    </>
  )
}
