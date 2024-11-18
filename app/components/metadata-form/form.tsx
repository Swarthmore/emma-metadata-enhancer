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
    setValue('originalCreator', '-')
    setValue('filename', '-')
    setValue('language', '-')
    setValue('title', '-')
    setValue('partsRemediated', '-')
    setValue('remediationComments', '-')
    setValue('accessibilitySummary', '-')
    setValue(
      'identifiers',
      '-'
    )
    setValue('publisher', '-')
    setValue(
      'relatedIdentifiers',
      '-'
    )
    setValue('seriesTitle', '-')
    setValue('seriesType', '-')
    setValue('seriesPosition', '-')
    setValue('remediatedBy', '-')

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
        // Attempt to parse any maetadata that already exists so we can prefill the form
        const head = htmlDoc.querySelector('head')
        if (!head) {
          return
        }

        const originalCreator = head.querySelector('meta[name="originalCreator"]')
        const language = head.querySelector('meta[name="language"]')
        const partsRemediated = head.querySelector('meta[name="partsRemediated"]')
        const remediationComments = head.querySelector('meta[name="remediationComments"]')
        const title = head.querySelector('meta[name="title"]')
        const accessibilitySummary = head.querySelector('meta[name="accessibilitySummary"]')
        const identifiers = head.querySelector('meta[name="identifiers"]')
        const publisher = head.querySelector('meta[name="publisher"]')
        const relatedIdentifiers = head.querySelector('meta[name="relatedIdentifiers"]')
        const seriesTitle = head.querySelector('meta[name="seriesTitle"]')
        const seriesType = head.querySelector('meta[name="seriesType"]')
        const seriesPosition = head.querySelector('meta[name="seriesPosition"]')
        const remediatedBy = head.querySelector('meta[name="remediatedBy"]')

        if (originalCreator) {
          console.info('originalCreator', originalCreator.getAttribute('content'))
          setValue('originalCreator', originalCreator.getAttribute('content'))
        }

        if (language) {
          setValue('language', language.getAttribute('content'))
        }

        if (partsRemediated) {
          setValue('partsRemediated', partsRemediated.getAttribute('content'))
        }

        if (remediationComments) {
          setValue('remediationComments', remediationComments.getAttribute('content'))
        }

        if (title) {
          setValue('title', title.getAttribute('content'))
        }

        if (accessibilitySummary) {
          setValue('accessibilitySummary', accessibilitySummary.getAttribute('content'))
        }


        if (identifiers) {
          setValue('identifiers', identifiers.getAttribute('content'))
        }

        if (publisher) {
          setValue('publisher', publisher.getAttribute('content'))
        }

        if (relatedIdentifiers) {
          setValue('relatedIdentifiers', relatedIdentifiers.getAttribute('content'))
        }

        if (seriesTitle) {
          setValue('seriesTitle', seriesTitle.getAttribute('content'))
        }

        if (seriesType) {
          setValue('seriesType', seriesType.getAttribute('content'))
        }

        if (seriesPosition) {
          setValue('seriesPosition', seriesPosition.getAttribute('content'))
        }

        if (remediatedBy) {
          setValue('remediatedBy', remediatedBy.getAttribute('content'))
        }

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
