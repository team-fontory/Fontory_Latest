import type { FontDetailType } from '@/entity/font'
import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'

export const FloatingButtonGroup = (props: FontDetailType) => {
  return (
    <div className="flex-column fixed right-8 bottom-8 gap-5">
      <BookmarkButton.FloatingButton fontId={props.fontId} isBookmarked={props.isBookmarked} />
      <DownloadButton.FloatingButton fontId={props.fontId} fontName={props.fontName} />
    </div>
  )
}
