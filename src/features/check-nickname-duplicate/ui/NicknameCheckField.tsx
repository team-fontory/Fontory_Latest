import { Input } from '@/components/Input'
import { SecondaryButton } from '@/components/SecondaryButton'
import { userConfig } from '@/entity/user'

import { useFontNameChangeDetector } from '../hook/useFontNameChangeDetector'
import { useNicknameDuplicateCheck } from '../hook/useNicknameDuplicateCheck'
import { useNickNameChecked, useNickNameMessage } from '../model/nicknameCheck.store'

type Props = {
  label: string
  hint: string
  placeholder?: string
  className?: string
}

export const NicknameCheckField = ({ label, hint, placeholder, className }: Props) => {
  const section = userConfig.attribute.nickname.section
  const isChecked = useNickNameChecked()
  const successMessage = useNickNameMessage()

  const { checkNicknameDuplicate, isPending: isChecking } = useNicknameDuplicateCheck(section)
  const { rememberCheckedValue } = useFontNameChangeDetector(section)

  const handleCheckDuplicate = () => {
    checkNicknameDuplicate()
    rememberCheckedValue()
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
        disabled={isChecking || isChecked}
        onClick={handleCheckDuplicate}
      >
        중복 검사
      </SecondaryButton>
    </div>
  )
}
