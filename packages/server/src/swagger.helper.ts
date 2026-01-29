import { SchemaNode } from '@morphql/core';

export class SwaggerHelper {
  static schemaNodeToOpenAPI(node: SchemaNode): any {
    if (node.type === 'any') {
      return {}; // Represents "any" in OpenAPI 3.0
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

    if (node.type === 'object') {
      if (node.properties && Object.keys(node.properties).length > 0) {
        schema.properties = {};
        for (const [key, childNode] of Object.entries(node.properties)) {
          schema.properties[key] = this.schemaNodeToOpenAPI(childNode);
        }
      }

      if (node.isOpen) {
        schema.additionalProperties = true;
      }
    }

    if (node.type === 'array' && node.items) {
      schema.items = this.schemaNodeToOpenAPI(node.items);
    }

    return schema;
  }
}
