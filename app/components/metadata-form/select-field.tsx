import { Label } from '@/components/ui/label'
import { ReactNode } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'

export type SelectFieldProps = {
  label: string
  description?: string
  options: { value: string; label: string; icon?: ReactNode }[]
  controllerProps: UseControllerProps
}

export const SelectField = ({
  label,
  description,
  options,
  controllerProps,
  ...rest
}: SelectFieldProps) => {
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <Label>{label}</Label>
      <Select
        onValueChange={field.onChange}
        defaultValue={options[0].value}
        {...rest}
      >
        <SelectTrigger>
          <SelectValue placeholder={controllerProps.name} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && <p className='text-sm'>{description}</p>}
      {fieldState?.error?.message && <p>{fieldState.error.message}</p>}
    </div>
  )
}
