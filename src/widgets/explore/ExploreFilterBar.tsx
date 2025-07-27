import { SearchBar } from '@/components/SearchBar'
import { SORT_OPTIONS, type SortKey, SortTab } from '@/components/SortTab'
import { useTypedSearchParam } from '@/hooks/useTypedSearchParam'

export const ExploreFilterBar = () => {
  const [sortBy, setSortBy] = useTypedSearchParam<SortKey>('sortBy', SORT_OPTIONS.createdAt.key)
  const [keyword, setKeyword] = useTypedSearchParam<string>('keyword')

  return (
    <div className="mb-[4.5rem] grid grid-cols-2">
      <SortTab value={sortBy} onChange={setSortBy} />
      <SearchBar defaultKeyword={keyword} onSearch={setKeyword} />
    </div>
  )
}
