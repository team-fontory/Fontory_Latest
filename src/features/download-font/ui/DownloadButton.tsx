import type { PropsWithChildren } from 'react'

import { Icon } from '@/shared/ui'

const BaseComponent = ({ children }: PropsWithChildren) => {
  return <button className="cursor-pointer transition-all hover:scale-105">{children}</button>
}

const DownloadIcon = () => {
  return (
    <BaseComponent>
      <Icon name="download" size={40} className="text-secondary" />
    </BaseComponent>
  )
}

const FloatingButton = () => {
  return (
    <BaseComponent>
      <div className="bg-secondary flex-center h-[4.8125rem] w-[4.8125rem] rounded-full">
        <Icon name="download" size={40} className="text-white" />
      </div>
    </BaseComponent>
  )
}

const Label = () => {
  return (
    <BaseComponent>
      <div className="bg-secondary font-secondary-button flex-align-center rounded-small gap-3 px-5 py-3 text-white">
        <span>다운로드</span>
        <Icon name="download" size={40} className="text-white" />
      </div>
    </BaseComponent>
  )
}

export const DownloadButton = {
  Icon: DownloadIcon,
  FloatingButton,
  Label,
}
