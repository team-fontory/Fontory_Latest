import type { FontDetailType } from '@/entity/font'

import { EMPTY_MESSAGE } from '../config'

import { FontPreviewCard } from './FontPreviewCard'

type Props = {
  fontList: FontDetailType[]
  emptyMessage?: string
}

export const FontPreviewCardList = ({ fontList, emptyMessage }: Props) => {
  if (!fontList || !fontList.length)
    return (
      <p className="text-darkgrey py-20 text-center text-4xl font-bold">
        {emptyMessage || EMPTY_MESSAGE.noFont}
      </p>
    )

  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <FontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
