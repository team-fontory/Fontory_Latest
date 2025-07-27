import { FontPreviewCardList } from '@/components/FontPreviewCardList'
import { SORT_OPTIONS, type SortKey } from '@/components/SortTab'
import { EMPTY_MESSAGE } from '@/constants/emptyMessage'
import { useBookmarkFontList } from '@/entity/font'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'

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
