"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MQLHoverProvider = void 0;
const vscode = __importStar(require("vscode"));
const language_definitions_1 = require("@query-morph/language-definitions");
const { keywordDocs, functionDocs } = (0, language_definitions_1.generateHoverDocs)();
class MQLHoverProvider {
    provideHover(document, position, token) {
        const range = document.getWordRangeAtPosition(position);
        if (!range) {
            return null;
        }
        const word = document.getText(range);
        // Check if it's a keyword
        const keywordDoc = keywordDocs[word.toLowerCase()];
        if (keywordDoc) {
            return new vscode.Hover(this.formatDocumentation(keywordDoc), range);
        }
        // Check if it's a function
        const functionDoc = functionDocs[word.toLowerCase()];
        if (functionDoc) {
            return new vscode.Hover(this.formatDocumentation(functionDoc), range);
        }
        return null;
    }
    formatDocumentation(doc) {
        const md = new vscode.MarkdownString();
        md.isTrusted = true;
        // Signature
        md.appendCodeblock(doc.signature, "mql");
        // Description
        md.appendMarkdown(doc.description);
        md.appendMarkdown("\n\n");
        // Parameters
        if (doc.parameters && doc.parameters.length > 0) {
            md.appendMarkdown("**Parameters:**\n\n");
            doc.parameters.forEach((param) => {
                md.appendMarkdown(`- \`${param.name}\`: ${param.description}\n`);
            });
            md.appendMarkdown("\n");
        }
        // Returns
        if (doc.returns) {
            md.appendMarkdown(`**Returns:** \`${doc.returns}\`\n\n`);
        }
        // Example
        if (doc.example) {
            md.appendMarkdown("**Example:**\n\n");
            md.appendCodeblock(doc.example, "mql");
        }
        return md;
    }
}
exports.MQLHoverProvider = MQLHoverProvider;
//# sourceMappingURL=hoverProvider.js.map