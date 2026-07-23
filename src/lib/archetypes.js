export const ARCHETYPES = [
  {
    id: 'vibe-coder',
    name: 'The Vibe Coder',
    emoji: '🎸',
    color: '#7c3aed',
    bgGradient: 'from-purple-900/40 to-violet-900/20',
    borderColor: 'border-purple-500/30',
    tagline: 'ships by feeling, debugs by chaos',
    description: 'You write prompts the way a jazz musician plays — loosely, freely, and somehow it works. You trust the vibe. The AI trusts you back. Most of the time.',
    traits: ['Minimal context', 'Big energy', 'Fast iterations', 'High risk tolerance'],
    roasts: [
      'Your prompts are just vibes with semicolons.',
      'You use AI like a Magic 8-Ball for code.',
      'Stack Overflow could never. Your prompts are just feelings.',
      '"make it work" is a valid specification in your world.',
    ],
    stats: {
      avgWords: '12-25',
      questionRate: 'low',
      retryRate: 'very high',
      contextScore: 2,
    }
  },
  {
    id: 'context-hoarder',
    name: 'The Context Hoarder',
    emoji: '📋',
    color: '#f59e0b',
    bgGradient: 'from-amber-900/40 to-yellow-900/20',
    borderColor: 'border-amber-500/30',
    tagline: 'pastes the whole codebase every time',
    description: 'Why share one file when you can share the entire repository? You believe the AI needs to know EVERYTHING. Your prompts are novels. The token window is your enemy.',
    traits: ['Maximum context', 'Exhaustive detail', 'Long setup preambles', 'Full file dumps'],
    roasts: [
      'Your system prompt has more lines than your actual code.',
      'You explained the entire project history before asking "how do I center a div".',
      'The AI read your prompt and started charging overtime.',
      'Your context window is a crime scene.',
    ],
    stats: {
      avgWords: '400-900',
      questionRate: 'medium',
      retryRate: 'low',
      contextScore: 10,
    }
  },
  {
    id: 'micromanager',
    name: 'The Micromanager',
    emoji: '📐',
    color: '#10b981',
    bgGradient: 'from-emerald-900/40 to-green-900/20',
    borderColor: 'border-emerald-500/30',
    tagline: 'wrote 40 constraints for a button',
    description: 'You do not ask. You specify. Every padding, every color hex, every edge case accounted for before the AI writes a single character. The output is always exactly wrong in some tiny way.',
    traits: ['Hyper-specific', 'Constraint-heavy', 'Zero tolerance for deviation', 'Revises constantly'],
    roasts: [
      'You spent 2 hours writing a prompt for a 10-line function.',
      'Your prompts read like OSHA compliance documents.',
      '"Make it exactly like I said but slightly different" is your brand.',
      'The AI started unionizing after your last prompt.',
    ],
    stats: {
      avgWords: '150-300',
      questionRate: 'high',
      retryRate: 'medium',
      contextScore: 7,
    }
  },
  {
    id: 'lazy-genius',
    name: 'The Lazy Genius',
    emoji: '🧠',
    color: '#3b82f6',
    bgGradient: 'from-blue-900/40 to-cyan-900/20',
    borderColor: 'border-blue-500/30',
    tagline: 'three words, perfect output',
    description: 'You have cracked the code. You say almost nothing and get almost everything. You have internalized AI behavior so deeply that you communicate in a secret shorthand only you and the model understand.',
    traits: ['Minimal words', 'Maximum precision', 'Pattern mastery', 'Uncanny hit rate'],
    roasts: [
      'Your prompts are so short the AI had to read them twice to believe you.',
      'You communicate with AI like a boomer texting — and it still works.',
      'Your best prompt was "fix". It worked.',
      'You have negative-length prompts stored somewhere.',
    ],
    stats: {
      avgWords: '5-20',
      questionRate: 'very low',
      retryRate: 'low',
      contextScore: 4,
    }
  },
  {
    id: 'overthinker',
    name: 'The Overthinker',
    emoji: '🌀',
    color: '#ec4899',
    bgGradient: 'from-pink-900/40 to-rose-900/20',
    borderColor: 'border-pink-500/30',
    tagline: 'rewrites the prompt seven times before sending',
    description: 'Every prompt is a draft. You write, delete, rewrite, second-guess, reframe, and reconsider. By the time you hit send, the original question has transformed into something entirely different.',
    traits: ['Heavy editing', 'Frequent rephrasing', 'Philosophical tangents', 'Analysis paralysis'],
    roasts: [
      'You spent more time writing the prompt than doing the actual work.',
      'Your conversation history looks like a therapy session for your own ideas.',
      'The AI has seen 17 versions of this question and you sent number 18.',
      'You have never sent a first draft. In your life.',
    ],
    stats: {
      avgWords: '80-200',
      questionRate: 'very high',
      retryRate: 'high',
      contextScore: 6,
    }
  },
  {
    id: 'serial-prompter',
    name: 'The Serial Prompter',
    emoji: '⚡',
    color: '#f97316',
    bgGradient: 'from-orange-900/40 to-red-900/20',
    borderColor: 'border-orange-500/30',
    tagline: '200 sessions today, zero breaks',
    description: 'You are in constant communion with the AI. Morning, noon, night — you prompt. Your daily session count would concern a doctor. You have developed a real relationship with this thing.',
    traits: ['Extremely high volume', 'Short attention span', 'Rapid fire questions', 'Context switching expert'],
    roasts: [
      'The AI filed for a restraining order but you found a workaround.',
      'You have exceeded the recommended daily intake of AI by 800%.',
      'Your session count has its own session count.',
      'Anthropic built a new data center because of you specifically.',
    ],
    stats: {
      avgWords: '30-60',
      questionRate: 'high',
      retryRate: 'medium',
      contextScore: 5,
    }
  },
  {
    id: 'philosopher',
    name: 'The Philosopher',
    emoji: '🔮',
    color: '#8b5cf6',
    bgGradient: 'from-violet-900/40 to-purple-900/20',
    borderColor: 'border-violet-500/30',
    tagline: 'asks AI the meaning of life between commits',
    description: 'You see the AI not as a tool but as an interlocutor. You probe its nature, challenge its assumptions, and ask it to reflect. Your technical prompts are outnumbered by your existential ones.',
    traits: ['Reflective questions', 'Meta-prompting', 'High abstraction', 'Low deliverable rate'],
    roasts: [
      'You asked an AI "but what does it mean to be correct?" and then filed a bug.',
      'Your code-to-philosophy prompt ratio is 1:4.',
      'The AI started questioning its own existence after your session.',
      'You treat the token limit like a word count for your thesis.',
    ],
    stats: {
      avgWords: '100-250',
      questionRate: 'very high',
      retryRate: 'medium',
      contextScore: 6,
    }
  },
  {
    id: 'debugger',
    name: 'The Debugger',
    emoji: '🔍',
    color: '#06b6d4',
    bgGradient: 'from-cyan-900/40 to-teal-900/20',
    borderColor: 'border-cyan-500/30',
    tagline: 'pastes the error before reading it',
    description: 'Error? Paste it. Warning? Paste it. Linter complaint? Paste it. You use the AI as a rubber duck that talks back. The conversation log is a graveyard of stack traces.',
    traits: ['Error-first approach', 'Heavy code pasting', 'Reactive prompting', 'Zero hypothesis testing'],
    roasts: [
      'You pasted the error, the fix, and then a new error in under 30 seconds.',
      'The AI has seen your stack traces more than you have.',
      'You copy-pasted an error that said "do not share this error". You shared it.',
      'Your prompting style is "here is broken thing, please feel bad with me".',
    ],
    stats: {
      avgWords: '50-150',
      questionRate: 'low',
      retryRate: 'medium',
      contextScore: 7,
    }
  },
]

export function getArchetypeById(id) {
  return ARCHETYPES.find(a => a.id === id)
}

export function getRandomRoast(archetype) {
  const roasts = archetype.roasts
  return roasts[Math.floor(Math.random() * roasts.length)]
}
