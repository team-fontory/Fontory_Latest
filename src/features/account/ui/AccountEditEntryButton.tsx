import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { PrimaryButton } from '@/components/PrimaryButton'

export const AccountEditEntryButton = () => {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(ROUTES.ACCOUNT_EDIT)
  }

  return (
    <PrimaryButton direction="none" onClick={handleEdit}>
      수정하기
    </PrimaryButton>
  )
}
