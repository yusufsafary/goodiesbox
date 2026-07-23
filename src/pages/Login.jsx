import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Zap, Twitter, Github, Lock, AlertCircle } from 'lucide-react'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState(null)
  const navigate = useNavigate()

  function handleLogin(p) {
    setLoading(true)
    setProvider(p)
    // Simulate auth flow - in production this would redirect to OAuth
    setTimeout(() => {
      setLoading(false)
      // Store mock user in session storage for demo
      sessionStorage.setItem('pp_user', JSON.stringify({
        handle: '@promptplayer',
        name: 'Prompt Player',
        provider: p,
        joined: new Date().toISOString(),
        archetype: null,
        receipts: 0,
      }))
      navigate('/beta')
    }, 1800)
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-sm">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-pp-muted hover:text-pp-text text-sm transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Card */}
        <div className="card-dark rounded-3xl p-6 sm:p-8 border border-pp-border/80 animate-in">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-pp-purple flex items-center justify-center glow-purple">
              <Zap className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-pp-text mb-2">
              sign in to PromptPlay
            </h1>
            <p className="text-pp-text-dim text-sm">
              Save your receipts, track your archetype over time, and flex on the leaderboard.
            </p>
          </div>

          {/* Beta notice */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-pp-amber/10 border border-pp-amber/20 mb-6">
            <AlertCircle className="w-4 h-4 text-pp-amber flex-shrink-0 mt-0.5" />
            <div className="text-xs text-pp-amber leading-relaxed">
              <strong>Beta Testnet:</strong> Sign-in is available during beta. Your data stays local. OAuth providers coming in v1.
            </div>
          </div>

          {/* Login options */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleLogin('twitter')}
              disabled={loading}
              className={`w-full py-3.5 px-5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-200 ${
                loading && provider === 'twitter'
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-900 hover:scale-[1.02] active:scale-[0.98] border border-gray-700'
              }`}
            >
              {loading && provider === 'twitter' ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Twitter className="w-4 h-4" fill="currentColor" />
                  Continue with X
                </>
              )}
            </button>

            <button
              onClick={() => handleLogin('github')}
              disabled={loading}
              className={`w-full py-3.5 px-5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-200 ${
                loading && provider === 'github'
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] border border-gray-700'
              }`}
            >
              {loading && provider === 'github' ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Github className="w-4 h-4" />
                  Continue with GitHub
                </>
              )}
            </button>

            <div className="relative flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-pp-border" />
              <span className="text-xs text-pp-muted">or</span>
              <div className="flex-1 h-px bg-pp-border" />
            </div>

            <Link
              to="/beta"
              className="w-full py-3.5 px-5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 border border-pp-border text-pp-text-dim hover:text-pp-text hover:border-pp-purple/40 hover:scale-[1.02] transition-all duration-200"
            >
              Try without signing in
            </Link>
          </div>

          {/* Privacy note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-pp-muted">
            <Lock className="w-3 h-3" />
            <span>Your prompts never leave your device</span>
          </div>
        </div>

        <p className="text-center text-xs text-pp-muted mt-4">
          By continuing, you agree that this is just for fun and your prompts are chaotic.
        </p>
      </div>
    </div>
  )
}
