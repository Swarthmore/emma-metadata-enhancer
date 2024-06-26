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

import { remediationStatusOptions } from '../field-options'

export const RemediationStatus = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name='remediationStatus'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Status</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={''}>
              <SelectTrigger>
                <SelectValue placeholder='Remediation status' />
              </SelectTrigger>
              <SelectContent>
                {remediationStatusOptions.map(({ value, label }) => (
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
