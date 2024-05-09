import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const Language = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name='language'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Language</FormLabel>
          <FormControl>
            <Input placeholder='Language' {...field} />
          </FormControl>
          <FormDescription>
            The language the document is presented in.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
