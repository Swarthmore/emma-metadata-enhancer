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

export const Title = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='title'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder='publisher' {...field} />
          </FormControl>
          <FormDescription>The title of the document.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
