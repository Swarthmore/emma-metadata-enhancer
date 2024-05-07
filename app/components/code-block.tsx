import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

export type CodeBlockProps = {
  code: string
}

export const CodeBlock = ({ code }: CodeBlockProps) => {

  const { toast } = useToast()

  return (
    <div id='code-block' className="border">
      <CopyToClipboardButton code={code} onCopy={() => toast({ description: 'Metadata copied to clipboard'})} />
      <SyntaxHighlighter language='html' style={googlecode}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export type CopyToClipboardButtonProps = {
  code: string
  onCopy: (text: string, result: boolean) => void
}

export const CopyToClipboardButton = ({
  code,
  onCopy
}: CopyToClipboardButtonProps) => (
  <div className={cn('absolute', 'top-0', 'right-0', 'p-6')}>
    <Button size="sm" variant="ghost">
      <CopyToClipboard text={code} onCopy={onCopy}>
        <span className={cn('inline-flex', 'items-center')}><Copy className="mr-1 h-4 w-4" /> Copy</span>
      </CopyToClipboard>
    </Button>
  </div>
)
