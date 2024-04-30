import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Separator } from '../ui/separator'
import { AccessibilityFeatures } from './fields/accessibility-features'
import { AccessibilityHazards } from './fields/accessibility-hazards'
import { AccessibilitySummary } from './fields/accessibility-summary'
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

export const MetadataForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const fields = [
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 justify-start'
      >
        {fields
          .sort((a, b) => a.order - b.order)
          .map((field) => (
            <div key={field.order}>
              <field.Component {...field} />
            </div>
          ))}
        <div className={cn('inline-flex', 'justify-end', 'w-full')}>
          <Button type='reset' variant='destructive' className='mr-3'>
            Reset Form
          </Button>
          <Button type='submit'>Update Metadata</Button>
        </div>
      </form>
    </Form>
  )
}
