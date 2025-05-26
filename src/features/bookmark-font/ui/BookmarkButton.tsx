import type { PropsWithChildren } from 'react'

import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'

import { useBookmark } from '../model/useBookmark'

type Props = {
  fontId: number
  isBookmarked: boolean
}

const BaseComponent = ({ fontId, isBookmarked, children }: PropsWithChildren<Props>) => {
  const { handleBookmark } = useBookmark(fontId, isBookmarked)

  return (
    <button
      type="button"
      onClick={handleBookmark}
      className="cursor-pointer transition-all hover:scale-105"
    >
      {children}
    </button>
  )
}

const BookmarkIcon = ({ fontId, isBookmarked }: Props) => {
  if (isBookmarked)
    return (
      <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
        <Icon name="filled-bookmark" size={'2.5rem'} className="text-primary" />
      </BaseComponent>
    )

  return (
    <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
      <Icon name="unfilled-bookmark" size={'2.5rem'} className="text-darkgrey" />
    </BaseComponent>
  )
}

const FloatingButton = ({ fontId, isBookmarked }: Props) => {
  const commonStyle = 'flex-center h-[4.8125rem] w-[4.8125rem] rounded-full'

  if (isBookmarked)
    return (
      <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
        <div className={cn('bg-primary', commonStyle)}>
          <Icon name="unfilled-bookmark" size={'2.5rem'} className="text-white" />
        </div>
      </BaseComponent>
    )

  return (
    <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
      <div className={cn('bg-darkgrey', commonStyle)}>
        <Icon name="unfilled-bookmark" size={'2.5rem'} className="text-white" />
      </div>
    </BaseComponent>
  )
}

const Label = ({ fontId, isBookmarked }: Props) => {
  const commonStyle =
    'font-secondary-button flex-align-center rounded-small gap-3 px-5 py-3 text-white'

  if (isBookmarked)
    return (
      <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
        <div className={cn('bg-primary', commonStyle)}>
          <span>북마크 해제</span>
          <Icon name="unfilled-bookmark" size={'2.1875rem'} className="text-white" />
        </div>
      </BaseComponent>
    )

  return (
    <BaseComponent fontId={fontId} isBookmarked={isBookmarked}>
      <div className={cn('bg-darkgrey', commonStyle)}>
        <span>북마크</span>
        <Icon name="unfilled-bookmark" size={'2.1875rem'} className="text-white" />
      </div>
    </BaseComponent>
  )
}

export const BookmarkButton = {
  Icon: BookmarkIcon,
  FloatingButton,
  Label,
}
