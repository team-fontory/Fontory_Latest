import type { PropsWithChildren } from 'react'

import { downloadFile } from '@/shared/lib'
import { Icon } from '@/shared/ui'

type Props = {
  name: string
  link: string
}

const BaseComponent = ({ name, link, children }: PropsWithChildren<Props>) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    downloadFile(link, `${name}.ttf`)
  }

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

const DownloadIcon = ({ name, link }: Props) => {
  return (
    <BaseComponent name={name} link={link}>
      <Icon name="download" size={'2.5rem'} className="text-secondary" />
    </BaseComponent>
  )
}

const FloatingButton = ({ name, link }: Props) => {
  return (
    <BaseComponent name={name} link={link}>
      <div className="bg-secondary flex-center h-[4.8125rem] w-[4.8125rem] rounded-full">
        <Icon name="download" size={'2.5rem'} className="text-white" />
      </div>
    </BaseComponent>
  )
}

const Label = ({ name, link }: Props) => {
  return (
    <BaseComponent name={name} link={link}>
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
