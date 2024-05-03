import { head as headTemplate } from '@/templates/head'
import mustache from 'mustache'
import { ReactNode } from 'react'
import { CopyBlock, a11yDark } from 'react-code-blocks'

import './App.css'
import { MetadataForm } from './components/metadata-form/form'
import { ThemeProvider } from './components/theme-provider'
import { ScrollArea } from './components/ui/scroll-area'
import { cn } from './lib/utils'

export const App = () => {
  const code = `<head></head>`
  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout Form={<MetadataForm />} Preview={<></>} />
    </ThemeProvider>
  )
}

// Generate the HTML code for the output view by passing the supplied metadata through the mustache template
const getCodeOutput = (templateData = {}) => {
  return mustache.render(headTemplate, templateData)
}

const Preview = ({ code }: { code: string }) => {
  return <CopyBlock text={code} language='html' theme={a11yDark} />
}

type LayoutProps = {
  Form: ReactNode
  Preview: ReactNode
}

const Layout = ({ Form, Preview }: LayoutProps) => (
  <div className={cn('w-full', 'flex')}>
    <ScrollArea className={cn('p-5', 'max-h-screen', 'w-full')}>
      {Form}
    </ScrollArea>
    <ScrollArea className={cn('p-5', 'max-h-screen', 'w-full')}>
      {Preview}
    </ScrollArea>
  </div>
)
