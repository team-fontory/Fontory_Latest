import { useRecommendFontList } from '@/entity/font'
import { useParamFontId } from '@/shared/hooks'
import { Layout } from '@/widgets'
import { FloatingButtonGroup, FontDetail, FontDetailOtherFonts } from '@/widgets/fontDetail'
import { SectionHeader } from '@/widgets/section'

const FontDetailPage = () => {
  const fontId = useParamFontId()
  const { data: recommendFontInfo } = useRecommendFontList(fontId)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'FONT'} />
        <FontDetail />
      </section>

      {!recommendFontInfo.isEmpty && (
        <section className="mt-60">
          <SectionHeader title={'OTHER FONTS'} />
          <FontDetailOtherFonts recommendList={recommendFontInfo.fontList} />
        </section>
      )}

      <FloatingButtonGroup />
    </Layout>
  )
}

export default FontDetailPage
