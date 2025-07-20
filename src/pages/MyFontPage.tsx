import { useRef } from 'react'

import { Layout } from '@/widgets'
import { MyFontPreviewCardList, ProgressPagination, ProgressTable } from '@/widgets/progress'
import { SectionHeader } from '@/widgets/section'

const MyFontPage = () => {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null)

  return (
    <Layout hasPadding>
      <section>
        <SectionHeader title={'IN PROGRESS'} />
        <ProgressTable />
      </section>

      <section ref={scrollTargetRef} className="mt-60">
        <SectionHeader title={'COMPLETED'} />
        <MyFontPreviewCardList />
        <ProgressPagination scrollTargetRef={scrollTargetRef} />
      </section>
    </Layout>
  )
}

export default MyFontPage
