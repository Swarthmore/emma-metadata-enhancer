import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const AccessibilitySummary = ({ form }) => {
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
