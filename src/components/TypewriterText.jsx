import { useState, useEffect } from 'react'

export default function TypewriterText({ words, className = '', speed = 80, pause = 2000 }) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    if (waiting) return

    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentWord.length) {
          setDisplayed(currentWord.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setWaiting(true)
          setTimeout(() => {
            setWaiting(false)
            setDeleting(true)
          }, pause)
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentWord.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause, waiting])

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink text-pp-purple">|</span>
    </span>
  )
}
