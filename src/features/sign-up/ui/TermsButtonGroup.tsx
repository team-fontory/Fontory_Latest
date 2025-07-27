import { SecondaryButton } from '@/components/SecondaryButton'

type Props = {
  checkedTerms: boolean[]
  onToggleAllTerms: () => void
}

/**
 * 약관 관련 버튼 그룹 컴포넌트
 *
 * - '약관 상세보기' 버튼과 '전체 동의 / 해제' 버튼을 제공
 * - 전체 동의 여부에 따라 버튼 텍스트가 자동으로 변경됨
 *
 * @param checkedTerms 각 약관의 동의 상태 배열
 * @param onToggleAllTerms 전체 동의 여부를 반전시키는 함수
 */

export const TermsButtonGroup = ({ checkedTerms, onToggleAllTerms }: Props) => {
  return (
    <div className="mt-24 grid grid-cols-2 gap-6">
      <SecondaryButton variant="outlined" className="grow">
        약관 상세보기
      </SecondaryButton>

      <SecondaryButton variant="filled" className="grow" onClick={onToggleAllTerms}>
        {checkedTerms.every(Boolean) ? '전체 동의 해제' : '전체 동의'}
      </SecondaryButton>
    </div>
  )
}
