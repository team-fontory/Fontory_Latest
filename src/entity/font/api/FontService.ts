import { apiClient, publicApiClient } from '@/app/api'

import { PreviewFontList } from '../model/font.model'
import type { FontArrayResponse, FontFilter } from '../types/font.type'

class Service {
  async getBookmark({ page, sortBy, keyword }: FontFilter) {
    const response = await apiClient.get<FontArrayResponse>('/bookmarks', {
      params: { page: page - 1, size: 8, keyword, sortBy },
    })

    return new PreviewFontList(response)
  }

  async getExplore({ page, sortBy, keyword }: FontFilter) {
    const response = await publicApiClient.get<FontArrayResponse>('/fonts', {
      params: { page: page - 1, size: 8, keyword, sortBy },
    })

    return new PreviewFontList(response)
  }
}

export const FontService = new Service()
