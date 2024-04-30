import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const SeriesTitle = ({ form }) => {
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
