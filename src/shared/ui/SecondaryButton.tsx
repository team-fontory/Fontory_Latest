import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

type Variant = 'filled' | 'outlined' | 'disabled'

type Props = {
  children: ReactNode
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClassMap: Record<Variant, string> = {
  filled: 'bg-secondary text-white hover:bg-secondary-hover',
  outlined: 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white',
  disabled: 'bg-grey text-darkgrey',
}

export const SecondaryButton = ({
  type = 'button',
  className,
  disabled,
  children,
  variant = 'filled',
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={cn(
        'rounded-small font-secondary-button px-7 py-5 text-center transition-colors',
        disabled ? variantClassMap['disabled'] : variantClassMap[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
