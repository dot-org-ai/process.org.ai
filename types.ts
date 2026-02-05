/**
 * process.org.ai - Type Definitions
 *
 * Defines the Process type based on APQC Process Classification Framework.
 *
 * @see https://process.org.ai
 * @license CC-BY-SA-4.0
 */

/**
 * Base Schema type (JSON-LD compatible)
 */
export interface Schema {
  '@context'?: string
  '@type'?: string
  '@id'?: string
}

/**
 * Process hierarchy levels
 */
export type ProcessLevel = 'Category' | 'ProcessGroup' | 'Process' | 'Activity' | 'Task'

/**
 * Process - https://process.org.ai/Process
 */
export interface Process extends Schema {
  '@context': 'https://process.org.ai'
  '@type': 'https://process.org.ai/Process'
  '@id': string
  name: string
  description?: string
  code: string
  hierarchyId: string
  level: ProcessLevel
  verb: string
  object: string
  parent?: string
  children?: string[]
  metricsAvailable: boolean
}
