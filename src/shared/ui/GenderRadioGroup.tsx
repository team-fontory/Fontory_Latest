import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/shared/lib'

import { GENDER } from '../config'

type Props = {
  section: string
} & InputHTMLAttributes<HTMLInputElement>

/**
 * 성별 선택 라디오 버튼 그룹 (남자 / 여자)
 */

export const GenderRadioGroup = ({ section, ...rest }: Props) => {
  const { register, watch } = useFormContext()
  const selectedGender = watch(section)

  const options = [
    { label: '남자', value: GENDER.male },
    { label: '여자', value: GENDER.female },
  ]

  return (
    <div className="flex flex-col gap-3">
      <label className="font-input-label">성별</label>

      <div className="grid grid-cols-2 gap-3">
        {options.map(({ label, value }) => {
          const isSelected = selectedGender === value

          return (
            <label
              key={value}
              className={cn(
                'rounded-small cursor-pointer border px-6 py-5 text-center transition-colors',
                isSelected
                  ? 'bg-primary border-primary text-white'
                  : 'text-darkgrey border-grey bg-white',
              )}
            >
              <input
                type="radio"
                value={value}
                {...register(section, { required: true })}
                className="absolute h-0 w-0 opacity-0"
                {...rest}
              />
              <span className="font-secondary-button">{label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
