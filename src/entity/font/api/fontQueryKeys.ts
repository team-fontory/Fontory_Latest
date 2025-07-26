import type { FontFilter } from '../types/font.type'

export const fontQueryKeys = {
  all: ['font'] as const,
  bookmark: ({ page, sortBy, keyword }: FontFilter) =>
    [...fontQueryKeys.all, 'bookmark', page, sortBy, keyword] as const,
  download: (fontId: number) => [...fontQueryKeys.all, 'download', fontId] as const,

  // explore
  exploreAll: () => [...fontQueryKeys.all, 'explore'] as const,
  explore: ({ page, sortBy, keyword }: FontFilter) =>
    [...fontQueryKeys.exploreAll(), page, sortBy, keyword] as const,
  popular: () => [...fontQueryKeys.exploreAll(), 'popular'] as const,

  // detail
  detailAll: () => [...fontQueryKeys.all, 'detail'] as const,
  detail: (fontId: number) => [...fontQueryKeys.detailAll(), fontId] as const,
  recommend: (fontId: number) => [...fontQueryKeys.detailAll(), 'recommend', fontId] as const,

  // progress
  progressAll: () => [...fontQueryKeys.all, 'progress'] as const,
  inProgress: () => [...fontQueryKeys.progressAll(), 'in-progress'] as const,
  complete: (page: number) => [...fontQueryKeys.progressAll(), 'complete', page] as const,
}
