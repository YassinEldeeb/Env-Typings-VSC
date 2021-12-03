// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { workspace, ExtensionContext } from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import { parseEnv } from './utils/parseEnv'
import { genTypes } from './utils/genTypes'

interface ConfigFile {
  'env-location': string
  'output-location': string
  enums?: {
    [key: string]: string[]
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: ExtensionContext) {
  console.log('"env-typings" is now active!')

  const configs = await workspace.findFiles('env-typings.json')

  configs.map(async (e) => {
    const config: ConfigFile = JSON.parse(fs.readFileSync(e.fsPath, 'utf-8'))

    const envWatcher = workspace.createFileSystemWatcher(
      `**/${config['env-location']}`,
      true,
      false,
      false
    )

    envWatcher.onDidChange(({ fsPath }) => {
      const envContent = fs.readFileSync(fsPath, 'utf-8')

      let parsedEnv = parseEnv(envContent)

      try {
        if (config.enums) {
          Object.keys(config.enums).forEach((e) => {
            parsedEnv.forEach((env, i) => {
              if (env.key === e) {
                // @ts-ignore
                parsedEnv[i].enumVariants = config.enums[e]
              }
            })
          })
        }
      } catch (error) {
        console.log(error)
      }

      fs.writeFileSync(
        path.join(
          e.fsPath.replace('env-typings.json', ''),
          config['output-location'],
          'env.d.ts'
        ),
        genTypes(parsedEnv)
      )
    })

    context.subscriptions.push(envWatcher)
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}
