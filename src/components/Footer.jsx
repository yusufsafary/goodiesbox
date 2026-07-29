import { Link } from 'react-router-dom'
import { Github, Twitter } from 'lucide-react'

function PromptPlayLogo({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pp-foot-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
      </defs>
      <path
        d="M3 0H25a3 3 0 0 1 3 3V21L23 25 19.5 21 16 25 12.5 21 9 25 5.5 21 2 25 0 23V3a3 3 0 0 1 3-3Z"
        fill="url(#pp-foot-bg)"
      />
      <path
        d="M7 11.5L12 14.5L7 17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="14" y="16.2" width="7" height="1.9" rx="0.95" fill="white" opacity="0.8" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-pp-border bg-pp-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <PromptPlayLogo size={24} />
              <span className="font-bold text-pp-text text-sm">
                prompt<span className="text-pp-purple-light">play</span>
              </span>
            </Link>
            <p className="text-xs text-pp-muted max-w-xs leading-relaxed">
              Discover your AI prompting archetype. Built for the testnet era.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-pp-text-dim uppercase tracking-wider mb-1">Product</span>
              <Link to="/beta" className="text-xs text-pp-muted hover:text-pp-text transition-colors">Beta Testnet</Link>
              <Link to="/leaderboard" className="text-xs text-pp-muted hover:text-pp-text transition-colors">Leaderboard</Link>
              <Link to="/receipt" className="text-xs text-pp-muted hover:text-pp-text transition-colors">Example Receipt</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-pp-text-dim uppercase tracking-wider mb-1">Info</span>
              <Link to="/about" className="text-xs text-pp-muted hover:text-pp-text transition-colors">About</Link>
              <Link to="/login" className="text-xs text-pp-muted hover:text-pp-text transition-colors">Sign In</Link>
              <a href="https://github.com/yusufsafary/goodiesbox" target="_blank" rel="noopener noreferrer" className="text-xs text-pp-muted hover:text-pp-text transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-pp-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-pp-muted">
            2025 PromptPlay. Beta Testnet. All receipts are for entertainment.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/yusufsafary/goodiesbox" target="_blank" rel="noopener noreferrer"
               className="text-pp-muted hover:text-pp-text transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-pp-muted hover:text-pp-text transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
