import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UseControllerProps, useController } from 'react-hook-form'

export type TextFieldProps = {
  label: string
  description?: string
  controllerProps: UseControllerProps
}

export const TextField = ({
  label,
  description,
  controllerProps
}: TextFieldProps) => {
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <Label>{label}</Label>
      <Input {...field} placeholder={controllerProps.name} />
      {description && <p className='text-sm'>{description}</p>}
      {fieldState?.error?.message && <p>{fieldState.error.message}</p>}
    </div>
  )
}
