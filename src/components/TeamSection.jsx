import { motion } from 'framer-motion'
import TeamCard from './TeamCard'

const members = [
  {
    name: 'Alya Oktaviani',
    role: 'Product Designer',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop',
    color: '#06b6d4',
    skills: ['Figma', 'Motion', 'UX Writing'],
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Bima Aryasena',
    role: 'Fullstack Engineer',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=640&auto=format&fit=crop',
    color: '#a78bfa',
    skills: ['React', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/',
  },
  {
    name: 'Citra Maharani',
    role: 'Growth Marketer',
    avatar:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=640&auto=format&fit=crop',
    color: '#f59e0b',
    skills: ['SEO', 'Analytics', 'Copywriting'],
    linkedin: 'https://www.linkedin.com/',
  },
]

export default function TeamSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tim Inti</h2>
          <p className="text-slate-600">3 orang, 1 misi. Bergerak cepat dengan kualitas.</p>
        </div>
        <div className="hidden md:flex gap-2 text-xs text-slate-500">
          <span className="px-2 py-1 rounded-full bg-slate-100 ring-1 ring-slate-200">Realtime vibes</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 ring-1 ring-slate-200">Motion rich</span>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <TeamCard {...m} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
