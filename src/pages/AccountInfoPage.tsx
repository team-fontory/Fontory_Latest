import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { userAttribute, type UserFormType, userSchema } from '@/entity/user'
import { useMyProfile } from '@/features/auth'
import { useCustomForm } from '@/shared/hooks'
import { GenderRadioGroup, Input, PrimaryButton, SectionHeader } from '@/shared/ui'
import { Layout } from '@/widgets'

const AccountInfoPage = () => {
  const navigate = useNavigate()
  const { data: accountInfo, isError, isPending } = useMyProfile()

  const formMethods = useCustomForm<UserFormType>(userSchema, { defaultValues: { ...accountInfo } })

  const onEdit = () => {
    navigate(ROUTES.ACCOUNT_EDIT)
  }

  const onDelete = () => {
    console.log('탈퇴하기')
  }

  if (isError || !accountInfo) {
    navigate(ROUTES.LOGIN, { replace: true })
  }

  if (isPending) {
    return null
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="ACCOUNT INFO" />

        <FormProvider {...formMethods}>
          <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
            <div className="grid grid-cols-2 gap-6">
              <Input {...userAttribute.nickname} disabled />
              <Input {...userAttribute.birth} disabled />
            </div>

            <GenderRadioGroup section={userAttribute.gender.section} disabled />
          </form>
        </FormProvider>

        <div className="mt-[6.25rem] flex justify-end gap-9">
          <PrimaryButton direction="none" onClick={onEdit}>
            수정하기
          </PrimaryButton>

          <PrimaryButton direction="none" onClick={onDelete}>
            탈퇴하기
          </PrimaryButton>
        </div>
      </section>
    </Layout>
  )
}

export default AccountInfoPage
