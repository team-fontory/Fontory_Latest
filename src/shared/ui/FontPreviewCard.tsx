import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'

export const FontPreviewCard = () => {
  return (
    <div className="group flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <p className="font-preview">오우 별론데</p>

      <div className="max-h-0 scale-y-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-20 group-hover:scale-y-100 group-hover:opacity-100">
        <div className="flex items-center justify-between">
          <p className="font-preview-metadata text-darkgrey grow">Paperlogy / 고로켕</p>
          <div className="flex gap-[0.83rem]">
            <BookmarkButton.Label isBookmarked={true} />
            <DownloadButton.Label />
          </div>
        </div>
      </div>
    </div>
  )
}
