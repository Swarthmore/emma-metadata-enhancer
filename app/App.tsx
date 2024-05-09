import { head as headTemplate } from '@/templates/head'
import { preview as previewTemplate } from '@/templates/preview'

import mustache from 'mustache'
import { ReactNode, useState } from 'react'

import './App.css'
import { CodeBlock } from './components/code-block'
import { MetadataForm } from './components/metadata-form/form'
import { ThemeProvider } from './components/theme-provider'
import { ScrollArea } from './components/ui/scroll-area'
import { Toaster } from './components/ui/toaster'
import { useToast } from './components/ui/use-toast'
import { cn } from './lib/utils'

export const App = () => {
  const { toast } = useToast()

  const [headOutput, setHeadOutput] = useState(
    '<head>Submit the form to render code</head>'
  )
  const [previewOutput, setPreviewOutput] = useState('')
  const [htmlFile, setHtmlFile] = useState<File>()

  const onFormSubmit = fields => {
    const { file, accessibilityFeatures, accessibilityHazards, ...rest } =
      fields

      // Load the file
      const textDecoder = new TextDecoder('utf-8')
      const fileReader = new FileReader()

      fileReader.onabort = () => {
        toast({ variant: 'destructive', description: 'File read aborted' })
        return
      }

      fileReader.onerror = () => {
        toast({ variant: 'destructive', description: 'Error reading file' })
        return
      } 

      fileReader.onload = () => {
        const buff = fileReader.result
        const txt = textDecoder.decode(buff)
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(txt, 'text/html')
        const body = htmlDoc.querySelector('body')
        setHtmlFile(body)

        const mustacheCode = getCodeOutput(headTemplate, {
          accessibilityFeatures: accessibilityFeatures
            ? accessibilityFeatures.join(',')
            : '', // mustache will discard the field if we give it an empty string
          accessibilityHazards: accessibilityHazards
            ? accessibilityHazards.join(',')
            : '',
          ...rest
        })

        setHeadOutput(mustacheCode.replace(/(^[ \t]*\n)/gm, ''))

        setPreviewOutput(
          getCodeOutput(
            previewTemplate,
            {
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          )
        )

        toast({
          description: 'Metadata Updated'
        })

      }

      console.log(file)

      fileReader.readAsArrayBuffer(URL.createObjectURL(file))

  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout
        Form={
          <MetadataForm
            onSubmit={onFormSubmit}
          />
        }
        Aside={<HeadCopyCodeBlock code={headOutput} />}
      />
    </ThemeProvider>
  )
}

// Generate the HTML code for the output view by passing the supplied metadata through the mustache template
const getCodeOutput = (template, templateData) => mustache.render(template, templateData)

const HeadCopyCodeBlock = ({ code }: { code: string }) => {
  return (
    <div>
      <CodeBlock code={code} />
    </div>
  )
}

type LayoutProps = {
  Form: ReactNode
  Aside: ReactNode
}

const Layout = ({ Form, Aside }: LayoutProps) => (
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
