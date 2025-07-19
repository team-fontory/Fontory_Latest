import type { FontDetailResponse } from '../types/font.type'

export class PreviewFont {
  fontId: number
  fontName: string
  example: string
  isBookmarked: boolean
  fontAddr: string
  writerName: string
  downloadCount: number
  bookmarkCount: number

  constructor(data: FontDetailResponse) {
    this.fontId = data.id
    this.fontName = data.name
    this.example = data.example
    this.isBookmarked = data.bookmarked
    this.fontAddr = data.woff
    this.writerName = data.writerName
    this.downloadCount = data.downloadCount
    this.bookmarkCount = data.bookmarkCount
  }
}
