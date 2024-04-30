import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'
import { Input } from '../../ui/input'

export const File = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name='file'
      render={({ field }) => (
        <FormItem>
          <FormLabel>File</FormLabel>
          <FormControl>
            <Input id='file' type='file' accept='text/html' {...field} />
          </FormControl>
          <FormDescription>HTML file to enhance 🪄.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
