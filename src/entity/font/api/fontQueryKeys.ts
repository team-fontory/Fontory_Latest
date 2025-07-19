import type { FontFilter } from '../types/font.type'

export const fontQueryKeys = {
  all: ['font'] as const,
  bookmark: ({ page, sortBy, keyword }: FontFilter) =>
    [...fontQueryKeys.all, 'bookmark', page, sortBy, keyword] as const,
  explore: ({ page, sortBy, keyword }: FontFilter) =>
    [...fontQueryKeys.all, 'explore', page, sortBy, keyword] as const,
  detail: (fontId: number) => [...fontQueryKeys.all, 'detail', fontId],
  recommend: (fontId: number) => [...fontQueryKeys.all, 'detail', 'recommend', fontId],
}
