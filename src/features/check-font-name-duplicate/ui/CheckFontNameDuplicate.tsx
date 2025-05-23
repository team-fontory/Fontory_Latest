import { Input, SecondaryButton } from '@/shared/ui'

type Props = {
  section: string
  label: string
  placeholder?: string
  className?: string
}

/**
 * 폰트 이름 입력 필드 + 중복검사 버튼 컴포넌트
 */

export const CheckFontNameDuplicate = ({ section, label, placeholder, className }: Props) => {
  return (
    <div className="flex items-end gap-4">
      <Input
        section={section}
        label={label}
        placeholder={placeholder}
        className={className ?? 'w-full'}
      />
      <SecondaryButton className="shrink-0">중복 검사</SecondaryButton>
    </div>
  )
}
