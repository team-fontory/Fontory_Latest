import { EMPTY_MESSAGE } from '@/constants/emptyMessage'
import { useCompletedFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'

import { MyFontPreviewCard } from './MyFontPreviewCard'

export const MyFontPreviewCardList = () => {
  const [page] = useTypedSearchParam<number>('page', 1)

  const { data: completedFontInfo } = useCompletedFontList(page)

  if (completedFontInfo.isEmpty) {
    return (
      <p className="text-darkgrey py-20 text-center text-4xl font-bold">
        {EMPTY_MESSAGE.noCompleted}
      </p>
    )
  }

  return (
    <div className="flex-column">
      {completedFontInfo.fontList.map((font) => (
        <MyFontPreviewCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
