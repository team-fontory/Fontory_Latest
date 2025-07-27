import { FormProvider } from 'react-hook-form'

import { GenderRadioGroup } from '@/components/GenderRadioGroup'
import { Input } from '@/components/Input'
import { Loading } from '@/components/Loading'
import { useProfile, type User, userConfig, type UserForm } from '@/entity/user'
import { useCustomForm } from '@/hooks/useCustomForm'

export const AccountInfoForm = () => {
  const { attribute, schema } = userConfig
  const { nickname, birth, gender } = attribute
  const { data: userInfo, isPending, isError } = useProfile()

  const formMethods = useCustomForm<UserForm>(schema, { defaultValues: userInfo?.user as User })

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return null
  }

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
