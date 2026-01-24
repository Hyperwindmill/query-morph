import { describe, it, expect, expectTypeOf } from 'vitest';
import { compile, morphQL, MorphEngine } from '../index.js';

describe('TypeScript Generics Support', async () => {
  it('should compile with default types (any)', async () => {
    const query = morphQL`from object to object transform set a = 1`;
    const transform = await compile(query);

    // Should default to MorphEngine<any, any>
    expectTypeOf(transform).toExtend<MorphEngine>();

    // Runtime check
    const result = await transform({});
    expect(result).toEqual({ a: 1 });
  });

  it('should support explicit Source and Target types', async () => {
    type Source = { name: string };
    type Target = { greeting: string };

    const query = morphQL`
      from object to object 
      transform set greeting = "Hello " + name
    `;

    // Explicitly typed compile
    const transform = await compile<Source, Target>(query);

    // Type check
    expectTypeOf(transform).toExtend<MorphEngine<Source, Target>>();

    // Input should be typed as Source
    const source: Source = { name: 'World' };

    // Output should be typed as Target
    const result = await transform(source);

    expectTypeOf(result).toExtend<Target>();
    expect(result).toEqual({ greeting: 'Hello World' });
  });

  it('should accept generic types in createEngine inference', async () => {
    // This tests that if we manually typed the variable, it matches
    type User = { id: number };
    type UserResponse = { userId: number };

    const query = morphQL`from object to object transform set userId = id`;

    const transform: MorphEngine<User, UserResponse> = await compile(query);

    const result = transform({ id: 123 });
    expect(result).toEqual({ userId: 123 });
  });
});
