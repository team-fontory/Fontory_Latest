import { useEffect, useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { useFontNameCheckActions } from '../model/fontNameCheck.store'

/**
 * 폰트 이름 중복 검증 이후 사용자가 값을 변경했는지를 감지하는 커스텀 훅
 *
 * - 중복 검사를 통과한 값을 기억해두고
 * - 이후 입력값이 바뀌면 중복 상태 및 메시지를 초기화함
 */

export const useFontNameChangeDetector = (fieldName: string) => {
  const { control, getValues, clearErrors } = useFormContext()
  const { setFontNameChangedAfterCheck } = useFontNameCheckActions()

  const currentValue = useWatch({ control, name: fieldName })
  const lastCheckedValueRef = useRef<string | null>(null)

  const rememberCheckedValue = () => {
    lastCheckedValueRef.current = getValues(fieldName)
  }

  useEffect(() => {
    const isChangedAfterCheck =
      lastCheckedValueRef.current !== null && lastCheckedValueRef.current !== currentValue

    if (isChangedAfterCheck) {
      setFontNameChangedAfterCheck()
      clearErrors(fieldName)
    }
  }, [currentValue, fieldName, clearErrors, setFontNameChangedAfterCheck])

  return { rememberCheckedValue }
}
