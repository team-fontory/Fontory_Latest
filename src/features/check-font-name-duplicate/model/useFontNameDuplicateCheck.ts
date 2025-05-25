import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateFontName } from '../api/checkFontNameDuplicate.mutation'

import { useVerificationActions } from './fontNameVerification.store'

/**
 * 폰트 이름 중복 검사를 수행하는 커스텀 훅
 * 입력된 폰트 이름이 서버에서 유효한지 확인하고, 결과에 따라 상태(store)와 에러 메시지를 설정
 *
 * @param section - React Hook Form에서 사용하는 필드 이름
 * @returns checkFontNameDuplicate 함수 (중복 검사 실행 함수)
 */

export const useFontNameDuplicateCheck = (section: string) => {
  const { setError, getValues } = useFormContext()
  const { mutate } = useValidateFontName()

  const { updateVerificationStatus, setVerificationMessage, startChecking, completeChecking } =
    useVerificationActions()

  const handleSuccess = useCallback(
    (result: boolean) => {
      if (result) {
        updateVerificationStatus({ isDirty: false, isVerified: true })
        setVerificationMessage('사용 가능한 이름입니다.')
      } else {
        const message = '이미 사용 중인 이름입니다.'

        updateVerificationStatus({ isDirty: false, isVerified: false })
        setVerificationMessage(message)
        setError(section, { type: 'manual', message })
      }
    },
    [section, setError, setVerificationMessage, updateVerificationStatus],
  )

  const handleError = useCallback(
    (section: string) => {
      updateVerificationStatus({ isDirty: false, isVerified: false })
      setError(section, {
        type: 'manual',
        message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      })
    },
    [setError, updateVerificationStatus],
  )

  /** 중복 검사 실행 함수 */
  const checkFontNameDuplicate = useCallback(() => {
    startChecking()

    mutate(getValues(section), {
      onSuccess: handleSuccess,
      onError: () => handleError(section),
      onSettled: completeChecking,
    })
  }, [completeChecking, getValues, handleError, handleSuccess, mutate, section, startChecking])

  return { checkFontNameDuplicate }
}
