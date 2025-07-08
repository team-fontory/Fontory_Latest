import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import type { UserFormType } from '@/entity/user'

import { useSignup } from '../api/signup.mutation'
import { useResetSignupForm } from '../hook/useResetSignupForm'

const TOAST_MESSAGE = {
  success: '회원가입에 성공했습니다.',
  error: '회원가입에 실패하였습니다.',
}

export const useSignupForm = () => {
  const navigate = useNavigate()

  const { mutate: signup } = useSignup()
  const { resetAll } = useResetSignupForm()

  const onSuccess = () => {
    toast.success(TOAST_MESSAGE.success)
    navigate(ROUTES.HOME)
    resetAll()
  }

  const onError = () => {
    toast.error(TOAST_MESSAGE.error)
  }

  const handleSubmitForm = (formData: UserFormType) => {
    const { file: _, ...rest } = formData
    const sendForm = new FormData()
    sendForm.append('file', '')
    sendForm.append('req', JSON.stringify({ ...rest }))
    signup(sendForm, { onSuccess, onError })
  }

  return { handleSubmitForm }
}
