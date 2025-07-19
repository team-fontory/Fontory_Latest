import { apiClient, publicApiClient } from '@/app/api'

import type {
  FontArrayResponse,
  FontDetailResponse,
  FontFilter,
  FontProgress,
} from '../types/font.type'

class Service {
  getBookmark({ page, sortBy, keyword }: FontFilter) {
    return apiClient.get<FontArrayResponse>('/bookmarks', {
      params: { page: page - 1, size: 8, keyword, sortBy },
    })
  }

  getExplore({ page, sortBy, keyword }: FontFilter) {
    return publicApiClient.get<FontArrayResponse>('/fonts', {
      params: { page: page - 1, size: 8, keyword, sortBy },
    })
  }

  getDetail(fontId: number) {
    return apiClient.get<FontDetailResponse>(`/fonts/${fontId}`)
  }

  getRecommend(fontId: number) {
    return apiClient.get<FontDetailResponse[]>(`/fonts/${fontId}/others`)
  }

  getPopular() {
    return apiClient.get<FontDetailResponse[]>('/fonts/popular')
  }

  getInProgress() {
    return apiClient.get<FontProgress[]>('/fonts/progress')
  }

  getCompleted(page: number) {
    return apiClient.get<FontArrayResponse>('/fonts/members', { params: { page: page - 1 } })
  }
}

export const FontService = new Service()
