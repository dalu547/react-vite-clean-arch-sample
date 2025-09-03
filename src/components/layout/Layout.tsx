import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { ThemeToggle } from '@components/ui/theme-toggle'

export default function Layout() {
  return (
    <div className="min-h-screen grid grid-cols-[15rem_1fr]">
      <Sidebar />
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 bg-white border-b">
          <div className="mx-auto max-w-6xl flex items-center justify-end p-3">
            <ThemeToggle />
          </div>
        </header>
        <main className="mx-auto max-w-6xl w-full p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

