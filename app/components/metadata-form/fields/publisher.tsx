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

export const Publisher = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='publisher'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Publisher</FormLabel>
          <FormControl>
            <Input placeholder='publisher' {...field} />
          </FormControl>
          <FormDescription>The name of the publisher.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
