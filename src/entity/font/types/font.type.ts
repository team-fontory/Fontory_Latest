import type z from 'zod'

import type {
  createFontStepOneSchema,
  createFontStepThreeSchema,
  createFontStepTwoSchema,
  fontSchema,
} from '../config/font.schema'

export type CreateFontFormType = z.input<typeof fontSchema>
export type CreateFontStepOneFormType = z.infer<typeof createFontStepOneSchema>
export type CreateFontStepTwoFormType = z.infer<typeof createFontStepTwoSchema>
export type CreateFontStepThreeFormType = z.infer<typeof createFontStepThreeSchema>

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

export type FontDetailResponse = Font & FontMetadata

export type FontDetailType = Omit<Font, 'id' | 'name' | 'bookmarked'> & {
  fontId: number
  fontName: string
  isBookmarked: boolean
} & FontMetadata
