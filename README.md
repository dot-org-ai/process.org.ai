# process.org.ai

APQC Process Classification Framework as Business-as-Code. Defines ~2,000 cross-industry business processes as programmable, typed API definitions.

## Overview

This package provides a complete ontology of business processes based on the APQC Process Classification Framework (PCF) v7.4. Each process is defined as an MDX file with structured metadata, actions, events, searches, and SDK usage examples.

## Hierarchy

The APQC PCF organizes processes into 5 levels:

| Level | Count | Example |
|-------|-------|---------|
| Category | 13 | 1.0 Develop Vision and Strategy |
| Process Group | 85 | 1.1 Define the business concept and long-term vision |
| Process | 353 | 1.1.1 Assess the external environment |
| Activity | ~1,367 | 1.1.1.1 Identify competitors |
| Task | ~192 | 1.1.5.3.1 Evaluate acquisition options |

## Categories

1. Develop Vision and Strategy
2. Develop and Manage Products and Services
3. Market and Sell Products and Services
4. Deliver Physical Products
5. Deliver Services
6. Manage Customer Service
7. Develop and Manage Human Capital
8. Manage Information Technology
9. Manage Financial Resources
10. Acquire, Construct, and Manage Assets
11. Manage Enterprise Risk, Compliance, Remediation, and Resiliency
12. Manage External Relationships
13. Develop and Manage Business Capabilities

## Usage

```typescript
import { get, search, getByHierarchyId, getChildren, getByCategory } from 'process.org.ai'

// Get a process by code
const process = await get('19945')

// Search processes
const results = await search('competitor')

// Get by hierarchy ID
const strategy = await getByHierarchyId('1.0')

// Get children of a process
const children = await getChildren('1.1.1')

// Get all processes in a category
const hrProcesses = await getByCategory('7')
```

## License

CC-BY-SA-4.0 - See [LICENSE](./LICENSE) and [ATTRIBUTION.md](./ATTRIBUTION.md)
