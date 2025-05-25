import type { FontDetailType } from '@/entity/font'
import { MyFontPreviewCard } from '@/features/progress/ui/MyFontPreviewCard'

import { EMPTY_MESSAGE } from '../config'

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
        <MyFontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
