import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import type { PreviewFont } from '@/entity/font'
import { DeleteFontButton } from '@/features/delete-font'
import { DownloadButton } from '@/features/download-font'
import { useDynamicFont } from '@/hooks/useDynamicFont'

export const MyFontPreviewCard = (props: PreviewFont) => {
  const { fontId, fontName, example, fontAddr, writerName } = props
  const { fontFamily, isLoaded } = useDynamicFont(fontAddr, fontId)

  return (
    <Link to={ROUTES.DETAIL(fontId)} className="flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <div className="flex items-center justify-between gap-3">
        <p className="font-preview-metadata text-darkgrey grow">
          {fontName} / {writerName}
        </p>
        <DownloadButton.Label fontId={fontId} fontName={fontName} />
        <DeleteFontButton fontId={fontId} />
      </div>

      <p className="font-preview" style={isLoaded ? { fontFamily } : undefined}>
        {example}
      </p>
    </Link>
  )
}
