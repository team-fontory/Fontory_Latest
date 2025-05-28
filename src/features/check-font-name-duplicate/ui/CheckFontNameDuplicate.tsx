import { fontAttribute } from '@/entity/font'
import { Input, SecondaryButton } from '@/shared/ui'

import {
  useVerificationCheckingState,
  useVerificationMessage,
  useVerificationStatus,
} from '../model/fontNameVerification.store'
import { useFontNameDuplicateCheck } from '../model/useFontNameDuplicateCheck'
import { useFontNameVerificationWatcher } from '../model/useFontNameVerificationWatcher'

type Props = {
  section: string
  label: string
  hint: string
  placeholder?: string
  className?: string
}

/**
 * 폰트 이름 입력 필드 + 중복검사 버튼 컴포넌트
 */

export const CheckFontNameDuplicate = ({ section, label, hint, placeholder, className }: Props) => {
  const fieldName = fontAttribute.name.section
  const isVerified = useVerificationStatus()
  const isChecking = useVerificationCheckingState()
  const successMessage = useVerificationMessage()

  const { checkFontNameDuplicate } = useFontNameDuplicateCheck(fieldName)
  const { markAsVerified } = useFontNameVerificationWatcher(fieldName)

  const handleCheckDuplicate = () => {
    checkFontNameDuplicate()
    markAsVerified()
  }

  return (
    <div className="flex items-end gap-4">
      <Input
        section={section}
        label={label}
        placeholder={placeholder}
        hint={hint}
        successMessage={successMessage || undefined}
        className={className ?? 'w-full'}
      />
      <SecondaryButton
        className="shrink-0"
        disabled={isChecking || isVerified}
        onClick={handleCheckDuplicate}
      >
        중복 검사
      </SecondaryButton>
    </div>
  )
}
