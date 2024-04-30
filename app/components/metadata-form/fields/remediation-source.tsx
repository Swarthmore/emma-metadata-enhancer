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

import { remediationSourceOptions } from '../field-options'
import { useMetadataForm } from '../useMetadataForm'

export const RemediationSource = () => {
  const form = useMetadataForm()

  return (
    <FormField
      control={form.control}
      name='remediationSource'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Source</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={''}>
              <SelectTrigger>
                <SelectValue placeholder='Select remediation source' />
              </SelectTrigger>
              <SelectContent>
                {remediationSourceOptions.map(({ value, label }) => (
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
