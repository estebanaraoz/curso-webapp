import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { useAuthStore } from '../store/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const { isLogged, user, logout } = useAuthStore()
  const [open, setOpen] = useState(false)
  const exampleUser = { name: 'Mariana' }
  const name = (user as { name?: string } | null)?.name ?? exampleUser.name

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpen(false)
  }

  const toggleMenu = () => setOpen(!open)

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 text-sm">
      <div className="flex items-center p-4 sm:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menú" className="mr-auto">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        <DarkModeToggle />
      </div>
      <div className={`${open ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-t sm:border-none`}>
        <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/cursos" className="block" onClick={() => setOpen(false)}>Cursos</Link>
        <Link to="/foro" className="block" onClick={() => setOpen(false)}>Foro</Link>
        {isLogged && (
          <>
            <Link to="/dashboard" className="block" onClick={() => setOpen(false)}>Mis cursos</Link>
            <Link to="/perfil" className="block" onClick={() => setOpen(false)}>Perfil</Link>
          </>
        )}
        <div className="sm:ml-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          {isLogged ? (
            <>
              <span>Hola, {name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate('/login')
                setOpen(false)
              }}
              className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Ingresar
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
