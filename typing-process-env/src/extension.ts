// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
  workspace,
  ExtensionContext,
  Uri,
  FileSystemWatcher,
  window,
} from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import { parseEnv } from './utils/parseEnv'
import { genTypes } from './utils/genTypes'
import { mkdir } from './utils/mkdir'

interface ConfigFile {
  path: string
  output?: string
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: ExtensionContext) {
  console.log('"env-typings" is now active!')

  let listeners: { watcher: FileSystemWatcher; path: string }[] = []

  const configs = await workspace.findFiles('env-typings.json')

  const configsWatcher = workspace.createFileSystemWatcher(
    `**/env-typings.json`,
    false,
    false,
    false
  )

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
          'Please add "path" field in your config file at env-typings.json to let me know where your dev environment file is located so I can do the hard work for you 😎'
        )
      }

      const envWatcher = workspace.createFileSystemWatcher(
        path.join(e.fsPath.replace('env-typings.json', ''), config['path']),
        true,
        false,
        false
      )

      listeners.push({ watcher: envWatcher, path: e.fsPath })

      envWatcher.onDidChange(({ fsPath }) => {
        const envContent = fs.readFileSync(fsPath, 'utf-8')

        let parsedEnv = parseEnv(envContent)

        const writeLocation = path.join(
          e.fsPath.replace('env-typings.json', ''),
          config['output'] || '',
          'env.d.ts'
        )

        mkdir(writeLocation, 'env.d.ts')
        fs.writeFileSync(writeLocation, genTypes(parsedEnv))
      })

      context.subscriptions.push(envWatcher)
    } catch (error) {
      console.log(error)
      window.showInformationMessage(
        'Please add "path" field in your config file at env-typings.json to let me know where your dev environment file is located so I can do the hard work for you 😎'
      )
    }
  }

  configs.map(async (e) => watchEnv(e))
}

// this method is called when your extension is deactivated
export function deactivate() {}
