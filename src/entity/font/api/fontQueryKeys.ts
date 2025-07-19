import type { FontFilter } from '../types/font.type'

export const fontQueryKeys = {
  all: ['font'] as const,
  bookmark: ({ page, sortBy, keyword }: FontFilter) =>
    [...fontQueryKeys.all, 'list', page, sortBy, keyword] as const,
}
