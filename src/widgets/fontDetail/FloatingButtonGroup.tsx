import { useFontDetail } from '@/entity/font'
import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'
import { useParamFontId } from '@/hooks/useParamFontId'

export const FloatingButtonGroup = () => {
  const fontId = useParamFontId()

  const { data: fontDetail } = useFontDetail(fontId)
  const { isBookmarked, fontName } = fontDetail

  return (
    <div className="flex-column fixed right-8 bottom-8 gap-5">
      <BookmarkButton.FloatingButton fontId={fontId} isBookmarked={isBookmarked} />
      <DownloadButton.FloatingButton fontId={fontId} fontName={fontName} />
    </div>
  )
}
