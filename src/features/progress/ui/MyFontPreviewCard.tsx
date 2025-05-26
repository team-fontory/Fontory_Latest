import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { FontDetailType } from '@/entity/font'
import { DownloadButton } from '@/features/download-font'
import { useDynamicFont } from '@/shared/hooks'

import { DeleteFontButton } from './DeleteFontButton'

type Props = Omit<FontDetailType, 'downloadCount' | 'bookmarkCount'>

export const MyFontPreviewCard = ({ fontId, fontName, example, writerName, woff }: Props) => {
  const { fontFamily, isLoaded } = useDynamicFont(woff, fontId)

  return (
    <Link to={ROUTES.DETAIL(fontId)} className="flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <div className="flex items-center justify-between gap-3">
        <p className="font-preview-metadata text-darkgrey grow">
          {fontName} / {writerName}
        </p>
        <DownloadButton.Label name={fontName} link={woff} />
        <DeleteFontButton fontId={fontId} />
      </div>

      <p className="font-preview" style={isLoaded ? { fontFamily } : undefined}>
        {example}
      </p>
    </Link>
  )
}
