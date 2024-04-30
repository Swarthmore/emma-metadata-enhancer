import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'
import { useMetadataForm } from '../useMetadataForm'

export const File = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='file'
      render={({ field }) => (
        <FormItem>
          <FormLabel>File</FormLabel>
          <FormControl>
            <Input
              id='file'
              type='file'
              // accept='.html,text/html,.htm'
              {...field}
            />
          </FormControl>
          <FormDescription>HTML file to enhance 🪄.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
