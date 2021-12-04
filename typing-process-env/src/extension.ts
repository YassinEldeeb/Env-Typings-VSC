// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from 'fs'
import * as path from 'path'
import {
  CompletionItem,
  ExtensionContext,
  FileSystemWatcher,
  languages,
  MarkdownString,
  SnippetString,
  Uri,
  window,
  workspace,
} from 'vscode'
import { genTypes } from './utils/genTypes'
import { mkdir } from './utils/mkdir'
import { parseEnv } from './utils/parseEnv'

interface ConfigFile {
  path: string
  output?: string
}

const configFileName = 'env-typings.json'
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: ExtensionContext) {
  console.log('"env-typings" is now active!')

  let listeners: { watcher: FileSystemWatcher; path: string }[] = []

  const configs = await workspace.findFiles(`**/${configFileName}`)

  const configsWatcher = workspace.createFileSystemWatcher(
    `**/${configFileName}`,
    false,
    false,
    false
  )

  const configFileAutoComplete = languages.registerCompletionItemProvider(
    { language: 'json', scheme: 'file', pattern: `**/${configFileName}` },
    {
      provideCompletionItems() {
        const pathCompletion = new CompletionItem('"path"')
        pathCompletion.insertText = new SnippetString('"path": "${1}"')
        pathCompletion.documentation =
          new MarkdownString(`### path\nSpecify the path for your development .env file.
        `)

        const outputCompletion = new CompletionItem('"output"')
        outputCompletion.insertText = new SnippetString('"output": "${1}"')
        outputCompletion.documentation =
          new MarkdownString(`### output (optional) \nSpecify the path for the output of the generated typings.\n\n default = "." (root)
        `)

        // return all completion items as array
        return [pathCompletion, outputCompletion]
      },
    }
  )

  context.subscriptions.push(configFileAutoComplete)

  configsWatcher.onDidCreate((e) => {
    watchEnv(e)
  })

  configsWatcher.onDidChange((e) => {
    watchEnv(e)
  })

  configsWatcher.onDidDelete((e) => {
    watchEnv(e, true)
  })

  const watchEnv = (e: Uri, onlyRemove?: boolean) => {
    try {
      const existingListener = listeners.find(
        (listener) => listener.path === e.fsPath
      )

      if (existingListener) {
        existingListener.watcher.dispose()
        listeners = listeners.filter((e) => e.path !== existingListener.path)

        if (onlyRemove) return
      }

      const config: ConfigFile = JSON.parse(fs.readFileSync(e.fsPath, 'utf-8'))

      if (!config['path']) {
        return window.showInformationMessage(
          `Please add "path" field in your config file at ${configFileName} to let me know where your dev environment file is located so I can do the hard work for you 😎`
        )
      }

      const envWatcher = workspace.createFileSystemWatcher(
        path.join(e.fsPath.replace(`${configFileName}`, ''), config['path']),
        true,
        false,
        false
      )

      listeners.push({ watcher: envWatcher, path: e.fsPath })

      envWatcher.onDidChange(({ fsPath }) => {
        const envContent = fs.readFileSync(fsPath, 'utf-8')

        let parsedEnv = parseEnv(envContent)

        const writeLocation = path.join(
          e.fsPath.replace(`${configFileName}`, ''),
          config['output'] || '',
          'env.d.ts'
        )

        mkdir(writeLocation, 'env.d.ts')
        fs.writeFileSync(writeLocation, genTypes(parsedEnv))
      })

      context.subscriptions.push(envWatcher)
    } catch (error) {
      window.showInformationMessage(
        `Please add "path" field in your config file at ${configFileName} to let me know where your dev environment file is located so I can do the hard work for you 😎`
      )
    }
  }

  configs.map(async (e) => watchEnv(e))
}

// this method is called when your extension is deactivated
export function deactivate() {}
