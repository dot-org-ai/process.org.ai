# Attribution

This document provides detailed attribution for all data sources used in process.org.ai.

## Data Sources

### APQC Process Classification Framework (PCF) v7.4

- **Source**: [APQC PCF](https://www.apqc.org/process-frameworks)
- **License**: Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Copyright**: APQC (American Productivity & Quality Center)
- **Data Used**: 1,921 business processes across 13 categories
- **Attribution Required**: Yes
- **Changes Made**: Semantic parsing into GraphDL patterns, MDXLD generation, hierarchical navigation

**Citation**:
```
APQC Process Classification Framework v7.4
https://www.apqc.org/process-frameworks
Licensed under CC BY 4.0
```

## How We Use This Data

The process.org.ai ontology extends APQC PCF by:

1. **Semantic Naming**: Converting process names to GraphDL patterns (verb.Object.preposition.Object)
2. **MDXLD Generation**: Creating structured MDX files with frontmatter and metadata
3. **Expansion**: Splitting compound processes ("and"/"or") into individual files (1,921 → 2,704 files)
4. **Hierarchical Navigation**: Building 5-level hierarchy with parent-child relationships
5. **Business-as-Code Integration**: Enabling semantic patterns for `$.Process.develop.Vision` usage
6. **SDK Integration**: Seamless integration with sdk.do and the .org.ai ecosystem

## Our License

This derived work is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), which adds the ShareAlike requirement to ensure derivatives remain open while maintaining compatibility with the original APQC license.

## Required Attribution

When using process.org.ai, please include:

```
Based on process.org.ai (https://process.org.ai)
Data sourced from APQC Process Classification Framework v7.4 (https://www.apqc.org)
Licensed under CC BY-SA 4.0
```

## Acknowledgments

We are grateful to APQC (American Productivity & Quality Center) for creating and maintaining the Process Classification Framework, the world's most widely used process framework. Their work enables organizations to benchmark, improve, and understand business processes across industries.

APQC has been a pioneer in process management since 1977, providing research, benchmarking, and best practices to organizations worldwide.

## Contact

For questions about attribution or licensing:
- Website: https://process.org.ai
- GitHub: https://github.com/dot-org-ai/process.org.ai/issues
- Community: https://github.com/dot-org-ai/community

## Updates

This attribution document is maintained alongside the process.org.ai repository. Last updated: 2025-01-17
