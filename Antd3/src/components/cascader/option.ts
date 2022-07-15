export interface Option {
  value: string | number
  label: string
  children?: Option[]
  showNext?: boolean
  active?: boolean
  addValue?: string
}

export type Options = Option[]