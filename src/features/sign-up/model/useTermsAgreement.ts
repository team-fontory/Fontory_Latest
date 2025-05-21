import { useState } from 'react'

import { TERMS } from '../config/terms.constant'

/**
 * 약관 동의 상태를 관리하는 커스텀 훅
 *
 * - 개별 항목을 토글하거나 전체 항목을 일괄 토글할 수 있음
 * - 모든 항목이 동의되었는지 여부 반환
 *
 * @returns 약관 동의 상태 및 제어 함수 객체
 */

export const useTermsAgreement = () => {
  const [checkedTerms, setCheckedTerms] = useState<boolean[]>(TERMS.map(() => false))

  const isAllAgreed = checkedTerms.every(Boolean)

  const toggleCheck = (index: number) => {
    setCheckedTerms((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  const agreeAll = () => {
    setCheckedTerms(TERMS.map(() => !isAllAgreed))
  }

  return {
    isAllAgreed,
    checkedTerms,
    toggleCheck,
    agreeAll,
  }
}
