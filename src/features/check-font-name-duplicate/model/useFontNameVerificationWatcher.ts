import { useEffect, useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { useVerificationActions } from './fontNameVerification.store'

/**
 * 폰트 이름 중복 검증 이후 사용자가 값을 변경했는지를 감지하는 커스텀 훅
 *
 * - 값이 변경되면 검증 상태를 무효화(isVerified: false)
 * - 중복 검사가 완료된 폰트 이름 값을 기억해두고, 이후 입력된 폰트 이름과 비교하여 변경 여부를 판단
 *
 * @param fieldName - react-hook-form에 등록된 폰트 이름 필드 이름
 * @returns
 * - `nickname`: 현재 form 상의 폰트 이름 값
 * - `markAsVerified`: 중복 검사 통과 후 호출하여 현재 폰트 이름을 기준값으로 저장
 */

export const useFontNameVerificationWatcher = (fieldName: string) => {
  const { control, getValues } = useFormContext()
  const fontName = useWatch({ control, name: fieldName })
  const verifiedFontNameRef = useRef<string | null>(null)

  const { updateVerificationStatus } = useVerificationActions()

  const markAsVerified = () => {
    const current = getValues(fieldName)
    verifiedFontNameRef.current = current
  }

  const hasChangedAfterVerification =
    verifiedFontNameRef.current !== null && verifiedFontNameRef.current !== fontName

  useEffect(() => {
    if (hasChangedAfterVerification) {
      updateVerificationStatus({ isDirty: true, isVerified: false })
    }
  }, [hasChangedAfterVerification, updateVerificationStatus])

  return { fontName, markAsVerified }
}
