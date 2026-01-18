# query-morph

A high-performance, isomorphic Query-to-Code engine. It provides the **Morph Query Language** (MQL) to transform structural data (JSON, XML, or Objects) by compiling queries into specialized, pure JavaScript functions.

## Current status

Please note that this project is in a very early stage and is not ready for production use. It is currently under active development and subject to change.

## Key Features

- 🚀 **Performance**: Compiles DSL to native JS for maximum execution speed.
- 🌐 **Isomorphic**: Runs seamlessly in Node.js and the Browser.
- 🧩 **Format Agnostic**: Input and output can be JSON, XML, or raw Objects.
- ➗ **Expressions**: Support for arithmetic, string concatenation, and unary minus.
- 🔀 **Conditional Logic**: `if` function with comparison and logical operators.
- 🛠️ **Modular Functions**: Extensible function registry (e.g., `substring`, `xmlnode`, `extractNumber`, `uppercase`, `lowercase`, `text`, `number`).
- 🔄 **Structural Mapping**: Easy handling of nested objects and arrays (`multiple`).
- 🎨 **Playground**: Real-time editor to test and visualize generated code.

## Installation

```bash
npm install @query-morph/core
```

## Usage Example

```typescript
import { compile } from "@query-morph/core";

// 1. Structural Transformation
const query = `
  from object to json
  transform
    set fullName = firstName + " " + lastName
    set shortSku = substring(sku, 0, 3)
    set total = (price * amount) - discount
    section header(
      set id = orderId
    )
`;

const engine = await compile(query);

const source = {
  firstName: "John",
  lastName: "Doe",
  sku: "ABC12345",
  price: 100,
  amount: 2,
  discount: 10,
  orderId: "ORD-99",
};

const result = engine(source);
console.log(result);
// Output: JSON string with fullName, shortSku, total, and header object

// 2. Pure Format Conversion (No Transform)
const convertQuery = `from json to xml`;
const convertEngine = await compile(convertQuery);
const xmlResult = convertEngine('{"foo":"bar"}');
// Output: <root><foo>bar</foo></root>
```

## DSL Snippets

### Arithmetic & Concatenation

`set total = price + tax`
`set label = "Item: " + name`

### Conditional Logic

**Expressions (Values):**
`set status = if(age >= 18, "adult", "minor")`

**Actions (Blocks):**

```
if (isPremium) (
  set discount = amount * 0.2
  set badge = "VIP"
) else (
  set discount = 0
  set badge = "Standard"
)
```

### Deleting Properties

`delete password` - Removes a property from the target object

### Functions & Negative Indices

`set lastChars = substring(sku, -5)` - Get last 5 characters
`set first3 = substring(sku, 0, 3)` - Get first 3 characters (start, length)

### Array Mapping

`section multiple items( set sku = itemSku )`

## Monorepo Structure

This repository uses **npm workspaces** to manage multiple packages:

```
query-morph/
├── packages/
│   ├── core/        # @query-morph/core - The main library
│   └── playground/  # @query-morph/playground - Interactive editor
├── package.json     # Workspace configuration
└── README.md
```

## Development

### Prerequisites

```bash
npm install    # Installs all workspace dependencies
npm run build  # Builds @query-morph/core
```

### Available Scripts (from root)

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `npm run build`      | Build the core library          |
| `npm run test`       | Run tests for core library      |
| `npm run playground` | Start the playground dev server |
| `npm run dev`        | Watch mode for core library     |
| `npm run build:all`  | Build all packages              |
| `npm run test:all`   | Run tests for all packages      |

### Development Workflow

```bash
# Terminal 1: Watch library changes
npm run dev

# Terminal 2: Run playground
npm run playground
```

Changes to `@query-morph/core` are automatically picked up by Vite's HMR.

## Packages

| Package                                          | Description               |
| ------------------------------------------------ | ------------------------- |
| [@query-morph/core](./packages/core)             | The transformation engine |
| [@query-morph/playground](./packages/playground) | Interactive web editor    |

## License

MIT
