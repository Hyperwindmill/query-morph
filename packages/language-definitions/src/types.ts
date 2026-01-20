/**
 * Documentation entry for a keyword or function
 */
export interface DocEntry {
  signature: string;
  description: string;
  parameters?: { name: string; description: string }[];
  returns?: string;
  example?: string;
  category?: "control" | "action" | "function" | "operator";
}

/**
 * Keyword definition
 */
export interface KeywordDef {
  name: string;
  category: "control" | "action";
  doc: DocEntry;
}

/**
 * Function definition
 */
export interface FunctionDef {
  name: string;
  doc: DocEntry;
}

/**
 * Operator definition
 */
export interface OperatorDef {
  symbol: string;
  category: "arithmetic" | "comparison" | "logical" | "assignment";
  precedence?: number;
}

/**
 * Complete language definition
 */
export interface LanguageDefinition {
  keywords: KeywordDef[];
  functions: FunctionDef[];
  operators: OperatorDef[];
  comments: {
    line: string;
    blockStart: string;
    blockEnd: string;
  };
}
