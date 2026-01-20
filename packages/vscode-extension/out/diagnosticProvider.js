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
exports.MQLDiagnosticProvider = void 0;
const vscode = __importStar(require("vscode"));
const core_1 = require("@query-morph/core");
class MQLDiagnosticProvider {
    constructor() {
        this.diagnosticCollection =
            vscode.languages.createDiagnosticCollection("mql");
    }
    activate(context) {
        // Listen to document changes
        context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((event) => {
            if (event.document.languageId === "mql") {
                this.scheduleValidation(event.document);
            }
        }));
        // Listen to document open
        context.subscriptions.push(vscode.workspace.onDidOpenTextDocument((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        }));
        // Listen to document save
        context.subscriptions.push(vscode.workspace.onDidSaveTextDocument((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        }));
        // Validate all open MQL documents
        vscode.workspace.textDocuments.forEach((document) => {
            if (document.languageId === "mql") {
                this.validateDocument(document);
            }
        });
        context.subscriptions.push(this.diagnosticCollection);
    }
    scheduleValidation(document) {
        // Debounce validation to avoid running on every keystroke
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.validateDocument(document);
        }, 500); // 500ms debounce
    }
    async validateDocument(document) {
        const diagnostics = [];
        try {
            // Try to compile the document
            await (0, core_1.compile)(document.getText());
            // If successful, clear diagnostics
            this.diagnosticCollection.set(document.uri, []);
        }
        catch (error) {
            // Parse error and create diagnostic
            const diagnostic = this.createDiagnostic(error, document);
            if (diagnostic) {
                diagnostics.push(diagnostic);
            }
            this.diagnosticCollection.set(document.uri, diagnostics);
        }
    }
    createDiagnostic(error, document) {
        const message = error.message || String(error);
        let range;
        let line = 0;
        let column = 0;
        let found = false;
        // Try to extract position from Chevrotain token if available
        if (error.token) {
            if (error.token.startLine !== undefined) {
                line = error.token.startLine - 1; // Convert to 0-indexed
                column =
                    error.token.startColumn !== undefined
                        ? error.token.startColumn - 1
                        : 0;
                found = true;
            }
        }
        // Fallback: Try to extract from error message
        if (!found) {
            const lineMatch = message.match(/line[:\s]+(\d+)/i);
            const columnMatch = message.match(/column[:\s]+(\d+)/i);
            if (lineMatch) {
                line = parseInt(lineMatch[1], 10) - 1;
                column = columnMatch ? parseInt(columnMatch[1], 10) - 1 : 0;
                found = true;
            }
        }
        // Fallback: Look for "at offset" or similar patterns
        if (!found) {
            const offsetMatch = message.match(/offset[:\s]+(\d+)/i);
            if (offsetMatch) {
                const offset = parseInt(offsetMatch[1], 10);
                const pos = document.positionAt(offset);
                line = pos.line;
                column = pos.character;
                found = true;
            }
        }
        // Create range
        if (found && line < document.lineCount) {
            const lineText = document.lineAt(line).text;
            // Try to highlight the problematic token
            let endColumn = column;
            // If we have token info, use its length
            if (error.token && error.token.image) {
                endColumn = column + error.token.image.length;
            }
            else {
                // Otherwise, highlight next word or 10 chars
                const remainingText = lineText.substring(column);
                const wordMatch = remainingText.match(/^\S+/);
                endColumn =
                    column +
                        (wordMatch
                            ? wordMatch[0].length
                            : Math.min(10, remainingText.length));
            }
            range = new vscode.Range(new vscode.Position(line, column), new vscode.Position(line, Math.min(endColumn, lineText.length)));
        }
        else {
            // Last resort: highlight first line
            range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, Math.min(10, document.lineAt(0).text.length)));
        }
        return new vscode.Diagnostic(range, message, vscode.DiagnosticSeverity.Error);
    }
    dispose() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.diagnosticCollection.dispose();
    }
}
exports.MQLDiagnosticProvider = MQLDiagnosticProvider;
//# sourceMappingURL=diagnosticProvider.js.map