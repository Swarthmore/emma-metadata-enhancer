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

export const RemediatedBy = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='remediatedBy'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediated By</FormLabel>
          <FormControl>
            <Input placeholder='Remediated by' {...field} />
          </FormControl>
          <FormDescription>
            The name of the person who remediated the document.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
