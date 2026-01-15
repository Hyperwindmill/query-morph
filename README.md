# query-morph

A modern TypeScript library for structural query transformations, serving as an engine for mapping and conversion languages.

## Project Goal

The primary objective of `query-morph` is to provide a robust engine for defining and executing structural transformations across different data formats.

It aims to support a domain-specific language (DSL) for mapping, such as:
`from static as json to return as xml transform set field1=newfield section lines( set lineNo=nLine )`

## Generic Guidelines

- **Format Agnostic**: Support transformation between various formats (JSON, XML, YAML, etc.).
- **DSL Driven**: Provide the underlying engine to parse and execute transformation expressions.
- **Structural Mapping**: Focus on field-level mapping and nested section transformations.
- **Extensibility**: Allow for custom transformation functions and formatting rules.

## Getting Started

### Installation

```bash
npm install query-morph
```

### Usage

```typescript
import { greet } from 'query-morph';

console.log(greet({ name: 'World' }));
```

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### Lint

```bash
npm run lint
```
