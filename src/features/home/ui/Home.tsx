import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'
import { useUIStore } from '@shared/state/ui/store'

export default function Home() {
  const { sidebarOpen, toggleSidebar } = useUIStore()
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">React + Vite + Clean Architecture</h1>
      <p className="text-gray-600">This is a minimal sample wired with routing, query, axios, zustand, RHF + Zod, and Tailwind.</p>
      <div className="flex gap-3">
        <Button onClick={toggleSidebar}>{sidebarOpen ? 'Close' : 'Open'} UI State</Button>
        <Button variant="outline" asChild><Link to="/users">Go to Users</Link></Button>
      </div>
    </section>
  )
}
