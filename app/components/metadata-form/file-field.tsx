import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UseControllerProps, useController } from 'react-hook-form'

export type FileFieldProps = {
  label: string
  description?: string
  controllerProps: UseControllerProps
}

export const FileField = ({
  label,
  description,
  controllerProps,
  ...rest
}: FileFieldProps) => {
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <Label>{label}</Label>
      <Input
        {...field}
        placeholder={controllerProps.name}
        type='file'
        accept='text/html'
        {...rest}
      />
      {description && <p className='text-sm'>{description}</p>}
      {fieldState?.error?.message && <p>{fieldState.error.message}</p>}
    </div>
  )
}
