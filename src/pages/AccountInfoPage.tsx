import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/app/providers'
import { ROUTES } from '@/app/router'
import { userConfig, type UserFormType } from '@/entity/user'
import { DeleteUserButton } from '@/features/account'
import { useCustomForm } from '@/shared/hooks'
import { GenderRadioGroup, Input, PrimaryButton } from '@/shared/ui'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const AccountInfoPage = () => {
  const navigate = useNavigate()

  const { attribute, schema } = userConfig
  const { nickname, birth, gender } = attribute
  const { user } = useAuth()

  const formMethods = useCustomForm<UserFormType>(schema, { defaultValues: { ...user } })

  const onEdit = () => {
    navigate(ROUTES.ACCOUNT_EDIT)
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="ACCOUNT INFO" />

        <FormProvider {...formMethods}>
          <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
            <div className="grid grid-cols-2 gap-6">
              <Input {...nickname} hint="" disabled />
              <Input {...birth} hint="" disabled />
            </div>

            <GenderRadioGroup section={gender.section} disabled />
          </form>
        </FormProvider>

        <div className="mt-[6.25rem] flex justify-end gap-9">
          <PrimaryButton direction="none" onClick={onEdit}>
            수정하기
          </PrimaryButton>

          <DeleteUserButton />
        </div>
      </section>
    </Layout>
  )
}

export default AccountInfoPage
