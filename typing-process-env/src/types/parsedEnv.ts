export interface ParsedEnv {
  key: string
  type: 'string' | 'number'
  enumVariants?: string[]
}
