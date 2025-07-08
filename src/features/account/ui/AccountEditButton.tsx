import { useFormContext } from 'react-hook-form'

import type { User } from '@/entity/user'
import { PrimaryButton } from '@/shared/ui'

import { useEditAccountInformation } from '../hook/useEditAccountInformation'

export const AccountEditButton = () => {
  const { handleSubmit } = useFormContext<User>()
  const { handleSubmitForm } = useEditAccountInformation()

  return (
    <PrimaryButton direction="none" onClick={handleSubmit(handleSubmitForm)}>
      수정완료
    </PrimaryButton>
  )
}
