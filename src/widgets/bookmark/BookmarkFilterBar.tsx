import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'
import { SearchBar, SORT_OPTIONS, type SortKey, SortTab } from '@/shared/ui'

export const BookmarkFilterBar = () => {
  const [sortBy, setSortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword, setKeyword] = useTypedSearchParam<string>('keyword')

  return (
    <div className="mb-[4.5rem] grid grid-cols-2">
      <SortTab value={sortBy} onChange={setSortBy} />
      <SearchBar defaultKeyword={keyword} onSearch={setKeyword} />
    </div>
  )
}
