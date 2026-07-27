import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'
import ReceiptCard from '../components/ReceiptCard.jsx'
import SEO from '../components/SEO.jsx'
import { ARCHETYPES } from '../lib/archetypes.js'

// Example demo receipt
const DEMO_RESULT = {
  archetype: ARCHETYPES.find(a => a.id === 'context-hoarder'),
  roast: "Your system prompt has more lines than your actual code.",
  stats: {
    totalWords: 847,
    avgWordsPerLine: 423,
    sessionCount: 12,
    tokenEstimate: 1101,
    questionRate: 34,
    hasCodeBlocks: true,
    codeBlockCount: 7,
  },
  receiptId: 'PP-DEMO42',
  timestamp: new Date('2025-07-23T10:30:00').toISOString(),
}

export default function Receipt() {
  return (
    <>
      <SEO
        title="Example Receipt – The Context Hoarder Archetype"
        description="See a sample PromptPlay receipt for The Context Hoarder archetype. Paste your own AI prompts to get your personalized archetype receipt. Free during beta."
        canonical="/receipt"
      />
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-pp-muted hover:text-pp-text text-sm transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="text-center mb-8 animate-in">
            <div className="text-xs font-mono text-pp-amber uppercase tracking-widest mb-2">Example Receipt</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-pp-text mb-2">
              this is what yours looks like
            </h1>
            <p className="text-pp-text-dim text-sm">
              This is a sample receipt for The Context Hoarder. Try the beta to get yours.
            </p>
          </div>

          {/* Demo receipt */}
          <ReceiptCard result={DEMO_RESULT} onReset={() => {}} />

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="card-dark rounded-2xl p-6 border border-pp-purple/20">
              <div className="text-2xl mb-3">🧾</div>
              <h2 className="font-bold text-pp-text mb-2">want yours?</h2>
              <p className="text-pp-text-dim text-sm mb-5">
                Paste your actual prompts and we'll print your real archetype receipt. Free during beta.
              </p>
              <Link to="/beta" className="btn-primary inline-flex">
                <Zap className="w-4 h-4" fill="currentColor" />
                Try Beta Testnet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
