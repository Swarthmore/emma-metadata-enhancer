import { useForm } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const File = () => {
  const form = useForm()

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
              accept='.html,text/html,.htm'
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
