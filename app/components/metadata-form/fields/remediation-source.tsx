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
import { useForm } from 'react-hook-form'

import { remediationSourceOptions } from '../field-options'

export const RemediationSource = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='remediationSource'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Source</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
