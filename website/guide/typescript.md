# TypeScript Support

MorphQL is written in TypeScript and provides first-class support for type safety.

## Type-Safe Compilation

The `compile` function supports Generics, allowing you to specify the expected **Source** and **Target** types of your transformation. This ensures that the generated engine is strongly typed, providing autocomplete and compile-time error checking for your input and output data.

### Usage

```typescript
import { compile } from "@morphql/core";

// 1. Define your types
interface UserSource {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserTarget {
  userId: number;
  fullName: string;
  contact: {
    email: string;
  };
}

// 2. Define your query
const query = `
  from object to object
  transform
    set userId = id
    set fullName = firstName + " " + lastName
    section contact(
      set email = email
    )
`;

// 3. Compile with Generics
const engine = await compile<UserSource, UserTarget>(query);

// 4. Usage is now type-safe
const source: UserSource = {
  id: 101,
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
};

const result = engine(source);
// result is typed as UserTarget
console.log(result.fullName); // "Jane Doe"
```

### Type Inference

If you do not specify generics, `compile` defaults to `any` for both source and target, which is compatible with non-TypeScript environments or quick prototyping.

```typescript
const engine = await compile(query);
// engine is types as MorphEngine<any, any>
```
