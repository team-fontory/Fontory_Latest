import { FloatingButtonGroup, FontDetail, FontDetailOtherFonts } from '@/features/font-detail'
import { SectionHeader } from '@/shared/ui'

const FontDetailPage = () => {
  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <section>
        <SectionHeader title="FONT" />
        <FontDetail />
      </section>

      <section className="mt-60">
        <SectionHeader title="OTHER FONTS" />
        <FontDetailOtherFonts />
      </section>

      <FloatingButtonGroup isBookmarked={true} />
    </div>
  )
}

export default FontDetailPage
