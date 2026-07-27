import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 – Page Not Found"
        description="The page you're looking for doesn't exist. Head back to PromptPlay and discover your AI prompting archetype."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-4 animate-float">🧾</div>
          <div className="font-mono text-pp-purple text-sm mb-2">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-pp-text mb-3">
            this page doesn't exist
          </h1>
          <p className="text-pp-text-dim text-sm mb-8 leading-relaxed">
            Whoever prompted this route... that's a new archetype. The 404 Prompter. Very rare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-secondary inline-flex">
              <ArrowLeft className="w-4 h-4" />
              Go Home
            </Link>
            <Link to="/beta" className="btn-primary inline-flex">
              <Zap className="w-4 h-4" fill="currentColor" />
              Try Beta
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
