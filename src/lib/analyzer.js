import { ARCHETYPES } from './archetypes.js'

export function analyzePrompts(text) {
  const lines = text.split('\n').filter(l => l.trim().length > 0)
  const words = text.split(/\s+/).filter(w => w.length > 0)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)

  // Word count stats
  const totalWords = words.length
  const avgWordsPerLine = lines.length > 0 ? Math.round(totalWords / lines.length) : 0

  // Question frequency
  const questionCount = (text.match(/\?/g) || []).length
  const questionRate = lines.length > 0 ? questionCount / lines.length : 0

  // Code blocks / technical content
  const codeBlockCount = (text.match(/```/g) || []).length / 2
  const hasCodeBlocks = codeBlockCount > 0
  const codeLines = lines.filter(l => l.includes('```') || l.startsWith('  ') || l.startsWith('\t')).length

  // Context indicators
  const longPrompts = lines.filter(l => l.split(/\s+/).length > 50).length
  const shortPrompts = lines.filter(l => l.split(/\s+/).length < 10).length
  const pasteIndicators = (text.match(/error|Error|ERROR|exception|stack trace|undefined|null|failed|TypeError|SyntaxError/g) || []).length
  const philosophyWords = (text.match(/\b(why|meaning|think|feel|believe|consciousness|exist|purpose|nature|essence|truly|really|fundamentally)\b/gi) || []).length
  const constraintWords = (text.match(/\b(must|should|never|always|exactly|only|specifically|ensure|make sure|require|don't|do not)\b/gi) || []).length
  const editingPatterns = (text.match(/\b(actually|wait|no|sorry|let me|rephrase|I mean|correction|scratch that|instead)\b/gi) || []).length

  // Score each archetype
  const scores = {}

  // Vibe Coder: short prompts, low context
  scores['vibe-coder'] = shortPrompts * 3 + (avgWordsPerLine < 20 ? 5 : 0) + (questionRate < 0.2 ? 3 : 0)

  // Context Hoarder: very long prompts, lots of code
  scores['context-hoarder'] = longPrompts * 4 + (codeBlockCount > 2 ? 8 : 0) + (totalWords > 500 ? 6 : 0)

  // Micromanager: constraint words, medium length
  scores['micromanager'] = constraintWords * 2 + (avgWordsPerLine > 40 && avgWordsPerLine < 150 ? 5 : 0)

  // Lazy Genius: very short, diverse topics
  scores['lazy-genius'] = (avgWordsPerLine < 12 ? 10 : 0) + shortPrompts * 2

  // Overthinker: editing patterns, questions, medium length
  scores['overthinker'] = editingPatterns * 3 + questionCount * 2 + (avgWordsPerLine > 30 ? 3 : 0)

  // Serial Prompter: many short lines
  scores['serial-prompter'] = (lines.length > 10 ? 8 : 0) + shortPrompts * 2 + (avgWordsPerLine < 30 ? 4 : 0)

  // Philosopher: philosophy words, questions
  scores['philosopher'] = philosophyWords * 3 + questionCount * 2 + (avgWordsPerLine > 60 ? 3 : 0)

  // Debugger: error indicators, code blocks
  scores['debugger'] = pasteIndicators * 3 + (hasCodeBlocks ? 6 : 0) + codeLines

  // Find winner
  let topArchetypeId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]

  // If all scores are low, use word count as tiebreaker
  if (Math.max(...Object.values(scores)) < 3) {
    if (avgWordsPerLine < 15) topArchetypeId = 'lazy-genius'
    else if (avgWordsPerLine > 100) topArchetypeId = 'context-hoarder'
    else topArchetypeId = 'vibe-coder'
  }

  const archetype = ARCHETYPES.find(a => a.id === topArchetypeId)

  // Generate stats
  const sessionCount = Math.max(1, Math.floor(lines.length * 0.7))
  const tokenEstimate = Math.round(totalWords * 1.3)
  const avgSessionLength = Math.round(avgWordsPerLine * 4.7)
  const roastIndex = Math.floor(Math.random() * archetype.roasts.length)

  return {
    archetype,
    roast: archetype.roasts[roastIndex],
    stats: {
      totalWords,
      avgWordsPerLine,
      sessionCount,
      tokenEstimate,
      avgSessionLength,
      questionRate: Math.round(questionRate * 100),
      hasCodeBlocks,
      codeBlockCount: Math.round(codeBlockCount),
    },
    scores,
    receiptId: generateReceiptId(),
    timestamp: new Date().toISOString(),
  }
}

function generateReceiptId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let id = 'PP-'
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

export function formatReceiptDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    month: '2-digit', day: '2-digit', year: 'numeric'
  }) + ' ' + d.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: false
  })
}
