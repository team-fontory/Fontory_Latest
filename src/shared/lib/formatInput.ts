/**
 * 숫자만 입력된 문자열을 YYYY-MM-DD 형식으로 변환
 *
 * @param raw 입력값 (숫자만 포함)
 * @returns YYYY-MM-DD 형식 문자열
 */

export const formatDateInput = (raw: string): string => {
  const digits = raw.replace(/\D/g, '')

  if (digits.length <= 4) return digits
  if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`

  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`
}

export const formatPhoneNumberInput = (raw: string): string => {
  const digits = raw.replace(/\D/g, '')

  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`

  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`
}
