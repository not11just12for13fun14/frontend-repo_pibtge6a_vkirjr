import { motion } from 'framer-motion'
import { Rocket, Users, Sparkles } from 'lucide-react'

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-300/30 via-fuchsia-300/20 to-indigo-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="flex items-center gap-2 text-cyan-600 font-medium">
          <Sparkles className="h-5 w-5" />
          <span>Team Dashboard</span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[2fr,1fr] items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Satu Tim, Satu Irama.
              <span className="block bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">Dashboard yang hidup.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-2xl text-lg text-slate-600"
            >
              Pantau energi tim, progres tugas, dan highlight skill tiap anggota dalam tampilan yang interaktif dan penuh animasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 text-white px-4 py-2 font-semibold shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/40 active:scale-[0.98] transition">
                <Rocket className="h-4 w-4" /> Mulai Ngegas
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-800 px-4 py-2 font-semibold border border-slate-200 hover:bg-slate-50 transition">
                <Users className="h-4 w-4" /> Lihat Tim
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-100 via-white to-indigo-100 ring-1 ring-slate-200/60 p-3">
              <div className="h-full w-full rounded-xl bg-white ring-1 ring-slate-200/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
