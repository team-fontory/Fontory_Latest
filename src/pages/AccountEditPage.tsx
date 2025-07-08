import { FormProvider } from 'react-hook-form'
import { type To, useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { userConfig, type UserFormType } from '@/entity/user'
import { AccountEditForm } from '@/features/account'
import { useMyProfile } from '@/features/auth'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader } from '@/shared/ui'
import { Layout } from '@/widgets'

const AccountEditPage = () => {
  const navigate = useNavigate()

  const { schema, defaultValues } = userConfig
  const { data: accountInfo, isError, isPending } = useMyProfile()

  const formMethods = useCustomForm<UserFormType>(schema, { defaultValues })

  const onComplete = () => {
    formMethods.reset()
    navigate(-1 as To, { replace: true })
  }

  const onCancel = () => {
    formMethods.reset()
    navigate(-1 as To, { replace: true })
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
          <AccountEditForm />
        </FormProvider>

        <div className="mt-[6.25rem] flex justify-end gap-9">
          <PrimaryButton direction="none" onClick={formMethods.handleSubmit(onComplete)}>
            수정완료
          </PrimaryButton>

          <PrimaryButton direction="none" onClick={onCancel}>
            취소하기
          </PrimaryButton>
        </div>
      </section>
    </Layout>
  )
}

export default AccountEditPage
