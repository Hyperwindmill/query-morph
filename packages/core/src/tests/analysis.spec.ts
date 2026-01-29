import { describe, it, expect } from 'vitest';
import { compile, morphQL } from '../index.js';

describe('Integrated Analysis (compile with analyze: true)', async () => {
  it('should extract simple mappings and infer correct types', async () => {
    const query = morphQL`
      from object to object
      transform
        set fullName = firstName + " " + lastName
        set age = number(rawAge)
        set tags = asList(category)
    `;
    const engine = await compile(query, { analyze: true });

    expect(engine.analysis).toBeDefined();
    const { source, target } = engine.analysis;

    expect(source.properties?.firstName).toBeDefined();
    expect(source.properties?.lastName).toBeDefined();
    expect(source.properties?.rawAge).toBeDefined();
    expect(source.properties?.category).toBeDefined();

    expect(target.properties?.fullName).toBeDefined();
    expect(target.properties?.fullName.type).toBe('string');

    expect(target.properties?.age).toBeDefined();
    expect(target.properties?.age.type).toBe('number');

    expect(target.properties?.tags).toBeDefined();
    expect(target.properties?.tags.type).toBe('array');
  });

  it('should infer number for addition of numbers', async () => {
    const query = morphQL`
      from object to object
      transform
        set sum = 1 + 2 + 3
    `;
    const engine = await compile(query, { analyze: true });
    expect(engine.analysis.target.properties?.sum.type).toBe('number');
  });

  it('should collect fields from all paths of an if/else', async () => {
    const query = morphQL`
      from object to object
      transform
        if (isAdmin) (
          set role = "admin"
          set permissions = "full"
        ) else (
          set role = "user"
          set guest = true
        )
    `;
    const engine = await compile(query, { analyze: true });
    const { source, target } = engine.analysis;

    expect(source.properties?.isAdmin).toBeDefined();
    expect(target.properties?.role).toBeDefined();
    expect(target.properties?.permissions).toBeDefined();
    expect(target.properties?.guest).toBeDefined();
  });

  it('should handle clone() and delete', async () => {
    const query = morphQL`
      from object to object
      transform
        clone()
        delete password
    `;
    const engine = await compile(query, { analyze: true });
    const { target } = engine.analysis;

    expect(target.isOpen).toBe(true);
    expect(target.properties?.password).toBeUndefined();
  });

  it('should handle nested sections correctly', async () => {
    const query = morphQL`
      from object to object
      transform
        section header(
          set date = timestamp
        )
        section multiple items(
          set sku = itemCode
        ) from products
    `;
    const engine = await compile(query, { analyze: true });
    const { source, target } = engine.analysis;

    expect(target.properties?.header.type).toBe('object');
    expect(target.properties?.header.properties?.date).toBeDefined();

    expect(target.properties?.items.type).toBe('array');
    expect(target.properties?.items.items.properties?.sku).toBeDefined();

    // Default section behavior: from [sectionName]
    expect(source.properties?.header.properties?.timestamp).toBeDefined();
    expect(source.properties?.products.type).toBe('array');
    expect(source.properties?.products.items.properties?.itemCode).toBeDefined();
  });
});
