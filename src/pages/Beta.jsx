import { useState } from 'react'
import { Zap, AlertCircle, Loader2, ChevronRight } from 'lucide-react'
import { analyzePrompts } from '../lib/analyzer.js'
import ReceiptCard from '../components/ReceiptCard.jsx'

const EXAMPLES = [
  "write a python function that sorts a list",
  "make this button blue and add hover effect",
  "fix this error: TypeError cannot read property of undefined",
  "actually wait, ignore that. can you make the navbar sticky instead? and also add a mobile menu. oh and make the logo bigger",
]

const STEPS = [
  { id: 1, label: 'Paste', desc: 'Your prompts go in' },
  { id: 2, label: 'Analyze', desc: 'We read the patterns' },
  { id: 3, label: 'Receipt', desc: 'Truth gets printed' },
]

export default function Beta() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)

  function handleAnalyze() {
    const trimmed = text.trim()
    if (trimmed.length < 20) {
      setError('Give us at least 20 characters. We need something to work with.')
      return
    }
    setError('')
    setLoading(true)
    setStep(2)

    // Simulate analysis with a slight delay for effect
    setTimeout(() => {
      const r = analyzePrompts(trimmed)
      setResult(r)
      setLoading(false)
      setStep(3)
    }, 1400)
  }

  function handleReset() {
    setResult(null)
    setText('')
    setStep(1)
    setError('')
  }

  function loadExample() {
    const ex = EXAMPLES.join('\n')
    setText(ex)
    setError('')
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pp-green/10 border border-pp-green/30 text-pp-green text-xs font-semibold font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pp-green animate-pulse" />
            BETA TESTNET LIVE
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-pp-text mb-3">
            get your receipt
          </h1>
          <p className="text-pp-text-dim text-sm sm:text-base leading-relaxed">
            Paste any prompts you have written to an AI. Get your archetype and roast instantly.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-in animate-in-delay-1">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${step >= s.id ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 ${
                  step > s.id ? 'bg-pp-green text-white' :
                  step === s.id ? 'bg-pp-purple text-white' :
                  'bg-pp-border text-pp-muted'
                }`}>
                  {step > s.id ? '✓' : s.id}
                </div>
                <span className="text-xs text-pp-muted hidden sm:block">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-10 sm:w-16 h-px transition-colors duration-300 ${step > s.id ? 'bg-pp-green' : 'bg-pp-border'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        {!result ? (
          <div className="animate-in animate-in-delay-2">
            {/* Text area */}
            <div className="card-dark rounded-2xl overflow-hidden mb-4">
              <div className="flex items-center justify-between px-4 py-3 border-b border-pp-border">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-pp-muted font-mono">your-prompts.txt</span>
                <button
                  onClick={loadExample}
                  className="text-xs text-pp-purple hover:text-pp-purple-light transition-colors font-mono"
                >
                  load example
                </button>
              </div>
              <textarea
                value={text}
                onChange={e => { setText(e.target.value); setError('') }}
                placeholder={`paste your prompts here...\n\nexamples:\n  "make the button blue"\n  "fix this TypeError"\n  "actually wait, scratch that"`}
                className="w-full bg-transparent p-4 text-pp-text text-sm font-mono resize-none outline-none placeholder:text-pp-muted/40 min-h-[200px] sm:min-h-[240px]"
                rows={10}
                disabled={loading}
              />
              <div className="flex items-center justify-between px-4 py-2 border-t border-pp-border">
                <span className="text-xs text-pp-muted font-mono">
                  {text.split(/\s+/).filter(w => w).length} words &middot; {text.length} chars
                </span>
                {text.length > 0 && (
                  <button onClick={() => { setText(''); setError('') }}
                    className="text-xs text-pp-muted hover:text-red-400 transition-colors font-mono">
                    clear
                  </button>
                )}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-red-300">{error}</span>
              </div>
            )}

            {/* Analyze button */}
            <button
              onClick={handleAnalyze}
              disabled={loading || text.trim().length < 5}
              className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 ${
                loading
                  ? 'bg-pp-purple/50 text-white cursor-not-allowed'
                  : text.trim().length < 5
                  ? 'bg-pp-border text-pp-muted cursor-not-allowed'
                  : 'bg-pp-purple text-white hover:bg-purple-600 hover:scale-[1.02] active:scale-[0.98] glow-purple'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="font-mono">analyzing your chaos...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" fill="currentColor" />
                  Print My Receipt
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Loading state */}
            {loading && (
              <div className="mt-6 card-dark rounded-2xl p-5 font-mono text-xs text-pp-muted space-y-2">
                <div className="text-pp-green flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  scanning prompt patterns...
                </div>
                <div className="text-pp-text-dim animate-pulse">computing chaos index...</div>
                <div className="text-pp-text-dim animate-pulse delay-300">assigning archetype...</div>
                <div className="text-pp-text-dim animate-pulse delay-700">preparing roast...</div>
              </div>
            )}

            {/* Note */}
            <p className="text-center text-xs text-pp-muted mt-4">
              Your prompts stay in your browser. Nothing is sent anywhere. Beta testnet.
            </p>
          </div>
        ) : (
          <div className="animate-in">
            <ReceiptCard result={result} onReset={handleReset} />
          </div>
        )}
      </div>
    </div>
  )
}
