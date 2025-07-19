import type { FontArrayResponse, FontDetailResponse } from '../types/font.type'

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

export class PreviewFontList {
  fontList: PreviewFont[]
  currentPage: number
  totalPages: number

  constructor(response: FontArrayResponse) {
    this.fontList = response.content.map((item) => new PreviewFont(item))
    this.currentPage = response.number
    this.totalPages = response.totalPages
  }

  get isEmpty() {
    return this.fontList.length === 0
  }
}
