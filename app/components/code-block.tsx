import { cn } from '@/lib/utils'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export type CodeBlockProps = {
  code: string
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <div id='code-block'>
      <CopyToClipboardButton code={code} onCopy={console.log} />
      <SyntaxHighlighter language='html' style={docco}>
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
  <div className={cn('absolute', 'top-0', 'right-0', 'p-2')}>
    <CopyToClipboard text={code} onCopy={onCopy}>
      <span>Copy</span>
    </CopyToClipboard>
  </div>
)
