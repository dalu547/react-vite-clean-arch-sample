import { Link, Route, Routes } from 'react-router-dom'
import Home from '@features/home/ui/Home'
import UsersPage from '@features/users/ui/UsersPage'
import NotFound from '@features/misc/NotFound'
import { ThemeToggle } from '@components/ui/theme-toggle'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
          <nav className="flex gap-4 text-sm">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
