import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib'

type Variant = 'filled' | 'outlined'

type Props = {
  children: ReactNode
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClassMap: Record<Variant, string> = {
  filled: 'bg-secondary text-white hover:bg-secondary-hover',
  outlined: 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white',
}

export const SecondaryButton = ({
  type = 'button',
  className,
  children,
  variant = 'filled',
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={cn(
        'rounded-small font-secondary-button px-7 py-5 text-center transition-colors',
        variantClassMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
