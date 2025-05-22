import { CheckNicknameDuplicate } from '@/features/check-nickname-duplicate'
import { GenderRadioGroup, Input } from '@/shared/ui'

import { signupAttribute } from '../config/signup.schema'

export const SignupForm = () => {
  return (
    <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
      <div className="grid grid-cols-2 gap-6">
        <CheckNicknameDuplicate {...signupAttribute.nickname} />
        <Input {...signupAttribute.birth} />
      </div>

      <GenderRadioGroup section={signupAttribute.gender.section} />
    </form>
  )
}
