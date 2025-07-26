import { AccountEditEntryButton, AccountInfoForm } from '@/features/account'
import { DeleteUserButton } from '@/features/delete-user'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const AccountInfoPage = () => {
  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="ACCOUNT INFO" />
        <AccountInfoForm />

        <div className="mt-[6.25rem] flex justify-end gap-9">
          <AccountEditEntryButton />
          <DeleteUserButton />
        </div>
      </section>
    </Layout>
  )
}

export default AccountInfoPage
