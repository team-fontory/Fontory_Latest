import { useSuspenseQuery } from '@tanstack/react-query'

import type { FontFilter } from '../types/font.type'

import { fontQueryKeys } from './fontQueryKeys'
import { FontService } from './FontService'

export const useBookmarkFontList = (filter: FontFilter) => {
  return useSuspenseQuery({
    queryKey: fontQueryKeys.bookmark(filter),
    queryFn: () => FontService.getBookmark(filter),
  })
}
