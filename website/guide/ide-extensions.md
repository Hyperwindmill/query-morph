# IDE Extensions

MorphQL provides first-class support for both VSCode and JetBrains IDEs, offering syntax highlighting, code execution, and documentation lookup to enhance your development workflow.

::: info Marketplace Status
The extensions are currently in **preview** and not yet available on public marketplaces. You can install them manually following the instructions below.
:::

## VSCode Extension

Full language support for Visual Studio Code.

### Features

- 🎨 **Syntax Highlighting**: Complete highlighting for `.morphql` files and `morphQL` tagged templates in JS/TS.
- ▶️ **Execute Queries**: Run transformations directly within the editor.
  - **With Input Data**: Click the "Play" button to open an input box.
  - **With Clipboard**: Right-click context menu option for quick testing.
  - **Selection**: Select a query in a TS file and execute it immediately.
- 🔍 **Diagnostics**: Real-time syntax error detection.
- 🚀 **Snippets**: Type `morphql-` to access common patterns like `transform`, `section`, and `if`.

### Installation

1.  Clone the repository.
2.  Navigate to `packages/vscode-extension`.
3.  Run `npm install` and `npm run compile`.
4.  Press `F5` to launch a new VSCode window with the extension loaded (Development Host).

Alternatively, you can package it into a `.vsix` file:

```bash
npm install -g @vscode/vsce
vsce package
# Then install the .vsix in your main VSCode instance
```

## JetBrains Extension

Native support for IntelliJ IDEA, WebStorm, PhpStorm, and other JetBrains IDEs.

### Features

- 🎨 **Syntax Highlighting**: Full color coding for keywords, functions, and operators.
- 💉 **Language Injection**: Automatically highlights `morphQL` template strings in TypeScript/JavaScript.
- 📄 **Documentation**: Hover over keywords and functions to see usage details.
- 🖼️ **File Icons**: Dedicated icons for `.morphql` files.

### Installation

1.  **Build the Plugin**:

    ```bash
    cd packages/jetbrains-extension
    ./gradlew build
    ```

    The artifact will be created at `build/distributions/morphql-jetbrains-0.X.X.zip`.

2.  **Install from Disk**:
    - Open **Settings/Preferences** > **Plugins**.
    - Click the ⚙️ gear icon and select **Install Plugin from Disk...**.
    - Select the generated `.zip` file.
    - Restart your IDE.
