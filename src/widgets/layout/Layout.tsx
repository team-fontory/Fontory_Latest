import { type PropsWithChildren } from 'react'

import { useScrollToTop } from '@/shared/hooks'
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
  useScrollToTop()

  return (
    <div className="overflow-x-hidden">
      <NavigationBar isTransparent={isTransparentNav} />
      <main className={cn('min-h-screen', hasPadding && 'my-[16.63rem] px-48')}>{children}</main>
    </div>
  )
}
