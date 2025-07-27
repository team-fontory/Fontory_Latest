import { FontPreviewCardList } from '@/components/FontPreviewCardList'
import { SORT_OPTIONS, type SortKey } from '@/components/SortTab'
import { useExploreFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'
import { EMPTY_MESSAGE } from '@/shared/config'

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
