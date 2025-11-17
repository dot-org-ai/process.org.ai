---
$id: https://process.org.ai
$context: https://schema.org
$type: SoftwareSourceCode
name: process.org.ai
description: APQC Process Classification Framework with 1,921 processes for Business-as-Code
programmingLanguage: TypeScript
license: CC-BY-SA-4.0
author:
  $type: Organization
  name: .do Platform Team
  url: https://platform.do
sourceOrganization:
  $type: Organization
  name: APQC
  url: https://www.apqc.org
version: 1.0.0
datePublished: 2025-01-17
---

# process.org.ai

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

APQC business process ontology with 2,704 semantic process definitions.

## Overview

This repository contains MDX documentation for all APQC PCF processes, organized hierarchically with semantic GraphDL naming patterns.

**Data Source**: [APQC Process Classification Framework v7.4](https://www.apqc.org/process-frameworks) (CC BY 4.0)

{extensions}

## Structure

```
process.org.ai/
├── things/          # 2,704 MDX files
├── scripts/         # Generation and transformation scripts
├── site/            # Fumadocs documentation site
└── package/         # NPM package with mdxe build
```

## Features

- **2,704 MDX files** (1.41x expansion from "and"/"or" splitting)
- GraphDL semantic naming (verb.Object.preposition.Object)
- 5-level hierarchy (Category → Process Group → Process → Activity → Task)
- Parent-child navigation
- Business-as-Code integration
- APQC code cross-reference

## License

This work is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](LICENSE) (CC BY-SA 4.0).

**Data Attribution**: Based on APQC Process Classification Framework v7.4 (https://www.apqc.org/process-frameworks) licensed under CC BY 4.0.

See [ATTRIBUTION.md](ATTRIBUTION.md) for complete data source details.

## Required Attribution

```
Based on process.org.ai (https://process.org.ai)
Data sourced from APQC Process Classification Framework v7.4 (https://www.apqc.org/process-frameworks)
Licensed under CC BY-SA 4.0
```

## Installation

```bash
npm install process.org.ai
# or
pnpm add process.org.ai
# or
yarn add process.org.ai
```

## Usage

```typescript
import {{ $ }} from 'sdk.do'
import type {{ Process }} from 'process.org.ai'

// Semantic patterns
const item = await $.Process.create({{
  $type: 'Process',
  name: 'Example'
}})

const result = await $.Process.get('item-id')
```

## Links

- **Website**: https://process.org.ai
- **GitHub**: https://github.com/dot-org-ai/process.org.ai
- **Package**: https://www.npmjs.com/package/process.org.ai
- **Original Source**: https://www.apqc.org/process-frameworks
- **.org.ai Ecosystem**: https://github.com/dot-org-ai

## Related Ontologies

- [schema.org.ai](https://schema.org.ai) - Schema.org vocabulary
- [verbs.org.ai](https://verbs.org.ai) - Business verbs and actions
- [process.org.ai](https://process.org.ai) - Business processes
- [graph.org.ai](https://graph.org.ai) - Semantic graph database

## Community

- **Issues**: https://github.com/dot-org-ai/process.org.ai/issues
- **Discussions**: https://github.com/dot-org-ai/community/discussions
- **Discord**: https://discord.gg/dotdo
