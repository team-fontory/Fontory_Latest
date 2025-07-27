import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/utils/cn'

type Props = {
  section: string
  label: string
  hint?: string
  successMessage?: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

const MESSAGE_COLOR = {
  success: 'text-success',
  error: 'text-primary',
  hint: 'text-darkgrey',
} as const

export const Input = ({ section, label, hint, successMessage, className, ...rest }: Props) => {
  const { formState, register } = useFormContext()
  const errorMessage = formState.errors[section]?.message?.toString()
  const message = errorMessage || successMessage || hint

  return (
    <div className={cn('flex-column gap-5', className)}>
      <div className="flex-align-center items-end gap-4">
        <label htmlFor={section} className="font-input-label">
          {label}
        </label>

        {message && (
          <p
            className={MESSAGE_COLOR[errorMessage ? 'error' : successMessage ? 'success' : 'hint']}
          >
            * {message}
          </p>
        )}
      </div>
      <input id={section} {...register(section)} {...rest} />
    </div>
  )
}
