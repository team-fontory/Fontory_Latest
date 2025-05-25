import type { FontDetailType } from '@/entity/font'
import { FontPreviewCard } from '@/shared/ui'

type Props = {
  fontList: FontDetailType[]
}

export const BookmarkFontPreviewCardList = ({ fontList }: Props) => {
  return (
    <div className="flex-column">
      {fontList.map((font) => (
        <FontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
