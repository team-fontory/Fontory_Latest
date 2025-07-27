import { FontPreviewCard } from '@/components/FontPreviewCard'
import type { PreviewFont } from '@/entity/font'

type Props = {
  recommendList: PreviewFont[]
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
