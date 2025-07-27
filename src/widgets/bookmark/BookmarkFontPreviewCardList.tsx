import { useBookmarkFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'
import { EMPTY_MESSAGE } from '@/shared/config'
import { FontPreviewCardList, SORT_OPTIONS, type SortKey } from '@/shared/ui'

export const BookmarkFontPreviewCardList = () => {
  const [page] = useTypedSearchParam<number>('page', 1)
  const [sortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword] = useTypedSearchParam<string>('keyword')

  const { data: bookmarkFontInfo } = useBookmarkFontList({ page, sortBy, keyword })

  return (
    <FontPreviewCardList
      fontList={bookmarkFontInfo.fontList}
      isEmpty={bookmarkFontInfo.isEmpty}
      emptyMessage={keyword ? EMPTY_MESSAGE.noBookmark : undefined}
    />
  )
}
