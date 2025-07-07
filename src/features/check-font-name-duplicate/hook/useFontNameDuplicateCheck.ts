import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateFontName } from '../api/checkFontNameDuplicate.mutation'
import { useFontNameCheckActions } from '../model/fontNameCheck.store'

const MESSAGE = {
  success: '사용 가능한 이름입니다.',
  duplicated: '이미 사용 중인 이름입니다.',
  error: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
}

export const useFontNameDuplicateCheck = (section: string) => {
  const { setError, getValues, clearErrors } = useFormContext()
  const { mutate, isPending } = useValidateFontName()
  const { setFontNameCheckSuccess, setFontNameCheckFail } = useFontNameCheckActions()

  const onSuccess = useCallback(
    (result: boolean) => {
      if (result) {
        setFontNameCheckFail()
        setError(section, { type: 'manual', message: MESSAGE.duplicated })
      } else {
        setFontNameCheckSuccess(MESSAGE.success)
        clearErrors(section)
      }
    },
    [section, setFontNameCheckFail, setError, setFontNameCheckSuccess, clearErrors],
  )

  const onError = useCallback(() => {
    setError(section, { type: 'manual', message: MESSAGE.error })
  }, [section, setError])

  const checkFontNameDuplicate = useCallback(() => {
    mutate(getValues(section), { onSuccess, onError })
  }, [getValues, mutate, onError, onSuccess, section])

  return { checkFontNameDuplicate, isPending }
}
