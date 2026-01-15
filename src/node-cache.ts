import * as fs from 'node:fs';
import * as path from 'node:path';
import { createHash } from 'node:crypto';

export function saveToCache(query: string, code: string) {
  // Only execute if we are in a Node-like environment with fs access
  try {
    const cacheDir = path.resolve(process.cwd(), '.compiled');
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const hash = createHash('sha256').update(query).digest('hex').substring(0, 12);
    const filePath = path.join(cacheDir, `morph_${hash}.js`);

    const content = `/* 
Query:
${query}
*/

${code}`;
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (err) {
    // Silent fail in environments where fs/path/crypto are not available
  }
}
