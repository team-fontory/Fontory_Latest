import type { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../lib'

type Props = {
  section: string
  label: string
  hint?: string
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const MESSAGE_COLOR = {
  error: 'text-primary',
  hint: 'text-darkgrey',
} as const

export const Textarea = ({ section, label, hint, className, ...rest }: Props) => {
  const { formState, register } = useFormContext()
  const errorMessage = formState.errors[section]?.message?.toString()
  const message = errorMessage || hint

  return (
    <div className={cn('flex-column gap-5', className)}>
      <div className="flex-align-center items-end gap-4">
        <label htmlFor={section} className="font-input-label">
          {label}
        </label>

        {message && <p className={MESSAGE_COLOR[errorMessage ? 'error' : 'hint']}>* {message}</p>}
      </div>
      <textarea id={section} rows={3} {...register(section)} {...rest} />
    </div>
  )
}
