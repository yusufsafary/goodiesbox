import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '/beta', label: 'Try Beta' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-pp-bg/90 backdrop-blur-xl border-b border-pp-border' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-pp-purple flex items-center justify-center group-hover:bg-purple-600 transition-colors">
              <Zap className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-pp-text text-sm sm:text-base tracking-tight">
              prompt<span className="text-pp-purple-light">play</span>
            </span>
            <span className="hidden sm:inline text-xs px-1.5 py-0.5 bg-pp-purple/20 text-pp-purple-light rounded font-mono font-semibold border border-pp-purple/30">
              BETA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-pp-purple-light'
                    : 'text-pp-text-dim hover:text-pp-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" className="btn-primary text-sm px-4 py-2">
              Sign in with X
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="sm:hidden p-2 text-pp-text-dim hover:text-pp-text transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-pp-bg/95 backdrop-blur-xl border-b border-pp-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.href
                    ? 'text-pp-purple-light'
                    : 'text-pp-text-dim'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login" className="btn-primary text-sm justify-center mt-1">
              Sign in with X
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
