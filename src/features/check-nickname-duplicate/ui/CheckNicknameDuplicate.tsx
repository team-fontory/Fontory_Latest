import { userAttribute } from '@/entity/user'
import { Input, SecondaryButton } from '@/shared/ui'

import {
  useVerificationCheckingState,
  useVerificationMessage,
  useVerificationStatus,
} from '../model/nicknameVerification.store'
import { useNicknameDuplicateCheck } from '../model/useNicknameDuplicateCheck'
import { useNicknameVerificationWatcher } from '../model/useNicknameVerificationWatcher'

type Props = {
  section: string
  label: string
  hint: string
  placeholder?: string
  className?: string
}

/**
 * 닉네임 입력 필드 + 중복검사 버튼 컴포넌트
 */

export const CheckNicknameDuplicate = ({ section, label, hint, placeholder, className }: Props) => {
  const fieldName = userAttribute.nickname.section
  const isChecking = useVerificationCheckingState()
  const isVerified = useVerificationStatus()
  const successMessage = useVerificationMessage()

  const { checkNicknameDuplicate } = useNicknameDuplicateCheck(fieldName)
  const { markAsVerified } = useNicknameVerificationWatcher(fieldName)

  const handleCheckDuplicate = () => {
    checkNicknameDuplicate()
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
