import { generateMonacoLanguageConfig } from "@query-morph/language-definitions";

/**
 * MQL Language configuration for Monaco Editor
 * Auto-generated from @query-morph/language-definitions
 */
export const mqlLanguageConfig = generateMonacoLanguageConfig();

/**
 * Register MQL language with Monaco Editor
 */
export function registerMQLLanguage(monaco: any) {
  // Register the language
  monaco.languages.register({ id: "mql" });

  // Set the tokens provider
  monaco.languages.setMonarchTokensProvider("mql", mqlLanguageConfig);

  // Set language configuration
  monaco.languages.setLanguageConfiguration("mql", {
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["(", ")"],
      ["{", "}"],
      ["[", "]"],
    ],
    autoClosingPairs: [
      { open: "(", close: ")" },
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    surroundingPairs: [
      { open: "(", close: ")" },
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
  });
}
