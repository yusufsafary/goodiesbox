import { Link } from 'react-router-dom'
import { Trophy, Zap, TrendingUp } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import { ARCHETYPES } from '../lib/archetypes.js'

// Simulated leaderboard data
const LEADERBOARD_DATA = [
  { rank: 1, handle: '@context_queen', archetype: 'context-hoarder', receipts: 847, roastScore: 9.8, badge: '👑' },
  { rank: 2, handle: '@vibecheck_dev', archetype: 'vibe-coder', receipts: 634, roastScore: 9.5, badge: '🥈' },
  { rank: 3, handle: '@overthink404', archetype: 'overthinker', receipts: 521, roastScore: 9.2, badge: '🥉' },
  { rank: 4, handle: '@debugking', archetype: 'debugger', receipts: 489, roastScore: 8.9, badge: '' },
  { rank: 5, handle: '@lazy_brain_dev', archetype: 'lazy-genius', receipts: 401, roastScore: 8.7, badge: '' },
  { rank: 6, handle: '@ctrl_freak99', archetype: 'micromanager', receipts: 388, roastScore: 8.4, badge: '' },
  { rank: 7, handle: '@existential_coder', archetype: 'philosopher', receipts: 312, roastScore: 8.1, badge: '' },
  { rank: 8, handle: '@gm_prompter', archetype: 'serial-prompter', receipts: 298, roastScore: 7.9, badge: '' },
  { rank: 9, handle: '@nocap_dev', archetype: 'vibe-coder', receipts: 256, roastScore: 7.6, badge: '' },
  { rank: 10, handle: '@paste_gang', archetype: 'context-hoarder', receipts: 234, roastScore: 7.3, badge: '' },
]

const ARCHETYPE_COUNTS = ARCHETYPES.map(a => ({
  ...a,
  count: Math.floor(Math.random() * 800) + 100,
  percentage: Math.floor(Math.random() * 30) + 5,
})).sort((a, b) => b.count - a.count)

export default function Leaderboard() {
  return (
    <>
      <SEO
        title="Leaderboard – Top AI Prompters & Archetype Rankings"
        description="See the top PromptPlay users ranked by receipts generated and roast score. Discover which AI prompting archetype dominates the leaderboard."
        canonical="/leaderboard"
      />
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-in">
            <div className="text-xs font-mono text-pp-amber uppercase tracking-widest mb-3">Leaderboard</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-pp-text mb-3">
              the hall of receipts
            </h1>
            <p className="text-pp-text-dim text-sm sm:text-base">
              Top prompters ranked by receipts generated and roast intensity.
            </p>
          </div>

          {/* Archetype distribution */}
          <div className="card-dark rounded-2xl p-5 mb-6 animate-in animate-in-delay-1">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-pp-purple" />
              <span className="font-semibold text-pp-text text-sm">Archetype Distribution</span>
              <span className="ml-auto text-xs text-pp-muted font-mono">Beta Testnet</span>
            </div>
            <div className="flex flex-col gap-2">
              {ARCHETYPE_COUNTS.slice(0, 5).map(a => (
                <div key={a.id} className="flex items-center gap-3">
                  <span className="text-base w-6 flex-shrink-0">{a.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-pp-text-dim">{a.name}</span>
                      <span className="text-xs text-pp-muted font-mono">{a.count}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-pp-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${a.percentage}%`, backgroundColor: a.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 3 podium */}
          <div className="grid grid-cols-3 gap-3 mb-6 animate-in animate-in-delay-2">
            {LEADERBOARD_DATA.slice(0, 3).map((entry, i) => {
              const archetype = ARCHETYPES.find(a => a.id === entry.archetype)
              const sizes = ['order-2', 'order-1', 'order-3']
              const heights = ['pt-4', 'pt-8', 'pt-0']
              return (
                <div key={entry.rank} className={`${sizes[i]} ${heights[i]} card-dark rounded-2xl p-4 border text-center`} style={{ borderColor: archetype?.color + '40' }}>
                  <div className="text-xl mb-1">{entry.badge || archetype?.emoji}</div>
                  <div className="text-xs font-mono text-pp-muted mb-1">#{entry.rank}</div>
                  <div className="text-xs font-semibold text-pp-text truncate">{entry.handle}</div>
                  <div className="text-xs text-pp-text-dim mt-1">{entry.receipts} receipts</div>
                  <div className="text-xs font-mono mt-1" style={{ color: archetype?.color }}>
                    {entry.roastScore}/10
                  </div>
                </div>
              )
            })}
          </div>

          {/* Full table */}
          <div className="card-dark rounded-2xl border border-pp-border overflow-hidden animate-in animate-in-delay-3">
            <div className="px-5 py-3 border-b border-pp-border flex items-center gap-2">
              <Trophy className="w-4 h-4 text-pp-amber" />
              <span className="font-semibold text-pp-text text-sm">Top Prompters</span>
            </div>
            <div className="divide-y divide-pp-border">
              {LEADERBOARD_DATA.map(entry => {
                const archetype = ARCHETYPES.find(a => a.id === entry.archetype)
                return (
                  <div key={entry.rank} className="px-5 py-3 flex items-center gap-3 hover:bg-pp-card/30 transition-colors">
                    <span className="text-xs font-mono text-pp-muted w-5">#{entry.rank}</span>
                    <span className="text-base">{archetype?.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-pp-text truncate">{entry.handle}</div>
                      <div className="text-xs text-pp-text-dim">{archetype?.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-pp-text">{entry.receipts}</div>
                      <div className="text-xs text-pp-muted">receipts</div>
                    </div>
                    <div className="text-xs font-mono font-bold" style={{ color: archetype?.color }}>
                      {entry.roastScore}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-pp-text-dim text-sm mb-4">Want to appear on the leaderboard?</p>
            <Link to="/beta" className="btn-primary inline-flex">
              <Zap className="w-4 h-4" fill="currentColor" />
              Get Your Receipt
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
