import { create } from 'zustand'

import type { FontFilter } from '@/entity/font'
import { SORT_OPTIONS } from '@/shared/ui'

type FilterStore = {
  params: FontFilter
  actions: {
    setParams: (newParams: Partial<FontFilter>) => void
    resetParams: () => void
  }
}

const initialParams = {
  page: 0,
  sortBy: SORT_OPTIONS.createdAt.key,
  keyword: null,
}

export const useFontFilterStore = create<FilterStore>((set) => ({
  params: initialParams,
  actions: {
    setParams: (newParams) =>
      set((state) => ({
        params: { ...state.params, ...newParams },
      })),
    resetParams: () => set({ params: initialParams }),
  },
}))

export const useFontFilter = () => useFontFilterStore((state) => state.params)
export const useFontFilterActions = () => useFontFilterStore((state) => state.actions)
