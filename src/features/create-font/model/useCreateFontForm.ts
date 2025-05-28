import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import { useVerificationActions } from '@/features/check-nickname-duplicate/model/nicknameVerification.store'

import { useCreateFont } from '../api/createFont.mutation'

import { useCreateFontActions, useCreateFontValues } from './createFont.store'

/**
 * 폰트 제작 요청을 처리하는 훅
 *
 * - 폼 데이터를 FormData로 가공하고 요청 후 성공/실패 처리
 */

export const useCreateFontForm = () => {
  const navigate = useNavigate()
  const sendForm = new FormData()
  const { getValues } = useFormContext()
  const formData = useCreateFontValues()

  const { mutate: createFont } = useCreateFont()
  const { reset } = useCreateFontActions()
  const { resetVerification } = useVerificationActions()

  const handleSuccess = () => {
    toast.success('폰트 제작 요청이 되었습니다.')
    reset()
    resetVerification()
    navigate(ROUTES.MY_FONT)
  }

  const handleError = () => {
    toast.error('폰트 제작 요청에 실패하였습니다.')
  }

  const handleSubmitForm = () => {
    const { phoneNumber } = getValues()

    sendForm.append(
      'fontCreateDTO',
      JSON.stringify({
        name: formData.name,
        engName: formData.engName,
        example: formData.example,
        phoneNumber: phoneNumber.replace(/-/g, '') || '',
      }),
    )

    sendForm.append('file', formData.file as File)

    createFont(sendForm, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleSubmitForm }
}
