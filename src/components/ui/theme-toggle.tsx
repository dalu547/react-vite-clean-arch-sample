import { Button } from './button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return (
    <Button variant="outline" size="sm" onClick={() => setDark((d) => !d)}>
      {dark ? 'Light' : 'Dark'}
    </Button>
  )
}
