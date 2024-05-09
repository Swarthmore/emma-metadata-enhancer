import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fieldConfig } from '../field-config'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { MultiSelectField } from './multi-select-field'
import { formSchema } from './schema'
import { SelectField } from './select-field'
import { TextField } from './text-field'

export type MetadataFormProps = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
  onFileChange: ({
    filename,
    filesize,
    fileText
  }: {
    filename: string
    filesize: string
    fileText: string
  }) => void
}

export const MetadataForm = ({ onSubmit, onFileChange }: MetadataFormProps) => {
  const [filename, setFilename] = useState('')
  const [fileText, setFileText] = useState('')
  const [filesize, setFilesize] = useState('')

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

  // Handle what happens when a file is dropped into the dropzone
  const handleDrop = useCallback((files: File[]) => {
    const textDecoder = new TextDecoder('utf-8')
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('FileReader was aborted')
      reader.onerror = () => console.log('FileReader error')
      reader.onload = () => {
        const buff = reader.result
        const txt = textDecoder.decode(buff)
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(txt, 'text/html')
        const body = htmlDoc.querySelector('body')
        setFileText(body.outerHTML)
        setFilename(file.name)
        setFilesize(file.size.toString())
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  // Set up react-dropzone to accept only html files
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      'text/html': ['.html', '.htm']
    }
  })

  useEffect(() => {
    onFileChange({ fileText, filename, filesize })
  }, [fileText, filename, filesize])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 justify-start'
      onReset={onReset}
    >
      <div
        id='form-actions'
        className='space-x-2 sticky top-0 bg-zinc-300 dark:bg-zinc-900 p-5 rounded border rounded-md'
      >
        <h1 className='text-2xl mb-3'>EMMA Metadata Enhancer</h1>
        <Button onClick={prefillForm} variant='ghost'>
          Prefill Form
        </Button>
        <Button type='submit' variant='secondary'>
          Submit
        </Button>
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
                  <div
                    {...getRootProps()}
                    className={`border-4 p-5 my-3 ${fileText.length > 0 ? 'border-solid border-green-500 bg-green-400 text-black' : 'border-dashed border-sky-500'}`}
                  >
                    <Input {...getInputProps()} />
                    {fileText.length > 0 ? (
                      <>
                        <p>
                          Uploaded {filename} - {filesize} bytes
                        </p>
                        <p>
                          Drag 'n' drop some files here, or click to replace{' '}
                          {filename}
                        </p>
                      </>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
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
