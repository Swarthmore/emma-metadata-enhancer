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

export const RemediatedBy = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='remediated-by'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediated By</FormLabel>
          <FormControl>
            <Input placeholder='Remediated by' {...field} />
          </FormControl>
          <FormDescription>
            The name of the person who remediated the document.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
