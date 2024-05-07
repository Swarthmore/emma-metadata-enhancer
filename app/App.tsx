import { head as headTemplate } from '@/templates/head'
import mustache from 'mustache'
import { ReactNode, useState } from 'react'

import './App.css'
import { CodeBlock } from './components/code-block'
import { MetadataForm } from './components/metadata-form/form'
import { ThemeProvider } from './components/theme-provider'
import { ScrollArea } from './components/ui/scroll-area'
import { cn } from './lib/utils'

export const App = () => {
  const [codeOutput, setCodeOutput] = useState(
    '<head>Submit the form to render code</head>'
  )

  console.log({ codeOutput })

  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout
        Form={
          <MetadataForm
            onSubmit={(metadata) => setCodeOutput(getCodeOutput(metadata))}
          />
        }
        Preview={<Preview code={codeOutput} />}
      />
    </ThemeProvider>
  )
}

// Generate the HTML code for the output view by passing the supplied metadata through the mustache template
const getCodeOutput = (templateData) => {
  return mustache.render(headTemplate, templateData)
}

const Preview = ({ code }: { code: string }) => {
  return (
    <div>
      <CodeBlock code={code} />
    </div>
  )
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
