import { ParsedEnv } from '../types/parsedEnv'

export const genTypes = (parsedEnv: ParsedEnv[]): string => {
  const indexTemplate = `declare namespace NodeJS {
  export interface ProcessEnv {
#![Vars]
  }
}
`

  const description = (
    type: 'string' | 'number',
    key: string,
    enumVariants: string[] | undefined
  ) => {
    const prefixedKey = `process.env.${key}`
    const example = type === 'number' ? `parseInt(${prefixedKey})` : prefixedKey

    const checksForVariants = () => {
      return `${example} === ${
        type === 'number' ? enumVariants![0] : `"${enumVariants![0]}"`
      }`
    }

    return `/**
     * @example
     * \`\`\`
    ${enumVariants ? checksForVariants() : example}
    \`\`\`
     */`
  }

  const getType = (key: string) =>
    parsedEnv.find((e) => e.key === key && e.enumVariants)
      ? parsedEnv
          .find((e) => e.key === key)!
          .enumVariants?.map((e) => `"${e}"`)
          .join(' | ')
      : 'string'

  const fieldTemplate = ({ key, type, enumVariants }: ParsedEnv) =>
    `${description(type, key, enumVariants)}
    ${key}: ${getType(key)}`

  return indexTemplate.replace(
    '#![Vars]',
    parsedEnv.map((e) => fieldTemplate(e)).join('\n')
  )
}
