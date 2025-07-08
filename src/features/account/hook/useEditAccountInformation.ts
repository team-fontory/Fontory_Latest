import { useFormContext } from 'react-hook-form'
import { type To, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import type { UserFormType } from '@/entity/user'

import { useEditAccount } from '../api/account.mutation'

const TOAST_MESSAGE = {
  success: '회원정보가 수정되었습니다',
  error: '회원정보 수정에 실패하였습니다.',
}

export const useEditAccountInformation = () => {
  const navigate = useNavigate()

  const { mutate: editAccount } = useEditAccount()
  const { reset } = useFormContext()

  const onSuccess = () => {
    toast.success(TOAST_MESSAGE.success)
    navigate(-1 as To, { replace: true })
    reset()
  }

  const onError = () => {
    toast.error(TOAST_MESSAGE.error)
  }

  const handleSubmitForm = (formData: UserFormType) => {
    const { file: _, ...rest } = formData
    const sendForm = new FormData()
    sendForm.append('file', '')
    sendForm.append('req', JSON.stringify({ ...rest }))

    editAccount(formData, { onSuccess, onError })
  }

  return { handleSubmitForm }
}
