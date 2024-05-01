import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fieldConfig } from '../field-config'
import { Button } from '../ui/button'
import { FileField } from './file-field'
import { MultiSelectField } from './multi-select-field'
import { formSchema } from './schema'
import { SelectField } from './select-field'
import { TextField } from './text-field'

export type MetadataFormProps = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export const MetadataForm = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (values: unknown) => console.log(values)

  const onReset = () => console.log('Reset')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 justify-start'
      onReset={onReset}
    >
      <div id='form-actions'>
        <Button type='submit'>Submit</Button>
      </div>

      {fieldConfig.fields
        .sort((a, b) => a.order - b.order)
        .map(
          ({
            label,
            name,
            order,
            type,
            defaultValue = '',
            description,
            selectOptions
          }) => {
            const controllerProps = { name, control, defaultValue }
            return (
              <div key={order}>
                {type === 'file' && (
                  <FileField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                  />
                )}
                {type === 'string' && (
                  <TextField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                  />
                )}
                {type === 'select' && (
                  <SelectField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    options={selectOptions || []}
                  />
                )}
                {type === 'multi-select' && (
                  <MultiSelectField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    options={selectOptions || []}
                  />
                )}
              </div>
            )
          }
        )}
    </form>
  )
}
