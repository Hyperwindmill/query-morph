import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Code, Database, FileCode, Copy, Check, Info } from 'lucide-react';
import { compile } from '../../src/index';

const DEFAULT_QUERY = `from json 
to xml("UserProfile") 
transform 
  section profile(
    set customerId = id
    set fullName = uppercase(name)
    set status = if(isActive, "Active", "Inactive")
    
    if (isActive) (
       set accountTier = "Premium"
    ) else (
       set accountTier = "Standard"
    )

    section contactInfo(
      set primaryEmail = email
      set phone = phone
    ) from contact

    section multiple addressBook(
      set type = type
      set fullAddress = street + ", " + city + " " + zip
      set isPrimary = if(primary, "Yes", "No")
    ) from addresses

    section multiple orderHistory(
      set orderRef = id
      set value = total
      set state = status
      
      section multiple lineItems(
        set productCode = sku
        set quantity = qty
        set unitPrice = price
        set totalLine = if(qty > 5, price * qty * 0.9, price * qty)
      ) from items
    ) from orders
    
    section stats(
       set visitCount = visits
       set accountType = if(visits > 40, "Frequent", "Casual")
       set lastSeen = substring(lastLogin, 0, 10)
    ) from metrics
  ) from customer`;

const DEFAULT_DATA = JSON.stringify(
  {
    customer: {
      id: 'CUST-001',
      name: 'Jane Doe',
      isActive: true,
      contact: {
        email: 'jane.doe@example.com',
        phone: '+1-555-0199',
      },
      addresses: [
        {
          type: 'billing',
          street: '123 Main St',
          city: 'Metropolis',
          zip: '10001',
          primary: true,
        },
        {
          type: 'shipping',
          street: '456 Ocean Dr',
          city: 'Gotham',
          zip: '10200',
          primary: false,
        },
      ],
      orders: [
        {
          id: 'ORD-2023-001',
          date: '2023-10-15',
          total: 150.5,
          status: 'shipped',
          items: [
            { sku: 'WIDGET-A', qty: 2, price: 50.0 },
            { sku: 'GADGET-B', qty: 1, price: 50.5 },
          ],
        },
        {
          id: 'ORD-2023-009',
          date: '2023-11-01',
          total: 200.0,
          status: 'pending',
          items: [{ sku: 'LUX-ITEM', qty: 1, price: 200.0 }],
        },
      ],
      metrics: {
        visits: 42,
        lastLogin: '2023-11-05T10:00:00Z',
        tags: ['vip', 'early-adopter'],
      },
    },
  },
  null,
  2
);
interface Result {
  result: string;
  generatedCode: string;
  error: string | null;
}
export default function App() {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [sourceData, setSourceData] = useState(DEFAULT_DATA);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<Result>({
    result: '',
    generatedCode: '',
    error: null,
  });
  const sourceType = sourceData.startsWith('<') ? 'xml' : 'json';
  useEffect(() => {
    async function run() {
      try {
        const morph = await compile(query);
        const output = morph(sourceData);
        setResult({
          result: typeof output === 'string' ? output : JSON.stringify(output, null, 2),
          generatedCode: morph.code,
          error: null,
        });
      } catch (err: unknown) {
        setResult({
          result: '',
          generatedCode: '',
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }
    run();
  }, [query, sourceData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] text-slate-200 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#1e293b]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Play className="w-5 h-5 text-white fill-current" />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Query Morph Playground
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              High-Performance Query-to-Code Engine
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Documentation
          </a>
          <button className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 text-white">
            Share Query
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel: Query & JS */}
        <div className="w-1/2 flex flex-col border-r border-slate-800">
          {/* Top Half: Query */}
          <div className="h-1/2 flex flex-col border-b border-slate-800">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
              <FileCode className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Morph Query
              </span>
            </div>
            <div className="flex-1 overflow-hidden pt-2">
              <Editor
                theme="vs-dark"
                defaultLanguage="plaintext"
                value={query}
                onChange={(v) => setQuery(v || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 10 },
                }}
              />
            </div>
          </div>

          {/* Bottom Half: Generated JS */}
          <div className="h-1/2 flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
              <Code className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Generated JS
              </span>
            </div>
            <div className="flex-1 overflow-hidden pt-2">
              <Editor
                theme="vs-dark"
                defaultLanguage="javascript"
                value={result.generatedCode}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 10 },
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Panels */}
        <div className="w-1/2 flex flex-col overflow-hidden">
          {/* Top Right: Source Data */}
          <div className="h-1/2 flex flex-col border-b border-slate-800">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Source Data ({sourceType.toUpperCase()})
              </span>
            </div>
            <div className="flex-1 overflow-hidden pt-2">
              <Editor
                theme="vs-dark"
                language={sourceType === 'json' ? 'json' : 'xml'}
                value={sourceData}
                onChange={(v) => setSourceData(v || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 10 },
                }}
              />
            </div>
          </div>

          {/* Bottom Right: Result */}
          <div className="h-1/2 flex flex-col relative">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Transformation Result
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-1 hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-white"
                title="Copy Result"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex-1 overflow-hidden pt-2 bg-[#1e1e1e]">
              {result.error ? (
                <div className="p-4 flex gap-3 text-red-400 bg-red-950/20 m-4 rounded-lg border border-red-900/50">
                  <Info className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold mb-1">Compilation/Execution Error</p>
                    <p className="text-xs font-mono">{result.error}</p>
                  </div>
                </div>
              ) : (
                <Editor
                  theme="vs-dark"
                  language={result.result.trim().startsWith('<') ? 'xml' : 'json'}
                  value={result.result}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 10 },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-2 border-t border-slate-800 bg-[#1e293b] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Engine Status: Online
            </span>
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            Version: 0.1.0-alpha
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-medium italic">
          Query Morph Engine &copy; 2026
        </div>
      </footer>
    </div>
  );
}
