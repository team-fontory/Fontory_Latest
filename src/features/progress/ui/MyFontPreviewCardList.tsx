import type { FontDetailType } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'

import { MyFontPreviewCard } from './MyFontPreviewCard'

type Props = {
  fontList: FontDetailType[]
}

export const MyFontPreviewCardList = ({ fontList }: Props) => {
  if (!fontList)
    return (
      <p className="text-darkgrey py-20 text-center text-4xl font-bold">{EMPTY_MESSAGE.noFont}</p>
    )

  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <MyFontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
