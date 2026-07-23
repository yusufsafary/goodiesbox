import { Link } from 'react-router-dom'
import { Zap, Heart, Github, Twitter, ArrowRight } from 'lucide-react'
import ArchetypeCard from '../components/ArchetypeCard.jsx'
import { ARCHETYPES } from '../lib/archetypes.js'

const FAQ = [
  {
    q: 'What is PromptPlay?',
    a: 'PromptPlay analyzes your AI prompting habits and gives you a receipt — your archetype, stats, and a roast. It reads the patterns in how you write prompts and maps them to one of eight distinct prompter personalities.',
  },
  {
    q: 'Does it send my prompts anywhere?',
    a: 'No. All analysis runs in your browser using JavaScript. Your prompts never leave your device during the beta. We take that seriously.',
  },
  {
    q: 'What is the Beta Testnet?',
    a: 'Beta Testnet is the current phase of PromptPlay. It\'s free, runs fully in-browser, and lets you generate receipts without creating an account. Future versions will add persistent profiles, sharing, and leaderboards backed by a real backend.',
  },
  {
    q: 'How accurate is the archetype classification?',
    a: 'Scarily accurate if you give it enough prompts. With 20+ words it makes reasonable inferences. With 200+ words it gets eerie. With 1000+ words it knows you better than you know yourself.',
  },
  {
    q: 'Can I get a different archetype?',
    a: 'The archetype reflects the prompts you paste. Different prompts, different archetype. Some people are multiple archetypes depending on what they\'re building.',
  },
  {
    q: 'When does v1 launch?',
    a: 'We\'re heads-down on the beta. Sign up for updates via X or GitHub. The roadmap includes persistent accounts, team receipts, and prompt coaching based on your archetype.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-pp-purple items-center justify-center glow-purple mb-6">
            <Zap className="w-9 h-9 text-white" fill="currentColor" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-pp-text mb-4">
            about PromptPlay
          </h1>
          <p className="text-pp-text-dim text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A tool for the AI-native generation. We built it because every prompter has a personality and most people have no idea what theirs is.
          </p>
        </div>

        {/* Origin */}
        <div className="card-dark rounded-2xl p-6 mb-6 border border-pp-purple/20 animate-in animate-in-delay-1">
          <h2 className="font-bold text-pp-text mb-3 text-lg">why this exists</h2>
          <div className="text-pp-text-dim text-sm leading-relaxed space-y-3">
            <p>
              Every time someone talks to an AI, they leave a fingerprint. Some people write novels. Some write two words. Some paste their entire repo and hope for the best. Some ask "why" after every answer.
            </p>
            <p>
              We became obsessed with these patterns. We started categorizing our own prompts and realized: there are types. Distinct, recognizable, often embarrassing types. And once you see yours, you can't unsee it.
            </p>
            <p>
              PromptPlay turns that mirror into a receipt. A document. Proof of your prompting personality, stamped and shareable.
            </p>
          </div>
        </div>

        {/* Archetypes */}
        <div className="mb-10 animate-in animate-in-delay-2">
          <h2 className="font-bold text-pp-text mb-1 text-lg">the 8 archetypes</h2>
          <p className="text-pp-text-dim text-sm mb-5">Every prompter falls into one of these. Some fall into several, which is its own archetype.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ARCHETYPES.map(a => (
              <ArchetypeCard key={a.id} archetype={a} compact />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10 animate-in animate-in-delay-3">
          <h2 className="font-bold text-pp-text mb-5 text-lg">questions</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <div key={i} className="card-dark rounded-xl p-4 hover:border-pp-purple/20 transition-colors">
                <div className="font-semibold text-pp-text text-sm mb-2">{item.q}</div>
                <p className="text-pp-text-dim text-xs leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="card-dark rounded-2xl p-6 text-center animate-in animate-in-delay-4 border border-pp-border/80">
          <h2 className="font-bold text-pp-text mb-2">open source</h2>
          <p className="text-pp-text-dim text-sm mb-5">
            PromptPlay is open source. The beta runs entirely in your browser. See the code on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/yusufsafary/goodiesbox" target="_blank" rel="noopener noreferrer"
              className="btn-secondary inline-flex">
              <Github className="w-4 h-4" />
              GitHub Repo
            </a>
            <Link to="/beta" className="btn-primary inline-flex">
              <Zap className="w-4 h-4" fill="currentColor" />
              Try Beta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-pp-muted mt-6">
          Built with <Heart className="w-3 h-3 inline text-red-400" fill="currentColor" /> for the prompting community.
        </p>
      </div>
    </div>
  )
}
