import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import MultiSelectFormField from '@/components/ui/multi-select'
import { useForm } from 'react-hook-form'

import { accessibilityHazardsOptions } from '../field-options'

export const AccessibilityHazards = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='accessibilityHazards'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Accessibility Hazards</FormLabel>
          <FormControl>
            <MultiSelectFormField
              options={accessibilityHazardsOptions}
              defaultValue={field.value}
              onValueChange={field.onChange}
              placeholder='Select accessibility hazards'
              variant='inverted'
            />
          </FormControl>
          <FormDescription>
            What accessibility hazards are there?
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
