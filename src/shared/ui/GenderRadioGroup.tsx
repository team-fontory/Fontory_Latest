import type { InputHTMLAttributes } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { cn } from '@/utils/cn'

type GenderRadioGroupProps = {
  section: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

type GenderRadioItemProps = {
  label: string
  value: (typeof GENDER_OPTIONS)[number]['value']
  section: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

const GENDER_OPTIONS = [
  { label: '남자', value: 'MALE' },
  { label: '여자', value: 'FEMALE' },
] as const

export const GenderRadioItem = ({ label, value, section, ...rest }: GenderRadioItemProps) => {
  const { register, control } = useFormContext()
  const selectedGender = useWatch({ name: section, control })

  const isSelected = selectedGender === value

  return (
    <label
      className={cn(
        'rounded-small cursor-pointer border px-6 py-5 text-center transition-colors',
        isSelected ? 'bg-primary border-primary text-white' : 'text-darkgrey border-grey bg-white',
      )}
    >
      <input
        type="radio"
        value={value}
        checked={isSelected}
        {...register(section, { required: true })}
        className="absolute h-0 w-0 opacity-0"
        {...rest}
      />
      <span className="font-secondary-button">{label}</span>
    </label>
  )
}

/**
 * 성별 선택 라디오 버튼 그룹 (남자 / 여자)
 */

export const GenderRadioGroup = ({ section, ...rest }: GenderRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-input-label">성별</label>

      <div className="grid grid-cols-2 gap-3">
        {GENDER_OPTIONS.map(({ label, value }) => (
          <GenderRadioItem key={value} label={label} value={value} section={section} {...rest} />
        ))}
      </div>
    </div>
  )
}
