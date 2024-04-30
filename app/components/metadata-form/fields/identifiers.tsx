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

export const Identifiers = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='identifiers'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Identifiers</FormLabel>
          <FormControl>
            <Input placeholder='Identifiers' {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
