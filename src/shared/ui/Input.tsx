import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../lib'

type Props = {
  section: string
  label: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ section, label, className, ...rest }: Props) => {
  const { register } = useFormContext()

  return (
    <div className={cn('flex-column gap-5', className)}>
      <label htmlFor={section} className="font-input-label">
        {label}
      </label>
      <input id={section} {...register(section)} {...rest} />
    </div>
  )
}
