import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import { PrimaryButton } from '@/components/PrimaryButton'

import { useDeleteUser } from '../api/deleteUser.mutation'

const TOAST_MESSAGE = {
  success: '회원탈퇴에 성공했습니다.',
  error: '회원탈퇴에 실패했습니다.',
}

export const DeleteUserButton = () => {
  const navigate = useNavigate()
  const { mutate } = useDeleteUser()

  const onSuccess = () => {
    toast.success(TOAST_MESSAGE.success)
    navigate(ROUTES.HOME)
  }

  const onError = () => {
    toast.error(TOAST_MESSAGE.error)
  }

  const handleDelete = () => {
    mutate(undefined, { onSuccess, onError })
  }

  return (
    <PrimaryButton direction="none" onClick={handleDelete}>
      탈퇴하기
    </PrimaryButton>
  )
}
