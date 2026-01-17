# Project Overview & AI Handover Guide

## Project Goal: `query-morph`

A high-performance, isomorphic Query-to-Code engine. It provides a DSL to transform structural data (JSON/XML) by compiling the query into a pure JavaScript function specialized for that specific transformation.

## Core Architecture

### 1. Lexer (`src/lexer.ts`)

- Powered by **Chevrotain**.
- Defines tokens for keywords (`from`, `to`, `transform`, `section`, `set`, `clone`, `multiple`, `follow`) and literals.

### 2. Parser (`src/parser.ts`)

- Defines the grammar for the DSL.
- Produces a **Concrete Syntax Tree (CST)**.

### 3. Compiler (`src/compiler.ts`)

- Uses a CST Visitor to traverse the tree.
- Generates a **JavaScript string** representing the transformation function.
- **Key Logic**: Every section/transformation starts with a fresh `target = {}` to ensure no accidental data leak.
- **Set Directive**: `set targetField = sourceField` or `set targetField = "literal"`.
- **Section Directive**: Maps objects or arrays. `multiple` flag triggers a `.map()` loop.
- **Clone Directive**: Uses `Object.assign(target, source)` for shallow copying.

### 4. Runtime / Index (`src/index.ts`)

- **Isomorphic**: Runs in both Node.js and the Browser. Node-specific logic (like caching code to disk) is isolated in `src/node-cache.ts`.
- **Parsing/Serialization**: Uses `fast-xml-parser` for high-performance XML handling.
- **JS Formatting**: Integrates `js-beautify` to ensure the `.code` property of the compiled engine is readable.
- **Engine Interface**:
  ```typescript
  export interface MorphEngine {
    (source: any): any;
    code: string; // The beautified JS code
  }
  ```

## Current Features & State

- ✅ **Format Independence**: Supports `json`, `xml`, and raw `object` as both source and target.
- ✅ **Literals**: Support for strings and numbers in `set`.
- ✅ **Deep Nesting**: Unlimited recursive `section` directives.
- ✅ **Full/Selective Cloning**: `clone` or `clone(a, b)`.
- ✅ **Tests**: 19+ unit tests in `vitest`.
- ✅ **Playground**: A Vite + React + Monaco environment for real-time testing.

## Important Design Notes

- **Direct Mapping**: The `set` directive maps `target.key = source.val`.
- **Immutability**: The engine does **not** mutate the source object; it builds a new result object from scratch based on the query.
- **Sequential Execution**: Within a section, directives are executed in the order they appear.

## Next Development Steps

- **Performance**: Benchmark the `fast-xml-parser` vs alternatives.
- **Expressions**: Adding basic arithmetic or string concatenation in `set`.
- **Error Reporting**: Better CST-to-Code error mapping.
- **Schema Validation**: Optional schema enforcement for input/output.

---

_Created on 2026-01-17 for future AI continuity._
