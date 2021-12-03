import { ParsedEnv } from '../types/parsedEnv'
import { isNumeric } from './isNum'

export const parseEnv = (fileContent: string): ParsedEnv[] => {
  return fileContent.split('\n').map((e) => {
    const [key, type] = e.split('=')

    if (isNumeric(type)) {
      return { key: key.trim(), type: 'number' }
    } else {
      return { key: key.trim(), type: 'string' }
    }
  })
}
