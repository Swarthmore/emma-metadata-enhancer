import { useController } from 'react-hook-form'

export const ConnectedFormField = ({ control, name, render }) => {
  const { field } = useController({ name, control })
  return render({ field })
}
