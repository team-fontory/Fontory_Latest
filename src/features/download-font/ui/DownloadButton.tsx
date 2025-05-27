import type { PropsWithChildren } from 'react'

import { Icon } from '@/shared/ui'

import { useFontDownloadHandler } from '../model/useFontDownloadHandler'

type Props = {
  fontName: string
  fontId: number
}

const BaseComponent = ({ fontName, fontId, children }: PropsWithChildren<Props>) => {
  const { handleDownload } = useFontDownloadHandler(fontId, fontName)

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="cursor-pointer transition-all hover:scale-105"
    >
      {children}
    </button>
  )
}

const DownloadIcon = ({ fontName, fontId }: Props) => {
  return (
    <BaseComponent fontName={fontName} fontId={fontId}>
      <Icon name="download" size={'2.5rem'} className="text-secondary" />
    </BaseComponent>
  )
}

const FloatingButton = ({ fontName, fontId }: Props) => {
  return (
    <BaseComponent fontName={fontName} fontId={fontId}>
      <div className="bg-secondary flex-center h-[4.8125rem] w-[4.8125rem] rounded-full">
        <Icon name="download" size={'2.5rem'} className="text-white" />
      </div>
    </BaseComponent>
  )
}

const Label = ({ fontName, fontId }: Props) => {
  return (
    <BaseComponent fontName={fontName} fontId={fontId}>
      <div className="bg-secondary font-secondary-button flex-align-center rounded-small gap-3 px-5 py-3 text-white">
        <span>다운로드</span>
        <Icon name="download" size={'2.1875rem'} className="text-white" />
      </div>
    </BaseComponent>
  )
}

export const DownloadButton = {
  Icon: DownloadIcon,
  FloatingButton,
  Label,
}
