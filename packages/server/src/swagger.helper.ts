import { SchemaNode } from '@morphql/core';

export class SwaggerHelper {
  static schemaNodeToOpenAPI(
    node: SchemaNode,
    meta?: Record<string, any>,
    path = '',
  ): any {
    if (node.type === 'any') {
      const schema: any = {};
      this.applyMeta(schema, path, meta);
      return schema; // Represents "any" in OpenAPI 3.0
    }

    const typeMap: Record<string, string> = {
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      object: 'object',
      array: 'array',
    };

    const schema: any = {};

    if (node.type === 'null') {
      schema.nullable = true;
    } else {
      schema.type = typeMap[node.type] || 'object';
    }

    this.applyMeta(schema, path, meta);

    if (node.type === 'object') {
      if (node.properties && Object.keys(node.properties).length > 0) {
        schema.properties = {};
        for (const [key, childNode] of Object.entries(node.properties)) {
          const childPath = path ? `${path}.${key}` : key;
          schema.properties[key] = this.schemaNodeToOpenAPI(
            childNode,
            meta,
            childPath,
          );
        }
      }

      if (node.isOpen) {
        schema.additionalProperties = true;
      }
    }

    if (node.type === 'array' && node.items) {
      // User requested skipping array indexes in path tracking
      schema.items = this.schemaNodeToOpenAPI(node.items, meta, path);
    }

    return schema;
  }

  static schemaToSample(schema: any): any {
    if (schema.example !== undefined) return schema.example;

    if (schema.type === 'object') {
      const obj: any = {};
      if (schema.properties) {
        for (const [key, value] of Object.entries(
          schema.properties as Record<string, any>,
        )) {
          obj[key] = this.schemaToSample(value);
        }
      }
      return obj;
    }

    if (schema.type === 'array') {
      if (schema.items) {
        return [this.schemaToSample(schema.items)];
      }
      return [];
    }

    const defaults: Record<string, any> = {
      string: 'string',
      number: 0,
      boolean: true,
    };

    if (schema.type === undefined) {
      return 'sample';
    }

    return defaults[schema.type] ?? null;
  }

  private static applyMeta(
    schema: any,
    path: string,
    meta?: Record<string, any>,
  ) {
    if (!meta || !path) return;

    const entry = meta[path];
    if (entry) {
      if (entry.type) schema.type = entry.type;
      if (entry.description) schema.description = entry.description;
      if (entry.example !== undefined) schema.example = entry.example;
    }
  }
}
