import {
  FloatingButtonGroup,
  FontDetail,
  FontDetailOtherFonts,
  useFontDetail,
} from '@/features/font-detail'
import { useParamFontId } from '@/shared/hooks'
import { SectionHeader } from '@/shared/ui'

const FontDetailPage = () => {
  const fontId = useParamFontId()
  const { fontDetail, recommendList } = useFontDetail(fontId)

  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <section>
        <SectionHeader title="FONT" />
        <FontDetail {...fontDetail} />
      </section>

      <section className="mt-60">
        <SectionHeader title="OTHER FONTS" />
        <FontDetailOtherFonts recommendList={recommendList} />
      </section>

      <FloatingButtonGroup isBookmarked={true} />
    </div>
  )
}

export default FontDetailPage
