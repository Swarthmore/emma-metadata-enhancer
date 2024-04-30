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

export const OriginalCreator = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='original-creator'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Original Creator</FormLabel>
          <FormControl>
            <Input placeholder='Original creator' {...field} />
          </FormControl>
          <FormDescription>
            The original creator of the document.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
