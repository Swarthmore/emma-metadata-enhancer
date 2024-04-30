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

export const RemediationComplete = () => {
  const form = useForm()

  return (
    <FormField
      control={form.control}
      name='remediationComplete'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Complete</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder='Is the remediation complete?' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='No'>No</SelectItem>
                <SelectItem value='Yes'>Yes</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>Field description</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
