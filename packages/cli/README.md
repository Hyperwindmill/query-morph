# @morphql/cli

CLI tool for **morphql** - structural data transformation powered by the Morph Query Language (MorphQL).

## Installation

```bash
npm install -g @morphql/cli
```

## Usage

```bash
morphql [-f <input-file> | -i <raw-input>] [-t <output-file>] -q <query>
```

### Options

- `-f, --from <path>`: Path to the source file (JSON, XML).
- `-i, --input <string>`: Raw source content as a string.
- `-t, --to <path>`: Path to the destination file. If omitted, result is printed to `stdout`.
- `-q, --query <string>`: The MorphQL query to execute.
- `--cache-dir <path>`: Directory for compiled cache (default: `.compiled`).

### Examples

**Transforming a file to another file:**

```bash
morphql --from ./data.json --to ./output.xml -q "from json to xml transform set fullName = firstName + \" \" + lastName"
```

**Transforming raw input to stdout (useful for piping):**

```bash
morphql -i '{"name": "John"}' -q "from json to xml"
```

**Piping output to another tool:**

```bash
morphql --from data.json -q "from json to json" | jq .
```

> [!NOTE]
> All status and success messages are printed to `stderr`, ensuring that `stdout` contains only the transformation result.

## Features

- **Blazing Fast**: Compiles queries to native JavaScript for high performance.
- **Smart Caching**: Standardized file-system caching to avoid re-compilation of queries.
- **Format Agnostic**: Seamlessly convert between JSON and XML.
- **Shell Friendly**: Supports raw input strings and stdout output for easy integration into pipelines.

## License

MIT
