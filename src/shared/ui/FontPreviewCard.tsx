import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { PreviewFont } from '@/entity/font'
import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'

import { useDynamicFont } from '../hooks'

export const FontPreviewCard = (props: PreviewFont) => {
  const { fontId, fontName, example, fontAddr, writerName, isBookmarked } = props
  const { fontFamily, isLoaded } = useDynamicFont(fontAddr, fontId)

  return (
    <Link
      to={ROUTES.DETAIL(fontId)}
      className="group flex-column gap-8 px-4 py-10 hover:bg-gray-100"
    >
      <p className="font-preview" style={isLoaded ? { fontFamily } : undefined}>
        {example}
      </p>

      <div className="max-h-0 scale-y-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-20 group-hover:scale-y-100 group-hover:opacity-100">
        <div className="flex items-center justify-between p-1">
          <p className="font-preview-metadata text-darkgrey grow">
            {fontName} / {writerName}
          </p>
          <div className="flex gap-[0.83rem]">
            <BookmarkButton.Label fontId={fontId} isBookmarked={isBookmarked} />
            <DownloadButton.Label fontId={fontId} fontName={fontName} />
          </div>
        </div>
      </div>
    </Link>
  )
}
