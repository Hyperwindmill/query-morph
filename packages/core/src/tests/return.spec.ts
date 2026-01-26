import { describe, it, expect } from 'vitest';
import { compile, morphQL } from '../index.js';

describe('Return Action', async () => {
  it('should support top-level return using target by default', async () => {
    const query = morphQL`
      from object to object
      transform
        set greeting = "Hello " + name
        return greeting
    `;
    const engine = await compile(query);
    const result = engine({ name: 'Alice' });
    expect(result).toBe('Hello Alice');
  });

  it('should support return inside regular section using target by default', async () => {
    const query = morphQL`
      from object to object
      transform
        section user(
          set res = userName
          return res
        ) from parent
    `;
    const engine = await compile(query);
    const result = engine({ userId: 1, userName: 'Alice' });
    expect(result.user).toBe('Alice');
  });

  it('should support explicit source access in return', async () => {
    const query = morphQL`
      from object to object
      transform
        define val = "from source"
        return _source.val
    `;
    const engine = await compile(query);
    const result = engine({});
    expect(result).toBe('from source');
  });

  it('should support return inside subquery section using target by default', async () => {
    const query = morphQL`
      from object to object
      transform
        section sub(
          from object to json
          transform
            set res = val
            return res
        ) from parent
    `;
    const engine = await compile(query);
    const result = engine({ val: 'test' });
    expect(result.sub).toBe('"test"');
  });

  it('should support return inside if block using target by default', async () => {
    const query = morphQL`
      from object to object
      transform
        if (isAdmin) (
          set role = "admin"
          return role
        ) else (
          set role = "user"
          return role
        )
    `;
    const engine = await compile(query);
    expect(engine({ isAdmin: true })).toBe('admin');
    expect(engine({ isAdmin: false })).toBe('user');
  });

  it('should stop execution after return', async () => {
    const query = morphQL`
      from object to object
      transform
        set val = 1
        return target
        set val = 2
    `;
    const engine = await compile(query);
    const result = engine({});
    expect(result.val).toBe(1);
  });
});
