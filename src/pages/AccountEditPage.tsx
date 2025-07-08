import { FormProvider } from 'react-hook-form'
import { type To, useNavigate } from 'react-router-dom'

import { useAuth } from '@/app/providers'
import { userConfig, type UserFormType } from '@/entity/user'
import { AccountEditButton, AccountEditForm } from '@/features/account'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader } from '@/shared/ui'
import { Layout } from '@/widgets'

const AccountEditPage = () => {
  const { schema } = userConfig
  const { user } = useAuth()

  const navigate = useNavigate()
  const formMethods = useCustomForm<UserFormType>(schema, { defaultValues: { ...user } })

  const onCancel = () => {
    formMethods.reset()
    navigate(-1 as To, { replace: true })
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="ACCOUNT INFO" />

        <FormProvider {...formMethods}>
          <AccountEditForm />
          <div className="mt-[6.25rem] flex justify-end gap-9">
            <AccountEditButton />
            <PrimaryButton direction="none" onClick={onCancel}>
              취소하기
            </PrimaryButton>
          </div>
        </FormProvider>
      </section>
    </Layout>
  )
}

export default AccountEditPage
