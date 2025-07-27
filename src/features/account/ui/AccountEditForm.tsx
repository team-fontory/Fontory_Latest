import { GenderRadioGroup } from '@/components/GenderRadioGroup'
import { Input } from '@/components/Input'
import { userConfig } from '@/entity/user'
import { NicknameCheckField } from '@/features/check-nickname-duplicate'

export const AccountEditForm = () => {
  const { nickname, birth, gender } = userConfig.attribute

  return (
    <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
      <div className="grid grid-cols-2 gap-6">
        <NicknameCheckField {...nickname} />
        <Input {...birth} />
      </div>

      <GenderRadioGroup section={gender.section} />
    </form>
  )
}
