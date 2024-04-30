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

export const PartsRemediated = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='partsRemediated'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Parts Remediated</FormLabel>
          <FormControl>
            <Input placeholder='Parts remediated' {...field} />
          </FormControl>
          <FormDescription>
            The parts of the document that have been remediated.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
