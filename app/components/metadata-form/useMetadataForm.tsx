import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { formSchema } from './schema'

export const useMetadataForm = () =>
  useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      format: { label: '', value: '' },
      accessibilityFeatures: [],
      accessibilityHazards: [],
      accessibilitySummary: '',
      identifiers: '',
      language: '',
      originalCreator: '',
      publisher: '',
      partsRemediated: '',
      relatedIdentifiers: '',
      filename: '',
      remediatedBy: '',
      remediationAspects: { label: '', value: '' },
      remediationComments: '',
      remediationComplete: 'Yes',
      remediationSource: { label: '', value: '' },
      remediationStatus: { label: '', value: '' },
      seriesPosition: '',
      seriesTitle: '',
      seriesType: { label: '', value: '' },
      type: { label: '', value: '' },
      id: ''
    }
  })
