import HeaderHero from './components/HeaderHero'
import StatsStrip from './components/StatsStrip'
import TeamSection from './components/TeamSection'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
      <CursorGlow />

      <HeaderHero />

      <div className="mt-4">
        <StatsStrip />
      </div>

      <TeamSection />

      <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-500">
        Built with love — made for teams that move fast.
      </footer>
    </div>
  )
}

export default App
