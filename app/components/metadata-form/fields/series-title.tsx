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

export const SeriesTitle = () => {
  const form = useMetadataForm()

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
