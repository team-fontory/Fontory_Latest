import { cn } from '@/shared/lib'

export const SORT_OPTIONS = {
  all: '전체',
  view: '조회순',
  bookmark: '북마크순',
} as const

/** key 타입 ('all' | 'view' | 'bookmark') */
export type SortOption = keyof typeof SORT_OPTIONS

/** value 타입 ('전체' | '조회순' | '북마크순') */
export type SortLabel = (typeof SORT_OPTIONS)[SortOption]

type Props = {
  value: SortLabel
  onChange: (option: SortLabel) => void
}

export const SortTab = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-6">
      {Object.entries(SORT_OPTIONS).map(([key, label]) => (
        <button
          key={key}
          className={cn(
            'font-filter px-2 py-[1.06]',
            value === label ? 'border-b-3 border-black text-black' : 'text-darkgrey',
          )}
          onClick={() => onChange(label as SortLabel)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
