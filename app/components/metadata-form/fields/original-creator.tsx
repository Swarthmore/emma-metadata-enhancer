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

export const OriginalCreator = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='originalCreator'
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
