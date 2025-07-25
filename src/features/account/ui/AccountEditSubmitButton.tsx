import { useFormContext } from 'react-hook-form'

import type { UserFormType } from '@/entity/user'
import { PrimaryButton } from '@/shared/ui'

import { useEditAccountInformation } from '../hook/useEditAccountInformation'

export const AccountEditSubmitButton = () => {
  const { handleSubmit } = useFormContext<UserFormType>()
  const { handleSubmitForm } = useEditAccountInformation()

  return (
    <PrimaryButton direction="none" onClick={handleSubmit(handleSubmitForm)}>
      수정완료
    </PrimaryButton>
  )
}
