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

export const SeriesTitle = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='seriesTitle'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Series Title</FormLabel>
          <FormControl>
            <Input placeholder='Series title' {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
