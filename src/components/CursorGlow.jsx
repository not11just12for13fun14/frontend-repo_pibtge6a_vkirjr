import { useEffect, useState } from 'react'

// A soft, animated radial glow that follows the cursor
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [visible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: 400,
          height: 400,
          background:
            'radial-gradient(120px 120px at center, rgba(56,189,248,0.35), rgba(56,189,248,0.12) 40%, rgba(0,0,0,0) 70%)',
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  )
}
