import { cn } from '@/lib/utils'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { AccessibilityFeatures } from './fields/accessibility-features'
import { AccessibilityHazards } from './fields/accessibility-hazards'
import { AccessibilitySummary } from './fields/accessibility-summary'
import { File } from './fields/file'
import { Filename } from './fields/filename'
import { Format } from './fields/format'
import { Identifiers } from './fields/identifiers'
import { Language } from './fields/language'
import { OriginalCreator } from './fields/original-creator'
import { PartsRemediated } from './fields/parts-remediated'
import { Publisher } from './fields/publisher'
import { RelatedIdentifiers } from './fields/related-identifiers'
import { RemediatedBy } from './fields/remediated-by'
import { RemediationAspects } from './fields/remediation-aspects'
import { RemediationComments } from './fields/remediation-comments'
import { RemediationComplete } from './fields/remediation-complete'
import { RemediationSource } from './fields/remediation-source'
import { SeriesPosition } from './fields/series-position'
import { SeriesTitle } from './fields/series-title'
import { SeriesType } from './fields/series-type'
import { Title } from './fields/title'
import { Type } from './fields/type'
import { formSchema } from './schema'
import { useMetadataForm } from './useMetadataForm'

export type MetadataFormProps = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export const MetadataForm = ({ onSubmit }: MetadataFormProps) => {
  const form = useMetadataForm()

  // Field config
  const fields = [
    {
      Component: File,
      order: 1
    },
    {
      Component: OriginalCreator,
      order: 10
    },
    {
      Component: Filename,
      order: 20
    },
    {
      Component: RemediationComplete,
      order: 30
    },
    {
      Component: Format,
      order: 40
    },
    {
      Component: Language,
      order: 50
    },
    {
      Component: Title,
      order: 60
    },
    {
      Component: Type,
      order: 70
    },
    {
      Component: PartsRemediated,
      order: 80
    },
    {
      Component: RemediationComments,
      order: 90
    },
    {
      Component: AccessibilityFeatures,
      order: 100
    },
    {
      Component: AccessibilityHazards,
      order: 110
    },
    {
      Component: AccessibilitySummary,
      order: 120
    },
    {
      Component: Identifiers,
      order: 130
    },
    {
      Component: Publisher,
      order: 140
    },
    {
      Component: RelatedIdentifiers,
      order: 150
    },
    {
      Component: RemediationAspects,
      order: 160
    },
    {
      Component: RemediationSource,
      order: 170
    },
    {
      Component: SeriesTitle,
      order: 180
    },
    {
      Component: SeriesType,
      order: 190
    },
    {
      Component: SeriesPosition,
      order: 200
    },
    {
      Component: RemediationSource,
      order: 210
    },
    {
      Component: RemediatedBy,
      order: 220
    }
  ]

  const renderFields = () =>
    fields
      .sort((a, b) => a.order - b.order)
      .map((field) => (
        <div key={field.order}>
          <field.Component {...field} />
        </div>
      ))

  const preFillForm = () => {
    console.log('ok')
    form.setValue('filename', 'myfile.html', {
      shouldTouch: true,
      shouldValidate: true
    })
  }

  return (
    <Form {...form}>
      <Button variant='ghost' onClick={preFillForm}>
        Pre-fill Form
      </Button>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 justify-start'
      >
        {renderFields()}

        <div
          id='form-actions'
          className={cn('inline-flex', 'justify-end', 'w-full')}
        >
          <Button type='reset' variant='destructive' className='mr-3'>
            Reset Form
          </Button>
          <Button type='submit'>Update Metadata</Button>
        </div>
      </form>
    </Form>
  )
}
