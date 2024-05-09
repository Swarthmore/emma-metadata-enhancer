import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const SeriesPosition = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name='seriesPosition'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Series position</FormLabel>
          <FormControl>
            <Input placeholder='Series position' {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
