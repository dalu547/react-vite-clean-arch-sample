import { NavLink } from 'react-router-dom'

const linkBase = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm'
const linkActive = 'bg-brand/10 text-brand font-medium border-l-2 border-brand'
const linkInactive = 'text-gray-800 hover:bg-black/5'

export default function Sidebar() {
  return (
    <aside className="h-full w-60 border-r bg-white">
      <div className="px-3 py-4">
        <div className="px-2 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Navigation
        </div>
        <nav className="space-y-1">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            <span>Users</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}
