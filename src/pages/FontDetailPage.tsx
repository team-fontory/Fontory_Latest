import {
  FloatingButtonGroup,
  FontDetail,
  FontDetailOtherFonts,
  useFontDetail,
} from '@/features/font-detail'
import { useParamFontId } from '@/shared/hooks'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const FontDetailPage = () => {
  const fontId = useParamFontId()
  const { fontDetail, recommendList } = useFontDetail(fontId)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'FONT'} />
        <FontDetail {...fontDetail} />
      </section>

      {recommendList && !!recommendList.length && (
        <section className="mt-60">
          <SectionHeader title={'OTHER FONTS'} />
          <FontDetailOtherFonts recommendList={recommendList} />
        </section>
      )}

      <FloatingButtonGroup {...fontDetail} />
    </Layout>
  )
}

export default FontDetailPage
