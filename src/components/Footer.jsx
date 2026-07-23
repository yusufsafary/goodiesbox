import { Link } from 'react-router-dom'
import { Zap, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-pp-border bg-pp-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-pp-purple flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
              </div>
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
