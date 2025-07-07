import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useValidateFontName } from '../api/checkFontNameDuplicate.mutation'
import { useFontNameCheckActions } from '../model/fontNameCheck.store'

export const useFontNameDuplicateCheck = (section: string) => {
  const { setError, getValues, clearErrors } = useFormContext()
  const { mutate, isPending } = useValidateFontName()
  const { setFontNameDuplicated, setFontNameMessage } = useFontNameCheckActions()

  const onSuccess = useCallback(
    (result: boolean) => {
      let message = ''
      if (result) {
        message = '이미 사용 중인 이름입니다.'
        setError(section, { type: 'manual', message })
      } else {
        message = '사용 가능한 이름입니다.'
        clearErrors(section)
      }
      setFontNameDuplicated(result)
      setFontNameMessage(message)
    },
    [clearErrors, section, setError, setFontNameMessage, setFontNameDuplicated],
  )

  const onError = useCallback(() => {
    setError(section, {
      type: 'manual',
      message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    })
  }, [section, setError])

  const checkFontNameDuplicate = useCallback(() => {
    mutate(getValues(section), { onSuccess, onError })
  }, [getValues, mutate, onError, onSuccess, section])

  return { checkFontNameDuplicate, isPending }
}
