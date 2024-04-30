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

export const Filename = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='filename'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Filename</FormLabel>
          <FormControl>
            <Input placeholder='Filename' {...field} />
          </FormControl>
          <FormDescription>The document filename.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
