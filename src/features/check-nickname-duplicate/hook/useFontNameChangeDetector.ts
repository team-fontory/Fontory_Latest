import { useEffect, useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { useNickNameCheckActions } from '../model/nicknameCheck.store'

export const useFontNameChangeDetector = (fieldName: string) => {
  const { control, getValues, clearErrors } = useFormContext()
  const { setNickNameChangedAfterCheck } = useNickNameCheckActions()

  const currentValue = useWatch({ control, name: fieldName })
  const lastCheckedValueRef = useRef<string | null>(null)

  const rememberCheckedValue = () => {
    lastCheckedValueRef.current = getValues(fieldName)
  }

  useEffect(() => {
    const isChangedAfterCheck =
      lastCheckedValueRef.current !== null && lastCheckedValueRef.current !== currentValue

    if (isChangedAfterCheck) {
      setNickNameChangedAfterCheck()
      clearErrors(fieldName)
    }
  }, [currentValue, fieldName, clearErrors, setNickNameChangedAfterCheck])

  return { rememberCheckedValue }
}
