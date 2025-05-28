import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/app/router'
import type { UserFormType } from '@/entity/user'
import { useVerificationActions } from '@/features/check-font-name-duplicate/model/fontNameVerification.store'

import { useSignup } from '../api/signup.mutation'

import { useSignupStepActions } from './signupStep.store'

/**
 * 회원가입 폼 제출을 위한 커스텀 훅
 *
 * - FormData 형태로 데이터를 가공하여 전송
 * - 성공 시 홈으로 이동하고 토스트 알림 표시
 * - 실패 시 에러 토스트 알림 표시
 *
 * @returns handleSubmitForm - react-hook-form 등에서 사용할 폼 제출 핸들러
 */

export const useSignupForm = () => {
  const navigate = useNavigate()
  const { mutate: signup } = useSignup()
  const { resetStep } = useSignupStepActions()
  const { resetVerification } = useVerificationActions()

  const prepareFormData = (formData: UserFormType) => {
    const sendForm = new FormData()
    sendForm.append(
      'req',
      JSON.stringify({
        nickname: formData.nickname,
        gender: formData.gender,
        birth: formData.birth,
      }),
    )
    sendForm.append('file', '')
    return sendForm
  }

  const handleSuccess = () => {
    toast.success('회원가입에 성공했습니다.')
    resetStep()
    resetVerification()
    navigate(ROUTES.HOME)
  }

  const handleError = () => {
    toast.error('회원가입에 실패하였습니다.')
  }

  const handleSubmitForm = (formData: UserFormType) => {
    const sendForm = prepareFormData(formData)

    signup(sendForm, { onSuccess: handleSuccess, onError: handleError })
  }

  return { handleSubmitForm }
}
