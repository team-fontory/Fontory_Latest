import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateNickname } from '../api/checkNicknameDuplicate.mutation'
import { useNickNameCheckActions } from '../model/nicknameCheck.store'

const MESSAGE = {
  success: '사용 가능한 닉네임입니다.',
  duplicated: '이미 사용 중인 닉네임입니다.',
  error: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
}

export const useNicknameDuplicateCheck = (section: string) => {
  const { setError, getValues, clearErrors } = useFormContext()
  const { mutate, isPending } = useValidateNickname()
  const { setNickNameCheckSuccess, setNickNameCheckFail } = useNickNameCheckActions()

  const onSuccess = useCallback(
    (result: boolean) => {
      if (result) {
        setNickNameCheckFail()
        setError(section, { type: 'manual', message: MESSAGE.duplicated })
      } else {
        setNickNameCheckSuccess(MESSAGE.success)
        clearErrors(section)
      }
    },
    [section, clearErrors, setError, setNickNameCheckFail, setNickNameCheckSuccess],
  )

  const onError = useCallback(() => {
    setError(section, { type: 'manual', message: MESSAGE.error })
  }, [section, setError])

  const checkNicknameDuplicate = useCallback(() => {
    mutate(getValues(section), { onSuccess, onError })
  }, [section, getValues, mutate, onError, onSuccess])

  return { checkNicknameDuplicate, isPending }
}
