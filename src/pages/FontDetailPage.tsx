import {
  FloatingButtonGroup,
  FontDetail,
  FontDetailOtherFonts,
  useFontDetail,
} from '@/features/font-detail'
import { useParamFontId } from '@/shared/hooks'
import { SectionHeader } from '@/shared/ui'
import { Layout } from '@/widgets'

const FontDetailPage = () => {
  const fontId = useParamFontId()
  const { fontDetail, recommendList } = useFontDetail(fontId)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title="FONT" />
        <FontDetail {...fontDetail} />
      </section>

      {recommendList && !!recommendList.length && (
        <section className="mt-60">
          <SectionHeader title="OTHER FONTS" />
          <FontDetailOtherFonts recommendList={recommendList} />
        </section>
      )}

      <FloatingButtonGroup {...fontDetail} />
    </Layout>
  )
}

export default FontDetailPage
