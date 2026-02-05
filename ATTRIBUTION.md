# Attribution

This document provides detailed attribution for all data sources used in process.org.ai.

## Data Sources

### APQC Process Classification Framework (PCF) v7.4

- **Source**: [APQC Process Classification Framework](https://www.apqc.org/process-frameworks)
- **Provider**: American Productivity & Quality Center (APQC)
- **License**: Used under APQC's terms for open process classification
- **Data Used**: ~2,000 cross-industry process classifications with hierarchical IDs
- **Attribution Required**: Yes
- **Changes Made**: Semantic structuring, MDX generation, verb/object extraction, Business-as-Code modeling

**Citation**:
```
APQC Process Classification Framework (PCF) v7.4
American Productivity & Quality Center
https://www.apqc.org/process-frameworks
Cross-Industry Process Classification
```

## How We Use This Data

The process.org.ai ontology extends APQC PCF by:

1. **Hierarchical Structure**: 5-level hierarchy (Category -> Process Group -> Process -> Activity -> Task)
2. **Semantic Modeling**: Verb/object extraction for each process name
3. **MDX Documentation**: Structured documentation with actions, events, searches, and workflows
4. **Business-as-Code Integration**: Enabling `$.Process.execute()` patterns
5. **RACI Matrices**: Responsibility assignment for process activities
6. **SDK Integration**: Seamless integration with sdk.do and the .org.ai ecosystem

## Our License

This derived work is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). We apply CC BY-SA 4.0 to our derived work to ensure attribution and that improvements remain open.

## Required Attribution

When using process.org.ai, please include:

```
Based on process.org.ai (https://process.org.ai)
Data sourced from APQC Process Classification Framework v7.4
(https://www.apqc.org/process-frameworks)
American Productivity & Quality Center
Licensed under CC BY-SA 4.0
```

## Acknowledgments

We are grateful to the American Productivity & Quality Center (APQC) for developing and maintaining the Process Classification Framework, the de facto standard for business process classification used by organizations worldwide.

The PCF provides a common language for organizations to identify and communicate their business processes, enabling benchmarking, process improvement, and knowledge sharing across industries.

## Contact

For questions about attribution or licensing:
- Website: https://process.org.ai
- GitHub: https://github.com/org-ai/process.org.ai/issues
- Community: https://github.com/dot-org-ai/community

## Updates

This attribution document is maintained alongside the process.org.ai repository. Last updated: 2026-02-05
