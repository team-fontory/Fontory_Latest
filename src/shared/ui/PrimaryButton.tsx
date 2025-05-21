import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib'

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

export const PrimaryButton = ({ children, className, direction = 'none', ...props }: Props) => {
  return (
    <button
      className={cn(
        'group border-primary font-primary-button hover:bg-primary text-primary flex-align-center rounded-small gap-3 border transition-all hover:text-white',
        directionClassMap[direction],
        className,
      )}
      {...props}
    >
      {children}
      {direction !== 'none' && (
        <Icon
          name="caret-right"
          size={32}
          className={cn(
            direction === 'left' ? 'rotate-180' : '',
            'text-primary group-hover:text-white',
          )}
        />
      )}
    </button>
  )
}
