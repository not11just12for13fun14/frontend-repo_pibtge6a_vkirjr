import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { Star, Github, Linkedin } from 'lucide-react'
import { useEffect } from 'react'

// Fancy interactive team member card with 3D tilt, glare and confetti stars
export default function TeamCard({ name, role, avatar, color = '#06b6d4', skills = [], github, linkedin }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const r = useMotionValue(0)

  const background = useMotionTemplate`radial-gradient(300px 200px at ${x}px ${y}px, ${color}22, transparent 60%)`
  const rotate = useMotionTemplate`rotateX(${y.get() / 30}deg) rotateY(${-x.get() / 30}deg)`

  useEffect(() => {
    const controls = animate(r, 360, { duration: 10, ease: 'linear', repeat: Infinity })
    return () => controls.stop()
  }, [r])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    x.set(px)
    y.set(py)
  }

  const onLeave = () => {
    animate(x, 160, { duration: 0.4 })
    animate(y, 110, { duration: 0.4 })
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 1000,
      }}
      className="group"
    >
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: 0, rotateY: 0 }}
        className="relative rounded-2xl ring-1 ring-slate-200/60 bg-white/80 backdrop-blur p-4 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
      >
        <motion.div
          style={{ background }}
          className="absolute inset-0 opacity-100 transition-opacity duration-300"
        />

        <div className="relative z-10 flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-xl object-cover ring-1 ring-slate-200"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 text-lg">{name}</h3>
            <p className="text-sm text-slate-600">{role}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
                <Github className="h-5 w-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Orbiting stars */}
        <motion.div
          style={{ rotate: r }}
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-yellow-400/80"
        >
          <Star className="absolute h-5 w-5 left-6 top-0" />
          <Star className="absolute h-4 w-4 left-2 top-10" />
          <Star className="absolute h-3 w-3 left-10 top-8" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
