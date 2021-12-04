import { ParsedEnv } from '../types/parsedEnv'
import { isNumeric } from './isNum'

export const parseEnv = (fileContent: string): ParsedEnv[] => {
  return fileContent
    .split('\n')
    .map((e) => {
      let [key, type] = e.split('=')

      if (!key || !type || key.trim().startsWith('#')) {
        return { key: 'FILTER_RN', type: 'number' }
      }

      type = type.split('# variants:')[0].trim()

      const [_, variants] = e.split('variants:')
      let variantsObj = {}
      if (variants) {
        variantsObj = {
          enumVariants: variants
            .split('|')
            .map((e) => e.replace(/[`'"]/g, '').trim()),
        }
      }

      if (isNumeric(type)) {
        return { key: key.trim(), type: 'number', ...variantsObj }
      } else {
        return { key: key.trim(), type: 'string', ...variantsObj }
      }
    })
    .filter((e) => e.key !== 'FILTER_RN') as any
}
