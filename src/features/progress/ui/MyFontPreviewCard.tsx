import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { FontDetailType } from '@/entity/font'
import { DownloadButton } from '@/features/download-font'

type Props = Omit<FontDetailType, 'downloadCount' | 'bookmarkCount'>

export const MyFontPreviewCard = ({ fontId, fontName, example, writerName, woff }: Props) => {
  return (
    <Link to={ROUTES.DETAIL(fontId)} className="flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <p className="font-preview-metadata text-darkgrey grow">
          {fontName} / {writerName}
        </p>
        <DownloadButton.Label name={fontName} link={woff} />
      </div>

      <p className="font-preview">{example}</p>
    </Link>
  )
}
