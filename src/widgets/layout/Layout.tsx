import { type PropsWithChildren } from 'react'

import { useScrollToTop } from '@/shared/hooks'
import { cn } from '@/shared/lib'

import { Footer } from './Footer'
import { NavigationBar } from './NavigationBar'

type Props = {
  hasPadding?: boolean
}

export const Layout = ({ children, hasPadding = false }: PropsWithChildren<Props>) => {
  useScrollToTop()

  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <main className={cn('min-h-screen', hasPadding && 'my-[16.63rem] px-48')}>{children}</main>
      <Footer />
    </div>
  )
}
