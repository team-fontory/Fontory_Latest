import type { PreviewFont } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'

import { MyFontPreviewCard } from './MyFontPreviewCard'

type Props = {
  fontList: PreviewFont[]
  isEmpty: boolean
  emptyMessage?: string
}

export const MyFontPreviewCardList = ({ fontList, isEmpty, emptyMessage }: Props) => {
  if (isEmpty)
    return (
      <p className="text-darkgrey py-20 text-center text-4xl font-bold">
        {emptyMessage || EMPTY_MESSAGE.noFont}
      </p>
    )

  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <MyFontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
