import type { PropsWithChildren } from 'react'

import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'

type Props = {
  isBookmarked: boolean
}

const BaseComponent = ({ children }: PropsWithChildren) => {
  return <button className="cursor-pointer transition-all hover:scale-105">{children}</button>
}

const BookmarkIcon = ({ isBookmarked }: Props) => {
  if (isBookmarked)
    return (
      <BaseComponent>
        <Icon name="filled-bookmark" size={40} className="text-primary" />
      </BaseComponent>
    )

  return (
    <BaseComponent>
      <Icon name="unfilled-bookmark" size={40} className="text-darkgrey" />
    </BaseComponent>
  )
}

const FloatingButton = ({ isBookmarked }: Props) => {
  const commonStyle = 'flex-center h-[4.8125rem] w-[4.8125rem] rounded-full'

  if (isBookmarked)
    return (
      <BaseComponent>
        <div className={cn('bg-primary', commonStyle)}>
          <Icon name="unfilled-bookmark" size={40} className="text-white" />
        </div>
      </BaseComponent>
    )

  return (
    <BaseComponent>
      <div className={cn('bg-darkgrey', commonStyle)}>
        <Icon name="unfilled-bookmark" size={40} className="text-white" />
      </div>
    </BaseComponent>
  )
}

const Label = ({ isBookmarked }: Props) => {
  const commonStyle =
    'font-secondary-button flex-align-center rounded-small gap-3 px-5 py-3 text-white'

  if (isBookmarked)
    return (
      <BaseComponent>
        <div className={cn('bg-primary', commonStyle)}>
          <span>북마크 해제</span>
          <Icon name="unfilled-bookmark" size={35} className="text-white" />
        </div>
      </BaseComponent>
    )

  return (
    <BaseComponent>
      <div className={cn('bg-darkgrey', commonStyle)}>
        <span>북마크</span>
        <Icon name="unfilled-bookmark" size={35} className="text-white" />
      </div>
    </BaseComponent>
  )
}

export const BookmarkButton = {
  Icon: BookmarkIcon,
  FloatingButton,
  Label,
}
