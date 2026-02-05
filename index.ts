/**
 * process.org.ai
 *
 * APQC Process Classification Framework as Business-as-Code.
 * Defines ~2,000 cross-industry business processes.
 *
 * @example
 * ```typescript
 * import { Process, things } from 'process.org.ai'
 * ```
 *
 * @see https://process.org.ai
 * @license CC-BY-SA-4.0
 */

// Re-export types
export type { Process, ProcessLevel } from './types'

// Import types for runtime use
import type { Process } from './types'

/**
 * Collection of all process instances
 * Fetched from https://process.org.ai
 */
export const things: Promise<Process[]> = fetch('https://process.org.ai/things.json')
  .then((res) => res.json())
  .catch(() => [])

/**
 * Get a specific Process by code (pCFID)
 */
export async function get(code: string): Promise<Process | undefined> {
  const items = await things
  return items.find((item) => item.code === code || item['@id'] === `https://process.org.ai/${code}`)
}

/**
 * Search processes by name or description
 */
export async function search(query: string): Promise<Process[]> {
  const items = await things
  const q = query.toLowerCase()
  return items.filter((item) => item.name?.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q))
}

/**
 * Get a process by its APQC hierarchy ID (e.g., "1.1.1")
 */
export async function getByHierarchyId(hierarchyId: string): Promise<Process | undefined> {
  const items = await things
  return items.find((item) => item.hierarchyId === hierarchyId)
}

/**
 * Get all direct children of a process
 */
export async function getChildren(hierarchyId: string): Promise<Process[]> {
  const items = await things
  const prefix = hierarchyId + '.'
  const parentDepth = hierarchyId.split('.').length
  return items.filter((item) => item.hierarchyId.startsWith(prefix) && item.hierarchyId.split('.').length === parentDepth + 1)
}

/**
 * Get all processes in a category (by category number, e.g., "1" or "13")
 */
export async function getByCategory(categoryNum: string): Promise<Process[]> {
  const items = await things
  return items.filter((item) => item.hierarchyId.startsWith(categoryNum + '.') || item.hierarchyId === categoryNum + '.0')
}

/**
 * Domain metadata
 */
export const domain = {
  '@context': 'https://process.org.ai',
  '@id': 'https://process.org.ai',
  name: 'process.org.ai',
  parent: 'schema.org.ai',
  types: ['Process'],
} as const
