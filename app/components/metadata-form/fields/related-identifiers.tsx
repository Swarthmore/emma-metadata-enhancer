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

export const RelatedIdentifiers = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='relatedIdentifiers'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Related identifiers</FormLabel>
          <FormControl>
            <Input placeholder='related identifiers' {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
