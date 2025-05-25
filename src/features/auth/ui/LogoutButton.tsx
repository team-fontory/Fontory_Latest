import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'

import { useLogout } from '../api/auth.mutation'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const { mutate } = useLogout()

  const handleSuccess = () => {
    toast.success('성공적으로 로그아웃되었습니다.')
    navigate(ROUTES.HOME)
  }

  const handleError = () => {
    toast.error('로그아웃에 실패했습니다.')
  }

  const handleLogout = () => {
    mutate(undefined, { onSuccess: handleSuccess, onError: handleError })
  }

  return (
    <button
      type="submit"
      className="font-dropdown rounded-small block w-full py-3 hover:bg-gray-100"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  )
}
