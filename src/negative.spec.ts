import { describe, it, expect } from 'vitest';
import { compile } from './index.js';

describe('Negative numbers and unary minus', () => {
  it('should support negative numeric literals in function arguments', () => {
    const query = `
      from source as object
      to return as object
      transform
        set last5 = substring(sku, -5)
    `;
    const engine = compile(query);
    const source = { sku: 'ABC12345' };
    const result = engine(source);
    expect(result.last5).toBe('12345');
  });

  it('should support unary minus with variables', () => {
    const query = `
      from source as object
      to return as object
      transform
        set invBalance = -balance
    `;
    const engine = compile(query);
    const source = { balance: 100 };
    const result = engine(source);
    expect(result.invBalance).toBe(-100);
  });

  it('should support mixed unary and binary operators', () => {
    const query = `
      from source as object
      to return as object
      transform
        set result = a - -b
    `;
    const engine = compile(query);
    const source = { a: 10, b: 5 };
    const result = engine(source);
    expect(result.result).toBe(15);
  });

  it('should support substring with negative start and positive end', () => {
    const query = `
      from source as object
      to return as object
      transform
        set mid = substring(sku, -5, -2)
    `;
    const engine = compile(query);
    const source = { sku: 'ABC12345' };
    const result = engine(source);
    // last 5 are "12345", from -5 to -2 is "123"
    expect(result.mid).toBe('123');
  });
});
