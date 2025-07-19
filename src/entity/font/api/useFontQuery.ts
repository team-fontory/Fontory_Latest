import { useSuspenseQuery } from '@tanstack/react-query'

import { PreviewFont, PreviewFontList } from '../model/font.model'
import type { FontFilter } from '../types/font.type'

import { fontQueryKeys } from './fontQueryKeys'
import { FontService } from './FontService'

export const useBookmarkFontList = (filter: FontFilter) => {
  return useSuspenseQuery({
    queryKey: fontQueryKeys.bookmark(filter),
    queryFn: () => FontService.getBookmark(filter),
  })
}

export const useExploreFontList = (filter: FontFilter) => {
  return useSuspenseQuery({
    queryKey: fontQueryKeys.explore(filter),
    queryFn: () => FontService.getExplore(filter),
  })
}

export const useFontDetail = (fontId: number) => {
  return useSuspenseQuery({
    queryKey: fontQueryKeys.detail(fontId),
    queryFn: () => FontService.getDetail(fontId),
    select: (data) => new PreviewFont(data),
  })
}

export const useRecommendFontList = (fontId: number) => {
  return useSuspenseQuery({
    queryKey: fontQueryKeys.recommend(fontId),
    queryFn: () => FontService.getRecommend(fontId),
    select: (data) => new PreviewFontList({ content: data, number: 1, totalPages: 1 }),
  })
}

// export const useFontDetail = (fontId: number) => {
//   const [detailQuery, recommendQuery] = useSuspenseQueries<
//     [
//       UseQueryOptions<FontDetailResponse, AxiosError, FontDetailType>,
//       UseQueryOptions<FontDetailResponse[], AxiosError, FontDetailType[]>,
//     ]
//   >({
//     queries: [
//       {
//         queryKey: fontQueryKeys.detail(fontId),
//         queryFn: () => FontService.getDetail(fontId),
//         select: ({ id, name, bookmarked, ...rest }) => ({
//           fontId: id,
//           fontName: name,
//           isBookmarked: bookmarked,
//           ...rest,
//         }),
//       },
//       {
//         queryKey: fontQueryKeys.recommend(fontId),
//         queryFn: () => FontService.getRecommend(fontId),
//         select: (data) => new PreviewFontList(data),
//       },
//     ],
//   })

//   return {
//     fontDetail: detailQuery.data,
//     recommendList: recommendQuery.data,
//   }
// }
