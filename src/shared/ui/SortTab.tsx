import { cn } from '@/utils/cn'

export const SORT_OPTIONS = {
  createdAt: { key: 'createdAt', label: '전체' },
  downloadCount: { key: 'downloadCount', label: '조회순' },
  bookmarkCount: { key: 'bookmarkCount', label: '북마크순' },
} as const

/** 'createdAt' | 'downloadCount' | 'bookmark' */
export type SortOption = keyof typeof SORT_OPTIONS

/** 'createdAt' | 'downloadCount' | 'bookmarkCount' */
export type SortKey = (typeof SORT_OPTIONS)[SortOption]['key']

/** '전체' | '조회순' | '북마크순' */
export type SortLabel = (typeof SORT_OPTIONS)[SortOption]['label']

type Props = {
  value: SortOption
  onChange: (option: SortKey) => void
}

export const SortTab = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-6">
      {Object.entries(SORT_OPTIONS).map(([option, { key, label }]) => (
        <button
          key={option}
          className={cn(
            'font-filter px-2 py-[1.06]',
            value === key ? 'border-b-3 border-black text-black' : 'text-darkgrey',
          )}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
