/**
 * isoString을 "YYYY-MM-DD HH:MM:SS" 형식으로 변환하는 유틸 함수
 * */

export function formatIsoToDateTime(isoString: string) {
  if (!isoString || typeof isoString !== 'string') return ''

  const [datePart, timePartWithMs] = isoString.split('T')
  if (!datePart || !timePartWithMs) return ''

  const [timePart] = timePartWithMs.split('.')
  if (!timePart) return datePart

  return `${datePart} ${timePart}`
}
