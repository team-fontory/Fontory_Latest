import type { FontDetailType } from '@/entity/font'

import { MyFontPreviewCard } from './MyFontPreviewCard'

type Props = {
  fontList: FontDetailType[]
}

export const MyFontPreviewCardList = ({ fontList }: Props) => {
  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <MyFontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
