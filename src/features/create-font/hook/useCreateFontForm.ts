import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import type { CreateFontFormType } from '@/entity/font'

import { useCreateFont } from '../api/createFont.mutation'

import { useResetCreateFontForm } from './useResetCreateFontForm'

const TOAST_MESSAGE = {
  success: '폰트 제작 요청이 되었습니다.',
  error: '폰트 제작 요청에 실패하였습니다.',
}

export const useCreateFontForm = () => {
  const navigate = useNavigate()
  const sendForm = new FormData()

  const { mutate: createFont } = useCreateFont()
  const { resetAll } = useResetCreateFontForm()

  const onSuccess = () => {
    toast.success(TOAST_MESSAGE.success)
    navigate(ROUTES.MY_FONT)
    resetAll()
  }

  const onError = () => {
    toast.error(TOAST_MESSAGE.error)
  }

  const handleSubmitForm = (formData: CreateFontFormType) => {
    const { file, phoneNumber, ...rest } = formData
    sendForm.append('file', file as File)
    sendForm.append(
      'fontCreateDTO',
      JSON.stringify({ phoneNumber: phoneNumber.replace(/-/g, '') || '', ...rest }),
    )
    createFont(sendForm, { onSuccess, onError })
  }

  return { handleSubmitForm }
}
