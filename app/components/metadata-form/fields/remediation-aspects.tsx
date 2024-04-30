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

import { remediationAspectsOptions } from '../field-options'

export const RemediationAspects = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='remediationAspects'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Aspects</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder='Select remediation aspects' />
              </SelectTrigger>
              <SelectContent>
                {remediationAspectsOptions.map(({ value, label }) => (
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
