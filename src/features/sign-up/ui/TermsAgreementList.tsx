import { Icon } from '@/components/Icon/Icon'

import { TERMS } from '../config/signup.constant'

type Props = {
  checkedTerms: boolean[]
  onToggle: (index: number) => void
}

/**
 * 약관 동의 항목 리스트 컴포넌트
 *
 * - 각 항목에 대해 버튼과 체크박스를 표시
 * - 클릭 시 해당 항목의 동의 상태를 토글
 *
 * @param checkedTerms 각 항목의 동의 상태 배열
 * @param onToggle 항목 인덱스를 전달받아 상태를 토글하는 함수
 */

export const TermsAgreementList = ({ checkedTerms, onToggle }: Props) => {
  return (
    <form className="flex-column mt-24 gap-8">
      {TERMS.map((term, index) => {
        const isChecked = checkedTerms[index]

        return (
          <div key={term} className="flex-between-center text-darkgrey">
            <p className="font-term-description">{term}</p>
            <button
              type="button"
              className="flex-align-center font-term-check gap-3"
              onClick={() => onToggle(index)}
            >
              <span className={isChecked ? 'text-primary' : 'text-darkgrey'}>동의합니다</span>
              <Icon
                name="check-box"
                size="2.5rem"
                className={isChecked ? 'text-primary' : 'text-darkgrey'}
              />
            </button>
          </div>
        )
      })}
    </form>
  )
}
