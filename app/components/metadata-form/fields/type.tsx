import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { typeOptions } from '../field-options'
import { useMetadataForm } from '../useMetadataForm'

export const Type = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='type'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Type</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={''}>
              <SelectTrigger>
                <SelectValue placeholder='Type' />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
