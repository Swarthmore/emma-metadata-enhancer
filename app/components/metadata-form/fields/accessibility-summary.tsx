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

export const AccessibilitySummary = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='accessibilitySummary'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Accessibility Summary</FormLabel>
          <FormControl>
            <Input placeholder='Accessibility summary' {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
