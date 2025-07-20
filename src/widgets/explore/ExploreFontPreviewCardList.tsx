import { useExploreFontList } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'
import { useTypedSearchParam } from '@/shared/hooks'
import { FontPreviewCardList, SORT_OPTIONS, type SortKey } from '@/shared/ui'

export const ExploreFontPreviewCardList = () => {
  const [page] = useTypedSearchParam<number>('page', 1)
  const [sortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword] = useTypedSearchParam<string>('keyword')

  const { data: exploreFontInfo } = useExploreFontList({ page, sortBy, keyword })

  return (
    <FontPreviewCardList
      fontList={exploreFontInfo.fontList}
      isEmpty={exploreFontInfo.isEmpty}
      emptyMessage={keyword ? EMPTY_MESSAGE.noSearchData : undefined}
    />
  )
}
