/**
 * 조건부로 클래스 이름을 조합하여 반환하는 유틸 함수
 *
 * @param {...(string | undefined | null | false)[]} args - 클래스 이름 또는 조건부 표현식들
 * @returns {string} 공백으로 구분된 유효한 클래스 이름 문자열
 */

export const cn = (...args: (string | undefined | null | false)[]): string => {
  return args.filter(Boolean).join(' ')
}
