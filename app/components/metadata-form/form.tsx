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

export const MetadataForm = ({ onSubmit }: MetadataFormProps) => {
  const { control, handleSubmit, setValue } = useForm()

  const onReset = () => console.log('Reset')

  const prefillForm = () => {
    setValue('originalCreator', 'John Doe')
    setValue('filename', 'sporkeh.exe')
    setValue('language', 'en')
    setValue('title', 'I did it')
    setValue('partsRemediated', 'All')
    setValue('remediationComments', 'lorem ipsum...')
    setValue('accessibilitySummary', 'lorem ipsum...')
    setValue(
      'identifiers',
      'A book, Another book, Yet another book, This one is a magazine'
    )
    setValue('publisher', 'Penguin')
    setValue(
      'relatedIdentifiers',
      'A book, Another book, Yet another book, This one is a magazine'
    )
    setValue('seriesTitle', 'Wish it, Want it, Do it')
    setValue('seriesType', 'Self-help')
    setValue('seriesPosition', 'Chapter 2')
    setValue('remediatedBy', 'Joe Biden')

    alert('Form has been prefilled')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 justify-start'
      onReset={onReset}
    >
      <div id='form-actions' className='space-x-2'>
        <Button onClick={prefillForm}>Prefill Form</Button>
        <Button type='reset'>Reset</Button>
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
            selectOptions,
            extraInputProps
          }) => {
            const controllerProps = { name, control, defaultValue }
            return (
              <div key={order}>
                {type === 'file' && (
                  <FileField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    {...extraInputProps}
                  />
                )}
                {type === 'string' && (
                  <TextField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    {...extraInputProps}
                  />
                )}
                {type === 'select' && (
                  <SelectField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    options={selectOptions || []}
                    {...extraInputProps}
                  />
                )}
                {type === 'multi-select' && (
                  <MultiSelectField
                    controllerProps={controllerProps}
                    label={label}
                    description={description}
                    options={selectOptions || []}
                    {...extraInputProps}
                  />
                )}
              </div>
            )
          }
        )}
    </form>
  )
}
