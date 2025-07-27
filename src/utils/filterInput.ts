type InputFilterType = 'english' | 'number' | 'korean' | 'alphanumeric' | 'custom'

const FILTER_PATTERNS: Record<Exclude<InputFilterType, 'custom'>, RegExp> = {
  english: /^[a-zA-Z]$/,
  number: /^[0-9]$/,
  korean: /^[가-힣]$/,
  alphanumeric: /^[a-zA-Z0-9]$/,
}

const getCharsetFromPattern = (pattern: RegExp) => {
  const match = pattern.source.match(/\[([^\]]+)\]/)
  return match ? match[1] : ''
}

/**
 * 미리 정의된 패턴 타입 또는 커스텀 정규식으로 입력값을 필터링하고 최대 글자 수를 제한
 *
 * @param input 입력 문자열
 * @param maxLength 최대 허용 길이
 * @param type 필터 타입 ('english', 'number', 'korean' 등)
 * @param customPattern type === 'custom'일 경우 사용될 정규식
 * @returns 필터링되고 자른 문자열
 */

export const filterInput = (
  input: string,
  maxLength: number,
  type: InputFilterType = 'custom',
  customPattern?: RegExp,
): string => {
  const basePattern = type === 'custom' ? customPattern : FILTER_PATTERNS[type]

  if (!basePattern) return input.slice(0, maxLength)

  const allowedPattern = new RegExp(`[^${getCharsetFromPattern(basePattern)}]`, 'g')
  const filtered = input.replace(allowedPattern, '')

  return filtered.slice(0, maxLength)
}
