import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Trophy, Receipt, ChevronDown } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'
import ArchetypeCard from '../components/ArchetypeCard.jsx'
import SEO from '../components/SEO.jsx'
import { ARCHETYPES } from '../lib/archetypes.js'

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '📋',
    title: 'Paste your prompts',
    desc: 'Drop any prompts you have typed into an AI — Claude, ChatGPT, Gemini, whatever. Raw and unfiltered.',
  },
  {
    step: '02',
    icon: '🔬',
    title: 'We analyze the habits',
    desc: 'PromptPlay reads your word patterns, question frequency, context depth, and chaos level.',
  },
  {
    step: '03',
    icon: '🧾',
    title: 'Get your receipt',
    desc: 'Printed hot and fresh — your archetype, stats, and a roast you did not ask for but 100% deserve.',
  },
  {
    step: '04',
    icon: '📤',
    title: 'Share the roast',
    desc: 'Copy your receipt and send it to anyone who deserves to know you are The Vibe Coder.',
  },
]

const STATS = [
  { value: '8', label: 'Archetypes', suffix: '' },
  { value: '2.4K', label: 'Receipts generated', suffix: '+' },
  { value: '94', label: 'Accuracy rate', suffix: '%' },
  { value: '0', label: 'Therapy sessions needed', suffix: '' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PromptPlay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PromptPlay analyzes your AI prompting habits and gives you a receipt — your archetype, stats, and a roast. It reads the patterns in how you write prompts and maps them to one of eight distinct prompter personalities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does PromptPlay send my prompts anywhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All analysis runs in your browser using JavaScript. Your prompts never leave your device during the beta.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many AI prompting archetypes are there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 8 distinct AI prompting archetypes: The Vibe Coder, The Overthinker, The Lazy Genius, The Context Hoarder, The Micromanager, The Serial Prompter, The Philosopher, and The Debugger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PromptPlay free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, PromptPlay is completely free during beta. No account or install needed — it runs entirely in your browser.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <SEO
        title="What Kind of AI Prompter Are You? – Discover Your Archetype"
        description="PromptPlay analyzes your AI prompts and reveals your prompting archetype. Are you a Vibe Coder, Overthinker, or Lazy Genius? Get your receipt, get roasted. Free during beta."
        canonical="/"
        jsonLd={jsonLd}
      />
      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 grid-bg noise-bg overflow-hidden">
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pp-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-pp-amber/8 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pp-purple/10 border border-pp-purple/30 text-pp-purple-light text-xs font-semibold font-mono mb-6 animate-in">
              <span className="w-1.5 h-1.5 rounded-full bg-pp-green animate-pulse" />
              BETA TESTNET LIVE
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-6xl font-bold text-pp-text leading-tight mb-4 animate-in animate-in-delay-1">
              <span className="text-pp-text-dim font-mono text-2xl sm:text-3xl block mb-2">&gt;_</span>
              what kind of{' '}
              <span className="text-gradient">
                <TypewriterText
                  words={['prompter', 'coder', 'overthinker', 'genius']}
                  speed={70}
                  pause={2200}
                />
              </span>{' '}
              are you?
            </h1>

            <p className="text-pp-text-dim text-base sm:text-lg leading-relaxed mb-8 animate-in animate-in-delay-2">
              PromptPlay reads your AI prompts and prints your habits as a receipt — your stats, archetype, and a roast you 100% earned. Then share it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-in animate-in-delay-3">
              <Link to="/beta" className="btn-primary text-base px-8 py-3.5 glow-purple">
                <Zap className="w-4 h-4" fill="currentColor" />
                Try Beta Testnet
              </Link>
              <Link to="/receipt" className="btn-secondary text-base px-8 py-3.5">
                <Receipt className="w-4 h-4" />
                See an Example
              </Link>
            </div>

            <p className="mt-4 text-xs text-pp-muted animate-in animate-in-delay-4">
              free during beta &middot; no install needed &middot; runs in your browser
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-pp-muted animate-bounce">
            <ChevronDown className="w-4 h-4" />
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 px-4 sm:px-6 border-t border-pp-border" aria-label="PromptPlay statistics">
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pp-text font-mono">
                  {s.value}<span className="text-pp-purple">{s.suffix}</span>
                </div>
                <div className="text-xs text-pp-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-pp-border" aria-labelledby="how-it-works-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <div className="text-xs font-mono text-pp-purple uppercase tracking-widest mb-3">How it works</div>
              <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl font-bold text-pp-text">four steps to your receipt</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map(step => (
                <div key={step.step} className="card-dark rounded-2xl p-5 border border-pp-border hover:border-pp-purple/40 transition-colors">
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <div className="text-xs font-mono text-pp-muted mb-1">{step.step}</div>
                  <h3 className="font-semibold text-pp-text mb-2 text-sm">{step.title}</h3>
                  <p className="text-pp-text-dim text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Archetypes preview */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-pp-card/20 border-t border-pp-border" aria-labelledby="archetypes-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <div className="text-xs font-mono text-pp-amber uppercase tracking-widest mb-3">Archetypes</div>
              <h2 id="archetypes-heading" className="text-2xl sm:text-3xl font-bold text-pp-text">which one is you?</h2>
              <p className="text-pp-text-dim text-sm mt-2 max-w-md mx-auto">
                Eight distinct prompting personalities. Painfully accurate. Lovingly brutal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ARCHETYPES.slice(0, 4).map(a => (
                <ArchetypeCard key={a.id} archetype={a} compact />
              ))}
            </div>

            <div className="text-center mt-6">
              <Link to="/beta" className="btn-secondary inline-flex">
                <Sparkles className="w-4 h-4" />
                Find yours
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-pp-border" aria-labelledby="faq-heading">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-xs font-mono text-pp-green uppercase tracking-widest mb-3">FAQ</div>
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-pp-text">frequently asked</h2>
            </div>
            <dl className="space-y-4">
              {[
                { q: 'What is PromptPlay?', a: 'PromptPlay analyzes your AI prompting habits and gives you a receipt — your archetype, stats, and a roast. It reads the patterns in how you write prompts and maps them to one of eight distinct prompter personalities.' },
                { q: 'Does it send my prompts anywhere?', a: 'No. All analysis runs entirely in your browser using JavaScript. Your prompts never leave your device during the beta. We take that seriously.' },
                { q: 'How many archetypes are there?', a: 'There are 8 distinct AI prompting archetypes: Vibe Coder, Overthinker, Lazy Genius, Context Hoarder, Micromanager, Serial Prompter, Philosopher, and Debugger.' },
                { q: 'Is PromptPlay free?', a: 'Yes — completely free during beta. No account or install needed.' },
              ].map(({ q, a }) => (
                <div key={q} className="card-dark rounded-2xl p-5 border border-pp-border">
                  <dt className="font-semibold text-pp-text text-sm mb-2">{q}</dt>
                  <dd className="text-pp-text-dim text-sm leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-pp-border">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-4xl mb-4 animate-float">🧾</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-pp-text mb-3">
              your receipt is waiting
            </h2>
            <p className="text-pp-text-dim text-sm sm:text-base leading-relaxed mb-8">
              Beta testnet is free. No account needed. Just paste, analyze, and share the damage.
            </p>
            <Link to="/beta" className="btn-primary text-base px-8 py-3.5 glow-purple inline-flex">
              <Trophy className="w-4 h-4" />
              Get Your Receipt
            </Link>
            <p className="mt-4 text-xs text-pp-muted">
              Join 2,400+ prompters who got roasted
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
