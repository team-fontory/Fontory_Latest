import { useFormContext } from 'react-hook-form'
import { type To, useNavigate } from 'react-router-dom'

import { PrimaryButton } from '@/shared/ui'

export const AccountEditCancelButton = () => {
  const navigate = useNavigate()
  const { reset } = useFormContext()

  const handleCancel = () => {
    reset()
    navigate(-1 as To, { replace: true })
  }

  return (
    <PrimaryButton direction="none" onClick={handleCancel}>
      취소하기
    </PrimaryButton>
  )
}
