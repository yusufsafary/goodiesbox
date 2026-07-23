import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import clsx from 'clsx'

export default function ArchetypeCard({ archetype, compact = false }) {
  const [expanded, setExpanded] = useState(false)

  if (compact) {
    return (
      <div className={clsx(
        'card-dark p-4 rounded-2xl border transition-all duration-300 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]',
        archetype.borderColor,
      )}
        style={{ '--card-color': archetype.color }}
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ backgroundColor: archetype.color + '20', border: `1px solid ${archetype.color}30` }}>
            {archetype.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-pp-text text-sm">{archetype.name}</div>
            <div className="text-pp-muted text-xs truncate">{archetype.tagline}</div>
          </div>
          <button className="text-pp-muted group-hover:text-pp-text transition-colors flex-shrink-0">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-pp-border/50">
            <p className="text-pp-text-dim text-xs leading-relaxed mb-2">{archetype.description}</p>
            <div className="p-2 rounded-lg bg-pp-bg/50 border border-pp-border/30">
              <div className="text-xs text-pp-muted font-mono mb-0.5">AI says:</div>
              <div className="text-xs text-pp-text italic font-mono">
                "{archetype.roasts[0]}"
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {archetype.traits.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: archetype.color + '15', color: archetype.color, border: `1px solid ${archetype.color}30` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={clsx(
      'card-dark rounded-2xl border overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]',
      archetype.borderColor,
    )}>
      {/* Gradient header */}
      <div className={clsx('h-20 sm:h-24 relative bg-gradient-to-br', archetype.bgGradient)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl animate-float" style={{ animationDelay: Math.random() * 2 + 's' }}>
            {archetype.emoji}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="font-bold text-pp-text text-base sm:text-lg mb-0.5">{archetype.name}</div>
        <div className="text-pp-muted text-xs mb-3 font-mono">{archetype.tagline}</div>

        <p className="text-pp-text-dim text-xs sm:text-sm leading-relaxed mb-4">{archetype.description}</p>

        {/* Traits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {archetype.traits.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: archetype.color + '15', color: archetype.color, border: `1px solid ${archetype.color}30` }}>
              {t}
            </span>
          ))}
        </div>

        {/* Roast */}
        <div className="p-3 rounded-xl bg-pp-bg/60 border border-pp-border/30">
          <div className="text-xs text-pp-muted font-mono mb-1 uppercase tracking-wide">What AI thinks of you:</div>
          <div className="text-xs text-pp-text italic font-mono leading-relaxed">
            "{archetype.roasts[0]}"
          </div>
        </div>
      </div>
    </div>
  )
}
