import type { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../lib'

type Props = {
  section: string
  label: string
  hint?: string
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ section, label, hint, className, ...rest }: Props) => {
  const { formState, register } = useFormContext()

  return (
    <div className={cn('flex-column gap-5', className)}>
      <div className="flex-align-center items-end gap-4">
        <label htmlFor={section} className="font-input-label">
          {label}
        </label>

        {hint && (
          <p className={formState.errors[section] ? 'text-primary' : 'text-darkgrey'}>* {hint}</p>
        )}
      </div>
      <textarea id={section} rows={3} {...register(section)} {...rest} />
    </div>
  )
}
