import { Route, Routes } from 'react-router-dom'
import Home from '@features/home/ui/Home'
import UsersPage from '@features/users/ui/UsersPage'
import NotFound from '@features/misc/NotFound'
import Layout from '@components/layout/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
