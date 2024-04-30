import { head as headTemplate } from '@/templates/head'
import mustache from 'mustache'
import { ReactNode } from 'react'
import { CopyBlock } from 'react-code-blocks'
import { z } from 'zod'

import './App.css'
import { MetadataForm } from './components/metadata-form/form'
import { formSchema } from './components/metadata-form/schema'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { cn } from './lib/utils'

export const App = () => {
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)

    const codeOutput = getCodeOutput(values)

    console.log(codeOutput)
  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout
        Form={<MetadataForm onSubmit={handleSubmit} />}
        Preview={<ModeToggle />}
      />
    </ThemeProvider>
  )
}

// Generate the HTML code for the output view by passing the supplied metadata through the mustache template
const getCodeOutput = (templateData = {}) => {
  return mustache.render(headTemplate, templateData)
}

const Preview = () => {
  return (
    <CopyBlock
      text={`<head>Nothing here yet</head>`}
      language='html'
      showLineNumbers={false}
      wrapLongLines
    />
  )
}

type LayoutProps = {
  Form: ReactNode
  Preview: ReactNode
}

const Layout = ({ Form, Preview }: LayoutProps) => (
  <div className={cn('w-full', 'flex')}>
    <div className={cn('m-3')}>{Form}</div>
    <div className={cn('m-3')}>{Preview}</div>
  </div>
)
