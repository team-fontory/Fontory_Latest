import { FormProvider } from 'react-hook-form'

import { useProfile, userConfig, type UserForm } from '@/entity/user'
import { useCustomForm } from '@/shared/hooks'
import { GenderRadioGroup, Input } from '@/shared/ui'

export const AccountInfoForm = () => {
  const { attribute, schema } = userConfig
  const { nickname, birth, gender } = attribute
  const { data: userInfo } = useProfile()

  const formMethods = useCustomForm<UserForm>(schema, { defaultValues: userInfo.userData })

  return (
    <FormProvider {...formMethods}>
      <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
        <div className="grid grid-cols-2 gap-6">
          <Input {...nickname} hint="" disabled />
          <Input {...birth} hint="" disabled />
        </div>

        <GenderRadioGroup section={gender.section} disabled />
      </form>
    </FormProvider>
  )
}
