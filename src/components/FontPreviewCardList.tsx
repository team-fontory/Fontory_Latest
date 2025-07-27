import { EMPTY_MESSAGE } from '@/constants/emptyMessage'
import type { PreviewFont } from '@/entity/font'

import { FontPreviewCard } from './FontPreviewCard'

type Props = {
  fontList: PreviewFont[]
  isEmpty: boolean
  emptyMessage?: string
}

export const FontPreviewCardList = ({ fontList, isEmpty, emptyMessage }: Props) => {
  if (isEmpty)
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
