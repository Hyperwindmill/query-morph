import { describe, it, expect } from 'vitest';
import { greet } from './index';

describe('greet', () => {
  it('should return a greeting message', () => {
    expect(greet({ name: 'Antigravity' })).toBe('Hello, Antigravity! Welcome to query-morph.');
  });
});
