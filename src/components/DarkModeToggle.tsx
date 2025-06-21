import { useEffect, useState } from 'react'

interface Props {
  className?: string
}

export default function DarkModeToggle({ className = '' }: Props) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [enabled])

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`px-4 py-2 border rounded min-w-[6rem] text-sm ${className}`}
    >
      {enabled ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}
