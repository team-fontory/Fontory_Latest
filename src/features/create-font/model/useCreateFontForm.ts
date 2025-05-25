import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'

import { useCreateFont } from '../api/createFont.mutation'

import { useCreateFontValues } from './createFont.store'

const usePrepareFormData = () => {
  const sendForm = new FormData()
  const formData = useCreateFontValues()

  sendForm.append(
    'fontCreateDTO',
    JSON.stringify({
      name: formData.name,
      engName: formData.engName,
      example: formData.example,
      phone: formData.phoneNumber || '',
    }),
  )
  sendForm.append('file', formData.file as File)

  return sendForm
}

/**
 * 폰트 제작 요청을 처리하는 훅
 *
 * - 폼 데이터를 FormData로 가공하고 요청 후 성공/실패 처리
 */

export const useCreateFontForm = () => {
  const navigate = useNavigate()
  const sendForm = usePrepareFormData()

  const { mutate: createFont } = useCreateFont()

  const handleSuccess = () => {
    toast.success('폰트 제작 요청이 되었습니다.')
    navigate(ROUTES.MY_FONT)
  }

  const handleError = () => {
    toast.error('폰트 제작 요청에 실패하였습니다.')
  }

  const handleSubmitForm = () => {
    createFont(sendForm, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleSubmitForm }
}
