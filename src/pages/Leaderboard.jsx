import { Link } from 'react-router-dom'
import { Trophy, Zap, TrendingUp } from 'lucide-react'
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
              <div key={entry.rank} className={`${sizes[i]} ${heights[i]} flex flex-col items-center`}>
                <div className="text-2xl sm:text-3xl mb-1">{entry.badge}</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-2"
                  style={{ backgroundColor: archetype.color + '20', border: `2px solid ${archetype.color}40` }}>
                  {archetype.emoji}
                </div>
                <div className="text-xs font-bold text-pp-text text-center truncate w-full">{entry.handle}</div>
                <div className="text-xs text-pp-muted font-mono">{entry.receipts} receipts</div>
                <div className="mt-1 text-xs font-mono font-bold"
                  style={{ color: archetype.color }}>
                  #{entry.rank}
                </div>
              </div>
            )
          })}
        </div>

        {/* Full leaderboard table */}
        <div className="card-dark rounded-2xl overflow-hidden animate-in animate-in-delay-3">
          <div className="px-5 py-4 border-b border-pp-border flex items-center gap-2">
            <Trophy className="w-4 h-4 text-pp-amber" />
            <span className="font-semibold text-pp-text text-sm">Top Prompters</span>
          </div>
          <div className="divide-y divide-pp-border/50">
            {LEADERBOARD_DATA.map(entry => {
              const archetype = ARCHETYPES.find(a => a.id === entry.archetype)
              return (
                <div key={entry.rank} className="flex items-center gap-3 px-5 py-3.5 hover:bg-pp-border/10 transition-colors">
                  <div className="w-6 text-center">
                    <span className="font-mono text-xs text-pp-muted">{entry.rank}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ backgroundColor: archetype.color + '20', border: `1px solid ${archetype.color}30` }}>
                    {archetype.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-pp-text text-sm">{entry.handle}</div>
                    <div className="text-xs text-pp-muted">{archetype.name}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-bold text-pp-text font-mono">{entry.receipts}</div>
                    <div className="text-xs text-pp-muted">receipts</div>
                  </div>
                  <div className="text-right flex-shrink-0 hidden sm:block">
                    <div className="text-xs font-bold font-mono" style={{ color: archetype.color }}>
                      {entry.roastScore}
                    </div>
                    <div className="text-xs text-pp-muted">roast score</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-pp-text-dim text-sm mb-4">Want to get on the board?</p>
          <Link to="/beta" className="btn-primary inline-flex">
            <Zap className="w-4 h-4" fill="currentColor" />
            Get Your Receipt
          </Link>
        </div>
      </div>
    </div>
  )
}
