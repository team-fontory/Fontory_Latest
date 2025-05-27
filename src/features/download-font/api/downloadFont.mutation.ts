import { apiClient, FONT_QUERY_KEY } from '@/app/api'
import type { DownloadFont } from '@/entity/font'
import { useAxiosQuery } from '@/shared/hooks'

const downloadKeys = {
  downloadFont: (fontId: number) => [...FONT_QUERY_KEY, 'download', fontId] as const,
}

const endpoints = {
  downloadFont: (fontId: number) => `/fonts/${fontId}/download`,
}

export const useFontDownload = (fontId: number) =>
  useAxiosQuery<DownloadFont>(
    downloadKeys.downloadFont(fontId),
    () => apiClient.get(endpoints.downloadFont(fontId)),
    {
      enabled: false,
    },
  )
