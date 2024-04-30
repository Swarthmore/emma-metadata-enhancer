import { ReactNode } from 'react'
import './App.css'
import { cn } from './lib/utils'
import { MetadataForm } from './components/metadata-form/MetadataForm'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

export const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Layout
        Form={<MetadataForm />}
        Preview={<div><ModeToggle /></div>}
      />

    </ThemeProvider>
  )

}

type LayoutProps = {
  Form: ReactNode
  Preview: ReactNode
}

const Layout = ({ Form, Preview }: LayoutProps) => (
  <div className={cn('w-screen', 'h-screen', 'min-w-screen', 'min-h-screen', 'flex')}>
    <div className={cn('flex-1')}>{Form}</div>
    <div className={cn('flex-1')}>{Preview}</div>
  </div>
)
