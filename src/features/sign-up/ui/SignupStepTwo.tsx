import { userConfig } from '@/entity/user'
import { NicknameCheckField } from '@/features/check-nickname-duplicate'
import { SignupButton, useSignupStepActions } from '@/features/sign-up'
import { GenderRadioGroup, Input, PrimaryButton } from '@/shared/ui'

export const SignupStepTwo = () => {
  const { nickname, birth, gender } = userConfig.attribute
  const { setStep } = useSignupStepActions()

  const goToPrevStep = () => {
    setStep(1)
  }

  return (
    <>
      <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
        <div className="grid grid-cols-2 gap-6">
          <NicknameCheckField {...nickname} />
          <Input {...birth} />
        </div>

        <GenderRadioGroup section={gender.section} />
      </form>

      <div className="flex-between-center mt-[6.25rem]">
        <PrimaryButton direction="left" onClick={goToPrevStep}>
          이전 단계
        </PrimaryButton>
        <SignupButton />
      </div>
    </>
  )
}
