import type z from 'zod'

import type { SortKey } from '@/components/SortTab'

import type { createFontSchema } from '../config/font.config'

export type Font = {
  id: number
  name: string
  example: string
  bookmarked: boolean
  woff: string
  writerName: string
}

export type FontMetadata = {
  downloadCount: number
  bookmarkCount: number
}

export type CreateFontFormType = z.input<typeof createFontSchema>

export type FontDetailResponse = Font & FontMetadata

export type FontDetailType = Omit<Font, 'id' | 'name' | 'bookmarked'> & {
  fontId: number
  fontName: string
  isBookmarked: boolean
} & FontMetadata

export type FontFilter = {
  page: number
  sortBy: SortKey
  keyword: string | null
}

export type MyFontListType = Pick<FontFilter, 'page'>

export type FontArrayResponse = {
  content: FontDetailResponse[]
  number: number
  totalPages: number
}

export type CustomFontArray = {
  content: FontDetailType[]
  currentPage: number
  totalPages: number
}

export type FontProgress = Pick<Font, 'id' | 'name'> & {
  createdAt: string
  status: string
}

export type DownloadFont = Pick<Font, 'id' | 'name'> & { ttf: string }
