import { head as headTemplate } from '@/templates/head'
import { preview as previewTemplate } from '@/templates/preview'
import mustache from 'mustache'
import { useState } from 'react'

import './App.css'
import { CodeBlock } from './components/code-block'
import { MetadataForm } from './components/metadata-form/form'
import { ThemeProvider } from './components/theme-provider'
import { Layout } from './components/ui/layout'
import { useToast } from './components/ui/use-toast'
import { cn, htmlDecode } from './lib/utils'

export const App = () => {
  const { toast } = useToast()

  const [head, setHead] = useState('')
  const [body, setBody] = useState('')

  const [showPreview, setShowPreview] = useState(false)
  const [showHead, setShowHead] = useState(false)

  const onFileChange = ({ fileText }) => {
    const generatedBody = getCodeOutput(previewTemplate, {
      content: fileText
    })
    setBody(generatedBody)
  }

  const onFormSubmit = (fields) => {
    const { accessibilityFeatures, accessibilityHazards, ...rest } = fields

    const generatedHead = getCodeOutput(headTemplate, {
      accessibilityFeatures: accessibilityFeatures
        ? accessibilityFeatures.join(';')
        : '', // mustache will discard the field if we give it an empty string
      accessibilityHazards: accessibilityHazards
        ? accessibilityHazards.join(';')
        : '',
      ...rest
    })

    setHead(generatedHead.replace(/(^[ \t]*\n)/gm, ''))

    toast({
      description: 'Metadata Updated'
    })

    if (head) {
      setShowHead(true)
    }

    if (head && body) {
      setShowPreview(true)
    }
  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout
        Form={
          <MetadataForm onSubmit={onFormSubmit} onFileChange={onFileChange} />
        }
        Aside={
          <div>
            {showHead ? (
              <CodeBlock code={head} />
            ) : (
              <div>Submit the form to generated metadata.</div>
            )}

            {showPreview && (
              <div
                id='document-preview'
                className={cn('my-3', 'border', 'p-5')}
              >
                <div dangerouslySetInnerHTML={{ __html: htmlDecode(body) }} />
              </div>
            )}
          </div>
        }
      />
    </ThemeProvider>
  )
}

// Generate the HTML code for the output view by passing the supplied metadata through the mustache template
const getCodeOutput = (template, templateData) =>
  mustache.render(template, templateData)
