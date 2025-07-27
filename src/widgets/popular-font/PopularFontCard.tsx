import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { PreviewFont } from '@/entity/font'
import { BookmarkButton } from '@/features/bookmark-font'
import { DownloadButton } from '@/features/download-font'
import { useDynamicFont } from '@/hooks/useDynamicFont'

type Props = {
  fontList: PreviewFont
}

export const PopularFontCard = ({ fontList }: Props) => {
  const { fontId, fontName, fontAddr, example, isBookmarked } = fontList
  const { fontFamily, isLoaded } = useDynamicFont(fontAddr, fontId)

  return (
    <Link
      to={ROUTES.DETAIL(fontId)}
      className="shadow-popular-font rounded-medium flex-column cursor-pointer gap-[1.8rem] bg-white p-8"
      style={isLoaded ? { fontFamily: fontFamily } : undefined}
    >
      <p className="font-popular-example grow">{example}</p>
      <div className="flex-between-center">
        <span className="font-popular-writer text-darkgrey grow">{fontName}</span>
        <div className="flex gap-4">
          <BookmarkButton.Icon fontId={fontId} isBookmarked={isBookmarked} />
          <DownloadButton.Icon fontId={fontId} fontName={fontName} />
        </div>
      </div>
    </Link>
  )
}
