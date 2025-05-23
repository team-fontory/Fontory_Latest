import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'

export const PopularFontCard = () => {
  return (
    <div className="shadow-popular-font rounded-medium flex-column gap-[1.8rem] bg-white p-8">
      <p className="font-popular-example">이것은 모노그래피이니라. 미리보기 냠냠</p>
      <div className="flex-between-center">
        <span className="font-popular-writer text-darkgrey grow">휴먼둥둥체</span>
        <div className="flex gap-4">
          <BookmarkButton.Icon isBookmarked={true} />
          <DownloadButton.Icon />
        </div>
      </div>
    </div>
  )
}
