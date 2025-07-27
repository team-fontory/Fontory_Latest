import { FormProvider } from 'react-hook-form'

import { Loading } from '@/components/Loading'
import { useProfile, type User, userConfig, type UserForm } from '@/entity/user'
import {
  AccountEditCancelButton,
  AccountEditForm,
  AccountEditSubmitButton,
} from '@/features/account'
import { useCustomForm } from '@/hooks/useCustomForm'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const AccountEditPage = () => {
  const { schema } = userConfig
  const { data: userInfo, isPending, isError } = useProfile()

  const formMethods = useCustomForm<UserForm>(schema, { defaultValues: userInfo?.user as User })

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return null
  }

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="ACCOUNT INFO" />

        <FormProvider {...formMethods}>
          <AccountEditForm />
          <div className="mt-[6.25rem] flex justify-end gap-9">
            <AccountEditSubmitButton />
            <AccountEditCancelButton />
          </div>
        </FormProvider>
      </section>
    </Layout>
  )
}

export default AccountEditPage
