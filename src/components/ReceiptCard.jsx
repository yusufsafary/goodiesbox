import { useState } from 'react'
import { Share2, Download, RefreshCw, Check } from 'lucide-react'
import { formatReceiptDate } from '../lib/analyzer.js'
import clsx from 'clsx'

function StatRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center text-xs sm:text-sm">
      <span className="text-gray-600 font-mono">{label}</span>
      <span className={clsx('font-mono font-bold', highlight ? 'text-pp-purple' : 'text-gray-900')}>
        {value}
      </span>
    </div>
  )
}

export default function ReceiptCard({ result, onReset }) {
  const [copied, setCopied] = useState(false)
  const [printing, setPrinting] = useState(false)

  if (!result) return null

  const { archetype, roast, stats, receiptId, timestamp } = result

  function handleCopy() {
    const text = `I got "${archetype.name}" on PromptPlay ${archetype.emoji}\n\n"${roast}"\n\nFind your archetype: promptplay.app`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  function handlePrint() {
    setPrinting(true)
    setTimeout(() => {
      window.print()
      setPrinting(false)
    }, 100)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      {/* Receipt */}
      <div className="receipt-paper w-full shadow-2xl px-5 pt-10 pb-10 animate-in">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="text-2xl mb-1">{archetype.emoji}</div>
          <div className="font-mono font-bold text-lg text-gray-900 tracking-tight">PROMPTPLAY</div>
          <div className="font-mono text-xs text-gray-500">BETA TESTNET RECEIPT</div>
          <div className="font-mono text-xs text-gray-400 mt-0.5">{formatReceiptDate(timestamp)}</div>
        </div>

        <hr className="receipt-divider" />

        {/* Archetype */}
        <div className="text-center my-4">
          <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-widest">YOUR ARCHETYPE</div>
          <div className="font-mono font-bold text-xl text-gray-900">{archetype.name}</div>
          <div className="font-mono text-xs text-gray-500 mt-0.5 italic">"{archetype.tagline}"</div>
        </div>

        <hr className="receipt-divider" />

        {/* Stats */}
        <div className="my-4 flex flex-col gap-2">
          <StatRow label="TOTAL WORDS" value={stats.totalWords.toLocaleString()} />
          <StatRow label="AVG WORDS/PROMPT" value={stats.avgWordsPerLine} highlight />
          <StatRow label="EST. SESSIONS" value={stats.sessionCount} />
          <StatRow label="TOKEN ESTIMATE" value={`~${stats.tokenEstimate.toLocaleString()}`} />
          <StatRow label="QUESTION RATE" value={`${stats.questionRate}%`} />
          <StatRow label="CODE BLOCKS" value={stats.codeBlockCount} />
          <StatRow label="CHAOS LEVEL" value={archetype.id === 'vibe-coder' ? 'MAXIMUM' : archetype.id === 'micromanager' ? 'MINIMAL' : 'ELEVATED'} highlight />
        </div>

        <hr className="receipt-divider" />

        {/* Roast */}
        <div className="my-4 text-center">
          <div className="font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">AI DIAGNOSIS</div>
          <div className="font-mono text-xs text-gray-700 italic leading-relaxed">
            "{roast}"
          </div>
        </div>

        <hr className="receipt-divider" />

        {/* Receipt ID */}
        <div className="text-center mt-4">
          <div className="font-mono text-xs text-gray-400 tracking-widest">RECEIPT #{receiptId}</div>
          <div className="font-mono text-xs text-gray-400 mt-1">promptplay.app/beta</div>
          <div className="mt-3 flex justify-center">
            <div className="h-8 w-32 bg-gray-900 rounded-sm" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #111 0px, #111 2px, #fff 2px, #fff 4px)',
            }} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 w-full">
        <button
          onClick={handleCopy}
          className={clsx(
            'flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all duration-200',
            copied
              ? 'bg-green-600 text-white'
              : 'bg-pp-purple text-white hover:bg-purple-600 hover:scale-105 active:scale-95'
          )}
        >
          {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Share'}
        </button>
        <button
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm bg-transparent border border-pp-border text-pp-text-dim hover:text-pp-text hover:border-pp-purple/50 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>

      {/* Archetype description */}
      <div className={clsx('card-dark p-4 w-full border animate-in animate-in-delay-2', archetype.borderColor)}>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{archetype.emoji}</span>
          <div>
            <div className="font-semibold text-pp-text text-sm mb-1">{archetype.name}</div>
            <p className="text-pp-text-dim text-xs leading-relaxed">{archetype.description}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {archetype.traits.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 bg-pp-border/50 text-pp-text-dim rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
