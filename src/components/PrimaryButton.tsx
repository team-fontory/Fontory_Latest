import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

import { Icon } from './Icon/Icon'

type Direction = 'left' | 'right' | 'none'

type Props = {
  children: ReactNode
  direction?: Direction
} & ButtonHTMLAttributes<HTMLButtonElement>

const directionClassMap: Record<Direction, string> = {
  right: 'flex-row py-5 pr-5 pl-8',
  left: 'flex-row-reverse py-5 pr-8 pl-5',
  none: 'p-5',
}

export const PrimaryButton = ({
  type = 'button',
  children,
  className,
  disabled,
  direction = 'none',
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={cn(
        'group font-primary-button flex-align-center rounded-small gap-3 border transition-all',
        directionClassMap[direction],
        disabled
          ? 'border-darkgrey text-darkgrey'
          : 'border-primary text-primary hover:bg-primary hover:text-white',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {direction !== 'none' && (
        <Icon
          name="caret-right"
          size={32}
          className={cn(
            direction === 'left' ? 'rotate-180' : '',
            disabled ? 'text-darkgrey' : 'text-primary group-hover:text-white',
          )}
        />
      )}
    </button>
  )
}
