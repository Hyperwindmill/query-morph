/**
 * Query Morph - A modern TypeScript engine for structural query transformations and data mapping.
 */

export interface GreetOptions {
  name: string;
}

/**
 * Returns a greeting message.
 */
export function greet(options: GreetOptions): string {
  return `Hello, ${options.name}! Welcome to query-morph.`;
}
