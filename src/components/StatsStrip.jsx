import { motion } from 'framer-motion'
import { Activity, Clock4, Flame, Trophy } from 'lucide-react'

export default function StatsStrip() {
  const items = [
    { icon: Activity, label: 'Active Sprints', value: '3' },
    { icon: Clock4, label: 'Avg. Cycle', value: '4.2d' },
    { icon: Flame, label: 'Velocity', value: '128' },
    { icon: Trophy, label: 'Ship Rate', value: '92%' },
  ]
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-slate-200/60 p-4 flex items-center gap-3 shadow-sm"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-100 to-indigo-100 grid place-items-center text-cyan-700 ring-1 ring-slate-200/60">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">{it.label}</div>
              <div className="text-xl font-bold text-slate-900">{it.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
