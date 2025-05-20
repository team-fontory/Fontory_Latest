import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rootDir = resolve(__dirname, '../')
const ASSETS_DIR = join(rootDir, 'src/shared/assets')
const OUTPUT_DIR = join(rootDir, 'src/shared/ui/Icon')
const OUTPUT_FILE = join(OUTPUT_DIR, 'iconMap.ts')

const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (_, char) => char.toUpperCase()).replace(/\.svg$/, '')

/**
 * 아이콘 맵 파일을 자동으로 생성하는 스크립트
 *
 * src/assets/ 내의 각 폴더에서 `.svg` 파일을 탐색하고,
 * `iconMap` 객체로 매핑하여
 * src/components/Icon/iconMap.ts 에 저장
 */

const generateIconMap = () => {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const folders = readdirSync(ASSETS_DIR).filter((folder) => {
    const folderPath = join(ASSETS_DIR, folder)
    return statSync(folderPath).isDirectory()
  })

  const imports: string[] = []
  const mapEntries: string[] = []

  for (const folder of folders) {
    const folderPath = join(ASSETS_DIR, folder)
    const files = readdirSync(folderPath).filter((file) => file.endsWith('.svg'))

    for (const file of files) {
      const importKey = file.replace('.svg', '')
      const varName = toCamelCase(`${folder}-${file}`)
      const importPath = `@/shared/assets/${folder}/${file}`

      imports.push(`import ${varName} from '${importPath}?react'`)
      mapEntries.push(`  '${importKey}': ${varName},`)
    }
  }

  const content = `// 자동 생성된 아이콘 파일
${imports.join('\n')}

import type { ComponentType, SVGProps } from 'react'

export const iconMap = {
${mapEntries.join('\n')}
}

export type IconName = keyof typeof iconMap
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
`

  writeFileSync(OUTPUT_FILE, content)
}

generateIconMap()
