import { describe, it, expect } from 'vitest';
import { compile } from '../index.js';

describe('Functions in expressions', async () => {
  it('should support substring with 3 arguments', async () => {
    const query = `
      from object to object
      transform
        set short = substring(sku, 0, 3)
    `;
    const engine = await compile(query);
    const source = { sku: 'ABC12345' };
    const result = engine(source);
    expect(result.short).toBe('ABC');
  });

  it('should support substring with 2 arguments', async () => {
    const query = `
      from object to object
      transform
        set rest = substring(sku, 3)
    `;
    const engine = await compile(query);
    const source = { sku: 'ABC12345' };
    const result = engine(source);
    expect(result.rest).toBe('12345');
  });

  it('should support nested expressions in substring arguments', async () => {
    const query = `
      from object to object
      transform
        set result = substring(sku, 0, a + b)
    `;
    const engine = await compile(query);
    const source = { sku: 'ABC12345', a: 1, b: 2 };
    const result = engine(source);
    expect(result.result).toBe('ABC');
  });

  it('should support expressions as the string argument', async () => {
    const query = `
      from object to object
      transform
        set result = substring(prefix + sku, 0, 5)
    `;
    const engine = await compile(query);
    const source = { prefix: 'SKU-', sku: '12345' };
    const result = engine(source);
    expect(result.result).toBe('SKU-1');
  });

  it('should throw error for unknown function', async () => {
    const query = `
      from object to object
      transform
        set result = unknownFunc(sku)
    `;
    await expect(compile(query)).rejects.toThrow('Unknown function: unknownFunc');
  });
});
