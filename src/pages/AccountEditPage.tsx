import { FormProvider } from 'react-hook-form'
import { type To, useNavigate } from 'react-router-dom'

import { type UserFormType, userSchema } from '@/entity/user'
import { AccountEditForm } from '@/features/account'
import { useCustomForm } from '@/shared/hooks'
import { PrimaryButton, SectionHeader } from '@/shared/ui'

const defaultValues = {
  nickname: '고로케',
  birth: '2020-12-12',
  gender: 'MALE',
} as const

const AccountEditPage = () => {
  const navigate = useNavigate()
  const formMethods = useCustomForm<UserFormType>(userSchema, { defaultValues })

  const onComplete = () => {
    // 폼 제출, 폼 초기화, 이동
    navigate(-1 as To, { replace: true })
  }

  const onCancel = () => {
    // 폼 초기화
    navigate(-1 as To, { replace: true })
  }

  return (
    <section className="my-[16.63rem] px-48">
      <SectionHeader title="ACCOUNT INFO" />

      <FormProvider {...formMethods}>
        <AccountEditForm />
      </FormProvider>

      <div className="mt-[6.25rem] flex justify-end gap-9">
        <PrimaryButton direction="none" onClick={onComplete}>
          수정완료
        </PrimaryButton>

        <PrimaryButton direction="none" onClick={onCancel}>
          취소하기
        </PrimaryButton>
      </div>
    </section>
  )
}

export default AccountEditPage
