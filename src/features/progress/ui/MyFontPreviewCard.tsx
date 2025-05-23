import { DownloadButton } from '@/features/download-font'

export const MyFontPreviewCard = () => {
  return (
    <div className="flex-column gap-8 px-4 py-10 hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <p className="font-preview-metadata text-darkgrey grow">Paperlogy / 고로켕</p>
        <DownloadButton.Label />
      </div>

      <p className="font-preview">오우 별론데</p>
    </div>
  )
}
