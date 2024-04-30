import {
  accessibilityFeaturesOptions,
  accessibilityHazardsOptions,
  formatOptions,
  remediationAspectsOptions,
  remediationSourceOptions,
  typeOptions
} from './metadata-form/field-options'

type FieldType =
  | 'file'
  | 'string'
  | 'select'
  | 'multi-select'
  | 'number'
  | 'checkbox'
  | 'switch'

type FieldConfig = {
  fields: {
    name: string
    label: string
    description?: string
    type: FieldType
    order: number
    onFileChange?: (file: File) => any
    selectOptions?: { value: string; label: string }[]
  }[]
}

// Field config
export const fieldConfig: FieldConfig = {
  fields: [
    {
      type: 'file',
      name: 'file',
      label: 'HTML File to Enhance',
      order: 1
    },
    {
      name: 'originalCreator',
      label: 'Original creator',
      type: 'string',
      order: 10
    },
    {
      name: 'filename',
      label: 'Filename',
      type: 'string',
      order: 20
    },
    {
      name: 'remediationComplete',
      label: 'Remediation is complete',
      type: 'select',
      selectOptions: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ],
      order: 30
    },
    {
      name: 'format',
      label: 'Format',
      type: 'select',
      selectOptions: formatOptions,
      order: 40
    },
    {
      name: 'language',
      label: 'Language',
      type: 'string',
      order: 50
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      order: 60
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      selectOptions: typeOptions,
      order: 70
    },
    {
      name: 'partsRemediated',
      label: 'Parts remediated',
      type: 'string',
      order: 80
    },
    {
      name: 'remediationComments',
      label: 'Remediation comments',
      type: 'string',
      order: 90
    },
    {
      name: 'accessibilityFeatures',
      label: 'Accessibility features',
      type: 'multi-select',
      selectOptions: accessibilityFeaturesOptions,
      order: 100
    },
    {
      name: 'accessibilityHazards',
      label: 'Accessibility hazards',
      type: 'multi-select',
      selectOptions: accessibilityHazardsOptions,
      order: 110
    },
    {
      name: 'accessibilitySummary',
      label: 'Accessibility summary',
      type: 'string',
      order: 120
    },
    {
      name: 'identifiers',
      label: 'Identifiers',
      type: 'string',
      order: 130
    },
    {
      name: 'publisher',
      label: 'Publisher',
      type: 'string',
      order: 140
    },
    {
      name: 'relatedIdentifiers',
      label: 'Related identifiers',
      type: 'string',
      order: 150
    },
    {
      name: 'remediationAspects',
      label: 'Remediation Aspects',
      type: 'select',
      selectOptions: remediationAspectsOptions,
      order: 160
    },
    {
      name: 'remediationSource',
      label: 'Remediation Source',
      type: 'select',
      selectOptions: remediationSourceOptions,
      order: 170
    },
    {
      name: 'seriesTitle',
      label: 'Series title',
      type: 'string',
      order: 180
    },
    {
      name: 'seriesType',
      label: 'Series type',
      type: 'string',
      order: 190
    },
    {
      name: 'seriesPosition',
      label: 'Series position',
      type: 'string',
      order: 200
    },
    {
      name: 'remediatedBy',
      label: 'Remediated by',
      type: 'string',
      order: 220
    }
  ]
}
