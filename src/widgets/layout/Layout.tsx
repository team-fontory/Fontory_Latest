import { type PropsWithChildren } from 'react'

import { cn } from '@/shared/lib'

import { NavigationBar } from '../navigation/NavigationBar'

type Props = {
  isTransparentNav?: boolean
  hasPadding?: boolean
}

export const Layout = ({
  children,
  isTransparentNav = false,
  hasPadding = false,
}: PropsWithChildren<Props>) => {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar isTransparent={isTransparentNav} />
      <main className={cn('min-h-screen', hasPadding && 'my-[16.63rem] px-48')}>{children}</main>
    </div>
  )
}
