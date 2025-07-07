import { createFontStepTwoConfig } from '@/entity/font'
import { Input, SecondaryButton } from '@/shared/ui'

import { useFontNameChangeDetector } from '../hook/useFontNameChangeDetector'
import { useFontNameDuplicateCheck } from '../hook/useFontNameDuplicateCheck'
import { useFontNameChecked, useFontNameMessage } from '../model/fontNameCheck.store'

type Props = {
  label: string
  hint: string
  placeholder?: string
  className?: string
}

export const FontNameCheckField = ({ label, hint, placeholder, className }: Props) => {
  const section = createFontStepTwoConfig.attribute.name.section
  const isChecked = useFontNameChecked()
  const successMessage = useFontNameMessage()

  const { checkFontNameDuplicate, isPending: isChecking } = useFontNameDuplicateCheck(section)
  const { rememberCheckedValue } = useFontNameChangeDetector(section)

  const handleCheckDuplicate = () => {
    checkFontNameDuplicate()
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
        disabled={isChecking || !isChecked}
        onClick={handleCheckDuplicate}
      >
        중복 검사
      </SecondaryButton>
    </div>
  )
}
