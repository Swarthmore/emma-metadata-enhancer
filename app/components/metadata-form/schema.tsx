import { z } from 'zod'

import {
  accessibilityFeaturesOptions,
  accessibilityHazardsOptions,
  formatOptions,
  remediationAspectsOptions,
  remediationSourceOptions,
  remediationStatusOptions,
  seriesTypeOptions,
  typeOptions
} from './field-options'

const optionSchema = z.object({
  label: z.string(),
  value: z.string()
})

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['text/html']

export const formSchema = z.object({
  id: z.string(),
  file: z
    .any()
    // To not allow files other than images
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), {
      message: '.html and .html files are accepted.'
    })
    // To not allow files larger than 5MB
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`
    }),
  originalCreator: z.string().min(1),
  filename: z.string().min(1),
  remediationComplete: z.enum(['Yes', 'No']),
  format: optionSchema.refine((data) =>
    formatOptions.map((option) => option.value).includes(data.value)
  ),
  language: z.string().min(1),
  partsRemediated: z.string().min(1),
  remediationComments: z.string().min(1),
  remediationStatus: optionSchema.refine((data) =>
    remediationStatusOptions.map((option) => option.value).includes(data.value)
  ),
  title: z.string().min(1),
  type: optionSchema.refine((data) =>
    typeOptions.map((option) => option.value).includes(data.value)
  ),
  accessibilityFeatures: z
    .array(optionSchema)
    .refine((data) =>
      data.every((item) =>
        accessibilityFeaturesOptions
          .map((option) => option.value)
          .includes(item.value)
      )
    ),
  accessibilityHazards: z
    .array(optionSchema)
    .refine((data) =>
      data.every((item) =>
        accessibilityHazardsOptions
          .map((option) => option.value)
          .includes(item.value)
      )
    ),
  accessibilitySummary: z.string().optional(),
  identifiers: z.string().optional(),
  publisher: z.string().optional(),
  relatedIdentifiers: z.string().optional(),
  remediationAspects: optionSchema.refine((data) =>
    remediationAspectsOptions.map((option) => option.value).includes(data.value)
  ),
  remediatedBy: z.string().min(1),
  seriesPosition: z.string().optional(),
  seriesTitle: z.string().optional(),
  seriesType: optionSchema.refine((data) =>
    seriesTypeOptions.map((option) => option.value).includes(data.value)
  ),
  remediationSource: optionSchema.refine((data) =>
    remediationSourceOptions.map((option) => option.value).includes(data.value)
  )
})
