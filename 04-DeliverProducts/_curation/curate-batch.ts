#!/usr/bin/env npx tsx

import { readFile, writeFile } from 'fs/promises'
import { execSync } from 'child_process'

const ROOT = import.meta.dirname

// Get all TODO files
const files = execSync(
  `grep -rl "| TODO |" /Users/nathanclevenger/projects/headless.ly/.org.ai/processes/04-DeliverProducts/ --include="*.mdx"`,
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .sort()

interface Frontmatter {
  name: string
  code: string
  hierarchyId: string
  category: string
  processGroup: string
  level: string
  verb: string
  object: string
  metricsAvailable: boolean
  parent: string
}

function parseFrontmatter(content: string): Frontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) throw new Error('No frontmatter found')
  const fm: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*'?(.+?)'?$/)
    if (m) fm[m[1]] = m[2]
  }
  return fm as unknown as Frontmatter
}

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join('')
}

function toPackageName(verb: string, obj: string): string {
  return `${verb}-${obj}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function toFunctionName(verb: string, obj: string): string {
  const words = `${verb} ${obj}`.split(/\s+/)
  return words
    .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join('')
}

console.log(`Found ${files.length} files to process`)

for (const file of files) {
  console.log(`Processing: ${file}`)
}
