import { Label } from '@/components/ui/label'
import { ReactNode } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import MultiSelectFormField from '../ui/multi-select'

export type MultiSelectFieldProps = {
  label: string
  description?: string
  options: { value: string; label: string; icon?: ReactNode }[]
  controllerProps: UseControllerProps
}

export const MultiSelectField = ({
  label,
  description,
  options,
  controllerProps
}: MultiSelectFieldProps) => {
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <Label>{label}</Label>
      <MultiSelectFormField
        options={options}
        placeholder=''
        onValueChange={field.onChange}
      />
      {description && <p className='text-sm'>{description}</p>}
      {fieldState?.error?.message && <p>{fieldState.error.message}</p>}
    </div>
  )
}
