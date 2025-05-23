import type { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../lib'

type Props = {
  section: string
  label: string
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ section, label, className, ...rest }: Props) => {
  const { register } = useFormContext()

  return (
    <div className={cn('flex-column gap-5', className)}>
      <label htmlFor={section} className="font-input-label">
        {label}
      </label>
      <textarea id={section} rows={3} {...register(section)} {...rest} />
    </div>
  )
}
