import type { FontDetailType } from '@/entity/font'
import { FontPreviewCard } from '@/shared/ui'

type Props = {
  recommendList: FontDetailType[]
}

export const FontDetailOtherFonts = ({ recommendList }: Props) => {
  return (
    <div className="flex-column">
      {recommendList.map((font) => (
        <FontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
