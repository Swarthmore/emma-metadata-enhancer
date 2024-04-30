import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fieldConfig } from '../field-config'
import { Button } from '../ui/button'
import { Form, FormControl, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import MultiSelectFormField from '../ui/multi-select'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { ConnectedFormField } from './connected-field'
import { formSchema } from './schema'

export type MetadataFormProps = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export const MetadataForm = ({
  defaultValues,
  onSubmit,
  onReset
}: MetadataFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  console.table(form.getValues())

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 justify-start'
        onReset={onReset}
      >
        <div
          id='form-actions'
          className={cn('inline-flex', 'justify-start', 'w-full')}
        >
          <Button type='reset' variant='destructive' className='mr-3'>
            Reset Form
          </Button>
          <Button type='submit'>Update Metadata</Button>
        </div>

        {fieldConfig.fields.map((field) => (
          <ConnectedFormField
            key={field.name}
            name={field.name}
            control={form.control}
            render={({ field: controllerField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === 'string' && <Input {...controllerField} />}
                  {field.type === 'select' && (
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                        <SelectContent>
                          {field?.selectOptions?.map((opt) => (
                            <SelectItem value={opt.value} key={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </SelectTrigger>
                    </Select>
                  )}

                  {field.type === 'file' && <Input {...controllerField} />}

                  {field.type === 'multi-select' && (
                    <MultiSelectFormField
                      options={field.selectOptions}
                      defaultValue={controllerField.value}
                      onValueChange={controllerField.onChange}
                      variant='inverted'
                      placeholder='none'
                    />
                  )}
                </FormControl>
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  )
}
