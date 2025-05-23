import { userAttribute } from '@/entity/user'
import { CheckNicknameDuplicate } from '@/features/check-nickname-duplicate'
import { GenderRadioGroup, Input } from '@/shared/ui'

export const SignupForm = () => {
  return (
    <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
      <div className="grid grid-cols-2 gap-6">
        <CheckNicknameDuplicate {...userAttribute.nickname} />
        <Input {...userAttribute.birth} />
      </div>

      <GenderRadioGroup section={userAttribute.gender.section} />
    </form>
  )
}
