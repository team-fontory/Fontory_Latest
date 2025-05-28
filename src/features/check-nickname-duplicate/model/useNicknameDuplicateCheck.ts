import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateNickname } from '../api/checkNicknameDuplicate.mutation'

import { useVerificationActions } from './nicknameVerification.store'

/**
 * 닉네임 중복 검사를 수행하는 커스텀 훅
 * 입력된 닉네임이 서버에서 유효한지 확인하고, 결과에 따라 상태(store)와 에러 메시지를 설정
 *
 * @param section - React Hook Form에서 사용하는 필드 이름
 * @returns checkNicknameDuplicate 함수 (중복 검사 실행 함수)
 */

export const useNicknameDuplicateCheck = (section: string) => {
  const { setError, getValues, clearErrors } = useFormContext()
  const { mutate } = useValidateNickname()

  const { updateVerificationStatus, setVerificationMessage, startChecking, completeChecking } =
    useVerificationActions()

  const handleSuccess = useCallback(
    (result: boolean) => {
      if (result) {
        const message = '이미 사용 중인 닉네임입니다.'

        updateVerificationStatus(false)
        setVerificationMessage(message)
        setError(section, { type: 'manual', message })
      } else {
        updateVerificationStatus(true)
        setVerificationMessage('사용 가능한 닉네임입니다.')
        clearErrors(section)
      }
    },
    [clearErrors, section, setError, setVerificationMessage, updateVerificationStatus],
  )

  const handleError = useCallback(
    (section: string) => {
      updateVerificationStatus(false)

      setError(section, {
        type: 'manual',
        message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      })
    },
    [setError, updateVerificationStatus],
  )

  /** 중복 검사 실행 함수 */
  const checkNicknameDuplicate = useCallback(() => {
    startChecking()
    mutate(getValues(section), {
      onSuccess: handleSuccess,
      onError: () => handleError(section),
      onSettled: completeChecking,
    })
  }, [completeChecking, getValues, handleError, handleSuccess, mutate, section, startChecking])

  return { checkNicknameDuplicate }
}
