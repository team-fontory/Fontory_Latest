import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'

type Props = {
  isBookmarked: boolean
}

export const FloatingButtonGroup = ({ isBookmarked }: Props) => {
  return (
    <div className="flex-column fixed right-8 bottom-8 gap-5">
      <BookmarkButton.FloatingButton isBookmarked={isBookmarked} />
      <DownloadButton.FloatingButton />
    </div>
  )
}
