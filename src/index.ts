/**
 * Query Morph - A modern TypeScript library for structural query transformations.
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
