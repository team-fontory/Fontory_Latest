import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import { PrimaryButton } from '@/shared/ui'

import { useDeleteUser } from '../api/account.mutation'

export const DeleteUserButton = () => {
  const navigate = useNavigate()
  const { mutate } = useDeleteUser()

  const handleSuccess = () => {
    toast.success('회원탈퇴에 성공했습니다.')
    navigate(ROUTES.HOME)
  }

  const handleError = () => {
    toast.error('회원탈퇴에 실패했습니다.')
  }

  const onDelete = () => {
    mutate(null, {
      onSuccess: handleSuccess,
      onError: handleError,
    })
  }

  return (
    <PrimaryButton direction="none" onClick={onDelete}>
      탈퇴하기
    </PrimaryButton>
  )
}
