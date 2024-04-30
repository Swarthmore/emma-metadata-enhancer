import {
  FormControl,
  FormDescription,
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

import { seriesTypeOptions } from '../field-options'
import { useMetadataForm } from '../useMetadataForm'

export const SeriesType = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='seriesType'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Series Type</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={''}>
              <SelectTrigger>
                <SelectValue placeholder='Select series type' />
              </SelectTrigger>
              <SelectContent>
                {seriesTypeOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
