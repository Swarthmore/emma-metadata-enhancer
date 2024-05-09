import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

import { ScrollArea } from './scroll-area'
import { Toaster } from './toaster'

export type LayoutProps = {
  Form: ReactNode
  Aside: ReactNode
}

export const Layout = ({ Form, Aside }: LayoutProps) => (
  <div className={cn('w-full', 'flex')}>
    <ScrollArea className={cn('p-5', 'max-h-screen', 'w-full')}>
      <main>{Form}</main>
    </ScrollArea>
    <ScrollArea className={cn('p-5', 'max-h-screen', 'w-full')}>
      <aside>{Aside}</aside>
    </ScrollArea>
    <Toaster />
  </div>
)
